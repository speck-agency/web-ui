import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
  isMaster: PropTypes.bool,
};

Th.defaultProps = {
  // Is visible in master-detail view.
  isMaster: false,
};

export default Th;
