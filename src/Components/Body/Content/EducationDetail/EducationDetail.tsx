import React, { useState } from 'react';
import { CardLast, CardMiddle, EducationCard, EducationContainer, EducationHeader, FlexItem } from '../../../Styled-Components/Container.styles';
import { Col, Row, Button, Image } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import '../../../../Assets/Css/style.css'

const EducationDetail = () => {
    const [size, setSize] = useState<SizeType>('large');
    return (
        <EducationContainer>
            <EducationHeader>
                <Row>
                    <Col span={8}><h2>Education Details</h2></Col>
                    <Col span={8} offset={8}>
                        <Button type="primary" shape="round" icon={<EditOutlined />} size={size}>
                            Add New
                        </Button>
                    </Col>
                </Row>
            </EducationHeader>

            <EducationCard>
                <Row>
                    <Col span={6} style={{textAlign:'center'}}>
                        <Image
                            width={95}
                            height={120}
                            style={{ marginTop: '15px' }}
                            src='https://cdn4.vectorstock.com/i/1000x1000/03/43/less-light-icon-on-white-background-vector-3440343.jpg' />
                    </Col>
                    <Col span={9}>
                        <CardMiddle>
                            <span style={{ color: '#919191' }}>Course Title</span> <br />
                            <span style={{ paddingTop: '3px', display: 'inline-block' }}>Uphire</span> <br />
                            <FlexItem>
                                <h6><span style={{ color: '#919191' }}>Course Type</span> &nbsp; Project Manager</h6>
                                <h6><span style={{ color: '#919191' }}>Started Date</span>&nbsp; 1/06/2022</h6>
                                <h6><span style={{ color: '#919191' }}>Completed Date</span> &nbsp; 30/06/2022</h6>
                            </FlexItem>
                            <span style={{ color: '#919191' }}>Course Description</span> <br />
                            <span>Test</span> <br />
                        </CardMiddle>
                    </Col>
                    <Col span={9}>
                        <CardLast>
                            <span style={{ color: '#919191' }}>Organization Name</span><br />
                            <span>Test</span><br />
                            <span style={{ color: '#919191' }}>Organization Address</span><br />
                            <span>255, 2nd lane, Ukulukam</span><br />
                            <span>Vavuyian</span><br />
                            <span>Srilanka</span><br />
                            <span>4300</span>
                        </CardLast>
                        <EditOutlined className='edit-icon'/>
                    </Col>
                </Row>
            </EducationCard>

            <EducationCard>
                <Row>
                    <Col span={6} style={{textAlign:'center'}}>
                        <Image
                            width={90}
                            height={120}
                            style={{ marginTop: '15px' }}
                            src='https://cdn4.vectorstock.com/i/1000x1000/03/43/less-light-icon-on-white-background-vector-3440343.jpg' />
                    </Col>
                    <Col span={9}>
                        <CardMiddle>
                            <span style={{ color: '#919191' }}>Course Title</span> <br />
                            <span style={{ paddingTop: '3px', display: 'inline-block' }}>Bsc (hons) Information Technology and Management</span> <br />
                            <FlexItem>
                                <h6><span style={{ color: '#919191' }}>Course Type</span> &nbsp; Degree</h6>
                                <h6><span style={{ color: '#919191' }}>Started Date</span>&nbsp; 1/06/2022</h6>
                                <h6><span style={{ color: '#919191' }}>Completed Date</span> &nbsp; 30/06/2022</h6>
                            </FlexItem>
                            <span style={{ color: '#919191' }}>Course Description</span> <br />
                            <span>Information Technology and Management</span> <br />
                        </CardMiddle>
                    </Col>
                    <Col span={9}>
                        <CardLast>
                            <span style={{ color: '#919191' }}>Organization Name</span><br />
                            <span>Test</span><br />
                            <span style={{ color: '#919191' }}>Organization Address</span><br />
                            <span>255, 2nd lane, Ukulukam</span><br />
                            <span>Vavuyian</span><br />
                            <span>Srilanka</span><br />
                            <span>4300</span>
                        </CardLast>
                        <EditOutlined className='edit-icon'/>
                    </Col>
                </Row>
            </EducationCard>
        </EducationContainer>
    );
};

export default EducationDetail;