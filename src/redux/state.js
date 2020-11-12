let rerenderEntireTree = () =>{
    console.log("State modified");
}

let state = {
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
}

window.state = state;


export let addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount:0
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText="";
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}


export const addMessage = () => {
    let newMessage = {
        id:9,
        message: state.dialogsPage.newMessageText
    }

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText="";
    rerenderEntireTree(state)
}

export const updateNewMessage = (newText) =>{
    state.dialogsPage.newMessageText=newText;
    rerenderEntireTree(state)

}

export const subscribe = (observer) => {
    rerenderEntireTree=observer;  // pattern observer, наблюжатель, button.addEventListener similar to publisher-subscriber
}


export default state;

// store -it's an oop store