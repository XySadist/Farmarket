import { openDB } from 'idb';
import CONFIG from '../scripts/globals/config';

const dbPromise = openDB(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSION, {
  upgrade(db) {
    const store = db.createObjectStore(CONFIG.OBJECT_STORE_NAME, { keyPath: 'id' });
    store.createIndex('vegetableId', 'vegetableId', { unique: true });
  },
});

const VegetableCartIdb = {
  async  getVegetableCartItems() {
    const db = await dbPromise;
    const allItems = await db.getAll(CONFIG.OBJECT_STORE_NAME);
    return allItems;
  },

  async addVegetableToCart(vegetable) {
    const db = await dbPromise;
    await db.add(CONFIG.OBJECT_STORE_NAME, vegetable);
  },

  async updateQuantity(cartId, vegetableQuantity, position) {
    let quantity = parseInt(vegetableQuantity, 10);

    if (position === 'substract' && quantity > 1) {
      quantity -= 1;
    } else if (position === 'add') {
      quantity += 1;
    }

    const db = await dbPromise;
    const item = await db.get(CONFIG.OBJECT_STORE_NAME, cartId);
    item.quantity = quantity;
    await db.put(CONFIG.OBJECT_STORE_NAME, item);
  },
  async deleteVegetableCartItem(cartId) {
    const db = await dbPromise;
    await db.delete(CONFIG.OBJECT_STORE_NAME, cartId);
  },

  async clearAllData() {
    // Open the database
    const db = await dbPromise;

    // Get all object store names
    const objectStoreNames = db.objectStoreNames;

    // Clear each object store
    // eslint-disable-next-line no-restricted-syntax
    for (const storeName of objectStoreNames) {
      // eslint-disable-next-line no-await-in-loop
      await db.clear(storeName);
    }

    console.log('All data cleared from IndexedDB.');
  },
};

export default VegetableCartIdb;
