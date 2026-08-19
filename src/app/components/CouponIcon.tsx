export interface CouponIconProps {
  size?: number;
}

export function CouponIcon({ size = 24 }: CouponIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 8.00001L16.9999 3L19.0001 8.00001" fill="#03837F" />
      <path d="M4.5 8.00001L16.9999 3L19.0001 8.00001" stroke="#03837F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 8H22V11C20.5 11 19 12 19 13.75C19 15.5 20.5 17 22 17V20H2V17C3.50008 17 5 16 5 14C5 12 3.5 11 2 11V8Z" fill="#89BDB9" stroke="#89BDB9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 12.6924H11.5" stroke="#003D3B" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.5 15.6924H15.5" stroke="#003D3B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
