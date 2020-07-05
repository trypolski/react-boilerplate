# React-boilerplate
It is just a simple boilerplate for react single page application. I tried to keep it as small as possible.

"public/index.html" - a template for main SPA page.
"public/favicon.png" - a favicon for SPA.
"public/robots.txt" - change it for indexing purposes.

All images from "src/assets" will be copied to "./build" folder and extended with imported images from js and scss files.
Feel free to extend "config/config.json" and webpack.DefinePlugin variables in "config/webpack.dev.js", "config/webpack.prod.js" to get specific for development and production data inside your project.

If you use Eslint and have an issue with global variables added in config files, just add them to ".eslintrc.json" to "globals" and mark as true.
