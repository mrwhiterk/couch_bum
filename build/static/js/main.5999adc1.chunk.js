(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),i=a.n(r),s=(a(64),a(15)),c=a(26),o=a(9),u=a(10),m=a(12),g=a(11),h=a(13),d=a(5),E=(a(65),a(105)),p=a(106),b=(a(66),a(48)),f=a.n(b),v=a(49),O=a.n(v),j=a(50),L=a.n(j),y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-section"},l.a.createElement(E.a,null,l.a.createElement(p.a,{xs:"6",sm:"4"},l.a.createElement("img",{src:O.a,alt:"",height:"200px"}),l.a.createElement("h4",null,"Learn From your community"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),l.a.createElement(p.a,{xs:"6",sm:"4"},l.a.createElement("img",{src:L.a,alt:"",height:"200px"}),l.a.createElement("h4",null,"Share your talents with the world"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),l.a.createElement(p.a,{sm:"4"},l.a.createElement("img",{src:f.a,alt:"",height:"200px"}),l.a.createElement("h4",null,"Explore something different"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))}}]),t}(n.Component),k=a(22),I=a(14),S=a.n(I),w=window.location.host.includes("localhost")?"http://localhost:3001":"http://couch-bum-1234.herokuapp.com",C=a(107),U=a(108),x=a(109),D=a(110),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={listings:null,searchTerm:""},a.getListings=a.getListings.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getListings()}},{key:"getListings",value:function(){var e=this;S.a.get(w+"/users/listings").then(function(t){e.setState({listings:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return this.state.listings?l.a.createElement("div",null,l.a.createElement("h2",null,"Listings"),l.a.createElement(C.a,null,this.state.listings.map(function(e,t){return l.a.createElement(U.a,{key:t},l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(s.b,{to:"/listing/".concat(e._id)},l.a.createElement(x.a,null,e.address))),l.a.createElement(p.a,null,l.a.createElement("img",{src:e.imgUrls[0],height:"100px"})),l.a.createElement(p.a,null),l.a.createElement(p.a,null,l.a.createElement(D.a,null,e.notes))))}))):l.a.createElement("div",null,"Loading")}}]),t}(n.Component),T=a(126),F=a(111),M=a(112),P=a(113),B=a(114),A=a(115),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={listingOwner:void 0,listingDetails:void 0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;S.a.get(w+"/users/getListingOwner/"+t).then(function(t){e.setState({listingOwner:t.data})}).catch(function(e){console.log(e)}),S.a.get(w+"/users/getUserListing/"+t).then(function(t){e.setState({listingDetails:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){if(this.state.listingOwner&&this.state.listingDetails){var e=this.state.listingOwner,t=e.username,a=e.email,n=e.bio,r=this.state.listingDetails,i=r.address,s=r.availability,c=r.notes,o=r.imgUrls;return l.a.createElement("div",null,l.a.createElement(F.a,null,l.a.createElement(M.a,null,"Listing Info"),l.a.createElement(P.a,null,l.a.createElement(B.a,null,l.a.createElement("h3",null,i)),l.a.createElement(A.a,null,l.a.createElement("div",null,s?l.a.createElement(T.a,{color:"success"},"Available"):l.a.createElement(T.a,{color:"danger"},"Unavailable")),l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("h4",null,"Notes")," ",c),l.a.createElement(p.a,null,l.a.createElement("h4",null,"Images"),l.a.createElement(E.a,null,o.map(function(e,t){return l.a.createElement(p.a,{xs:"auto",key:t},l.a.createElement("img",{src:e,alt:t,height:"150px"}))})))),l.a.createElement("div",null),l.a.createElement("div",null)))),l.a.createElement(F.a,null,l.a.createElement(M.a,null,"Host Info"),l.a.createElement(P.a,null,l.a.createElement(A.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("h4",null,"Username")," ",t),l.a.createElement(p.a,null,l.a.createElement("h4",null,"Bio")," ",n),l.a.createElement(p.a,null,l.a.createElement("h4",null,"Email")," ",a))))))}return l.a.createElement("div",null,"Loading")}}]),t}(n.Component),W=a(55),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={skillList:null,searchTerm:""},a.getSkills=a.getSkills.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getSkills()}},{key:"getSkills",value:function(){var e=this;S.a.get(w+"/users/getMySkills/"+localStorage.id).then(function(t){e.setState({skillList:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return this.state.skillList?0===this.state.skillList.length?l.a.createElement("h3",null,"No Skills Listed"):l.a.createElement("div",null,l.a.createElement("h2",null,"My Skills"),l.a.createElement(C.a,null,this.state.skillList.map(function(e,t){return l.a.createElement(U.a,{key:t},l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(x.a,null,e.name)),l.a.createElement(p.a,null),l.a.createElement(p.a,null),l.a.createElement(p.a,null,l.a.createElement(s.b,{to:"/removeSkillFromUser/".concat(e._id)},"Remove"))))})),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/addListingToUser"},l.a.createElement(W.a,{color:"primary"},"Add"))):l.a.createElement("div",null,"Loading")}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={homeListings:null,searchTerm:""},a.getListings=a.getListings.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getListings()}},{key:"getListings",value:function(){var e=this;S.a.get(w+"/users/getListings/"+localStorage.id).then(function(t){e.setState({homeListings:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return this.state.homeListings?0===this.state.homeListings.length?l.a.createElement("h3",null,"No Listings"):l.a.createElement("div",null,l.a.createElement("h2",null,"My Listings"),l.a.createElement(C.a,null,this.state.homeListings.map(function(e,t){var a=e.address,n=e.availability,r=e.notes,i=e.imgUrls;return l.a.createElement(U.a,{key:t},l.a.createElement(F.a,null,l.a.createElement(M.a,null,"Listing Info"),l.a.createElement(P.a,null,l.a.createElement(B.a,null,l.a.createElement("h3",null,a)),l.a.createElement(A.a,null,l.a.createElement("div",null,n?l.a.createElement(T.a,{color:"success"},"Available"):l.a.createElement(T.a,{color:"danger"},"Unavailable")),l.a.createElement("div",null,l.a.createElement("h4",null,"Notes")," ",r),l.a.createElement("div",null,l.a.createElement("h4",null,"Images"),l.a.createElement(E.a,null,i.map(function(e,t){return l.a.createElement(p.a,{xs:"auto",key:t},l.a.createElement("img",{src:e,alt:t,height:"150px"}))})))))))})),l.a.createElement(W.a,{color:"primary"},"Add")):l.a.createElement("div",null,"Loading")}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={travelerList:null,searchTerm:""},a.getTravelers=a.getTravelers.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getTravelers()}},{key:"getTravelers",value:function(){var e=this;S.a.get(w+"/users/getTravelers").then(function(t){e.setState({travelerList:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return this.state.travelerList?l.a.createElement("div",null,l.a.createElement("h2",null,"Travelers"),l.a.createElement(C.a,null,this.state.travelerList.map(function(e,t){return l.a.createElement(U.a,{key:t},l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(s.b,{to:"/Traveler/".concat(e._id)},l.a.createElement(x.a,null,e.username))),l.a.createElement(p.a,null,l.a.createElement(D.a,null,e.bio)),l.a.createElement(p.a,null,l.a.createElement("img",{src:e.image,alt:"",height:"75px"})),l.a.createElement(p.a,null,l.a.createElement(D.a,null,e.skills[0]&&e.skills[0].name," "),l.a.createElement(D.a,null," ",e.skills[1]&&e.skills[1].name," "))))}))):l.a.createElement("div",null,"Loading")}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={traveler:void 0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;S.a.get(w+"/users/"+t).then(function(t){e.setState({traveler:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){if(this.state.traveler){var e=this.state.traveler,t=e.username,a=e.email,n=e.bio,r=e.image,i=e.skills;return l.a.createElement("div",null,l.a.createElement(F.a,null,l.a.createElement(M.a,null,"Traveler Info"),l.a.createElement(P.a,null,l.a.createElement(B.a,null,l.a.createElement("h3",null,t)),l.a.createElement(A.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("h4",null,"Bio")," ",n),l.a.createElement(p.a,null,l.a.createElement("h4",null,"Email")," ",a),l.a.createElement(p.a,null,l.a.createElement("img",{src:r,alt:"profile pic",height:"200px"})),l.a.createElement(p.a,null,l.a.createElement("h4",null,"Skills"),i.map(function(e,t){return l.a.createElement("p",{key:t},e.name)})))))))}return l.a.createElement("div",null,"Loading")}}]),t}(n.Component),$=(a(99),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={userInfo:null,searchTerm:""},a.getUserInfo=a.getUserInfo.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"getUserInfo",value:function(){var e=this;S.a.get(w+"/users/getUserInfo/"+localStorage.id).then(function(t){e.setState({userInfo:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){if(this.state.userInfo){var e=this.state.userInfo,t=e.username,a=e.email,n=e.bio,r=e.image;return l.a.createElement("div",null,l.a.createElement("h2",null,"UserInfo"),l.a.createElement(F.a,null,l.a.createElement(M.a,null,"Listing Info"),l.a.createElement(P.a,null,l.a.createElement(B.a,null,l.a.createElement("h3",null,t)),l.a.createElement(A.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("h4",null,"email")," ",a),l.a.createElement(p.a,null,l.a.createElement("h4",null,"bio")," ",n),l.a.createElement(p.a,null,l.a.createElement("h4",null,"profile pic"),l.a.createElement("img",{src:r,height:"200px"})))))),l.a.createElement(s.b,{to:"/editProfile"},l.a.createElement(W.a,{color:"info"},"Edit")))}return l.a.createElement("div",null,"Loading")}}]),t}(n.Component)),z=a(17),G=(a(100),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={username:"",bio:"",image:""},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get(w+"/users/getEditFields/"+localStorage.id).then(function(t){e.setState(Object(z.a)({},t.data))}).catch(function(e){console.log(e)})}},{key:"handleChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"updateProfile",value:function(){var e=this;S.a.put(w+"/users/updateProfile/"+localStorage.id,this.state).then(function(e){}).finally(function(){e.props.history.push("/myInfo"),window.location.reload()})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.updateProfile()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Update Profile"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange,className:"form-control",value:this.state.username}),l.a.createElement("label",{htmlFor:"bio"},"Bio"),l.a.createElement("input",{type:"text",name:"bio",onChange:this.handleChange,className:"form-control",value:this.state.bio}),l.a.createElement("label",{htmlFor:"image"},"Image"),l.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,className:"form-control",value:this.state.image})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),t}(n.Component)),K=(a(101),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"auth"},l.a.createElement("h2",null,"Log In"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{className:"form-control",id:"exampleFormControlInput1",type:"email",name:"email",onChange:this.props.handleInput})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{className:"form-control",id:"",type:"password",name:"password",onChange:this.props.handleInput})),l.a.createElement("input",{className:"btn btn-info m-3",value:"Submit",type:"submit",onClick:this.props.handleLogIn})))}}]),t}(n.Component)),Q=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"auth"},l.a.createElement("h2",null,"Sign Up"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{className:"form-control",id:"exampleFormControlInput1",type:"email",name:"email",onChange:this.props.handleInput})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{className:"form-control",id:"exampleFormControlInput1",type:"password",name:"password",onChange:this.props.handleInput})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Username"),l.a.createElement("input",{className:"form-control",id:"",type:"username",name:"username",onChange:this.props.handleInput})),l.a.createElement("input",{class:"btn btn-info m-3",value:"Submit",type:"submit",onClick:this.props.handleSignUp})))}}]),t}(n.Component),V=a(116),X=a(117),Y=a(118),Z=a(119),ee=a(120),te=a(121),ae=a(122),ne=a(127),le=a(123),re=a(124),ie=a(125),se=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.state={isOpen:!1,email:"",password:"",username:"",userDetails:void 0,isLoggedIn:!1},a.handleInput=a.handleInput.bind(Object(d.a)(Object(d.a)(a))),a.handleSignUp=a.handleSignUp.bind(Object(d.a)(Object(d.a)(a))),a.handleLogOut=a.handleLogOut.bind(Object(d.a)(Object(d.a)(a))),a.handleLogIn=a.handleLogIn.bind(Object(d.a)(Object(d.a)(a))),a.getUserData=a.getUserData.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"getUserData",value:function(){var e=this;S.a.get(w+"/users/"+localStorage.id).then(function(t){e.setState({userDetails:t.data})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){localStorage.token?(this.setState({isLoggedIn:!0}),this.getUserData()):this.setState({isLoggedIn:!1})}},{key:"handleInput",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"handleSignUp",value:function(e){var t=this;console.log("signup"),e.preventDefault(),S.a.post(w+"/users/signup",{email:this.state.email,password:this.state.password,username:this.state.username}).then(function(e){localStorage.id=e.data.id,localStorage.token=e.data.token,t.setState({isLoggedIn:!0}),t.getUserData(),t.props.history.push("/")}).catch(function(e){return console.log(e)})}},{key:"handleLogOut",value:function(){this.setState({email:"",password:"",isLoggedIn:!1}),this.setState({userData:void 0}),localStorage.clear(),this.props.history.push("/users/login")}},{key:"handleLogIn",value:function(e){var t=this;e.preventDefault(),S.a.post(w+"/users/login",{email:this.state.email,password:this.state.password}).then(function(e){localStorage.id=e.data.id,localStorage.token=e.data.token,t.setState({isLoggedIn:!0}),t.getUserData(),t.props.history.push("/")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(V.a,{color:"light",light:!0,expand:"md"},l.a.createElement(s.b,{to:"/"},l.a.createElement(X.a,{id:"app-title"},"Couch Bum")),l.a.createElement(Y.a,{onClick:this.toggle}),l.a.createElement(Z.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(ee.a,{className:"ml-auto",navbar:!0},!0===this.state.isLoggedIn&&l.a.createElement(te.a,null,l.a.createElement(s.b,{to:"/"},l.a.createElement(ae.a,null,"Home"))),!0===this.state.isLoggedIn&&l.a.createElement(te.a,null,l.a.createElement(s.b,{to:"/Listings"},l.a.createElement(ae.a,null,"Listings"))),!0===this.state.isLoggedIn&&l.a.createElement(te.a,null,l.a.createElement(s.b,{to:"/Travelers"},l.a.createElement(ae.a,null,"Travelers"))),!0===this.state.isLoggedIn&&l.a.createElement(ne.a,{nav:!0,inNavbar:!0},l.a.createElement(le.a,{nav:!0,caret:!0},"My Info"),l.a.createElement(re.a,{right:!0},l.a.createElement(s.b,{to:"/mySkills"},l.a.createElement(ie.a,null,"Skills")),l.a.createElement(s.b,{to:"/myListings"},l.a.createElement(ie.a,null,"Listings")),l.a.createElement(ie.a,{divider:!0}),l.a.createElement(s.b,{to:"/myInfo"},l.a.createElement(ie.a,null,"Profile")))),!1===this.state.isLoggedIn&&l.a.createElement(te.a,null,l.a.createElement(s.b,{to:"/users/signup"},l.a.createElement(ae.a,null,"Signup"))),!1===this.state.isLoggedIn&&l.a.createElement(te.a,null,l.a.createElement(s.b,{to:"/users/login"},l.a.createElement(ae.a,null,"Login"))),this.state.userDetails&&!0===this.state.isLoggedIn&&l.a.createElement(te.a,null,l.a.createElement(ae.a,null,"Welcome, ",this.state.userDetails.username)),!0===this.state.isLoggedIn&&l.a.createElement(te.a,null,l.a.createElement(s.b,{to:"/users/login",onClick:this.handleLogOut},l.a.createElement(ae.a,null,"Logout")))))),l.a.createElement("main",null,l.a.createElement(k.c,null,l.a.createElement(k.a,{path:"/",exact:!0,render:function(t){return l.a.createElement(y,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn}))}}),l.a.createElement(k.a,{path:"/Listings",exact:!0,render:function(t){return l.a.createElement(N,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn}))}}),l.a.createElement(k.a,{path:"/Travelers",exact:!0,render:function(t){return l.a.createElement(J,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn}))}}),l.a.createElement(k.a,{path:"/Listing/:id",exact:!0,render:function(t){return l.a.createElement(q,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn}))}}),l.a.createElement(k.a,{path:"/Traveler/:id",exact:!0,render:function(t){return l.a.createElement(R,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn}))}}),l.a.createElement(k.a,{path:"/users/signup",render:function(t){return l.a.createElement(Q,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn,handleInput:e.handleInput,handleSignUp:e.handleSignUp}))}}),l.a.createElement(k.a,{path:"/users/login",render:function(t){return l.a.createElement(K,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn,handleInput:e.handleInput,handleLogIn:e.handleLogIn}))}}),l.a.createElement(k.a,{path:"/mySkills",render:function(t){return l.a.createElement(_,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn}))}}),l.a.createElement(k.a,{path:"/myListings",render:function(t){return l.a.createElement(H,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn}))}}),l.a.createElement(k.a,{path:"/myInfo",render:function(t){return l.a.createElement($,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn}))}}),l.a.createElement(k.a,{path:"/editProfile",render:function(t){return l.a.createElement(G,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn}))}}),l.a.createElement(k.a,{path:"/removeSkillFromUser/:id",render:function(e){return l.a.createElement(ce,e)}}))))}}]),t}(n.Component),ce=function(e){return console.log("hit"),S.a.put(w+"/users/removeSkillFromUser/"+localStorage.id+"/skill/"+e.match.params.id).then(function(t){e.history.push("/mySkills")}).catch(function(e){console.log(e)}),l.a.createElement("div",null)},oe=Object(k.e)(se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(103);i.a.render(l.a.createElement(s.a,null,l.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t,a){e.exports=a.p+"static/media/couchbum1.0ec388bc.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/couchbum2.82e74585.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/couchbum3.2743d32b.jpg"},59:function(e,t,a){e.exports=a(104)},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},99:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.5999adc1.chunk.js.map