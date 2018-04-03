All components whose name ends with *Link receive the same 2 props:
```jsx static
linkComponent
linkProps
```
### Normal links

If ```linkComponent``` is undefined, link is by default rendered as a normal link.

Use them for external links or to refresh page on each link click.

### Browser history links

They directly mutate browser history so we can change URL without page refreshes.
Use them to navigate inside SPA.

The most popular library is [React Router 4](https://reacttraining.com/react-router/web/guides/philosophy).

```linkComponent``` is a reference to React component which must receive the following props:
```jsx static
className
activeClassName
```
   where activeClassName is applied when the route is active.

It is the same interface used by [NavLink](https://reacttraining.com/react-router/web/api/NavLink) in React Router 4, so you can just pass it.

```linkProps.className``` and ```linkProps.activeClassName``` will be concatenated to ours, while other props are passed unchanged.

### Using Link components with React Router 4

Example of how to create a SideNavLink container if our library of choice is React Router 4.

```jsx static
import React from 'react';
import { NavLink } from 'react-router-dom';

import { SideNavLink as UiSideNavLink } from '@speck-agency/web-ui';

const SideNavLink = (props) => {
  return (
    <UiSideNavLink
      linkComponent={NavLink}
      {...props}
    />
  );
};

export default SideNavLink;
```

### Using React Router 4 with React Redux

[React Redux](https://github.com/reactjs/react-redux) is the official React bindings for Redux. We use it in the VPS app.

One caveat is that [connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) HOC uses shouldComponentUpdate.

Connected component MUST receive new props on location change, otherwise it will block update of child components, including NavLinks in ExamplePageHeader.

Recommended solution is to wrap any component that uses React Router into withRouter from 'react-router-dom', so that it knows when location changes.

```jsx static
import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { PageHeader, PageHeaderLink } from '@speck-agency/web-ui';

class ExamplePageHeader extends React.Component {
  render() {
    return(
      <ui.PageHeader>
        <ui.PageHeaderLink
          linkComponent={NavLink}
          linkProps={{ to: 'home' }}
        />
      </ui.PageHeader>
    )
  }
}

export default withRouter(connect()(ExamplePageHeader));
```

These won't work:
```jsx static
export default connect()(withRouter(ExamplePageHeader));
export default connect()(ExamplePageHeader);
```

Read more:

1. [React Router - Dealing with Update Blocking](https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking)

2. [stackoverflow](https://stackoverflow.com/a/44565602)


### Why we didn't use React Router NavLink directly
This way users can choose another library or another version of React Router.

If you find it more convenient, we can use it directly, so there will be no need for defining containers.
