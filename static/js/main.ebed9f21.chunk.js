(this["webpackJsonpgoit-react-hw-07-phonebook-redux-backend"]=this["webpackJsonpgoit-react-hw-07-phonebook-redux-backend"]||[]).push([[0],{14:function(t,e,n){t.exports={appear:"Alert_appear__3wcmi",appearActive:"Alert_appearActive__3QDpf",alertWrapper:"Alert_alertWrapper__ZX0YE"}},18:function(t,e,n){t.exports={sectionTitle:"App_sectionTitle__1heH2",contactListTitle:"App_contactListTitle__3ZIKD",appear:"App_appear__1pUky",appearActive:"App_appearActive__VtLob"}},22:function(t,e,n){t.exports={contactList:"ContactList_contactList__2vDzu",enter:"ContactList_enter__1BXRf",enterActive:"ContactList_enterActive__3ufy0",exit:"ContactList_exit__FK9AI",exitActive:"ContactList_exitActive__1HDV-"}},34:function(t,e,n){t.exports={contactListItem:"ContactFormListItem_contactListItem__2nAvv"}},40:function(t,e,n){t.exports=n(67)},67:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),u=n(10),l=n(11),i=n(16),s=n(15),p=n(68),m=n(4),d=n(17),f=n.n(d),h=n(12),v="contacts/filter",C="contacts/duplicate",b="contacts/addContactRequest",y="contacts/addContactSuccess",g="contacts/addContactError",E="contact/removeContactRequest",_="contact/removeContactSuccess",A="contact/removeContactError",O="contacts/fetchContactsRequest",L="contacts/fetchContactsSuccess",j="contacts/fetchContactsError",F={filter:function(t){return{type:v,payload:{filter:t}}},duplicate:function(){return{type:C}},addContactRequest:function(){return{type:b}},addContactSuccess:function(t){return{type:y,payload:Object(h.a)({},t)}},addContactError:function(t){return{type:g,payload:{error:t}}},fetchContactRequest:function(){return{type:O}},fetchContactSuccess:function(t){return{type:L,payload:t}},fetchContactError:function(t){return{type:j,payload:{error:t}}},removeContactError:function(t){return{type:A,payload:{error:t}}},removeContactSuccess:function(t){return{type:_,payload:t}},removeContactRequest:function(){return{type:E}}},w="http://localhost:2000/",x={onAddContact:function(t){return function(e){e(F.addContactRequest()),f.a.post("".concat(w,"contacts"),t).then((function(t){e(F.addContactSuccess(t.data))})).catch((function(t){return e(F.addContactError(t))}))}},fetchContacts:function(){return function(t){t(F.fetchContactRequest()),f.a.get("".concat(w,"contacts")).then((function(e){var n=e.data;t(F.fetchContactSuccess(n))})).catch((function(e){t(F.fetchContactError(e))}))}},onRemoveContacts:function(t){return function(e){e(F.removeContactRequest()),f.a.delete("".concat(w,"contacts/").concat(t)).then((function(){e(F.removeContactSuccess(t))})).catch((function(t){e(F.removeContactError(t))}))}}},R=n(13),S=n(33),k=function(t){return t.contacts.filter},N=function(t){return t.contacts.items},q={getLoading:function(t){return t.contacts.loading},getFilter:k,getAlert:function(t){return t.contacts.alertSwitch},getFilteredContacts:Object(S.a)([N,k],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getContacts:N},D=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(R.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.duplicateFn()?(t.props.onAlert(),setTimeout((function(){t.props.onAlert()}),1500)):(t.props.onAddContact(Object(h.a)({},t.state)),t.setState({name:"",number:""}))},t.duplicateFn=function(){return t.props.contacts.some((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:"Name"},"Name",c.a.createElement("input",{type:"text",value:e,onChange:this.handleChange,name:"name"})),c.a.createElement("label",null,"Number:",c.a.createElement("input",{type:"text",value:n,onChange:this.handleChange,name:"number"})),c.a.createElement("button",{type:"submit"}," Add contact")))}}]),n}(a.Component),I={onAddContact:x.onAddContact,onAlert:F.duplicate},T=Object(m.b)((function(t){return{contacts:q.getContacts(t)}}),I)(D),W=n(69),B=n(34),H=n.n(B),J=function(t){var e=t.id,n=t.name,a=t.number,r=t.onRemove;return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{key:e,className:H.a.contactListItem},c.a.createElement("p",null," ",n," : "),c.a.createElement("p",null," ",a," "),c.a.createElement("button",{type:"button",onClick:r},"Delete")))},K=n(22),M=n.n(K),V={onRemoveContacts:x.onRemoveContacts},X=Object(m.b)((function(t){return{items:q.getContacts(t),contacts:q.getFilteredContacts(t)}}),V)((function(t){var e=t.contacts,n=t.onRemoveContacts;return c.a.createElement(c.a.Fragment,null,c.a.createElement(W.a,{component:"ul",className:M.a.contactList},e.map((function(t){var e=t.id,a=t.name,r=t.number;return c.a.createElement(p.a,{key:e,timeout:1e3,classNames:M.a,unmountOnExit:!0},c.a.createElement(J,{key:e,name:a,number:r,onRemove:function(){return n(e)}}))}))))})),Z={onChangeFilter:F.filter},z=Object(m.b)((function(t){return{value:q.getFilter(t)}}),Z)((function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",null,c.a.createElement("p",null,"Find contacts by name"),c.a.createElement("input",{type:"text",name:"filter",value:e,onChange:function(t){n(t.target.value)}})))})),G=n(18),P=n.n(G),Q=n(14),U=n.n(Q),Y=function(){return c.a.createElement("div",{className:U.a.alertWrapper},c.a.createElement("p",null,"Contact already exist !"))},$=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.alert,n=t.loading;return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement("h2",null,"LOADING ..."),e&&c.a.createElement(p.a,{classNames:U.a,in:!0,appear:!0,timeout:1500,unmountOnExit:!0},c.a.createElement(Y,{alert:e})),c.a.createElement(p.a,{classNames:P.a,in:!0,appear:!0,timeout:1500,unmountOnExit:!0},c.a.createElement("h1",{className:P.a.sectionTitle},"Phonebook")),c.a.createElement(T,null),c.a.createElement("h2",{className:P.a.contactListTitle},"Contacts"),c.a.createElement(z,null),c.a.createElement(X,null))}}]),n}(a.Component),tt={onFetchContacts:x.fetchContacts},et=Object(m.b)((function(t){return{alert:q.getAlert(t),loading:q.getLoading(t)}}),tt)($),nt=n(5),at=n(35),ct=n(36),rt=n(37),ot=Object(nt.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case y:return[].concat(Object(rt.a)(t),[a]);case L:return a;case _:return console.log(t),t.filter((function(t){return t.id!==a}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case v:return a.filter;default:return t}},alertSwitch:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=e.type;e.payload;switch(n){case C:return!t;default:return t}},loading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=e.type;e.payload;switch(n){case b:case O:case E:return!0;case y:case g:case L:case j:case _:case A:return!1;default:return t}},error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case g:case j:case A:return a;case b:case O:case E:return null;default:return t}}}),ut=Object(nt.combineReducers)({contacts:ot}),lt=[ct.a],it=Object(nt.createStore)(ut,Object(at.composeWithDevTools)(nt.applyMiddleware.apply(void 0,lt)));o.a.render(c.a.createElement(m.a,{store:it},c.a.createElement(et,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ebed9f21.chunk.js.map