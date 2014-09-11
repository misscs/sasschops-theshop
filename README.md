# SassChops
## Get your Sass a Cut Above the Rest

SassChops is a workshop designed for beginner and intermediate Sass users.

## Pre-Requisites

* Compiling Sass on your machine
* Comfortable with CSS
* Download the ChopShop repo on to your machine and ensure you can compile Sass

## Recommended

If you are not using [rbenv](https://github.com/sstephenson/rbenv), a build tool—[Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/)—and/or [bundler](http://bundler.io/) and want to know why these tools are fundamental to a better Sass workflow, watch Ian Carrico's excellent 2013 SassConf talk [Taking the Pain Out of Sass](https://vimeo.com/86306777). 

## Getting started

1. Clone or download the Shop files.
1. ``cd`` into the directory and run ``bundle install``
1. Run ``compass watch`` or ``sass -r sass-globbing --watch sass:css``

If you do not have bundler, you just need to ensure you have Sass, Compass, and the Sass globbing gem on your machine. 

````
    gem install sass
    gem install compass
    gem install sass-globbing
````

Check out the [docs](doc/TOC.md)

### sass
This directory should contain all your project's Sass files. For more on organizing sass files, [see](doc/sass.md)

### css

This directory should contain all your project's compiled CSS files. 

### bower.json

The project [Bower](bower.io) configuration file. Edit this file if you are going to use Bower to manage your Sass dependencies

### config.rb

If you are using [Compass](compass-style.org), make sure that you edit the project paths to Sass, CSS, JS, and image directories so they match your directory structure. 

### Gemfile

Add your Sass extensions if you are using [Bundler](http://bundler.io/) to manage your gems/extensions.

### Gulpfile.js(coming soon)

A pre-configured Gulpfile for compiling Sass. Defaults to Ruby Sass.

### Gruntfile.js (coming soon)

A pre-configured Gruntfile for compiling Sass. Defaults to using Ruby Sass



