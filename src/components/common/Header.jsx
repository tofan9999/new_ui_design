// "use client";

// import Link from "next/link";
// import React from "react";
// import { usePathname } from "next/navigation";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
// import { Button } from "@/components/ui/button";
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarTrigger,
// } from "@/components/ui/menubar";

// function Header() {
//   const pathname = usePathname();
//   return (
//     <section>
//       <div className="max-md:hidden flex flex-row my-3 mx-5 h-18 justify-between">
//         <div className="flex  flex-row">
//           <div className="px-3 mt-[-10px]">
//             <img
//               className=""
//               src="images/uilogo.png"
//               width={100}
//               height={70}
//               alt="img"
//             />
//           </div>
//           <div className="flex pb-4 w-full p-4 flex-row">
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <div className="flex flex-row">
//                     {/* <NavigationMenuTrigger>Home</NavigationMenuTrigger> */}
//                     <NavigationMenuLink
//                       href="/"
//                       className="cursor-pointer font-bold"
//                     >
//                       <div
//                         className={`px-3 py-4  ${
//                           pathname === "/"
//                             ? "underline underline-offset-[10px] font-bold"
//                             : ""
//                         } `}
//                       >
//                         Home
//                       </div>
//                     </NavigationMenuLink>

//                     <NavigationMenuLink
//                       href="/about"
//                       className="cursor-pointer font-bold"
//                     >
//                       <div
//                         className={`px-3 py-4  ${
//                           pathname === "/about"
//                             ? "underline underline-offset-[10px] font-bold"
//                             : ""
//                         } `}
//                       >
//                         About Us
//                       </div>
//                     </NavigationMenuLink>

//                     <NavigationMenuLink
//                       href="/services"
//                       className="cursor-pointer font-bold"
//                     >
//                       <div
//                         className={`px-3 py-4  ${
//                           pathname === "/services"
//                             ? "underline underline-offset-[10px] font-bold"
//                             : ""
//                         } `}
//                       >
//                         Services
//                       </div>
//                     </NavigationMenuLink>

//                     <NavigationMenuLink
//                       href="/Product"
//                       className="cursor-pointer font-bold"
//                     >
//                       <div
//                         className={`px-3 py-4  ${
//                           pathname === "/Products"
//                             ? "underline underline-offset-[10px] font-bold"
//                             : ""
//                         } `}
//                       >
//                         Products
//                       </div>
//                     </NavigationMenuLink>

//                     <NavigationMenuLink
//                       href="/contact"
//                       className="cursor-pointer font-bold"
//                     >
//                       <div
//                         className={`px-3 py-4  ${
//                           pathname === "/Contact"
//                             ? "underline underline-offset-[10px] font-bold"
//                             : ""
//                         } `}
//                       >
//                         Contact Us
//                       </div>
//                     </NavigationMenuLink>
//                   </div>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>
//         </div>
//         <div className="my-auto p-4">
//           <Button>Contact Us</Button>
//         </div>
//       </div>

//       <div className="md:hidden">
//         <Menubar>
//           <MenubarMenu>
//             <MenubarTrigger className="bg-white focus:bg-white">
//               <div className="">
//                 <div className="w-4 h-0.5  border-2 border-black"></div>
//                 <div className="w-4 h-0.5 border-2 my-0.5 border-black"></div>
//                 <div className="w-4 h-0.5 border-2 border-black"></div>
//               </div>
//             </MenubarTrigger>
//             <MenubarContent>
//               <MenubarItem href="/">
//                 <div
//                         className={`px-2 py-1  ${
//                           pathname === "/"
//                             ? "underline underline-offset-[10px] font-bold"
//                             : ""
//                         } `}
//                       >
//                         Home
//                       </div>
//                 </MenubarItem>
//               <MenubarItem href="/about">
//                 <div
//                         className={`px-2 py-1  ${
//                           pathname == "/about"
//                             ? "underline underline-offset-[10px] font-bold"
//                             : ""
//                         } `}
//                       >
//                         About Us
//                       </div>
//               </MenubarItem>
//               {/* <MenubarSeparator />
//               <MenubarItem>Share</MenubarItem>
//               <MenubarSeparator /> */}
//               <MenubarItem>Services</MenubarItem>
//               <MenubarItem>Product</MenubarItem>
//               <MenubarItem>Contact Us</MenubarItem>
//             </MenubarContent>
//           </MenubarMenu>
//         </Menubar>
//       </div>
//     </section>
//   );
// }

// export default Header;
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/Product", label: "Products" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <section>
      {/* Desktop Header */}
      <div className="max-md:hidden flex max-md:w-[80vw] flex-row my-3 mx-5 h-18 justify-between ">
        <div className="flex flex-row">
          <div className="px-3 mt-[-10px]">
            <img src="/images/uilogo.png" width={100} height={70} alt="Logo" />
          </div>
          <div className="flex pb-4 w-full p-4 flex-row">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-2">
                <NavigationMenuItem>
                  <div className="flex flex-row">
                    {navLinks.map((link) => (
                      <NavigationMenuLink
                        key={link.href}
                        href={link.href}
                        className="cursor-pointer font-bold"
                      >
                        <div
                          className={`px-3 py-4 ${
                            pathname === link.href
                              ? "underline underline-offset-[10px] font-bold"
                              : ""
                          }`}
                        >
                          {link.label}
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="my-auto p-4">
          <Button>Contact Us</Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden p-4 flex justify-between items-center max-md:flex-row-reverse">
        <img src="/images/uilogo.png" width={90} alt="Logo" />
        <button onClick={toggleSidebar}>
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white z-50 p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={toggleSidebar}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleSidebar}
              className={`px-2 py-1 text-lg ${
                pathname === link.href
                  ? "underline underline-offset-[6px] font-bold"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Background overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </section>
  );
}

export default Header;
