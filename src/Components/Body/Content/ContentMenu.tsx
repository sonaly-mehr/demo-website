import React from 'react';
import { Menu } from 'antd';
import { SnippetsOutlined, UserOutlined, ProjectOutlined, FileProtectOutlined } from '@ant-design/icons';
import '../../../Assets/Css/style.css'

const ContentMenu = () => {
    return (
        <div>
            <Menu mode="horizontal" defaultSelectedKeys={['three']}>
                <Menu.Item key="mail" icon={<UserOutlined/>}>
                    Biography
                </Menu.Item>
                <Menu.Item key="two" icon={<ProjectOutlined/>}>
                    Projects
                </Menu.Item>
                <Menu.Item key="three" icon={<SnippetsOutlined />}>
                    Education
                </Menu.Item>
                <Menu.Item key="four" icon={<FileProtectOutlined />}>
                    Professional
                </Menu.Item>
          </Menu>
        </div>
    );
};

export default ContentMenu;