# Amir Sharapov (@amirfounder) Component Library

NOTE: Breaking Changes released WEEKLY if not DAILY! Do not install and use on production website unless you know what you are getting yourself into. (...and there is 99.99% chance you don't).

Backlog → https://github.com/orgs/amirfounder/projects/1

## Usage

A componenet library for the ReactJS Framework, built to be used by the @amirfounder brand.

### Components

- Button
- Column
- Container
- Header
- Heading
- Input
- Link
- Logo
- Menu
- Modal
- Page
- Paragraph
- Section

### Global Styles (NEW)

`globalStyles` Object structure:

```
globalStyles = {
  <COMPONENT>: {
    <PROPERTY>: <VALUE>,
    ...
    <PSEUDO-SELECTOR>: {
      <PROPERTY>: <VALUE>,
      ...
    },
    ...
  },
  ...
}
```

`globalStyles` Object example:

```
globalStyles = {
  button: {
    backgroundColor: "red",
    color: "#fff",
    hover {
      backgroundColor: "dark-red"
    }
  }
}

```

## Dependencies:

- Storybook: Used for viewing components
- Rollup: Used to compress all libraries into a single file (See below for plugins)

### Rollup Plugins:

- rollup-plugin-terser: Used to minify the js
- rollup-plugin-poscss: Used to allow css files in rollup
- ...

## Developers:


### TODO:

- Write tests
- Mobile friendliness
- Text/Select/Radio... Input Components
- Header 'position: fixed' ability
- Variants
- Write JSDocs
- Rewrite functions to follow code styleguide
- Look into javascript destructuring to pass unnamed props to styled component
- Page and paragraph components need styled components as well

### Publishing Steps

1. If new components were created, export them via the /src/index.js file
2. Run `npm run build-lib` to run rollup and minify file
3. Update the readme.md file to account for the changes in the latest version
4. Commit
5. Run `npm version patch / minor / major` to update the package version
6. Run `npm publish` to publish package!

### Coding Styleguide

When writing code for this guide, follow the following code guidelines

#### Writing '...StylesService.js' functions:

Paramaters should be in the following order for easier readability and maintanability:

1. Custom (i.e. 'variant', 'size', etc.) → determines multiple styles
2. Actual (i.e. padding : paddingProp, color: colorProp, etc) → The actual attribute if it exists
3. Other → Any other prop that can help determine the return value of the function

## Version History:

### V 1.0: Semi-Failed Attempts

#### 1.0.0: First attempt

Version should NOT be used.
Test version.

- Did not target the minified js file
- Did not have support for ECMAScript support.

#### 1.0.1: Second attempt

Version targets the correct js file + ECMAScript support.
Still a test version.

Added Components:

- Button
- Header
- Input (incomplete...)
- Link
- Logo
- Menu (incoomplete...)
- Modal (incomplete...)

### 1.1.0: More Components

All components now allow a size to be configured when calling.
All components are no longer 'incomplete'

Refactored Components:

- All previous...

Added Components:

- Column
- Section
- Page
- Paragraph
- Heading
- Container

#### 1.1.1 - 1.1.11 - Bug Fixes

1. Fixed bug where components were not being exported
2. Fixed bug from previous fix
3. Testing bug fix where react-router-dom link throws error
4. Rebuilding Library
5. (__blank__)
6. Rebuilt Package after another import fix
7. LinkPro component for testing
8. Beta release of every component using styled components
9. Updated logo and menu to not require column to align selfnpm
10. Tried another fix with the logo onclick
11. Fixed history import from 'react-router-dom' in the header

### 1.2.0: Refactored components

Components no longer use an external .css file for styling and depend fully on styled components.

#### 1.2.1 - 1.2.x

1. Updated README Installation Warning and Publishing Steps for developers
2. Fixed Link Bug
3. Allows Link to redirect to external sites
4. Allows Link to redirect to external site in new tab

### 1.3.0 Global styles

Components can now accept global styles into their styling services by using the GlobalStyles context provider.

#### 1.3.1 - 1.3.x

1. Added JSdocs to each component