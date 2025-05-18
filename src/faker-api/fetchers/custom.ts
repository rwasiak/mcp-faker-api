import type { CommonParams } from "../types/common-params";
import type { CustomFields } from "../types/custom-fields";
import { fetchWithParams } from "../utils/fetch-utils";

/**
 * Fetch custom fake data.
 *
 * @param {Object} options - The options for fetching custom fake data.
 * @param {string} options.locale - The locale to use for the fake data.
 * @param {number} [options.quantity=1] - The number of data items to fetch.
 * @param {number} [options.seed] - The seed to use for the data to get always the same results.
 * @param {Object} options.fields - The fields to generate and their types.
 * @returns {Promise<string[]>} - A promise resolving to an array of custom fake data.
 */
export async function fetchCustom({
	locale,
	quantity,
	seed,
	fields,
}: CommonParams & { fields: CustomFields }) {
	const fieldsString = Object.entries(fields)
		.map(([key, type]) => `${key}=${type}`)
		.join("&");

	return fetchWithParams("custom", {
		locale,
		quantity,
		seed,
		extraParams: { fields: fieldsString },
	});
}
