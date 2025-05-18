import type { CommonParams } from "../types/common-params";
import { fetchWithParams } from "../utils/fetch-utils";

/**
 * Fetch available fake companies.
 *
 * @param {Object} options - The options for fetching fake companies.
 * @param {string} options.locale - The locale to use for the fake companies.
 * @param {number} [options.quantity=1] - The number of companies to fetch.
 * @param {number} [options.seed] - The seed to use for the companies to get always the same results.
 * @returns {Promise<string[]>} - A promise resolving to an array of fake companies.
 */
export async function fetchCompanies({ locale, quantity, seed }: CommonParams) {
	return fetchWithParams("companies", {
		locale,
		quantity,
		seed,
	});
}
