/** @css css */
import React, {useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import Message from '../MessagesItem';
import Styled from 'styled-components';
import SendBox from '../SendBox';

const ChatHistory: React.FC = () => {

    const MessagesStyle = Styled.div`
        height: 800px;
        overflow-x: hidden;
        overflow-y: scroll;
    `;

    const chat = useSelector((state: any) => {
        return state.messages.message;
    });

    const nickname = useSelector((state: any) => {
        return state.login.username;
    });

    const messagesRef = useRef<HTMLDivElement>();

    useEffect(() => {
        if(messagesRef && messagesRef.current && 'scroll' in messagesRef.current) {
            messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
        }
    }, [messagesRef.current, chat]);


    return (
        <MessagesStyle className="border message-list" ref={messagesRef}>
            <ul className="mb-0 p-5">
                {chat.map((message: any, index: string) => (
                    <Message
                        key={index}
                        isOwn={message.name === nickname}
                        sender={message.name}
                        message={message.text}
                    >
                        {message.text}
                    </Message>
                ))}
            </ul>
            <SendBox />
        </MessagesStyle>
    );
};

export default ChatHistory;