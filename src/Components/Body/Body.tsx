import React from 'react';
import { Col, Row } from 'antd';
import { BodyConatainer } from '../Styled-Components/Container.styles';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import '../../Assets/Css/style.css'

const Body = () => {
    return (
        <BodyConatainer>
            <Row>
                <Col span={5}><Sidebar/></Col>
                <Col span={19}><Content/></Col>
            </Row>
        </BodyConatainer>
    );
};

export default Body;