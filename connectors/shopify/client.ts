import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';
import '@shopify/shopify-api/adapters/node';

// Initialize the Shopify API client
const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY || '',
  apiSecretKey: process.env.SHOPIFY_API_SECRET || '',
  scopes: ['read_products', 'read_orders'],
  hostName: 'ngrok-tunnel-address',
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: false,
});

export default shopify; 