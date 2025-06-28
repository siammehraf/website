'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/theme-btn';
import { Sheet } from '@/components/ui/sheet';
import MobileMenu from '@/components/MobileMenu';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';

const components = [
  {
    title: 'Tech',
    href: '/blog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Thriller',
    href: '/blog',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/blog',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/blog',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/blog',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/blog',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

export default function Navbar() {
  // // Nav Loader Logics
  // const [progress, setProgress] = useState(0);
  // const pathname = usePathname();

  // useEffect(() => {
  //   setProgress(20);
  //   setTimeout(() => setProgress(40), 100);
  //   setTimeout(() => setProgress(100), 400);
  // }, [pathname]);

  // useEffect(() => {
  //   setTimeout(() => setProgress(0), 50);
  // }, []);

  return (
    // Nav Loader
    <nav className="sticky top-0 z-50 bg-background/50 backdrop-blur border-b border-gray-200 dark:border-gray-700 transition-colors duration-500">
      {/* <LoadingBar color="#950606" progress={progress} onLoaderFinished={() => setProgress(0)} /> */}
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo / Brand */}
        <Link href="/">
          <div className="text-lg font-bold cursor-pointer select-none">Siam Mehraf</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                          href="/">
                          <div className="mt-4 mb-2 text-lg font-medium">Siam Mehraf</div>
                          <p className="text-muted-foreground text-sm leading-tight">Author | Storyteller</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about" title="Introduction">
                      Siam Mehraf is a Bangladeshi Author, Screenwriter, Film-maker.
                    </ListItem>
                    <ListItem href="/about" title="My Passion">
                      I am passionate about literature, writing, cinema, acting & coding!
                    </ListItem>
                    <ListItem href="/about" title="Personal Goals">
                      Contribute to the world with my knowledge and skills.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Writings</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>List</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">
                          <div className="font-medium">Components</div>
                          <div className="text-muted-foreground">Browse all components in the library.</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">
                          <div className="font-medium">Documentation</div>
                          <div className="text-muted-foreground">Learn how to use the library.</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">
                          <div className="font-medium">Blog</div>
                          <div className="text-muted-foreground">Read our latest blog posts.</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">Components</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Documentation</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Blocks</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex flex-row items-center gap-2">
                          <CircleHelpIcon />
                          Backlog
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex flex-row items-center gap-2">
                          <CircleIcon />
                          To Do
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="flex flex-row items-center gap-2">
                          <CircleCheckIcon />
                          Done
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>

        {/* Mobile menu + theme toggle */}
        <MobileMenu />
      </div>
    </nav>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
