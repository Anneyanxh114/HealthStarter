import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { Divider, Input, DatePicker, Form, Upload, Select, Button, } from 'antd';

const StartACampaign = () => {
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;

    const mandatoryRule = {
        required: true,
        message: 'This field is mandatory',
    };
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <div>
            <Header />
            <Divider className='header-divider' />
            <div className='body'>
                <div className='title' id='Title'>Start A Campaign</div>
                <Form
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 30 }}
                    layout="vertical"
                    style={{ maxWidth: 600 }}
                    className='regForm'
                >
                    <Form.Item label="Campaign Title:" rules={[mandatoryRule]} required>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Campaign Category:" rules={[mandatoryRule]} required>
                        <Select
                            placeholder="Select a option"
                        >
                            <Select.Option value="HealthcareAid">Healthcare Aid</Select.Option>
                            <Select.Option value="ServiceAccess">Service Access</Select.Option>
                            <Select.Option value="MedicalResearch">Medical Research</Select.Option>
                            <Select.Option value="MentalHealth">Mental Health</Select.Option>
                            <Select.Option value="TechInnovators">Tech Innovators</Select.Option>
                            <Select.Option value="DigitalCreators">Digital Creators</Select.Option>
                            <Select.Option value="SustainableVentures">Sustainable Ventures</Select.Option>
                            <Select.Option value="SocialExplorers">Social Explorers</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Campaign Duration:" rules={[mandatoryRule]} required>
                        <RangePicker />
                    </Form.Item>
                    <Form.Item
                        label="Campaign Cover Image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="Upload an image that represents your campaign. Recommendation for the ratio is 3:2."
                        rules={[mandatoryRule]} required
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="Campaign Story Video & Image" rules={[mandatoryRule]} required>
                        <Form.Item
                            name="dragger"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            noStyle
                            rules={[mandatoryRule]} required
                        >
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined style={{ color: "#ED4949" }} />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">You may upload multiple images and one video.</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item label="Campaign Story" rules={[mandatoryRule]} required>
                        <TextArea rows={6} />
                    </Form.Item>
                    <Form.Item className='submit'>
                        <Button type="primary" style={{ background: "#ED4949", borderColor: "#ED4949", borderRadius: '10' }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Footer />
        </div>
    );
};

export default StartACampaign;
