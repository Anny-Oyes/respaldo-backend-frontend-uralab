interface SelectInputProps {
  search: (buscar: string) => void;
  placeholder?: string;
  value: string;
  focus: (e: boolean) => void;
}
export default function SelectInput({
  search,
  placeholder,
  value,
  focus,
}: SelectInputProps) {
  return (
    <input
      onChange={(e) => {
        console.log(e.target.value);
        search(e.target.value);
      }}
      onFocus={() => {
        focus(true);
      }}
      type="search"
      id="search-dropdown"
      name={`search-${Math.random()}`}
      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      required
    />
  );
}
