import React from 'react';
import { Button, PageHeader } from 'antd';
import 'antd/dist/antd.css';
import '../../Assets/Css/style.css'
import { Avatar } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from '../Styled-Components/Container.styles';

const Header: React.FC = () => {
    return (
        <PageHeader
            className='page_header'
            ghost={false}
            title="UPHIRE"
            extra={[
                <Menu>
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li>About</li>
                    <li><Avatar src="https://images.unsplash.com/photo-1521491611010-d9fe4222dcae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTU2MDYxMHx8ZW58MHx8fHw%3D&w=1000&q=80" /></li>
                </Menu>
            ]}
        >
        </PageHeader>
    );
};

export default Header;