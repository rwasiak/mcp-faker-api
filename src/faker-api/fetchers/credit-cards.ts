import type { CommonParams } from "../types/common-params";
import { fetchWithParams } from "../utils/fetch-utils";

/**
 * Fetch available fake credit cards.
 *
 * @param {Object} options - The options for fetching fake credit cards.
 * @param {string} options.locale - The locale to use for the fake credit cards.
 * @param {number} [options.quantity=1] - The number of credit cards to fetch.
 * @param {number} [options.seed] - The seed to use for the credit cards to get always the same results.
 * @returns {Promise<string[]>} - A promise resolving to an array of fake credit cards.
 */
export async function fetchCreditCards({
  locale,
  quantity,
  seed,
}: CommonParams) {
  return fetchWithParams("credit-cards", {
    locale,
    quantity,
    seed,
  });
}
