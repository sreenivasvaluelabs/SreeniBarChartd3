(this.webpackJsonpbarchart=this.webpackJsonpbarchart||[]).push([[0],{53:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),s=a(32),i=a(37),l=a(30),d=a(31),m=a(38),h=a(7);const g=10,u=50,p=70,x=10,w=800-p-x,E=500-g-u;class v{constructor(e){const t=this;t.svg=h.h(e).append("svg").attr("width",w+p+x).attr("height",E+g+u).append("g").attr("transform","translate(".concat(p,", ").concat(g,")")),t.xLabel=t.svg.append("text").attr("x",w/2).attr("y",E+50).attr("text-anchor","middle"),t.svg.append("text").attr("x",-E/2).attr("y",-50).attr("text-anchor","middle").text("Height in cm").attr("transform","rotate(-90)"),t.xAxisGroup=t.svg.append("g").attr("transform","translate(0, ".concat(E,")")),t.yAxisGroup=t.svg.append("g"),Promise.all([h.c("https://udemy-react-d3.firebaseio.com/tallest_men.json"),h.c("https://udemy-react-d3.firebaseio.com/tallest_women.json")]).then(e=>{t.menData=e[0],t.womenData=e[1],t.update("men")})}update(e){const t=this;t.data="men"===e?t.menData:t.womenData,t.xLabel.text("The world's tallest ".concat(e));const a=h.g().domain([.95*h.e(t.data,e=>e.height),h.d(t.data,e=>e.height)]).range([E,0]),n=h.f().domain(t.data.map(e=>e.name)).range([0,w]).padding(.4),r=h.a(n);t.xAxisGroup.transition().duration(500).call(r);const o=h.b(a);t.yAxisGroup.transition().duration(500).call(o);const c=t.svg.selectAll("rect").data(t.data);c.exit().transition().duration(500).attr("height",0).attr("y",E).remove(),c.transition().duration(500).attr("x",e=>n(e.name)).attr("y",e=>a(e.height)).attr("width",n.bandwidth).attr("height",e=>E-a(e.height)),c.enter().append("rect").attr("x",e=>n(e.name)).attr("width",n.bandwidth).attr("fill","grey").attr("y",E).transition().duration(500).attr("height",e=>E-a(e.height)).attr("y",e=>a(e.height))}}var b=({gender:e})=>{const t=Object(n.useRef)(null),a=Object(n.useState)(null),o=Object(m.a)(a,2),c=o[0],s=o[1];return Object(n.useEffect)(()=>{c?c.menData&&c.update(e):s(new v(t.current))},[c,e]),r.a.createElement("div",{className:"chart-area",ref:t})},f=a(15);function y({genderSelected:e}){return r.a.createElement(f.a,null,r.a.createElement(f.a.Toggle,{variant:"primary",id:"dropdown-basic"},"Please select gender"),r.a.createElement(f.a.Menu,null,r.a.createElement(f.a.Item,{onSelect:()=>e("men")},"Men"),r.a.createElement(f.a.Item,{onSelect:()=>e("women")},"Women")))}class S extends n.Component{constructor(...e){super(...e),this.state={gender:"men"},this.genderSelected=e=>this.setState({gender:e})}render(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{bg:"light"},r.a.createElement(s.a.Brand,null,"Sreeni BarChart- D3 Example")),r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement(y,{genderSelected:this.genderSelected}))),r.a.createElement(l.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement(b,{gender:this.state.gender})))))}}var j=S;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.5296ec2f.chunk.js.map