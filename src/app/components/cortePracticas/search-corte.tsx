import { Input } from "@nextui-org/react";

interface SearchCortePracticasProps {
    search: string;
    setSearch: (search: string) => void;
}
function SearchCortePracticas({search, setSearch}: SearchCortePracticasProps){
    return(
        <div>
            <Input
                type="text"
                size="sm"
                defaultValue={search}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        setSearch((e.target as HTMLInputElement).value);
                    }
                }}
                label="Buscar corte"
                onChange={(e) => {
                    setSearch((e.target as HTMLInputElement).value);
                }}
            />
        </div>
    )
}
export default SearchCortePracticas;