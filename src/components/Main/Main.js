import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Main content container.
 */
const Main = props => (
  <div
    className={classNames('Main d-flex flex-column', {
      'Main--collapsed': props.collapse,
      'px-3': !props.noPaddingX,
    })}
    style={{
      // Contain LoadingOverlay which has absolute position.
      position: 'relative',
    }}
  >
    {props.children}
  </div>
);

Main.propTypes = {
  children: PropTypes.node,
  /**
   * Will not flex-grow vertically. Useful for nesting of multiple Main components.
   *
   * TODO: Luka - create shared logic for layout components
   * @ignore
   */
  collapse: PropTypes.bool,
  // No horizontal padding.
  // noPaddingX: PropTypes.bool,
};

Main.defaultProps = {
  collapse: false,
};

export default Main;
