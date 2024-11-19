import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadcrumbItemType } from "@/types/BreadcrumbItem";

interface BreadcrumbData {
    items: BreadcrumbItemType[];
}

export function BreadcrumbBcome() {

    const breadcrumbData: BreadcrumbData = {
        items: [
            { label: "Traceabeality", href: "#" },
            { label: "Data Collection", href: "#" },
            { label: "Projects", href: "#" },
        ],
    };

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbData.items.map((item, index) => {
                        const isLastItem = index === breadcrumbData.items.length - 1;

                        return (
                            <BreadcrumbItem key={item.label}>
                                {isLastItem ? (
                                    <BreadcrumbPage className="underline">{item.label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                                )}
                                {!isLastItem && <BreadcrumbSeparator />}
                            </BreadcrumbItem>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
