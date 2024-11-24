import { NavbarMenuItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function MobileMenuItem() {
    const menuItems = useMemo(() => ["Profile", "Configurations", "Help & Feedback", "Log Out"], []);

    return (
        <ul>
            {" "}
            {menuItems.map((item, index) => (
                <li key={`${item}-${index}`}>
                    <NavbarMenuItem>
                        <Link color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"} className="w-full" to="#" size="lg">
                            {item}
                        </Link>
                    </NavbarMenuItem>
                </li>
            ))}
        </ul>
    );
}
