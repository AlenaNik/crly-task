webpackJsonp([1],{"2ivw":function(t,e){},D8Jy:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("dLd/"),r=n.n(s),o={name:"Navbar",data:function(){return{image:r.a}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar"},[e("nav",[e("router-link",{attrs:{to:{name:"Index"}}},[e("img",{attrs:{src:this.image,alt:""}})]),this._v(" "),e("router-link",{attrs:{to:{name:"CustomerTransactions"}}},[e("p",[this._v("transactions list.")])])],1)])},staticRenderFns:[]};var u={name:"App",components:{Navbar:n("VU/8")(o,i,!1,function(t){n("2ivw")},null,null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")(u,d,!1,function(t){n("n3kJ")},null,null).exports,l=n("/ocq"),v=n("mtWM"),f=n.n(v),p=n("Xxa5"),_=n.n(p),m=n("exGp"),h=n.n(m),y={name:"UpdateInfo",data:function(){return{userinfo:null,feedback:null,newjson:"please, update any field to see the result"}},created:function(){var t=this.$route.params.id;this.getData(t)},methods:{getData:function(t){var e=this;return h()(_.a.mark(function n(){var a;return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get("/api/addresses/"+t);case 2:a=n.sent,e.userinfo=a.data;case 4:case"end":return n.stop()}},n,e)}))()},UpdateData:function(t){var e=this;return h()(_.a.mark(function n(){var a;return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:(a={country:e.userinfo.countryName,locality:e.userinfo.locality,postalCode:e.userinfo.postalCode,streetAddress:e.userinfo.streetAddress}).country&&a.locality&&a.postalCode&&a.streetAddress?f.a.put("/api/addresses/"+t,a).then(function(){e.newjson=a,e.feedback=null}).catch(function(t){console.log(t),this.feedback="you must provide a valid address for each field"}):e.feedback="you cannot leave a field empty 🤭";case 2:case"end":return n.stop()}},n,e)}))()}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userinfo?n("div",{staticClass:"edit-address-container"},[n("h2",[t._v("\n    edit address info for "+t._s(t.userinfo.firstName)+" "+t._s(t.userinfo.lastName)+"\n  ")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.UpdateData(t.userinfo.id)}}},[n("div",[n("label",{attrs:{for:""}},[t._v(" country:  ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userinfo.countryName,expression:"userinfo.countryName"}],attrs:{type:"text",name:"country"},domProps:{value:t.userinfo.countryName},on:{input:function(e){e.target.composing||t.$set(t.userinfo,"countryName",e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:""}},[t._v(" locality:  ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userinfo.locality,expression:"userinfo.locality"}],attrs:{type:"text",name:"locality"},domProps:{value:t.userinfo.locality},on:{input:function(e){e.target.composing||t.$set(t.userinfo,"locality",e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:""}},[t._v(" postal:  ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userinfo.postalCode,expression:"userinfo.postalCode"}],attrs:{type:"text",name:"postalCode"},domProps:{value:t.userinfo.postalCode},on:{input:function(e){e.target.composing||t.$set(t.userinfo,"postalCode",e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:""}},[t._v(" street: ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userinfo.streetAddress,expression:"userinfo.streetAddress"}],attrs:{type:"text",name:"street"},domProps:{value:t.userinfo.streetAddress},on:{input:function(e){e.target.composing||t.$set(t.userinfo,"streetAddress",e.target.value)}}})]),t._v(" "),t.feedback?n("p",[t._v(" "+t._s(t.feedback))]):t._e(),t._v(" "),n("button",[t._v(" submit the change ")])]),t._v(" "),n("div",{staticClass:"test-json"},[n("h2",[t._v(" sample new json of the user  ")]),t._v("\n    "+t._s(t.newjson)+"\n  ")]),t._v(" "),n("div",{staticClass:"test-json"},[n("h2",[t._v(" sample json of the user before update  ")]),t._v("\n    "+t._s(t.userinfo)+"\n  ")])]):n("div",[n("h2",[t._v(" Loading...  Please, wait 🐛 ")])])},staticRenderFns:[]};var b=n("VU/8")(y,g,!1,function(t){n("ywtd")},null,null).exports,x={name:"Index",data:function(){return{users:[]}},created:function(){var t=this;f.a.get("/api/addresses").then(function(e){t.users=e.data}).catch(function(t){console.error(t)})}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("user address & info. ℹ️ ")]),t._v(" "),t._l(t.users,function(e){return n("div",{staticClass:"index"},t._l(e.addresses,function(e){return n("ul",{key:e.id,staticClass:"card"},[n("li",{staticClass:"card-content"},[t._v("\n               name:  "+t._s(e.firstName)+"\n              ")]),t._v(" "),n("li",{staticClass:"card-content"},[t._v("\n               surname: "+t._s(e.lastName)+"\n              ")]),t._v(" "),n("li",{staticClass:"card-content"},[t._v("\n               address: "+t._s(e.countryName)+" 🇩🇪\n                "+t._s(e.postalCode)+"\n                "+t._s(e.region)+"\n                "+t._s(e.locality)+"\n                "+t._s(e.streetAddress)+"\n              ")]),t._v(" "),n("router-link",{attrs:{to:{name:"UpdateInfo",params:{id:e.id}}}},[n("button",[t._v(" edit address ")])])],1)}),0)})],2)},staticRenderFns:[]};var w=n("VU/8")(x,C,!1,function(t){n("OJSR")},null,null).exports,N={name:"CustomerTransactions",data:function(){return{list:[]}},created:function(){var t=this;f.a.get("/api/transactions").then(function(e){t.list=e.data}).catch(function(t){console.error(t)})}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("payment info ℹ️ ")]),t._v(" "),t._l(t.list,function(e){return n("div",{staticClass:"index"},[n("p",[t._v("payment methods: ")]),t._v(" "),t._l(e.paymentMethods,function(e){return n("div",[n("p",[t._v(t._s(e.cardType))]),t._v(" "),n("p",[t._v(t._s(e.googleTransactionId))]),t._v(" "),n("p",[t._v(t._s(e.expirationMonth))]),t._v(" "),n("p",[t._v(t._s(e.expirationYear))]),t._v(" "),n("img",{attrs:{src:e.imageUrl,alt:""}}),t._v(" "),t._l(e.subscriptions,function(e){return n("div",t._l(e.transactions,function(e){return n("div",{staticClass:"bottom-section"},[n("h2",[t._v("transaction details ℹ️ ")]),t._v(" "),n("p",[t._v("amount: "+t._s(e.amount))]),t._v(" "),n("p",[t._v("globa id: "+t._s(e.androidPayCard.globalId))]),t._v(" "),n("p",[t._v("google transaction id: "+t._s(e.androidPayCard.googleTransactionId))]),t._v(" "),n("img",{attrs:{src:e.androidPayCard.imageUrl,alt:""}})])}),0)})],2)})],2)})],2)},staticRenderFns:[]};var U=n("VU/8")(N,k,!1,function(t){n("D8Jy")},null,null).exports;a.a.use(l.a);var A=new l.a({routes:[{path:"/",name:"Index",component:w},{path:"/transactions",name:"CustomerTransactions",component:U},{path:"/edit-address/:id",name:"UpdateInfo",component:b}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:A,components:{App:c},template:"<App/>"})},OJSR:function(t,e){},"dLd/":function(t,e,n){t.exports=n.p+"static/img/logo.e809bd9.png"},n3kJ:function(t,e){},ywtd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7bbd8a18dfe4abd7de38.js.map