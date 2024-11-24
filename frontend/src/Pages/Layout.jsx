import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import { useContext, useState, useMemo } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Button } from "@nextui-org/react";
import { JotterLogo } from "../Icons/JotterLogo";
import { AuthContext } from "../Context/AuthProvider";

import ToggleTheme from "../Components/ToggleTheme";
import ProfileDropdown from "../Components/ProfileDropdown";
import MobileMenuItems from "../Components/MobileMenuItems";
import NavLinks from "../Components/NavLinks";

export default function Layout() {
    const { user } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();
    const currentPath = location.pathname;

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
                        <NavLinks currentPath={currentPath} />
                    </ul>
                </NavbarContent>
                <NavbarContent justify="end">
                    {user ? (
                        <>
                            {currentPath === "/create-post" ? (
                                ""
                            ) : (
                                <Button as={NavLink} to="/create-post" color="danger" className="text-white">
                                    Create
                                </Button>
                            )}

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
