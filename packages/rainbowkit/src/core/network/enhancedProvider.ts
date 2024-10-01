import { createHttpClient } from './internal/createHttpClient';

const RAINBOW_PROVIDER_API_KEY =
  (typeof process !== 'undefined' &&
    typeof process.env !== 'undefined' &&
    process.env.RAINBOW_PROVIDER_API_KEY) ||
  '__rainbowProviderApiKey';

export const enhancedProviderHttp = createHttpClient({
  baseUrl: 'https://enhanced-provider.rainbow.me',
  headers: {
    'x-api-key': RAINBOW_PROVIDER_API_KEY,
  },
});

export const ENHANCED_PROVIDER_ENABLED = Boolean(
  RAINBOW_PROVIDER_API_KEY && !RAINBOW_PROVIDER_API_KEY.startsWith('__'),
);
