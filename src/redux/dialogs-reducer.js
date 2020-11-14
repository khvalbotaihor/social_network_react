let SEND_MESSAGE = "SEND-MESSAGE";
let UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 9,
                message: state.newMessageBody
            }
            state.messages.push(newMessage);
            state.newMessageBody = "";
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (value) => ({type: UPDATE_NEW_MESSAGE_BODY, body: value})


export default dialogsReducer;