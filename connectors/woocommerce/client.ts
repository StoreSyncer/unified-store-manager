import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// Initialize the WooCommerce API client
const wooCommerceClient = (url, consumerKey, consumerSecret) => {
  return new WooCommerceRestApi({
    url,
    consumerKey,
    consumerSecret,
    version: "wc/v3"
  });
};

export default wooCommerceClient; 