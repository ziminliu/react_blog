import Head from 'next/head';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import '../public/style/pages/detailed.css';
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import axios from 'axios';

const Detailed = () => {
  let markdown = '# hello';

  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className='bread-div'>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href='/'>首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href='/'>视频列表</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href='/'>XXX</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className='detailed-title'>React 实战视频教程</div>
              <div className='list-icon center'>
                <span>
                  <CalendarOutlined />
                  2019-06-28
                </span>
                <span>
                  <FolderOutlined />
                  视频教程
                </span>
                <span>
                  <FireOutlined />
                  5989人
                </span>
              </div>
              <div className='detailed-content'>
                <ReactMarkdown source={markdown} escapeHtml={false} />
              </div>
            </div>
          </div>
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className='detailed-nav comm-box'>
              <div className='detailed-nav comm-box'>
                <div className='nav-title'>文章目录</div>
                <MarkNav
                  className='article-menu'
                  source={markdown}
                  ordered={true}
                />
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
Detailed.getInitalProps = async context => {
  console.log(context.query.id);
  let id = context.query.id;
  const promise = new Promise(resolve => {
    axios('http://127.0.0.1:7001/default/getArticleById').then(res => {
      console.log(res);
      resolve(res.data.data[0]);
    });
  });
  return await promise;
};

export default Detailed;
