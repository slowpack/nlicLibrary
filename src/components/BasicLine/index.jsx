import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import styles from './index.less'
// import {axios} from "@umijs/max"
export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setData([{
      "Date": "2022-08",
      "scales": 5034
    },
    {
      "Date": "2022-07",
      "scales": 8955
    },
    {
      "Date": "2022-06",
      "scales": 6278
    },
    {
      "Date": "2022-05",
      "scales": 4195
    },
    {
      "Date": "2022-04",
      "scales": 5145
    },
    {
      "Date": "2022-03",
      "scales": 6207
    }])
  //   fetch('http://192.168.1.2:8000/home/libraryList')
  //     .then(res=>{
  //       res.json().then((data)=>{
  //           console.log(data.data);
  //           setData(data.data)
  //       })
  //   })
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  };
  //先用模拟数据装一下
  
  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return <div className={styles.lineBox}><h1>历史数据统计</h1><Line {...config} /></div>;
};

