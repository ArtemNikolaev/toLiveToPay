# To Live To Pay
[![Netlify Status](https://api.netlify.com/api/v1/badges/cf2f861f-acca-4062-bcad-091240de6b4f/deploy-status)](https://app.netlify.com/sites/tolivetopay/deploys)
####[CHANGELOG](CHANGELOG.md)

_Easy budgeting application, which helps you spend your money wisely._


## Requirements
NodeJS 16

## Get started

```bash
npm install
npm run start
```

## Debug

### Store
- [Instruction](https://ngrx.io/guide/store-devtools)
- [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [DevTool Repo](https://github.com/zalmoxisus/redux-devtools-extension/)

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
