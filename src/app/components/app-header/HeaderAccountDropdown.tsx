import { KsIconChevronDown } from "@fe-infra/keystone-icons-react";

export interface HeaderAccountDropdownProps {
  label: string;
  onClick?: () => void;
  /** Defaults to 180px. */
  width?: number;
}

/**
 * Bordered rectangular dropdown used on the right side of the header
 * for account / workspace selection.
 */
export function HeaderAccountDropdown({
  label,
  onClick,
  width = 180,
}: HeaderAccountDropdownProps) {
  return (
    <button
      onClick={onClick}
      style={{ width }}
      className="flex h-9 shrink-0 cursor-pointer items-center justify-between overflow-hidden rounded border border-[#87898b] bg-transparent px-2.5 py-2 text-neutral-onFill transition-colors hover:border-[#a9abac]"
    >
      <span className="min-w-0 flex-1 truncate text-left text-[12px] font-normal leading-4 tracking-[0.1608px] text-white">
        {label}
      </span>
      <KsIconChevronDown className="ml-2 shrink-0 text-white" size={14} />
    </button>
  );
}
