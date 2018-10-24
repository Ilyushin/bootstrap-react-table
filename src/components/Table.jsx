import React from 'react';
import PropTypes from 'prop-types';
import { Table as BaseTable } from 'reactstrap';
import Header from './Header';
import Body from './Body';

class Table extends React.Component {
  constructor () {
    super();

    this.state = {
      columns: [],
      data: [],
    };
  }

  render () {
    return (
      <BaseTable responsive bordered>
        <Header columns={this.state.columns} />
        <Body columns={this.state.columns} data={this.state.data} />
        {/* <tbody> */}
        {/* <tr> */}
        {/* <th scope="row">1</th> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* </tr> */}
        {/* <tr> */}
        {/* <th scope="row">2</th> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* </tr> */}
        {/* <tr> */}
        {/* <th scope="row">3</th> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* <td>Table cell</td> */}
        {/* </tr> */}
        {/* </tbody> */}
      </BaseTable>
    );
  }
}

Table.defaultProps = {};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

Table.displayName = 'Bootstrap 4 table';

export default Table;
