# JavaScript Library Template

Universal JavaScript library project template

[![license][license-img]][license-url]
[![release][release-img]][release-url]
[![semantic][semantic-img]][semantic-url]

## Features

#### CI Automation

> Using [GitHub Actions][]

-   automatic releases with [conventional-commits][] & [semantic-release][]
-   publish to both npm Public Registry & GitHub Package Manager
-   full history changelog in [GitHub Releases][]
-   automatic pull-requests for dependency updates using [dependabot][]
-   automatic merging of "patch" updates to dependencies using [dependabot-auto-merge][]
-   lint everything with [super-linter][]
-   lint commit message format against [Conventional Commits][]
-   test on all LTS versions of Node.js + Headless browsers *(Chromium, Safari, Firefox)*
-   run `npm audit` before releasing / testing to keep a higher security standard
-   generate universal JavaScript outputs using [Microbundle][]
-   unit testing & code coverage with [Tap][]
-   browser testing with [Playwright][]

##### Local Automation

> Using [Docker Compose][]

-   lint everything with [super-linter][]
-   test on all LTS versions of Node.js
-   generate README using [pandoc][] with a [template][]

## Usage

#### GitHub Templates

> Automated through [`@ahmadnassri/action-template-repository-sync`][]

1.  create a repository from the template
2.  clone locally
3.  add secrets in GitHub Actions for `NPM_TOKEN` & `GH_TOKEN`
4.  update `colophon.yml`, `docs/README.md` with info about the project

> **Note:**  
> `GH_TOKEN` is required for action `auto-merge`, `readme`, `release` workflows

## Local Automation

use [Docker Compose][] to run tasks locally:

-   `docker-compose run readme` to regenerate `README.md`
-   `docker-compose run test` to run tests across all LTS versions of Node.js
-   `docker-compose run lint` to execute [super-linter][] locally

> **Note:**  
> Your main `README.md` file is in `docs/README.md`, the file at root is generated using [pandoc][] using the provided [template][].
>
> You should run `docker-compose run readme` after any change to `docs/README.md` and before commit / push

## Install

``` bash
npm install template-js-lib
```

### Import

``` js
import * as Lib from '@ahmadnassri/template-js-lib'

Lib() // returns "hello world"
```

### Require

``` js
const Lib = require('@ahmadnassri/template-js-lib')

Lib() // returns "hello world"
```

### Browser

``` html
<script src="https://unpkg.com/@ahmadnassri/template-js-lib@latest/dist/index.umd.js">// UMD bundle</script>
<script type="module" src="https://unpkg.com/@ahmadnassri/template-js-lib@latest/dist/index.module.mjs">// ESM bundle</script>
<script type="module" src="https://unpkg.com/@ahmadnassri/template-js-lib@latest/dist/index.modern.mjs">// ESM for modern browsers</script>
```

  [GitHub Actions]: https://github.com/features/actions
  [conventional-commits]: https://www.conventionalcommits.org/
  [semantic-release]: https://github.com/marketplace/actions/conventional-semantic-release
  [GitHub Releases]: https://github.com/ahmadnassri/template-js-lib/releases
  [dependabot]: https://dependabot.com/
  [dependabot-auto-merge]: https://github.com/marketplace/actions/dependabot-auto-merge
  [super-linter]: https://github.com/github/super-linter
  [Conventional Commits]: https://www.conventionalcommits.org/en/v1.0.0/
  [Microbundle]: https://github.com/developit/microbundle
  [Tap]: https://node-tap.org
  [Playwright]: https://playwright.dev/
  [Docker Compose]: https://docs.docker.com/compose/
  [pandoc]: https://pandoc.org/
  [template]: ./docs/README.template
  [`@ahmadnassri/action-template-repository-sync`]: https://github.com/ahmadnassri/action-template-repository-sync

----
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull;
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/template-js-lib

[release-url]: https://github.com/ahmadnassri/template-js-lib/releases
[release-img]: https://badgen.net/github/release/ahmadnassri/template-js-lib

[semantic-url]: https://github.com/ahmadnassri/template-js-lib/actions?query=workflow%3Arelease
[semantic-img]: https://badgen.net/badge/📦/semantically%20released/blue
