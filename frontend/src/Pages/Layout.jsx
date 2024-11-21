import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Switch, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { JotterLogo } from "../Icons/JotterLogo";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";
import { AppContext } from "../Context/AppContext";

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ["Profile", "Dashboard", "Settings", "Help & Feedback", "Log Out"];

    // ************ Get current url path ************
    const location = useLocation();
    const currentPath = location.pathname;

    // ************ Theme Logic ************
    const { theme, setTheme } = useContext(AppContext);
    const [isSwitchChecked, setIsSwitchChecked] = useState(localStorage.getItem("theme") === "dark" ? false : true);

    function toggleTheme() {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    // ************ Logout Logic ************
    const navigate = useNavigate();
    const { user, token, setUser, setToken } = useContext(AppContext);

    async function handleLogout(e) {
        e.preventDefault();

        const res = await fetch("/api/logout", {
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            setUser(null);
            setToken(null);
            localStorage.removeItem("token");
            navigate("/login");
        }
    }

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
                            <div></div>

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
                        <Switch
                            className="hidden md:flex"
                            defaultSelected={isSwitchChecked}
                            onChange={() => {
                                toggleTheme();
                                setIsSwitchChecked(!isSwitchChecked);
                            }}
                            size="sm"
                            color="danger"
                            startContent={<SunIcon />}
                            endContent={<MoonIcon />}
                        ></Switch>
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
