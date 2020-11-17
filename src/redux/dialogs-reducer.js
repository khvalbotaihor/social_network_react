let SEND_MESSAGE = "SEND-MESSAGE";
let UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo!!!"},
        {id: 4, message: "Yo!!!"},
        {id: 5, message: "Yo!!!"},
    ],
    newMessageBody: 'Kurwa mat',
    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 11,
                message: state.newMessageBody
            }
            return {
                ...state,
                newMessageBody : "",
                messages: [...state.messages, newMessage]
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return  {
                ...state,
            newMessageBody : action.body
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (value) => ({type: UPDATE_NEW_MESSAGE_BODY, body: value})
export default dialogsReducer;
