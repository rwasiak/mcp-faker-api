import type { CommonParams } from "../types/common-params";
import { fetchWithParams } from "../utils/fetch-utils";

/**
 * Fetch available fake books.
 *
 * @param {Object} options - The options for fetching fake books.
 * @param {string} options.locale - The locale to use for the fake books.
 * @param {number} [options.quantity=1] - The number of books to fetch.
 * @param {number} [options.seed] - The seed to use for the books to get always the same results.
 * @returns {Promise<string[]>} - A promise resolving to an array of fake books.
 */
export async function fetchBooks({ locale, quantity, seed }: CommonParams) {
	return fetchWithParams("books", {
		locale,
		quantity,
		seed,
	});
}
