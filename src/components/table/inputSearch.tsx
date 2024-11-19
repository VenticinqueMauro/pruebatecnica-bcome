
interface Props {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputSearch({ setSearchTerm }: Props) {
    return (
        <div className="relative mb-4 mt-4">
            <input
                type="text"
                className="border-t border-b h-[40px] w-full pl-3 pr-10"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src="/search.svg"
                alt="Search Icon"
                className="w-[24px] h-[30px] absolute right-2 top-1/2 -translate-y-1/2"
            />
        </div>
    )
}
