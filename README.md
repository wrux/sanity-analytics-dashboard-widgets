# Sanity Studio v3 analytics dashboard widgets

Dashboard widgets for the Sanity Content Studio which embeds various analytics dashboards.

Supported:

- [Plausible.io](https://plausible.io/)
- [Fathom](https://usefathom.com/ref/EOFKIM)

Install

```bash
npm install --save @wrux/sanity-analytics-dashboard-widgets
```

Ensure that you have followed install and usage instructions for @sanity/dashboard.

## Usage

Add an analaytics dashboard as a widget to @sanity/dashboard plugin in sanity.config.ts (or .js):

```ts
import { dashboardTool } from '@sanity/dashboard';
import { plausibleWidget } from '@wrux/sanity-analytics-dashboard-widgets';

export default defineConfig({
  // ...
  plugins: [
    dashboardTool({
      widgets: [
        plausibleWidget({
          auth: 'some-string',
          domain: 'some-domain.com',
        }),
      ],
    }),
  ],
});
```

## Options

## Plausible

// List args for `plausibleWidget`

## Fathom

// List args for `fathomWidget`

## License

MIT-licensed. See LICENSE.
