import type { Config } from 'tailwindcss';
import keystonePreset from '@fe-infra/tailwindcss-keystone-preset';

const preset = (keystonePreset as { default?: Partial<Config> }).default ?? keystonePreset;

export default {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  presets: [preset as Partial<Config>],
} satisfies Config;
