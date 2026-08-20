import { useEffect, useRef, useState } from "react";
import {
  KsButton,
  KsSegmentedControl,
  KsSegmentedControlItem,
} from "@byted-keystone/react";
import {
  KsIconChevronLeft,
  KsIconChevronRight,
  KsIconLog,
  KsIconNewWindow,
} from "@fe-infra/keystone-icons-react";

const asset = (name: string) => `/figma-dashboard/${name}`;

const metricCards = [
  { label: "Impressions", value: "502,345", delta: "10.1%", trend: "up" },
  { label: "Cost", value: "28,360.15", suffix: "USD", delta: "5.1%", trend: "down" },
  { label: "Click", value: "62,217", delta: "10.1%", trend: "up" },
  { label: "Conversions", value: "3,523", delta: "10.1%", trend: "up" },
] as const;

type MetricLabel = (typeof metricCards)[number]["label"];
type ViewMode = "graph" | "data";

const metricSelectionColors: Record<MetricLabel, string> = {
  Impressions: "#7cc0ed",
  Cost: "#6480e6",
  Click: "#7cc0ed",
  Conversions: "#6480e6",
};

const metricCardHeights: Record<MetricLabel, string> = {
  Impressions: "h-[79px]",
  Cost: "h-[77px]",
  Click: "h-[79px]",
  Conversions: "h-[79px]",
};

const statusItems = [
  { count: "23", label: "Active", tone: "success" },
  { count: "18", label: "Disapproved", tone: "error" },
  { count: "2", label: "Out of budget", tone: "warning" },
] as const;

const countries = [
  { label: "USA", value: "77%", delta: "10.1%", trend: "up" },
  { label: "UK", value: "20%", delta: "5.1%", trend: "down" },
  { label: "Singapore", value: "3%", delta: "5.1%", trend: "up" },
] as const;

function SectionTitle({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex w-full items-center justify-between">
      <h2 className="font-['TikTok_Sans_Display'] text-[20px] font-medium leading-7 text-[#121415]">
        {title}
      </h2>
      {action}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg bg-[#ffffff] ${className}`}>
      {children}
    </div>
  );
}

function Delta({
  value,
  trend,
}: {
  value: string;
  trend: "up" | "down";
}) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-[12px] leading-4 ${
        trend === "up" ? "text-[#15803d]" : "text-[#d84545]"
      }`}
    >
      <span className="relative block size-[14px]">
        <img
          alt=""
          className="absolute left-[-1.9px] top-[-1.9px] size-[17.8px]"
          src={asset(trend === "up" ? "metric-up-bg.svg" : "metric-down-bg.svg")}
        />
        <img
          alt=""
          className="absolute left-[2.4px] top-[1px] h-[11.4px] w-[9.2px]"
          src={asset(trend === "up" ? "metric-up-arrow.svg" : "metric-down-arrow.svg")}
        />
      </span>
      {trend === "up" ? "+" : "-"} {value}
    </span>
  );
}

function RecommendationIcon({ type }: { type: "cursor" | "approval" }) {
  if (type === "cursor") {
    return (
      <div className="relative size-[72px] shrink-0 overflow-hidden">
        <img alt="" className="absolute left-[37.4px] top-[37.1px] size-[27.7px]" src={asset("ellipse-2228.svg")} />
        <img alt="" className="absolute left-[51.2px] top-[42.2px] size-[5px]" src={asset("ellipse-2221.svg")} />
        <img alt="" className="absolute left-[17.5px] top-[9.7px] size-[7px]" src={asset("ellipse-2231.svg")} />
        <img alt="" className="absolute inset-[11.7%_10%_10%_10%]" src={asset("recommendation-cursor.svg")} />
      </div>
    );
  }

  return (
    <div className="relative size-[72px] shrink-0 overflow-hidden">
      <img alt="" className="absolute left-[35.5px] top-[7.6px] size-[29.3px]" src={asset("ellipse-2230.svg")} />
      <img alt="" className="absolute left-[9px] top-[9.2px] size-[7px]" src={asset("ellipse-2229.svg")} />
      <img alt="" className="absolute left-[60.6px] top-[18.8px] size-[5px]" src={asset("ellipse-2220.svg")} />
      <img
        alt=""
        className="absolute left-[7.2px] top-[5.2px] h-[61.6px] w-[57.6px] -rotate-10"
        src={asset("recommendation-rocket.svg")}
      />
    </div>
  );
}

function RecommendationCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="flex min-h-[160px] flex-1 items-start gap-4 p-4">
      {children}
    </Card>
  );
}

function StatusBadge({
  count,
  tone,
}: {
  count: string;
  tone: "success" | "error" | "warning";
}) {
  const tones = {
    success: "bg-[#e2f8e8] text-[#008a3d]",
    error: "bg-[#ffe8e8] text-[#d83b3b]",
    warning: "bg-[#fff2c8] text-[#8a6500]",
  };

  return (
    <span className={`inline-flex h-6 min-w-8 items-center justify-center rounded px-1.5 text-[12px] font-medium leading-4 ${tones[tone]}`}>
      {count}
    </span>
  );
}

function SmallSelect({ label }: { label: string }) {
  return (
    <button className="flex h-9 min-w-[188px] items-center justify-between rounded border border-solid border-[#d3d4d5] bg-white px-3 text-left text-[14px] leading-5 text-[#121415]">
      {label}
      <KsIconChevronRight className="rotate-90 text-[#6d6e70]" size={16} />
    </button>
  );
}

function PerformanceChart({
  selectedMetrics,
  showTopCampaigns,
  onToggleTopCampaigns,
}: {
  selectedMetrics: MetricLabel[];
  showTopCampaigns: boolean;
  onToggleTopCampaigns: () => void;
}) {
  const days = ["Sep 6", "Sep 7", "Sep 8", "Sep 9", "Sep 10", "Sep 11", "Sep 12", "Sep 13,\n2023"];

  return (
    <div className="relative min-h-[392px] flex-1">
      <div className="absolute left-0 right-0 top-0 flex items-center justify-between">
        <h3 className="text-[14px] font-medium leading-5 text-[#121415]">Trend</h3>
        <div className="flex items-center gap-2 text-[14px] leading-5 text-[#121415]">
          View top 5 campaigns
          <button
            aria-checked={showTopCampaigns}
            aria-label="View top 5 campaigns"
            className={`relative h-6 w-10 rounded-[50px] transition-colors ${
              showTopCampaigns ? "bg-[#009995]" : "bg-[#d3d4d5]"
            }`}
            onClick={onToggleTopCampaigns}
            role="switch"
            type="button"
          >
            <span
              className={`absolute top-1 flex size-4 items-center justify-center rounded-[16px] bg-[#ffffff] p-0.5 transition-[left] ${
                showTopCampaigns ? "left-[22px]" : "left-0.5"
              }`}
              style={{ filter: "drop-shadow(0px 2px 2px rgba(65, 65, 65, 0.19))" }}
            >
              {showTopCampaigns ? null : (
                <img alt="" className="size-3" src={asset("switch-close-seall.svg")} />
              )}
            </span>
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-2 top-[48px]">
        <div className="absolute inset-x-0 top-0 h-px bg-[#ececed]" />
        <div className="absolute inset-x-0 top-[18.4%] h-px bg-[#ececed]" />
        <div className="absolute inset-x-0 top-[36.8%] h-px bg-[#ececed]" />
        <div className="absolute inset-x-0 top-[55.3%] h-px bg-[#ececed]" />
        <div className="absolute inset-x-0 top-[73.7%] h-px bg-[#ececed]" />
        <div className="absolute inset-x-0 top-[92.1%] h-px bg-[#d3d4d5]" />

        {selectedMetrics.includes("Impressions") ? (
          <img
            alt=""
            className="absolute left-[4.2%] right-[4.2%] top-[21.8%] h-[53%] w-[91.6%]"
            src={asset("chart-line-purple.svg")}
          />
        ) : null}
        {selectedMetrics.includes("Cost") ? (
          <img
            alt=""
            className="absolute left-[4.2%] right-[4.2%] top-[42.8%] h-[32.2%] w-[91.6%]"
            src={asset("chart-line-blue.svg")}
          />
        ) : null}

        <div className="absolute inset-x-0 bottom-0 grid translate-y-6 grid-cols-8 text-center text-[12px] leading-4 text-[#87898b]">
          {days.map((day) => (
            <span key={day} className="whitespace-pre-line">
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCardCorner({ color }: { color: string }) {
  return (
    <span aria-hidden="true" className="absolute right-0 top-0 size-7 overflow-hidden rounded-tr-lg">
      <span
        className="absolute right-0 top-0 h-0 w-0 border-l-[28px] border-t-[28px] border-l-transparent"
        style={{ borderTopColor: color }}
      />
      <span className="absolute right-[3px] top-[4px] h-[5px] w-2 rotate-[-45deg] border-b-2 border-l-2 border-white text-[#ffffff]" />
    </span>
  );
}

function MetricCardDelta({
  value,
  trend,
}: {
  value: string;
  trend: "up" | "down";
}) {
  const color = trend === "up" ? "#057e33" : "#ca242e";

  return (
    <span className="flex shrink-0 items-center gap-0.5 text-[10px] leading-5" style={{ color }}>
      <img
        alt=""
        className={`h-[7.5px] w-[5.7px] ${trend === "down" ? "rotate-180" : ""}`}
        src={asset(trend === "up" ? "metric-card-arrow-up.svg" : "metric-card-arrow-down.svg")}
      />
      {value}
    </span>
  );
}

function PerformanceDataTable({
  selectedMetrics,
  showTopCampaigns,
}: {
  selectedMetrics: MetricLabel[];
  showTopCampaigns: boolean;
}) {
  const rows = metricCards.filter((card) => selectedMetrics.includes(card.label));

  return (
    <div className="min-h-[392px] flex-1 pt-[48px]">
      <div className="overflow-hidden rounded-lg border border-solid border-[#d3d4d5]">
        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] bg-[#f8f8f9] px-4 py-3 text-[12px] font-medium leading-4 text-[#6d6e70]">
          <span>Metric</span>
          <span>Current</span>
          <span>Change</span>
          <span>{showTopCampaigns ? "Top campaigns" : "Status"}</span>
        </div>
        {rows.length > 0 ? (
          rows.map((card) => (
            <div
              className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-t border-solid border-[#ececed] bg-white px-4 py-4 text-[14px] leading-5 text-[#121415]"
              key={card.label}
            >
              <span className="font-medium">{card.label}</span>
              <span>
                {card.value}
                {"suffix" in card ? <span className="ml-1 text-[#6d6e70]">{card.suffix}</span> : null}
              </span>
              <Delta value={card.delta} trend={card.trend} />
              <span className="text-[#6d6e70]">{showTopCampaigns ? "Enabled" : "Selected"}</span>
            </div>
          ))
        ) : (
          <div className="border-t border-solid border-[#ececed] bg-white px-4 py-10 text-center text-[14px] leading-5 text-[#6d6e70]">
            Select at least one metric
          </div>
        )}
      </div>
    </div>
  );
}

function Thumbnail({ src }: { src: string }) {
  return (
    <div className="relative size-[120px] shrink-0 overflow-hidden rounded border border-solid border-[#d3d4d5] bg-[#f2f3f3]">
      <img alt="" className="size-full object-cover" src={asset(src)} />
      <span className="absolute left-[47px] top-[47px] flex size-6 items-center justify-center">
        <img alt="" className="size-[19.5px]" src={asset("play.svg")} />
      </span>
    </div>
  );
}

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("graph");
  const [selectedMetrics, setSelectedMetrics] = useState<MetricLabel[]>(["Impressions", "Cost"]);
  const [showTopCampaigns, setShowTopCampaigns] = useState(false);
  const viewModeSegmentRef = useRef<HTMLElement | null>(null);

  const toggleMetric = (label: MetricLabel) => {
    setSelectedMetrics((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  };

  useEffect(() => {
    const node = viewModeSegmentRef.current;
    if (!node) {
      return;
    }

    const handleChange = (event: Event) => {
      setViewMode((event as CustomEvent<ViewMode>).detail);
    };

    node.addEventListener("ksChange", handleChange);
    return () => node.removeEventListener("ksChange", handleChange);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col bg-neutral-surface3 pb-6">
      <header className="flex w-full items-center justify-between bg-neutral-surface3 p-6">
        <h1 className="font-['TikTok_Sans_Display'] text-[32px] font-medium leading-10 text-[#121415]">
          Welcome to Ads Manager
        </h1>
        <div className="flex items-center gap-2">
          <KsButton size="md" variant="default">
            <KsIconLog size={16} />
            log
          </KsButton>
          <KsButton size="md" variant="primary">Create ad</KsButton>
        </div>
      </header>

      <main className="flex flex-col gap-6 px-6">
        <section className="flex flex-col gap-4">
          <SectionTitle
            title="Recommendations"
            action={
              <KsButton size="md" variant="text">
                View all recommendations
                <KsIconNewWindow size={16} />
              </KsButton>
            }
          />
          <div className="flex gap-4">
            <RecommendationCard>
              <div className="flex size-[72px] shrink-0 flex-col items-center justify-center gap-2">
                <span className="font-['TikTok_Sans_Display'] text-[32px] font-medium leading-10 text-[#121415]">
                  60%
                </span>
                <span className="h-2 w-[52px] overflow-hidden rounded-full bg-[#ececed]">
                  <span className="block h-full w-[60%] rounded-full bg-[#c79a00]" />
                </span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <div>
                  <h3 className="text-[16px] font-medium leading-6 text-[#121415]">Optimization score</h3>
                  <p className="mt-1 max-w-[280px] text-[14px] leading-5 text-[#121415]">
                    Get scored recommendations tailored to your campaign performance and optimization opportunities.
                  </p>
                </div>
                <KsButton size="md" variant="default">View insights</KsButton>
              </div>
            </RecommendationCard>

            <RecommendationCard>
              <RecommendationIcon type="cursor" />
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <div>
                  <h3 className="text-[16px] font-medium leading-6 text-[#121415]">Recommendation title</h3>
                  <p className="mt-1 text-[14px] leading-5 text-[#121415]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
                <KsButton size="md" variant="default">Action</KsButton>
              </div>
            </RecommendationCard>

            <RecommendationCard>
              <RecommendationIcon type="approval" />
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <div>
                  <h3 className="text-[16px] font-medium leading-6 text-[#121415]">Recommendation title</h3>
                  <p className="mt-1 text-[14px] leading-5 text-[#121415]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
                <KsButton size="md" variant="default">Action</KsButton>
              </div>
            </RecommendationCard>
          </div>
        </section>

        <section className="grid grid-cols-[400px_1fr] gap-4">
          <div className="flex flex-col gap-4">
            <section className="flex flex-col gap-4">
              <SectionTitle title="Account overview" />
              <Card className="flex h-[244px] flex-col justify-between px-6 py-4">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-[14px] font-medium leading-5 text-[#121415]">Available balance</p>
                    <p className="mt-2 font-['TikTok_Sans_Display'] text-[24px] font-medium leading-8 text-[#121415]">
                      15,546.86 <span className="font-['TikTok_Sans_Text'] text-[14px] font-normal leading-5 text-[#6d6e70]">USD</span>
                    </p>
                  </div>
                  <KsButton size="md" variant="text">
                    Manage
                    <KsIconChevronRight size={16} />
                  </KsButton>
                </div>
                <div className="h-px bg-[#d3d4d5]" />
                <div>
                  <p className="text-[14px] font-medium leading-5 text-[#121415]">Today's spend</p>
                  <p className="mt-2 font-['TikTok_Sans_Display'] text-[24px] font-medium leading-8 text-[#121415]">
                    18,000.00 <span className="font-['TikTok_Sans_Text'] text-[14px] font-normal leading-5 text-[#6d6e70]">USD</span>
                  </p>
                </div>
              </Card>
            </section>

            <section className="flex flex-1 flex-col gap-4">
              <SectionTitle title="Ad group status" />
              <Card className="flex min-h-[244px] flex-1 flex-col justify-between overflow-hidden px-6 py-4">
                {statusItems.map((item, index) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StatusBadge count={item.count} tone={item.tone} />
                        <span className="text-[14px] font-medium leading-5 text-[#121415]">{item.label}</span>
                      </div>
                      <KsButton size="md" variant="text">
                        View details
                        <KsIconChevronRight size={16} />
                      </KsButton>
                    </div>
                    {index < statusItems.length - 1 ? <div className="mt-4 h-px bg-[#d3d4d5]" /> : null}
                  </div>
                ))}
              </Card>
            </section>
          </div>

          <section className="flex flex-col gap-4">
            <SectionTitle title="Performance" />
            <Card className="min-h-[552px] overflow-hidden pb-2">
              <div className="flex items-center justify-between px-6 pb-4 pt-6">
                <KsSegmentedControl
                  className="dashboard-view-mode-segment"
                  ref={viewModeSegmentRef}
                  value={viewMode}
                >
                  <KsSegmentedControlItem value="graph">Graph</KsSegmentedControlItem>
                  <KsSegmentedControlItem value="data">Data</KsSegmentedControlItem>
                </KsSegmentedControl>
                <button className="flex h-9 items-center gap-2 rounded border border-solid border-[#d3d4d5] bg-white px-3 text-[14px] leading-5 text-[#121415]">
                  May 11, 2024 - May 17, 2024 (UTC-05:00) Eastern Standard Time
                </button>
              </div>
              <div className="flex gap-6 px-6 py-4">
                <div className="flex h-[362px] w-[176px] shrink-0 flex-col gap-4">
                  {metricCards.map((card) => {
                    const active = selectedMetrics.includes(card.label);
                    const selectionColor = metricSelectionColors[card.label];

                    return (
                      <button
                        aria-pressed={active}
                        className={`relative flex w-full shrink-0 flex-col justify-end rounded-lg border border-solid bg-[#ffffff] p-4 text-left ${metricCardHeights[card.label]}`}
                        key={card.label}
                        onClick={() => toggleMetric(card.label)}
                        style={{ borderColor: active ? selectionColor : "#d3d4d5" }}
                        type="button"
                      >
                        {active ? <MetricCardCorner color={selectionColor} /> : null}
                        <div className="flex w-full flex-col gap-1">
                          <div className="flex h-[17px] w-full items-center">
                            <span className="font-['TikTok_Sans_Text'] text-[12px] font-normal leading-5 text-[#121415]">
                              {card.label}
                            </span>
                            <KsIconChevronRight className="ml-1 rotate-90 text-[#121415]" size={12} />
                          </div>
                          <div className="flex w-full items-end gap-1">
                            <div className="flex min-w-0 flex-1 items-end gap-px whitespace-nowrap">
                              <span className="font-['TikTok_Sans_Text'] text-[16px] font-medium leading-6 text-[#121415]">
                                {card.value}
                              </span>
                              {"suffix" in card ? (
                                <span className="pb-0.5 font-['TikTok_Sans_Text'] text-[10px] font-normal leading-5 text-[#262627]">
                                  {card.suffix}
                                </span>
                              ) : null}
                            </div>
                            <MetricCardDelta value={card.delta} trend={card.trend} />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {viewMode === "graph" ? (
                  <PerformanceChart
                    onToggleTopCampaigns={() => setShowTopCampaigns((current) => !current)}
                    selectedMetrics={selectedMetrics}
                    showTopCampaigns={showTopCampaigns}
                  />
                ) : (
                  <PerformanceDataTable
                    selectedMetrics={selectedMetrics}
                    showTopCampaigns={showTopCampaigns}
                  />
                )}
              </div>
            </Card>
          </section>
        </section>

        <section className="grid grid-cols-[816px_400px] gap-4">
          <section className="flex flex-col gap-4">
            <SectionTitle title="Insights" />
            <Card className="min-h-[542px] overflow-hidden pb-2">
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[16px] font-medium leading-6 text-[#121415]">Your top ads</h3>
                    <p className="mt-1 max-w-[520px] text-[14px] leading-5 text-[#6d6e70]">
                      Consider concentrating your budget on high-performing videos that deliver more results to your campaign objectives. <span className="text-[#009995]">View analysis</span>
                    </p>
                  </div>
                  <SmallSelect label="Impressions" />
                </div>
                <div className="rounded bg-[#f8f8f9] p-4">
                  <div className="flex gap-4 overflow-hidden">
                    <Thumbnail src="ad-thumb-1.png" />
                    <Thumbnail src="ad-thumb-2.png" />
                    <Thumbnail src="ad-thumb-3.png" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 px-6 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[16px] font-medium leading-6 text-[#121415]">Reached audience</h3>
                    <p className="mt-1 max-w-[520px] text-[14px] leading-5 text-[#6d6e70]">
                      Consider including high-performing interest tags into your campaign targeting for enhanced performance. <span className="text-[#009995]">View analysis</span>
                    </p>
                  </div>
                  <SmallSelect label="Country" />
                </div>
                <div className="grid grid-cols-3 overflow-hidden rounded-md bg-[#f8f8f9]">
                  {countries.map((country) => (
                    <div key={country.label} className="p-6">
                      <p className="text-[16px] font-medium leading-6 text-[#121415]">{country.label}</p>
                      <div className="mt-1 flex items-end gap-2">
                        <span className="font-['TikTok_Sans_Display'] text-[32px] font-medium leading-10 text-[#121415]">
                          {country.value}
                        </span>
                        <span className="pb-2">
                          <Delta value={country.delta} trend={country.trend} />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          <section className="flex flex-col gap-4">
            <SectionTitle
              title="Updates"
              action={
                <div className="flex items-center gap-2 text-[14px] leading-5 text-[#121415]">
                  <KsIconChevronLeft size={16} className="text-[#a9abac]" />
                  1 / 3
                  <KsIconChevronRight size={16} className="text-[#6d6e70]" />
                </div>
              }
            />
            <Card className="h-[364px] overflow-hidden pb-2">
              <div className="p-6">
                <div className="relative h-[200px] overflow-hidden rounded-md bg-[#f1edeb]">
                  <img
                    alt=""
                    className="absolute inset-[-54%_-25.2%_-38.2%_-19.4%] h-[192.2%] w-[144.6%] object-cover"
                    src={asset("update-bg.png")}
                  />
                  <img
                    alt=""
                    className="absolute inset-[11.5%_13.2%_11.8%_13%] h-[76.7%] w-[73.8%] object-cover"
                    src={asset("update-device.png")}
                  />
                  <img alt="" className="absolute bottom-[-38.3%] left-0 top-0 w-[8.7%]" src={asset("safe-zone.svg")} />
                  <img alt="" className="absolute bottom-[-38.3%] right-0 top-0 w-[8.7%]" src={asset("safe-zone.svg")} />
                  <img alt="" className="absolute inset-x-0 top-0 h-[15%]" src={asset("safe-zone-rotated.svg")} />
                  <img alt="" className="absolute inset-x-0 bottom-0 h-[15%]" src={asset("safe-zone-rotated.svg")} />
                </div>
                <h3 className="mt-4 text-[16px] font-medium leading-6 text-[#121415]">
                  Check out the Catalog manager upgrade!
                </h3>
              </div>
              <div className="flex gap-2 px-6 py-4">
                <KsButton size="md" variant="default">Check now</KsButton>
                <KsButton size="md" variant="text">Learn more</KsButton>
              </div>
            </Card>
          </section>
        </section>
      </main>
    </div>
  );
}
