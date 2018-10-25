import React from 'react';
import PropTypes from 'prop-types';
import Raw from './Raw';

class Body extends React.Component {
  render () {
    const body = this.props.data
      .map((item, rowIndex) => (
        <Raw
          key={rowIndex}
          columns={this.props.columns}
          data={item}
          index={rowIndex}
          onRowClick={this.props.onRowClick}
        />
      ));

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
  onRowClick: PropTypes.func,
};

Body.displayName = 'Body of Bootstrap 4 table';

export default Body;
