Install the current package version:

```sh
npm i @speck-agency/web-ui
```

To use Icon component include CDN link:

```html
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>VPS</title>

	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</head>
```

### Stylesheet

To start fast just use prebuilt css file with the default theme located at:
```html
/build/css/default.css
```

Build configuration can be found in:
```html
/stylesheet
```
It also serves as an example of how to build you own custom css.

### Bootstrap 4

We heavily rely on Bootstrap 4.
Its classes were used directly in VPS components at the beginning of the project.
For now, many web-ui components only encapsulate Bootstrap components, e.g. Button.

Classes should be reused at minimum amongst components.
It is better that web-ui components define which styles are available.

But we won't prevent you from using Bootstrap components via classNames directly. For example:
```html
className="card"
```

One exception to the above rule are utility classes that change one specific css property. We found them useful for fast development:
```html
className="p-3 m-0"
```

This pattern for naming classes is called functional css.
Famous libraries are [Tachyons](https://tachyons.io/) and [Basscss](http://basscss.com/).
In Bootstrap 4 they are known as [Utilities](https://getbootstrap.com/docs/4.0/utilities).

To build components from ```/build/components/index.scss``` required Bootstrap Saas partials are:
```html
@import "../../node_modules/bootstrap/scss/functions";
@import "../../node_modules/bootstrap/scss/variables";
@import "../../node_modules/bootstrap/scss/mixins";
@import "../../node_modules/bootstrap/scss/print";
@import "../../node_modules/bootstrap/scss/reboot";
@import "../../node_modules/bootstrap/scss/type";
@import "../../node_modules/bootstrap/scss/tables";
@import "../../node_modules/bootstrap/scss/buttons";
@import "../../node_modules/bootstrap/scss/card";
@import "../../node_modules/bootstrap/scss/close";
@import "../../node_modules/bootstrap/scss/modal";
@import "../../node_modules/bootstrap/scss/utilities";
```