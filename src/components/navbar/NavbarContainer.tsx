import { BreadcrumbBcome } from "./BreadCrumb";
import { NavigationLinks } from "./NavigationLink";

export default function Navbar() {
    return (
        <nav className="flex justify-between h-[54px] gap-[34px] items-center">
            <BreadcrumbBcome />
            <NavigationLinks />
        </nav>
    )
}
