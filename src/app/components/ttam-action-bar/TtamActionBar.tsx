export interface TtamActionBarProps {
  /** Slot for the left side of the action row — typically a Cancel button and/or status message. */
  leftActions?: React.ReactNode;
  /** Slot for the right side of the action row — typically Back / Next buttons. */
  rightActions?: React.ReactNode;
}

export function TtamActionBar({
  leftActions,
  rightActions,
}: TtamActionBarProps) {
  return (
    <div className="flex flex-col gap-4 bg-neutral-surface p-6">
      <div className="flex items-center gap-4">
        <div className="flex flex-1 min-w-0 items-center gap-2">
          {leftActions}
        </div>
        <div className="flex items-center gap-2">
          {rightActions}
        </div>
      </div>
    </div>
  );
}