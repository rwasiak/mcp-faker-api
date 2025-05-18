import type { CommonParams } from "../types/common-params";
import { fetchWithParams } from "../utils/fetch-utils";

/**
 * Fetch available fake images.
 *
 * @param {Object} options - The options for fetching fake images.
 * @param {number} [options.quantity=1] - The number of images to fetch.
 * @param {number} [options.seed] - The seed to use for the images to get always the same results.
 * @param {string} [options.type] - The type of images to fetch (any, pokemon).
 * @returns {Promise<string[]>} - A promise resolving to an array of fake images.
 */
export async function fetchImages({
	locale,
	quantity,
	seed,
	type,
}: CommonParams & { type?: "any" | "pokemon" }) {
	return fetchWithParams("images", {
		locale,
		quantity,
		seed,
		extraParams: { type },
	});
}
