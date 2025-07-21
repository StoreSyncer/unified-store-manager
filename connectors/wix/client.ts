import { createClient, OAuthStrategy } from '@wix/sdk';
import { products } from '@wix/stores';
import { TokenRole } from '@wix/sdk/build/auth/oauth2/types';

// Initialize the Wix API client
const wixClient = createClient({
  modules: { products },
  auth: OAuthStrategy({
    clientId: process.env.WIX_CLIENT_ID || '',
    tokens: {
      accessToken: { value: '', expiresAt: 0 },
      // @ts-ignore
      refreshToken: { value: '', role: 'visitor' },
    },
  }),
});

export default wixClient; 