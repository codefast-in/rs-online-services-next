"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";
import {User} from "@nextui-org/user";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import {link as linkStyles} from "@nextui-org/theme";
import {Listbox, ListboxItem} from "@nextui-org/listbox";
import {Badge} from "@nextui-org/badge";
import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

// import {Logo} from "@/assets/logo/logo-icon.png";
import Image from "next/image";
import {
  LocalMallRounded,
  LogoutRounded,
  Person2Rounded,
  ShoppingCartRounded,
  SpaceDashboardRounded,
  WalletRounded,
} from "@mui/icons-material";
import Login from "./myComponents/loginModal";
import UserRegistration from "./myComponents/userRegistrationModal";
const logo = require("@/assets/logo/logo-icon.png");

export const Navbar = ({login}: any) => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      //   endContent={
      //     <Kbd className="hidden lg:inline-block" keys={["enter"]}>

      //     </Kbd>
      //   }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  const items = [
    {
      key: "Account",
      label: "Profile",
      icon: <Person2Rounded />,
      path: "/account",
    },
    {
      key: "Wallet",
      label: "Wallet",
      icon: <WalletRounded />,
      path: "/wallet",
    },

    {
      key: "Orders",
      label: "Orders",
      icon: <LocalMallRounded />,
      path: "/orders",
    },
    {
      key: "delete",
      label: "Log Out",
      icon: <LogoutRounded />,
      path: "/",
    },
  ];
  return (
    <>
      <NextUINavbar
        maxWidth="xl"
        position="static"
        className="bg-green-200 hidden sm:flex">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/">
              <p className="font-bold ">Welcome To RS Online Service! </p>
            </NextLink>
          </NavbarBrand>
          {/* <ul className="hidden lg:flex gap-4 justify-start ml-2">
			{siteConfig.navItems.map((item) => (
			  <NavbarItem key={item.href}>
				<NextLink
				  className={clsx(
					linkStyles({color: "foreground"}),
					"data-[active=true]:text-primary data-[active=true]:font-medium"
				  )}
				  color="foreground"
				  href={item.href}>
				  {item.label}
				</NextLink>
			  </NavbarItem>
			))}
		  </ul> */}
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end">
          {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
          <NavbarItem className="hidden sm:flex">
            <Button
             
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.sponsor}
              startContent={<HeartFilledIcon className="text-warning-400" />}
              variant="flat">
              Become Retailer
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden sm:flex gap-2">
            <Link
              
              href={siteConfig.links.twitter}
              aria-label="Twitter">
              <TwitterIcon className="text-black" />
            </Link>
            <Link
              
              href={siteConfig.links.discord}
              aria-label="Discord">
              <DiscordIcon className="text-black" />
            </Link>
            <Link  href={siteConfig.links.github} aria-label="Github">
              <GithubIcon className="text-black" />
            </Link>
            {/* <ThemeSwitch /> */}
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
      <NextUINavbar maxWidth="xl" position="sticky" className="py-5">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/">
              <Image
                src={logo}
                width={60}
                height={150}
                className="w-full h-full"
                alt="RS Online Logo"
              />
            </NextLink>
          </NavbarBrand>
          <ul className="hidden sm:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({color: "foreground"}),
                    "data-[active=true]:text-primary data-[active=true]:font-bold",
                    "text-black font-semibold"
                  )}
                  color="foreground"
                  href={item.href}>
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end">
          <NavbarItem className="hidden sm:flex">{searchInput}</NavbarItem>
          <NavbarItem>
            {login ? (
              <Badge
                color="danger"
                content={1}
                // isInvisible={isInvisible}
                shape="rectangle">
                <Button
                  isIconOnly
                  as={Link}
                  href="/cart"
                  variant="light"
                  className="rounded-full">
                  <ShoppingCartRounded className="text-3xl " />
                </Button>
              </Badge>
            ) : (
              ""
            )}
          </NavbarItem>
          <NavbarItem className="hidden sm:flex gap-2">
            {/* <ThemeSwitch /> */}
            {login ? (
              <Popover showArrow placement="bottom" backdrop="blur">
                <PopoverTrigger>
                  <User
                    as="button"
                    name="Welcome"
                    description="Supyar Meena"
                    className="transition-transform"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                </PopoverTrigger>
                <PopoverContent className="p-1">
                  <Listbox
                    items={items}
                    aria-label="Dynamic Actions"
                    // onAction={(key) => alert(key)}
                  >
                    {(item) => (
                      <ListboxItem
                        key={item.key}
                        href={item.path}
                        color={item.key === "delete" ? "danger" : "success"}
                        variant="faded"
                        className={item.key === "delete" ? "text-danger font-semibold" : "font-semibold"}
                        startContent={item.icon}>
                        {item.label}
                      </ListboxItem>
                    )}
                  </Listbox>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <Login />
                <UserRegistration />
              </div>
            )}
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Button
            
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-warning-400" />}
            variant="flat">
            Become Retailer
          </Button>
          {/* <ThemeSwitch /> */}
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href="#"
                  size="lg">
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </>
  );
};
