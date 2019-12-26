import {PageHeaderWrapper} from '@ant-design/pro-layout';
import React, {useState, useEffect, Component} from 'react';
import {Spin} from 'antd';
import styles from './index.less';
import MetinList from './MetinList';
import {connect} from 'dva';


class Metin extends Component {

  render() {


    return (
      <PageHeaderWrapper content="这是一个新页面，从这里进行开发！">
        <div className={styles.main}>
          <MetinList/>
          <div
            style={{
              paddingTop: 100,
              textAlign: 'center',
            }}
          >
          </div>
        </div>


      </PageHeaderWrapper>
    );
  }
}

export default connect()(Metin);
