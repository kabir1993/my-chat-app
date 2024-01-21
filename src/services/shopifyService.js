// src/services/shopifyService.js
import axios from 'axios';

const shopifyApiUrl = 'https://your-shopify-store.myshopify.com/admin/api/2021-10';

export const fetchShopifyData = async () => {
  try {
    const response = await axios.get(`${shopifyApiUrl}/products.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Shopify data:', error);
    throw error;
  }
};
