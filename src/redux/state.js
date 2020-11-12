let state = {
    profilePage:{
        posts : [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Blabla", likesCount: 11},
            {id: 4, message: "Dada", likesCount: 11},
        ],
    },
    dialogsPage: {
        messages : [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo!!!"},
            {id: 4, message: "Yo!!!"},
            {id: 5, message: "Yo!!!"},
        ],
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

export let addPost = (postMessage) => {

    let newPost = {
        id:5,
        message: postMessage,
        likesCount:0
    }

    state.profilePage.posts.push(newPost)
}

export default state;