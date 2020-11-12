export let store = {
    state : {
        profilePage:{
            posts : [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "Blabla", likesCount: 11},
                {id: 4, message: "Dada", likesCount: 11},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages : [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yo!!!"},
                {id: 4, message: "Yo!!!"},
                {id: 5, message: "Yo!!!"},
            ],
            newMessageText: 'Kurwa mat',
            dialogs : [
                {id: 1, name: 'Dimich'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
        },
        sidebar: {
            friends:[
                {id:1, name: "Andrew"},
                {id:2, name: "Sasha"},
                {id:3, name: "Bill"},
            ]


        }
    },
    rerenderEntireTree:  () =>{
        console.log("State modified");
    },
    addPost : () => {
        let newPost = {
            id:5,
            message: store.state.profilePage.newPostText,
            likesCount:0
        }

        store.state.profilePage.posts.push(newPost);
        store.state.profilePage.newPostText="";
        store.rerenderEntireTree(store.state)
    },
    updateNewPostText : (newText) => {
        store.state.profilePage.newPostText = newText;
        store.rerenderEntireTree(store.state)
    },
    addMessage : () => {
        let newMessage = {
            id:9,
            message: store.state.dialogsPage.newMessageText
        }

        store.state.dialogsPage.messages.push(newMessage);
        store.state.dialogsPage.newMessageText="";
        store.rerenderEntireTree(store.state)
    },
    updateNewMessage : (newText) =>{
        store.state.dialogsPage.newMessageText=newText;
        store.rerenderEntireTree(store.state)

    },
    subscribe : (observer) => {
        store.rerenderEntireTree=observer;  // pattern observer, наблюжатель, button.addEventListener similar to publisher-subscriber
    }
}
