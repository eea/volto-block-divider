# @eeacms/volto-block-divider

[![Releases](https://img.shields.io/github/v/release/eea/volto-block-divider)](https://github.com/eea/volto-block-divider/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-block-divider%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-block-divider/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-divider&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-divider)

[Volto](https://github.com/plone/volto) Divider Block

## Features

![Divider](https://raw.githubusercontent.com/eea/volto-block-divider/master/docs/divider.gif)

## Upgrade

### Upgrading to 9.x

> This version requires `Volto 18` or `Volto 19` and Node.js 22.

The block, its schema and the color picker keep the same API, so upgrading from 8.x on Volto 18 needs no code changes. The release adds Volto 19 support and moves the repository to the Volto 19 layout, where the published package lives in `packages/volto-block-divider`.

#### Breaking changes

- **Volto 17 is dropped.** The package declares `@plone/volto >=18.0.0 <20.0.0`; stay on 8.x if the project runs Volto 17.
- **Node.js 22 or newer is required** (`engines.node >= 22`), 8.x declared no engine.
- **Peer dependencies are declared** (`react`, `react-dom`, `react-intl`, `classnames`, `semantic-ui-react`), so a project with different major versions gets an install warning instead of installing silently.

### Upgrading to 5.x

This version requires: `@plone/volto >= 16.0.0.alpha.46` (schemaEnhancer / addStyling).

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Volto: `@plone/volto >=18.0.0 <20.0.0`
- Node.js: `>=22.0.0`

## Installation

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-block-divider": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-block-divider'];
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
