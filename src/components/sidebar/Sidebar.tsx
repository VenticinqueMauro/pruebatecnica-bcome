export default function Sidebar() {
    return (
        <aside className="w-full mb-5 md:mb-0 md:w-[32px] h-[60px] md:h-[900px] flex-shrink-0 p-[16px_8px] flex flex-row md:flex-col gap-[10px] bg-gray-100 md:bg-transparent">
            <img
                src="/filters.svg"
                alt="Filters Icon"
                className="md:w-[16px] md:h-[16.36px] md:mx-auto "
            />
        </aside>
    );
}
