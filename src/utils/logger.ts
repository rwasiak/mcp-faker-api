export const log = (...args: unknown[]) => {
	if (process.env.DEBUG === "true") {
		console.error(...args);
	}
};
