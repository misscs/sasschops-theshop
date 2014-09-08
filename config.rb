# Compass CSS framework config file
# =================================

Encoding.default_external = "utf-8"

# Require any additional compass plugins here.
# ---------------------------------------------
# 1. Sass globbing allows you to import many Sass or Scss files in a single
#    import statement. https://github.com/chriseppstein/sass-globbing
#
require 'sass-globbing' # [1]

# Require any additional import paths
# -------------------------------------
# 1. Lets you use ``@import`` with bower packages
#     ex. @import 'normalize';
add_import_path "./bower_components" # [1]

# Configure Directories
# ----------------------
# 1. Set this to the root of your project when deployed:
# 2. Set this to true to use relative assets in CSS as you would expect

project_type = :stand_alone
http_path = "/" # [1]
sass_dir = "sass"
css_dir = "css"
images_dir = "img"
fonts_dir = "fonts"
javascripts_dir = "js"
line_comments = true
preferred_syntax = :scss
output_style = :expanded
relative_assets = true # [2]

asset_cache_buster :none
