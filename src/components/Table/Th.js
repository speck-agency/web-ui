import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Th = props => (
  <th
    className={classNames('Th', props.className, {
      'Th--master': props.isMaster,
    })}
    style={{ ...props.style }}
    onClick={props.onClick}
  >
    {props.children}
  </th>
);

Th.propTypes = {
  /**
   * Is visible when Table.isMaster prop is set to true.
   */
  isMaster: PropTypes.bool,
};

Th.defaultProps = {
  isMaster: false,
};

export default Th;
