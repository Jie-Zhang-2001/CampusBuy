import Talk from "talkjs";
import axios from "axios";
require('dotenv').config();

const Chat = (token, product, container) => {
  Talk.ready.then(async () => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getUser`,{ token: token});
    var me = new Talk.User({
      id: response.data.user.email,
      name: response.data.user.email,
      email: response.data.user.email,
      photoUrl:
        "https://res.cloudinary.com/daufq6nuh/image/upload/v1632600315/CampusBuy/AccLogo_nu5f2n.png",
      welcomeMessage: "Hey there! How are you? :-)",
      role: "default",
    });
    window.talkSession = new Talk.Session({
      appId: process.env.REACT_APP_APP_ID,
      me: me,
    });

    var other = new Talk.User({
      id: product.productSeller,
      name: product.productSeller,
      email: product.productSeller,
      photoUrl: "https://res.cloudinary.com/daufq6nuh/image/upload/v1632600315/CampusBuy/AccLogo_nu5f2n.png",
      welcomeMessage: "Hey, how can I help?",
      role: "default",
    });

    var conversation = window.talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );

    conversation.setParticipant(me);
    conversation.setParticipant(other);
    var inbox = window.talkSession.createInbox({ selected: conversation });
    inbox.mount(container.current);
  });

 
};
export default Chat;
