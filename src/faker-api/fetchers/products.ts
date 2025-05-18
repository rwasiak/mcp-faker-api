import type { CommonParams } from "../types/common-params";
import { fetchWithParams } from "../utils/fetch-utils";

/**
 * Fetch available fake products.
 *
 * @param {Object} options - The options for fetching fake products.
 * @param {string} options.locale - The locale to use for the fake products.
 * @param {number} [options.quantity=1] - The number of products to fetch.
 * @param {number} [options.seed] - The seed to use for the products to get always the same results.
 * @param {number} [options.categoriesNumber] - The number of product categories to return.
 * @returns {Promise<string[]>} - A promise resolving to an array of fake products.
 */
export async function fetchProducts({
	locale,
	quantity,
	seed,
	categoriesNumber,
}: CommonParams & { categoriesNumber?: number }) {
	return fetchWithParams("products", {
		locale,
		quantity,
		seed,
		extraParams: { categoriesNumber },
	});
}
