import React, {useEffect, useState} from 'react';
import {Divider, Pagination, Popconfirm, Table, Tag} from 'antd';
import {connect} from 'dva';
import {PageHeaderWrapper} from '@ant-design/pro-layout';

const Metinstatus = ['Yeni', 'ceviriyor', 'update', 'Bit'];
const statusColor = ['green', 'geekblue', 'volcano', 'red'];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <span>
        <Tag color={statusColor[status - 1]} key={status}>
          {Metinstatus[status - 1]}
        </Tag>
      </span>
    ),
  },
  {
    title: 'Metin-Type',
    dataIndex: 'metinType',
    key: 'metinType',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <span>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </span>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <span>
        <a>incelemek</a>
        <Divider type="vertical" />
        <Popconfirm title="Başladıktan sonra pes etmez !!!" okText="Yes" cancelText="No">
          <a>Çeviriyi başlat</a>
        </Popconfirm>
        ,
      </span>
    ),
  },
];

function MetinList({ metin, dispatch }) {
  const { pages, current, records } = metin.metins.data;
  console.log(pages);
  console.log(current);
  console.log(records);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！">
      <Table columns={columns} dataSource={records} pagination={false} />
      <Pagination defaultCurrent={current} total={pages} />
    </PageHeaderWrapper>
  );
}

export default connect(({ metin }) => ({ metin }))(MetinList);
