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
  isMaster: PropTypes.bool,
};

Td.defaultProps = {
  // Is visible in master-detail view.
  isMaster: false,
};

export default Td;
