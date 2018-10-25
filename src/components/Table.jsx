import React from 'react';
import PropTypes from 'prop-types';
import { Table as BaseTable } from 'reactstrap';
import Header from './Header';
import Body from './Body';

class Table extends React.Component {
  render () {
    return (
      <BaseTable responsive bordered>
        <Header columns={this.props.columns} />
        <Body
          columns={this.props.columns}
          data={this.props.data}
          onRowClick={this.props.onRowClick}
        />
      </BaseTable>
    );
  }
}

Table.defaultProps = {};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  onRowClick: PropTypes.func,
};

Table.displayName = 'Bootstrap 4 table';

export default Table;
