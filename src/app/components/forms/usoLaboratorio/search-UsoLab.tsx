import { Input } from "@nextui-org/react";

interface SearchUsoLabProps {
  search: string;
  setSearch: (search: string) => void;
}
function SearchUsoLab({ search, setSearch }: SearchUsoLabProps) {
  return (
    <div>
      <Input
        type="text"
        size="sm"
        defaultValue={search}
        onKeyUp={(e) => {
          e.key === "Enter" && setSearch(e.target.value);
        }}
        label="Buscar Registro"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchUsoLab;
