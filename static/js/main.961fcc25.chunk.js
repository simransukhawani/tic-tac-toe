(this["webpackJsonpwhether-app"]=this["webpackJsonpwhether-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(1),c=n.n(a),s=n(4),r=n.n(s),l=(n(14),n(2)),d=n(5),o=n(6),h=n(8),u=n(7),j=n.p+"static/media/s.0407f886.mp3",b=n.p+"static/media/wrong.09270cc3.mp3",O=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).audio1=new Audio(j),i.audio2=new Audio(b),i.winnerDivs=function(t,e){var n=["","","","","","","","",""];n.splice(t[0],1,e),n.splice(t[1],1,e),n.splice(t[2],1,e),i.setState({a:n})},i.playagainHandler=function(){window.location.reload(!1),i.setState({a:["","","","","","","","",""]})},i.handelClick=function(t){i.audio1.play();var e=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[2,5,8],[0,3,6]];!0!==i.state.emt.includes(t)&&(i.setState({emt:[].concat(Object(l.a)(i.state.emt),[t]),istrue:!i.state.istrue,a:[].concat(Object(l.a)(i.state.a.slice(0,t)),[i.state.istrue?"X":"O"],Object(l.a)(i.state.a.slice(t+1)))},(function(){for(var t=0;t<e.length;t++)if(""!==i.state.a[e[t][0]]&&i.state.a[e[t][0]]===i.state.a[e[t][1]]&&i.state.a[e[t][1]]===i.state.a[e[t][2]]){i.audio2.play(),i.winnerDivs(e[t],i.state.a[e[t][0]]),i.setState({winner:i.state.a[e[t][0]]+" is the Winner",istrue:!1});break}})),8===i.state.emt.length&&""===i.state.winner&&(i.setState({winner:"Match Draw!!"}),i.audio2.play()))},i.state={istrue:!1,a:["","","","","","","","",""],catcharr:[],emt:[],winner:""},i}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"winner",children:this.state.winner})}),Object(i.jsxs)("div",{className:"ticTak",children:[Object(i.jsxs)("div",{className:"row row1",children:[Object(i.jsx)("div",{onClick:function(){return t.handelClick(0)},children:this.state.a[0]}),Object(i.jsx)("div",{onClick:function(){return t.handelClick(1)},children:this.state.a[1]}),Object(i.jsx)("div",{onClick:function(){return t.handelClick(2)},children:this.state.a[2]})]}),Object(i.jsxs)("div",{className:"row row2",children:[Object(i.jsx)("div",{onClick:function(){return t.handelClick(3)},children:this.state.a[3]}),Object(i.jsx)("div",{onClick:function(){return t.handelClick(4)},children:this.state.a[4]}),Object(i.jsx)("div",{onClick:function(){return t.handelClick(5)},children:this.state.a[5]})]}),Object(i.jsxs)("div",{className:"row row3",children:[Object(i.jsx)("div",{onClick:function(){return t.handelClick(6)},children:this.state.a[6]}),Object(i.jsx)("div",{onClick:function(){return t.handelClick(7)},children:this.state.a[7]}),Object(i.jsx)("div",{onClick:function(){return t.handelClick(8)},children:this.state.a[8]})]})]}),Object(i.jsx)("div",{id:"strikethrough",children:Object(i.jsx)("div",{})}),Object(i.jsx)("div",{className:"btn",children:""!==this.state.winner?Object(i.jsx)("button",{onClick:this.playagainHandler,children:"Play Again!"}):""})]})}}]),n}(c.a.Component);n(15);var v=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(O,{})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),i(t),a(t),c(t),s(t)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.961fcc25.chunk.js.map