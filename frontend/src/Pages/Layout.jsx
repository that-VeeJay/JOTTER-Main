import { Outlet, useLocation, Link, useNavigate, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Switch, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { JotterLogo } from "../Icons/JotterLogo";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";
import { ThemeContext } from "../Context/ThemeProvider";
import { AuthContext } from "../Context/AuthProvider";

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ["Profile", "Configurations", "Help & Feedback", "Log Out"];

    // ************ Get current url path ************
    const location = useLocation();
    const currentPath = location.pathname;

    // ************ Theme Logic ************
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (currentTheme, setTheme) => {
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    // ************ Logout Logic ************
    const navigate = useNavigate();
    const { user, token, setUser, setToken } = useContext(AuthContext);

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/logout", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                setUser(null);
                setToken(null);
                localStorage.removeItem("token");
                navigate("/login");
            }
        } catch (error) {
            console.log("Error logging out".error);
        }
    };

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

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem isActive={currentPath === "/"}>
                        <Link to="/">Dashboard</Link>
                    </NavbarItem>
                    <NavbarItem isActive={currentPath === "/creators"}>
                        <Link to="/creators">Creators</Link>
                    </NavbarItem>
                    <NavbarItem isActive={currentPath === "/community"}>
                        <Link to="/community">Community</Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    {user ? (
                        <>
                            {currentPath === "/create-post" ? (
                                ""
                            ) : (
                                <Button as={NavLink} to="/create-post" color="danger">
                                    Create
                                </Button>
                            )}

                            <div className="hidden md:block">
                                <Dropdown placement="bottom-end" className={`${theme === "dark" ? "dark text-white" : ""}`}>
                                    <DropdownTrigger>
                                        <Avatar isBordered as="button" className="transition-transform" color="danger" name={user.name} size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Profile Actions" variant="flat" className="dark:bg-zinc-900">
                                        <DropdownItem key="profile" className="h-14 gap-2">
                                            <p className="font-semibold">Signed in as</p>
                                            <p className="font-semibold">{user.email}</p>
                                        </DropdownItem>
                                        <DropdownItem key="profile">Profile</DropdownItem>
                                        <DropdownItem key="configurations">Configurations</DropdownItem>
                                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                        <DropdownItem key="logout">
                                            <form onSubmit={handleLogout}>
                                                <Button type="submit" size="sm" className="w-full bg-transparent text-red-500 font-medium text-md">
                                                    Logout
                                                </Button>
                                            </form>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
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
                        <Switch className="hidden md:flex" defaultSelected={theme === "light"} onChange={() => toggleTheme(theme, setTheme)} size="sm" color="danger" startContent={<SunIcon />} endContent={<MoonIcon />}></Switch>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"} className="w-full" href="#" size="lg">
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>

            {/* ************ Main Content ************ */}
            <main>
                <Outlet />
            </main>
        </>
    );
}
