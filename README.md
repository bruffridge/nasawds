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

### Installation

NASAWDS provides the same installation options as [USWDS](https://designsystem.digital.gov/documentation/developers); and is available via [nasawds npm package](https://www.npmjs.com/package/nasawds), source sass files, or compiled css available in the .zip file attached to each github release.

### Updates

NASAWDS now updates to the latest version of USWDS automagically. (thanks [GitHub Actions](https://github.com/features/actions)!)

NASAWDS uses a GitHub Action workflow to check for an updated version of USWDS every 15 days and updates itself automatically with the latest version on the develop branch, and releases a beta pre-release on GitHub and NPM. A two week window is provided for testing. Any issues found should be opened in this repository. After two weeks, if no unresolved issues are present in this GitHub repository, a GitHub Action workflow creates a new stable release on GitHub and NPM and merges develop into master.

### v3 Changes

NASAWDS starting with version 3 is now using the theming options availble in version 2 of USWDS. Older versions of NASAWDS are still available at their new archived home [nasawds-old](https://github.com/nasa/nasawds-old). This will greatly simplify the maintenance of NASAWDS going forward. The repository is no longer a fork of USWDS, it only contains the theme files necessary to apply NASA-specific changes to USWDS, the build scripts that build NASAWDS by combining the NASAWDS theme files with USWDS, and the GitHub Action workflows that automatically update NASAWDS to the latest non-major version of USWDS.
