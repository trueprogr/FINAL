(function(e){function t(t){for(var n,s,r=t[0],l=t[1],i=t[2],m=0,p=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},a={app:0},c=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Hack-the-ice-4/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var d=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0c63":function(e,t,o){"use strict";o("93b3")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},"19b0":function(e,t,o){e.exports=o.p+"img/people.8c473393.svg"},"1a61":function(e,t,o){e.exports=o.p+"img/mic.54955050.svg"},"1c20":function(e,t,o){"use strict";o("40a1")},2:function(e,t){},3:function(e,t){},"3bfd":function(e,t,o){e.exports=o.p+"img/screencast.1bb19944.svg"},4:function(e,t){},"40a1":function(e,t,o){},"4a85":function(e,t,o){e.exports=o.p+"img/dots.589a0cfe.svg"},5:function(e,t){},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const a=Object(n["createElementVNode"])("div",{id:"nav"},null,-1);function c(e,t,o,c,s,r){const l=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[a,Object(n["createVNode"])(l)],64)}var s={mounted(){localStorage.getItem("user_id")||this.$router.push("/login")}},r=(o("1c20"),o("6b0d")),l=o.n(r);const i=l()(s,[["render",c]]);var d=i,m=o("6605");const p={class:"container-fluid"},h={class:"justify-content-center align-content-center",style:{"background-color":"#2F2F2F"}},u={class:"pt-5"},b={class:"d-flex flex-column",style:{}},g=Object(n["createElementVNode"])("p",{class:"h5",style:{color:"white"}},"Rooms:",-1),f={class:"p-2 d-flex flex-column justify-content-center",style:{"border-radius":"5px","border-color":"#222222","margin-top":"10px",width:"200px","background-color":"#222222"}},O={class:"col-sm text-center",style:{color:"white"}},v=["onClick"];function j(e,t,o,a,c,s){const r=Object(n["resolveComponent"])("Header");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(r),Object(n["createElementVNode"])("div",p,[Object(n["createElementVNode"])("div",h,[Object(n["createElementVNode"])("div",u,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.room_name=e),type:"text"},null,512),[[n["vModelText"],c.room_name]]),Object(n["createElementVNode"])("a",{class:"btn btn-outline-primary mx-5",onClick:t[1]||(t[1]=(...e)=>s.createRoom&&s.createRoom(...e))},"create")]),Object(n["createElementVNode"])("div",b,[g,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.rooms,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"container d-flex flex-row flex-wrap",key:t},[Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("p",O,Object(n["toDisplayString"])(e.name),1),Object(n["createElementVNode"])("a",{class:"col-sm btn",style:{"background-color":"#7E60D4",color:"white"},onClick:()=>s.connectRoom(e.id)},"connnect",8,v)])]))),128))])])])],64)}var E=o("cee4");function w(e,t,o,a,c,s){const r=Object(n["resolveComponent"])("Vote"),l=Object(n["resolveComponent"])("VueApexCharts");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(r,{class:Object(n["normalizeClass"])(c.voted||!o.lobby?"nonvisible":""),onData:t[0]||(t[0]=e=>s.handleData(e))},null,8,["class"]),Object(n["createVNode"])(l,{class:Object(n["normalizeClass"])(c.voted||!o.lobby?"":"nonvisible"),type:"bar",width:"400",options:c.chartOptions,series:c.series},null,8,["class","options","series"])])}const y={class:"d-flex flex-column card",style:{width:"200px"}},V=Object(n["createElementVNode"])("label",{class:"d-flex justify-content-center mt-2"},"What's your favorite fruit?",-1),k={class:"card-body d-flex flex-column justify-content-center my-2",style:{width:"200px"}},N=Object(n["createElementVNode"])("label",{class:"btn btn-outline-success my-2",for:"success-outlined-3"},"apple",-1),x=Object(n["createElementVNode"])("label",{class:"btn btn-outline-success",for:"success-outlined-2"},"orange",-1),C=Object(n["createElementVNode"])("label",{class:"btn btn-outline-success my-2",for:"success-outlined-1"},"grape",-1);function S(e,t,o,a,c,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("form",null,[Object(n["createElementVNode"])("div",y,[V,Object(n["createElementVNode"])("div",k,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{name:"options-outlined",class:"btn-check",type:"radio",value:"apple",id:"success-outlined-3","onUpdate:modelValue":t[0]||(t[0]=e=>c.choice=e),autocomplete:"off"},null,512),[[n["vModelRadio"],c.choice]]),N,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{name:"options-outlined",class:"btn-check",type:"radio",value:"orange",id:"success-outlined-2","onUpdate:modelValue":t[1]||(t[1]=e=>c.choice=e),autocomplete:"off"},null,512),[[n["vModelRadio"],c.choice]]),x,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{name:"options-outlined",class:"btn-check",type:"radio",value:"grape",id:"success-outlined-1","onUpdate:modelValue":t[2]||(t[2]=e=>c.choice=e),autocomplete:"off"},null,512),[[n["vModelRadio"],c.choice]]),C,Object(n["createElementVNode"])("button",{class:"btn mx-5",style:{"background-color":"#7E60D4",color:"white"},type:"button",onClick:t[3]||(t[3]=(...e)=>s.vote2&&s.vote2(...e))},"Vote")])])])}var A={name:"App",data(){return{choice:"",results:{}}},methods:{vote(){localStorage.getItem("vote-result")||localStorage.setItem("vote-result",JSON.stringify({}));const{choice:e}=this,t=JSON.parse(localStorage.getItem("vote-result"));Object.prototype.hasOwnProperty.call(t,e)||(t[e]=0),t[e]++,localStorage.setItem("vote-result",JSON.stringify(t)),this.results=JSON.parse(localStorage.getItem("vote-result"))},vote2(){this.$emit("data",this.choice)}}};const B=l()(A,[["render",S]]);var I=B,R=o("ae27"),D=o.n(R),W={components:{Vote:I,VueApexCharts:D.a},mounted(){setInterval(()=>{E["a"].post("https://placify-hack-the-ice-4.herokuapp.com/api/widget/get/one",JSON.stringify({id:this.id}),{headers:{"Content-Type":"application/json"}}).then(e=>{this.series[0].data=[e.data.data1,e.data.data2,e.data.data3]}).catch(e=>{console.log(e)})},5e3)},data(){return{data:[0,0,0],voted:!1,series:[{name:"",data:[0,0,0]}],chartOptions:{chart:{height:350,type:"Bar",zoom:{enabled:!1}},colors:["#7E60D4"],plotOptions:{bar:{dataLabels:{position:"center",total:{enabled:!0}},borderRadius:5,horizontal:!0}},stroke:{curve:"straight"},title:{text:"",align:"left"},grid:{show:!1},xaxis:{categories:["apple","orange","grape"],labels:{show:!1}},yaxis:{title:{text:void 0}}}}},props:["id","lobby"],methods:{async handleData(e){await E["a"].post("https://placify-hack-the-ice-4.herokuapp.com/api/widget/get/one",JSON.stringify({id:this.id}),{headers:{"Content-Type":"application/json"}}).then(e=>{this.series[0].data=[e.data.data1,e.data.data2,e.data.data3]}).catch(e=>{console.log(e)}),"apple"==e&&(this.series[0].data[0]+=1),"orange"==e&&(this.series[0].data[1]+=1),"grape"==e&&(this.series[0].data[2]+=1),this.updateData(),this.voted=!0},async updateData(){const e=JSON.stringify({id:this.id,data1:this.series[0].data[0],data2:this.series[0].data[1],data3:this.series[0].data[2]});await E["a"].post("https://placify-hack-the-ice-4.herokuapp.com/api/widget/update/data",e,{headers:{"Content-Type":"application/json"}}).then(e=>{}).catch(e=>{console.log(e)})}}};o("5bb2");const L=l()(W,[["render",w],["__scopeId","data-v-c672dc50"]]);var M=L;const J={class:"h5 unselectable text-muted"},T={class:"h4 unselectable"},U={class:"h5 unselectable text-muted",style:{cursor:"pointer"}};function F(e,t,o,a,c,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("p",J,Object(n["toDisplayString"])(c.k1),1),Object(n["createElementVNode"])("p",T,Object(n["toDisplayString"])(c.k2),1),Object(n["createElementVNode"])("p",U,Object(n["toDisplayString"])(c.k3),1),Object(n["createElementVNode"])("a",{id:"next",onClick:t[0]||(t[0]=()=>s.next(c.k1)),style:{cursor:"pointer"}},"next")])}var H={data(){return{k1:"Команда 1",k2:"Команда 2",k3:"Команда 3"}},props:["team"],mounted(){parseInt(this.team)-1==0?this.k1="Команда"+(parseInt(this.team)+2).toString():this.k1="Команда"+(parseInt(this.team)-1).toString(),this.k2="Команда"+this.team,this.k3="Команда"+(parseInt(this.team)+1).toString()},methods:{next(){let e=this.k1;this.k1=this.k2,this.k2=this.k3,this.k3=e}}};o("a15b");const P=l()(H,[["render",F],["__scopeId","data-v-bc027ee0"]]);var Y=P,X=o("cf05"),q=o.n(X);const z=e=>(Object(n["pushScopeId"])("data-v-c5f61c08"),e=e(),Object(n["popScopeId"])(),e),$=z(()=>Object(n["createElementVNode"])("nav",{class:"navbar navbar-expand-lg",style:{height:"76px"}},[Object(n["createElementVNode"])("img",{class:"ms-5",src:q.a,alt:""})],-1)),_=[$];function Z(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,_)}o("9cd4");const G={},K=l()(G,[["render",Z],["__scopeId","data-v-c5f61c08"]]);var Q=K,ee={name:"Home",components:{VoteActive:M,Comands:Y,Header:Q},data(){return{room_name:"",rooms:[],myrooms:[]}},mounted(){this.getRooms(),this.getUsersRooms()},methods:{async createRoom(){const e=JSON.stringify({user_id:localStorage.getItem("user_id"),name:this.room_name});await E["a"].post("https://placify-hack-the-ice-4.herokuapp.com/api/room/create",e,{headers:{"Content-Type":"application/json"}}).then(e=>{console.log(e.data),localStorage.setItem("room_id",e.data.id),this.$router.push("/myroom/"+e.data.id)}).catch(e=>{console.log(e)})},connectRoom(e){this.$router.push("/room/"+e),localStorage.setItem("room_id",e)},connectMyRoom(e){this.$router.push("/myroom/"+e),localStorage.setItem("room_id",e)},async getRooms(){await E["a"].get("https://placify-hack-the-ice-4.herokuapp.com/api/room/getAll").then(e=>{this.rooms=e.data,console.log(this.rooms)}).catch(e=>{console.log(e)})},async getUsersRooms(){const e=JSON.stringify({user_id:localStorage.getItem("user_id")});await E["a"].post("https://placify-hack-the-ice-4.herokuapp.com/api/room/getUsers",e,{headers:{"Content-Type":"application/json"}}).then(e=>{this.myrooms=e.data}).catch(e=>{console.log(e)})}}};const te=l()(ee,[["render",j]]);var oe=te,ne=o("bf37"),ae=o.n(ne);const ce={class:"container"},se={id:"draggable-header"},re={class:"row mt-3"},le=Object(n["createElementVNode"])("p",{class:"col-sm-10 h4"},"Очередь",-1),ie=Object(n["createElementVNode"])("img",{src:ae.a,alt:""},null,-1),de=[ie],me={class:"mt-4"};function pe(e,t,o,a,c,s){const r=Object(n["resolveComponent"])("Header"),l=Object(n["resolveComponent"])("VoteActive"),i=Object(n["resolveComponent"])("vue-webrtc"),d=Object(n["resolveComponent"])("Comands"),m=Object(n["resolveComponent"])("Footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(r),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.widgets,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:t},[Object(n["createElementVNode"])("div",{ref_for:!0,ref:"draggableContainer",class:"position-absolute",id:"draggable-container",style:{width:"15%"}},[Object(n["createElementVNode"])("div",ce,[Object(n["createElementVNode"])("div",se,["Poll"===e.type?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,lobby:!0,id:e.id},null,8,["id"])):Object(n["createCommentVNode"])("",!0)])])],512)]))),128)),Object(n["createVNode"])(i,{ref:"webrtc",width:"100vw",height:"50vh",enableVideo:!1,enableAudio:!0,roomId:c.roomId,enableLogs:!0,onJoinedRoom:s.logEvent,onLeftRoom:s.logEvent,onOpenedRoom:s.logEvent,onShareStarted:s.logEvent,onShareStopped:s.logEvent,onError:s.onError},null,8,["roomId","onJoinedRoom","onLeftRoom","onOpenedRoom","onShareStarted","onShareStopped","onError"]),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])([c.queueWindow?"":"d-none","container float-start border"]),style:{"margin-top":"-0.6%",height:"80vh",width:"25%","background-color":"white"}},[Object(n["createElementVNode"])("div",re,[le,Object(n["createElementVNode"])("a",{class:"col-sm",onClick:t[0]||(t[0]=()=>s.closeWindow("q")),style:{cursor:"pointer"}},de)]),Object(n["createElementVNode"])("div",me,[Object(n["createVNode"])(d,{class:"text-center",team:c.roomId},null,8,["team"])])],2),Object(n["createVNode"])(m,{onData:t[1]||(t[1]=e=>s.handleData(e))})])}const he={class:"container"},ue={class:"row"},be={class:"col-md-12 my-3"},ge=Object(n["createElementVNode"])("h2",null,"Room",-1),fe={class:"row"},Oe={class:"col-md-12"},ve={class:""},je={class:"row"},Ee={class:"col-md-12 my-3"};function we(e,t,o,a,c,s){const r=Object(n["resolveComponent"])("vue-webrtc");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",he,[Object(n["createElementVNode"])("div",ue,[Object(n["createElementVNode"])("div",be,[ge,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.roomId=e)},null,512),[[n["vModelText"],c.roomId]])])]),Object(n["createElementVNode"])("div",fe,[Object(n["createElementVNode"])("div",Oe,[Object(n["createElementVNode"])("div",ve,[Object(n["createVNode"])(r,{ref:"webrtc",width:"100%",roomId:c.roomId,enableLogs:!0,enableAudio:!1,enableVideo:!1,onJoinedRoom:s.logEvent,onLeftRoom:s.logEvent,onOpenedRoom:s.logEvent,onShareStarted:s.logEvent,onShareStopped:s.logEvent,onError:s.onError},null,8,["roomId","onJoinedRoom","onLeftRoom","onOpenedRoom","onShareStarted","onShareStopped","onError"])]),Object(n["createElementVNode"])("div",je,[Object(n["createElementVNode"])("div",Ee,[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=(...e)=>s.onJoin&&s.onJoin(...e))},"Join"),Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>s.onLeave&&s.onLeave(...e))},"Leave"),Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=(...e)=>s.onShareScreen&&s.onShareScreen(...e))},"Share Screen")])])])])])}var ye=o("0c08"),Ve={name:"demo",components:{"vue-webrtc":ye["a"]},data(){return{img:null,roomId:"private-room-liver"}},mounted(){},computed:{},watch:{},methods:{onJoin(){this.$refs.webrtc.join(),console.log("refs:"),console.log(this.$refs.webrtc)},onLeave(){this.$refs.webrtc.leave()},onShareScreen(){this.img=this.$refs.webrtc.shareScreen()},onError(e,t){console.log("On Error Event",e,t)},logEvent(e){console.log("Event : ",e)}}};o("681e");const ke=l()(Ve,[["render",we]]);var Ne=ke,xe=o("1a61"),Ce=o.n(xe),Se=o("ecd7"),Ae=o.n(Se),Be=o("19b0"),Ie=o.n(Be),Re=o("7c9a"),De=o.n(Re),We=o("5f66"),Le=o.n(We),Me=o("3bfd"),Je=o.n(Me),Te=o("8f9b"),Ue=o.n(Te),Fe=o("666d"),He=o.n(Fe),Pe=o("4a85"),Ye=o.n(Pe),Xe=o("fbd7"),qe=o.n(Xe);const ze={id:"sheet",class:"container-fluid align-items-center d-flex d-flex justify-content-between",style:{height:"76px",position:"fixed",bottom:"0"}},$e=Object(n["createElementVNode"])("span",null,[Object(n["createElementVNode"])("a",{href:"#",class:"mx-2"},[Object(n["createElementVNode"])("img",{src:Ce.a,alt:""})]),Object(n["createElementVNode"])("a",{href:"#",class:"mx-2"},[Object(n["createElementVNode"])("img",{src:Ae.a,alt:""})])],-1),_e=Object(n["createElementVNode"])("img",{src:Ie.a,alt:""},null,-1),Ze=[_e],Ge=Object(n["createStaticVNode"])('<a href="#" class="mx-2"><img src="'+De.a+'" alt=""></a><a href="#" class="mx-2"><img src="'+Le.a+'" alt=""></a><a href="#" class="mx-2"><img src="'+Je.a+'" alt=""></a><a class="mx-2"><img src="'+Ue.a+'" alt=""></a>',4),Ke=Object(n["createElementVNode"])("img",{src:He.a,alt:""},null,-1),Qe=[Ke],et=Object(n["createElementVNode"])("a",{href:"#",class:"mx-2"},[Object(n["createElementVNode"])("img",{src:Ye.a,alt:""})],-1),tt=Object(n["createElementVNode"])("img",{src:qe.a,alt:""},null,-1),ot=[tt];function nt(e,t,o,a,c,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ze,[$e,Object(n["createElementVNode"])("span",null,[Object(n["createElementVNode"])("a",{href:"#",class:"mx-2",onClick:t[0]||(t[0]=(...e)=>s.teams&&s.teams(...e))},Ze),Ge,Object(n["createElementVNode"])("a",{class:"mx-2",style:{cursor:"pointer"},onClick:t[1]||(t[1]=(...e)=>s.addWidget&&s.addWidget(...e))},Qe),et]),Object(n["createElementVNode"])("span",null,[Object(n["createElementVNode"])("a",{href:"#",onClick:t[2]||(t[2]=(...e)=>s.leaveOn&&s.leaveOn(...e))},ot)])])}var at={data(){return{}},methods:{leaveOn(){this.$emit("data","onLeave")},addWidget(){this.$emit("data","addWidget")},teams(){this.$emit("data","teams")}}};o("0c63");const ct=l()(at,[["render",nt]]);var st=ct,rt={name:"Room",components:{Demo:Ne,Header:Q,Footer:st,"vue-webrtc":ye["a"],Vote:I,VoteActive:M,Comands:Y},data(){return{id:"",top:"",left:"",widgets:[{type:"a"}],roomId:localStorage.getItem("room_id"),queueWindow:!1}},mounted(){this.id=this.$route.params.id,setInterval(this.getWidget,100),console.log(this.$refs),this.onJoin()},methods:{closeWindow(e){"q"==e&&(this.queueWindow=!1),"w"==e&&(this.widgetsWindow=!1)},handleData(e){"onLeave"==e&&(this.onLeave(),this.$router.push("/")),"teams"==e&&(this.queueWindow=!0)},onJoin(){console.log(this.$refs.webrtc),this.$refs.webrtc.join()},onLeave(){console.log("w"),this.$refs.webrtc.leave()},onShareScreen(){this.img=this.$refs.webrtc.shareScreen()},onError(e,t){console.log("On Error Event",e,t)},logEvent(e){console.log("Event : ",e)},async getWidget(){const e=JSON.stringify({room_id:localStorage.getItem("room_id")});await E["a"].post("https://placify-hack-the-ice-4.herokuapp.com/api/widget/get",e,{headers:{"Content-Type":"application/json"}}).then(e=>{this.widgets=e.data;for(let t=0;t<this.widgets.length;t++)this.$refs.draggableContainer[t].style.top=this.widgets[t].top,this.$refs.draggableContainer[t].style.left=this.widgets[t].left,console.log(this.$refs.draggableContainer[t].style.left)}).catch(e=>{console.log(e)})}}};const lt=l()(rt,[["render",pe]]);var it=lt;const dt={class:"container mt-5",style:{width:"50%"}},mt={class:"mb-3"},pt=Object(n["createElementVNode"])("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1),ht=Object(n["createElementVNode"])("div",{id:"emailHelp",class:"form-text"},"We'll never share your email with anyone else.",-1),ut={class:"mb-3"},bt=Object(n["createElementVNode"])("label",{for:"exampleInputPassword1",class:"form-label"},"Password",-1);function gt(e,t,o,a,c,s){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",dt,[Object(n["createElementVNode"])("form",null,[Object(n["createElementVNode"])("div",mt,[pt,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.email=e),type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"},null,512),[[n["vModelText"],c.email]]),ht]),Object(n["createElementVNode"])("div",ut,[bt,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>c.passwrod=e),type:"password",class:"form-control",id:"exampleInputPassword1"},null,512),[[n["vModelText"],c.passwrod]])]),Object(n["createElementVNode"])("a",{class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>s.login&&s.login(...e))},"Submit")])])}var ft={name:"Login",data(){return{email:"",passwrod:""}},methods:{async login(){const e=JSON.stringify({email:this.email,passwrod:this.passwrod});await E["a"].post("https://placify-hack-the-ice-4.herokuapp.com/api/user/login",e,{headers:{"Content-Type":"application/json"}}).then(e=>{console.log(e.data),localStorage.setItem("user_id",e.data.id),this.$router.push("/")}).catch(e=>{console.log(e)})}}};const Ot=l()(ft,[["render",gt]]);var vt=Ot;const jt=e=>(Object(n["pushScopeId"])("data-v-51761ed8"),e=e(),Object(n["popScopeId"])(),e),Et={class:"home"},wt=["onClick"],yt={class:"row mt-3"},Vt=jt(()=>Object(n["createElementVNode"])("p",{class:"col-sm-10 h4"},"Виджеты",-1)),kt=jt(()=>Object(n["createElementVNode"])("img",{src:ae.a,alt:""},null,-1)),Nt=[kt],xt={class:"mt-4"},Ct={class:"row mt-3"},St=jt(()=>Object(n["createElementVNode"])("p",{class:"col-sm-10 h4"},"Очередь",-1)),At=jt(()=>Object(n["createElementVNode"])("img",{src:ae.a,alt:""},null,-1)),Bt=[At],It={class:"mt-5"};function Rt(e,t,o,a,c,s){const r=Object(n["resolveComponent"])("Header"),l=Object(n["resolveComponent"])("VoteActive"),i=Object(n["resolveComponent"])("vue-webrtc"),d=Object(n["resolveComponent"])("Vote"),m=Object(n["resolveComponent"])("Comands"),p=Object(n["resolveComponent"])("Footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Et,[Object(n["createVNode"])(r),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.widgets,(e,o)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:o},[Object(n["createElementVNode"])("div",{ref_for:!0,ref:"draggableContainer",id:"draggable-container",style:{width:"15%"}},[e.clicked?(Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{key:0,onClick:t[0]||(t[0]=(...e)=>s.atacchWidget&&s.atacchWidget(...e)),style:{top:"-10%"},class:"btn position-absolute"},"X")):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",{onClick:()=>s.getNum(o),class:Object(n["normalizeClass"])([1===e.clicked?"choosed":"",""]),style:{cursor:"pointer"}},[Object(n["createElementVNode"])("div",{id:"draggable-header",onMousedown:t[1]||(t[1]=(...e)=>s.dragMouseDown&&s.dragMouseDown(...e))},["Poll"===e.type?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,lobby:!1,id:e.id},null,8,["id"])):Object(n["createCommentVNode"])("",!0)],32)],10,wt)],512)]))),128)),Object(n["createVNode"])(i,{ref:"webrtc",width:"100vw",height:"100vh",roomId:c.roomId,enableAudio:!1,enableLogs:!0,onJoinedRoom:s.logEvent,onLeftRoom:s.logEvent,onOpenedRoom:s.logEvent,onShareStarted:s.logEvent,onShareStopped:s.logEvent,onError:s.onError},null,8,["roomId","onJoinedRoom","onLeftRoom","onOpenedRoom","onShareStarted","onShareStopped","onError"]),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])([c.widgetsWindow?"":"d-none","container float-end border"]),style:{"margin-top":"-0.6%",height:"80vh",width:"25%","background-color":"white"}},[Object(n["createElementVNode"])("div",yt,[Vt,Object(n["createElementVNode"])("a",{class:"col-sm",onClick:t[2]||(t[2]=()=>s.closeWindow("w")),style:{cursor:"pointer"}},Nt)]),Object(n["createElementVNode"])("div",xt,[Object(n["createElementVNode"])("div",{onClick:t[3]||(t[3]=()=>s.addWidget("Poll"))},[Object(n["createVNode"])(d,{style:{"pointer-events":"none"}})])])],2),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])([c.queueWindow?"":"d-none","container float-start border"]),style:{"margin-top":"-0.6%",height:"80vh",width:"25%","background-color":"white"}},[Object(n["createElementVNode"])("div",Ct,[St,Object(n["createElementVNode"])("a",{class:"col-sm",onClick:t[4]||(t[4]=()=>s.closeWindow("q")),style:{cursor:"pointer"}},Bt)]),Object(n["createElementVNode"])("div",It,[Object(n["createVNode"])(m,{class:"text-center",team:c.roomId},null,8,["team"])])],2),Object(n["createVNode"])(p,{onData:t[5]||(t[5]=e=>s.handleData(e))})])}function Dt(e,t,o,a,c,s){const r=Object(n["resolveComponent"])("VueApexCharts");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(r,{type:"bar",width:"400",options:e.chartOptions,series:e.series},null,8,["options","series"])])}var Wt={components:{VueApexCharts:D.a},props:["data1","data2","data3"],computed(){this.add()},methods:{add(){this.series[0].data[0]+=1}},data:function(){return{ddata1:1,series:[{name:"",data:[this.data1,this.data2,0]}],chartOptions:{chart:{height:350,type:"Bar",zoom:{enabled:!1}},colors:["#7E60D4"],plotOptions:{bar:{dataLabels:{position:"center",total:{enabled:!0}},borderRadius:5,horizontal:!0}},stroke:{curve:"straight"},title:{text:"Product Trends by Month",align:"left"},grid:{show:!1},xaxis:{categories:["apple","orange","grape"],labels:{show:!1}},yaxis:{title:{text:void 0}}}}}};const Lt=l()(Wt,[["render",Dt]]);var Mt=Lt,Jt={name:"Home",components:{Header:Q,Demo:Ne,Footer:st,Vote:I,PoolChars:Mt,VoteActive:M,Comands:Y,"vue-webrtc":ye["a"]},data(){return{widgets:[],positions:{clientX:void 0,clientY:void 0,movementX:0,movementY:0},id:0,created:0,roomId:localStorage.getItem("room_id"),widgetsWindow:!0,queueWindow:!1}},mounted(){this.onJoin()},methods:{closeWindow(e){"q"==e&&(this.queueWindow=!1),"w"==e&&(this.widgetsWindow=!1)},handleData(e){"onLeave"==e&&(this.onLeave(),this.$router.push("/")),"addWidget"==e&&(this.widgetsWindow=!0),"teams"==e&&(this.queueWindow=!0),console.log(e)},onJoin(){this.$refs.webrtc.join(),console.log("ref"),console.log(this.$refs.webrtc.$el)},onLeave(){this.$refs.webrtc.leave()},onShareScreen(){this.img=this.$refs.webrtc.shareScreen()},onError(e,t){console.log("On Error Event",e,t)},logEvent(e){console.log("Event : ",e)},async addWidget(e){const t=JSON.stringify({room_id:localStorage.getItem("room_id"),type:e,top:"0px",left:"0px"});await E["a"].post("https://placify-hack-the-ice-4.herokuapp.com/api/widget/create",t,{headers:{"Content-Type":"application/json"}}).then(t=>{this.widgets.push({id:t.data.id,type:e,clicked:1}),this.id=this.widgets.length-1,this.created=1}).catch(e=>{console.log(e)})},async atacchWidget(){console.log(this.$refs.draggableContainer[this.id].style.top);const e=this.widgets[this.id].id,t=this.$refs.draggableContainer[this.id].style.top,o=this.$refs.draggableContainer[this.id].style.left;this.widgets[this.id].clicked=0,this.id=-1,this.created=0;const n=JSON.stringify({id:e,top:t,left:o});await E["a"].post("https://placify-hack-the-ice-4.herokuapp.com/api/widget/update",n,{headers:{"Content-Type":"application/json"}}).catch(e=>{})},getNum(e){this.created=1,this.id=e;for(let t=0;t<this.widgets.length;t++)this.widgets[t].clicked=t!=e?0:1},dragMouseDown:function(e){e.preventDefault(),this.positions.clientX=e.clientX,this.positions.clientY=e.clientY,document.onmousemove=this.elementDrag,document.onmouseup=this.closeDragElement},elementDrag:function(e){e.preventDefault(),this.positions.movementX=this.positions.clientX-e.clientX,this.positions.movementY=this.positions.clientY-e.clientY,this.positions.clientX=e.clientX,this.positions.clientY=e.clientY,this.$refs.draggableContainer[this.id].style.top=this.$refs.draggableContainer[this.id].offsetTop-this.positions.movementY+"px",this.$refs.draggableContainer[this.id].style.left=this.$refs.draggableContainer[this.id].offsetLeft-this.positions.movementX+"px"},closeDragElement(){document.onmouseup=null,document.onmousemove=null}}};o("5be5");const Tt=l()(Jt,[["render",Rt],["__scopeId","data-v-51761ed8"]]);var Ut=Tt;const Ft=[{path:"/",name:"Home",component:oe},{path:"/room/:id",name:"Room",component:it},{path:"/myroom/:id",name:"Lobby",component:Ut},{path:"/login",name:"Login",component:vt}],Ht=Object(m["a"])({history:Object(m["b"])("/Hack-the-ice-4/"),routes:Ft});var Pt=Ht;o("6017");const Yt=Object(n["createApp"])(d);Yt.use(Pt).mount("#app"),Yt.use(ye["b"]),Yt.use(D.a)},"5bb2":function(e,t,o){"use strict";o("6016")},"5be5":function(e,t,o){"use strict";o("6136")},"5f66":function(e,t,o){e.exports=o.p+"img/chat.efcf9e0a.svg"},6:function(e,t){},6016:function(e,t,o){},6136:function(e,t,o){},6370:function(e,t,o){},"666d":function(e,t,o){e.exports=o.p+"img/widget.97d5e79e.svg"},"681e":function(e,t,o){"use strict";o("6370")},7:function(e,t){},"7c9a":function(e,t,o){e.exports=o.p+"img/queque.f1c3e9d7.svg"},8:function(e,t){},"8f9b":function(e,t,o){e.exports=o.p+"img/squares.f331761d.svg"},9:function(e,t){},"93b3":function(e,t,o){},"9cd4":function(e,t,o){"use strict";o("c5e3")},a15b:function(e,t,o){"use strict";o("c404")},bf37:function(e,t,o){e.exports=o.p+"img/close.899fe32c.svg"},c404:function(e,t,o){},c5e3:function(e,t,o){},cf05:function(e,t){e.exports="data:image/png;base64,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"},ecd7:function(e,t,o){e.exports=o.p+"img/cam.6da9afe8.svg"},fbd7:function(e,t,o){e.exports=o.p+"img/off.82808802.svg"}});
//# sourceMappingURL=app.8de856ee.js.map