import svgPaths from "./svg-pmteny9sj5";

function TikTokLogo() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-0 top-[calc(50%-3px)] w-[83.966px]" data-name="TikTok Logo">
      <div className="absolute inset-[-2.5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.9656 21">
          <g id="TikTok Logo">
            <path d={svgPaths.p1036edc0} fill="var(--fill-0, #262627)" id="Simplified_Horizontal_Logo" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0">
      <div className="h-[28px] relative shrink-0 w-[180px]" data-name="Logo">
        <TikTokLogo />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['TikTok_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[90px] not-italic text-[#262627] text-[16px] top-[calc(50%+0.24px)] tracking-[0.0304px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[24px]">for Business</p>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#19dad1] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="avatar">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[20px]">J</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="label">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121415] text-[0px] tracking-[0.1608px] whitespace-nowrap">
        <p className="font-['TikTok_Sans_Text:Medium',sans-serif] leading-[16px] text-[12px]">Jamie Li</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#d3d4d5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative rounded-[100px]" data-name="KsAvatar">
            <Avatar />
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="KsLabel">
              <Label />
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="KsNavArrow">
            <div className="bg-[rgba(18,20,21,0)] content-stretch cursor-pointer flex items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shrink-0" data-name="KsButton">
              <div className="relative shrink-0 size-[14px]" data-name="size=14">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[9px] left-1/2 top-1/2 w-[2px]" data-name="icon">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 9">
                    <g id="icon">
                      <path d={svgPaths.p35aa6f70} fill="var(--fill-0, #6D6E70)" />
                      <path d={svgPaths.p24d9ff00} fill="var(--fill-0, #6D6E70)" />
                      <path d={svgPaths.p29f0dd00} fill="var(--fill-0, #6D6E70)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <div className="relative shrink-0 size-[20px]" data-name="AdsManager">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12.039px] left-[calc(50%-0.06px)] top-[calc(50%-0.07px)] w-[13.833px]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.833 12.0391">
            <path clipRule="evenodd" d={svgPaths.p3fbf0080} fill="var(--fill-0, #121415)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavTextLabel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="navTextLabel">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121415] text-[14px] tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[20px]">Ads Manager</p>
      </div>
    </div>
  );
}

function Leading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="leading">
      <Icon />
      <NavTextLabel />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px overflow-clip relative" data-name="content">
      <Leading />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <div className="relative shrink-0 size-[20px]" data-name="KsIconOrganicManager">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.833px] left-1/2 top-1/2 w-[14.269px]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2692 14.833">
            <path clipRule="evenodd" d={svgPaths.p1208af80} fill="var(--fill-0, #121415)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavTextLabel1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="navTextLabel">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121415] text-[14px] tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[20px]">Business Suite</p>
      </div>
    </div>
  );
}

function Leading1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="leading">
      <Icon1 />
      <NavTextLabel1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px overflow-clip relative z-[1]" data-name="content">
      <Leading1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="section 2">
      <div className="bg-[#e8fbf9] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center p-[10px] relative size-full">
            <Content />
          </div>
        </div>
      </div>
      <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center p-[10px] relative size-full">
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <div className="relative shrink-0 size-[20px]" data-name="KsIconTikTokOne">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13.553px] left-1/2 top-1/2 w-[13.5px]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5527">
            <path clipRule="evenodd" d={svgPaths.p19390980} fill="var(--fill-0, black)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavTextLabel2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="navTextLabel">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121415] text-[14px] tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[20px]">TikTok One</p>
      </div>
    </div>
  );
}

function Leading2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="leading">
      <Icon2 />
      <NavTextLabel2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px overflow-clip relative z-[1]" data-name="content">
      <Leading2 />
    </div>
  );
}

function Symphony() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="symphony">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="symphony">
          <g id="icon">
            <path d={svgPaths.p3898580} fill="var(--fill-0, #121415)" />
            <path d={svgPaths.p22709300} fill="var(--fill-0, #121415)" />
            <path d={svgPaths.p19042300} fill="var(--fill-0, #121415)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <Symphony />
    </div>
  );
}

function NavTextLabel3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="navTextLabel">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121415] text-[14px] tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[20px]">TikTok Symphony</p>
      </div>
    </div>
  );
}

function Leading3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="leading">
      <Icon3 />
      <NavTextLabel3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px overflow-clip relative z-[1]" data-name="content">
      <Leading3 />
    </div>
  );
}

function KsNavItem() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center p-[10px] relative size-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="section 1">
      <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center px-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['TikTok_Sans_Text:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#6d6e70] text-[12px] text-ellipsis tracking-[0.1608px] whitespace-nowrap z-[1]">
              <p className="leading-[16px] overflow-hidden text-ellipsis">Creative</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center p-[10px] relative size-full">
            <Content2 />
          </div>
        </div>
      </div>
      <KsNavItem />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="section 3">
      <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center px-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['TikTok_Sans_Text:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#6d6e70] text-[12px] text-ellipsis tracking-[0.1608px] whitespace-nowrap z-[1]">
              <p className="leading-[16px] overflow-hidden text-ellipsis">Connection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="KsIconLeadsCenter">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13.844px] left-1/2 top-1/2 w-[14px]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.8438">
            <path clipRule="evenodd" d={svgPaths.p2c05df80} fill="var(--fill-0, #121415)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavTextLabel4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="navTextLabel">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121415] text-[14px] tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[20px]">Leads Center</p>
      </div>
    </div>
  );
}

function Leading4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="leading">
      <Icon4 />
      <NavTextLabel4 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px overflow-clip relative z-[1]" data-name="content">
      <Leading4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <div className="relative shrink-0 size-[20px]" data-name="KsIconCoin">
        <div className="absolute inset-[12.81%_18.23%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7087 14.8755">
            <path d={svgPaths.p185d9e80} fill="var(--fill-0, #121415)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavTextLabel5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="navTextLabel">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121415] text-[14px] tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[20px]">Event Manager</p>
      </div>
    </div>
  );
}

function Leading5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="leading">
      <Icon5 />
      <NavTextLabel5 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px overflow-clip relative z-[1]" data-name="content">
      <Leading5 />
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="section 5">
      <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center px-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['TikTok_Sans_Text:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#6d6e70] text-[12px] text-ellipsis tracking-[0.1608px] whitespace-nowrap z-[1]">
              <p className="leading-[16px] overflow-hidden text-ellipsis">Planning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <div className="relative shrink-0 size-[20px]" data-name="KsIconPlaceholder">
        <div className="absolute inset-[12.6%_12.6%_12.61%_12.61%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9585 14.9585">
            <path clipRule="evenodd" d={svgPaths.p159f4600} fill="var(--fill-0, #121415)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavTextLabel6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="navTextLabel">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121415] text-[14px] tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[20px]">{`Apps & Agents`}</p>
      </div>
    </div>
  );
}

function Leading6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="leading">
      <Icon6 />
      <NavTextLabel6 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px overflow-clip relative z-[1]" data-name="content">
      <Leading6 />
    </div>
  );
}

function Section5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="section 6">
      <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center px-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['TikTok_Sans_Text:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#6d6e70] text-[12px] text-ellipsis tracking-[0.1608px] whitespace-nowrap z-[1]">
              <p className="leading-[16px] overflow-hidden text-ellipsis">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <div className="relative shrink-0 size-[20px]" data-name="Briefcase">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12.5px] left-1/2 top-1/2 w-[14.5px]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5002 12.5">
            <g id="icon">
              <path clipRule="evenodd" d={svgPaths.p3cc1c280} fill="var(--fill-0, #121415)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p150151c0} fill="var(--fill-0, #121415)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pa26b100} fill="var(--fill-0, #121415)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavTextLabel7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="navTextLabel">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121415] text-[14px] tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[20px]">Business</p>
      </div>
    </div>
  );
}

function Leading7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="leading">
      <Icon7 />
      <NavTextLabel7 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px overflow-clip relative z-[1]" data-name="content">
      <Leading7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <div className="relative shrink-0 size-[20px]" data-name="MoreHorizontal">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[2.5px] left-1/2 top-1/2 w-[11.5px]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 2.5">
            <g id="icon">
              <path d={svgPaths.p7142b00} fill="var(--fill-0, #121415)" />
              <path d={svgPaths.p1e86fcf0} fill="var(--fill-0, #121415)" />
              <path d={svgPaths.p19ef4880} fill="var(--fill-0, #121415)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavTextLabel8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="navTextLabel">
      <div className="[word-break:break-word] flex flex-col font-['TikTok_Sans_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121415] text-[14px] tracking-[0.0938px] whitespace-nowrap">
        <p className="leading-[20px]">All tools</p>
      </div>
    </div>
  );
}

function Leading8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="leading">
      <Icon8 />
      <NavTextLabel8 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px overflow-clip relative z-[2]" data-name="content">
      <Leading8 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="section 4">
      <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center p-[10px] relative size-full">
            <Content7 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] isolate items-center p-[10px] relative size-full">
            <Content8 />
            <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-name="KsNavArrow">
              <div className="bg-[rgba(18,20,21,0)] content-stretch cursor-pointer flex items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shrink-0 size-[20px]" data-name="KsButton">
                <div className="relative shrink-0 size-[14px]" data-name="size=14">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[11.5px] items-center justify-center left-1/2 top-1/2 w-[6.069px]">
                    <div className="flex-none rotate-90">
                      <div className="h-[6.069px] relative w-[11.5px]" data-name="icon">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.06878">
                          <path clipRule="evenodd" d={svgPaths.p28be1f80} fill="var(--fill-0, #121415)" fillRule="evenodd" id="icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center px-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['TikTok_Sans_Text:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#6d6e70] text-[12px] text-ellipsis tracking-[0.1608px] whitespace-nowrap z-[1]">
              <p className="leading-[16px] overflow-hidden text-ellipsis">Platforms</p>
            </div>
          </div>
        </div>
      </div>
      <Section1 />
      <Section />
      <Section2 />
      <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center p-[10px] relative size-full">
            <Content4 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center p-[10px] relative size-full">
            <Content5 />
          </div>
        </div>
      </div>
      <Section4 />
      <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="KsNavItem">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-center p-[10px] relative size-full">
            <Content6 />
          </div>
        </div>
      </div>
      <Section5 />
      <Section3 />
    </div>
  );
}

export default function GlobalNav() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_6px_rgba(0,0,0,0.12)] flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative rounded-[8px] size-full" data-name="globalNav0411">
      <Frame1 />
      <Frame />
      <Frame2 />
    </div>
  );
}