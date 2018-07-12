# react-responsive-data-table

[![npm](https://img.shields.io/npm/v/react-responsive-data-table.svg)](https://www.npmjs.com/package/react-responsive-data-table) 
[![npm](https://img.shields.io/npm/dw/react-responsive-data-table.svg)](https://www.npmjs.com/package/react-responsive-data-table)
![npm](https://img.shields.io/npm/l/react-responsive-data-table.svg)


Responsive Data Table with Searching, Sorting, Pagination


## Demo
[Click Here](https://miteshtagadiya.github.io/react-responsive-data-table/)

## Installation

1.  Install React Table as a dependency

```bash
# NPM
$ npm install react-responsive-data-table
```

2.  Import the `react-responsive-data-table` module

```javascript
// ES6
import Table from "react-responsive-data-table";
```


## Example
```jsx
import Table from 'react-responsive-data-table';

render() {
<Table style={{
    opacity: 0.8,
    backgroundColor: "blue",
    color: "#ffffff",
    textAlign: "center"
  }}
  tableStyle="table table-hover table-striped table-bordered table-borderless table-responsive"
  pages={true}
  pagination={true}
  onRowClick={() => {}} // if You Want Table Row Data OnClick then assign this {row => console.log(row)}
  page={true}
  errormsg="Error. . ."
  loadingmsg="Loading. . ."
  isLoading={false} 
  sort={true} 
  title="Customers"
  search={true}
  size={10}
  data={{
    head: {
      id: "ID",
      name: "Name",
      email: "Email",
      created_at: "Created At",
      orders: "Orders",
      last_order: "Last OrderResponse",
      total_spent: "Total Spent"
    },
    data: [
      {
        id: 218354810912,
        name: "Kattie Wisoky",
        email: "Kattie.Wisoky@data-generator.com",
        created_at: "2017-11-07T15:14:07.000+0000",
        orders: 6,
        last_order: "#2233",
        total_spent: 0
      },
      {
        id: 218354843680,
        name: "Vernon McLaughlin",
        email: "Vernon.McLaughlin@data-generator.com",
        created_at: "2017-11-07T15:14:07.000+0000",
        orders: 4,
        last_order: "#1287",
        total_spent: 0
      },
      {
        id: 218354909216,
        name: "Jeffry Harber",
        email: "Jeffry.Harber@data-generator.com",
        created_at: "2017-11-07T15:14:07.000+0000",
        orders: 2,
        last_order: "#2356",
        total_spent: 0
      }
    ]
  }} />
  }

```

## Data
You have to pass data and head objects in data prop. head is for Header.
```javascript
<Table
  data={{head:{},data:[]}}
/>
```

## Props

These are all of the available props (and their default values) for the main `<Table />` component.
```javascript
{
    data={{
        head:{},
        data:[]
        }},
    style,
    pages: true,
    tableStyle: "table class name",
    pagination= true,
    page= true,
    title= "title",
    search= true,
    size= 10,
    errormsg= "Error message",
    loadingmsg= "Loading message",
    isLoading= false,
    sort= true,
    onRowClick= {() => {}} //function
}
```

## Props Details

* `data` - You have to pass data and head objects in data prop. head is for Header.
* `tableStyle` - Bootstrap Table class name
* `style` - Style for Table Header
* `pages` - Boolean. Shows Pages Option to display number of records per page.[5,10,20,25,50]
* `pagination` - Boolean. Shows Pagination if true.
* `page` - Boolean. Shows Current page out of total pages if true.
* `title` - String. Title for Table.
* `search` - Boolean. Shows Searchbar if true.
* `size` - Number Of Records that Shows in single page. You can 
Onle use 5,10,20,25,50.
* `errormsg` - Error message.(Default is Error. . .)
* `loadingmsg` - Loading message. (Default is Loading. . .)
* `isLoading` - Boolean. Default is false
* `sort` - Boolean. Default is  
* `onRowClick` - Function. You can redirect to another page by onRowClick, you can call any function by onRowClick, You can also get Row Data by onRowClick using ({row => console.log(row)}).
