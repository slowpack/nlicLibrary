(self.webpackChunk=self.webpackChunk||[]).push([[717],{40964:function(N,F,s){"use strict";s.r(F),s.d(F,{default:function(){return oe}});var b=s(30279),j=s.n(b),w=s(46686),f=s.n(w),m=s(93236),T=s(16754),S=s(28682),R=s(35290),o=s.n(R),K=s(411),g=s.n(K),O=s(48086),I=s(4107),M=s(76436),k=s(5966),L=s(90672),A=s(64317),$=s(97462),W=s(83813),B=s(43828);function U(){return E.apply(this,arguments)}function E(){return E=g()(o()().mark(function l(){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,B.request)("/api/accountSettingCurrentUser"));case 1:case"end":return n.stop()}},l)})),E.apply(this,arguments)}function G(){return C.apply(this,arguments)}function C(){return C=g()(o()().mark(function l(){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,B.request)("/api/geographic/province"));case 1:case"end":return n.stop()}},l)})),C.apply(this,arguments)}function H(l){return D.apply(this,arguments)}function D(){return D=g()(o()().mark(function l(a){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,B.request)("/api/geographic/city/".concat(a)));case 1:case"end":return r.stop()}},l)})),D.apply(this,arguments)}function de(){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function l(){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/users"));case 1:case"end":return n.stop()}},l)})),P.apply(this,arguments)}var y={baseView:"baseView___5l5Qi",left:"left___iZSU7",right:"right___xodWH",avatar_title:"avatar_title___D3fZd",avatar:"avatar___jbyNj",button_view:"button_view___g4u7o",area_code:"area_code___JZZ2B",phone_number:"phone_number___R1hkp"},e=s(62086),J=function(a,n,r){var t=n.split("-");t[0]||r("Please input your area code!"),t[1]||r("Please input your phone number!"),r()},Q=function(){var a=(0,B.useRequest)(function(){return U()}),n=a.data,r=a.loading,t=function(){var p=g()(o()().mark(function d(){return o()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:O.ZP.success("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F\u6210\u529F");case 1:case"end":return v.stop()}},d)}));return function(){return p.apply(this,arguments)}}();return(0,e.jsx)("div",{className:y.baseView,children:r?null:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:y.left,children:(0,e.jsxs)(M.ZP,{layout:"vertical",onFinish:t,submitter:{resetButtonProps:{style:{display:"none"}},submitButtonProps:{children:"\u66F4\u65B0\u57FA\u672C\u4FE1\u606F"}},initialValues:j()(j()({},n),{},{phone:n==null?void 0:n.phone.split("-")}),hideRequiredMark:!0,children:[(0,e.jsx)(k.Z,{width:"md",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1!"}]}),(0,e.jsx)(k.Z,{width:"md",name:"name",label:"\u6635\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u6635\u79F0!"}]}),(0,e.jsx)(L.Z,{name:"profile",label:"\u4E2A\u4EBA\u7B80\u4ECB",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB!"}],placeholder:"\u4E2A\u4EBA\u7B80\u4ECB"}),(0,e.jsx)(A.Z,{width:"sm",name:"country",label:"\u56FD\u5BB6/\u5730\u533A",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u56FD\u5BB6\u6216\u5730\u533A!"}],options:[{label:"\u4E2D\u56FD",value:"China"}]}),(0,e.jsxs)(M.ZP.Group,{title:"\u6240\u5728\u7701\u5E02",size:8,children:[(0,e.jsx)(A.Z,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u6240\u5728\u7701!"}],width:"sm",fieldProps:{labelInValue:!0},name:"province",className:y.item,request:g()(o()().mark(function p(){return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",G().then(function(v){var Z=v.data;return Z.map(function(c){return{label:c.name,value:c.id}})}));case 1:case"end":return i.stop()}},p)}))}),(0,e.jsx)($.Z,{name:["province"],children:function(d){var i=d.province;return(0,e.jsx)(A.Z,{params:{key:i==null?void 0:i.value},name:"city",width:"sm",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u6240\u5728\u57CE\u5E02!"}],disabled:!i,className:y.item,request:g()(o()().mark(function v(){return o()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(i!=null&&i.key){c.next=2;break}return c.abrupt("return",[]);case 2:return c.abrupt("return",H(i.key||"").then(function(u){var x=u.data;return x.map(function(V){return{label:V.name,value:V.id}})}));case 3:case"end":return c.stop()}},v)}))})}})]}),(0,e.jsx)(k.Z,{width:"md",name:"address",label:"\u8857\u9053\u5730\u5740",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u8857\u9053\u5730\u5740!"}]}),(0,e.jsxs)(W.Z,{name:"phone",label:"\u8054\u7CFB\u7535\u8BDD",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u8054\u7CFB\u7535\u8BDD!"},{validator:J}],children:[(0,e.jsx)(I.Z,{className:y.area_code}),(0,e.jsx)(I.Z,{className:y.phone_number})]})]})})})})},X=Q,Y=s(65705),q=s(18008),_=s(1537),h=s(38272),ee=function(){var a=function(){return[{title:"\u7ED1\u5B9A\u6DD8\u5B9D",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u6DD8\u5B9D\u8D26\u53F7",actions:[(0,e.jsx)("a",{children:"\u7ED1\u5B9A"},"Bind")],avatar:(0,e.jsx)(Y.Z,{className:"taobao"})},{title:"\u7ED1\u5B9A\u652F\u4ED8\u5B9D",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u652F\u4ED8\u5B9D\u8D26\u53F7",actions:[(0,e.jsx)("a",{children:"\u7ED1\u5B9A"},"Bind")],avatar:(0,e.jsx)(q.Z,{className:"alipay"})},{title:"\u7ED1\u5B9A\u9489\u9489",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u9489\u9489\u8D26\u53F7",actions:[(0,e.jsx)("a",{children:"\u7ED1\u5B9A"},"Bind")],avatar:(0,e.jsx)(_.Z,{className:"dingding"})}]};return(0,e.jsx)(m.Fragment,{children:(0,e.jsx)(h.ZP,{itemLayout:"horizontal",dataSource:a(),renderItem:function(r){return(0,e.jsx)(h.ZP.Item,{actions:r.actions,children:(0,e.jsx)(h.ZP.Item.Meta,{avatar:r.avatar,title:r.title,description:r.description})})}})})},se=ee,ne=s(12028),te=function(){var a=function(){var t=(0,e.jsx)(ne.Z,{checkedChildren:"\u5F00",unCheckedChildren:"\u5173",defaultChecked:!0});return[{title:"\u8D26\u6237\u5BC6\u7801",description:"\u5176\u4ED6\u7528\u6237\u7684\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[t]},{title:"\u7CFB\u7EDF\u6D88\u606F",description:"\u7CFB\u7EDF\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[t]},{title:"\u5F85\u529E\u4EFB\u52A1",description:"\u5F85\u529E\u4EFB\u52A1\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[t]}]},n=a();return(0,e.jsx)(m.Fragment,{children:(0,e.jsx)(h.ZP,{itemLayout:"horizontal",dataSource:n,renderItem:function(t){return(0,e.jsx)(h.ZP.Item,{actions:t.actions,children:(0,e.jsx)(h.ZP.Item.Meta,{title:t.title,description:t.description})})}})})},re=te,ae={strong:(0,e.jsx)("span",{className:"strong",children:"\u5F3A"}),medium:(0,e.jsx)("span",{className:"medium",children:"\u4E2D"}),weak:(0,e.jsx)("span",{className:"weak",children:"\u5F31 Weak"})},ie=function(){var a=function(){return[{title:"\u8D26\u6237\u5BC6\u7801",description:(0,e.jsxs)(e.Fragment,{children:["\u5F53\u524D\u5BC6\u7801\u5F3A\u5EA6\uFF1A",ae.strong]}),actions:[(0,e.jsx)("a",{children:"\u4FEE\u6539"},"Modify")]},{title:"\u5BC6\u4FDD\u624B\u673A",description:"\u5DF2\u7ED1\u5B9A\u624B\u673A\uFF1A138****8293",actions:[(0,e.jsx)("a",{children:"\u4FEE\u6539"},"Modify")]},{title:"\u5BC6\u4FDD\u95EE\u9898",description:"\u672A\u8BBE\u7F6E\u5BC6\u4FDD\u95EE\u9898\uFF0C\u5BC6\u4FDD\u95EE\u9898\u53EF\u6709\u6548\u4FDD\u62A4\u8D26\u6237\u5B89\u5168",actions:[(0,e.jsx)("a",{children:"\u8BBE\u7F6E"},"Set")]},{title:"\u5907\u7528\u90AE\u7BB1",description:"\u5DF2\u7ED1\u5B9A\u90AE\u7BB1\uFF1Aant***sign.com",actions:[(0,e.jsx)("a",{children:"\u4FEE\u6539"},"Modify")]},{title:"MFA \u8BBE\u5907",description:"\u672A\u7ED1\u5B9A MFA \u8BBE\u5907\uFF0C\u7ED1\u5B9A\u540E\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4E8C\u6B21\u786E\u8BA4",actions:[(0,e.jsx)("a",{children:"\u7ED1\u5B9A"},"bind")]}]},n=a();return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(h.ZP,{itemLayout:"horizontal",dataSource:n,renderItem:function(t){return(0,e.jsx)(h.ZP.Item,{actions:t.actions,children:(0,e.jsx)(h.ZP.Item.Meta,{title:t.title,description:t.description})})}})})},ue=ie,z={main:"main___BTxx5",leftMenu:"leftMenu___XPOpZ",right:"right___xc6fs",title:"title___iK6Ie"},le=S.Z.Item,ce=function(){var a={base:"\u57FA\u672C\u8BBE\u7F6E",security:"\u5B89\u5168\u8BBE\u7F6E",binding:"\u8D26\u53F7\u7ED1\u5B9A",notification:"\u65B0\u6D88\u606F\u901A\u77E5"},n=(0,m.useState)({mode:"inline",selectKey:"base"}),r=f()(n,2),t=r[0],p=r[1],d=(0,m.useRef)(),i=function(){requestAnimationFrame(function(){if(!!d.current){var u="inline",x=d.current.offsetWidth;d.current.offsetWidth<641&&x>400&&(u="horizontal"),window.innerWidth<768&&x>400&&(u="horizontal"),p(j()(j()({},t),{},{mode:u}))}})};(0,m.useLayoutEffect)(function(){return d.current&&(window.addEventListener("resize",i),i()),function(){window.removeEventListener("resize",i)}},[d.current]);var v=function(){return Object.keys(a).map(function(u){return(0,e.jsx)(le,{children:a[u]},u)})},Z=function(){var u=t.selectKey;switch(u){case"base":return(0,e.jsx)(X,{});case"security":return(0,e.jsx)(ue,{});case"binding":return(0,e.jsx)(se,{});case"notification":return(0,e.jsx)(re,{});default:return null}};return(0,e.jsx)(T.fT,{children:(0,e.jsxs)("div",{className:z.main,ref:function(u){u&&(d.current=u)},children:[(0,e.jsx)("div",{className:z.leftMenu,children:(0,e.jsx)(S.Z,{mode:t.mode,selectedKeys:[t.selectKey],onClick:function(u){var x=u.key;p(j()(j()({},t),{},{selectKey:x}))},children:v()})}),(0,e.jsxs)("div",{className:z.right,children:[(0,e.jsx)("div",{className:z.title,children:a[t.selectKey]}),Z()]})]})})},oe=ce},46700:function(N,F,s){var b={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":59138,"./be.js":59138,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":84415,"./fy.js":84415,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":95606,"./ss.js":95606,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":90080,"./ur.js":90080,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function j(f){var m=w(f);return s(m)}function w(f){if(!s.o(b,f)){var m=new Error("Cannot find module '"+f+"'");throw m.code="MODULE_NOT_FOUND",m}return b[f]}j.keys=function(){return Object.keys(b)},j.resolve=w,N.exports=j,j.id=46700}}]);