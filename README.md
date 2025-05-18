# MCP Faker API

A Model Context Protocol (MCP) server that provides access to the Faker API through a standardized interface.

## Installation

1. Install Bun:
   - macOS/Linux:
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```
   - Windows: Download from [Bun website](https://bun.sh/docs/installation)

2. Install project dependencies:
   ```bash
   bun install
   ```

3. Build the MCP server:
   ```bash
   bun run build
   ```

4. Run the MCP server:
   ```bash
   bun start
   ```

## Inspector

You can run the MCP server with the inspector by running:

```bash
bun run start:inspector
```

## MCP Configuration

Add the following configuration to your IDE's mcp configuration file:

```json
{
	"mcpServers": {
		"faker-mcp-server": {
			"command": "node",
			"args": ["{pwd}/build/index.mjs"]
		}
	}
}
```

## Available Tools

The MCP server provides the following tools for generating fake data:

### Basic Data Generation

- `fetch-fake-addresses`: Generate fake addresses
- `fetch-fake-books`: Generate fake books
- `fetch-fake-companies`: Generate fake company names
- `fetch-fake-credit-cards`: Generate fake credit card numbers
- `fetch-fake-users`: Generate fake user profiles
- `fetch-fake-products`: Generate fake product data
- `fetch-fake-images`: Generate fake image URLs
- `fetch-fake-colors`: Generate fake color values

### Custom Data Generation

- `fetch-fake-custom`: Generate custom fake data with specified fields

