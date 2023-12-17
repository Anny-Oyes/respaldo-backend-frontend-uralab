import { Input } from "@nextui-org/react";

interface SearchRolesProps {
  search: string;
  setSearch: (search: string) => void;
}
function SearchRoles({ search, setSearch }: SearchRolesProps) {
  return (
    <div>
      <Input
        type="text"
        size="sm"
        defaultValue={search}
        onKeyUp={(e) => {
          e.key === "Enter" && setSearch(e.target.value);
        }}
        label="Buscar rol"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchRoles;
