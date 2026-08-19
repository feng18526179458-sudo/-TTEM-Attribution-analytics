export interface HeaderIconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
}

export function HeaderIconButton({
  icon,
  onClick,
  ariaLabel,
}: HeaderIconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex size-9 cursor-pointer items-center justify-center rounded border-0 bg-transparent text-[#a9abac] transition-colors hover:bg-[#ffffff1f] hover:text-white"
    >
      {icon}
    </button>
  );
}
