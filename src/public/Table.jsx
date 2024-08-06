import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

export const Table = () => {


const columns = [
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true
    },
    { 
        name: "Email",
        selector: row => row.email,
        sortable: true
    },
    {
        name: "Age",
        selector: row => row.age,
        sortable: true
    }
]
const data = [
    {
        id: 1,
        name: "Muxammed",
        email: "Muxamed@example.com",
        age: "25"
    },
    {
        id: 2,
        name: "axmedbuni",
        email: "axmedbuni@example.com",
        age: "19"
    },
    {
        id: 3,
        name: "suhaybcadde",
        email: "suhaybcadde@example.com",
        age: "20"
    },
    {
        id: 4,
        name: "Bootaan",
        email: "Bootaan@example.com",
        age: "50"
    },
    {
        id: 5,
        name: "cabdilaai",
        email: "cabdilaai@example.com",
        age: "28"
    },
    
]

const [records, setRecords] = useState(data)

const handleFilterChange = (e) =>{
const newData =  records.filter(row => {
    return row.name.toLowerCase().includes(e.target.value.toLowerCase())
})
setRecords(newData)
}

  return (
    <div>
        <input type="text"  onChange={handleFilterChange}/>
<DataTable
columns={columns} data={data} selectableRows fixedHeader pagination >
    
</DataTable>
    </div>
  )
}
