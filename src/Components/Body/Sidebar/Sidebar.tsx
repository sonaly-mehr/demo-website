import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { ProfileContainer, ProfileHeader, SingleProfileContent} from '../../Styled-Components/Container.styles';

const Sidebar = () => {
    return (
        <ProfileContainer >
            <ProfileHeader>
                <h2>Profile</h2>
                <EditOutlined style={{fontSize:'20px', position:'relative', left:'8px', top:'10px'}}/>
            </ProfileHeader>
            <Image
                width={160}
                height={170}
                style={{marginBottom: '15px'}}
                src="https://images.unsplash.com/photo-1521491611010-d9fe4222dcae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTU2MDYxMHx8ZW58MHx8fHw%3D&w=1000&q=80"
            />

            <SingleProfileContent>
                <h6>Username</h6>
                <span>Jayatharan</span>
            </SingleProfileContent>
            <SingleProfileContent>
                <h6>Email</h6>
                <span>test@gmail.com</span>
            </SingleProfileContent>
            <SingleProfileContent>
                <h6>Mobile No</h6>
                <span>0293203223</span>
            </SingleProfileContent>
            <SingleProfileContent>
                <h6>Alternative Email</h6>
                <span>test@gmail.com</span>
            </SingleProfileContent>
        </ProfileContainer>
    );
};

export default Sidebar;