(this.webpackJsonpcolorpallete=this.webpackJsonpcolorpallete||[]).push([[0],{13:function(e,t,a){e.exports=a(27)},18:function(e,t,a){},19:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(11),r=a.n(s),c=a(12),l=a(2),i=a(3),u=a(5),h=a(4),m=(a(18),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e))._onMouseMove=function(e){n.props.mousemove(e)},n.state={lastDetachColor:null},n}return Object(i.a)(a,[{key:"_setBackground",value:function(){return{background:"hsl(".concat(this.props.hue,",").concat(this.props.saturation,"%,").concat(this.props.lightness,"%)"),height:"100vh"}}},{key:"_detachColor",value:function(e){var t=this;if(e.target.classList.contains("detach"))this.state.lastDetachColor.classList.remove("detach"),setTimeout((function(){return t.state.lastDetachColor.remove()}),100);else{var a=e.target;setTimeout((function(){return a.classList.add("detach")}),1),e.target.parentNode.insertBefore(a,e.target),this.setState({lastDetachColor:a})}this._detachAllColors()}},{key:"_detachAllColors",value:function(){var e=this;document.addEventListener("keydown",(function(t){27===t.keyCode&&(document.querySelectorAll(".color.detach").forEach((function(e){e.classList.remove("detach"),setTimeout((function(){return e.remove()}),100)})),e.setState({lastDetachColor:null}))}))}},{key:"render",value:function(){var e=this;return o.a.createElement("li",{"data-id":this.props.hue,className:"color",onClick:function(t){return e._detachColor(t)},style:this._setBackground(),onMouseMove:this._onMouseMove})}}]),a}(o.a.Component)),d=(a(19),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:this.props.somuchlight}," Wanna contribute? Please access the source code ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/pablorodrigo52/colorpallete"},"here"),"."),o.a.createElement("p",{className:this.props.somuchlight},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://icons8.com.br/icons/set/paint-palette"},"Paint Palette icon")," by ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://icons8.com.br"},"Icons8")))}}]),a}(o.a.Component));function g(e,t,a){return"#"+((1<<24)+(e<<16)+(t<<8)+a).toString(16).slice(1)}function p(e){return Number(e?e.replace(")","").replace("(","").replace(",",""):"")}var f=a(6),v=a(7),b=(a(25),a(26),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={lastHoveredColor:null,panelColor:"rgba(0, 0, 0, 0.2)",rgbColor:"rgba(0, 0, 0, 0.2)",hexColor:"#000000",hueColor:"hsl(0, 0%, 0%)",somuchlight:!0,saturation:100,lightness:50},n._copyIcon=o.a.createElement(f.a,{icon:v.a}),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"group"},o.a.createElement("ul",{className:"colors"},this._renderPallete().map((function(e){return e}))),o.a.createElement("section",{className:"panel",style:{background:this.state.panelColor}},o.a.createElement("div",{className:"codes"},o.a.createElement("div",{className:this.state.somuchlight?"blackfont":""},this.state.rgbColor," ",o.a.createElement(f.a,{onClick:this._copy,className:this.state.somuchlight?"blackfont":"",icon:v.a})),o.a.createElement("div",{className:this.state.somuchlight?"blackfont":""},this.state.hueColor," ",o.a.createElement(f.a,{onClick:this._copy,className:this.state.somuchlight?"blackfont":"",icon:v.a})),o.a.createElement("div",{className:this.state.somuchlight?"blackfont":""},this.state.hexColor," ",o.a.createElement(f.a,{onClick:this._copy,className:this.state.somuchlight?"blackfont":"",icon:v.a}))),o.a.createElement("section",{className:"config"},o.a.createElement("div",{className:this.state.somuchlight?"blackfont":""},o.a.createElement("div",{className:"title"},"Saturation"),o.a.createElement("input",{type:"range",className:"slider",name:"saturation",id:"saturation",min:"0",max:"100",value:this.state.saturation,onChange:function(t){return e._alterSaturation(t)}})," ",this.state.saturation,"%"),o.a.createElement("div",{className:this.state.somuchlight?"blackfont":""},o.a.createElement("div",{className:"title"},"Lightness"),o.a.createElement("input",{type:"range",className:"slider",name:"lightness",id:"lightness",min:"0",max:"100",value:this.state.lightness,onChange:function(t){return e._alterLightness(t)}})," ",this.state.lightness,"%")),o.a.createElement(d,{somuchlight:this.state.somuchlight?"blackfont":""})))}},{key:"_renderPallete",value:function(){for(var e=this,t=[],a=0;a<359;a++)t.push(o.a.createElement(m,{key:a,hue:a,saturation:this.state.saturation,lightness:this.state.lightness,mousemove:function(t){e._setHoverColor(t)}}));return t}},{key:"_alterSaturation",value:function(e){this.setState({saturation:e.target.value})}},{key:"_alterLightness",value:function(e){this.setState({lightness:e.target.value})}},{key:"_setHoverColor",value:function(e){var t=e.target.style.backgroundColor.toString(),a=Object(c.a)(t.substring(t.indexOf("(")+1).split(",")),n=a[0],o=a[1],s=a[2],r=p(e.target.dataset.id),l=this.state.saturation,i=this.state.lightness;n=p(n),o=p(o),s=p(s),n>235&&o>235||255===o?this.setState({somuchlight:!0}):this.setState({somuchlight:!1}),this.setState({lastHoveredColor:e.target.style.background,panelColor:e.target.style.backgroundColor,rgbColor:e.target.style.backgroundColor,hexColor:g(n,o,s),hueColor:"hsl(".concat(r,", ").concat(l,"%, ").concat(i,"%)")})}},{key:"_copy",value:function(e){var t;if("path"===e.target.tagName)t=e.target.parentNode.parentNode.innerText;else{if("svg"!==e.target.tagName)throw new Error("Cannot copy by button.");t=e.target.parentNode.innerText}if(function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select();var a=document.execCommand("copy");return document.body.removeChild(t),a}(t.toLowerCase())){var a=document.createElement("div");a.innerHTML="Copied!",a.classList.add("msg"),e.target.parentNode.parentNode.insertAdjacentElement("beforeend",a),a.classList.add("effect"),setTimeout((function(){a.remove()}),1e3)}else alert("cannot copy by button")}}]),a}(o.a.Component));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.35a43ab1.chunk.js.map