# Sanity Studio v3 analytics dashboard widgets

Dashboard widgets for the Sanity Content Studio which embeds various analytics dashboards.

Supported:

- [Plausible.io](https://plausible.io/)
- [Fathom](https://usefathom.com/ref/EOFKIM)

## Install

Setup your local NPM configuration to recognise `@wrux` as a Github package ([docs]([url](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package))):

Open `~/.npmrc` and paste the following while replacing `YOUR_GITHUB_PERSONAL_ACCESS_TOKEN` with your personal access token;

```
@wrux:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
```

Install the package:

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
