import React,{useEffect,useState} from "react";
import axios from "axios";
import { Table } from "antd"

const DataTable=()=>{
    const [allData,setAllData]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            const result= res.data
            setAllData(result)
            console.log(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    const columns=[
{
    title:'ID',
    dataIndex:'id',
    key:'id',
    sorter: (a, b) => a.id - b.id,
},
{
    title:'title',
    dataIndex:'title',
    key:'id',
    filters:[
        {
            text: 'title',
             value:'title'   
        }
    ],
    filterMode:'tree',
    filterSearch:true,
    onFilter: (value, record) => record.title.startsWith(value)
},
{
    title:'body',
    dataIndex:'body',
    key:'id'
}
    ]

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };

    return(
        <div>
            <Table columns={columns} dataSource={allData}  onChange={onChange}/>
        </div>
    )
}

export default DataTable