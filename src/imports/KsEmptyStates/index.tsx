import imgImage273 from "./c7d937c1505738034827a2de3aa5301b823ef14d.png";

function Illustration() {
  return (
    <div className="content-stretch flex h-[280px] items-center justify-center relative shrink-0" data-name="illustration">
      <div className="relative shrink-0 size-[400px]" data-name="KsHeroIllustration">
        <div className="absolute left-0 size-[400px] top-0" data-name="image 273">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage273} />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center" data-name="Text">
      <p className="font-['TikTok_Sans_Text:Medium',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[#121415] text-[16px] tracking-[0.0304px] w-[min-content]">Page not found</p>
      <p className="font-['TikTok_Sans_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#6d6e70] text-[14px] tracking-[0.0938px] w-[400px]">Use clear sentences to explain why the space is empty and the next action.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[8px] items-start justify-center relative shrink-0" data-name="Button">
      <div className="bg-[#f8f8f9] h-[36px] relative rounded-[4px] shrink-0" data-name="KsButton">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['TikTok_Sans_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#121415] text-[14px] text-center tracking-[0.0938px] whitespace-nowrap">Button</p>
        </div>
        <div aria-hidden className="absolute border border-[#87898b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-[#009995] content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="KsButton">
        <p className="[word-break:break-word] font-['TikTok_Sans_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.0938px] whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[400px]" data-name="Content">
      <Text />
      <Button />
    </div>
  );
}

export default function KsEmptyStates() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full" data-name="KsEmptyStates">
      <Illustration />
      <Content />
    </div>
  );
}