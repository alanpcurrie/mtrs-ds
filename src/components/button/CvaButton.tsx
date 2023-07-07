import { type VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariants = VariantProps<typeof ButtonVariants> & {
  children?: ReactNode;
};

const ButtonVariants = cva(
  'h-fit text-white uppercase transition-colors duration-150',
  {
    variants: {
      intent: {
        primary: 'bg-green-500 hover:bg-green-600',
        secondary: 'bg-red-500 hover:bg-red-600',
        default: 'bg-gray-500 hover:bg-gray-600',
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
        large: ['text-lg', 'py-4', 'px-8'],
      },
      roundness: {
        square: 'rounded-none',
        round: 'rounded-md',
        pill: 'rounded-full',
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'medium',
      roundness: 'round',
    },
  },
);

// export const button = (variants: ButtonVariants) =>
//   twMerge(ButtonVariants(variants));

export default function CvaButton({
  intent,
  size,
  roundness,
  children,
}: ButtonVariants) {
  return (
    <button className={twMerge(ButtonVariants({ intent, size, roundness }))}>
      {children}
    </button>
  );
}
