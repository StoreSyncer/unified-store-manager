# Connector Development Guide

Welcome to the Unified Store Manager Connector Development Guide!

This guide will help you create new store integrations (connectors) using our event-based, modular architecture.

---

## 🧩 Connector Architecture Overview

- **Event-Based:** All core actions (sync, update, error, etc.) are triggered and handled via events. Your connector listens for and emits events to interact with the system.
- **Modular:** Each connector is a self-contained module in the `connectors/` directory.
- **Standard Interface:** Implement required event handlers and methods for products, orders, inventory, and authentication.

---

## 📁 Directory Structure

```
connectors/
  ├── shopify/
  ├── woocommerce/
  ├── template/   # Use this as a starting point
  └── ...
```

---

## 🚦 Required Steps to Add a Connector

1. **Copy the Template:**
   - Duplicate `connectors/template/` to `connectors/your-store/`.
2. **Implement Event Handlers:**
   - Implement functions like `onProductSync`, `onOrderUpdate`, `onInventoryChange`, etc.
   - Use the provided event bus to listen for and emit events.
3. **Register Your Connector:**
   - Export your connector module so it is auto-discovered by the system.
4. **Test Your Connector:**
   - Write unit and integration tests for your connector logic.
5. **Document Any Platform-Specific Details:**
   - Add a `README.md` in your connector folder if needed.
6. **Submit a Pull Request:**
   - Ensure your code follows project style and passes all tests.

---

## 📝 Example: Minimal Connector (Pseudo-code)

```js
// connectors/template/index.js
module.exports = function register(eventBus) {
  eventBus.on('product.sync', async (payload) => {
    // Fetch products from your store and return in standard format
  });
  eventBus.on('order.update', async (payload) => {
    // Handle order updates
  });
  // ... more event handlers ...
};
```

---

## 📚 Reference: Standard Events

- `product.sync`
- `order.update`
- `inventory.change`
- `store.authenticate`
- `sync.error`
- ...and more (see core event definitions)

---

## 🤝 Need Help?

- Join our [Discussions](https://github.com/StoreSyncer/unified-store-manager/discussions)
- Open an issue or PR for feedback

---

Happy coding! 