import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { MenuIcon } from '../icons/Actions';
import { siteConfig } from "@/app/config/siteconfig";

export default function Menu() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="light" size="sm" aria-label="Menu">
                    <MenuIcon />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={siteConfig.routes}>
                {(item) => (
                    <DropdownItem
                        key={item.label}
                        color={item.label === "delete" ? "danger" : "default"}
                        className={item.label === "delete" ? "text-danger" : ""}
                        href={item.url}>
                        {item.label}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    )
}