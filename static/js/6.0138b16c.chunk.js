(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{1191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(42),l=a(56),c=a(4),o=a(52),i=a(411),d=a(25),u=a(404),m=a(9),b=a.n(m),j=a(11),f=function(e){return r.a.createElement(c.a,b()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===j.a.OS?d.g.large:d.g.normal},e.style]}))},g=a(121),y=a(96),p=a(51),h=a(43),O=function(e){var t=Object(n.useContext)(p.a).darkMode,a=Object(h.a)(),s=a.background,l=a.textLight;return r.a.createElement(y.d,b()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:s,borderWidth:1,borderColor:t?"white":l}}))},E=function(){var e=Object(n.useContext)(p.a).darkMode,t=Object(h.a)(),a=t.background,s=t.textLight,l=Object(u.a)("http://twitter.com/BTCStandardHash","","_blank"),c=Object(u.a)("https://github.com/Standard-Hashrate-Group","","_blank"),o=Object(u.a)("https://www.1-b.tc","","_blank"),i=Object(u.a)("https://www.reddit.com/user/BTCStandardHashrate","","_blank"),d=Object(u.a)("https://discord.com/channels/791170396316893255/791170396765945886","","_blank");return r.a.createElement(g.a,{style:{width:"100%",justifyContent:"center"}},r.a.createElement(O,{type:"github-alt",onPress:c}),r.a.createElement(O,{type:"twitter",onPress:l}),r.a.createElement(O,{type:"wordpress",onPress:o}),r.a.createElement(O,{type:"twitch",onPress:i}),r.a.createElement(y.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:a,reverseColor:e?"white":"#7289da",style:{backgroundColor:a},containerStyle:{borderWidth:1,borderColor:e?"white":s},onPress:d}))},v=a(80),k={us:a(1192),uk:a(1193),cn:a(1194),kr:a(1195)},x=function(e){var t=e.name,a=e.locale,n=Object(o.g)(),c=Object(o.h)();return r.a.createElement(l.a,{onPress:function(){n.push(c.pathname+"?locale="+a)},style:{marginHorizontal:4}},r.a.createElement(s.a,{source:k[t],style:{width:30,height:20}}))};t.a=function(){Object(u.a)("https://dashboard.alchemyapi.io/signup","","_blank");return r.a.createElement(f,{noTopMargin:!0},r.a.createElement(c.a,{style:{width:"100%",padding:d.g.normal,alignItems:"center"}},r.a.createElement(E,null),r.a.createElement(v.a,{note:!0,style:{marginTop:d.g.tiny}},"Built with \u2764\ufe0f by Standard Hashrate (v",i.a.manifest.version,")"),r.a.createElement(g.a,{style:{marginTop:d.g.small}},r.a.createElement(x,{name:"uk",locale:"en"}),r.a.createElement(x,{name:"cn",locale:"zh"}))))}},1192:function(e,t,a){e.exports=a.p+"static/media/us.d367121f.png"},1193:function(e,t,a){e.exports=a.p+"static/media/uk.934852d7.png"},1194:function(e,t,a){e.exports=a.p+"static/media/cn.baedda5d.png"},1195:function(e,t,a){e.exports=a.p+"static/media/kr.146730ea.png"},1197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(25),l=a(43),c=a(316),o=a(121),i=a(80);t.a=function(e){var t=Object(l.a)().accent;return r.a.createElement(o.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:s.g.small}},r.a.createElement(i.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:s.d?24:18,paddingBottom:s.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(c.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:s.g.tiny}}))}},1199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(4),l=a(25),c=a(80);t.a=function(e){var t=e.error;return r.a.createElement(s.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:l.g.tiny,marginTop:l.g.small}},t.code&&r.a.createElement(c.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),r.a.createElement(c.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1200:function(e,t,a){"use strict";var n=a(9),r=a.n(n),s=a(10),l=a.n(s),c=a(0),o=a.n(c),i=a(4),d=a(25),u=a(51),m=a(43),b=a(407);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(e){var t=Object(c.useContext)(u.a).darkMode,a=Object(m.a)(),n=a.backgroundLight,s=a.borderDark,l=Object(b.a)().border;return o.a.createElement(i.a,r()({},e,{style:[f(f({},l({color:t?s:n})),{},{backgroundColor:n,marginTop:d.g.normal+d.g.small,padding:d.g.small+d.g.tiny}),e.style]}))}},1201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(90),l=a(25);t.a=function(){return r.a.createElement(s.a,{size:"large",style:{marginVertical:l.g.large}})}},1207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(25),l=a(43),c=a(404),o=a(121),i=a(80);t.a=function(e){var t=Object(l.a)(),a=t.textMedium,n=t.textLight,d=t.placeholder,u=Object(c.a)(e.url||"","","_blank"),m=e.disabled?"N/A":e.text?e.text+(e.suffix?" "+e.suffix:""):"Fetching\u2026";return r.a.createElement(o.a,{style:{justifyContent:"space-between",marginTop:4}},r.a.createElement(i.a,{note:!s.d,fontWeight:"bold",style:{color:e.disabled?d:a}},e.label),r.a.createElement(i.a,{note:!s.d,onPress:e.url?u:void 0,style:{color:e.disabled?d:e.text?a:n,textDecorationLine:e.url?"underline":"none"}},m))}},1344:function(e,t,a){var n={"./af":1208,"./af.js":1208,"./ar":1209,"./ar-dz":1210,"./ar-dz.js":1210,"./ar-kw":1211,"./ar-kw.js":1211,"./ar-ly":1212,"./ar-ly.js":1212,"./ar-ma":1213,"./ar-ma.js":1213,"./ar-sa":1214,"./ar-sa.js":1214,"./ar-tn":1215,"./ar-tn.js":1215,"./ar.js":1209,"./az":1216,"./az.js":1216,"./be":1217,"./be.js":1217,"./bg":1218,"./bg.js":1218,"./bm":1219,"./bm.js":1219,"./bn":1220,"./bn-bd":1221,"./bn-bd.js":1221,"./bn.js":1220,"./bo":1222,"./bo.js":1222,"./br":1223,"./br.js":1223,"./bs":1224,"./bs.js":1224,"./ca":1225,"./ca.js":1225,"./cs":1226,"./cs.js":1226,"./cv":1227,"./cv.js":1227,"./cy":1228,"./cy.js":1228,"./da":1229,"./da.js":1229,"./de":1230,"./de-at":1231,"./de-at.js":1231,"./de-ch":1232,"./de-ch.js":1232,"./de.js":1230,"./dv":1233,"./dv.js":1233,"./el":1234,"./el.js":1234,"./en-au":1235,"./en-au.js":1235,"./en-ca":1236,"./en-ca.js":1236,"./en-gb":1237,"./en-gb.js":1237,"./en-ie":1238,"./en-ie.js":1238,"./en-il":1239,"./en-il.js":1239,"./en-in":1240,"./en-in.js":1240,"./en-nz":1241,"./en-nz.js":1241,"./en-sg":1242,"./en-sg.js":1242,"./eo":1243,"./eo.js":1243,"./es":1244,"./es-do":1245,"./es-do.js":1245,"./es-mx":1246,"./es-mx.js":1246,"./es-us":1247,"./es-us.js":1247,"./es.js":1244,"./et":1248,"./et.js":1248,"./eu":1249,"./eu.js":1249,"./fa":1250,"./fa.js":1250,"./fi":1251,"./fi.js":1251,"./fil":1252,"./fil.js":1252,"./fo":1253,"./fo.js":1253,"./fr":1254,"./fr-ca":1255,"./fr-ca.js":1255,"./fr-ch":1256,"./fr-ch.js":1256,"./fr.js":1254,"./fy":1257,"./fy.js":1257,"./ga":1258,"./ga.js":1258,"./gd":1259,"./gd.js":1259,"./gl":1260,"./gl.js":1260,"./gom-deva":1261,"./gom-deva.js":1261,"./gom-latn":1262,"./gom-latn.js":1262,"./gu":1263,"./gu.js":1263,"./he":1264,"./he.js":1264,"./hi":1265,"./hi.js":1265,"./hr":1266,"./hr.js":1266,"./hu":1267,"./hu.js":1267,"./hy-am":1268,"./hy-am.js":1268,"./id":1269,"./id.js":1269,"./is":1270,"./is.js":1270,"./it":1271,"./it-ch":1272,"./it-ch.js":1272,"./it.js":1271,"./ja":1273,"./ja.js":1273,"./jv":1274,"./jv.js":1274,"./ka":1275,"./ka.js":1275,"./kk":1276,"./kk.js":1276,"./km":1277,"./km.js":1277,"./kn":1278,"./kn.js":1278,"./ko":1279,"./ko.js":1279,"./ku":1280,"./ku.js":1280,"./ky":1281,"./ky.js":1281,"./lb":1282,"./lb.js":1282,"./lo":1283,"./lo.js":1283,"./lt":1284,"./lt.js":1284,"./lv":1285,"./lv.js":1285,"./me":1286,"./me.js":1286,"./mi":1287,"./mi.js":1287,"./mk":1288,"./mk.js":1288,"./ml":1289,"./ml.js":1289,"./mn":1290,"./mn.js":1290,"./mr":1291,"./mr.js":1291,"./ms":1292,"./ms-my":1293,"./ms-my.js":1293,"./ms.js":1292,"./mt":1294,"./mt.js":1294,"./my":1295,"./my.js":1295,"./nb":1296,"./nb.js":1296,"./ne":1297,"./ne.js":1297,"./nl":1298,"./nl-be":1299,"./nl-be.js":1299,"./nl.js":1298,"./nn":1300,"./nn.js":1300,"./oc-lnc":1301,"./oc-lnc.js":1301,"./pa-in":1302,"./pa-in.js":1302,"./pl":1303,"./pl.js":1303,"./pt":1304,"./pt-br":1305,"./pt-br.js":1305,"./pt.js":1304,"./ro":1306,"./ro.js":1306,"./ru":1307,"./ru.js":1307,"./sd":1308,"./sd.js":1308,"./se":1309,"./se.js":1309,"./si":1310,"./si.js":1310,"./sk":1311,"./sk.js":1311,"./sl":1312,"./sl.js":1312,"./sq":1313,"./sq.js":1313,"./sr":1314,"./sr-cyrl":1315,"./sr-cyrl.js":1315,"./sr.js":1314,"./ss":1316,"./ss.js":1316,"./sv":1317,"./sv.js":1317,"./sw":1318,"./sw.js":1318,"./ta":1319,"./ta.js":1319,"./te":1320,"./te.js":1320,"./tet":1321,"./tet.js":1321,"./tg":1322,"./tg.js":1322,"./th":1323,"./th.js":1323,"./tk":1324,"./tk.js":1324,"./tl-ph":1325,"./tl-ph.js":1325,"./tlh":1326,"./tlh.js":1326,"./tr":1327,"./tr.js":1327,"./tzl":1328,"./tzl.js":1328,"./tzm":1329,"./tzm-latn":1330,"./tzm-latn.js":1330,"./tzm.js":1329,"./ug-cn":1331,"./ug-cn.js":1331,"./uk":1332,"./uk.js":1332,"./ur":1333,"./ur.js":1333,"./uz":1334,"./uz-latn":1335,"./uz-latn.js":1335,"./uz.js":1334,"./vi":1336,"./vi.js":1336,"./x-pseudo":1337,"./x-pseudo.js":1337,"./yo":1338,"./yo.js":1338,"./zh-cn":1339,"./zh-cn.js":1339,"./zh-hk":1340,"./zh-hk.js":1340,"./zh-mo":1341,"./zh-mo.js":1341,"./zh-tw":1342,"./zh-tw.js":1342};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=1344},1346:function(e,t,a){e.exports=a.p+"static/media/empty-token.e8aa64c5.png"},1347:function(e,t,a){e.exports=a.p+"static/media/ETH.ab794f02.png"},1351:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),s=a(0),l=a.n(s),c=a(236),o=a(11),i=a(4),d=a(1190),u=a.n(d),m=a(137),b=a.n(m),j=a(409),f=a(316),g=a(405),y=a(406),p=a(1199),h=a(59),O=a(1197),E=function(e){var t=Object(h.a)(),a=Object(s.useState)(!0),n=r()(a,2),c=n[0],o=n[1],d=e.expanded&&c,u=d?void 0:t("change");return l.a.createElement(i.a,{style:e.style},l.a.createElement(O.a,{text:e.title,buttonText:u,onPressButton:function(){o(!0),null==e.onExpand||e.onExpand()}}),l.a.createElement(i.a,{style:{display:d?"flex":"none"}},e.children))},v=a(121),k=a(1200),x=a(1201),w=a(1207),S=a(9),P=a.n(S),z=a(10),C=a.n(z),T=a(56),D=a(1345),L=a(43),W=a(407);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){C()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=function(e){var t=Object(L.a)(),a=t.borderDark,n=t.accent,r=t.overlay,s=Object(W.a)().border,c=Object(L.a)(),o=c.background,d=c.backgroundLight;return l.a.createElement(D.a,{style:e.containerStyle},(function(t){var c=t.hovered;return l.a.createElement(T.a,{activeOpacity:.7,underlayColor:r,onPress:e.onPress},l.a.createElement(i.a,P()({},e,{style:[M(M({},s({color:e.selected?n:a})),{},{backgroundColor:c&&!e.disabled?d:o}),e.style]})))}))},_=a(80),B=a(408),A=a(25),R=a(21),N=function(e){return l.a.createElement(_.a,{caption:A.d,disabled:e.disabled,style:e.style},Object(R.c)(e.amount||e.token.balance,e.token.decimals,8))},U=a(42),q=function(e){var t=Object(L.a)().backgroundLight,n=Object(s.useState)(!1),c=r()(n,2),o=c[0],d=c[1],u=e.small?22:27,m=a(1346),b=a(1347),j=e.replaceWETH&&Object(R.h)(e.token)?b:{uri:e.token.logoURI};return l.a.createElement(i.a,{style:[{width:u,height:u,backgroundColor:e.disabled?t:"white",borderRadius:u/2},e.style]},l.a.createElement(U.a,{source:!e.token.logoURI||o?m:j,onError:function(){return d(!0)},style:{width:"100%",height:"100%",borderRadius:u/2,opacity:e.disabled?.5:1}}))},F=function(e){return l.a.createElement(_.a,{medium:!0,caption:!0,disabled:e.disabled,style:{marginLeft:A.g.tiny}},e.token.symbol)},J=a(1191),G=a(412),V=a(171),K=a(2),Q=a.n(K),X=a(57),Y=a(380),Z=a(590),$=function(){var e=Object(Z.b)(),t=e.cancelOrder,a=e.queryOrderFilledEvents,n=Object(s.useContext)(X.b),l=n.provider,c=n.signer,o=n.kovanSigner,i=n.address,d=n.tokens,u=Object(s.useState)(0),m=r()(u,2),j=m[0],f=m[1],g=Object(s.useState)(),y=r()(g,2),p=y[0],h=y[1],O=Object(s.useState)(),E=r()(O,2),v=E[0],k=E[1],x=Object(s.useState)(!0),w=r()(x,2),S=w[0],P=w[1],z=Object(s.useState)(!1),C=r()(z,2),T=C[0],D=C[1],L=Object(s.useState)(),W=r()(L,2),H=W[0],M=W[1];b()((function(){var e,t;return Q.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(l&&c&&o&&i&&d)){a.next=13;break}return P(!0),a.prev=2,a.next=5,Q.a.awrap(Object(Y.a)(c));case 5:return e=a.sent,a.next=8,Q.a.awrap(Object(Y.b)(l,c,o,d,e));case 8:t=a.sent,h(t);case 10:return a.prev=10,P(!1),a.finish(10);case 13:case"end":return a.stop()}}),null,null,[[2,,10,13]],Promise)}),[l,c,o,i,d,j]),b()((function(){return Q.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(M(void 0),!v||!c){e.next=14;break}return e.t0=M,e.t1=Q.a,e.t2=a,e.next=7,Q.a.awrap(v.hash());case 7:return e.t3=e.sent,e.t4=c,e.t5=(0,e.t2)(e.t3,e.t4),e.next=12,e.t1.awrap.call(e.t1,e.t5);case 12:e.t6=e.sent,(0,e.t0)(e.t6);case 14:case"end":return e.stop()}}),null,null,null,Promise)}),[v,a]);var I=Object(s.useCallback)((function(){var e;return Q.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!v||!c){a.next=13;break}return D(!0),a.prev=2,a.next=5,Q.a.awrap(t(v,c));case 5:return e=a.sent,a.next=8,Q.a.awrap(e.wait());case 8:k(void 0),f(Date.now());case 10:return a.prev=10,D(!1),a.finish(10);case 13:case"end":return a.stop()}}),null,null,[[2,,10,13]],Promise)}),[v,c]);return{lastTimeRefreshed:j,myOrders:p,loading:S,selectedOrder:v,setSelectedOrder:k,onCancelOrder:I,cancellingOrder:T,filledEvents:H}},ee=a(410),te=function(){var e=$();return l.a.createElement(i.a,{style:{marginTop:A.g.large}},l.a.createElement(ae,{state:e}),l.a.createElement(oe,{state:e}))},ae=function(e){var t=Object(h.a)();return l.a.createElement(i.a,null,l.a.createElement(E,{title:t("pool-daily-mined-history"),expanded:!e.state.selectedOrder,onExpand:function(){return e.state.setSelectedOrder()}},l.a.createElement(ne,{state:e.state})),e.state.selectedOrder&&l.a.createElement(se,{order:e.state.selectedOrder,selected:!0,onSelectOrder:function(){return e.state.setSelectedOrder()}}))},ne=function(e){var t=e.state,a=Object(s.useCallback)((function(e){var a=e.item;return l.a.createElement(se,{key:a.address,order:a,selected:!1,onSelectOrder:t.setSelectedOrder})}),[t.setSelectedOrder]);return t.loading||!t.myOrders?l.a.createElement(x.a,null):0===t.myOrders.length?l.a.createElement(re,null):l.a.createElement(c.a,{data:t.myOrders,renderItem:a})},re=function(){var e=Object(h.a)();return l.a.createElement(i.a,{style:{margin:A.g.normal}},l.a.createElement(_.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},e("you-dont-have-limit-orders")))},se=function(e){var t=Object(h.a)(),a=e.order,n=a.amountIn,r=a.amountOutMin,c=a.fromToken,o=a.toToken,d="Open"!==e.order.status(),u=V.a.fromTokens(r,n,o,c),m=Object(s.useCallback)((function(){return e.onSelectOrder(e.order)}),[e.onSelectOrder,e.order]);return l.a.createElement(I,{selected:e.selected,onPress:m,containerStyle:{marginBottom:10}},l.a.createElement(v.a,{style:{alignItems:"center"}},l.a.createElement(i.a,null,l.a.createElement(le,{token:c,amount:n,disabled:d,buy:!1}),l.a.createElement(i.a,{style:{height:A.g.tiny}}),l.a.createElement(le,{token:o,amount:r,disabled:d,buy:!0})),l.a.createElement(ce,{label:t("price"),value:e.order.canceled?t("canceled"):u.toString(8),disabled:d,minWidth:0})))},le=function(e){var t=e.token,a=e.amount,n=e.disabled,r=e.buy,s=Object(L.a)(),c=s.green,o=s.red,i=s.disabled;return l.a.createElement(v.a,{style:{alignItems:"center"}},l.a.createElement(q,{small:!0,token:t,disabled:n}),l.a.createElement(_.a,{fontWeight:"bold",note:!0,style:{color:n?i:r?c:o,marginLeft:A.g.tiny}},r?"\ufe62":"\ufe63"),l.a.createElement(N,{token:t,amount:a,disabled:n}),A.d&&l.a.createElement(F,{token:t,disabled:n}))},ce=function(e){var t=e.label,a=e.value,n=e.disabled,r=e.minWidth,s=Object(L.a)(),c=s.textMedium,o=s.textLight,d=s.disabled;return l.a.createElement(i.a,{style:{flex:r?0:1,minWidth:r,marginLeft:A.g.tiny}},l.a.createElement(_.a,{note:!0,style:{textAlign:"right",color:n?d:o}},t),l.a.createElement(_.a,{caption:!0,light:!0,style:{textAlign:"right",color:n?d:c}},a))},oe=function(e){var t,a,n,r=e.state,c=Object(h.a)(),o=r.selectedOrder,i=o?Object(R.c)(o.amountIn,o.fromToken.decimals):void 0,d=o?Object(R.c)(o.amountOutMin,o.toToken.decimals):void 0,m=o?Object(R.c)(o.filledAmountIn,o.fromToken.decimals):void 0,b=Object(s.useMemo)((function(){if(o){var e=new Date(1e3*o.deadline.toNumber()),t=Date.now(),a=u()(e).diff(t);return u()(e).isAfter(t)?u.a.utc(a).format("HH[h] mm[m]"):null}}),[o]),j=!r.selectedOrder;return l.a.createElement(k.a,null,l.a.createElement(w.a,{label:c("day-btc-total-reward"),text:null==o?void 0:o.status(),disabled:j}),l.a.createElement(w.a,{label:c("day-new-staked-users"),text:m,suffix:null==o||null==(t=o.fromToken)?void 0:t.symbol,disabled:j}),l.a.createElement(w.a,{label:c("day-total-eligible-btcsts"),text:i,suffix:null==o||null==(a=o.fromToken)?void 0:a.symbol,disabled:j}),l.a.createElement(w.a,{label:c("accumulate-mined-btc"),text:d,suffix:null==o||null==(n=o.toToken)?void 0:n.symbol,disabled:j}),b&&l.a.createElement(w.a,{label:c("day-lwm"),text:b,disabled:j}),l.a.createElement(ie,{state:r}),l.a.createElement(de,{state:r}))},ie=function(e){var t=e.state,a=Object(h.a)();return l.a.createElement(i.a,null,t.filledEvents&&t.filledEvents.map((function(e,t){var n=e.transactionHash,r=n.substring(0,10)+"..."+n.substring(n.length-8);return l.a.createElement(w.a,{key:t,label:a("filled-tx-no")+t,text:r,url:"https://etherscan.io/tx/"+n})})))},de=function(e){var t=e.state,a=Object(s.useState)({}),n=r()(a,2),c=n[0],o=n[1];return b()((function(){return o({})}),[t.selectedOrder]),l.a.createElement(i.a,{style:{marginTop:A.g.normal}},l.a.createElement(ue,{state:t,onError:o}),c.message&&4001!==c.code&&l.a.createElement(p.a,{error:c}))},ue=function(e){var t=e.state,a=e.onError,n=Object(h.a)(),r=Object(s.useCallback)((function(){a({}),t.onCancelOrder().catch(a)}),[t.onCancelOrder,a]),c=!t.selectedOrder||"Open"!==t.selectedOrder.status();return l.a.createElement(f.a,{title:n("cancel-order"),loading:t.cancellingOrder,onPress:r,disabled:c})};t.default=function(){var e=Object(h.a)();return l.a.createElement(ee.a,null,l.a.createElement(g.a,null,l.a.createElement(j.a,null),l.a.createElement(y.a,null,l.a.createElement(B.a,{text:e("pool-history")}),l.a.createElement(_.a,{light:!0},e("pool-history-desc")),l.a.createElement(te,null)),"web"===o.a.OS&&l.a.createElement(J.a,null)),l.a.createElement(G.c,null))}}}]);
//# sourceMappingURL=6.0138b16c.chunk.js.map