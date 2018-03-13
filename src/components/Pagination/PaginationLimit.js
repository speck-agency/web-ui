import React from 'react';
import PropTypes from 'prop-types';

// Returns an integer
function parseIntOr(def = 0, val) {
  const int = parseInt(val, 10);

  return isNaN(int) ? def : int;
}

const numberOrStringType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

class PaginationLimit extends React.Component {
  static propTypes = {
    limit: numberOrStringType,
    // Select limit options.
    limitOptions: PropTypes.arrayOf(numberOrStringType),
    rowsPerPageLabel: PropTypes.node,
    // Params - { limit: number }
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    limit: '',
    limitOptions: [10, 20, 50, 100],
    rowsPerPageLabel: 'Rows per page:',
    onChange: ({ limit }) => ({ limit }),
  };

  getLimit = () => parseIntOr(0, this.props.limit);

  handleLimitChange = (e) => {
    this.props.onChange({
      limit: parseInt(e.target.value, 10),
    });
  };

  render() {
    return (
      <div className="PaginationLimit-color display-flex align-items-end text-nowrap">
        <small className="mr-2">
          {this.props.rowsPerPageLabel}
        </small>
        <select
          value={this.getLimit()}
          onChange={this.handleLimitChange}
        >
          {this.props.limitOptions.map(x => (
            <option
              key={x}
              value={x}
            >
              {x}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default PaginationLimit;
