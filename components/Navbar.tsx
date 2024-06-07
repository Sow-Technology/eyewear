"use client";

import useCart from "@/lib/hooks/useCart";

import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  // const { user } = useUser();
  const user = undefined;
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [d1, setD1] = useState(false);
  const [d2, setD2] = useState(false);
  const [d3, setD3] = useState(false);

  const [query, setQuery] = useState("");

  return (
    <div className="sticky bg-yellow-500 top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center  max-sm:px-2">
      <Link href="/" className="lg:text-3xl text-lg font-bold">
        {/* <Image src="/logo.png" alt="logo" width={130} height={100} /> */}
        EyeWear
      </Link>
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Eye Glasses
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          EyeGlasses
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed Eyeware for the daily needs.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/collections/men" title="Men">
                    Our In-house designed specially for men
                  </ListItem>
                  <ListItem href="/collections/women" title="Women">
                    {" "}
                    Our In-house designed specially for women
                  </ListItem>
                  <ListItem href="/collections/kids" title="Kids">
                    Our In-house designed specially for kids
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sunglasses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          EyeGlasses
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed Eyeware for the daily needs.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/collections/men" title="Men">
                    Our In-house designed specially for men
                  </ListItem>
                  <ListItem href="/collections/women" title="Women">
                    {" "}
                    Our In-house designed specially for women
                  </ListItem>
                  <ListItem href="/collections/kids" title="Kids">
                    Our In-house designed specially for kids
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link
                href="/collections/computer-glasses"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Computer Glasses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/collections/reading-glasses" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Reading Glasses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact Lenses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Contact Lenses
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed Eyeware for the daily needs.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/collections/men" title="Alcon">
                    Our In-house designed specially for men
                  </ListItem>
                  <ListItem href="/collections/women" title="Bousch & Lomb">
                    {" "}
                    Our In-house designed specially for women
                  </ListItem>
                  <ListItem href="/collections/kids" title="Jonson & Jonson">
                    Our In-house designed specially for kids
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-red-1 ${pathname === "/" && "text-red-1"}`}
        >
          Home
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`hover:text-red-1 ${
            pathname === "/wishlist" && "text-red-1"
          }`}
        >
          Wishlist
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-red-1 ${
            pathname === "/orders" && "text-red-1"
          }`}
        >
          Orders
        </Link>
      </div> */}

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px] bg-transparent placeholder:text-white"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <NavigationMenu>
              <NavigationMenuList className="flex-col">
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={() => setD1(!d1)}>
                    Eye Glasses
                  </NavigationMenuTrigger>
                  {d1 && (
                    // <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {/* <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Icons.logo className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              EyeGlasses
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed Eyeware for the daily needs.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li> */}
                      <ListItem href="/collections/men" title="Men">
                        Our In-house designed specially for men
                      </ListItem>
                      <ListItem href="/collections/women" title="Women">
                        {" "}
                        Our In-house designed specially for women
                      </ListItem>
                      <ListItem href="/collections/kids" title="Kids">
                        Our In-house designed specially for kids
                      </ListItem>
                    </ul>
                    // </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={() => setD2(!d2)}>
                    Sunglasses
                  </NavigationMenuTrigger>
                  {/* <NavigationMenuContent className="w-screen relative"> */}
                  {d2 && (
                    <ul className="grid gap-3 p-6 md:w-[400px]  lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {/* <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Icons.logo className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              EyeGlasses
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed Eyeware for the daily needs.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li> */}
                      <ListItem href="/collections/men" title="Men">
                        {/* Our In-house designed specially for men */}
                      </ListItem>
                      <ListItem href="/collections/women" title="Women">
                        {" "}
                        {/* Our In-house designed specially for women */}
                      </ListItem>
                      <ListItem href="/collections/kids" title="Kids">
                        {/* Our In-house designed specially for kids */}
                      </ListItem>
                    </ul>
                  )}
                  {/* </NavigationMenuContent> */}
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link
                    href="/collections/computer-glasses"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Computer Glasses
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/collections/reading-glasses"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Reading Glasses
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={() => setD3(!d3)}>
                    Contact Lenses
                  </NavigationMenuTrigger>
                  {d3 && (
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {/* <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Icons.logo className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Contact Lenses
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed Eyeware for the daily needs.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li> */}
                      <ListItem href="/collections/men" title="Alcon">
                        Our In-house designed specially for men
                      </ListItem>
                      <ListItem href="/collections/women" title="Bousch & Lomb">
                        {" "}
                        Our In-house designed specially for women
                      </ListItem>
                      <ListItem
                        href="/collections/kids"
                        title="Jonson & Jonson"
                      >
                        Our In-house designed specially for kids
                      </ListItem>
                    </ul>
                  )}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/" className="hover:text-red-1">
              Home
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-red-1"
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-red-1"
            >
              Orders
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
