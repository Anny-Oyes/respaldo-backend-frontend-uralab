import { Input } from "@nextui-org/react";

interface SearchModalidadesProps {
  search: string;
  setSearch: (search: string) => void;
}
function SearchModalidades({ search, setSearch }: SearchModalidadesProps) {
  return (
    <div>
      <Input
        type='text'
        size='sm'
        defaultValue={search}
        onKeyUp={(e) => {
          e.key === "Enter" && setSearch(e.target.value);
        }}
        label='Buscar Modalidad'
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchModalidades;
