import { KsIconSearch } from "@fe-infra/keystone-icons-react";

export interface HeaderSearchInputProps {
  placeholder?: string;
}

export function HeaderSearchInput({
  placeholder = "Search pages, tools, or help articles",
}: HeaderSearchInputProps) {
  return (
    <div
      role="search"
      className="hidden h-9 w-[300px] shrink-0 items-center gap-1 overflow-hidden rounded border border-[#87898b] bg-transparent px-2.5 py-2 text-[#87898b] lg:flex"
    >
      <KsIconSearch className="shrink-0" size={16} />
      <span className="min-w-0 flex-1 truncate text-[12px] font-normal leading-4 tracking-[0.1608px]">
        {placeholder}
      </span>
    </div>
  );
}
