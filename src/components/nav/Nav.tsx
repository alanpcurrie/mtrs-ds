import React from 'react';
import clsx from 'clsx';

type BoxProps<T extends keyof JSX.IntrinsicElements> = {
  variant: T;
  className?: string;
  children?: React.ReactNode;
};

const Box = <T extends keyof JSX.IntrinsicElements>({
  variant,
  className,
  children,
}: BoxProps<T>) =>
  React.createElement(variant, { className: clsx(className) }, children);

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavItem = Box<'li'>({ variant: 'li', className: 'nav-item' });

const NavAnchor = () => NavItem;

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = (props: NavbarProps) => (
  <Box<'nav'> {...props} variant="nav" className="navbar">
    {props.children}
  </Box>
);

const ExampleNavbar = () => (
  <Navbar>
    <ul>
      <NavAnchor href="#">Home</NavAnchor>
      <NavAnchor href="#">About</NavAnchor>
      <NavAnchor href="#">Contact</NavAnchor>
    </ul>
  </Navbar>
);

export default ExampleNavbar;
