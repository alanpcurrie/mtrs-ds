import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Footer } from '@/components/footer';

describe('Footer component', () => {
  it('renders author name and email', () => {
    const { getByText } = render(<Footer />);
    const authorElement = getByText('Author: Hege Refsnes');
    expect(authorElement).toBeDefined();
    const emailElement = getByText('hege@example.com');
    expect(emailElement).toBeDefined();
  });
});
