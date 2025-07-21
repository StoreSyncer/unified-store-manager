# Connector Development Guide

Welcome to the Unified Store Manager Connector Development Guide! This guide will help you create new store integrations (connectors) for our platform.

## 🧩 Core Concepts

- **Event-Based Architecture**: Connectors are built around an event-driven model. The core system emits events (e.g., `product.sync`), and your connector listens for these events to perform actions.
- **Standardized Data Models**: To ensure a consistent experience, all data returned by a connector (e.g., products, orders) must be mapped to a standard format.
- **Modular & Decoupled**: Each connector is a self-contained module, completely decoupled from the core system and other connectors.

## 🚀 Getting Started

1.  **Create a New Directory**: Inside the `connectors/` directory, create a new folder for your connector (e.g., `connectors/my-new-store/`).
2.  **Implement the Connector**: Create an `index.js` (or `.ts`) file and implement the required event handlers.
3.  **Register Your Connector**: The system will auto-discover your connector. No manual registration is needed.

## 📝 Example: A Simple Product Connector

```javascript
// connectors/my-new-store/index.js

// This function will be called by the core system
module.exports = function register(eventBus) {
  // Listen for the 'product.sync' event
  eventBus.on('product.sync', async (payload) => {
    try {
      // 1. Fetch data from your store's API
      const externalProducts = await fetchFromMyStoreAPI();

      // 2. Map the data to our standard format
      const standardizedProducts = externalProducts.map(product => ({
        id: product.sku,
        name: product.product_name,
        price: product.list_price,
        // ... other fields
      }));

      // 3. Emit an event with the standardized data
      eventBus.emit('product.synced', standardizedProducts);

    } catch (error) {
      // Handle errors and emit an error event
      eventBus.emit('sync.error', { connector: 'my-new-store', error });
    }
  });

  // Implement other event handlers (e.g., for orders) here
};
```

## 📊 Data Mapping & Standardization

All data must be mapped to our internal standard models. Here are the basic schemas:

**Product:**

| Field    | Type   | Description                |
| :------- | :----- | :------------------------- |
| `id`     | String | Unique identifier          |
| `name`   | String | Product name               |
| `price`  | Number | Price of the product       |
| `stock`  | Number | Available stock quantity   |

**Order:**

| Field      | Type   | Description                |
| :--------- | :----- | :------------------------- |
| `id`       | String | Unique identifier          |
| `customer` | String | Customer name              |
| `total`    | Number | Total order value          |
| `status`   | String | e.g., 'Fulfilled', 'Pending' |

## 🤝 Contribution

Once your connector is ready, please submit a pull request. We'll review it and work with you to get it merged.

Thank you for contributing to the Unified Store Manager! 