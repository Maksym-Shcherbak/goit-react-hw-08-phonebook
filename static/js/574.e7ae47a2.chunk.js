"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[574],{9574:function(t,e,n){n.r(e),n.d(e,{default:function(){return K}});var a=n(9439),r="Button_addButton__rm7rh",c="Button_btnText__ekHnn",o=n(184),s=function(t){var e=t.setModal;return(0,o.jsxs)("button",{className:r,type:"button",onClick:function(){return e(!0)},children:[(0,o.jsx)("span",{className:c,children:"Add contact "}),(0,o.jsx)("span",{children:"+"})]})},i=n(9434),l=n(6916),u=function(t){return t.contacts},d=function(t){return t.filter},m=(0,l.P1)([u,d],(function(t,e){var n=t.contacts;return e.enteredName?n.filter((function(t){return t.name.toLowerCase().includes(e.enteredName.toLowerCase())})):n})),_=n(3634),f="ContactForm_contactForm__y0Rca",h="ContactForm_contactForm__input__k3i+4",b="ContactForm_contactForm__button__C3X5B",p=function(t){var e=t.setModal,n=(0,i.I0)(),a=(0,i.v9)(u).contacts,r=function(t,e){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))};return(0,o.jsxs)("form",{className:f,onSubmit:function(t){t.preventDefault();var c=t.currentTarget,o=c.elements,s=o.name,i=o.number;r(s.value,a)?alert("".concat(s.value," is already in contacts.")):(n((0,_.uK)({name:s.value,number:i.value})),e(!1),c.reset())},children:[(0,o.jsx)("label",{htmlFor:"name",children:"Name"}),(0,o.jsx)("input",{type:"text",name:"name",className:h,id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+((['\\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,o.jsx)("label",{htmlFor:"number",children:"Number"}),(0,o.jsx)("input",{type:"tel",name:"number",className:h,id:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0}),(0,o.jsx)("button",{type:"submit",className:b,children:"Add contact"})]})},x="ContactList_contactList__UFVCg",j="ContactList_wrap__paQKq",v={contactList__item:"ContactItem_contactList__item__BuwOu",contactName:"ContactItem_contactName__ZAMAK",contactList__button:"ContactItem_contactList__button__Jo+tx"},N=function(t){var e=t.id,n=t.name,a=t.number,r=(0,i.I0)();return(0,o.jsxs)("li",{id:e,className:v.contactList__item,children:[(0,o.jsx)("img",{className:v.avatar,src:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png",alt:"User avatar",width:"36"}),(0,o.jsxs)("span",{className:v.contactName,children:[n,": ",(0,o.jsx)("span",{children:a})]}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{type:"button",className:v.contactList__button,onClick:function(){return r((0,_.GK)(e))},children:"Delete"})]})},C=n(3920),w=function(){return(0,o.jsx)(C.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})},y=function(t){var e=t.filteredContacts,n=t.isLoading,a=t.error;return(0,o.jsxs)("div",{className:j,children:[(0,o.jsx)("h2",{className:"contactsTitle",children:"Contacts"}),n&&(0,o.jsx)(w,{}),a&&(0,o.jsxs)("p",{children:["Something went wrong, ",a]}),(0,o.jsx)("ul",{className:x,children:e&&!n&&e.map((function(t){var e=t.id,n=t.name,a=t.number;return(0,o.jsx)(N,{id:e,name:n,number:a},e)}))})]})},L="Modal_overlay__r63M6",g="Modal_modalContent__axM59",k=n(2791),F=function(t){var e=t.children,n=t.setModal,a=(0,k.useCallback)((function(t){"Escape"===t.code&&n(!1)}),[n]);(0,k.useEffect)((function(){return window.addEventListener("keydown",a),document.body.style.top="-".concat(window.scrollY,"px"),function(){var t=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(t||"0"))}}),[a]);return(0,o.jsx)("div",{className:L,onClick:function(t){var e=t.target;t.currentTarget===e&&n(!1)},children:(0,o.jsx)("div",{className:g,children:e})})},M="SearchFilter_filterLabel__8nzbS",I="SearchFilter_filterInput__QJcWn",S="SearchFilter_searchContact__Kmj8O",A="SearchFilter_phonebookTitle__V5A+O",T=n(4808),B=function(){var t=(0,i.I0)(),e=(0,i.v9)(d).enteredName;return(0,o.jsxs)("div",{className:S,children:[(0,o.jsx)("h1",{className:A,children:"Phonebook"}),(0,o.jsx)("label",{htmlFor:"filter",className:M,children:"Find contacts by name"}),(0,o.jsx)("input",{type:"text",name:"filter",className:I,id:"filter",value:e,onChange:function(e){return t((0,T.T)(e.target.value))}})]})},K=function(){var t=(0,k.useState)(),e=(0,a.Z)(t,2),n=e[0],r=e[1],c=(0,i.I0)();(0,k.useEffect)((function(){c((0,_.yF)())}),[c]);var l=(0,i.v9)(m),d=(0,i.v9)(u),f=d.isLoading,h=d.error;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(B,{}),(0,o.jsx)(s,{setModal:r}),(0,o.jsx)(y,{filteredContacts:l,isLoading:f,error:h}),n&&(0,o.jsx)(F,{setModal:r,children:(0,o.jsx)(p,{setModal:r})})]})}}}]);
//# sourceMappingURL=574.e7ae47a2.chunk.js.map