import config from './ChatbotDeps/config.js';
import MessageParser from './ChatbotDeps/MessageParser.js';
import ActionProvider from './ChatbotDeps/ActionProvider.js';
import './ChatbotComponent.css'
import Chatbot from 'react-chatbot-kit'
import { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    localStorage.clear()
  }, [])
  return (
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  );
};

export default ChatbotComponent
