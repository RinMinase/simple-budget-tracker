<h1 align="center"> Simple Budget Tracker </h1>

<p align="center">
    <a href="https://app.netlify.com/sites/track-budget/deploys">
        <img alt="Netlify-Status" src="https://img.shields.io/netlify/09b5bb1d-24a5-401d-b322-a267a04efd00?logo=netlify&style=for-the-badge">
    </a>
    <a href="https://angular.io/">
        <img alt="Angular" src="https://img.shields.io/badge/angular-%5E10.0-red.svg?logo=angular&style=for-the-badge">
    </a>
</p>

## Introduction
_Add info here_

## Getting Started

### Running the project
Installations Required:
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/latest.msi)

1. Clone the project, and copy the ENV template file to a new ENV file

    ```
    git clone https://github.com/RinMinase/simple-budget-tracker.git
    cd simple-budget-tracker
    cp .env.example .env
    ```

2. Modify the created ENV file `(.env)` based on your Firebase configuration

3. Install the dependencies then run the project

    ```
    yarn install
    yarn start
    ```

4. Fire up your browser and go to `localhost:3000`

### Building the project
Installations Required:
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/latest.msi)

1. Fire up your terminal inside the project folder.

2. Build the project by running:

    ```
    yarn build
    ```

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

## Built with
* <img width=20 height=20 src="https://angular.io/assets/images/favicons/favicon.ico"> [Angular 10](https://angular.io/) - Web Framework
* <img width=20 height=20 src="https://www.typescriptlang.org/assets/images/icons/favicon.ico"> [TypeScript](https://www.typescriptlang.org/) - Language syntax
* <img width=20 height=20 src="https://sass-lang.com/favicon.ico"> [Sassy CSS (SCSS)](https://sass-lang.com/) - CSS pre-processor
* <img width=20 height=20 src="https://material.angular.io/assets/img/favicons/favicon-32x32.png"> [Angular Material](https://material.angular.io/) - HTML Framework (layout)
* <img width=20 height=20 src="https://firebase.google.com/favicon.ico"> [Firebase](https://firebase.google.com/) - Database
* <img width=20 height=20 src="https://webpack.js.org/bc3effb418df77da9e04825c48a58a49.ico"> [Webpack 4](https://webpack.js.org/) - Project bundler
* <img width=20 height=20 src="https://cordova.apache.org/favicon.ico"> [Cordova](https://cordova.apache.org/) - Android APK bundler
* <img width=20 height=20 src="https://www.netlify.com/img/global/favicon/favicon-32x32.png"> [Netlify](https://www.netlify.com/) - Continuous Deployment (CD) service
* <img width=20 height=20 src="https://yarnpkg.com/icons/icon-48x48.png"> [Yarn](https://yarnpkg.com/) - Package Manager

## Deployed to
* <img width=20 height=20 src="https://www.netlify.com/img/global/favicon/favicon-32x32.png"> [Netlify](https://track-budget.netlify.com)
