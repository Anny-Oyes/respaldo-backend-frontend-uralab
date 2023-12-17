import { Input } from "@nextui-org/react";

interface SearchAreasProps {
  search: string;
  setSearch: (search: string) => void;
}
function SearchAreas({ search, setSearch }: SearchAreasProps) {
  return (
    <div>
      <Input
        type="text"
        size="sm"
        defaultValue={search}
        onKeyUp={(e) => {
          e.key === "Enter" && setSearch(e.target.value);
        }}
        label="Buscar area"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchAreas;
