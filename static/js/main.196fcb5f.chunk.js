(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{20:function(e,t,n){e.exports={container:"Friends_container__1vXBu",friends:"Friends_friends__26b-Y",friendStyle:"Friends_friendStyle__3MOkU",name:"Friends_name__1CUAn"}},21:function(e,t,n){e.exports={mess:"Message_mess__UzDr2",messages:"Message_messages__1SoHI",message:"Message_message__31Ydj",commentIcon:"Message_commentIcon__4f534"}},23:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2BuAM",dialogsItems:"Dialogs_dialogsItems__3IzEd",textArea:"Dialogs_textArea__1fI_7",active:"Dialogs_active__7Unus",dialog:"Dialogs_dialog__3OL7a"}},30:function(e,t,n){e.exports={dialog:"DialogItem_dialog__3Kknu"}},31:function(e,t,n){e.exports={userPhoto:"users_userPhoto__17sEO",selectedPage:"users_selectedPage__2WsOV"}},32:function(e,t,n){e.exports={item:"MyPosts_item__2KQQn",postsBlock:"MyPosts_postsBlock__kHRAW"}},33:function(e,t,n){e.exports={header:"Header_header__2SmBk",loginBlock:"Header_loginBlock__39sRC"}},47:function(e,t,n){e.exports={"lds-ring":"preloader_lds-ring__2y5JO"}},48:function(e,t,n){e.exports={content:"Profile_content__282pM"}},49:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__riNZb"}},50:function(e,t,n){e.exports={item:"MyPost_item__12n6o"}},7:function(e,t,n){e.exports={nav:"Navbar_nav__1K9Fs",item:"Navbar_item__7NLtA",activeLink:"Navbar_activeLink__34KyV"}},74:function(e,t,n){},75:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),c=n.n(i),r=n(19),a={friends:[{id:1,name:"Andrew"},{id:2,name:"Sasha"},{id:3,name:"Bill"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e},l=n(18),u=n(2),d="SEND-MESSAGE",j="UPDATE-NEW-MESSAGE-BODY",b={messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo!!!"},{id:4,message:"Yo!!!"},{id:5,message:"Yo!!!"}],newMessageBody:"Kurwa mat",dialogs:[{id:1,name:"Dimich"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n={id:11,message:e.newMessageBody};return Object(u.a)(Object(u.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(l.a)(e.messages),[n])});case j:return Object(u.a)(Object(u.a)({},e),{},{newMessageBody:t.body});default:return e}},g=n(43).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4d139ff6-a913-4dd1-9885-7cbd4a942daa"}}),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return g.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},p=function(e){return g.get("profile/"+e).then((function(e){return e.data}))},f=function(e){return g.post("follow/".concat(e)).then((function(e){return e.data}))},m=function(e){return g.delete("follow/".concat(e)).then((function(e){return e.data}))},x=function(){return g.get("auth/me").then((function(e){return e.data}))},v="ADD-POST",_="UPDATE-NEW-POST-TEXT",P="SET_USER_PROFILE",w={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],newPostText:"it-kamasutra.com",profile:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var n={id:5,message:e.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(l.a)(e.posts),[n]),newPostText:""});case _:return Object(u.a)(Object(u.a)({},e),{},{newPostText:t.newText});case P:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});default:return e}},N="FOLLOW",y="UNFOLLOW",C="SET_USERS",A="SET_CURRENT_PAGE",S="SET_TOTAL_USERS_COUNT",I="TOGGLE_IS_FETCHING",U="TOGGLE_IS_FOLLOWING_PROGRESS",M={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},E=function(e){return{type:I,isFetching:e}},T=function(e,t){return{type:U,isFetching:e,userId:t}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case y:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case C:return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case A:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case S:return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.count});case I:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case U:return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(l.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},B="SET_USER_DATA",L={id:null,email:null,login:null,isAuth:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.data),{},{isAuth:!0});default:return e}},R=n(44),z=Object(r.c)({profilePage:k,dialogsPage:h,sidebar:o,usersPage:F,auth:D}),G=Object(r.d)(z,Object(r.a)(R.a));window.store=G;var W=G,H=n(24),J=n.n(H),q=(n(74),n(75),n(7)),V=n.n(q),Y=n(5),K=n(6),X=n(20),Q=n.n(X),Z=function(e){return Object(s.jsxs)("div",{className:Q.a.friends,children:[Object(s.jsx)("div",{className:Q.a.friendStyle}),Object(s.jsx)("div",{className:Q.a.name,children:e.name})]})},$=function(e){var t=e.sidebar.friends.map((function(e,t){return Object(s.jsx)(Z,{name:e.name},t)}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Friends"}),Object(s.jsx)("div",{className:Q.a.container,children:t})]})},ee=Object(K.b)((function(e){return{sidebar:e.sidebar}}))($),te=function(){return Object(s.jsxs)("nav",{className:V.a.nav,children:[Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)(Y.b,{to:"/profile",activeClassName:V.a.activeLink,children:" Profile "})}),Object(s.jsx)("div",{className:"".concat(V.a.active," ").concat(V.a.item),children:Object(s.jsx)(Y.b,{to:"/dialogs",activeClassName:V.a.activeLink,children:"Messages"})}),Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)(Y.b,{to:"/users",activeClassName:V.a.activeLink,children:"Users"})}),Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)(Y.b,{to:"/news",activeClassName:V.a.activeLink,children:"News"})}),Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)(Y.b,{to:"./music",activeClassName:V.a.activeLink,children:"Music"})}),Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)(Y.b,{to:"/settings",activeClassName:V.a.activeLink,children:"Settings"})}),Object(s.jsx)(ee,{})]})},ne=n(4),se=function(){return Object(s.jsx)("div",{children:"Music"})},ie=function(){return Object(s.jsx)("div",{children:"News"})},ce=function(){return Object(s.jsx)("div",{children:"Settings"})},re=n(23),ae=n.n(re),oe=n(30),le=n.n(oe),ue=function(e){var t="/dialogs/"+e.id;return Object(s.jsxs)("div",{className:le.a.dialog+" "+le.a.active,children:[Object(s.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbJjaUVrc9az_B1Rqphs0EULawVrCg_mBMIg&usqp=CAU"}),Object(s.jsx)(Y.b,{to:t,children:e.name})]})},de=n(21),je=n.n(de),be=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:je.a.mess,children:Object(s.jsxs)("div",{className:je.a.messages,children:[Object(s.jsx)("span",{className:je.a.commentIcon}),Object(s.jsx)("span",{className:je.a.message,children:e.message}),Object(s.jsx)("span",{className:je.a.commentIcon})]})})})},he=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(s.jsx)(ue,{name:e.name,id:e.id},e.id)})),i=t.messages.map((function(e){return Object(s.jsx)(be,{message:e.message},e.id)}));return Object(s.jsxs)("div",{className:ae.a.dialogs,children:[Object(s.jsx)("div",{className:ae.a.dialogsItems,children:n}),Object(s.jsxs)("div",{className:ae.a.messages,children:[i,Object(s.jsxs)("div",{className:ae.a.textArea,children:[Object(s.jsx)("div",{children:Object(s.jsx)("textarea",{value:t.newMessageBody,onChange:function(t){var n=t.target.value;e.updateNewMessageBody(n)}})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:function(){e.SendMessage()},children:"Add Message"})})]})]})]})},ge=n(13),Oe=n(14),pe=n(16),fe=n(15),me=function(e){return{isAuth:e.auth.isAuth}},xe=function(e){var t=function(t){Object(pe.a)(i,t);var n=Object(fe.a)(i);function i(){return Object(ge.a)(this,i),n.apply(this,arguments)}return Object(Oe.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(s.jsx)(e,Object(u.a)({},this.props)):Object(s.jsx)(ne.a,{to:"/login"})}}]),i}(c.a.Component);return Object(K.b)(me)(t)},ve=xe(he),_e=Object(K.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){e({type:j,body:t})},SendMessage:function(){e({type:d})}}}))(ve),Pe=n.p+"static/media/user.81251c2b.png",we=n(31),ke=n.n(we),Ne=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],i=1;i<=t;i++)n.push(i);return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:n.map((function(t){return Object(s.jsxs)("span",{onClick:function(n){e.onPageChanged(t)},className:e.currentPage===t&&ke.a.selectedPage,children:[" ",t," "]})}))}),e.users.map((function(t){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(Y.b,{to:"/profile/"+t.id,children:Object(s.jsx)("img",{src:null!=t.photos.small?t.photos.small:Pe,className:ke.a.userPhoto})})}),Object(s.jsx)("div",{children:t.followed?Object(s.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)},children:"Unfollow"}):Object(s.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(s.jsxs)("span",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:t.name}),Object(s.jsx)("div",{children:t.status})]}),Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:"u.location.country"}),Object(s.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},ye=n(47),Ce=n.n(ye),Ae=function(){return Object(s.jsxs)("div",{className:Ce.a["lds-ring"],children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})},Se=function(e){Object(pe.a)(n,e);var t=Object(fe.a)(n);function n(){var e;Object(ge.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(Oe.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[this.props.isFetching?Object(s.jsx)(Ae,{}):null,Object(s.jsx)(Ne,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unFollow:this.props.unFollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),Ie=xe(Object(K.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(T(!0,e)),f(e).then((function(n){0===n.resultCode&&t(function(e){return{type:N,userId:e}}(e)),t(T(!1,e))}))}},unFollow:function(e){return function(t){t(T(!0,e)),m(e).then((function(n){0===n.resultCode&&t(function(e){return{type:y,userId:e}}(e)),t(T(!1,e))}))}},setCurrentPage:function(e){return{type:A,currentPage:e}},toggleFollowingInProgress:T,getUsers:function(e,t){return function(n){n(E(!0)),O(e,t).then((function(e){var t,s;n(E(!1)),n((t=e.items,{type:C,users:t})),n((s=e.totalCount,{type:S,count:s}))}))}}})(Se)),Ue=n(48),Me=n.n(Ue),Ee=n(49),Te=n.n(Ee),Fe=function(e){return e.profile?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"https://i.pinimg.com/originals/31/d8/07/31d8075c82022692d2056edebd26d995.jpg"})}),Object(s.jsxs)("div",{className:Te.a.descriptionBlock,children:[Object(s.jsx)("img",{src:e.profile.photos.large}),"ava + description",Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{children:["About me: ",e.profile.aboutMe]}),Object(s.jsxs)("div",{children:["Fullname: ",e.profile.fullName]}),Object(s.jsxs)("div",{children:["Looking for a job : ",e.profile.lookingForAJob.toString()]}),Object(s.jsxs)("div",{children:["Job secription: ",e.profile.lookingForAJobDescription]}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("a",{to:"facebook.com",target:"_blank",children:"Facebook"})]}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("a",{href:"github.com",target:"_blank",children:"github"})]}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"instagra.com/sds",target:"_blank",children:"instagram"})}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("a",{href:"",target:"_blank",children:"mainLink"})]}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("a",{href:"https://twitter.com/@sdf",target:"_blank",children:"twitter"})]}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("a",{href:"vk.com/dimych",target:"_blank",children:"vk"})]}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("a",{href:"",target:"_blank",children:"website"})]}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("a",{href:"",target:"_blank",children:"youtube"})]}),Object(s.jsx)("hr",{})]})]}):Object(s.jsx)(Ae,{})},Be=n(32),Le=n.n(Be),De=n(50),Re=n.n(De),ze=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:Re.a.item,children:[Object(s.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbJjaUVrc9az_B1Rqphs0EULawVrCg_mBMIg&usqp=CAU"}),e.message,Object(s.jsx)("div",{children:Object(s.jsxs)("span",{children:["like ",e.likesCount]})})]})})},Ge=function(e){var t=e.posts.map((function(e,t){return Object(s.jsx)(ze,{message:e.message,likesCount:e.likesCount},t)})),n=c.a.createRef();return Object(s.jsxs)("div",{className:Le.a.postsBlock,children:[Object(s.jsx)("h3",{children:"My posts"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("textarea",{ref:n,value:e.newPostText,onChange:function(){var t=n.current.value;e.updateNewPostText(t)}})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),Object(s.jsx)("div",{className:Le.a.item,children:t})]})},We=Object(K.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e({type:_,newText:t})},addPost:function(){e({type:v})}}}))(Ge),He=function(e){return Object(s.jsxs)("div",{className:Me.a.content,children:[Object(s.jsx)(Fe,{profile:e.profile}),Object(s.jsx)(We,{})]})},Je=xe(function(e){Object(pe.a)(n,e);var t=Object(fe.a)(n);function n(){return Object(ge.a)(this,n),t.apply(this,arguments)}return Object(Oe.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=2),this.props.getUserProfile(e)}},{key:"render",value:function(){return Object(s.jsx)(He,Object(u.a)(Object(u.a)({},this.props),{},{profile:this.props.profile}))}}]),n}(c.a.Component)),qe=Object(ne.f)(Je),Ve=Object(K.b)((function(e){return{profile:e.profilePage.profile}}),{getUserProfile:function(e){return function(t){p(e).then((function(e){t({type:P,profile:e})}))}}})(qe),Ye=n(33),Ke=n.n(Ye),Xe=function(e){return Object(s.jsxs)("header",{className:Ke.a.header,children:[Object(s.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTubyb9WhTgpvPRNhyJziWioWCHhAXMgY7zSg&usqp=CAU",alt:""}),Object(s.jsx)("div",{className:Ke.a.loginBlock,children:e.isAuth?e.login:Object(s.jsx)(Y.b,{to:"/login",children:"Login"})})]})},Qe=function(e){Object(pe.a)(n,e);var t=Object(fe.a)(n);function n(){return Object(ge.a)(this,n),t.apply(this,arguments)}return Object(Oe.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(s.jsx)(Xe,Object(u.a)({},this.props))}}]),n}(c.a.Component),Ze=Object(K.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){x().then((function(t){if(0===t.resultCode){var n=t.data,s=n.id,i=n.email,c=n.login;e(function(e,t,n){return{type:B,data:{userId:e,email:t,login:n}}}(s,i,c))}}))}}})(Qe),$e=function(){return Object(s.jsx)("h1",{children:"LOGIN"})},et=function(e){return Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(Ze,{}),Object(s.jsx)(te,{}),Object(s.jsxs)("div",{className:"app-wrapper-content",children:[Object(s.jsx)(ne.b,{path:"/dialogs",render:function(){return Object(s.jsx)(_e,{})}}),Object(s.jsx)(ne.b,{path:"/profile/:userId?",render:function(){return Object(s.jsx)(Ve,{})}}),Object(s.jsx)(ne.b,{path:"/users",render:function(){return Object(s.jsx)(Ie,{})}}),Object(s.jsx)(ne.b,{path:"/music",component:se}),Object(s.jsx)(ne.b,{path:"/news",component:ie}),Object(s.jsx)(ne.b,{path:"/settings",component:ce}),Object(s.jsx)(ne.b,{path:"/login",render:function(){return Object(s.jsx)($e,{})}})]})]})};J.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(Y.a,{children:Object(s.jsx)(K.a,{store:W,children:Object(s.jsx)(et,{})})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.196fcb5f.chunk.js.map