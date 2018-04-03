import React from 'react';
import PropTypes from 'prop-types';

// Returns an integer
function parseIntOr(def = 0, val) {
  const int = parseInt(val, 10);

  return isNaN(int) ? def : int;
}

const numberOrStringType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

class PaginationOffset extends React.Component {
  static propTypes = {
    /**
     * Starts from 1.
     */
    count: numberOrStringType,
    limit: numberOrStringType,
    offset: numberOrStringType,
    offsetOfCountLabel: PropTypes.node,
    /**
     * @param {number} offset
     */
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    count: '',
    limit: '',
    offset: '',
    offsetOfCountLabel: 'of',
    onChange: offset => offset,
  };

  getCount = () => parseIntOr(0, this.props.count);
  getLimit = () => parseIntOr(0, this.props.limit);
  getOffset = () => parseIntOr(0, this.props.offset);

  getMaxOffset = () => this.getCount() - this.getLimit();

  handleDecreaseOffset = () => {
    const prevLimit = this.getLimit();
    const prevOffset = this.getOffset();

    if (prevOffset === 0) return;

    const offset = (prevOffset < prevLimit) ? 0 : (prevOffset - prevLimit);

    this.props.onChange(offset);
  };

  handleIncreaseOffset = () => {
    const prevLimit = this.getLimit();
    const prevOffset = this.getOffset();

    if (prevOffset >= this.getMaxOffset()) return;

    const offset = prevOffset + prevLimit;

    this.props.onChange(offset);
  };

  render() {
    const count = this.getCount();
    const limit = this.getLimit();
    const offset = this.getOffset();

    return (
      <div className="PaginationOffset-color d-flex align-items-center">
        <span className="d-flex align-items-end">
          {offset}
          -
          {(limit + offset) > count ? count : (limit + offset)}
          &nbsp;
          <small>{this.props.offsetOfCountLabel}</small>
          &nbsp;
          {count}
        </span>
        <div className="text-nowrap pl-2">
          <span
            className="material-icons p-2"
            onClick={this.handleDecreaseOffset}
            style={{
              cursor: offset > 0 ? 'pointer' : 'default',
              opacity: offset > 0 ? 1 : 0.3,
              color: offset > 0 ? '#000' : undefined,
            }}
          >
            navigate_before
          </span>
          <span
            className="material-icons p-2 ml-3"
            onClick={this.handleIncreaseOffset}
            style={{
              cursor: offset < this.getMaxOffset() ? 'pointer' : 'default',
              opacity: offset < this.getMaxOffset() ? 1 : 0.3,
              color: offset < this.getMaxOffset() ? '#000' : undefined,
            }}
          >
            navigate_next
          </span>
        </div>
      </div>
    );
  }
}

export default PaginationOffset;
