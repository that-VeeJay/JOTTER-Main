import { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import NavLinks from "@components/NavLinks";
import { JotterLogo } from "@icons/JotterLogo";
import ToggleTheme from "@components/ToggleTheme";
import { AuthContext } from "@contexts/AuthProvider";
import ProfileDropdown from "@components/ProfileDropdown";
import MobileMenuItems from "@components/MobileMenuItems";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";

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
