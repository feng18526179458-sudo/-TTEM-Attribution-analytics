import type { SVGProps } from "react";
import { AdsLogo } from "./svgs/AdsLogo";
import { AdsManagerLogo } from "./svgs/AdsManagerLogo";
import { BusinessCenterLogo } from "./svgs/BusinessCenterLogo";
import { CreativeSuiteLogo } from "./svgs/CreativeSuiteLogo";
import { ForBusinessLogo } from "./svgs/ForBusinessLogo";
import { ForPartnersLogo } from "./svgs/ForPartnersLogo";
import { HelpCenterLogo } from "./svgs/HelpCenterLogo";
import { OneLogo } from "./svgs/OneLogo";
import { OneIntelligenceLogo } from "./svgs/OneIntelligenceLogo";
import { SymphonyLogo } from "./svgs/SymphonyLogo";

export type LogoName =
  | "Ads"
  | "AdsManager"
  | "Business Center"
  | "Creative Suite"
  | "forBusiness"
  | "forPartners"
  | "Help Center"
  | "One"
  | "One Intelligence"
  | "Symphony";

type SvgComponent = React.FC<SVGProps<SVGSVGElement>>;

const LOGOS: Record<LogoName, SvgComponent> = {
  Ads: AdsLogo,
  AdsManager: AdsManagerLogo,
  "Business Center": BusinessCenterLogo,
  "Creative Suite": CreativeSuiteLogo,
  forBusiness: ForBusinessLogo,
  forPartners: ForPartnersLogo,
  "Help Center": HelpCenterLogo,
  One: OneLogo,
  "One Intelligence": OneIntelligenceLogo,
  Symphony: SymphonyLogo,
};

export interface LogoProps extends SVGProps<SVGSVGElement> {
  name?: LogoName;
}

export function Logo({
  name = "Symphony",
  ...rest
}: LogoProps) {
  const SvgComp = LOGOS[name];
  return <SvgComp role="img" aria-label={name} {...rest} />;
}