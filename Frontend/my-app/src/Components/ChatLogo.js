import classes from "../css/ChatLogo.module.css";
import { Image } from "react-bootstrap";
import { useState, useRef, useContext, useEffect } from "react";
import { Fragment } from "react";
import AuthContext from "../store/auth-context";


const ChatLogo = () => {
  const [showChat, setShowChat] = useState(false);
  const chatContainerRef = useRef();
  const ctx = useContext(AuthContext);
  
  const turnOnChatWindow = ()=>{
     
    setShowChat(true);
  };

  function binding(){
    ctx.bindChatContainer(chatContainerRef);
    ctx.bindShowChatFunct(turnOnChatWindow);
  }

  useEffect(()=>{
    binding();
  },[]);
  
  
  

  return (
    <Fragment>
    <div className={classes.chat}  style={ showChat ? {}:{display: 'none'}} ref={chatContainerRef}></div>
    <div className={classes.chatLogo} onClick={()=>{setShowChat(!showChat);}}>
      <Image
        src={`https://res.cloudinary.com/daufq6nuh/image/upload/v1632596726/CampusBuy/chat-logo2_ae7nfe.png`}
      ></Image>
    </div>
    </Fragment>
  );
};

export default ChatLogo;