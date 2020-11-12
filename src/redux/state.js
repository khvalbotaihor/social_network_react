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
            message: store.getState().profilePage.newPostText,
            likesCount: 0
        }

        store.getState().profilePage.posts.push(newPost);
        store.getState().profilePage.newPostText = "";
        store.rerenderEntireTree(store.getState())
    },
    updateNewPostText(newText) {
        store.getState().profilePage.newPostText = newText;
        store.rerenderEntireTree(store.getState())
    },
    addMessage() {
        let newMessage = {
            id: 9,
            message: store.getState().dialogsPage.newMessageText
        }

        store.getState().dialogsPage.messages.push(newMessage);
        store.getState().dialogsPage.newMessageText = "";
        store.rerenderEntireTree(store.getState())
    },
    updateNewMessage(newText) {
        store.getState().dialogsPage.newMessageText = newText;
        store.rerenderEntireTree(store.getState())

    },
    subscribe(observer) {
        store.rerenderEntireTree = observer;  // pattern observer, наблюжатель, button.addEventListener similar to publisher-subscriber
    }
}

export default store;
window.store = store;