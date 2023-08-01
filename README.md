# NASA Web Design System

The same [USWDS](https://designsystem.digital.gov/) you know and love, with NASA theming!

### NASA Theme customizations

* Minor tweaks to colors in `_uswds-theme-color.scss`
* Headings use helvetica instead of source sans pro font in `_uswds-theme-typography.scss`
* NASA meatball favicons in `theme/favicons`
* Dark header option and other minor visual tweaks in `_uswds-theme-custom-styles.scss`
  * [See it live!](https://www1.grc.nasa.gov/facilities/sec/)
  * To use the dark header option, add the `.usa-header--dark` class to the `<header>` element.
  * For the close icon in the mobile slideout menu to appear white instead of dark gray replace `close.svg` with `close-white.svg` in this line of html `<button class="usa-nav__close"><img src="/assets/img/close.svg" alt="close"></button>`

### How to Use

Like USWDS, NASAWDS has two installation options: 

* **Direct download** - Download the .zip file attached to the latest stable [release](https://github.com/bruffridge/nasawds/releases) under the assets section. Extract then add the files to your project's code base. For more details see [this section](https://designsystem.digital.gov/documentation/developers/#download) in the USWDS developer documentation.

* **Install using npm** - NASAWDS is available as an [npm package](https://www.npmjs.com/package/nasawds). To install via npm, follow [these instructions](https://designsystem.digital.gov/documentation/developers/#install-using-npm), but where it says `uswds` replace with `nasawds`. Once installed, you will find the compiled asset files in the `node_modules/nasawds/src/` directory.

For more detailed installation and usage instructions see the [USWDS developer documentation](https://designsystem.digital.gov/documentation/developers).

#### Creating a webpage using NASAWDS
- Create an index.html file at the top of your repository
- Paste into that file 
```<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>My Example Project</title>
    <link rel="stylesheet" href="./assets/css/styles.css" />
  </head>
 <bod>
  <script src="assets/js/uswds.min.js"></script>

</body>
</html>
```
- Go to <a href="https://designsystem.digital.gov/page-templates/">this USWDS page of page templates</a>, find a page template you like, click the 'COMPONENT CODE' button, and copy the HTML code out of the window and into your index.html file between the `<body>` tags.
- Note that the page templates are form an earlier version of USWDS so the relative links to the CSS, JS, and Img files need to be changed. If you used NPM to get the NASAWDS files, you'll want to do a replace all on the index.html file you currently have such that all `assets/` are replaced with `node_modules/nasawds/src/`. 
- You should now have a nice looking index.html page to start editing from.

### Updates

NASAWDS now updates to the latest version of USWDS automagically. (thanks [GitHub Actions](https://github.com/features/actions)!)

NASAWDS uses a GitHub Action workflow to check for an updated version of USWDS every 15 days and updates itself automatically with the latest version on the develop branch, and releases a beta pre-release on GitHub and NPM. A two week window is provided for testing. Any issues found should be opened in this repository. After two weeks, if no unresolved issues are present in this GitHub repository, a GitHub Action workflow creates a new stable release on GitHub and NPM and merges develop into master.
