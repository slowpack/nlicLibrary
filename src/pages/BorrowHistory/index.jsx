import React,{Fragment,useEffect, useState} from 'react'
import BasicColumn from '@/components/BasicColumn'
import HighValueTable from '@/components/HighValueTable'
import styles from "./inde.less"
export default function BorrowHistory () {
return (<Fragment>
  <div className={styles.borrowBox}>
    <h1>读者借阅趋势</h1>
  <BasicColumn></BasicColumn>

  </div>
  
  <div className={styles.borrowBox}>
    <h1>历史数据</h1>
  <HighValueTable></HighValueTable>
    
  </div>
  </Fragment>)}