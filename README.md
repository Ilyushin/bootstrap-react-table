#bootstrap-react-table

##Usage
###Installation
```
npm install bootstrap-react-table --save
```

Example:
```
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

function onRowClick (e, index){
    console.log(index)
}

export default () => 
    (<BootstrapTable 
        columns={columns} 
        data={data} 
        onRowClick={onRowClick} 
    />);
```