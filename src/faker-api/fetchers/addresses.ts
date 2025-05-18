import type { CommonParams } from "../types/common-params";
import { fetchWithParams } from "../utils/fetch-utils";

/**
 * Fetch available fake addresses for a given locale.
 *
 * @param {Object} options - The options for fetching fake addresses.
 * @param {string} options.locale - The locale to use for the fake addresses.
 * @param {number} [options.quantity=1] - The number of fake addresses to fetch.
 * @param {number} [options.seed] - The seed to use for the fake addresses to get always the same results.
 * @returns {Promise<string[]>} - A promise resolving to an array of fake addresses.
 */
export async function fetchAddresses({ locale, quantity, seed }: CommonParams) {
	return fetchWithParams("addresses", {
		locale,
		quantity,
		seed,
		extraParams: { _country_code: locale },
	});
}
