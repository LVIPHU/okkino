import styles from './page.module.css';
import React from 'react';
import { Button } from 'antd';

export default async function Index() {
  return (
    <div className={styles.page}>
      hello word
        <Button type={'primary'}>Button</Button>
    </div>
  );
}
