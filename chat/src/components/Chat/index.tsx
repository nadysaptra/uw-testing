import React from 'react';
import ChatHistory from '../MessagesList/index';
import Manage from '../Manage/index';
import { Col, Row, Navbar } from 'react-bootstrap';

const ChatPage: React.FC = () => {
    return (
        <React.Fragment>
            <Row className='p-0 m-0'>
                <Col className='bg-light p-0 m-0'>
                    <Navbar bg="dark">
                        <h3 className='title text-white'>chat app</h3>
                        <Manage />
                    </Navbar>
                    <ChatHistory />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ChatPage;