import React from 'react';
import PropTypes from 'prop-types';

class Body extends React.Component {
  constructor () {
    super();

    this.state = {
      columns: [],
      data: [],
    };
  }

  render () {
    const body = this.state.data
      .map((item, index) => {
        const row = this.state.columns.map((column) => {
          if (column.first) {
            return (<th scope="row">{item[column]}</th>);
          }
          return (<td>{item[column]}</td>);
        });
        return (<tr key={index}>{row}</tr>);
      });

    return (
      <tbody>
        {body}
      </tbody>
    );
  }
}

Body.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

Body.displayName = 'Body of Bootstrap 4 table';

export default Body;
