"use client";
import React from 'react';
import { Avatar, List } from 'antd';
import {gql} from "../data-access/graphq-client";

const { Item, } = List
const { Meta } = Item

export default async function Index() {
  const {users} = await gql.GetUsers()
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(item, index) => (
          <Item>
            <Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.email}
            />
          </Item>
        )}
      />
    </div>
  );
}
