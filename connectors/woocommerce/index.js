// WooCommerce Connector (Minimal Example)
// TODO: Replace with your actual WooCommerce API credentials
import wooCommerceClient from './client';

const WOOCOMMERCE_CONSUMER_KEY = process.env.WOOCOMMERCE_CONSUMER_KEY;
const WOOCOMMERCE_CONSUMER_SECRET = process.env.WOOCOMMERCE_CONSUMER_SECRET;

module.exports = function register(eventBus) {
  eventBus.on('product.sync', async (payload) => {
    try {
      // In a real app, get these from your database
      const { url, consumerKey, consumerSecret } = payload;
      const api = wooCommerceClient(url, consumerKey, consumerSecret);
      const response = await api.get("products");
      console.log('WooCommerce products:', response.data);
      // TODO: Map to standard format and return
    } catch (error) {
      console.error('Failed to sync WooCommerce products:', error);
    }
  });
  eventBus.on('order.update', async (payload) => {
    // TODO: Handle order updates for WooCommerce
  });
  eventBus.on('store.authenticate', async (payload) => {
    // Step 1: Collect WooCommerce API consumer key and secret from user
    // Step 2: Store API keys securely (DB, env, etc.)
    // Step 3: Use API keys for authenticated requests
    //
    // Placeholder: Log the payload for now
    console.log('WooCommerce authenticate event received:', payload);
    // TODO: Implement API key authentication flow
  });
}; 