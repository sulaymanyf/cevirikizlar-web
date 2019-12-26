import {PageHeaderWrapper} from '@ant-design/pro-layout';
import React, {useState, useEffect} from 'react';
import {Spin} from 'antd';
import styles from './index.less';
import MetinList from './MetinList';
import {connect} from 'dva';

function Metin(props) {
  const [loading, setLoading] = useState(true);
  console.log(props.hero);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！">
      <div className={styles.main}>
        <Spin spinning={loading} size="large"></Spin>
        <MetinList/>
      </div>

    </PageHeaderWrapper>
  );
};
export default connect(({res}) => ({res}))(Metin);
