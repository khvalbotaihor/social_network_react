let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "Blabla", likesCount: 11},
                {id: 4, message: "Dada", likesCount: 11},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yo!!!"},
                {id: 4, message: "Yo!!!"},
                {id: 5, message: "Yo!!!"},
            ],
            newMessageText: 'Kurwa mat',
            dialogs: [
                {id: 1, name: 'Dimich'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
        },
        sidebar: {
            friends: [
                {id: 1, name: "Andrew"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Bill"},
            ]


        }
    },
    _callSubscriber() {
        console.log("State modified");
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // pattern observer, наблюжатель, button.addEventListener similar to publisher-subscriber
    },


    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            store._callSubscriber(this._state)
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
        else if (action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: 9,
                message: this._state.dialogsPage.newMessageText
            }

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state)
        }
        else if (action.type === "UPDATE-NEW-MESSAGE") {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state)
        }
    }


}


export const addPostActionCreator = () =>{
    return {
        type:"ADD-POST"
    }
}

export const updateNewPostTextActionCreator = (value) =>{
    return {
        type:"UPDATE-NEW-POST-TEXT",
        newText:value
    }
}


export default store;
window.store = store;