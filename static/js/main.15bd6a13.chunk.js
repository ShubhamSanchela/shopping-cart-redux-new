(this["webpackJsonpshopping-cart-redux-new"]=this["webpackJsonpshopping-cart-redux-new"]||[]).push([[0],{26:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},42:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),r=c(18),o=c.n(r),s=(c(35),c(3)),n=c(25),l=c(5),d=(c(36),c(11)),u=c(4),h=(c(37),c(6)),j="ADD_TO_CART",b="ADJUST_ITEM_QTY",p="REMOVE_FROM_CART",m="LOAD_CURRENT_ITEM",f=function(e){return{type:j,payload:{id:e}}},g=function(e){return{type:p,payload:{id:e}}},O=function(e,t){return{type:b,payload:{id:e,qty:t}}},x=c(0);var y=Object(h.b)((function(e){return console.log(e),{currentItem:e.shop.currentItem}}),(function(e){return{addToCart:function(t){return e(f(t))}}}))((function(e){var t=e.currentItem,c=e.addToCart;return console.log(t),Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{className:"item-img",src:t.image,alt:t.title}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"title",children:t.title}),Object(x.jsx)("p",{className:"description",children:t.description}),Object(x.jsxs)("p",{className:"price",children:["$ ",t.price]}),Object(x.jsx)("button",{className:"product-btn",onClick:function(){return c(t.id)},children:"Add To Cart"})]})]})})),v=(c(42),c(12)),w=c.n(v);var C=Object(h.b)((function(e){return{cart:e.cart.cart}}))((function(e){var t=e.cart,c=(e.setAuth,Object(a.useState)(0)),i=Object(l.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(),n=Object(l.a)(s,2),u=n[0],h=n[1];return Object(a.useEffect)((function(){var e=0;t&&t.forEach((function(t){e+=t.qty})),o(e);var c=JSON.parse(localStorage.getItem("loginDetails")||"[]").map((function(e){return e.email}));console.log(c);var a=JSON.parse(localStorage.getItem("UsersLogin")||"[]").map((function(e){return e.email}));console.log(a);for(var i=0;i<c.length;i++)for(var r=0;r<a.length;r++)if(c[i].loginto===a[r].regito){var s=c[i];h(s),console.log(s,"4444444444444444")}}),[t,r]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{children:Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("a",{class:"navbar-brand",href:"/products",children:"E-Cart Shopping"}),Object(x.jsx)("a",{class:"navbar-brand",href:"/products",children:u?Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{class:"fas fa-user-circle"})," ",u]}):null}),Object(x.jsx)("div",{class:"d-flex",children:Object(x.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(x.jsx)("li",{className:"nav-item ",children:w.a.get("user")?Object(x.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/cart",children:Object(x.jsxs)(d.c,{className:"nav-link ",to:"/cart",children:[Object(x.jsx)("i",{class:"fab fa-opencart"})," ",Object(x.jsx)("span",{className:"cart-count",children:r})]})}):null}),w.a.get("user")?Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-products nav-link active","aria-current":"page",href:"/login",onClick:function(){w.a.remove("user"),localStorage.removeItem("loginDetails")},children:Object(x.jsx)("button",{className:"btn btn-danger",children:"Logout"})})}):null]})})]})})})})}));c(26);var N=Object(h.b)(null,(function(e){return{adjustQty:function(t,c){return e(O(t,c))},removeFromCart:function(t){return e(g(t))}}}))((function(e){var t=e.item,c=e.adjustQty,i=e.removeFromCart,r=Object(a.useState)(t.qty),o=Object(l.a)(r,2),s=o[0],n=o[1];return Object(x.jsx)("div",{children:Object(x.jsx)("div",{class:"container mt-5 mb-5",children:Object(x.jsx)("div",{class:"d-flex justify-content-center row",children:Object(x.jsxs)("div",{class:"col-md-8",children:[Object(x.jsx)("div",{class:"p-2"}),Object(x.jsxs)("div",{class:"d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded",children:[Object(x.jsx)("div",{class:"mr-1",children:Object(x.jsx)("img",{class:"rounded",src:t.image,alt:t.title,width:"120px"})}),Object(x.jsx)("div",{class:"d-flex flex-column align-items-center product-details",children:Object(x.jsx)("span",{class:"font-weight-bold",children:Object(x.jsx)("h5",{children:t.title})})}),Object(x.jsx)("div",{class:"d-flex flex-row align-items-center qty",children:Object(x.jsx)("h5",{class:"text-grey mt-1 mr-1 ml-1",children:Object(x.jsx)("input",{min:"1",type:"number",id:"qty",name:"qty",value:s,onChange:function(e){n(e.target.value),c(t.id,e.target.value)},style:{width:"60px"}})})}),Object(x.jsx)("div",{children:Object(x.jsxs)("h5",{class:"text-grey",children:["$",t.price]})}),Object(x.jsx)("div",{class:"d-flex align-items-center",style:{cursor:"pointer"},onClick:function(){return i(t.id)},children:Object(x.jsx)("i",{class:"fa fa-trash mb-1 text-danger"})})]})]})})})})})),k=c(27),E=c.n(k);var S=Object(h.b)((function(e){return{cart:e.cart.cart}}),(function(e){return{adjustQty:function(t,c){return e(O(t,c))},removeFromCart:function(t){return e(g(t))}}}))((function(e){var t=e.cart,c=e.removeFromCart;console.log(t);var i=Object(a.useState)(t),r=Object(l.a)(i,2),o=(r[0],r[1]),s=Object(a.useState)(0),n=Object(l.a)(s,2),d=n[0],u=n[1],h=Object(a.useState)(0),j=Object(l.a)(h,2),b=j[0],p=j[1];return Object(a.useEffect)((function(){var e=0,c=0;t.forEach((function(t){e+=t.qty,c+=t.qty*t.price})),p(e),u(c)}),[t,d,b,u,p]),Object(x.jsxs)("div",{children:[Object(x.jsxs)("h1",{children:[" ",Object(x.jsx)("b",{children:"Checkout Summary"})," "]}),t.length?Object(x.jsxs)("div",{children:[t.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{className:"shoppingcart-img",width:"200px",src:e.image,alt:e.title}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"title",children:e.title}),Object(x.jsxs)("p",{children:["$ ",e.price]})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("button",{className:"remove-cart",onClick:function(){return c(e.id)},children:[Object(x.jsx)("i",{class:"fas fa-trash"}),"Delete"]})})]})})),Object(x.jsx)(E.a,{stripeKey:"pk_test_51Ih9ajSF5EDKEgjxD3uc0PbLJmc8qScCSNNf8RDH1kPCHsj8QbLHlHA18NJsy7rRgnnbPglGD0qfl0ALiuwH2IeK00wBK7X0BR",label:"Pay Now",name:"E-Cart Shopping",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/QaG.svg",description:"Your total is ".concat(d),panelLabel:"Pay Now",token:function(e,t){console.log({token:e,addresses:t}),alert("Dummy Payment Success!"),o({cart:""}),window.location.reload()}}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"shopping-cart__checkout",children:[Object(x.jsxs)("span",{className:"total",children:["TOTAL: (",b," items)"]}),Object(x.jsxs)("span",{children:["$",d]})]})})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"You Dont have any products!"}),Object(x.jsx)("a",{class:"navbar-brand",href:"/products",children:"Add Some Products"})]})]})}));var D=Object(h.b)((function(e){return{cart:e.cart.cart}}))((function(e){var t=e.cart,c=Object(a.useState)(0),i=Object(l.a)(c,2),r=i[0],o=i[1],s=Object(a.useState)(0),n=Object(l.a)(s,2),u=n[0],h=n[1];return console.log("hhhhhhhhhhhhhhhhhhh",t),Object(a.useEffect)((function(){var e=0,c=0;t.forEach((function(t){e+=t.qty,c+=t.qty*t.price})),h(e),o(c)}),[t,r,u,o,h]),Object(x.jsxs)("div",{children:[Object(x.jsxs)("h1",{children:[" ",Object(x.jsx)("b",{children:"Cart Summary"})," "]}),t.length?Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"shopping-cart",children:t.map((function(e){return Object(x.jsx)(N,{item:e},e.id)}))}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"shopping-cart__checkout",children:[Object(x.jsxs)("span",{className:"total",children:["TOTAL: (",u," items)"]}),Object(x.jsxs)("span",{children:["$",r]})]}),Object(x.jsx)(d.c,{className:"nav-link ",to:"/checkout",children:Object(x.jsx)("button",{className:"checkout-btn",children:"Procced to Checkout"})})]})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"cart-empty",children:"Your Cart is Empty! Please Add Products"}),Object(x.jsx)("a",{class:"navbar-brand",href:"/products",children:"Add Some Products"})]})]})})),T=(c(45),c(46),Object(h.b)((function(e){return{cart:e.cart.cart}}),(function(e){return{addToCart:function(t){return e(f(t))},loadCurrentItem:function(t){return e(function(e){return{type:m,payload:e}}(t))}}}))((function(e){var t=e.product,c=e.addToCart,i=e.loadCurrentItem,r=e.cart;e.onLoad;return console.log(r),console.log(t),Object(a.useEffect)((function(){}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{className:"product-img",src:t.image,alt:t.title}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"title",children:t.title}),Object(x.jsxs)("p",{className:"price",children:["$ ",t.price]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(d.b,{to:"/product/".concat(t.id),children:Object(x.jsx)("button",{onClick:function(){return i(t)},className:"product-btn",children:"View Item"})}),Object(x.jsx)("button",{className:"product-btn",onClick:function(){return c(t.id)},children:"Add To Cart"})]})]})}))),L=Object(h.b)((function(e){return{products:e.shop.products}}))((function(e){var t=e.products;return Object(x.jsx)("div",{className:"products-container",children:t.map((function(e){return Object(x.jsx)(T,{product:e},e.id)}))})})),q=c(15),M=i.a.createContext();var H=function(){var e=Object(a.useContext)(M);console.log(e);var t=Object(u.g)(),c=Object(a.useState)({email:"",password:""}),i=Object(l.a)(c,2),r=i[0],o=i[1],n=function(e){o((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(q.a)({},e.target.name,e.target.value))}))},d=Object(a.useState)(!1),h=Object(l.a)(d,2);return h[0],h[1],Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container vh-100",children:Object(x.jsx)("div",{className:"row justify-content-center h-100",children:Object(x.jsxs)("div",{className:"card w-25 my-auto shadow",children:[Object(x.jsx)("div",{className:"card-header text-center ",children:Object(x.jsx)("h3",{children:"Login Form"})}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsxs)("form",{onSubmit:function(c,a){c.preventDefault();var i=r.email,s=r.password;if(localStorage.getItem("UsersLogin")){var n=JSON.parse(localStorage.getItem("UsersLogin")).filter((function(e){return i===e.email&&s===e.password}));n.length?(console.log("Login successful"),localStorage.setItem("loginDetails",JSON.stringify(n)),w.a.set("user",{data:a}),e.setAuth(!0),o({email:"",password:""}),t.push("/products"),window.location.reload(!0)):(console.log("Wrong credentials"),alert("Wrong Credintials"),o({email:"",password:""}))}},children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Email"}),Object(x.jsx)("input",{type:"email",name:"email",value:r.email,onChange:n,className:"form-control"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",value:r.password,onChange:n,className:"form-control"})]}),Object(x.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary mt-4"}),Object(x.jsxs)("p",{children:[" ","Register",Object(x.jsx)("a",{href:"/register",children:" Now? "})]})]})}),Object(x.jsx)("div",{className:"card-footer",children:Object(x.jsx)("small",{children:"\xa9 E-Commerce"})})]})})})})};console.log(D);var B=function(){var e=Object(u.g)(),t=Object(a.useState)({email:"",password:""}),c=Object(l.a)(t,2),i=c[0],r=c[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("UsersLogin")||"[]").map((function(e){return e.email}));console.log(e);var t=i.email;if(!(e.indexOf(t)<0))return alert("This email is already exists : Please try with different email"),void r({email:"",password:""})}));var o=function(e){r((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(q.a)({},e.target.name,e.target.value))}))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container vh-100",children:Object(x.jsx)("div",{className:"row justify-content-center h-100",children:Object(x.jsxs)("div",{className:"card w-25 my-auto shadow",children:[Object(x.jsx)("div",{className:"card-header text-center ",children:Object(x.jsx)("h3",{children:"Registration Form"})}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsxs)("form",{action:"",onSubmit:function(t){var c="_"+Math.random().toString(36).substr(2,9);t.preventDefault();var a=localStorage.UsersLogin?JSON.parse(localStorage.UsersLogin):[],o={email:i.email,password:i.password,id:c,cart:D};a.push(o),console.log(o.id),localStorage.setItem("UsersLogin",JSON.stringify(a)),console.log(c),console.log("Registration Successfull!!",a),r({email:"",password:""}),e.push("/login")},children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Email"}),Object(x.jsx)("input",{type:"email",name:"email",id:"email",value:i.email,onChange:o,className:"form-control",required:!0})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",id:"password",value:i.password,onChange:o,className:"form-control",required:!0})]}),Object(x.jsx)("input",{type:"submit",value:"SignUp",className:"btn btn-primary mt-4"}),Object(x.jsxs)("p",{children:["Already have account ?",Object(x.jsx)("a",{href:"/login",children:" Sign in"})]})]})}),Object(x.jsx)("div",{className:"card-footer",children:Object(x.jsx)("small",{children:"\xa9 E-Commerce"})})]})})})})};c(47);var J=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("footer",{children:Object(x.jsx)("div",{class:"copy-right",children:Object(x.jsxs)("a",{children:["\xa92021 All right reserved - ",Object(x.jsx)("span",{children:"E-Cart Shopping"})]})})})})},A=["auth","component"],I=["auth","component"];var Q=function(e){var t=e.currentItem,c=Object(a.useContext)(M);return Object(x.jsxs)(u.d,{children:[Object(x.jsx)(W,{exact:!0,path:"/login",auth:c.auth,component:H}),Object(x.jsx)(G,{path:"/products",auth:c.auth,component:L}),Object(x.jsx)(u.b,{path:"/register",auth:c.auth,component:B}),t?Object(x.jsx)(u.a,{to:"/products"}):Object(x.jsx)(u.b,{exact:!0,path:"/product/:id",component:y}),Object(x.jsx)(u.b,{exact:!0,path:"/cart",component:D}),Object(x.jsx)(u.b,{exact:!0,path:"/checkout",component:S}),Object(x.jsx)(u.b,{exact:!0,path:"/",component:H})]})},G=function(e){var t=e.auth,c=e.component,a=Object(n.a)(e,A);return Object(x.jsx)(u.b,Object(s.a)(Object(s.a)({},a),{},{render:function(){return t?Object(x.jsx)(c,{}):Object(x.jsx)(u.a,{to:"/login"})}}))},W=function(e){var t=e.auth,c=e.component,a=Object(n.a)(e,I);return Object(x.jsx)(u.b,Object(s.a)(Object(s.a)({},a),{},{render:function(){return t?Object(x.jsx)(u.a,{to:"/products"}):Object(x.jsx)(c,{})}}))},F=Object(h.b)((function(e){return{currentItem:e.shop.currentItem}}))((function(e){e.currentItem;var t=Object(a.useState)(!1),c=Object(l.a)(t,2),i=c[0],r=c[1];Object(a.useEffect)((function(){o()}));var o=function(){w.a.get("user")&&r(!0)};return Object(a.useContext)(M),Object(x.jsx)(M.Provider,{value:{auth:i,setAuth:r},children:Object(x.jsx)(d.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(C,{auth:r}),Object(x.jsx)(Q,{}),Object(x.jsx)(J,{})]})})})})),P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),a(e),i(e),r(e),o(e)}))},_=c(13),R={products:[{id:1,title:"This is the COOLEST Cube Ever",description:"This cube will keep you busy the entire day and it is very fun to play with",price:15,image:"https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}],currentItem:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(s.a)(Object(s.a)({},e),{},{currentItem:t.payload});default:return e}},$=c(30),K={products:[{id:1,title:"This is the COOLEST Cube Ever",description:"This cube will keep you busy the entire day and it is very fun to play with",price:15,image:"https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}],cart:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var c=e.products.find((function(e){return e.id===t.payload.id})),a=e.cart.find((function(e){return e.id===t.payload.id}));return Object(s.a)(Object(s.a)({},e),{},{cart:a?e.cart.map((function(e){return e.id===t.payload.id?Object(s.a)(Object(s.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object($.a)(e.cart),[Object(s.a)(Object(s.a)({},c),{},{qty:1})])});case p:return Object(s.a)(Object(s.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case b:return Object(s.a)(Object(s.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(s.a)(Object(s.a)({},e),{},{qty:+t.payload.qty}):e}))});default:return e}},V=c(29),X=c(28),z={key:"root",storage:c.n(X).a,whitelist:["cart"]},Z=Object(_.a)({shop:U,cart:Object(V.a)(z,Y)});var ee=Object(_.b)(Z,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}());console.log("store.getState()",ee.getState()),ee.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(c){console.warn(c)}}(ee.getState())}));var te=ee;console.log(te),o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(h.a,{store:te,children:Object(x.jsx)(F,{})})}),document.getElementById("root")),P()}},[[50,1,2]]]);
//# sourceMappingURL=main.15bd6a13.chunk.js.map