import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { TableRowData } from "@/types/TableRow";
import { useState } from "react";
import InputSearch from "./inputSearch";

const initialTableData: TableRowData[] = [
    {
        projectName: "Apparel",
        totalRef: 68,
        referenceType: "Apparel",
        formUrl: "/#",
        status: "pending",
        creationDate: "Sep 25, 2023",
        closingDate: "Oct 25, 2023",
    },
    {
        projectName: "Apparel 2",
        totalRef: 68,
        referenceType: "Apparel 2",
        formUrl: "#",
        status: "completed",
        creationDate: "Oct 25, 2023",
        closingDate: "Oct 25, 2023"
    },
    {
        projectName: "Apparel 3",
        totalRef: 68,
        referenceType: "Apparel 3",
        formUrl: "#",
        status: "completed",
        creationDate: "Nov 25, 2023",
        closingDate: "Oct 25, 2023"
    },
];


export default function TableContainer() {

    const [tableData, setTableData] = useState(initialTableData);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSortedAsc, setIsSortedAsc] = useState(true);

    const filteredData = tableData.filter((row) =>
        row.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const toggleStatus = (index: number) => {
        setTableData((prevData) =>
            prevData.map((row, i) =>
                i === index
                    ? {
                        ...row,
                        status: row.status === "completed" ? "pending" : "completed",
                    }
                    : row
            )
        );
    };

    const sortByCreationDate = () => {
        const sortedData = [...tableData].sort((a, b) => {
            const dateA = new Date(a.creationDate);
            const dateB = new Date(b.creationDate);
            return isSortedAsc ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
        });

        setTableData(sortedData); // Actualizar los datos ordenados
        setIsSortedAsc(!isSortedAsc); // Alternar el orden
    };


    return (
        <>
            <div className="h-[846px] py-4">
                <InputSearch setSearchTerm={setSearchTerm} />
                <Table className="pt-4">
                    <TableHeader>
                        <TableRow className="border-none">
                            <TableHead colSpan={3} className="text-start border-b border-black text-black font-medium">
                                Project description
                            </TableHead>
                            <TableHead colSpan={4} className="text-start border-b border-black text-black font-medium">
                                Data record
                            </TableHead>
                        </TableRow>
                        <TableRow className="border-none">
                            <TableHead className="text-muted-foreground font-normal text-xs">Project name</TableHead>
                            <TableHead className="text-muted-foreground font-normal text-xs">Total ref</TableHead>
                            <TableHead className="text-muted-foreground font-normal text-xs">Reference type</TableHead>
                            <TableHead className="text-muted-foreground font-normal text-xs">Form URL</TableHead>
                            <TableHead className="text-muted-foreground font-normal text-xs">Status</TableHead>
                            <TableHead
                                className="text-muted-foreground font-normal text-xs flex items-center gap-2"
                            >
                                Creation date
                                <span
                                    onClick={sortByCreationDate}
                                    className="cursor-pointer"
                                >
                                    <img src='/public/sort.svg' alt="Sort Icon" className="w-4 h-4" />
                                </span>
                            </TableHead>
                            <TableHead className="text-muted-foreground font-normal text-xs">Closing date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData.map((row: TableRowData, index: number) => (
                            <TableRow
                                key={index}
                                className="odd:bg-[#FBFBFC] border-none"
                            >
                                <TableCell className="font-medium justify-end">{row.projectName}</TableCell>
                                <TableCell>{row.totalRef}</TableCell>
                                <TableCell>{row.referenceType}</TableCell>
                                <TableCell>
                                    <a href={row.formUrl} className="text-[#ccaa5b] underline flex gap-2 items-center">
                                        Data collection form
                                        <span>
                                            <img
                                                src="/externalLink.svg"
                                                alt="External link icon"
                                                className="w-4 h-4 inline-block mr-1"
                                            />
                                        </span>
                                    </a>
                                </TableCell>
                                <TableCell>
                                    <span
                                        className={`p-2 w-[89px] h-[32px] rounded-[24px] text-sm cursor-pointer capitalize ${row.status === "completed"
                                            ? "bg-[#527800]/20 text-[#527800]"
                                            : "bg-[#D1A94C]/20 text-[#D1A94C]"
                                            }`}
                                        onClick={() => toggleStatus(index)}
                                    >
                                        {row.status}
                                    </span>
                                </TableCell>
                                <TableCell>{row.creationDate}</TableCell>
                                <TableCell>
                                    <img
                                        src="/folder.svg"
                                        alt="Folder Icon"
                                        className="w-[24.62px] h-[24.62px] cursor-pointer"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <ul className="flex justify-between border-t h-40px py-2 text-sm">
                <li className="flex gap-2">
                    <p>407 Articles</p>
                    <span>|</span>
                    <p>1.6 Version</p>
                </li>
                <li>Info</li>
            </ul>
        </>
    );
}


