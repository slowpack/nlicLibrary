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
    fetch('http://192.168.1.2:8000/home/libraryList')
      .then(res=>{
        res.json().then((data)=>{
            console.log(data.data);
            setData(data.data)
        })
    })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
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

