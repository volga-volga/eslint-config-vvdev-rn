# eslint-config-vvdev-rn

## Installation

### Install eslint:

    yarn add --D eslint
or    
    
    npm i --save-dev eslint

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

### Install modules as devDependencies.

via `yarn`:

    yarn add --D eslint-config-vvdev-rn
    yarn add --D eslint-plugin-import
    yarn add --D eslint-plugin-jsx-a11y
    yarn add --D eslint-plugin-react
    yarn add --D babel-eslint

or `npm`:

    npm i --save-dev eslint-config-vvdev-rn
    npm i --save-dev eslint-plugin-import
    npm i --save-dev eslint-plugin-jsx-a11y
    npm i --save-dev eslint-plugin-react
    npm i --save-dev babel-eslint

## Usage

Use one of the next commands

    npm run lint
    yarn run lint

## Auto check before commit
Install `husky` as devDependencies:

    yarn add --D husky
    npm i --save-dev husky
    
Add script in `package.json`:

    "precommit": "npm run lint"
