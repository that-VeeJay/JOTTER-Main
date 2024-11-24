import { Outlet, Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Button } from "@nextui-org/react";
import { JotterLogo } from "../icons/JotterLogo";
import { AuthContext } from "../contexts/AuthProvider";

import ToggleTheme from "../components/ToggleTheme";
import ProfileDropdown from "../components/ProfileDropdown";
import MobileMenuItems from "../components/MobileMenuItems";
import NavLinks from "../components/NavLinks";

export default function Layout() {
    const { user } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                    <NavbarBrand as={Link} to="/">
                        <JotterLogo />
                        <p className="font-bold text-inherit">JOTTER</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="" justify="center">
                    <ul className="hidden sm:flex gap-4">
                        <NavLinks />
                    </ul>
                </NavbarContent>
                <NavbarContent justify="end">
                    {user ? (
                        <>
                            <Button as={NavLink} to="/create-post" color="danger" className="text-white">
                                Create
                            </Button>
                            <ProfileDropdown />
                        </>
                    ) : (
                        <>
                            <NavbarItem>
                                <Link to="/login" color="foreground">
                                    Login
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Button as={Link} color="danger" to="register" variant="flat">
                                    Sign Up
                                </Button>
                            </NavbarItem>
                        </>
                    )}
                    <NavbarItem>
                        <ToggleTheme />
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    <MobileMenuItems />
                </NavbarMenu>
            </Navbar>

            {/* ************ Main Content ************ */}
            <main>
                <Outlet />
            </main>
        </>
    );
}
