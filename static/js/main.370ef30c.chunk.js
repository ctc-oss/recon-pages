(this.webpackJsonpinteract=this.webpackJsonpinteract||[]).push([[0],{150:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),c=t.n(i),a=t(13),o=t.n(a),u=(t(76),t(5)),l=Object(i.createContext)(),s=function(n){var e=Object(i.useState)({players:[{name:"YOU",color:"green",selections:[],score:null},{name:"CARNAC",color:"red",selections:[],score:null}],images:[],previousPracticeRounds:[],practiceRound:{}}),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(r.jsx)(l.Provider,{value:[c,a],children:n.children})},d=t(8),b=t(23),j=t.n(b),f=t(39),h=(t(79),t(4)),p=t(9),x=t.n(p),g=t(10),O=t(2),m=t(14),v=t(3),y=t(62),w=t.n(y);function k(){var n=Object(h.a)(["\n  font-size: 18;\n  padding: 5px;\n  border-top: 5px solid white;\n  font-weight: bold;\n  text-align: center;\n"]);return k=function(){return n},n}function C(){var n=Object(h.a)(["\n  font-size: 48pt;\n  font-family: Impact, sans-serif;\n"]);return C=function(){return n},n}function S(){var n=Object(h.a)(["\n  padding: 10px;\n"]);return S=function(){return n},n}function I(){var n=Object(h.a)(["\n  padding: 10px;\n  text-align: center;\n  font-size: 24pt;\n  border-bottom: 5px solid white;\n  margin: 0;\n  font-weight: bold;\n"]);return I=function(){return n},n}function P(){var n=Object(h.a)(["\n  flex: 1;\n  text-align: center;\n"]);return P=function(){return n},n}function R(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return R=function(){return n},n}function z(){var n=Object(h.a)(["\n  margin: 6px;\n  border: 5px solid white;\n  border-radius: 10px;\n  flex-direction: row;\n"]);return z=function(){return n},n}function L(){var n=Object(h.a)(["\n  margin-top: 2px;\n  background-color: #444;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  font-family: Futura;\n  min-width: 400px;\n  max-width: 400px;\n  width: 400px;\n"]);return L=function(){return n},n}var M=v.a.div(L()),D=v.a.div(z()),E=v.a.div(R()),B=v.a.div(P()),A=v.a.div(I()),G=v.a.div(S()),F=v.a.div(C()),T=v.a.div(k()),_=function(n){var e=n.home,t=n.away,i=n.bottomDisplay,c=void 0===i?function(){return""}:i,a=n.totalPossible,o=void 0===a?0:a,u=function(n){var e=n.player,t=n.style,i=void 0===t?{}:t,c=o>0?"".concat(e.score," / ").concat(o):e.score,a=o>0?Object(r.jsxs)("div",{children:["(",(e.score/o*100).toFixed(),"%)"]}):null;return Object(r.jsxs)(B,{style:i,children:[Object(r.jsx)(A,{style:{color:e.color},children:e.name}),Object(r.jsxs)(G,{children:[Object(r.jsx)(F,{children:c}),a]})]})},l=c();return Object(r.jsx)(M,{children:Object(r.jsxs)(D,{children:[Object(r.jsxs)(E,{children:[Object(r.jsx)(u,{player:e}),Object(r.jsx)(u,{player:t,style:{borderLeft:"3px solid white"}})]}),l?Object(r.jsx)(T,{children:l}):null]})})},W=(t(27),t(16)),Y=function(n){return Object.keys(n).reduce((function(e,t){return Object(O.a)(Object(O.a)({},e),{},Object(g.a)({},t,!(r=n[t])||"true"!==r&&"false"!==r?r:"true"===r.toLowerCase()));var r}),{})},q=function(){var n=Object(m.a)(x.a.mark((function n(){var e,t,r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("./data/game-data.json");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,r=t.map(Y),n.abrupt("return",{practiceOptions:(a=r,a.filter((function(n){return n.groups&&n.groups.includes(2)}))),gameOptions:(i=r,c=12,i.map((function(n){return{x:n,r:Math.random()}})).sort((function(n,e){return n.r-e.r})).map((function(n){return n.x})).slice(0,c||i.length))});case 8:case"end":return n.stop()}var i,c,a}),n)})));return function(){return n.apply(this,arguments)}}(),N=function(n){return null!==n&&void 0!==n},V=t(65);function H(){var n=Object(h.a)(["\n  height: 18px;\n  width: 18px;\n  background-color: #999;\n  border: 1px solid #555;\n  font-size: 0.7rem;\n  text-align: center;\n  line-height: 1.7;\n  outline: none;\n  border-radius: 4px;\n"]);return H=function(){return n},n}function J(){var n=Object(h.a)(["\n  height: 6px;\n  width: 100%;\n  background-color: #ccc;\n"]);return J=function(){return n},n}function U(){var n=Object(h.a)(["\n  margin-bottom: 10px;\n  font-size: 0.75rem;\n  text-align: center;\n"]);return U=function(){return n},n}function K(){var n=Object(h.a)(["\n  padding: 5px;\n"]);return K=function(){return n},n}function Q(){var n=Object(h.a)(["\n  background-color: white;\n"]);return Q=function(){return n},n}function X(){var n=Object(h.a)(["\n  border: 1px solid lightgray;\n  text-transform: uppercase;\n  font-family: Futura, sans-serif;\n  font-size: 1.4rem;\n  padding: 5px;\n  border-bottom: 5px solid grey;\n  color: darkslategray;\n  margin-top: 10px;\n  cursor: pointer;\n  &:disabled {\n    cursor: auto;\n    color: lightgray;\n  }\n"]);return X=function(){return n},n}function Z(){var n=Object(h.a)(["\n  background: ",";\n  padding: 5px;\n  color: ",";\n  outline: none;\n  border: none;\n  border-radius: ",";\n  transition: text-shadow 0.25s ease;\n  &:hover {\n    cursor: pointer;\n    text-shadow: ",";\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(h.a)(["\n  position: relative;\n  background-color: lightgray;\n  padding: 5px;\n  border-radius: 4px;\n"]);return $=function(){return n},n}function nn(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row;\n  width: 100%;\n"]);return nn=function(){return n},n}function en(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  height: 100%;\n"]);return en=function(){return n},n}var tn=v.a.div(en()),rn=v.a.div(nn()),cn=function(n){var e=n.children;return Object(r.jsx)(tn,{children:Object(r.jsx)(rn,{children:e})})},an=v.a.div($()),on=v.a.button(Z(),(function(n){var e=n.checked,t=n.color;return e?t:"gray"}),(function(n){return n.checked?"white":"black"}),(function(n){return n.left?"4px 0 0 4px":"0 4px 4px 0"}),(function(n){return n.checked?"1px 1px 1px black;":"1px 1px 1px lightgray;"})),un=function(n){var e=n.trueLabel,t=void 0===e?"YES":e,i=n.falseLabel,c=void 0===i?"NO":i,a=n.trueBgColor,o=n.falseBgColor,u=n.onToggle,l=n.defaultValue;return Object(r.jsxs)(an,{children:[Object(r.jsx)(on,{checked:N(l)&&l,color:a,onClick:function(){return u(!0)},left:!0,children:t}),Object(r.jsx)(on,{checked:N(l)&&!l,color:o,onClick:function(){return u(!1)},right:!0,children:c})]})},ln=v.a.button(X()),sn=function(n){var e=n.className,t=n.style,i=n.label,c=n.symbol;return Object(r.jsx)("span",{className:e,style:t,role:"img","aria-label":i,children:String.fromCodePoint(c)})},dn=v.a.div(Q()),bn=v.a.div(K()),jn=v.a.div(U()),fn=v.a.div(J()),hn=v.a.div(H()),pn=function(n){var e=n.value,t=n.min,i=n.max,c=n.onChange,a=n.step,o=void 0===a?1:a,l=n.label,s=void 0===l?null:l;return Object(r.jsxs)(bn,{children:[s?Object(r.jsx)(jn,{children:s}):null,Object(r.jsx)(V.Range,{step:o,min:t,max:i,values:[e],onChange:function(n){var t=Object(u.a)(n,1)[0];t!==e&&c(t)},renderTrack:function(n){var e=n.props,t=n.children;return Object(r.jsx)(fn,Object(O.a)(Object(O.a)({},e),{},{children:t}))},renderThumb:function(n){var t=n.props;return Object(r.jsx)(hn,Object(O.a)(Object(O.a)({},t),{},{children:e}))}})]})};function xn(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return xn=function(){return n},n}function gn(){var n=Object(h.a)(["\n  width: 100%;\n  margin: 10px;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return gn=function(){return n},n}function On(){var n=Object(h.a)(["\n  display: flex;\n  margin-top: 2px;\n  height: 99%;\n  border: 1px solid darkgray;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n"]);return On=function(){return n},n}function mn(){var n=Object(h.a)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return mn=function(){return n},n}function vn(){var n=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  right: 0%;\n"]);return vn=function(){return n},n}function yn(){var n=Object(h.a)(["\n  color: red;\n  font-weight: bold;\n  text-align: right;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: ",";\n  width: 100%;\n  height: 100%;\n"]);return yn=function(){return n},n}var wn={height:32,width:32},kn={width:710},Cn=function(){var n=Object(m.a)(x.a.mark((function n(){var e,t;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q();case 2:return e=n.sent,t=e.gameOptions.reduce((function(n,e,t){return Object(O.a)(Object(O.a)({},n),{},Object(g.a)({},t,e))}),{}),n.abrupt("return",{gameData:e,images:t,correctAnswers:Object.keys(t).filter((function(n){return t[n].correct})).map((function(n){return parseInt(n)}))});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Sn={padding:"5px",fontSize:"75%",color:"white",background:"rgba(0,0,0,0.5)"},In=function(n,e){return function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return[]},i={src:"img/".concat(n.path),thumbnail:"img/".concat(n.path),thumbnailWidth:wn.width,thumbnailHeight:wn.height,index:e,correct:n.correct,customOverlay:Object(r.jsx)(Mn,{index:e})};return i.tags=t(i)||[],i}(n,e,(function(e){return[{value:"".concat(n.label),title:"COMPY Says: ".concat(n.label)}]}))},Pn=function(n){return n&&n.players&&n.players.length?n.players[0]:null},Rn=function(n){return n&&n.players&&n.players.length?n.players[1]:null},zn=v.a.div(yn(),(function(n){return n.correct?"rgba(75, 75, 75, 0.8)":"rgba(75, 75, 75, 0.0)"})),Ln=v.a.div(vn()),Mn=function(n){var e=n.index,t=Object(i.useContext)(l),c=Object(u.a)(t,1)[0],a=Rn(c),o=Pn(c);return Object(r.jsx)(zn,{correct:N(o.score)&&!c.images[e].correct,children:a.score&&a.selections.includes(parseInt(e))?Object(r.jsx)(Ln,{children:Object(r.jsx)(j.a,{color:a.color,isSelected:!0})}):null})},Dn=function(){var n=Object(i.useContext)(l),e=Object(u.a)(n,2),t=e[0],c=e[1];Object(i.useEffect)((function(){En(t,c)}),[]);var a=function(n){var e=Object(O.a)({},t),r=Pn(e);if(!r.score){var i=e.images[n];i.hasOwnProperty("isSelected")?i.isSelected=!i.isSelected:i.isSelected=!0,r.selections=e.images.map((function(n,e){return Object(O.a)(Object(O.a)({},n),{},{index:e})})).filter((function(n){return n.isSelected})).map((function(n){return n.index})),c(e)}},o=Pn(t);return Object(r.jsx)("div",{children:Object(r.jsx)(w.a,{images:t.images,enableImageSelection:!o.score,onSelectImage:a,onClickThumbnail:a,tagStyle:Sn,showLightboxThumbnails:!0,enableLightbox:!1})})},En=function(){var n=Object(m.a)(x.a.mark((function n(e,t){var r,i,c,a,o;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Object(O.a)({},e),n.next=3,Cn();case 3:i=n.sent,r.currentGameData=i,r.images=Object.keys(i.images).map((function(n){return In(i.images[n],n)})),c=Rn(r),a=Pn(r),c.score=null,a.score=null,o=function(){return Object.keys(i.images).filter((function(n){var e=i.images[n];return"carnac"in e&&e.carnac||!("carnac"in e)&&"deer"===e.label})).map((function(n){return parseInt(n)}))},c.selections=o(),a.selections=[],t(r);case 14:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),Bn=function(n,e){var t=e||[],r=t.filter((function(e){return!n.correctAnswers.includes(e)})),i=n.correctAnswers.filter((function(n){return!t.includes(n)}));return Object.keys(n.images).length-r.length-i.length},An=v.a.div(mn()),Gn=function(n){var e=n.onClick,t=Object(i.useContext)(l),c=Object(u.a)(t,1)[0].players[0].selections.length;return Object(r.jsxs)(An,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"COMPY has seen a lot of deer images before, and he is really good at identifying a deer when he sees one."}),Object(r.jsx)("p",{children:"Can you tell which of the following deer images COMPY may have seen? There is at least one."}),Object(r.jsx)("p",{children:'Select them and then hit the "Challenge Carnac" button (below).'}),Object(r.jsx)("p",{children:"You will be playing against Carnac and whomever gets more correct, wins!"}),Object(r.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:c>0?"".concat(c," picture(s) selected"):"1 or more selections required to play"})]}),Object(r.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(r.jsx)(ln,{onClick:e,disabled:0===c,children:"Challenge Carnac!"})})]})},Fn=Object(v.a)(dn)(On()),Tn=function(){var n=Object(i.useContext)(l),e=Object(u.a)(n,2),t=e[0],c=e[1],a=Rn(t);return Object(r.jsx)(Fn,{children:a.score?Object(r.jsx)(Wn,{}):Object(r.jsx)(Gn,{onClick:function(){var n=Object(O.a)({},t),e=Rn(n),r=Pn(n);e.score=Bn(t.currentGameData,e.selections),r.score=Bn(t.currentGameData,r.selections),c(n)}})})},_n=v.a.div(gn()),Wn=function(){var n=Object(i.useContext)(l),e=Object(u.a)(n,2),t=e[0],c=e[1],a=Rn(t),o=Pn(t);return Object(r.jsxs)(_n,{children:[Object(r.jsx)("div",{style:{marginTop:15},children:Object(r.jsx)(_,{home:o,away:a,bottomDisplay:function(){var n=o.score>a.score?o:o.score<a.score?a:null;return n?"The winner is ".concat(n.name,"!"):"".concat(o.name," tied ").concat(a.name,"!")},totalPossible:12})}),Object(r.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:Object(r.jsx)(ln,{onClick:function(){return En(t,c)},children:"Play Again!"})})]})},Yn=v.a.div(xn()),qn=function(){return Object(r.jsx)(cn,{children:Object(r.jsxs)(Yn,{children:[Object(r.jsx)("div",{style:{minWidth:kn.width,maxWidth:kn.width},children:Object(r.jsx)(Dn,{})}),Object(r.jsx)("div",{style:{maxWidth:440,minWidth:440},children:Object(r.jsx)(Tn,{})})]})})},Nn=t(70),Vn=t(66),Hn=t.n(Vn),Jn=function(){var n=Object(i.useState)({width:void 0,height:void 0}),e=Object(u.a)(n,2),t=e[0],r=e[1];return Object(i.useEffect)((function(){function n(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),t};function Un(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-color: lightgray;\n  padding: 25px;\n  border-radius: 10px;\n  margin: 20px 0;\n"]);return Un=function(){return n},n}function Kn(){var n=Object(h.a)(["\n  background-color: #ddd;\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n"]);return Qn=function(){return n},n}function Xn(){var n=Object(h.a)(["\n  /* z-index: 99; */\n  /* position: absolute; */\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(h.a)(["\n  z-index: 99;\n  position: absolute;\n  opacity: 75%;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(h.a)(["\n  height: ","px;\n  width: ","px;\n  border: 1px solid slategray;\n  border-radius: 5px;\n"]);return $n=function(){return n},n}var ne={height:100,width:100},ee=v.a.img($n(),ne.height,ne.width),te=Object(v.a)(ee)(Zn()),re=Object(v.a)(ee)(Xn()),ie=function(n,e,t){return n>=e&&n<=t},ce=function(n,e){return n.map((function(n){var e=n.getBoundingClientRect();return{id:n.id,top:e.y,left:e.x,bottom:e.y+e.height,right:e.x+e.width}})).filter((function(n){return r=n,ie((t=e).left,r.left,r.right)&&ie(t.top,r.top,r.bottom);var t,r})).map((function(n){return n.id})).slice(0,1).shift()},ae=function(n){var e=n.children;return o.a.createPortal(e,document.getElementById("root"))},oe=function(n){var e=document.getElementById(n.target||n.source).getBoundingClientRect();n.left=e.x,n.top=e.y},ue=function(n){var e=n.index,t=n.image,c=n.targetIds,a=Jn(),o="image".concat(e),u=Object(i.useRef)(),l=Object(i.useRef)();return Object(i.useEffect)((function(){if(u&&u.current){var n=c.map((function(n){return document.getElementById(n)})),e=new Nn.a(u.current);e.source=o,l.current=e;var t=!1;oe(e),e.snap={targets:n,edge:"inside"},e.onDrag=function(n){t=n.snapped},e.onDragEnd=function(r){t&&(e.line&&e.line.remove(),e.target=ce(n,r),e.line=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Hn.a(document.getElementById(n),document.getElementById(e),Object(O.a)({startPlugColor:"slategray",endPlugColor:"slategray",gradient:!0},t))}(o,e.target)),oe(e)}}}),[]),Object(i.useEffect)((function(){return oe(l.current)}),[a]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(re,{id:o,src:"img/".concat(t),alt:t}),Object(r.jsx)(ae,{children:Object(r.jsx)(te,{src:"img/".concat(t),alt:t,ref:u})})]})},le=v.a.div(Qn()),se=Object(v.a)(ee)(Kn()),de=["cifar10_82_deer_in.png","cifar10_1615_deer_in.png","cifar10_1615_deer_in.png","cifar10_82_deer_in.png"],be=de.map((function(n,e){return"target".concat(e)})),je=v.a.div(Un()),fe=function(n,e){return"".concat(n,"_").concat(e)},he=function(){return Object(r.jsxs)(le,{children:[Object(r.jsx)(je,{children:de.map((function(n,e){return Object(r.jsx)(ue,{index:e,image:n,targetIds:be},fe(n,e))}))}),Object(r.jsx)("div",{children:"Match Em"}),Object(r.jsx)(je,{children:be.map((function(n,e){return Object(r.jsx)(se,{id:n,index:e},fe(n,e))}))})]})},pe=t(18),xe=function(n){return Object.keys(n).filter((function(e){return null!=n[e]})).reduce((function(e,t){return Object(O.a)(Object(O.a)({},e),{},Object(g.a)({},t,n[t]))}),{})},ge=function(n,e){var t=n();Object.keys(e).forEach((function(n){return t.style[n]=e[n]}))},Oe=t(68),me=t(67),ve=t(69);function ye(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return ye=function(){return n},n}function we(){var n=Object(h.a)(["\n  border-radius: 5px;\n  display: inline-block;\n  padding-left: 4px;\n  padding-right: 4px;\n  color: ",";\n  background-color: ",";\n  border: 1px solid lightgray;\n  border-color: ",";\n  transition: background-color 1s ease;\n"]);return we=function(){return n},n}function ke(){var n=Object(h.a)(["\n  border: 0;\n  outline: none;\n  background: none;\n  font-size: 1.2rem;\n  color: ",";\n  flex: 1;\n  font-family: Futura;\n  transition: text-shadow 0.25s ease;\n  &:hover {\n    cursor: pointer;\n    text-shadow: 1px 1px 1px black;\n  }\n"]);return ke=function(){return n},n}function Ce(){var n=Object(h.a)(["\n  position: absolute;\n  right: 0;\n  z-index: 5;\n  background-color: slategray;\n  color: white;\n  padding: 8px;\n  border-bottom-left-radius: 15px;\n  font-size: 1.2rem;\n  line-height: 1.7;\n"]);return Ce=function(){return n},n}function Se(){var n=Object(h.a)(["\n  position: absolute;\n  z-index: 5;\n  background-color: slategray;\n  color: white;\n  padding: 8px;\n  border-bottom-right-radius: 8px;\n  border-top-left-radius: 15px;\n  font-size: 1.4rem;\n"]);return Se=function(){return n},n}function Ie(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n"]);return Ie=function(){return n},n}function Pe(){var n=Object(h.a)(["\n  position: absolute;\n  z-index: 2;\n  background-color: slategray;\n  top: 320px;\n  padding: 15px;\n  left: 20px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 15px;\n  width: 110px;\n"]);return Pe=function(){return n},n}function Re(){var n=Object(h.a)(["\n  position: absolute;\n  z-index: 2;\n  background-color: slategray;\n  top: 130px;\n  padding: 10px;\n  left: 40px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 15px;\n  width: 85px;\n  height: 85px;\n  text-align: center;\n"]);return Re=function(){return n},n}function ze(){var n=Object(h.a)(["\n  font-size: 0.9rem;\n"]);return ze=function(){return n},n}function Le(){var n=Object(h.a)(["\n  padding-top: 5px;\n  padding-bottom: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return Le=function(){return n},n}function Me(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: slategray;\n  color: white;\n  padding: 10px;\n  border-radius: 10px;\n  height: 60px;\n"]);return Me=function(){return n},n}function De(){var n=Object(h.a)(["\n  border-bottom: 2px solid darkgray;\n  font-size: 1.9rem;\n  font-weight: 500;\n  text-align: center;\n  padding-bottom: 12px;\n  margin: 10px 0;\n  text-shadow: 2px 2px 2px slategray;\n"]);return De=function(){return n},n}function Ee(){var n=Object(h.a)(["\n  border-top: 1px solid slategray;\n  border-bottom: 1px solid slategray;\n  border-right: 1px solid slategray;\n  border-top-right-radius: 15px;\n  padding: 10px;\n  border-bottom-right-radius: 15px;\n  min-width: 350px;\n  max-width: 350px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return Ee=function(){return n},n}function Be(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n"]);return Be=function(){return n},n}function Ae(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  border-top: 1px solid lightgray;\n  padding-top: 10px;\n"]);return Ae=function(){return n},n}var Ge={container:{width:660,height:560},image:{width:300,height:300}},Fe="COMPY",Te="#4caf50",_e="#dc004d",We=function(){var n=Object(m.a)(x.a.mark((function n(){var e,t,r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q();case 2:return e=n.sent,t=e.practiceOptions.reduce((function(n,e,t){return Object(O.a)(Object(O.a)({},n),{},Object(g.a)({},t,e))}),{}),r=Object.keys(t).map((function(n){return Object(O.a)(Object(O.a)({},t[n]),{},{url:"img/".concat(t[n].path)})})),n.abrupt("return",{gameData:e,images:t,scrollingImages:r,correctAnswers:Object.keys(t).filter((function(n){return t[n].correct})).map((function(n){return parseInt(n)}))});case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Ye=function(n,e,t){return t in e.practiceRound?e.practiceRound[t][n]:null},qe=function(n){return Object.keys(n.practiceRound).reduce((function(e,t){return e&&N(n.practiceRound[t].seenbefore)}),!0)},Ne=v.a.div(Ae()),Ve=function(n){var e=n.question,t=e.path,i=e.correct,c=e.agree,a=e.seenbefore,o=n.questionNumber,u=n.isCurrentImage,l=N(c)&&N(a)?a&&i||!a&&!i?"correct":"incorrect":"waiting",s={waiting:{text:"Waiting on your guesses...",color:"black"},correct:{text:"You know ".concat(Fe," well!"),color:Te},incorrect:{text:"Sorry, you don't know ".concat(Fe," very well..."),color:_e}}[l];return Object(r.jsxs)(Ne,{children:[Object(r.jsxs)("b",{style:{color:s.color},title:t,children:[u?"> ":""," Image ",o]}),Object(r.jsx)("div",{children:s.text})]})},He=v.a.div(Be()),Je=function(n){var e=n.resetGame,t=Object(i.useContext)(l),c=Object(u.a)(t,2),a=c[0],o=c[1];return Object(r.jsxs)(He,{children:[Object(r.jsx)(ln,{onClick:e,children:"More Practice"}),Object(r.jsx)(pe.b,{to:"/game",children:Object(r.jsx)(ln,{onClick:function(){var n=Object(O.a)({},a);n.previousPracticeRounds.push(Object(O.a)({},n.practiceRound)),n.practiceRound={},o(n)},children:"Challenge Carnac!"})})]})},Ue=Object(v.a)(dn)(Ee()),Ke=v.a.div(De()),Qe=function(n){var e=n.resetGame,t=n.currentImageIndex,c=Object(i.useContext)(l),a=Object(u.a)(c,1)[0];return Object(r.jsxs)(Ue,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(Ke,{children:"Practice Round"}),Object(r.jsx)("h4",{style:{margin:10},children:"Make a selection for each image:"}),Object.keys(a.practiceRound).map((function(n,e){return Object(r.jsx)(Ve,{questionNumber:e+1,isCurrentImage:e===t,question:a.practiceRound[n]},e)}))]}),Object(r.jsx)("div",{children:qe(a)?Object(r.jsx)(Je,{resetGame:e}):null})]})},Xe=function(n){var e=n.images,t=n.currentIndex,c=Object(i.useContext)(l),a=Object(u.a)(c,1)[0],o=[3,4],s=function(n,e){return o.map((function(r){return function(n,e,r){var i=t===e?"; border: 2px solid blue !important":"";return"#practice-container > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(".concat(n,") > button:nth-child(").concat(e+1,") { background: linear-gradient(90deg, ").concat(r[0]," 50%, ").concat(r[1]," 50%) !important; ").concat(i," }\n      ")}(r,n,e)})).join("\n")},d=Ge.image.width/Ge.container.width,b=Ge.image.height/Ge.container.height,j={width:parseInt(100*d),height:parseInt(100*b)},f=(Ge.container.width-Ge.image.width)/2,h=(Ge.container.height-Ge.image.height)/2;return Object(r.jsx)("style",{dangerouslySetInnerHTML:{__html:[].concat(Object(W.a)(e.map((function(n,t){var r=Ye("agree",a,e[t].path),i=Ye("seenbefore",a,e[t].path),c=function(n){return null==n?"inherit":n?Te:_e};return s(t,[c(r),c(i)])}))),Object(W.a)(["#practice-container > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div {left: ".concat(f,"px !important; top: ").concat(h,"px !important; width: ").concat(j.width,"% !important; height: ").concat(j.height,"% !important; border-radius: 5px; box-shadow: 0 0 5px #000000;}")])).join("\n")}})},Ze=v.a.div(Me()),$e=v.a.div(Le()),nt=v.a.div(ze()),et=function(n){var e=n.question,t=n.onAnswer,i=n.defaultValue;n.index;return Object(r.jsxs)(Ze,{children:[Object(r.jsx)(nt,{children:e}),Object(r.jsx)($e,{children:Object(r.jsx)(un,{defaultValue:i,onToggle:t,trueBgColor:Te,falseBgColor:_e,trueLabel:Object(r.jsx)(sn,{symbol:"0x2714"}),falseLabel:Object(r.jsx)(sn,{symbol:"0x2716"})})})]})},tt=v.a.div(Re()),rt=function(n){var e=(100*n.value).toFixed(1);return Object(r.jsxs)(tt,{children:[Object(r.jsx)("div",{children:"Probability"}),Object(r.jsx)(Oe.PieChart,{animate:!0,reveal:100,data:[{value:e,color:"#ccc"},{value:100-e,color:"#777",hideLabel:!0}],totalValue:100,lineWidth:30,label:function(n){var e=n.dataEntry;return e.hideLabel?null:"".concat(e.value,"%")},labelStyle:{fontSize:"1.1rem",fill:"white"},labelPosition:0})]})},it=v.a.div(Pe()),ct=v.a.div(Ie()),at=function(n){var e={container:function(n){return Object(O.a)(Object(O.a)({},n),{},{width:"100%"})},indicatorsContainer:function(n){return Object(O.a)(Object(O.a)({},n),{},{display:"none"})},option:function(n,e){var t=e.data;return Object(O.a)(Object(O.a)({},n),{},{whiteSpace:"nowrap",color:"black",":before":{content:"".concat(t.icon?"'".concat(t.icon,"'"):"''"),width:"15px",padding:"0 5px 0 0 !important",display:"inline-block",textAlign:"center"}})},menu:function(n){return Object(O.a)(Object(O.a)({},n),{},{width:"fit-content"})},singleValue:function(n){return Object(O.a)(Object(O.a)({},n),{},{fontSize:"0.8rem"})}};return Object(r.jsx)(ve.a,Object(O.a)({styles:e,isSearchable:!1},n))},ot=function(n){var e=n.image,t=n.getImageDiv,c=n.onLoadImageVariant,a={noise:0},o=Object(i.useState)(a),l=Object(u.a)(o,2),s=l[0],d=l[1],b=Object(i.useState)(null),j=Object(u.a)(b,2),f=j[0],h=j[1],p=function(n){return ge(t,{transition:"none","background-image":!s[n]&&n in e.variants&&"path"in e.variants[n]?'url("img/'.concat(e.variants[n].path,'")'):'url("img/'.concat(e.path,'")')})},x=function(n){return(e.variants[n]||e).label},m=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=!s[n];p(n),c(xe({probability:r&&n in e.variants?e.variants[n].probability:null,label:x(n)})),d(Object(O.a)(Object(O.a)({},a),{},Object(g.a)({},n,r),t))},v=Object.keys(e.variants||{}).filter((function(n){return!n.startsWith("noise")})),y={hflip:{label:function(){return"Horizontal Flip"},icon:function(){return"\\21C4"}},vflip:{label:function(){return"Vertical Flip"},icon:function(){return"\\21C5"}},"rot*":{label:function(n){return"".concat(n.replace("rot","Rotate "),"\xb0")},icon:function(){return"\\21BB"}}},w=function(){},k=function(n,e,t,r){return n[e]=(t[e]||w)(r)},C=[{value:"normal",label:"Normal",fn:function(){console.log("Resetting image...."),p("unknown"),c({}),d(Object(O.a)({},a))}}].concat(Object(W.a)(v.map((function(n){var e={value:n,label:n,fn:m.bind(null,n)},t=void 0;if(n in y)t=y[n];else{var r=Object.keys(y).filter((function(n){return n.includes("*")})).find((function(e){return n.startsWith(e.replace("*",""))}));r&&(t=y[r])}return t&&(k(e,"label",t,n),k(e,"icon",t,n)),e})))),S=Object.keys(e.variants||{}).filter((function(n){return n.startsWith("noise")})).map((function(n){return parseInt(n.replace("noise",""))})),I=[0].concat(Object(W.a)(S));return Object(r.jsxs)(it,{children:[Object(r.jsx)(ct,{children:Object(r.jsx)(at,{options:C,value:f||C[0],onChange:function(n){h(n),n.fn()}})}),Object(r.jsx)(pn,{label:"Add Noise:",step:1,min:0,max:Math.max.apply(Math,Object(W.a)(I)),value:s.noise,onChange:function(n){var e;h(null),m("noise".concat(e=n),{noise:e})}})]})},ut=v.a.div(Se()),lt=v.a.div(Ce()),st=v.a.button(ke(),(function(n){return n.selected?"black":"white"})),dt=function(n){var e=n.mode,t=n.onSwitchMode,i={trick:"Back to Game"},c=e in i?i[e]:"Trick ".concat(Fe,"?"),a={trick:null},o=e in a?a[e]:"trick";return Object(r.jsx)(lt,{children:Object(r.jsx)(st,{onClick:function(){return t(o)},children:c})})},bt=v.a.div((function(n){var e=n.containerSize,t=n.containerSidePadding;return"\n  width: ".concat(e.width-2*t,"px;\n  height: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  position: absolute;\n  padding: 0 ").concat(t,"px;\n  top: ").concat(e.height-t-80,"px;\n  z-index: 1;\n    ")})),jt=v.a.div(we(),(function(n){return n.changed?"white":"#333"}),(function(n){return n.changed?"#dc004d":"white"}),(function(n){return n.changed?"antiquewhite":"lightgray"})),ft=function(n){var e=n.getImageDiv,t=n.images,c=n.index,a=n.onChange,o=Object(i.useContext)(l),s=Object(u.a)(o,2),d=s[0],b=s[1],j=Object(i.useState)(null),f=Object(u.a)(j,2),h=f[0],p=f[1],x=Object(i.useState)({}),g=Object(u.a)(x,2),m=g[0],v=g[1],y=t[c],w=Object(i.useMemo)((function(){return y?{probability:y.probability||.5,label:y.label}:{probability:.5,label:"unknown"}}),[y]);if(Object(i.useEffect)((function(){v(w)}),[c,w]),!t)return null;var k,C=function(n,e){var r=Object(O.a)({},d);r.practiceRound[t[c].path][n]=e,b(r)},S=C.bind(null,"agree"),I=C.bind(null,"seenbefore"),P=d.practiceRound[t[c].path];return Object(r.jsxs)("div",{style:{position:"relative"},children:[Object(r.jsxs)(ut,{children:[Fe," thinks this is a"," ",Object(r.jsx)(jt,{changed:(k=m.previousLabel,null!==k&&void 0!==k&&m.label!==m.previousLabel),title:"Previous: ".concat(m.previousLabel||"none"),children:m.label})]}),t[c].variants?Object(r.jsx)(dt,{mode:h,onSwitchMode:function(n){ge(e,{"background-image":'url("img/'.concat(y.path,'")')}),p(n),a(xe({displayMode:n}))}}):null,h&&"trick"===h?Object(r.jsx)(ot,{image:t[c],getImageDiv:e,onLoadImageVariant:function(n){v(Object(O.a)(Object(O.a)(Object(O.a)({},w),n),{},{previousLabel:m.label})),a(Object(O.a)(Object(O.a)(Object(O.a)({},w),n),{},{displayMode:h}))},probability:m.probability}):null,h&&"trick"===h?Object(r.jsx)(rt,{value:m.probability}):null,Object(r.jsx)(Xe,{images:t,currentIndex:c}),"trick"!==h?Object(r.jsxs)(bt,{containerSize:Ge.container,containerSidePadding:10,children:[Object(r.jsx)(et,{question:"Do you agree with COMPY?",onAnswer:S.bind(null),defaultValue:P.agree,index:c}),Object(r.jsx)(et,{question:"Has ".concat(Fe," seen this before?"),onAnswer:I.bind(null),defaultValue:P.seenbefore,index:c})]}):null]})},ht=function(){var n=Object(m.a)(x.a.mark((function n(e,t,r){var i,c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Game reset"),(i=Object(O.a)({},e)).version=N(i.version)?i.version+1:1,n.next=5,We();case 5:c=n.sent,i.practiceRound&&Object.keys(i.practiceRound).length&&i.previousPracticeRounds.push(Object(O.a)({},i.practiceRound)),i.currentGameData=c,r(0),i.practiceRound=c.scrollingImages.reduce((function(n,e,t){return Object(O.a)(Object(O.a)({},n),{},Object(g.a)({},e.path,Object(O.a)({},e)))}),{}),t(i);case 11:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),pt=v.a.div(ye()),xt=function(){var n=Object(i.useState)(0),e=Object(u.a)(n,2),t=e[0],c=e[1],a=Object(i.useContext)(l),o=Object(u.a)(a,2),s=o[0],d=o[1],b=Object(i.useState)({}),j=Object(u.a)(b,2),f=j[0],h=j[1],p=function(){return ht(s,d,c)},x=Object(i.useRef)();Object(i.useEffect)(p,[]);return s.currentGameData&&s.currentGameData.scrollingImages&&s.currentGameData?Object(r.jsx)(cn,{children:Object(r.jsxs)(pt,{id:"practice-container",children:[Object(r.jsxs)("div",{ref:x,children:[Object(r.jsx)(ft,{getImageDiv:function(){return x.current.children[1].children[0].children[0].children[0]},images:s.currentGameData.scrollingImages,index:t,onChange:h}),Object(r.jsx)(me.a,{width:Ge.container.width,height:Ge.container.height,images:s.currentGameData.scrollingImages,showBullets:"trick"!==f.displayMode,showNavs:"trick"!==f.displayMode,navStyle:2,onStartSlide:function(n){c(n-1)},style:{borderBottomLeftRadius:15,borderTopLeftRadius:15,backgroundColor:null,border:"1px solid slategray"}},s.version)]}),Object(r.jsx)(Qe,{resetGame:p,currentImageIndex:t})]})}):null};function gt(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n"]);return gt=function(){return n},n}function Ot(){var n=Object(h.a)(['\n  font-family: Futura;\n  font-size: 4rem;\n  &:before,\n  &:after {\n    content: "\\01f9d9"; // :mage:\n  }\n'],['\n  font-family: Futura;\n  font-size: 4rem;\n  &:before,\n  &:after {\n    content: "\\\\01f9d9"; // :mage:\n  }\n']);return Ot=function(){return n},n}function mt(){var n=Object(h.a)(["\n  border-radius: 10px;\n  background-color: antiquewhite;\n  box-shadow: 0 0 4px gray;\n  text-align: center;\n  padding: 40px;\n"]);return mt=function(){return n},n}var vt=v.a.div(mt()),yt=v.a.h1(Ot()),wt=v.a.div(gt()),kt=function(){return Object(r.jsx)(cn,{children:Object(r.jsxs)(vt,{children:[Object(r.jsx)(yt,{children:"CHALLENGE CARNAC!"}),Object(r.jsx)("p",{title:"Running in ".concat("production"," mode"),children:"COMPY has seen a lot of deer images before, and he is really good at identifying a deer when he sees one."}),Object(r.jsx)("p",{children:"Can you tell which of the following deer images COMPY may have seen?"}),Object(r.jsx)("p",{children:"Click Practice to scroll through the pictures one at a time and test your knowledge about COMPY."}),Object(r.jsx)("p",{children:"When you are ready, you can click Play to play a game of who knows COMPY best."}),Object(r.jsxs)(wt,{children:[Object(r.jsx)(pe.b,{to:"/practice",children:Object(r.jsx)(ln,{children:"Practice"})}),Object(r.jsx)(pe.b,{to:"/game",children:Object(r.jsx)(ln,{children:"Game"})})]})]})})},Ct=t(42),St=t.n(Ct);St.a.setAppElement("#root");var It=function(n){var e=n.title,t=n.subtitle,i={container:{marginBottom:5},title:{fontSize:20,fontWeight:"bold"},subtitle:{fontSize:14,color:"gray"}};return Object(r.jsxs)("div",{style:i.container,children:[Object(r.jsx)("div",{style:i.title,children:e}),Object(r.jsx)("span",{style:i.subtitle,children:t})]})},Pt=Object(d.f)((function(n){var e=n.history,t=Object(i.useState)(!1),c=Object(u.a)(t,2),a=c[0],o=c[1],l=function(){return o(!a)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(St.a,{isOpen:a,onRequestClose:l,contentLabel:"My dialog",children:[Object(r.jsx)(It,{title:"A game of 16 questions\u2026beat Carnac!",subtitle:"AI Jimmy is really good at identifying the object in images that he has seen before. Select (check) which of the following images you think Jimmy remembers. You will be playing against Carnac and who ever gets more correct, wins!"}),Object(r.jsx)("button",{onClick:l,style:{position:"absolute",top:5,right:5,border:0,background:"none"},children:Object(r.jsx)(j.a,{color:"black",isSelected:!0})})]}),Object(r.jsx)(f.b,{alwaysShowTitle:!0,mainButtonStyles:{backgroundColor:"slategray"},icon:". . .",children:Object(r.jsx)(f.a,{text:"Menu",onClick:function(){return e.push("/")},children:"m"})})]})})),Rt=function(){return Object(r.jsx)(s,{children:Object(r.jsxs)(pe.a,{basename:"/interact",children:[Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{path:"/practice",children:Object(r.jsx)(xt,{})}),Object(r.jsx)(d.a,{path:"/match",children:Object(r.jsx)(he,{})}),Object(r.jsx)(d.a,{path:"/game",children:Object(r.jsx)(qn,{})}),Object(r.jsx)(d.a,{path:"/",children:Object(r.jsx)(kt,{})})]}),Object(r.jsx)(Pt,{})]})})},zt=function(){return Object(r.jsx)(Rt,{})},Lt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,151)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(zt,{})}),document.getElementById("root")),Lt()},27:function(n,e,t){},76:function(n,e,t){}},[[150,1,2]]]);
//# sourceMappingURL=main.370ef30c.chunk.js.map