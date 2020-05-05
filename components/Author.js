import { Avatar, Divider } from "antd";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import "../public/style/components/author.css";
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="/public/avator.jpg" />
      </div>
      <div className="author-introduction">
        专注于WEB和移动前端开发
        <Divider>社交账号</Divider>
        <Avatar size={28} className="account">
          <GithubOutlined />
        </Avatar>
        <Avatar size={28} className="account">
          <QqOutlined />
        </Avatar>
        <Avatar size={28} className="account">
          <WechatOutlined />
        </Avatar>
      </div>
    </div>
  );
};

export default Author;
