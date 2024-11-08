import{_ as V,r as C,o as N,a as l,c as r,b as e,t as _,d as n,n as v,F as O,h as T,B as M,i as m,e as P,C as Y,W,x,E as F,D as G,H as z,m as b,s as g,f as $,q as H,g as Z,w as B,T as K,j as J}from"./index-DOaPWS1X.js";import{L as o}from"./localeText-CaAXeE0W.js";import{d as Q}from"./dayjs.min-D8jwq_wn.js";import{p as R}from"./index-L60y6kc9.js";const X={class:"card rounded-3 shadow-sm"},ee={class:"d-flex gap-3 align-items-center"},te={class:"mb-0"},se={class:"text-muted"},oe={key:0,class:"card-footer p-3 d-flex flex-column gap-2"},ne=["onClick","id"],le={class:"card-body d-flex p-3 gap-3 align-items-center"},ae={__name:"backupGroup",props:{configurationName:String,backups:Array,open:!1,selectedConfigurationBackup:Object},emits:["select"],setup(f,{emit:u}){const t=f,k=u,p=C(t.open);return N(()=>{t.selectedConfigurationBackup&&document.querySelector(`#${t.selectedConfigurationBackup.filename.replace(".conf","")}`).scrollIntoView({behavior:"smooth"})}),(y,a)=>(l(),r("div",X,[e("a",{role:"button",class:"card-body d-flex align-items-center text-decoration-none",onClick:a[0]||(a[0]=c=>p.value=!p.value)},[e("div",ee,[e("h6",te,[e("samp",null,_(f.configurationName),1)]),e("small",se,[n(o,{t:f.backups.length+(f.backups.length>1?" Backups":" Backup")},null,8,["t"])])]),e("h5",{class:v(["ms-auto mb-0 dropdownIcon text-muted",{active:p.value}])},a[1]||(a[1]=[e("i",{class:"bi bi-chevron-down"},null,-1)]),2)]),p.value?(l(),r("div",oe,[(l(!0),r(O,null,T(f.backups,c=>(l(),r("div",{class:"card rounded-3 shadow-sm animate__animated",key:c.filename,onClick:()=>{k("select",c)},id:c.filename.replace(".conf",""),role:"button"},[e("div",le,[e("small",null,[a[2]||(a[2]=e("i",{class:"bi bi-file-earmark me-2"},null,-1)),e("samp",null,_(c.filename),1)]),e("small",null,[a[3]||(a[3]=e("i",{class:"bi bi-clock-history me-2"},null,-1)),e("samp",null,_(M(Q)(c.backupDate).format("YYYY-MM-DD HH:mm:ss")),1)]),e("small",null,[a[4]||(a[4]=e("i",{class:"bi bi-database me-2"},null,-1)),c.database?(l(),m(o,{key:0,t:"Yes"})):(l(),m(o,{key:1,t:"No"}))]),a[5]||(a[5]=e("small",{class:"text-muted ms-auto"},[e("i",{class:"bi bi-chevron-right"})],-1))])],8,ne))),128))])):P("",!0)]))}},ie=V(ae,[["__scopeId","data-v-626f1988"]]),de={class:"d-flex flex-column gap-5",id:"confirmBackup"},re={class:"d-flex flex-column gap-3"},ue={class:"d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3"},ce={class:"mb-0"},me={class:"text-muted mb-1",for:"ConfigurationName"},fe={class:"invalid-feedback"},pe={key:0},ve={key:1},be={class:"mb-0"},ge={class:"row g-3"},_e={class:"col-sm"},ke={class:"text-muted mb-1",for:"PrivateKey"},ye={class:"input-group"},he={class:"col-sm"},xe={class:"text-muted mb-1",for:"PublicKey"},Ce={class:"text-muted mb-1",for:"ListenPort"},Pe={class:"invalid-feedback"},we={key:0},$e={key:1},Be={class:"mb-0"},Ne={class:"text-muted mb-1 d-flex",for:"ListenPort"},De={class:"invalid-feedback"},Le={key:0},Ue={key:1},Ae={class:"accordion",id:"newConfigurationOptionalAccordion"},Ie={class:"accordion-item"},Se={class:"accordion-header"},Ke={class:"accordion-button collapsed rounded-3",type:"button","data-bs-toggle":"collapse","data-bs-target":"#newConfigurationOptionalAccordionCollapse"},Re={id:"newConfigurationOptionalAccordionCollapse",class:"accordion-collapse collapse","data-bs-parent":"#newConfigurationOptionalAccordion"},Ve={class:"accordion-body d-flex flex-column gap-3"},Oe={class:"text-muted mb-1",for:"PreUp"},Te={class:"text-muted mb-1",for:"PreDown"},qe={class:"text-muted mb-1",for:"PostUp"},Ee={class:"text-muted mb-1",for:"PostDown"},je={class:"d-flex flex-column gap-3"},Me={class:"d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3"},Ye={class:"mb-0"},We={key:0},Fe={class:"row g-3"},Ge={class:"col-sm"},ze={class:"card text-bg-success rounded-3"},He={class:"card-body"},Ze={class:"col-sm"},Je={class:"card text-bg-warning rounded-3"},Qe={class:"card-body"},Xe={class:"d-flex"},et=["disabled"],tt={__name:"confirmBackup",props:{selectedConfigurationBackup:Object},setup(f){const u=f,t=Y({ConfigurationName:u.selectedConfigurationBackup.filename.split("_")[0],Backup:u.selectedConfigurationBackup.filename}),k=u.selectedConfigurationBackup.content.split(`
`);for(let i of k){if(i==="[Peer]")break;if(i.length>0){let s=i.replace(" = ","=").split("=");s[0]==="ListenPort"?t[s[0]]=parseInt(s[1]):t[s[0]]=s[1]}}const p=C(!1),y=C(!1),a=C(""),c=W(),h=x(()=>/^[a-zA-Z0-9_=+.-]{1,15}$/.test(t.ConfigurationName)&&t.ConfigurationName.length>0&&!c.Configurations.find(i=>i.Name===t.ConfigurationName)),w=x(()=>{try{window.wireguard.generatePublicKey(t.PrivateKey)}catch{return!1}return!0}),D=x(()=>t.ListenPort>0&&t.ListenPort<=65353&&Number.isInteger(t.ListenPort)&&!c.Configurations.find(i=>parseInt(i.ListenPort)===t.ListenPort)),L=x(()=>{try{return R(t.Address),!0}catch{return!1}}),U=x(()=>L.value&&D.value&&w.value&&h.value);N(()=>{document.querySelector("main").scrollTo({top:0,behavior:"smooth"}),F(()=>w,i=>{i&&(t.PublicKey=window.wireguard.generatePublicKey(t.PrivateKey))},{immediate:!0})});const A=x(()=>{let i;try{i=R(t.Address)}catch{return 0}return i.end-i.start}),I=x(()=>u.selectedConfigurationBackup.database?u.selectedConfigurationBackup.databaseContent.split(`
`).filter(s=>s.search(`INSERT INTO "${t.ConfigurationName}"`)>=0).length:0),S=x(()=>u.selectedConfigurationBackup.database?u.selectedConfigurationBackup.databaseContent.split(`
`).filter(s=>s.search(`INSERT INTO "${t.ConfigurationName}_restrict_access"`)>=0).length:0),q=G(),E=z(),j=async()=>{U.value&&(y.value=!0,await H("/api/addWireguardConfiguration",t,async i=>{i.status?(q.newMessage("Server","Configuration restored","success"),await c.getConfigurations(),await E.push(`/configuration/${t.ConfigurationName}/peers`)):y.value=!1}))};return(i,s)=>(l(),r("div",de,[e("form",re,[e("div",ue,[e("h4",ce,[n(o,{t:"Configuration"})])]),e("div",null,[e("label",me,[e("small",null,[n(o,{t:"Configuration Name"})])]),b(e("input",{type:"text",class:v(["form-control rounded-3",[h.value?"is-valid":"is-invalid"]]),placeholder:"ex. wg1",id:"ConfigurationName","onUpdate:modelValue":s[0]||(s[0]=d=>t.ConfigurationName=d),disabled:"",required:""},null,2),[[g,t.ConfigurationName]]),e("div",fe,[p.value?(l(),r("div",pe,_(a.value),1)):(l(),r("div",ve,[n(o,{t:"Configuration name is invalid. Possible reasons:"}),e("ul",be,[e("li",null,[n(o,{t:"Configuration name already exist."})]),e("li",null,[n(o,{t:"Configuration name can only contain 15 lower/uppercase alphabet, numbers, underscore, equal sign, plus sign, period and hyphen."})])])]))])]),e("div",ge,[e("div",_e,[e("div",null,[e("label",ke,[e("small",null,[n(o,{t:"Private Key"})])]),e("div",ye,[b(e("input",{type:"text",class:v(["form-control rounded-start-3",[w.value?"is-valid":"is-invalid"]]),id:"PrivateKey",required:"","onUpdate:modelValue":s[1]||(s[1]=d=>t.PrivateKey=d),disabled:""},null,2),[[g,t.PrivateKey]])])])]),e("div",he,[e("div",null,[e("label",xe,[e("small",null,[n(o,{t:"Public Key"})])]),b(e("input",{type:"text",class:"form-control rounded-3",id:"PublicKey","onUpdate:modelValue":s[2]||(s[2]=d=>t.PublicKey=d),disabled:""},null,512),[[g,t.PublicKey]])])])]),e("div",null,[e("label",Ce,[e("small",null,[n(o,{t:"Listen Port"})])]),b(e("input",{type:"number",class:v(["form-control rounded-3",[D.value?"is-valid":"is-invalid"]]),placeholder:"0-65353",id:"ListenPort",min:"1",max:"65353","onUpdate:modelValue":s[3]||(s[3]=d=>t.ListenPort=d),disabled:"",required:""},null,2),[[g,t.ListenPort]]),e("div",Pe,[p.value?(l(),r("div",we,_(a.value),1)):(l(),r("div",$e,[n(o,{t:"Listen Port is invalid. Possible reasons:"}),e("ul",Be,[e("li",null,[n(o,{t:"Invalid port."})]),e("li",null,[n(o,{t:"Port is assigned to existing WireGuard Configuration."})])])]))])]),e("div",null,[e("label",Ne,[e("small",null,[n(o,{t:"IP Address/CIDR"})]),e("small",{class:v(["ms-auto",[A.value>0?"text-success":"text-danger"]])},[n(o,{t:A.value+" Available IP Address"},null,8,["t"])],2)]),b(e("input",{type:"text",class:v(["form-control",[L.value?"is-valid":"is-invalid"]]),placeholder:"Ex: 10.0.0.1/24",id:"Address","onUpdate:modelValue":s[4]||(s[4]=d=>t.Address=d),disabled:"",required:""},null,2),[[g,t.Address]]),e("div",De,[p.value?(l(),r("div",Le,_(a.value),1)):(l(),r("div",Ue,[n(o,{t:"IP Address/CIDR is invalid"})]))])]),e("div",Ae,[e("div",Ie,[e("h2",Se,[e("button",Ke,[n(o,{t:"Optional Settings"})])]),e("div",Re,[e("div",Ve,[e("div",null,[e("label",Oe,[e("small",null,[n(o,{t:"PreUp"})])]),b(e("input",{type:"text",class:"form-control rounded-3",id:"PreUp",disabled:"","onUpdate:modelValue":s[5]||(s[5]=d=>t.PreUp=d)},null,512),[[g,t.PreUp]])]),e("div",null,[e("label",Te,[e("small",null,[n(o,{t:"PreDown"})])]),b(e("input",{type:"text",class:"form-control rounded-3",id:"PreDown",disabled:"","onUpdate:modelValue":s[6]||(s[6]=d=>t.PreDown=d)},null,512),[[g,t.PreDown]])]),e("div",null,[e("label",qe,[e("small",null,[n(o,{t:"PostUp"})])]),b(e("input",{type:"text",class:"form-control rounded-3",id:"PostUp",disabled:"","onUpdate:modelValue":s[7]||(s[7]=d=>t.PostUp=d)},null,512),[[g,t.PostUp]])]),e("div",null,[e("label",Ee,[e("small",null,[n(o,{t:"PostDown"})])]),b(e("input",{type:"text",class:"form-control rounded-3",id:"PostDown",disabled:"","onUpdate:modelValue":s[8]||(s[8]=d=>t.PostDown=d)},null,512),[[g,t.PostDown]])])])])])])]),e("div",je,[e("div",Me,[e("h4",Ye,[n(o,{t:"Database File"})]),e("h4",{class:v(["mb-0 ms-auto",[f.selectedConfigurationBackup.database?"text-success":"text-danger"]])},[e("i",{class:v(["bi",[f.selectedConfigurationBackup.database?"bi-check-circle-fill":"bi-x-circle-fill"]])},null,2)],2)]),f.selectedConfigurationBackup.database?(l(),r("div",We,[e("div",Fe,[e("div",Ge,[e("div",ze,[e("div",He,[s[10]||(s[10]=e("i",{class:"bi bi-person-fill me-2"},null,-1)),n(o,{t:"Contain"}),s[11]||(s[11]=$()),e("strong",null,_(I.value),1),s[12]||(s[12]=$()),I.value>1?(l(),m(o,{key:0,t:"Peer"})):(l(),m(o,{key:1,t:"Peer"}))])])]),e("div",Ze,[e("div",Je,[e("div",Qe,[s[13]||(s[13]=e("i",{class:"bi bi-person-fill-lock me-2"},null,-1)),n(o,{t:"Contain"}),s[14]||(s[14]=$()),e("strong",null,_(S.value),1),s[15]||(s[15]=$()),S.value>1?(l(),m(o,{key:0,t:"Restricted Peers"})):(l(),m(o,{key:1,t:"Restricted Peers"}))])])])])])):P("",!0)]),e("div",Xe,[e("button",{class:"btn btn-dark btn-brand rounded-3 px-3 py-2 shadow ms-auto",disabled:!U.value||y.value,onClick:s[9]||(s[9]=d=>j())},[s[16]||(s[16]=e("i",{class:"bi bi-clock-history me-2"},null,-1)),n(o,{t:y.value?"Restoring...":"Restore"},null,8,["t"])],8,et)])]))}},st={class:"mt-md-5 mt-3 text-body"},ot={class:"container mb-4"},nt={class:"mb-5 d-flex align-items-center gap-4"},lt={class:"mb-0"},at={key:0},it={class:"d-flex text-decoration-none text-body flex-grow-1 align-items-center gap-3"},dt={class:"mb-0"},rt={class:"text-muted"},ut={key:0,class:"ms-sm-auto"},ct={class:"text-muted"},mt={key:0,id:"step1Detail"},ft={class:"mb-4"},pt={class:"d-flex gap-3 flex-column"},vt={key:0},bt={class:"card rounded-3"},gt={class:"card-body"},_t={class:"mb-0"},kt={class:"my-5",key:"step2",id:"step2"},yt={class:"text-muted"},ht={__name:"restoreConfiguration",setup(f){const u=C(void 0);N(()=>{Z("/api/getAllWireguardConfigurationBackup",{},y=>{u.value=y.data})});const t=C(!1),k=C(void 0),p=C("");return(y,a)=>{const c=J("RouterLink");return l(),r("div",st,[e("div",ot,[e("div",nt,[n(c,{to:"/",class:"btn btn-dark btn-brand p-2 shadow",style:{"border-radius":"100%"}},{default:B(()=>a[1]||(a[1]=[e("h2",{class:"mb-0",style:{"line-height":"0"}},[e("i",{class:"bi bi-arrow-left-circle"})],-1)])),_:1}),e("h2",lt,[n(o,{t:"Restore Configuration"})])]),n(K,{name:"fade",appear:""},{default:B(()=>[u.value?(l(),r("div",at,[e("div",{class:v(["d-flex mb-5 align-items-center steps",{active:!t.value}]),role:"button",onClick:a[0]||(a[0]=h=>t.value=!1),key:"step1"},[e("div",it,[a[2]||(a[2]=e("h1",{class:"mb-0",style:{"line-height":"0"}},[e("i",{class:"bi bi-1-circle-fill"})],-1)),e("div",null,[e("h4",dt,[n(o,{t:"Step 1"})]),e("small",rt,[t.value?(l(),m(o,{key:1,t:"Click to change a backup"})):(l(),m(o,{key:0,t:"Select a backup you want to restore"}))])])]),n(K,{name:"zoomReversed"},{default:B(()=>[t.value?(l(),r("div",ut,[e("small",ct,[n(o,{t:"Selected Backup"})]),e("h6",null,[e("samp",null,_(k.value.filename),1)])])):P("",!0)]),_:1})],2),t.value?P("",!0):(l(),r("div",mt,[e("div",ft,[e("div",pt,[(l(!0),r(O,null,T(Object.keys(u.value.NonExistingConfigurations),h=>(l(),m(ie,{onSelect:w=>{k.value=w,p.value=h,t.value=!0},selectedConfigurationBackup:k.value,open:p.value===h,"configuration-name":h,backups:u.value.NonExistingConfigurations[h]},null,8,["onSelect","selectedConfigurationBackup","open","configuration-name","backups"]))),256)),Object.keys(u.value.NonExistingConfigurations).length===0?(l(),r("div",vt,[e("div",bt,[e("div",gt,[e("p",_t,[n(o,{t:"You don't have any configuration to restore"})])])])])):P("",!0)])])])),e("div",kt,[e("div",{class:v(["steps d-flex text-decoration-none text-body flex-grow-1 align-items-center gap-3",{active:t.value}])},[a[4]||(a[4]=e("h1",{class:"mb-0",style:{"line-height":"0"}},[e("i",{class:"bi bi-2-circle-fill"})],-1)),e("div",null,[a[3]||(a[3]=e("h4",{class:"mb-0"},"Step 2",-1)),e("small",yt,[t.value?(l(),m(o,{key:1,t:"Confirm & edit restore information"})):(l(),m(o,{key:0,t:"Backup not selected"}))])])],2)]),t.value?(l(),m(tt,{selectedConfigurationBackup:k.value,key:"confirm"},null,8,["selectedConfigurationBackup"])):P("",!0)])):P("",!0)]),_:1})])])}}},$t=V(ht,[["__scopeId","data-v-f0245d51"]]);export{$t as default};
