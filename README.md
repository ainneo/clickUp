## Description
I created this project for ClickUp. This project was built using, BEM, HTML, CSS, SASS, and Gulp.

## Technologies Used
* BEM
* CSS3
* HTML
& Glup

## BEM BASICS:
- Block: If a section of code might be reused and it doesn't depend on other page components being implemented. Eg: header-form
- Element: If a section of code can't be used separately without the parent entity (the block). Name is separated from  block by a double underscore (__). eg: header__button
- Modifier: An entity that defines the appearance, state, or behavior of a block or element. Name is separated from  block or element  by a single underscore (_). eg: search-form_theme_islands or menu__item_visible
```
<section class="header">
  <div class="header-wrapper">
    <div class="header-wrapper__logo">
     <div class="header-wrapper__logo-shape header-wrapper__logo-shape_visible">
     <div>
    </div>
  <div>
</section>
```
## Gulp & SASS Set Up:
https://www.youtube.com/watch?v=q0E1hbcj-NI
https://codeburst.io/quick-setup-for-gulp-4-browsersync-sass-coder-coder-3240dda62e4f
To start dev run: ```gulp watch``` or ```gulp run``` depending on your setup.
