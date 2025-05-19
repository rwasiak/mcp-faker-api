# MCP Faker API

A Model Context Protocol (MCP) server that provides access to the [Faker API](https://fakerapi.it/) through a standardized interface.

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

- `generate-fake-addresses`: Generate fake addresses
- `generate-fake-books`: Generate fake books
- `generate-fake-companies`: Generate fake company names
- `generate-fake-credit-cards`: Generate fake credit card numbers
- `generate-fake-users`: Generate fake user profiles
- `generate-fake-products`: Generate fake product data
- `generate-fake-images`: Generate fake image URLs
- `generate-fake-colors`: Generate fake color values

### Custom Data Generation

- `generate-fake-custom-data`: Generate custom fake data with specified fields

