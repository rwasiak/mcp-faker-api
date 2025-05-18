import type { CommonParams } from "../types/common-params";
import { fetchWithParams } from "../utils/fetch-utils";

/**
 * Fetch available fake colors.
 *
 * @param {Object} options - The options for fetching fake colors.
 * @param {number} [options.quantity=1] - The number of colors to fetch.
 * @param {number} [options.seed] - The seed to use for the colors to get always the same results.
 * @returns {Promise<string[]>} - A promise resolving to an array of fake colors.
 */
export async function fetchColors({ locale, quantity, seed }: CommonParams) {
	return fetchWithParams("colors", {
		locale,
		quantity,
		seed,
	});
}
