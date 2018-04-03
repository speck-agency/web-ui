import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Td = props => (
  <td
    className={classNames('Td', props.className, {
      'Td--master': props.isMaster,
    })}
    style={{
      ...props.style,
      verticalAlign: 'middle',
    }}
    onClick={props.onClick}
  >
    {props.children}
  </td>
);

Td.propTypes = {
  /**
   * Is visible when Table.isMaster prop is set to true.
   */
  isMaster: PropTypes.bool,
};

Td.defaultProps = {
  isMaster: false,
};

export default Td;
