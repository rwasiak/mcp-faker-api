import type { Locale } from "../types/locales";

export interface FetchOptions {
	locale: Locale;
	quantity?: number;
	seed?: number;
	extraParams?: Record<string, string | number | undefined>;
}

export async function fetchWithParams(
	resource: string,
	{ locale, quantity = 1, seed, extraParams = {} }: FetchOptions,
): Promise<unknown> {
	const params = new URLSearchParams({
		_locale: locale,
		_quantity: quantity.toString(),
		...(seed && { _seed: seed.toString() }),
	});

	if (extraParams) {
		for (const [key, value] of Object.entries(extraParams)) {
			if (value !== undefined) {
				params.set(key, value.toString());
			}
		}
	}

	const url = `https://fakerapi.it/api/v2/${resource}?${params}`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json();
}
