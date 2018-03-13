import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Table = (props) => {
  return (
    <div
      className={classNames('Table__container', {
        'b-0': !props.hasBorder,
      })}
    >
      <table
        id={props.id}
        className={classNames('Table table m-0', {
          'Table--master': props.isMaster,
        })}
      >
        {props.children}
      </table>
    </div>
  );
};

Table.propTypes = {
  id: PropTypes.string,
  isMaster: PropTypes.bool,
  hasBorder: PropTypes.bool,
};

Table.defaultProps = {
  // Is in master-detail view mode.
  // Has max-width and only td/th with isMaster prop set to true are visible.
  isMaster: false,
  hasBorder: true,
};

export default Table;
