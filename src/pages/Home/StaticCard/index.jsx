import React from 'react';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';
import BasicLine from '../BasicLine';
const { Statistic } = StatisticCard;

export default () => {
  const [responsive, setResponsive] = useState(false);
  const getDate = (() => {
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    return year + '年' + month + '月' + day + '日';
  })();
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={offset => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard title="访客数据" extra={getDate} split={responsive ? 'horizontal' : 'vertical'} headerBordered bordered>
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '今日访客量',
                  value: '334人',
                  description: <Statistic title="较本月平均流量" value="18%" trend="up" />,
                }}
              />
              <StatisticCard
                statistic={{
                  title: '本月累计访客',
                  value: '5034人',
                  description: <Statistic title="月同比" value="5.04%" trend="up" />,
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '实时在馆人数',
                  value: '182/334',
                  suffix: '人',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '历史访客总量',
                  value: '135542624',
                  suffix: '人',
                }}
              />
            </ProCard>
          </ProCard>
          <BasicLine />
        </ProCard>
      </ProCard>
    </RcResizeObserver>
  );
};
