import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { AuthContext } from "../Context/AuthProvider";
import { ThemeContext } from "../Context/ThemeProvider";

export default function ProfileDropdown() {
    const { theme } = useContext(ThemeContext);
    const { user, token, setUser, setToken } = useContext(AuthContext);

    const navigate = useNavigate();

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
    );
}
