import styles from './index.less';
import FormNormalLogin from './FormNormalLogin';

import React, { useState } from 'react';
import imgTitle from '../../assets/image/title.png';
export default function Login() {
  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <img src={imgTitle} />
      </div>
      <FormNormalLogin />
    </div>
  );
}
