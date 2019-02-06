# eslint-config-vvdev-rn

## Installation

### Install eslint:

    yarn add --D eslint

### Add scripts in package.json

    "lint": "node_modules/.bin/eslint ./${SOURCES} --ext .js,.jsx",
    "lintfix": "node_modules/.bin/eslint ./${SOURCES} --ext .js,.jsx --fix"

where `${SOURCES}` is root of linted code

### Create file .eslintrc with next content:
```
{
  "extends": "vvdev-rn"
}
```

## Usage

Use one of the next commands

    yarn run lint

## Auto check before commit

See [husky](https://www.npmjs.com/package/husky)    

## TODO:

- [] global constants
- [] [flow](https://github.com/gajus/eslint-plugin-flowtype) plugin 
- [] [sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) plugin 
- [] react-native plugin
