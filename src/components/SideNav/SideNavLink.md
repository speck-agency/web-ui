Example of how to create a wrapper around SideNavLink if our library of choice is React Router 4.

```jsx static
import React from 'react';
import { NavLink } from 'react-router-dom';

import * as ui from '@speck-agency/web-ui';

const SideNavLink = props => (
  <ui.SideNavLink
    navLinkComponent={NavLink}
    navLinkProps={props}
  />
);

export default SideNavLink;
```