# volto-block-divider

[![Releases](https://img.shields.io/github/v/release/eea/volto-block-divider)](https://github.com/eea/volto-block-divider/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-block-divider%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-block-divider/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-divider-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-divider-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-divider-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-divider-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-divider-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-divider-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-divider-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-divider-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-block-divider%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-block-divider/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-divider-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-divider-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-divider-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-divider-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-divider-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-divider-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-divider-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-divider-develop)


[Volto](https://github.com/plone/volto) Divider Block

## Features

![Divider](https://github.com/eea/volto-block-divider/raw/master/docs/divider.gif)

## Upgrade

### Upgrading to 5.x

This version requires: `@plone/volto >= 16.0.0.alpha.46` (schemaEnhancer / addStyling).

## Getting started

### Try volto-block-divider with Docker

      git clone https://github.com/eea/volto-block-divider.git
      cd volto-block-divider
      make
      make start

Go to http://localhost:3000

### Add volto-block-divider to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-block-divider"
   ],

   "dependencies": {
       "@eeacms/volto-block-divider": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-block-divider
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-block-divider/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-block-divider/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-block-divider/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
