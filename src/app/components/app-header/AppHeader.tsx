import { useNavigate } from "react-router";
import { clsx } from "clsx";

export interface AppHeaderProps {
  /** Brand slot — typically a <Logo name="..." /> element. */
  logo?: React.ReactNode;
  /** Path the brand area navigates to when clicked. Defaults to "/". */
  brandHref?: string;
  /** Show an avatar pill next to the hamburger when set. */
  userInitial?: string;
  /** Called when the hamburger / workspace switch is clicked. */
  onMenuClick?: () => void;
  /** Composed slot for the right side — utility icons, account dropdowns, etc. */
  trailingActions?: React.ReactNode;
}

export function AppHeader({
  logo,
  brandHref = "/",
  userInitial,
  onMenuClick,
  trailingActions,
}: AppHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121415] p-4">
      <div className="flex h-9 items-center justify-between gap-5">
        {/* Left: workspace switch pill + brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            aria-label="Open menu"
            className={clsx(
              "flex h-9 items-center gap-1 rounded-full border-0 bg-[#343435] py-1 pl-2 pr-1 text-neutral-onFill transition-colors hover:bg-[#454647]",
              !userInitial && "pr-2",
            )}
          >
            <svg
              className="h-5 w-5 shrink-0"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {[1.666, 7.916, 14.166].flatMap((x) =>
                [1.664, 7.914, 14.164].map((y) => (
                  <rect
                    key={`${x}-${y}`}
                    x={x}
                    y={y}
                    width="4.167"
                    height="4.167"
                    rx="2.083"
                    fill="white"
                  />
                )),
              )}
            </svg>
            {userInitial && (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#009995] text-[14px] font-normal leading-5 tracking-[0.0938px] text-white">
                {userInitial}
              </span>
            )}
          </button>

          {logo && (
            <div
              className="flex h-[26px] cursor-pointer items-center"
              onClick={() => navigate(brandHref)}
            >
              {logo}
            </div>
          )}
        </div>

        {/* Right: composed slot */}
        {trailingActions && (
          <div className="flex items-center gap-5 text-neutral-onFill">
            {trailingActions}
          </div>
        )}
      </div>
    </header>
  );
}
