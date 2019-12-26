import React from 'react';
import {Table, Tag, Pagination, Divider, Popconfirm} from 'antd';
import styles from './index.less';
import {connect} from 'dva';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <span>
        <a>incelemek</a>
        <Divider type="vertical"/>
        <Popconfirm title="Başladıktan sonra pes etmez !!!" okText="Yes" cancelText="No">
         <a>Çeviriyi başlat</a>
        </Popconfirm>,
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


function MetinList(props) {
  console.log(props.res);
  return (
    <div>
      <Table
        columns={columns} dataSource={data}
        pagination={false}
      />
      <Pagination defaultCurrent={6} total={500} style={{marginTop: 12}}/>
    </div>
  );
}

export default connect(({res}) => ({res}))(MetinList);

