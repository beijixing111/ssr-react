import React, { Component } from 'react';
import styles from './index.module.scss';
import useStyles from 'isomorphic-style-loader/useStyles'

const Test = () => {
  useStyles(styles);
  return (
    <div>
      <p className={styles.test}>这是一个测试样式组件！</p>
    </div>
  )
}

export default Test;
