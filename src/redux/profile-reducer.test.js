import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11},
    ]
}

test("new post should be added", () => {
    let action = addPostActionCreator("it-kamasutra.com");


    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5);
})

test("new added post name equals post name", () => {
    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe("it-kamasutra.com");
})

test("decrement the length of messages after deleting", () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3);
})
test("length of messages after deleting isn't changing if we add incorrect id", () => {
    let action = deletePost(100);

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4);
})