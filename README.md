<h1 align="center"> Simple Budget Tracker </h1>

<p align="center">
    <a href="https://app.netlify.com/sites/track-budget/deploys">
        <img alt="Netlify-Status" src="https://img.shields.io/netlify/09b5bb1d-24a5-401d-b322-a267a04efd00?logo=netlify&style=for-the-badge">
    </a>
    <a href="https://angular.io/">
        <img alt="Angular" src="https://img.shields.io/badge/angular-%5E9.0-red.svg?logo=angular&style=for-the-badge">
    </a>
</p>

## Introduction
_Add info here_

## Getting Started

### Running the project
1. [Download](https://nodejs.org/en/) the latest Node version. This is marked as `<version number> Current`. Install it on your machine.

2. _(Optional)_ [Download](https://yarnpkg.com/latest.msi) Yarn. This is a faster package manager than the default `npm` one.

3. Clone the project

    ```
    git clone https://github.com/RinMinase/simple-budget-tracker.git
    cd simple-budget-tracker
    ```

4. Install the dependencies then run the project

    ```
    npm install
    npm start
    ```

    **Note:** If you have installed Yarn, run these instead:

    ```
    yarn install
    yarn start
    ```

5. Fire up your browser and go to `localhost:3000`

### Directory Structure
    .
    ├── dist/                            # Compiled production code
    ├── assets/                          # Project assets
    ├── src/                             # Project source code
    │   ├── core/                        # Project-wide reusable classes
    │   ├── <module>/                    # Project modules and components
    │   │   ├── <name>.component.html    # Component template
    │   │   ├── <name>.component.scss    # Component stylesheet
    │   │   ├── <name>.component.ts      # Module component
    │   │   └── <name>.module.ts         # Module
    │   ├── app.module.ts                # Main project module and component
    │   ├── index.html                   # Main HTML file
    │   ├── index.scss                   # Main Stylesheet (SCSS) file
    │   └── index.ts                     # Main TypeScript file
    ├── angular.json                     # Angular CLI configuration
    ├── tsconfig.json                    # Main TypeScript configuration file
    └── ...                              # Other project files

### Project tasks

Task automation is based on [Yarn scripts](https://yarnpkg.com/lang/en/docs/cli/run/) or [NPM scripts](https://docs.npmjs.com/misc/scripts).

## Built with
* <img width=20 height=20 src="https://angular.io/assets/images/favicons/favicon.ico"> [Angular 9](https://angular.io/) - Web Framework
* <img width=20 height=20 src="https://www.typescriptlang.org/icons/icon-48x48.png"> [TypeScript](https://www.typescriptlang.org/) - Language syntax
* <img width=20 height=20 src="https://sass-lang.com/favicon.ico"> [Sassy CSS (SCSS)](https://sass-lang.com/) - CSS pre-processor
* <img width=20 height=20 src="https://material.angular.io/assets/img/favicons/favicon-32x32.png"> [Angular Material](https://material.angular.io/) - HTML Framework (layout)
* <img width=20 height=20 src="https://firebase.google.com/favicon.ico"> [Firebase](https://firebase.google.com/) - Database
* <img width=20 height=20 src="https://webpack.js.org/bc3effb418df77da9e04825c48a58a49.ico"> [Webpack 4](https://webpack.js.org/) - Project bundler
* <img width=20 height=20 src="https://cordova.apache.org/favicon.ico"> [Cordova](https://cordova.apache.org/) - Android APK bundler
* <img width=20 height=20 src="https://www.netlify.com/img/global/favicon/favicon-32x32.png"> [Netlify](https://www.netlify.com/) - Continuous Deployment (CD) service
* <img width=20 height=20 src="https://yarnpkg.com/icons/icon-48x48.png"> [Yarn](https://yarnpkg.com/) - Package Manager

## Deployed to
* <img width=20 height=20 src="https://www.netlify.com/img/global/favicon/favicon-32x32.png"> [Netlify](https://track-budget.netlify.com)
