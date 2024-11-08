import{_ as g,G as u,a as i,c as r,b as t,m as f,s as k,n as w,t as T,D as C,d as n,F as L,h as E,i as S,e as y,j as c,X as M,g as _,q as D,v as A,f as R,w as P,k as V}from"./index-DOaPWS1X.js";import{M as B}from"./message-ChztDIV3.js";import{d as $}from"./dayjs.min-D8jwq_wn.js";import{L as I}from"./localeText-CaAXeE0W.js";const O={name:"RemoteServer",props:{server:Object},data(){return{active:!1,startTime:void 0,endTime:void 0,errorMsg:"",refreshing:!1}},methods:{async handshake(){this.active=!1,this.server.host&&this.server.apiKey&&(this.refreshing=!0,this.startTime=void 0,this.endTime=void 0,this.startTime=$(),await fetch(`${this.server.host}/api/handshake`,{headers:{"content-type":"application/json","wg-dashboard-apikey":this.server.apiKey},method:"GET",signal:AbortSignal.timeout(5e3)}).then(s=>{if(s.status===200)return s.json();throw new Error(s.statusText)}).then(()=>{this.endTime=$(),this.active=!0}).catch(s=>{this.active=!1,this.errorMsg=s}),this.refreshing=!1)},async connect(){await fetch(`${this.server.host}/api/authenticate`,{headers:{"content-type":"application/json","wg-dashboard-apikey":this.server.apiKey},body:JSON.stringify({host:window.location.hostname}),method:"POST",signal:AbortSignal.timeout(5e3)}).then(s=>s.json()).then(s=>{this.$emit("setActiveServer"),this.$router.push("/")})}},mounted(){this.handshake()},computed:{getHandshakeTime(){return this.startTime&&this.endTime?`${$().subtract(this.startTime).millisecond()}ms`:this.refreshing?u("Pinging..."):this.errorMsg?this.errorMsg:"N/A"}}},j={class:"card rounded-3"},q={class:"card-body"},G={class:"d-flex gap-3 w-100 remoteServerContainer"},N={class:"d-flex gap-3 align-items-center flex-grow-1"},U={class:"d-flex gap-3 align-items-center flex-grow-1"},z={class:"d-flex gap-2 button-group"},K={class:"card-footer gap-2 d-flex align-items-center"},W={key:0,class:"spin ms-auto text-primary-emphasis"};function F(s,e,l,d,a,h){return i(),r("div",j,[t("div",q,[t("div",G,[t("div",N,[e[7]||(e[7]=t("i",{class:"bi bi-server"},null,-1)),f(t("input",{class:"form-control form-control-sm",onBlur:e[0]||(e[0]=o=>this.handshake()),"onUpdate:modelValue":e[1]||(e[1]=o=>this.server.host=o),type:"url"},null,544),[[k,this.server.host]])]),t("div",U,[e[8]||(e[8]=t("i",{class:"bi bi-key-fill"},null,-1)),f(t("input",{class:"form-control form-control-sm",onBlur:e[2]||(e[2]=o=>this.handshake()),"onUpdate:modelValue":e[3]||(e[3]=o=>this.server.apiKey=o),type:"text"},null,544),[[k,this.server.apiKey]])]),t("div",z,[t("button",{onClick:e[4]||(e[4]=o=>this.$emit("delete")),class:"ms-auto btn btn-sm bg-danger-subtle text-danger-emphasis border-1 border-danger-subtle"},e[9]||(e[9]=[t("i",{class:"bi bi-trash"},null,-1)])),t("button",{onClick:e[5]||(e[5]=o=>this.connect()),class:w([{disabled:!this.active},"ms-auto btn btn-sm bg-success-subtle text-success-emphasis border-1 border-success-subtle"])},e[10]||(e[10]=[t("i",{class:"bi bi-arrow-right-circle"},null,-1)]),2)])])]),t("div",K,[t("span",{class:w(["dot ms-0 me-2",[this.active?"active":"inactive"]])},null,2),t("small",null,T(this.getHandshakeTime),1),this.refreshing?(i(),r("div",W,e[11]||(e[11]=[t("i",{class:"bi bi-arrow-clockwise"},null,-1)]))):(i(),r("a",{key:1,role:"button",onClick:e[6]||(e[6]=o=>this.handshake()),class:"text-primary-emphasis text-decoration-none ms-auto disabled"},e[12]||(e[12]=[t("i",{class:"bi bi-arrow-clockwise me"},null,-1)])))])])}const H=g(O,[["render",F],["__scopeId","data-v-ed7817c7"]]),J={name:"RemoteServerList",setup(){return{store:C()}},components:{LocaleText:I,RemoteServer:H}},X={class:"w-100 mt-3"},Z={class:"d-flex align-items-center mb-3"},Q={class:"mb-0"},Y={class:"w-100 d-flex gap-3 flex-column p-3 border border-1 border-secondary-subtle rounded-3",style:{height:"400px","overflow-y":"scroll"}},ee={key:0,class:"text-muted m-auto"};function te(s,e,l,d,a,h){const o=c("LocaleText"),b=c("RemoteServer");return i(),r("div",X,[t("div",Z,[t("h5",Q,[n(o,{t:"Server List"})]),t("button",{onClick:e[0]||(e[0]=v=>this.store.addCrossServerConfiguration()),class:"btn bg-primary-subtle text-primary-emphasis border-1 border-primary-subtle shadow-sm ms-auto"},[e[1]||(e[1]=t("i",{class:"bi bi-plus-circle-fill me-2"},null,-1)),n(o,{t:"Server"})])]),t("div",Y,[(i(!0),r(L,null,E(this.store.CrossServerConfiguration.ServerList,(v,p)=>(i(),S(b,{onSetActiveServer:x=>this.store.setActiveCrossServer(p),onDelete:x=>this.store.deleteCrossServerConfiguration(p),key:p,server:v},null,8,["onSetActiveServer","onDelete","server"]))),128)),Object.keys(this.store.CrossServerConfiguration.ServerList).length===0?(i(),r("h6",ee,[n(o,{t:"Click"}),e[2]||(e[2]=t("i",{class:"bi bi-plus-circle-fill mx-1"},null,-1)),n(o,{t:"to add your server"})])):y("",!0)])])}const se=g(J,[["render",te]]),oe={name:"signInInput",methods:{GetLocale:u},props:{id:"",data:"",type:"",placeholder:""},computed:{getLocaleText(){return u(this.placeholder)}}},ie=["type","id","name","placeholder"];function re(s,e,l,d,a,h){return f((i(),r("input",{type:l.type,"onUpdate:modelValue":e[0]||(e[0]=o=>this.data[this.id]=o),class:"form-control rounded-3",id:this.id,name:this.id,autocomplete:"on",placeholder:this.getLocaleText,required:""},null,8,ie)),[[M,this.data[this.id]]])}const ne=g(oe,[["render",re]]),ae={name:"signInTOTP",methods:{GetLocale:u},props:{data:""},computed:{getLocaleText(){return u("OTP from your authenticator")}}},le=["placeholder"];function de(s,e,l,d,a,h){return f((i(),r("input",{class:"form-control totp",required:"",id:"totp",maxlength:"6",type:"text",inputmode:"numeric",autocomplete:"one-time-code",placeholder:this.getLocaleText,"onUpdate:modelValue":e[0]||(e[0]=o=>this.data.totp=o)},null,8,le)),[[k,this.data.totp]])}const ce=g(ae,[["render",de]]),ue={name:"signin",components:{SignInTOTP:ce,SignInInput:ne,LocaleText:I,RemoteServerList:se,Message:B},async setup(){const s=C();let e="dark",l=!1,d;return s.IsElectronApp||await Promise.all([_("/api/getDashboardTheme",{},a=>{e=a.data}),_("/api/isTotpEnabled",{},a=>{l=a.data}),_("/api/getDashboardVersion",{},a=>{d=a.data})]),s.removeActiveCrossServer(),{store:s,theme:e,totpEnabled:l,version:d}},data(){return{data:{username:"",password:"",totp:""},loginError:!1,loginErrorMessage:"",loading:!1}},computed:{getMessages(){return this.store.Messages.filter(s=>s.show)},applyLocale(s){return u(s)}},methods:{GetLocale:u,async auth(){this.data.username&&this.data.password&&(this.totpEnabled&&this.data.totp||!this.totpEnabled)?(this.loading=!0,await D("/api/authenticate",this.data,s=>{s.status?(this.loginError=!1,this.$refs.signInBtn.classList.add("signedIn"),s.message?this.$router.push("/welcome"):this.store.Redirect!==void 0?this.$router.push(this.store.Redirect):this.$router.push("/")):(this.loginError=!0,this.loginErrorMessage=s.message,document.querySelectorAll("input[required]").forEach(e=>{e.classList.remove("is-valid"),e.classList.add("is-invalid")}),this.loading=!1)})):document.querySelectorAll("input[required]").forEach(s=>{s.value.length===0?(s.classList.remove("is-valid"),s.classList.add("is-invalid")):(s.classList.remove("is-invalid"),s.classList.add("is-valid"))})}}},me=["data-bs-theme"],he={class:"login-box m-auto"},pe={class:"m-auto",style:{width:"700px"}},fe={class:"mb-0 text-body"},ge={key:0,class:"alert alert-danger mt-2 mb-0",role:"alert"},be={class:"form-group text-body"},ve={class:"form-group text-body"},ye={key:0,class:"form-group text-body"},xe=["disabled"],_e={key:0,class:"d-flex w-100"},$e={key:1,class:"d-flex w-100 align-items-center"},ke={key:3,class:"d-flex mt-3"},Se={class:"form-check form-switch ms-auto"},we={class:"form-check-label",for:"flexSwitchCheckChecked"},Te={class:"text-muted pb-3 d-block w-100 text-center mt-3"},Ce={class:"messageCentre text-body position-absolute end-0 m-3"};function Le(s,e,l,d,a,h){const o=c("LocaleText"),b=c("SignInInput"),v=c("SignInTOTP"),p=c("RemoteServerList"),x=c("Message");return i(),r("div",{class:"container-fluid login-container-fluid d-flex main flex-column py-4 text-body h-100",style:{"overflow-y":"scroll"},"data-bs-theme":this.theme},[t("div",he,[t("div",pe,[t("h4",fe,[n(o,{t:"Welcome to"})]),e[7]||(e[7]=t("span",{class:"dashboardLogo display-3"},[t("strong",null,"WGDashboard")],-1)),a.loginError?(i(),r("div",ge,[n(o,{t:this.loginErrorMessage},null,8,["t"])])):y("",!0),this.store.CrossServerConfiguration.Enable?(i(),S(p,{key:2})):(i(),r("form",{key:1,onSubmit:e[0]||(e[0]=m=>{m.preventDefault(),this.auth()})},[t("div",be,[e[2]||(e[2]=t("label",{for:"username",class:"text-left",style:{"font-size":"1rem"}},[t("i",{class:"bi bi-person-circle"})],-1)),n(b,{id:"username",data:this.data,type:"text",placeholder:"Username"},null,8,["data"])]),t("div",ve,[e[3]||(e[3]=t("label",{for:"password",class:"text-left",style:{"font-size":"1rem"}},[t("i",{class:"bi bi-key-fill"})],-1)),n(b,{id:"password",data:this.data,type:"password",placeholder:"Password"},null,8,["data"])]),d.totpEnabled?(i(),r("div",ye,[e[4]||(e[4]=t("label",{for:"totp",class:"text-left",style:{"font-size":"1rem"}},[t("i",{class:"bi bi-lock-fill"})],-1)),n(v,{data:this.data},null,8,["data"])])):y("",!0),t("button",{class:"btn btn-lg btn-dark ms-auto mt-5 w-100 d-flex btn-brand signInBtn",disabled:this.loading,ref:"signInBtn"},[this.loading?(i(),r("span",$e,[n(o,{t:"Signing In..."}),e[6]||(e[6]=t("span",{class:"spinner-border ms-auto spinner-border-sm",role:"status"},null,-1))])):(i(),r("span",_e,[n(o,{t:"Sign In"}),e[5]||(e[5]=t("i",{class:"ms-auto bi bi-chevron-right"},null,-1))]))],8,xe)],32)),this.store.IsElectronApp?y("",!0):(i(),r("div",ke,[t("div",Se,[f(t("input",{"onUpdate:modelValue":e[1]||(e[1]=m=>this.store.CrossServerConfiguration.Enable=m),class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked"},null,512),[[A,this.store.CrossServerConfiguration.Enable]]),t("label",we,[n(o,{t:"Access Remote Server"})])])]))])]),t("small",Te,[R(" WGDashboard "+T(this.version)+" | Developed with ❤️ by ",1),e[8]||(e[8]=t("a",{href:"https://github.com/donaldzou",target:"_blank"},[t("strong",null,"Donald Zou")],-1))]),t("div",Ce,[n(V,{name:"message",tag:"div",class:"position-relative"},{default:P(()=>[(i(!0),r(L,null,E(h.getMessages.slice().reverse(),m=>(i(),S(x,{message:m,key:m.id},null,8,["message"]))),128))]),_:1})])],8,me)}const Ae=g(ue,[["render",Le],["__scopeId","data-v-eca07c7a"]]);export{Ae as default};
