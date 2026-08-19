import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  KsAvatar,
  KsIconButton,
  KsNavItem,
  KsSideNavigation,
} from "@byted-keystone/react";
import {
  KsIconAllApps,
  KsIconApplications,
  KsIconBriefcase,
  KsIconCalendar,
  KsIconCampaignList,
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
}

interface NavSection {
  title: string;
  items: NavLink[];
}

const SECTIONS: NavSection[] = [
  {
    title: "Platforms",
    items: [
      {
        value: "ads-manager",
        label: "Example 1",
        path: "/",
        icon: <KsIconCampaignList size={20} />,
      },
      {
        value: "business-suite",
        label: "Example 2",
        path: "/business-suite",
        icon: <KsIconAllApps size={20} />,
      },
    ],
  },
  {
    title: "Creative",
    items: [
      {
        value: "tiktok-one",
        label: "Example 3",
        path: "/tiktok-one",
        icon: <KsIconTiktok size={20} />,
      },
      {
        value: "symphony",
        label: "Example 4",
        path: "/symphony",
        icon: <KsIconWand size={20} />,
      },
    ],
  },
  {
    title: "Connection",
    items: [
      {
        value: "leads-center",
        label: "Example 5",
        path: "/leads-center",
        icon: <KsIconTargeting size={20} />,
      },
      {
        value: "event-manager",
        label: "Example 6",
        path: "/event-manager",
        icon: <KsIconCalendar size={20} />,
      },
    ],
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
  userName = "Jamie Li",
  userInitial = "J",
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
      className="fixed left-4 top-[68px] z-[80] w-[240px] rounded-lg bg-neutral-surface px-2 py-4 shadow-[0_0_12px_rgba(0,0,0,0.12)]"
    >
      <div className="flex flex-col gap-4">
        <div className="px-2">
          <div className="h-7 w-[180px] [filter:invert(1)]">
            <Logo name="forBusiness" />
          </div>
        </div>

        <div className="flex items-center gap-6 rounded border border-neutral-fillLow bg-neutral-surface p-2 -mb-2">
          <div className="flex flex-1 items-center gap-2">
            <KsAvatar shape="circle" size="sm">
              {userInitial}
            </KsAvatar>
            <span className="tiktok-labelMd text-neutral-highOnSurface">
              {userName}
            </span>
          </div>
          <KsIconButton
            size="xs"
            variant="text"
            aria-label="Account options"
          >
            <KsIconMoreVertical size={16} />
          </KsIconButton>
        </div>

        <KsSideNavigation>
          {SECTIONS.flatMap((section) => [
            <KsNavItem
              key={`${section.title}-title`}
              value={`${section.title}-title`}
              size="sm"
              disabled
            >
              <span className="tiktok-labelSm text-neutral-mediumOnSurface">
                {section.title}
              </span>
            </KsNavItem>,
            ...section.items.map((item) => {
              const active =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);
              return (
                <KsNavItem
                  key={item.value}
                  value={item.value}
                  size="md"
                  active={active}
                  onClick={() => handleNavigate(item.path)}
                >
                  <span slot="prefix">{item.icon}</span>
                  {item.label}
                </KsNavItem>
              );
            }),
          ])}
        </KsSideNavigation>
      </div>
    </div>
  );
}
