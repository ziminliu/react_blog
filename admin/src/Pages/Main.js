import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import AdminIndex from './AdminIndex';

function Main() {
  return (
    <Router>
      <Route path='/' exact component={Login} />
      {/* 含有子路由的组件不能设置精确匹配 */}
      <Route path='/index/'  component={AdminIndex} />
    </Router>
  );
}

export default Main;
