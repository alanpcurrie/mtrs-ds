# `mtrs-ds-library` Package

The `mtrs-ds-library` package is a component library built for React applications. It provides a collection of reusable components and utilities that can be used to enhance the user interface and functionality of your React projects.

## Key Features

- **Component Library:** The package includes a variety of pre-built components that you can easily integrate into your React applications. These components are designed to be flexible, customizable, and reusable, allowing you to create consistent and visually appealing user interfaces. The components leverage the power of Tailwind CSS and Radix UI to provide a rich set of styling options and interactive behaviors.

- **Vite Integration:** The package utilizes Vite as the build tool, providing fast and efficient development and building processes. Vite offers features like hot module replacement (HMR) for instant code updates, fast bundling, and an optimized development server for a seamless development experience.

- **TypeScript Support:** The library fully supports TypeScript, providing type definitions for all components and utilities. This enables better code quality, improved development workflows, and enhanced editor tooling with type checking and autocompletion.

- **Linting and Formatting:** The package includes ESLint integration with custom linting rules and configurations for maintaining code quality and consistency. It also integrates Prettier for automatic code formatting, ensuring consistent code style across your project.

- **Testing with Vitest:** The library is configured with Vitest for running tests and generating test coverage reports. It provides a robust testing framework that allows you to write unit tests and UI tests to ensure the reliability and stability of your components.

- **Storybook Integration:** The package includes Storybook integration, allowing you to develop and showcase your components in an isolated environment. Storybook provides a visual playground for interactive component exploration, making it easier to iterate and fine-tune your components.

## Installation

You can install the `mtrs-ds-library` package via npm by running the following command:

```shell
npm install mtrs-ds-library
```

## Usage

To use the components from the library, import the desired components into your React application and start utilizing them within your JSX code.

```jsx
import React from 'react';
import { Button, Card, TextInput } from 'mtrs-ds-library';

function App() {
  return (
    <div>
      <Card>
        <TextInput placeholder="Enter your name" />
        <Button>Submit</Button>
      </Card>
    </div>
  );
}
```

## Documentation

For detailed documentation on each component and utility provided by the `mtrs-ds-library` package, refer to the provided Markdown documentation or the inline code comments. The documentation explains the usage, props, and examples for each component, making it easier for you to integrate and customize them within your project.

---

With the `mtrs-ds-library` package, you can accelerate your React development process by utilizing a wide range of components powered by Tailwind CSS and Radix UI, leveraging TypeScript support, maintaining code quality through linting and formatting, and ensuring code reliability through testing. Start enhancing your React applications with the power of `mtrs-ds-library` today!

## Scripts

The `package.json` file includes several scripts for development, building, linting, and testing the library:

### Scripts List

- `dev` - Starts the development server using Vite.
- `build` - Builds the library using TypeScript and Vite.
- `lint` - Runs ESLint to lint the source code.
- `lint:fix` - Runs ESLint with the --fix option to automatically fix linting issues.
- `format` - Formats the source code using Prettier.
- `prepare` - Installs Husky Git hooks.
- `storybook` - Starts Storybook development server.
- `preview` - Runs the production build and previews it using Vite.
- `test` - Runs tests using Vitest.
- `test:ui` - Runs UI tests using Vitest.
- `coverage` - Generates test coverage using Vitest.
- `release` - Runs release-it to create a new release.

## Additional Information

Here are some additional details about the library:

- The library is set to be a private module (`"private": true`) in the `package.json` file.
- The library includes TypeScript typings in the `dist` folder.
- The library includes a default entry file (`src/components/index.ts`).
- The library is built in two formats: ES modules (`react-vite-library.es.js`) and UMD modules (`react-vite-library.umd.js`).
- The library includes an alias for the `@` path, which points to the `src` folder.
- The library includes configuration for Jest tests using Vitest.

Feel free to explore and utilize these scripts and additional features to enhance your development workflow with the `mtrs-ds-library` package.

Node modules may need to be built in multiple formats to cater to different consumption scenarios. Here's an explanation of why a library might provide ES modules and UMD modules:

### ES modules (ESM)

ES modules are the standardized module format introduced in ECMAScript 2015 (ES6).
ESM allows for a more modular and efficient code structure.
It supports static analysis and tree shaking, enabling bundlers like Rollup or webpack to eliminate unused code during the build process.
ESM is the recommended module format for modern JavaScript applications and is widely supported by modern browsers, Node.js, and bundlers.

### Universal Module Definition (UMD)

UMD is a module format that aims to work across different environments, including both modern browsers and older ones, as well as Node.js.
UMD modules provide a way to bundle code that is compatible with both AMD (Asynchronous Module Definition) and CommonJS module systems, as well as global variable exports.
UMD modules can be used directly in the browser without the need for a bundler.
This format is commonly used for libraries intended to be consumed in a variety of environments, supporting both older and modern JavaScript usage.

By providing both ESM and UMD formats, library authors ensure compatibility with different environments and give developers flexibility in choosing the appropriate module format for their specific use case.

Developers can choose to consume the library in different ways, such as importing the ES modules directly in a modern JavaScript application or using the UMD modules in a legacy browser or a non-module-aware environment like plain HTML script tags.
