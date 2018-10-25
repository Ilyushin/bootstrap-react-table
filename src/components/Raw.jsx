import React from 'react';
import PropTypes from 'prop-types';

class Raw extends React.Component {
  constructor () {
    super();
    this._onRowClick = this._onRowClick.bind(this);
  }

  _onRowClick (e) {
    this.props.onRowClick(e, this.props.index);
  }

  render () {
    const row = this.props.columns.map((column, columnIndex) => {
      if (column.first) {
        return (
          <th
            key={columnIndex}
            scope="row"
          >
            {this.props.data[column.id]}
          </th>
        );
      }
      return (<td key={columnIndex}>{this.props.data[column.id]}</td>);
    });
    return (
      <tr onClick={this._onRowClick}>
        {row}
      </tr>
    );
  }
}

Raw.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.object,
  index: PropTypes.string,
  onRowClick: PropTypes.func,
};

Raw.displayName = 'Raw of Bootstrap 4 table';

export default Raw;
