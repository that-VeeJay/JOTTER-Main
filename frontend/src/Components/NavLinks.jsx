import { Link } from "react-router-dom";
import { NavbarItem } from "@nextui-org/react";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function NavLinks() {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = useMemo(
        () => [
            { path: "/", label: "Dashboard" },
            { path: "/creators", label: "Creators" },
            { path: "/community", label: "Community" },
        ],
        []
    );

    return (
        <ul className="hidden sm:flex gap-4">
            {navItems.map(({ path, label }) => (
                <NavbarItem key={path} isActive={currentPath === path} as="li">
                    <Link to={path}>{label}</Link>
                </NavbarItem>
            ))}
        </ul>
    );
}
