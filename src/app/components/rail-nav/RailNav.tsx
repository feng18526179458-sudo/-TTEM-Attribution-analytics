import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
  KsIconChevronRight,
  KsIconChevronUp,
} from '@fe-infra/keystone-icons-react';

interface RailItem {
  value: string;
  label: string;
  expandedLabel?: string;
  path: string;
  iconSrc: string;
}

const ASSET_CHILDREN = ['Creative library', 'Events manager', 'Catalog manager'];

function NavIcon({ src, label }: { src: string; label: string }) {
  return <img src={src} alt="" aria-hidden="true" className="block h-5 w-5 shrink-0" draggable={false} data-nav-icon={label} />;
}

const ITEMS: RailItem[] = [
  { value: 'dashboard', label: 'Dashboard', path: '/', iconSrc: '/nav-icons/dashboard.svg' },
  { value: 'campaigns', label: 'Campaigns', path: '/campaigns', iconSrc: '/nav-icons/campaigns.svg' },
  { value: 'assets', label: 'Assets', path: '/assets', iconSrc: '/nav-icons/assets.svg' },
  { value: 'custom-reports', label: 'Custom reports', path: '/custom-reports', iconSrc: '/nav-icons/custom-reports.svg' },
  { value: 'billing', label: 'Billing', expandedLabel: 'Payment', path: '/billing', iconSrc: '/nav-icons/payment.svg' },
  { value: 'account-settings', label: 'Account settings', expandedLabel: 'Account setup', path: '/account-settings', iconSrc: '/nav-icons/account-setup.svg' },
  { value: 'gmv-max', label: 'GMV Max', path: '/gmv-max', iconSrc: '/nav-icons/gmv-max.svg' },
  { value: 'more-tools', label: 'More tools', path: '/more-tools', iconSrc: '/nav-icons/more-tools.svg' },
];

const COLLAPSED_WIDTH = 60;
const EXPANDED_WIDTH = 240;
const MORE_TOOLS_PANEL_WIDTH = 504;

type MoreToolsEntry = {
  label: string;
  badge?: 'New';
  external?: boolean;
};

type MoreToolsSection = {
  title: string;
  items: MoreToolsEntry[];
};

const MORE_TOOLS_COLUMNS: MoreToolsSection[][] = [
  [
    {
      title: 'Creatives',
      items: [
        { label: 'Instant page' },
        { label: 'Video editor', badge: 'New', external: true },
        { label: 'TikTok Symphony', external: true },
        { label: 'Creative inspiration' },
        { label: 'Content Suite', badge: 'New' },
        { label: 'Ad Preview Tool', badge: 'New', external: true },
      ],
    },
    {
      title: 'Audience',
      items: [
        { label: 'Audience Manager' },
        { label: 'Comments Manager' },
        { label: 'Audience controls' },
      ],
    },
    {
      title: 'Search center',
      items: [
        { label: 'Keyword planner', badge: 'New' },
        { label: 'Negative keywords' },
        { label: 'Branded search hub' },
        { label: 'Search ads inspiration', badge: 'New' },
      ],
    },
  ],
  [
    {
      title: 'Analytics',
      items: [
        { label: 'Experiment manager' },
        { label: 'Audience insights' },
        { label: 'Comment insights' },
        { label: 'Attribution analytics' },
        { label: 'Video insights' },
      ],
    },
    {
      title: 'Management',
      items: [
        { label: 'Recommendation center' },
        { label: 'Automated rules' },
        { label: 'Leads Center', external: true },
        { label: 'Planner', badge: 'New', external: true },
        { label: 'Pulse Custom lineup', external: true },
        { label: 'Pangle brand safety' },
        { label: 'Mission manager' },
        { label: 'MMM Data Request' },
      ],
    },
  ],
];

function ExternalIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4H4.5C3.94772 4 3.5 4.44772 3.5 5V11.5C3.5 12.0523 3.94772 12.5 4.5 12.5H11C11.5523 12.5 12 12.0523 12 11.5V10" stroke="#8a8f93" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 3.5H12.5V7.5" stroke="#8a8f93" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 8.5L12.25 3.75" stroke="#8a8f93" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NewBadge() {
  return (
    <span className="ml-1.5 inline-flex h-5 shrink-0 items-center rounded-[4px] bg-[#eeeaff] px-1.5 text-[12px] font-medium leading-4 tracking-[0.01em] text-[#5f47e8]">
      New
    </span>
  );
}

function MoreToolsPanel() {
  return (
    <div className="h-full w-[504px] shrink-0 border-r border-solid border-[#d3d4d5] bg-white px-4 py-6">
      <div className="flex h-6 items-center pl-2 text-[16px] font-medium leading-6 tracking-[0.01em] text-[#1f1f1f]">
        More tools
      </div>
      <div className="mt-3 flex gap-8">
        {MORE_TOOLS_COLUMNS.map((column, columnIndex) => (
          <div key={columnIndex} className="flex w-[220px] shrink-0 flex-col gap-0.5">
            {column.map((section, sectionIndex) => (
              <div key={section.title} className="flex flex-col gap-0.5">
                {sectionIndex > 0 && <div className="flex w-[220px] py-3"><div className="h-px w-full bg-[#d3d4d5]" /></div>}
                <div className="flex h-9 items-center rounded-[4px] px-2 text-[14px] font-medium leading-5 tracking-[0.01em] text-[#1f1f1f]">
                  {section.title}
                </div>
                {section.items.map((entry) => (
                  <button
                    key={entry.label}
                    type="button"
                    className="flex h-9 w-[220px] items-center rounded-[4px] border-0 bg-white p-2 text-left text-[14px] font-normal leading-5 tracking-[0.01em] text-[#121415] outline-none hover:bg-[#f4f5f5] focus-visible:ring-2 focus-visible:ring-[#12c99b]/40"
                  >
                    <span className="min-w-0 truncate">{entry.label}</span>
                    {entry.badge && <NewBadge />}
                    {entry.external && <span className="ml-auto pl-2"><ExternalIcon /></span>}
                  </button>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function RailNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [hovered, setHovered] = useState(false);
  const [moreToolsOpen, setMoreToolsOpen] = useState(false);

  const expanded = hovered || moreToolsOpen;
  const collapsed = !expanded;

  const style = useMemo(
    () => ({
      width: expanded ? EXPANDED_WIDTH + (moreToolsOpen ? MORE_TOOLS_PANEL_WIDTH : 0) : COLLAPSED_WIDTH,
      backgroundColor: '#ffffff',
    }),
    [expanded, moreToolsOpen],
  );
  const railItemClass = (active: boolean) =>
    [
      'group flex h-10 shrink-0 items-center border-0 text-[#1f1f1f] outline-none',
      'transition-[background-color,color,width,padding] duration-200 ease-out',
      'focus-visible:ring-2 focus-visible:ring-[#12c99b]/40',
      collapsed
        ? 'w-10 justify-center rounded-[6px] p-0'
        : 'w-[216px] justify-start gap-3 rounded-[6px] px-3',
      active ? 'bg-[#e7fbf7]' : 'bg-white hover:bg-[#f4f5f5]',
    ].join(' ');
  const expandedItemClass = (highlighted: boolean) =>
    [
      'group flex h-10 w-[220px] shrink-0 items-center gap-3 rounded-[6px] border-0 px-2.5 text-[#1f1f1f] outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#12c99b]/40',
      highlighted ? 'bg-[#f0f1f1]' : 'bg-white hover:bg-[#f4f5f5]',
    ].join(' ');

  return (
    <aside
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed left-0 top-[68px] bottom-0 z-50 overflow-hidden border-x border-solid border-[#d3d4d5] bg-white transition-[width] duration-200 ease-out"
      aria-label="Primary navigation"
    >
      <div className="flex h-full items-start">
      <nav className={`flex h-full shrink-0 flex-col items-center px-2.5 pb-4 ${expanded ? 'w-[240px] border-r border-solid border-[#d3d4d5] pt-4' : 'w-[60px] pt-4'}`}>
        <div className="flex flex-col items-center gap-1">
        {ITEMS.map((item) => {
          const active = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);
          const visualLabel = expanded ? item.expandedLabel ?? item.label : item.label;
          const moreToolsItemOpen = item.value === 'more-tools' && moreToolsOpen;
          return (
            <div key={item.value} className={expanded ? 'flex flex-col items-start' : ''}>
            <button
              type="button"
              aria-label={visualLabel}
              aria-current={active ? 'page' : undefined}
              title={collapsed ? visualLabel : undefined}
              className={expanded ? expandedItemClass(moreToolsItemOpen) : railItemClass(active)}
              onClick={() => {
                if (item.value === 'more-tools') {
                  setMoreToolsOpen(true);
                  return;
                }
                setMoreToolsOpen(false);
                navigate(item.path);
              }}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                <NavIcon src={item.iconSrc} label={item.value} />
              </span>
              {expanded && (
                <span className="min-w-0 flex-1 truncate text-left text-[14px] font-medium leading-5 tracking-[0.01em] text-[#1f1f1f]">
                  {visualLabel}
                </span>
              )}
              {expanded && item.value === 'assets' && (
                <KsIconChevronUp className="ml-auto h-4 w-4 shrink-0 text-[#606568]" size={16} />
              )}
              {expanded && item.value === 'more-tools' && (
                <KsIconChevronRight className="ml-auto h-4 w-4 shrink-0 text-[#1f1f1f]" size={16} />
              )}
            </button>
            {expanded && item.value === 'assets' && (
              <div className="flex flex-col items-start py-0.5">
                {ASSET_CHILDREN.map((child) => (
                  <div
                    key={child}
                    className="flex h-10 w-[220px] items-center rounded-[6px] pl-[46px] pr-2.5 text-[14px] font-normal leading-5 tracking-[0.01em] text-[#1f1f1f]"
                  >
                    {child}
                  </div>
                ))}
              </div>
            )}
            </div>
          );
        })}
        </div>
      </nav>
      {moreToolsOpen && <MoreToolsPanel />}
      </div>
    </aside>
  );
}
