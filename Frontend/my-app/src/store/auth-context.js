
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Chat from '../Components/Chat';
require('dotenv').config();

const AuthContext = React.createContext({
    isLoggedIn: false,
    token: '',
    login:(token) => {},
    logout: () => {},
    chatContainer: null,
    bindChatContainer: (container) => {},
    bindShowChatFunct: (showChatFunct)=>{},
    showChatFunct: ()=>{},
    searchTarget: '',
    setSearchTarget: null,
    backendURL:''
    
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const [chatContainer, setChatContainer] = useState(null);
    const [showChatFunct, setShowChatFunct] = useState(null);
    const [searchTarget, setSearchTarget] = useState('');
    const userIsLoggedIn = !!token;
    
    const backendURL = process.env.REACT_APP_BACKEND_URL;
    const loginHandler =  (token) => {
        setToken(token);
    }

    const logoutHandler = async ()=>{
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`, { withCredentials: true, credentials: 'include' });
        setToken(null);
    }

    const refChatContainer = (container) =>{
        setChatContainer(container);
    }

    async function createChat(){
        if( token !== null && chatContainer !== null ){
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getUser`,{token:token});
            var self = { productSeller: response.data.user.email };
            Chat(token,self,chatContainer);
        }
    }

    useEffect(  ()=>{
       createChat();
       
    },[token,chatContainer]);

    const bindShowChatFunct = (showChatFunct)=>{
        setShowChatFunct( () => showChatFunct);
    }
    

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        chatContainer: chatContainer,
        bindChatContainer: refChatContainer,
        bindShowChatFunct: bindShowChatFunct,
        showChatFunct: showChatFunct,
        searchTarget: searchTarget,
        setSearchTarget: setSearchTarget,
        backendURL: backendURL
        
    }


    return (<AuthContext.Provider  value={contextValue}>{props.children}</AuthContext.Provider>);
}

export default AuthContext;