### Icons

Icon component uses [Google Material Icons](https://google.github.io/material-design-icons/#icon-font-for-the-web)
via Google Web Fonts.

[List of available icons](https://material.io/icons/).

If name is composed of multiple words, use underscores:
```html
"done all" => "done_all"
```

### How to import

All components have unique name and are exported from root index.js.

Example 1 - Create container around Button:
```jsx static
import { Button } from '@speck-agency/web-ui';

const ActionButton = () => <Button />;
```

Example 2 - Create container around Button that is also called Button:
```jsx static
import { Button as UiButton } from '@speck-agency/web-ui';

const Button =  () => <UiButton />;
```
```jsx static
import * as ui from '@speck-agency/web-ui';

const Button =  () => <ui.Button />;
```