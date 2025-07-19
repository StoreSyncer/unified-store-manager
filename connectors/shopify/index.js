// Shopify Connector (Minimal Example)
// TODO: Replace with your actual Shopify app credentials
const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID;
const SHOPIFY_CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET;
const SHOPIFY_REDIRECT_URI = process.env.SHOPIFY_REDIRECT_URI;

module.exports = function register(eventBus) {
  eventBus.on('product.sync', async (payload) => {
    // TODO: Fetch products from Shopify and return in standard format
  });
  eventBus.on('order.update', async (payload) => {
    // TODO: Handle order updates for Shopify
  });
  eventBus.on('store.authenticate', async (payload) => {
    // Step 1: Redirect user to Shopify OAuth2 consent screen
    // Step 2: Receive authorization code via redirect URI
    // Step 3: Exchange code for access token
    // Step 4: Store access token securely (DB, env, etc.)
    // Step 5: Use access token for API requests
    //
    // Placeholder: Log the payload for now
    console.log('Shopify authenticate event received:', payload);
    // TODO: Implement full OAuth2 flow
  });
}; 