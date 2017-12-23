## Work in progress

This is currently work in progress build pipeline for static website projects, with support for _SCSS_,_Pug_,_ES6_ and deploys for demoing via [ZEIT's Now](https://zeit.co/now)

Includes:

* Webpack Dev Server for DX
* SCSS to CSS
* Pug to HTML
* Favicon generator
* ESlint with prettier integration
* ES6 via Babel

### Running the demo

> yarn run start

Runs development build accessable at `localhost:9000`

> yarn run build

Build the assets including hashing assets and creating favicons

> yarn run deploy

Deploys `./build` folder with Now giving you access to URL which you can share
