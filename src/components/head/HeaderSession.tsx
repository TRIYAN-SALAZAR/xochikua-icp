"use client";

import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@heroui/react";

import { ThemeSwitch } from "./Theme_Switch";
import { GithubIcon } from "../icons/Socials";
import { siteConfig } from "@/app/config/siteconfig";
import { title } from "@/app/config/primitives";
import NextLink from 'next/link';
import Menu from "./Menu";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar maxWidth="full" position="sticky" isBlurred isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="basis-1/5 md:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <h1 className={title({ color: 'violet', size: 'sm', fullWidth: true })}>Xochikua</h1>
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <GithubIcon className="text-default-500 mt-2" />
                    </Link>

                    <ThemeSwitch className="mt-2" />
                </NavbarItem>
                <div className="xl:hidden mt-1">
                    <Menu />
                </div>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <li>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <GithubIcon className="text-default-500 mt-2" />
                    </Link>
                </li>

                <li>
                    <ThemeSwitch className="mt-2" />
                </li>

                <li>
                    <Menu />
                </li>

            </NavbarContent>

        </Navbar>
    )
};