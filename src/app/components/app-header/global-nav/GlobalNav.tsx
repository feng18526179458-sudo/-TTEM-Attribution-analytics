import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  KsIconAdsManager,
  KsIconBriefcase,
  KsIconCalendar,
  KsIconChevronRight,
  KsIconCoin,
  KsIconMoreHorizontal,
  KsIconMoreVertical,
  KsIconTiktok,
  KsIconTargeting,
  KsIconWand,
} from "@fe-infra/keystone-icons-react";
import { Logo } from "../../logo";

interface NavLink {
  value: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  exact?: boolean;
  trailing?: React.ReactNode;
}

const NAV_ITEMS: NavLink[] = [
  {
    value: "business-center",
    label: "Business center",
    path: "/business-center",
    icon: <KsIconBriefcase size={16} />,
  },
  {
    value: "ads-manager",
    label: "Ads manager",
    path: "/",
    icon: <KsIconAdsManager size={16} />,
    exact: true,
  },
  {
    value: "business-suite",
    label: "Business Suite",
    path: "/business-suite",
    icon: <BusinessSuiteIcon />,
  },
  {
    value: "tiktok-one",
    label: "TikTok One",
    path: "/tiktok-one",
    icon: <KsIconTiktok size={16} />,
  },
  {
    value: "symphony",
    label: "TikTok Symphony",
    path: "/symphony",
    icon: <KsIconWand size={16} />,
  },
  {
    value: "leads-center",
    label: "Leads center",
    path: "/leads-center",
    icon: <KsIconTargeting size={16} />,
  },
  {
    value: "app-agents",
    label: "App & Agents",
    path: "/app-agents",
    icon: <AppAgentsIcon />,
  },
  {
    value: "event-manager",
    label: "Events manager",
    path: "/event-manager",
    icon: <KsIconCoin size={16} />,
  },
  {
    value: "all-tools",
    label: "All tools",
    path: "/more-tools",
    icon: <KsIconMoreHorizontal size={16} />,
    trailing: <KsIconChevronRight size={16} />,
  },
];

export interface GlobalNavProps {
  open: boolean;
  onClose: () => void;
  userName?: string;
  userInitial?: string;
}

export function GlobalNav({
  open,
  onClose,
  userName = "Demo Attribution analytics",
  userInitial = "D",
}: GlobalNavProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      )
        onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener(
        "pointerdown",
        onPointerDown,
      );
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label="Global navigation"
      className="fixed left-3 top-[68px] z-[80] flex h-[536px] w-[280px] flex-col gap-4 overflow-hidden rounded bg-[#ffffff] px-4 py-6 shadow-[0_0_12px_rgba(0,0,0,0.12)]"
    >
      <div className="h-[20.344px] w-[170.54px] shrink-0">
        <Logo
          name="forBusiness"
          className="block h-full w-full [filter:invert(1)]"
        />
      </div>

      <button
        type="button"
        className="relative flex h-10 w-full shrink-0 items-center gap-2 rounded border-0 bg-[#f2f3f3] p-2 pr-8 text-left"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1fc7c0] text-[12px] font-medium leading-4 tracking-[0.134px] text-white">
          {userInitial}
        </span>
        <span className="min-w-0 flex-1 whitespace-nowrap text-[13px] font-medium leading-5 tracking-[0.0938px] text-[#121415]">
          {userName}
        </span>
        <KsIconMoreVertical className="absolute right-2 top-1/2 shrink-0 -translate-y-1/2 text-[#121415]" size={16} />
      </button>

      <nav className="flex w-[224px] shrink-0 flex-col gap-0.5" aria-label="App switcher">
        {NAV_ITEMS.map((item) => {
          const active = item.exact
            ? pathname === item.path
            : pathname.startsWith(item.path);
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => handleNavigate(item.path)}
              className={[
                "flex h-10 w-[224px] shrink-0 items-center gap-2 overflow-hidden rounded px-2 py-2 text-left transition-colors",
                "border-0 text-[14px] font-medium leading-5 tracking-[0.0938px]",
                active
                  ? "bg-[#e8fbf9] text-[#017976]"
                  : "bg-[#ffffff] text-[#121415] hover:bg-[#f4f5f5]",
              ].join(" ")}
            >
              <span className="flex h-5 w-4 shrink-0 items-center justify-center">
                {item.icon}
              </span>
              <span className="min-w-0 flex-1 truncate">{item.label}</span>
              {item.trailing && (
                <span className="ml-auto flex h-5 w-4 shrink-0 items-center justify-center text-[#5f6062]">
                  {item.trailing}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

function BusinessSuiteIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.064 1.238c.681 0 1.319.333 1.709.891l2.268 3.25a.75.75 0 0 1 .136.43v1.643a2.85 2.85 0 0 1-1.669 2.587v2.64a2.083 2.083 0 0 1-2.083 2.083H4.55a2.083 2.083 0 0 1-2.084-2.083v-2.652A2.852 2.852 0 0 1 .824 7.452V5.81a.75.75 0 0 1 .135-.43l2.269-3.25a2.083 2.083 0 0 1 1.708-.891h6.128ZM10.142 9.367A2.86 2.86 0 0 1 8 10.312a2.861 2.861 0 0 1-2.143-.945 2.86 2.86 0 0 1-1.891.932v2.38c0 .322.262.583.584.583h6.875a.583.583 0 0 0 .583-.583v-2.382a2.86 2.86 0 0 1-1.866-.93ZM2.324 7.451c0 .632.446 1.177 1.064 1.322.104.025.214.038.328.039.777 0 1.388-.616 1.392-1.353a.75.75 0 0 1 1.5 0c.005.736.615 1.352 1.392 1.352s1.387-.616 1.392-1.352a.75.75 0 0 1 1.5 0c.004.736.615 1.352 1.392 1.353.107 0 .212-.013.31-.035.627-.14 1.082-.687 1.083-1.325v-.893H2.324v.892Zm2.612-4.713a.583.583 0 0 0-.478.249L3.013 5.059h9.975l-1.445-2.072a.583.583 0 0 0-.479-.249H4.936Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AppAgentsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 3.5h2.25v2.25H5V3.5Zm3.75 0H11v2.25H8.75V3.5ZM5 7.25h2.25V9.5H5V7.25Zm3.75 0H11V9.5H8.75V7.25ZM5 11h2.25v2.25H5V11Zm3.75 0H11v2.25H8.75V11Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M2.75 8h1.1m8.3 0h1.1M8 2.75v-1.1M8 14.35v-1.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
