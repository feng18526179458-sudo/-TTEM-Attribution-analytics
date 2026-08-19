import { KsText } from "@byted-keystone/react";

export interface PageHeaderProps {
  title: string;
  description?: string;
  /** Slot rendered before the title block — useful for an icon, avatar, or back button. */
  left?: React.ReactNode;
  /** Slot rendered to the right of the title row — typically action buttons. */
  actions?: React.ReactNode;
  /** Slot rendered beneath the entire header row — useful for tabs or filters. */
  bottom?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  left,
  actions,
  bottom,
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-3 py-6">
      <div className="flex items-center gap-2">
        {left && (
          <div className="flex items-center">{left}</div>
        )}
        <div className="flex flex-1 min-w-0 flex-col gap-1">
          <div className="flex h-9 items-center justify-between gap-4">
            <KsText variant="headlineMd">{title}</KsText>
            {actions && (
              <div className="flex items-center gap-2">
                {actions}
              </div>
            )}
          </div>
          {description && (
            <div className="max-w-[690px] text-neutral-onSurface">
              <KsText variant="bodySm" color="inherit">
                {description}
              </KsText>
            </div>
          )}
        </div>
      </div>
      {bottom && <div>{bottom}</div>}
    </header>
  );
}