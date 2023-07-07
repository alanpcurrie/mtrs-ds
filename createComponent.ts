import * as fs from 'fs';
import * as path from 'path';

// Create the folder and files with the specified extensions
type FileExtension = '.tsx' | '.test.ts' | '.stories.ts';
type ContentGetter = (folderName: string) => string;

const contentLookup: Record<FileExtension, ContentGetter> = {
  '.tsx': getComponentContent,
  '.test.ts': getTestContent,
  '.stories.ts': getStoryContent,
};

// Create the folder and files with the specified extensions
function createComponentFiles(folderName: string): void {
  const folderPath: string = path.join(process.cwd(), folderName);
  fs.mkdirSync(folderPath);

  Object.keys(contentLookup).forEach((extension: string) => {
    const ext = extension as FileExtension;
    const fileName: string = `${folderName}${ext}`;
    const filePath: string = path.join(folderPath, fileName);

    const contentGetter: ContentGetter = contentLookup[ext];
    const content: string = contentGetter(folderName);

    fs.writeFileSync(filePath, content);
    console.log(`Created file: ${filePath}`);
  });
}

// Get the placeholder component structure
function getComponentContent(componentName: string): string {
  return `import React from 'react';

interface ${componentName}Props {
  // Define component props here
}

const ${componentName}: React.FC<${componentName}Props> = () => {
  // Implement component logic and JSX here
  return (
    <div>
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};`;
}

// Get the placeholder test structure
function getTestContent(componentName: string): string {
  return `import React from 'react';
import { render } from '@testing-library/react';
import ${componentName} from './${componentName}';

test('${componentName} renders without error', () => {
  render(<${componentName} />);
  // Add test assertions here
});`;
}

// Get the placeholder story structure
function getStoryContent(componentName: string): string {
  return `import React from 'react';
import ${componentName} from './${componentName}';

export default {
  title: '${componentName}',
  component: ${componentName},
};

export const Default = () => (
  <${componentName} />
);`;
}

// Append or create the index.tsx file at the root of the folder
function updateIndexFile(folderName: string): void {
  const indexPath: string = path.join(process.cwd(), 'index.tsx');
  const importStatement: string = `import ${folderName} from './${folderName}';\n`;

  if (fs.existsSync(indexPath)) {
    fs.appendFileSync(indexPath, importStatement);
    console.log(`Appended import statement to: ${indexPath}`);
  } else {
    fs.writeFileSync(indexPath, importStatement);
    console.log(`Created file: ${indexPath}`);
  }
}

// Get the folder and component name from the command line argument
const folderName: string = process.argv[2];

// Create the folder and files
createComponentFiles(folderName);

// Update the index.tsx file
updateIndexFile(folderName);

console.log(`Folder '${folderName}' with files created successfully.`);
