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

import { Book } from 'lucide-react';

const components = [
  {
    title: 'Blogs',
    href: '/blog',
    description: 'Discover ideas and stories by Siam Mehraf.',
  },
  {
    title: 'Thriller',
    href: '/thrillers',
    description: 'Dive into exciting tales by Siam Mehraf.',
  },
  {
    title: 'Writings',
    href: '/writings',
    description: 'Explore creative writings by Siam Mehraf.',
  },
  {
    title: 'Discussions',
    href: '/discussions',
    description: 'Read thoughts and analyses on various topics by Siam Mehraf.',
  },
  {
    title: 'Reviews',
    href: '/review',
    description: 'Read honest reviews by Siam Mehraf.',
  },
  {
    title: 'Books',
    href: '/books',
    description: 'Check out books penned by Siam Mehraf.',
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
                  <Link href="/blog">Blogs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Works</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/books">
                          <div className="font-medium">Books</div>
                          <div className="text-muted-foreground">Browse all books penned by Siam Mehraf.</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/films">
                          <div className="font-medium">Films</div>
                          <div className="text-muted-foreground">All creative films by Siam Mehraf</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/writings">
                          <div className="font-medium">Writings</div>
                          <div className="text-muted-foreground">Read latest writings of Siam Mehraf</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/about">Know About Me</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/books">Published Books</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/films">Creative Works</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Books</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/books/onno-boshonter-shopno" className="flex flex-row items-center gap-2">
                          <Book />
                          Onno Boshonter Shopno
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/books/nefartiti" className="flex flex-row items-center gap-2">
                          <Book />
                          Nefartiti
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/books/chotushkon" className="flex flex-row items-center gap-2">
                          <Book />
                          Chotushkon
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
