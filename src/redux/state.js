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
    getState(){
        return this._state
    },
    rerenderEntireTree() {
        console.log("State modified");
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        store.rerenderEntireTree(this._state)
    },
    updateNewPostText(newText) {
        this.getState().profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state)
    },
    addMessage() {
        let newMessage = {
            id: 9,
            message: this._state.dialogsPage.newMessageText
        }

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this.rerenderEntireTree(this._state)
    },
    updateNewMessage(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this.rerenderEntireTree(this._state)

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;  // pattern observer, наблюжатель, button.addEventListener similar to publisher-subscriber
    }
}

export default store;
window.store = store;