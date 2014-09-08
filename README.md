# SassShop
## Get your Sass a Cut Above the Rest

SassShop is a workshop designed for beginner and intermediate Sass users.

## Pre-Requisites

* Compiling Sass on your machine
* Comfortable with CSS
* Download the ChopShop repo on to your machine and ensure you can compile Sass

## Recommend

* Use [rbenv](https://github.com/sstephenson/rbenv) to manage your Ruby environments
* Use 

## Getting started

Once you have clonee or downloaded SassShop files, getting started involves the following: 

What follows is a general overview of each major part and how to use them.

### sass
This directory should contain all your project's Sass files. 

### css

This directory should contain all your project's compiled CSS files. [About the
CSS](css.md).

### doc

This directory contains all the SassShop documentation, including documentation from HTML5 Boilerplate. You can use it as the location and basis for your own project's documentation. Expand, update liberally.

### js

This directory should contain all your project's JS files. Libraries, plugins,
and custom code can all be included here. It includes some initial JS to help
get you started. [About the JavaScript](js.md).

### bower.json

The project Bower configuration file. Edit this file if you are going to use Bower to install and manage your Sass dependencies

### config.rb

Edit this file if you are using Compass. Make sure that you edit the project paths to Sass, CSS, JS, and image directories so they match your directory structure. 

### Gemfile

Add your Sass exentions if you are using [Bundler]() to manage your gems/extensions.

### Gulpfile.js

A pre-configured Gulpfile for compiling Sass. Defaults to Ruby Sass.

### Gruntfile.js

A pre-configured Gruntfile for compiling Sass. Defaults to using Ruby Sass

### .htaccess (HTML5BP)

The default web server configs are for Apache. For more information, please
refer to the [Apache Server Configs
documentation](https://github.com/h5bp/server-configs-apache/tree/master/doc).

Host your site on a server other than Apache? You're likely to find the
corresponding server configs project listed in our [Server Configs
](https://github.com/h5bp/server-configs/blob/master/README.md) repository.

### 404.html (HTML5BP)

A helpful custom 404 to get you started.

### index.html (HTML5BP)

This is the default HTML skeleton that should form the basis of all pages on
your site. If you are using a server-side templating framework, then you will
need to integrate this starting HTML with your setup.

Make sure that you update the URLs for the referenced CSS and JavaScript if you
modify the directory structure at all.

If you are using Google Analytics, make sure that you edit the corresponding
snippet at the bottom to include your analytics ID.

### humans.txt (HTML5BP)

Edit this file to include the team that worked on your site/app, and the
technology powering it.

### robots.txt (HTML5BP)

Edit this file to include any pages you need hidden from search engines.

### crossdomain.xml (HTML5BP)

A template for working with cross-domain requests. [About
crossdomain.xml](crossdomain.md).

### Favicon and Touch Icons (HTML5BP)

Replace the default `favicon.ico` and Apple Touch Icon with your own.

If you want to use different Apple Touch Icons for different resolutions please
refer to the [according documentation](extend.md#apple-touch-icons).

You might want to check out Hans' handy [HTML5 Boilerplate Favicon and Apple
Touch Icon
PSD-Template](http://drublic.de/blog/html5-boilerplate-favicons-psd-template/).



