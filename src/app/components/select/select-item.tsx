"use client";
interface SelectItemProps {
  id: number | string;
  label: string;
  selected: (e: Object) => void;
}
export default function SelectItem({ id, label, selected }: SelectItemProps) {
  return (
    <div
      className="hover:bg-gray-100 cursor-pointer p-2.5 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-100  "
      key={`role-${id}`}
      onClick={() => {
        const data = {
          id,
          label,
        };
        selected(data);
      }}
    >
      {label}
    </div>
  );
}
