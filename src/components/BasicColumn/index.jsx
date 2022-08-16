import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
//基础柱状图
export default () => {
  const data = [
    {
      type: '2020',
      sales: 18,
    },
    {
      type: '2021',
      sales: 32,
    },
    {
      type: '2022',
      sales: 21,
    },
    
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: 'rgb(242, 243, 222)',

        opacity: 0.5,
      },
     

    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    color: 'rgb(116, 42, 203)',
    meta: {
      type: {
        alias: '年份',
      },
      sales: {
        alias: '借阅数',
      },
    },
  };
  return <Column {...config} />;
};

