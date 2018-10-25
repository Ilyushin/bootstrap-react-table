#bootstrap-react-table

##Usage
###Installation
```
npm install bootstrap-react-table --save
```

Example:
```
import React from 'react';
import BootstrapTable from 'bootstrap-react-table';

const columns = [
    {
        id: 'position',
        name: '#',
        first: true,
    },
    {
        id: 'name',
        name: 'Name'
    },
    {
        id: 'quantity',
        name: 'Quantity'
    }
];

const data = [
    {
        position: 1,
        name: 'Black shoes',
        quantity: 12
    }
]

class Table extends React.Component {
    constructor () {
        super();
        this.onRowClick = this.onRowClick.bind(this);
    }
    
    onRowClick (e, index){
        console.log(index)
    }

    return (
        <div>
            <BootstrapTable 
                columns={columns} 
                data={data} 
                onRowClick={this.onRowClick} 
            />
        </div>
    );
}
```