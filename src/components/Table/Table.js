import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Table = (props) => {
  const {
    className,
    isMaster,
    hasBorder,
    children,
    ...rest
  } = props;

  return (
    <div
      className={classNames('Table__container', className, {
        'Table__container--master': isMaster,
        'b-0': !hasBorder,
      })}
    >
      <table
        {...rest}
        className={classNames('Table table m-0', {
          'Table--master':isMaster,
        })}
      >
        {children}
      </table>
    </div>
  );
};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Is in master-detail view mode.
   * Has max-width and only td/th with isMaster prop set to true are visible.
   */
  isMaster: PropTypes.bool,
  hasBorder: PropTypes.bool,
};

Table.defaultProps = {
  isMaster: false,
  hasBorder: true,
};

export default Table;
