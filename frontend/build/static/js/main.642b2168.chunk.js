(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,a){e.exports={container:"dropdown_container__2MuSb",label:"dropdown_label__33c0v",error:"dropdown_error__eEh7z",dropdown:"dropdown_dropdown__3ROtb",caret:"dropdown_caret__2dvhU",list:"dropdown_list__OM9Ft"}},14:function(e,t,a){e.exports={message:"message_message__2AbUU",success:"message_success__2Azm2",error:"message_error__3Rval"}},16:function(e,t,a){e.exports={container:"input_container__QAWrV",label:"input_label__359Us",error:"input_error__3S6Ie",input:"input_input__2PZYz"}},18:function(e,t,a){e.exports={packages:"packages_packages__1e7qv",package:"packages_package__28v2U"}},19:function(e,t,a){e.exports={id:"farm_id__2xbTZ"}},22:function(e,t,a){e.exports={container:"event_container__2nzHx",image:"event_image__3V92j"}},28:function(e,t,a){e.exports={card:"card_card__39fDa"}},30:function(e,t,a){e.exports={background:"ecoStore_background__39S5q",card:"ecoStore_card__3aEfE",events:"ecoStore_events__3Q4I0"}},32:function(e,t,a){e.exports={history:"history_history__fHQjv"}},36:function(e,t,a){e.exports=a(51)},41:function(e,t,a){},42:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),i=a.n(o);a(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(33),l=a(11),s=(a(42),a(3)),u=a(10),d=a(9),m=a(15),f=a(4),p=function(e){var t=e.type,a=e.name,n=e.value,r=e.checked;switch(t){case"checkbox":return Object(m.a)({},a,r?n:null);case"radio":return r?Object(m.a)({},a,n):null;case"submit":return{};default:return Object(m.a)({},a,n)}},g=function(e){var t=e.onSubmit,a=e.children;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(function(e){var t=e.querySelectorAll("input"),a={};return t.forEach((function(e){a=Object(f.a)({},a,{},p(e))})),console.log(a),a}(e.target))}},a)};g.defaultProps={onSubmit:function(){}};var b=g,v=a(7),h=a.n(v),E=a(16),D=a.n(E),_=function(e){var t=e.id,a=e.type,n=e.label,o=e.name,i=e.required,c=e.disabled,l=e.readOnly,s=e.placeholder,u=e.value,d=e.defaultValue,m=e.defaultChecked,f=e.description,p=e.errorMessage,g=e.className;return r.a.createElement("div",{className:h()(D.a.container,g)},r.a.createElement("input",{className:D.a.input,required:i,type:a,id:t,name:o,defaultValue:d,placeholder:s,defaultChecked:m,disabled:c,value:u,readOnly:l}),f&&r.a.createElement("div",null,f),r.a.createElement("div",{className:D.a.error},p),n&&r.a.createElement("label",{className:D.a.label,htmlFor:t},n))};_.defaultProps={type:"text"};var k=_,I=a(28),O=a.n(I),y=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:h()(O.a.card,a)},t)},N=function(e,t,a,n,r){a(),fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return r(e)}),(function(e){return n(e)}))},j=function(e,t,a,n){t(),fetch(e,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e.json()})).then((function(e){return n(e)}),(function(e){return a(e)}))},w=a(29),S=new(a.n(w).a),F=function(e){return e+"-"+S.randomUUID(6)},x=[{batchID:"B1",foodID:"1",lotNo:"1",farmID:"F1",dateOfHarvest:"2020-01-15T14:23:22",packageID:"P3",packagingHouseID:"PH-230554",dateOfPackaging:"2020-01-18T08:54:43",distributionCenterID:"DC3",dateOfDistribution:"2020-01-24T17:04:32",storeID:"S3",dateOfDelivery:"2020-01-26T06:47:14"}],P=[{foodID:"1",image:"https://image.flaticon.com/icons/svg/714/714197.svg",alt:"Icon made by DinosoftLabs from Flaticon",name:"Banana",description:"Banana Lorem Ipsum"},{foodID:"2",image:"https://image.flaticon.com/icons/svg/700/700804.svg",alt:"Icon made by DinosoftLabs from Flaticon",name:"Mango",description:"Mango Lorem Ipsum"},{foodID:"3",image:"https://image.flaticon.com/icons/svg/415/415733.svg",alt:"Icons made by Freepik from Flaticon",name:"Apple",description:"Apple Lorem Ipsum"},{foodID:"4",image:"https://image.flaticon.com/icons/svg/590/590767.svg",alt:"Icons made by Freepik from Flaticon",name:"Orange",description:"Orange Lorem Ipsum"}],C=function(e,t,a,n,r){a(),setTimeout((function(){return r({status:"OK - "+e})}),1500)},H=new Array(1).map((function(e){return F("S")})),T=function(e,t,a,n){return C("/api/registerFromPackageHouseToDistributionCenter",Object(f.a)({},e),t,0,(function(t){!function(e,t,a,n){C("/api/registerFromDistributionCenterToStore",Object(f.a)({},e),t,0,n)}({packageID:e.packageID,storeID:H[Math.floor(Math.random()*H.length)],dateofDelivery:"2020-02-29"},(function(){}),0,n),n(t)}))},M=function(e,t,a,n){return C("/api/registerFoodFromFarmToPackageHouse",Object(f.a)({},e),t,0,(function(r){!function e(t,a,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return C("/api/registerPackage",Object(f.a)({},t),(function(){o>1&&setTimeout((function(){return e({packageID:F("P"),batchID:t.batchID},a,n,r,o-1)}),200),a()}),0,(function(e){T({packageID:t.packageID,distributionCenterID:F("DC"),dateOfDistribution:"2020-02-25"},a,0,r),r(e)}))}({packageID:F("P"),batchID:e.batchID},t,a,n,5),n(r)}))},q=function(e,t){!function(e,t,a,n){C("/api/registerBatch",Object(f.a)({},e),t,0,(function(r){M({batchID:e.batchID,dateOfPacking:"2020-02-20",packagingHouseID:F("PH")},t,a,n),n(r)}))}(e,(function(){}),(function(e){var a=e.error;return t({error:a})}),(function(e){var a=e.status;return t({result:a})}))},B=function(e,t){"3000"===window.location.port?function(e){e({loading:!0,error:null,result:null}),setTimeout((function(){return e({loading:!1,error:null,result:x[0]})}),500)}(t):j("/api/getItem/".concat(e),(function(){return t({loading:!0,error:null,result:null})}),(function(e){var a=e.status,n=e.message;return t({loading:!1,error:n,result:null,status:a})}),(function(e){var a=e.status,n=e.result;return t({loading:!1,error:null,result:n,status:a})}))},V=function(e){"3000"===window.location.port?function(e){e({loading:!0,error:null,result:null}),setTimeout((function(){return e({loading:!1,error:null,result:x})}),500)}(e):j("/api/getPackages",(function(){return e({loading:!0,error:null,result:null})}),(function(t){var a=t.status,n=t.message;return e({loading:!1,error:n,result:null,status:a})}),(function(t){var a=t.status,n=t.result;return e({loading:!1,error:null,result:n,status:a})}))},z=function(e){"3000"===window.location.port?function(e){e({loading:!0,error:null,result:null}),setTimeout((function(){return e({loading:!1,error:null,result:P})}),500)}(e):j("/api/fruit/",(function(){return e({loading:!0,error:null,result:null})}),(function(t){var a=t.status,n=t.message;return e({loading:!1,error:n,result:null,status:a})}),(function(t){var a=t.status,n=t.result;return e({loading:!1,error:null,result:n,status:a})}))},A=a(14),L=a.n(A),U=function(e){var t=e.title,a=e.message,n=e.className;return r.a.createElement("div",{className:h()(L.a.message,n)},t&&r.a.createElement("h4",null,t),a&&r.a.createElement("p",null,a))},Y=function(e){var t=e.title,a=e.message;return r.a.createElement(U,{className:L.a.success,title:t,message:a})},W=function(e){var t=e.title,a=e.message;return r.a.createElement(U,{className:L.a.error,title:t,message:a})},J=a(19),Q=a.n(J),G=a(12),R=a.n(G),Z=function(e){var t=e.id,a=e.label,o=e.name,i=e.required,c=e.disabled,l=e.elements,m=e.errorMessage,f=e.className,p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.description,a=e.value,r=Object(n.useState)(t),o=Object(s.a)(r,2),i=o[0],c=o[1],l=Object(n.useState)(a),u=Object(s.a)(l,2),d=u[0],m=u[1],f=function(e){c(e.description),m(e.value)};return Object(n.useEffect)((function(){f(e)}),[e]),[{value:d,description:i},f]}(l[0]||{}),g=Object(s.a)(p,2),b=g[0],v=b.value,E=b.description,D=g[1],_=Object(n.useState)(!1),k=Object(s.a)(_,2),I=k[0],O=k[1];return r.a.createElement("div",{className:h()(R.a.container,f)},r.a.createElement("div",{className:R.a.dropdown},r.a.createElement("button",{type:"button",id:t,disabled:c,onClick:function(){return O(!I)}},E,r.a.createElement(u.a,{icon:I?d.c:d.b,size:"2x",className:R.a.caret})),I&&r.a.createElement("div",{className:R.a.list},l.map((function(e){return r.a.createElement("button",{key:e.value,type:"button",onClick:function(){return function(e){O(!1),D(e)}(e)}},e.description)})))),r.a.createElement("input",{className:R.a.input,required:i,type:"hidden",name:o,value:v,readOnly:!0}),r.a.createElement("div",{className:R.a.error},m),a&&r.a.createElement("label",{className:R.a.label,htmlFor:t},a))};Z.defaultProps={type:"text"};var K=Z,$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e.loading||!1),a=Object(s.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(e.error),c=Object(s.a)(i,2),l=c[0],u=c[1],d=Object(n.useState)(e.result),m=Object(s.a)(d,2),f=m[0],p=m[1],g=Object(n.useState)(e.status),b=Object(s.a)(g,2),v=b[0],h=b[1],E=function(e){o(e.loading),u(e.error),p(e.result),h(e.status)};return[{loading:r,error:l,result:f,status:v},E]},X=function(e,t){var a=$(),r=Object(s.a)(a,2),o=r[0],i=o.loading,c=o.error,l=o.result,u=o.status,d=r[1];return Object(n.useEffect)((function(){e(d,t)}),[]),{result:l,loading:i,error:c,status:u}},ee=function(){var e=$(),t=Object(s.a)(e,2),a=t[0],n=t[1],o=X(z),i=o.result?o.result.map((function(e){return{description:e.name,value:e.foodID}})):[];return r.a.createElement(y,{className:Q.a.farm},r.a.createElement(u.a,{icon:d.e,size:"6x"}),r.a.createElement("h1",null,"FruitFarm"),r.a.createElement(b,{onSubmit:function(e){return function(e,t){"3000"===window.location.port?q(e,t):N("/api/registerBatch",Object(f.a)({},e),(function(){return t({loading:!0,error:null,result:null})}),(function(e){var a=e.status,n=e.message;return t({loading:!1,error:n,result:null,status:a})}),(function(e){var a=e.status,n=e.result;return t({loading:!1,error:null,result:n,status:a})}))}(e,n)}},a.error&&r.a.createElement(W,{title:a.status,messsage:a.error}),a.result&&r.a.createElement(Y,{title:a.status,message:a.result}),r.a.createElement(k,{className:Q.a.id,id:"farmID",name:"farmID",label:"Farm-id",defaultValue:F("F"),errorMessage:"Du m\xe5 gi g\xe5rden en id.",required:!0,disabled:a.loading}),r.a.createElement(k,{className:Q.a.id,id:"batchID",name:"batchID",label:"Batch-id",defaultValue:F("B"),errorMessage:"Du m\xe5 gi batchen en id.",required:!0,disabled:a.loading}),r.a.createElement(K,{id:"foodID",name:"foodID",label:"Food type",elements:i,required:!0,disabled:a.loading||o.loading}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement(k,{id:"lotNo1",label:"Lot",name:"lotNo",type:"radio",description:"S\xf8ndre",value:"lotSouth",disabled:a.loading,required:!0}),r.a.createElement(k,{id:"lotNo2",name:"lotNo",type:"radio",description:"Nordre",value:"lotNorth",disabled:a.loading}),r.a.createElement(k,{id:"lotNo3",name:"lotNo",type:"radio",description:"\xd8stre",value:"lotEast",disabled:a.loading}),r.a.createElement(k,{id:"lotNo4",name:"lotNo",type:"radio",description:"Vestre",value:"lotWest",disabled:a.loading})),r.a.createElement(k,{id:"dateOfHarvest",label:"Harverest date",name:"dateOfHarvest",type:"date",defaultValue:"2020-02-10",disabled:a.loading}),r.a.createElement(k,{type:"submit",value:"Go",disabled:a.loading})))},te=a(30),ae=a.n(te),ne=a(31),re=a.n(ne),oe=a(22),ie=a.n(oe),ce=function(e){var t=e.timestamp,a=e.description,n=e.image,o=e.className;return r.a.createElement("div",{className:h()(ie.a.container,o)},r.a.createElement("h3",null,re()(t).format("DD.MM.YYYY (HH:mm)")),r.a.createElement("p",null,a),n&&r.a.createElement("img",{src:n,className:ie.a.image}))},le=function(e){var t=e.className;return r.a.createElement(u.a,{className:t,icon:d.a,size:"2x"})},se=a(32),ue=a.n(se),de=function(e){var t=e.events;return r.a.createElement("div",null,r.a.createElement("h2",null,"From farm to table"),r.a.createElement("p",null,"What is your FOOD's story?"),r.a.createElement("div",{className:ue.a.history},t.map((function(e,t){var a=e.timestamp,o=e.description,i=e.image;return r.a.createElement(n.Fragment,{key:a},0!==t&&r.a.createElement(le,null),r.a.createElement(ce,{timestamp:a,description:o,image:i}))}))))},me=a(18),fe=a.n(me),pe=function(e){var t=e.packageID,a=e.onClick;return r.a.createElement("button",{className:fe.a.package,onClick:function(){return a(t)}},t)},ge=function(e){var t=e.packages,a=e.onClick;return t?r.a.createElement("div",{className:fe.a.packages},t.map((function(e){var t=e.packageID;return r.a.createElement(pe,{key:t,packageID:t,onClick:a})}))):null},be=function(e,t){var a=[];if(!e||!t)return a;var n=t.find((function(t){return t.foodID===e.foodID}));return e.dateOfHarvest&&a.push({timestamp:e.dateOfHarvest,description:"Your ".concat(n.name," was harvested at farm ").concat(e.farmID," ")+"on lot ".concat(e.lotNo," alongside many others in batch ").concat(e.batchID,"!")}),e.dateOfPackaging&&a.push({timestamp:e.dateOfPackaging,description:"It was soon packaged at packaging house ".concat(e.packagingHouseID,".")}),e.dateOfDistribution&&a.push({timestamp:e.dateOfDistribution,description:"Your ".concat(n.name," reached distribution center ").concat(e.distributionCenterID," and shipped to the store.")}),e.dateOfDelivery&&a.push({timestamp:e.dateOfDelivery,image:n.image,description:"Was delivered to this EcoStore (".concat(e.storeID,") and is now in your hand! \n")+"Enjoy your fresh ".concat(n.name,", knowing it has had a safe and tracable trip.")}),a},ve=function(){var e=X(z),t=X(V),a=$({}),o=Object(s.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),m=Object(s.a)(l,2),f=m[0],p=m[1];return r.a.createElement("div",null,r.a.createElement("header",{className:ae.a.background},r.a.createElement(ge,{packages:t.result,onClick:p}),r.a.createElement(y,null,r.a.createElement(u.a,{icon:d.d,size:"6x"}),r.a.createElement("h1",null,"EcoStore"),r.a.createElement(b,{onSubmit:function(e){return B(e.packageID,c)}},i.error&&r.a.createElement(W,{title:i.status,messsage:i.error}),i.result&&r.a.createElement(Y,{title:i.status}),r.a.createElement(k,{id:"packageID",name:"packageID",label:"Package-Id",defaultValue:f,onChange:function(e){return p(e.target.value)},disabled:i.loading}),r.a.createElement(k,{type:"submit",value:"Submit",disabled:i.loading})),r.a.createElement(de,{events:be(i.result,e.result)}))))};var he=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"background"},r.a.createElement(c.a,null,r.a.createElement(l.a,{path:"/fruitfarm"},r.a.createElement(ee,null)),r.a.createElement(l.a,{path:"/ecostore"},r.a.createElement(ve,null)))))};i.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.642b2168.chunk.js.map