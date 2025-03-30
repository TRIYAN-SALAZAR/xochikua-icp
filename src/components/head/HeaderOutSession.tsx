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
import { IniciarSessionModal } from "../session/login_modal";
import { RegisterSessionModal } from "../session/register_modal"; // Importa el modal de registro

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Estado para el modal de login
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Estado para el modal de registro

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const openRegisterModal = () => setIsRegisterModalOpen(true);
    const closeRegisterModal = () => setIsRegisterModalOpen(false);

    return (
        <>
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
                            <GithubIcon className="text-default-500" />
                        </Link>

                        <ThemeSwitch />
                    </NavbarItem>
                    <div className="lg:hidden mt-1">
                        <Menu />
                    </div>

                    <NavbarItem className="hidden lg:flex">
                        <Link href="#" onClick={openLoginModal}>Login</Link> {/* Abre el modal de login */}
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Button color="primary" onPress={openRegisterModal} variant="flat">
                            Sign Up
                        </Button> {/* Abre el modal de registro */}
                    </NavbarItem>
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

            {/* Modal para iniciar sesión */}
            {isLoginModalOpen && <IniciarSessionModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />}

            {/* Modal para registro */}
            {isRegisterModalOpen && <RegisterSessionModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />}
        </>
    );
};