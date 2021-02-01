// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/app.js', 'app')
//.sass('src/app.scss', 'css')
.setPublicPath('dist');

mix.sass('src/app.scss', 'css')
    .options({
        processCssUrls: false
    });