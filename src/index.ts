import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
	customFieldValues,
	fetchAddresses,
	fetchBooks,
	fetchColors,
	fetchCompanies,
	fetchCreditCards,
	fetchCustom,
	fetchImages,
	fetchProducts,
	fetchUsers,
	locales,
} from "./faker-api";
import { log } from "./utils/logger.js";

const server = new McpServer({
	name: "faker-api",
	version: "1.0.0",
});

server.tool(
	"greet",
	{
		name: z.string().describe("The name of the person to greet"),
	},
	async ({ name }) => {
		return {
			content: [
				{
					type: "text",
					text: `Hello ${name}`,
				},
			],
		};
	},
);

server.tool(
	"fetch-fake-addresses",
	{
		locale: z
			.enum(locales)
			.describe("The locale to use for the fake addresses"),
		quantity: z
			.number()
			.optional()
			.describe("The number of fake addresses to fetch"),
		seed: z
			.number()
			.optional()
			.describe(
				"The seed to use for the fake addresses to get always the same results",
			),
	},
	async ({ locale, quantity, seed }) => {
		const addresses = await fetchAddresses({ locale, quantity, seed });
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(addresses, null, 2),
				},
			],
			isError: false,
		};
	},
);

server.tool(
	"fetch-fake-books",
	{
		locale: z.enum(locales).describe("The locale to use for the fake books"),
		quantity: z.number().optional().describe("The number of books to fetch"),
		seed: z
			.number()
			.optional()
			.describe("The seed to use for the books to get always the same results"),
	},
	async ({ locale, quantity, seed }) => {
		const books = await fetchBooks({ locale, quantity, seed });
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(books, null, 2),
				},
			],
			isError: false,
		};
	},
);

server.tool(
	"fetch-fake-companies",
	{
		locale: z
			.enum(locales)
			.describe("The locale to use for the fake companies"),
		quantity: z
			.number()
			.optional()
			.describe("The number of companies to fetch"),
		seed: z
			.number()
			.optional()
			.describe(
				"The seed to use for the companies to get always the same results",
			),
	},
	async ({ locale, quantity, seed }) => {
		const companies = await fetchCompanies({ locale, quantity, seed });
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(companies, null, 2),
				},
			],
			isError: false,
		};
	},
);

server.tool(
	"fetch-fake-credit-cards",
	{
		locale: z
			.enum(locales)
			.describe("The locale to use for the fake credit cards"),
		quantity: z
			.number()
			.optional()
			.describe("The number of credit cards to fetch"),
		seed: z
			.number()
			.optional()
			.describe(
				"The seed to use for the credit cards to get always the same results",
			),
	},
	async ({ locale, quantity, seed }) => {
		const creditCards = await fetchCreditCards({ locale, quantity, seed });
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(creditCards, null, 2),
				},
			],
			isError: false,
		};
	},
);

server.tool(
	"fetch-fake-users",
	{
		locale: z.enum(locales).describe("The locale to use for the fake users"),
		quantity: z.number().optional().describe("The number of users to fetch"),
		seed: z
			.number()
			.optional()
			.describe("The seed to use for the users to get always the same results"),
		gender: z
			.enum(["male", "female", "other"])
			.optional()
			.describe("The gender to filter users by"),
	},
	async ({ locale, quantity, seed, gender }) => {
		const users = await fetchUsers({ locale, quantity, seed, gender });
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(users, null, 2),
				},
			],
			isError: false,
		};
	},
);

server.tool(
	"fetch-fake-products",
	{
		locale: z.enum(locales).describe("The locale to use for the fake products"),
		quantity: z.number().optional().describe("The number of products to fetch"),
		seed: z
			.number()
			.optional()
			.describe(
				"The seed to use for the products to get always the same results",
			),
		categoriesNumber: z
			.number()
			.optional()
			.describe("The number of product categories to return"),
	},
	async ({ locale, quantity, seed, categoriesNumber }) => {
		const products = await fetchProducts({
			locale,
			quantity,
			seed,
			categoriesNumber,
		});
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(products, null, 2),
				},
			],
			isError: false,
		};
	},
);

server.tool(
	"fetch-fake-images",
	{
		locale: z.enum(locales).describe("The locale to use for the fake images"),
		quantity: z.number().optional().describe("The number of images to fetch"),
		seed: z
			.number()
			.optional()
			.describe(
				"The seed to use for the images to get always the same results",
			),
		type: z
			.enum(["any", "pokemon"])
			.optional()
			.describe("The type of images to fetch"),
	},
	async ({ locale, quantity, seed, type }) => {
		const images = await fetchImages({ locale, quantity, seed, type });
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(images, null, 2),
				},
			],
			isError: false,
		};
	},
);

server.tool(
	"fetch-fake-colors",
	{
		locale: z.enum(locales).describe("The locale to use for the fake colors"),
		quantity: z.number().optional().describe("The number of colors to fetch"),
		seed: z
			.number()
			.optional()
			.describe(
				"The seed to use for the colors to get always the same results",
			),
	},
	async ({ locale, quantity, seed }) => {
		const colors = await fetchColors({ locale, quantity, seed });
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(colors, null, 2),
				},
			],
			isError: false,
		};
	},
);

server.tool(
	"fetch-fake-custom-data",
	{
		locale: z.enum(locales).describe("The locale to use for the fake data"),
		quantity: z
			.number()
			.optional()
			.describe("The number of data items to fetch"),
		seed: z
			.number()
			.optional()
			.describe("The seed to use for the data to get always the same results"),
		fields: z
			.record(z.enum(customFieldValues))
			.describe("The fields to generate and their types"),
	},
	async ({ locale, quantity, seed, fields }) => {
		const customData = await fetchCustom({ locale, fields, quantity, seed });
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(customData, null, 2),
				},
			],
			isError: false,
		};
	},
);

const runServer = async () => {
	const transport = new StdioServerTransport();
	await server.connect(transport);
};

runServer().catch((error) => {
	log("Fatal error in main():", error);
	process.exit(1);
});
