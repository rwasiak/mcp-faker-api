import type { CommonParams } from "../types/common-params";
import { fetchWithParams } from "../utils/fetch-utils";

/**
 * Fetch available fake users.
 *
 * @param {Object} options - The options for fetching fake users.
 * @param {string} options.locale - The locale to use for the fake users.
 * @param {number} [options.quantity=1] - The number of users to fetch.
 * @param {number} [options.seed] - The seed to use for the users to get always the same results.
 * @param {string} [options.gender] - The gender to filter users by (male, female, other).
 * @returns {Promise<string[]>} - A promise resolving to an array of fake users.
 */
export async function fetchUsers({
	locale,
	quantity,
	seed,
	gender,
}: CommonParams & { gender?: "male" | "female" | "other" }) {
	return fetchWithParams("users", {
		locale,
		quantity,
		seed,
		extraParams: { gender },
	});
}
