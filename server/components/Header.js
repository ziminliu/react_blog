import React, { useState, useEffect } from 'react';
import '../public/style/components/header.css';
import { Row, Col, Menu } from 'antd';
import {
  HomeOutlined,
  YoutubeOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import '../public/style/pages/comm.css';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import servicePath from '../config/apiUrl';
const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(
        res => res.data.data
      );
      setNavArray(result);
    };
    fetchData();
  }, []);

  const handleClick = e => {
    if (e.key == 0) {
      Router.push('/index');
    } else {
      Router.push('/list?id=' + e.key);
    }
  };
  return (
    <div className='header'>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className='header-logo'>技术胖</span>
          <span className='header-txt'>专注前端开发</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode='horizontal' onClick={handleClick}>
            <Menu.Item key='0'>
              <HomeOutlined />
              首页
            </Menu.Item>
            {navArray.map(item => (
              <Menu.Item key={item.id}>
                {item.typeName}
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
