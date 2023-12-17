"use client";

import SelectItem from "./select-item";

interface SelectListItemsProp {
  items: any[];
  label: string;
  selected: (e: Object) => void;
}
export default function SelectList({
  items,
  label,
  selected,
}: SelectListItemsProp) {
  const seletedItems = (e: Object) => {
    selected(e);
  };

  return (
  
    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">    
      {items.map((item: any) => {
        return (
          <SelectItem
            key={item.id}
            id={item.id}
            label={item[label]}
            selected={seletedItems}
          />
        );
      })}
    </div>
  );
}
