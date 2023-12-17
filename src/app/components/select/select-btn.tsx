"use client";

import { IconCaretDown, IconCaretUp } from "@tabler/icons-react";
import { useState } from "react";

interface SelectBtnProps {
  opened: (e: boolean) => void;
}

export default function SelectBtn({ opened }: SelectBtnProps) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="submit"
      onClick={() => {
        opened(!open);
        setOpen(!open);
      }}
      className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {open ? (
        <IconCaretDown size={20} stroke={1.5} />
      ) : (
        <IconCaretUp size={20} stroke={1.5} />
      )}
    </button>
  );
}
