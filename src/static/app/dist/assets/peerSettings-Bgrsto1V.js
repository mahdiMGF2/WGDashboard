import{_ as u,D as c,q as n,j as m,a as r,c as p,b as e,d as a,t as b,m as i,s as d,n as h,X as _,e as f}from"./index-DOaPWS1X.js";import{L as g}from"./localeText-CaAXeE0W.js";const v={name:"peerSettings",components:{LocaleText:g},props:{selectedPeer:Object},data(){return{data:void 0,dataChanged:!1,showKey:!1,saving:!1}},setup(){return{dashboardConfigurationStore:c()}},methods:{reset(){this.selectedPeer&&(this.data=JSON.parse(JSON.stringify(this.selectedPeer)),this.dataChanged=!1)},savePeer(){this.saving=!0,n(`/api/updatePeerSettings/${this.$route.params.id}`,this.data,l=>{this.saving=!1,l.status?this.dashboardConfigurationStore.newMessage("Server","Peer saved","success"):this.dashboardConfigurationStore.newMessage("Server",l.message,"danger"),this.$emit("refresh")})},resetPeerData(l){this.saving=!0,n(`/api/resetPeerData/${this.$route.params.id}`,{id:this.data.id,type:l},t=>{this.saving=!1,t.status?this.dashboardConfigurationStore.newMessage("Server","Peer data usage reset successfully","success"):this.dashboardConfigurationStore.newMessage("Server",t.message,"danger"),this.$emit("refresh")})}},beforeMount(){this.reset()},mounted(){this.$el.querySelectorAll("input").forEach(l=>{l.addEventListener("keyup",()=>{this.dataChanged=!0})})}},x={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll"},y={class:"container d-flex h-100 w-100"},w={class:"m-auto modal-dialog-centered dashboardModal"},S={class:"card rounded-3 shadow flex-grow-1"},k={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4 pb-2"},C={class:"mb-0"},P={key:0,class:"card-body px-4 pb-4"},$={class:"d-flex flex-column gap-2 mb-4"},D={class:"d-flex align-items-center"},N={class:"text-muted"},V={class:"ms-auto"},K={for:"peer_name_textbox",class:"form-label"},U={class:"text-muted"},M=["disabled"],A={class:"d-flex position-relative"},O={for:"peer_private_key_textbox",class:"form-label"},R={class:"text-muted"},T=["type","disabled"],q={for:"peer_allowed_ip_textbox",class:"form-label"},L={class:"text-muted"},E=["disabled"],B={for:"peer_endpoint_allowed_ips",class:"form-label"},I={class:"text-muted"},j=["disabled"],J={for:"peer_DNS_textbox",class:"form-label"},z={class:"text-muted"},Q=["disabled"],X={class:"accordion mt-3",id:"peerSettingsAccordion"},F={class:"accordion-item"},G={class:"accordion-header"},H={class:"accordion-button rounded-3 collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#peerSettingsAccordionOptional"},W={id:"peerSettingsAccordionOptional",class:"accordion-collapse collapse","data-bs-parent":"#peerSettingsAccordion"},Y={class:"accordion-body d-flex flex-column gap-2 mb-2"},Z={for:"peer_preshared_key_textbox",class:"form-label"},ee={class:"text-muted"},te=["disabled"],se={for:"peer_mtu",class:"form-label"},oe={class:"text-muted"},ae=["disabled"],le={for:"peer_keep_alive",class:"form-label"},ie={class:"text-muted"},de=["disabled"],ne={class:"d-flex gap-2 align-items-center"},re={class:"d-flex gap-2 ms-auto"},pe={class:"d-flex align-items-center gap-2"},ue=["disabled"],ce=["disabled"];function me(l,t,be,he,_e,fe){const o=m("LocaleText");return r(),p("div",x,[e("div",y,[e("div",w,[e("div",S,[e("div",k,[e("h4",C,[a(o,{t:"Peer Settings"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:t[0]||(t[0]=s=>this.$emit("close"))})]),this.data?(r(),p("div",P,[e("div",$,[e("div",D,[e("small",N,[a(o,{t:"Public Key"})]),e("small",V,[e("samp",null,b(this.data.id),1)])]),e("div",null,[e("label",K,[e("small",U,[a(o,{t:"Name"})])]),i(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[1]||(t[1]=s=>this.data.name=s),id:"peer_name_textbox",placeholder:""},null,8,M),[[d,this.data.name]])]),e("div",null,[e("div",A,[e("label",O,[e("small",R,[a(o,{t:"Private Key"}),e("code",null,[a(o,{t:"(Required for QR Code and Download)"})])])]),e("a",{role:"button",class:"ms-auto text-decoration-none toggleShowKey",onClick:t[2]||(t[2]=s=>this.showKey=!this.showKey)},[e("i",{class:h(["bi",[this.showKey?"bi-eye-slash-fill":"bi-eye-fill"]])},null,2)])]),i(e("input",{type:[this.showKey?"text":"password"],class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[3]||(t[3]=s=>this.data.private_key=s),id:"peer_private_key_textbox",style:{"padding-right":"40px"}},null,8,T),[[_,this.data.private_key]])]),e("div",null,[e("label",q,[e("small",L,[a(o,{t:"Allowed IPs"}),e("code",null,[a(o,{t:"(Required)"})])])]),i(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[4]||(t[4]=s=>this.data.allowed_ip=s),id:"peer_allowed_ip_textbox"},null,8,E),[[d,this.data.allowed_ip]])]),e("div",null,[e("label",B,[e("small",I,[a(o,{t:"Endpoint Allowed IPs"}),e("code",null,[a(o,{t:"(Required)"})])])]),i(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[5]||(t[5]=s=>this.data.endpoint_allowed_ip=s),id:"peer_endpoint_allowed_ips"},null,8,j),[[d,this.data.endpoint_allowed_ip]])]),e("div",null,[e("label",J,[e("small",z,[a(o,{t:"DNS"})])]),i(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[6]||(t[6]=s=>this.data.DNS=s),id:"peer_DNS_textbox"},null,8,Q),[[d,this.data.DNS]])]),e("div",X,[e("div",F,[e("h2",G,[e("button",H,[a(o,{t:"Optional Settings"})])]),e("div",W,[e("div",Y,[e("div",null,[e("label",Z,[e("small",ee,[a(o,{t:"Pre-Shared Key"})])]),i(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[7]||(t[7]=s=>this.data.preshared_key=s),id:"peer_preshared_key_textbox"},null,8,te),[[d,this.data.preshared_key]])]),e("div",null,[e("label",se,[e("small",oe,[a(o,{t:"MTU"})])]),i(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[8]||(t[8]=s=>this.data.mtu=s),id:"peer_mtu"},null,8,ae),[[d,this.data.mtu]])]),e("div",null,[e("label",le,[e("small",ie,[a(o,{t:"Persistent Keepalive"})])]),i(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[9]||(t[9]=s=>this.data.keepalive=s),id:"peer_keep_alive"},null,8,de),[[d,this.data.keepalive]])])])])])]),t[18]||(t[18]=e("hr",null,null,-1)),e("div",ne,[e("strong",null,[a(o,{t:"Reset Data Usage"})]),e("div",re,[e("button",{class:"btn bg-primary-subtle text-primary-emphasis rounded-3 flex-grow-1 shadow-sm",onClick:t[10]||(t[10]=s=>this.resetPeerData("total"))},[t[15]||(t[15]=e("i",{class:"bi bi-arrow-down-up me-2"},null,-1)),a(o,{t:"Total"})]),e("button",{class:"btn bg-primary-subtle text-primary-emphasis rounded-3 flex-grow-1 shadow-sm",onClick:t[11]||(t[11]=s=>this.resetPeerData("receive"))},[t[16]||(t[16]=e("i",{class:"bi bi-arrow-down me-2"},null,-1)),a(o,{t:"Received"})]),e("button",{class:"btn bg-primary-subtle text-primary-emphasis rounded-3 flex-grow-1 shadow-sm",onClick:t[12]||(t[12]=s=>this.resetPeerData("sent"))},[t[17]||(t[17]=e("i",{class:"bi bi-arrow-up me-2"},null,-1)),a(o,{t:"Sent"})])])])]),e("div",pe,[e("button",{class:"btn bg-secondary-subtle border-secondary-subtle text-secondary-emphasis rounded-3 shadow ms-auto px-3 py-2",onClick:t[13]||(t[13]=s=>this.reset()),disabled:!this.dataChanged||this.saving},t[19]||(t[19]=[e("i",{class:"bi bi-arrow-clockwise"},null,-1)]),8,ue),e("button",{class:"btn bg-primary-subtle border-primary-subtle text-primary-emphasis rounded-3 px-3 py-2 shadow",disabled:!this.dataChanged||this.saving,onClick:t[14]||(t[14]=s=>this.savePeer())},t[20]||(t[20]=[e("i",{class:"bi bi-save-fill"},null,-1)]),8,ce)])])):f("",!0)])])])])}const xe=u(v,[["render",me],["__scopeId","data-v-a63ae8cb"]]);export{xe as default};
