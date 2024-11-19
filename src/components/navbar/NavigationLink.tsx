import { LinkItem } from "@/types/LinkItem";

interface NavigationLinks {
    links: LinkItem[];
}

export function NavigationLinks() {

    const navigationLinks: NavigationLinks = {
        links: [
            { label: "Help", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Account", href: "#" },
        ]
    };

    return (
        <ul className="flex gap-4">
            {navigationLinks.links.map((link) => (
                <li key={link.label}>
                    <a href={link.href} className="hover:underline">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}