# Amir Sharapov (@amirfounder) Component Library

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

## Dependencies:

- Storybook: Used for viewing components
- Rollup: Used to compress all libraries into a single file (See below for plugins)

### Rollup Plugins:

- rollup-plugin-terser: Used to minify the js
- rollup-plugin-poscss: Used to allow css files in rollup
- ...

### TODO:

- Write tests
- Mobile friendliness
- Text/Select/Radio... Input Components
- Dynamic elements at the :root node of CSS, drop inline 'style' attribute
- Turn the entire styles variable into a single variable

### Version History:

#### 1.0.0 - First attempt

Version should NOT be used.
Test version.

- Did not target the minified js file
- Did not have support for ECMAScript support.

#### 1.0.1 - Second attempt

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

#### 1.1.0 - More Components:

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

#### 1.1.1 - Fix

Fixed bug where components were not being exported

#### 1.1.2 - Fix

Fixed bug from previous fix