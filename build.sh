#!/bin/bash

# Create a build directory
mkdir -p build/css build/images build/scripts build/views

# Copy all files to the build folder
cp -r css/* build/css/
cp -r images/* build/images/
cp -r scripts/* build/scripts/
cp -r views/* build/views/

# Minify CSS files
for file in build/css/*.css
do
  npx clean-css -o "$file" "$file"
done

# Minify JavaScript files
for file in build/scripts/*.js
do
  npx terser "$file" -o "$file"
done

# Copy the HTML files to the build directory
cp index.html build/

echo "Build completed!"
