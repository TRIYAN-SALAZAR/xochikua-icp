"use client";

import React from "react";
import { Link } from "@heroui/react";
import NextLink from "next/link";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@heroui/navbar";

import { ThemeSwitch } from "./theme-switch";
import { GithubIcon } from "./icons/socials";
import { siteConfig } from "./siteconfig";

import { title } from "./config/primitives";
import Menu from "./menu";
import IconHoverMotion from "./motion/iconsHoverMotion";
import MotionTab from "./motion/hoverMotion";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <NextUINavbar maxWidth="xl" position="sticky" isBlurred isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="basis-1/5 md:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <MotionTab>
                            <h1 className={title({ color: 'violet', size: 'sm', fullWidth: true })}>Im_JVallejo</h1>
                        </MotionTab>
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <IconHoverMotion>
                            <GithubIcon className="text-default-500" />
                        </IconHoverMotion>
                    </Link>

                    <IconHoverMotion>
                        <ThemeSwitch className="mt-2" />
                    </IconHoverMotion>
                </NavbarItem>
                <div className="xl:hidden mt-1">
                    <Menu />
                </div>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <li>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <IconHoverMotion>
                            <GithubIcon className="text-default-500" />
                        </IconHoverMotion>
                    </Link>
                </li>

                <li>
                    <IconHoverMotion>
                        <ThemeSwitch className="mt-2" />
                    </IconHoverMotion>
                </li>

                <li>
                    <Menu />
                </li>
            </NavbarContent>

        </NextUINavbar>
    )
}