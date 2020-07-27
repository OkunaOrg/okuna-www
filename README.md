<img alt="Okuna logo" src="https://i.snag.gy/FAgp8K.jpg" width="200">

[![CircleCI](https://circleci.com/gh/OkunaOrg/okuna-www.svg?style=svg)](https://circleci.com/gh/OkunaOrg/okuna-www) [![gitmoji badge](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://github.com/carloscuesta/gitmoji)

The code for [about.okuna.io](https://about.okuna.io).

## Table of contents

- [Requirements](#requirements)
- [Project overview](#project-overview)
- [Contributing](#contributing)
    + [Code of Conduct](#code-of-conduct)
    + [License](#license)
    + [Other issues](#other-issues)
    + [Git commit message conventions](#git-commit-message-conventions)
- [Getting started](#getting-started)

## Requirements

* [Node](https://nodejs.org) > 7.6
 
## Project overview

The website is a [Vue 2.x](https://vuejs.org/) application.

Other relevant technologies used are

* [Sass](https://sass-lang.com/) for stylesheets
* [Bulma](https://bulma.io/documentation/overview/start/) for kickstarting the styles/layout.
* [Buefy](https://buefy.github.io/#/) for providing the logic to the Bulma components.
* [Webpack 4](https://webpack.js.org/) for bundling everything together

## Contributing

There are many different ways to contribute to the website development, just find the one that best fits with your skills and open an issue/pull request in the repository.

Examples of contributions we love include:

- **Code patches**
- **Bug reports**
- **Patch reviews**
- **Translations**
- **UI enhancements**

#### Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/OkunaOrg/okuna-www/blob/master/CODE_OF_CONDUCT.md).

#### License

Every contribution accepted is licensed under [AGPL v3.0](http://www.gnu.org/licenses/agpl-3.0.html) or any later version.
You must be careful to not include any code that can not be licensed under this license.

Please read carefully [our license](https://github.com/OkunaOrg/okuna-www/raw/master/LICENSE.txt) and ask us if you have any questions.

#### Git commit message conventions

Help us keep the repository history consistent 🙏!

We use [gitmoji](https://gitmoji.carloscuesta.me/) as our git message convention.

If you're using git in your command line, you can download the handy tool [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli).

## Getting started

Clone the repository

```sh
git clone git@github.com:OkunaOrg/okuna-www.git
```

Install the dependencies
```bash
$ npm install
```

Serve with hot reload at localhost:3000
```bash
$ npm run serve
```

Build for production
```bash
npm run build
```

For integration tests, make sure you're running a [Selenium server](https://chromedriver.storage.googleapis.com/76.0.3809.126/chromedriver_win32.zip) and you have [ChromeDriver](https://chromedriver.chromium.org/downloads) installed.
```bash
npm run test:integration
```
<br>

#### Happy coding 🎉!
