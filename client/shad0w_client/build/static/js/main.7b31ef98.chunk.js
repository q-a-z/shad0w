(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"b",function(){return k}),n.d(t,"a",function(){return b});var a=n(5),i=n(6),s=n(8),o=n(7),l=n(9),r=n(0),c=n.n(r),u=n(21),m=n(22),d=n(23),h=(n(59),n(60),n(61),n(62),n(63),n(16)),p=n.n(h),g=n(25),v=n.n(g),f=n(26);function k(e){return localStorage.getItem(e)}var b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).timer=void 0,n.state={isLoaded:!1,nickValue:"admin",hostValue:"http://127.0.0.1:1337",tokenValue:"shad0w",commState:{}},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"handleChangeNick",value:function(e){this.setState({nickValue:e.target.value})}},{key:"handleChangeHost",value:function(e){this.setState({hostValue:e.target.value})}},{key:"handleChangeToken",value:function(e){this.setState({tokenValue:e.target.value})}},{key:"setCookie",value:function(e,t){localStorage.setItem(e,t)}},{key:"setAllCookies",value:function(){this.setCookie("Host",this.state.hostValue),this.setCookie("LastHost",this.state.hostValue),this.setCookie("Nick",this.state.nickValue),this.setCookie("LastNick",this.state.nickValue),this.setCookie("Token",this.state.tokenValue),this.setCookie("LastToken",this.state.tokenValue);var e=this.state,t=e.hostValue,n=e.tokenValue,a=e.nickValue,i={};if(i[t]={nick:a,token:n},localStorage.getItem("savedConnections")){var s=localStorage.getItem("savedConnections");this.setCookie("savedConnections",JSON.stringify(Object.assign({},JSON.parse(s),i)))}else this.setCookie("savedConnections",JSON.stringify(i));fetch(k("Host")+"/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:k("Nick"),password:k("Token")}),credentials:"include"}).then(function(e){return e.json()}).then(function(e){console.log(document.cookie),!1===e.success?alert("BAD CREDENTIALS.  Try again!"):(console.log("OK"),window.location.reload())}).catch(function(e){alert("Connection failed."),console.log(e)})}},{key:"eraseCookie",value:function(e){localStorage.removeItem(e)}},{key:"eraseAllCookies",value:function(){this.eraseCookie("Nick"),this.eraseCookie("Host"),this.eraseCookie("Token"),document.cookie="SDWAuth= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",window.location.reload()}},{key:"UNSAFE_componentWillMount",value:function(){k("LastHost")&&this.setState({hostValue:k("LastHost")}),k("LastNick")&&this.setState({nickValue:k("LastNick")}),k("LastToken")&&this.setState({tokenValue:k("LastToken")}),-1!==document.cookie.indexOf("SDWAuth")&&this.setState({isLoaded:!0})}},{key:"change",value:function(e){this.setState({hostValue:e.target.value}),this.setState({nickValue:JSON.parse(localStorage.getItem("savedConnections"))[e.target.value].nick}),this.setState({tokenValue:JSON.parse(localStorage.getItem("savedConnections"))[e.target.value].token}),this.setState({connOption:e.target.value})}},{key:"clearAllConnections",value:function(){this.eraseCookie("savedConnections"),this.eraseCookie("LastHost"),this.eraseCookie("LastNick"),this.eraseCookie("LastTicken")}},{key:"clearConnection",value:function(){var e=this.state.connOption,t=JSON.parse(k("savedConnections"));delete t[e],this.setCookie("savedConnections",JSON.stringify(t))}},{key:"showSidebar",value:function(e){if("LI"===e.target.tagName||"UL"===e.target.tagName||"SPAN"===e.target.tagName)return!1;var t=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(t=!0);var n=this.state.menuVisible;(n=!n)&&!t?this.restartTimer():t||this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.setState({menuVisible:n})}},{key:"toggleSidebar",value:function(){this.timer=void 0,this.setState({menuVisible:!this.state.menuVisible})}},{key:"restartTimer",value:function(){var e=!1;if((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(e=!0),e)return!1;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(this.toggleSidebar.bind(this),1e3)}},{key:"stopTimer",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=void 0)}},{key:"render",value:function(){var e,t=n(20),a=this.state.menuVisible;return localStorage.getItem("savedConnections")&&(e=Object.keys(JSON.parse(localStorage.getItem("savedConnections"))).map(function(e){return c.a.createElement("option",{key:Math.random(),value:e},e)})),null===k("Host")||null===k("Nick")||null===k("Token")||-1===document.cookie.indexOf("SDWAuth")?c.a.createElement("div",{className:"wrapper fadeInDown fill-cont",style:{backgroundImage:"url("+v.a+")"}},c.a.createElement("div",{id:"formContent",className:"fadeIn first"},c.a.createElement("form",null,c.a.createElement("br",null),c.a.createElement("h1",{style:{color:"white"}},"shad0w",c.a.createElement("br",null),c.a.createElement("span",{style:{fontSize:"20px"}},"v",f.version)),c.a.createElement("img",{src:p.a,style:{width:"25%"},alt:"jian yang"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",{style:{color:"white"}},c.a.createElement("strong",null,"Enter a host, nickname and token to login.")),c.a.createElement("span",{className:"custom-dropdown"},c.a.createElement("select",{defaultValue:"",value:this.state.connOption,id:"connection",onChange:this.change.bind(this)},c.a.createElement("option",{disabled:!0,value:""},"Saved Connections"),e)),c.a.createElement("br",null),c.a.createElement("input",{onChange:function(e){this.handleChangeHost(e)}.bind(this),value:this.state.hostValue,type:"text",id:"Host",className:"fadeIn third",name:"Host",placeholder:"Host"}),c.a.createElement("input",{onChange:function(e){this.handleChangeNick(e)}.bind(this),value:this.state.nickValue,type:"text",id:"Nick",className:"fadeIn second",name:"Nick",placeholder:"Nick"}),c.a.createElement("input",{onChange:function(e){this.handleChangeToken(e)}.bind(this),value:this.state.tokenValue,type:"text",id:"Token",className:"fadeIn third",name:"Token",placeholder:"Token"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{type:"button",className:"fadeIn fourth btn btn-light",onClick:function(){this.setAllCookies()}.bind(this)},"ENTER")," ",c.a.createElement("button",{className:"fadeIn fourth btn btn-light",onClick:function(){this.clearAllConnections()}.bind(this)},"CLEAR ALL"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{className:"fadeIn fourth btn btn-light",onClick:function(){this.clearConnection()}.bind(this)},"DELETE SELECTED CONNECTION"),c.a.createElement("br",null),c.a.createElement("br",null)))):this.state.isLoaded?c.a.createElement("div",{onClick:a?this.showSidebar.bind(this):function(){return!1}},c.a.createElement("div",{id:"wrapper"},c.a.createElement("ul",{id:"menuContainer",onMouseEnter:this.stopTimer.bind(this),onMouseLeave:this.restartTimer.bind(this),className:"scrollable "+(a?"visible":"")},c.a.createElement("li",null,c.a.createElement("img",{src:p.a,style:{width:"30%"},alt:"jian yang"}),c.a.createElement("span",{style:{fontSize:"20px"}},"\xa0",c.a.createElement("strong",null,"shad0w"))),c.a.createElement("li",{onClick:function(){this.eraseAllCookies()}.bind(this)},"Logout"),c.a.createElement("li",{onClick:function(){window.location.reload()}},"Reload")),c.a.createElement("div",{className:"drawerScroll"},c.a.createElement("img",{style:{position:"relative",width:"25px"},src:p.a,alt:"jian yang"}),c.a.createElement("div",{className:"pad"}),c.a.createElement("div",{tlte:"expand",onClick:this.showSidebar.bind(this),className:"drawerBtn "+(a?"visibleBtn":"")},c.a.createElement(t,{name:"ellipsis-h"})),c.a.createElement("div",{className:"pad"}),c.a.createElement("div",{title:"logout",onClick:function(){this.eraseAllCookies()}.bind(this),className:"drawerBtn "+(a?"visibleBtn":"")},c.a.createElement(t,{name:"sign-out-alt"})),c.a.createElement("div",{className:"pad"}),c.a.createElement("div",{title:"refresh",onClick:function(){window.location.reload()},className:"drawerBtn "+(a?"visibleBtn":"")},c.a.createElement(t,{name:"sync"})),c.a.createElement("div",{className:"pad"})),c.a.createElement("div",{id:"layoutContainer"})),c.a.createElement(u.a,{config:{settings:{selectionEnabled:!0},content:[{type:"column",content:[{type:"react-component",title:"Agents",component:"agents-component",isClosable:!1,activeItemIndex:1,props:{}}]}]},registerComponents:function(e){e.registerComponent("agents-component",m.a),e.registerComponent("agents-menu-component",d.a)}})):c.a.createElement("div",null,"Loading...")}}]),t}(c.a.Component)},16:function(e,t,n){e.exports=n.p+"static/media/logo.b03442fa.png"},21:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return v});var a=n(5),i=n(6),s=n(8),o=n(7),l=n(9),r=n(0),c=n.n(r),u=n(12),m=n.n(u),d=(n(33),n(15)),h=n.n(d),p=n(3),g=n.n(p),v=function(t){function n(){var e,t;Object(a.a)(this,n);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(l)))).state={},t.containerRef=c.a.createRef(),t.goldenLayoutInstance=void 0,t}return Object(l.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var e=Array.from(this.state.renderPanels||[]);return c.a.createElement("div",Object.assign({ref:this.containerRef},this.props.htmlAttrs),e.map(function(e,t){return m.a.createPortal(e._getReactComponent(),e._container.getElement()[0])}))}},{key:"componentRender",value:function(e){this.setState(function(t){var n=new Set(t.renderPanels);return n.add(e),{renderPanels:n}})}},{key:"componentDestroy",value:function(e){this.setState(function(t){var n=new Set(t.renderPanels);return n.delete(e),{renderPanels:n}})}},{key:"componentDidMount",value:function(){this.goldenLayoutInstance=new h.a(this.props.config||{},g()("#layoutContainer")),e.myMainLayout=this.goldenLayoutInstance,this.props.registerComponents instanceof Function&&this.props.registerComponents(this.goldenLayoutInstance),this.goldenLayoutInstance.reactContainer=this,this.goldenLayoutInstance.init();/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));var t=this.goldenLayoutInstance;window.addEventListener("resize",function(e){t.updateSize("100%",g()(window).height())})}}]),n}(c.a.Component),f=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"_render",value:function(){var e=this._container.layoutManager.reactContainer;e&&e.componentRender&&e.componentRender(this)}},{key:"_destroy",value:function(){this._container.off("open",this._render,this),this._container.off("destroy",this._destroy,this)}},{key:"_getReactComponent",value:function(){var e={glEventHub:this._container.layoutManager.eventHub,glContainer:this._container},t=g.a.extend(e,this._container._config.props);return c.a.createElement(this._reactClass,t)}}]),t}(h.a.__lm.utils.ReactComponentHandler);h.a.__lm.utils.ReactComponentHandler=f}).call(this,n(14))},22:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return g});var a=n(5),i=n(6),s=n(8),o=n(7),l=n(9),r=n(0),c=n.n(r),u=n(13),m=n(3),d=n.n(m),h=n(11),p=n(36),g=function(t){function r(e){var t;return Object(a.a)(this,r),(t=Object(s.a)(this,Object(o.a)(r).call(this,e))).state={isLoaded:!1,focused:!1,agents:[],agentsCheck:[],dragSources:[],activeIndex:{},allIndexes:{}},t}return Object(l.a)(r,t),Object(i.a)(r,[{key:"render",value:function(){var t=this,a=this.state,i=a.isLoaded,s=a.agents,o=a.dragSources,l=a.allIndexes;if(!i){var r=n(20);return c.a.createElement("div",{className:"loading"},c.a.createElement(r,{name:"spinner enlargeSpinner",className:"rotate"}),c.a.createElement("br",null),"LOADING")}for(var m=0;m<localStorage.length;m++){var h=localStorage.key(m);"savedConnections"===h||h.includes("Host")||h.includes("Nick")||h.includes("Token")||h.includes("gl-")||h.includes("_latest")||h in s.active_agents||(localStorage.removeItem(h),localStorage.removeItem(h+"_latest"))}var p=Object.keys(s.active_agents).map(function(t,n){var a=this,i=s.active_agents[t];function o(){this.selectRow(n);var t={title:i.ip+"@"+i.pid+":"+i.procname,type:"react-component",component:"agents-menu-component",props:{agentuuid:i.uuid}};null===e.myMainLayout.selectedItem?e.myMainLayout.root.contentItems[0].addChild(t):e.myMainLayout.selectedItem.addChild(t)}return l[n]=i.uuid,c.a.createElement(u.b,{key:i.uuid,id:i.uuid+"shad0wMENU",renderTag:"tr",attributes:{id:i.uuid+"shad0w",className:"pointer "+(n in this.state.activeIndex&&"active-index")}},c.a.createElement("td",{onContextMenu:function(e){return a.selectRowRight(n,i.uuid)},onClick:function(e){return a.selectRow(n,i.uuid)},onDoubleClick:o.bind(this)},i.uuid),c.a.createElement("td",{onContextMenu:function(e){return a.selectRowRight(n,i.uuid)},onClick:function(e){return a.selectRow(n,i.uuid)},onDoubleClick:o.bind(this)},i.ip),c.a.createElement("td",{onContextMenu:function(e){return a.selectRowRight(n,i.uuid)},onClick:function(e){return a.selectRow(n,i.uuid)},onDoubleClick:o.bind(this)},"true"===i.admin?i.user+"*":i.user),c.a.createElement("td",{onContextMenu:function(e){return a.selectRowRight(n,i.uuid)},onClick:function(e){return a.selectRow(n,i.uuid)},onDoubleClick:o.bind(this)},i.hostname),c.a.createElement("td",{onContextMenu:function(e){return a.selectRowRight(n,i.uuid)},onClick:function(e){return a.selectRow(n,i.uuid)},onDoubleClick:o.bind(this)},i.platform),c.a.createElement("td",{onContextMenu:function(e){return a.selectRowRight(n,i.uuid)},onClick:function(e){return a.selectRow(n,i.uuid)},onDoubleClick:o.bind(this)},i.type),c.a.createElement("td",{onContextMenu:function(e){return a.selectRowRight(n,i.uuid)},onClick:function(e){return a.selectRow(n,i.uuid)},onDoubleClick:o.bind(this)},i.pid,":",i.procname),c.a.createElement("td",{onContextMenu:function(e){return a.selectRowRight(n,i.uuid)},onClick:function(e){return a.selectRow(n,i.uuid)},onDoubleClick:o.bind(this)},"smb"!==i.type?i.sleep+"\xb1"+i.jitter+"% ["+i.trueSleep+"]":"\u221e"))}.bind(this)),g=!1;if((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(g=!0),!g){var v=this.state.agents;d()(".pointer").each(function(){var t=d()(this).find("td").eq(0).text(),n={title:v.active_agents[t]?v.active_agents[t].ip+"@"+v.active_agents[t].pid+":"+v.active_agents[t].procname:"undefined",type:"react-component",component:"agents-menu-component",props:{agentuuid:t}};o.includes(t)||(e.myMainLayout.createDragSource(d()(this),n),o.push(t))}),o.forEach(function(e){if(0===d()("#"+e+"shad0w").length){var t=o.indexOf(e);-1!==t&&o.splice(t,1)}})}var f=Object.keys(s.active_agents).map(function(n){var a=t.state.activeIndex;return c.a.createElement(u.a,{key:n+"shad0wMENU",id:n+"shad0wMENU"},c.a.createElement(u.c,null,c.a.createElement("strong",null,Object.keys(t.state.activeIndex).length>1?"MULTIPLE":t.state.agents.active_agents[n].pid+":"+t.state.agents.active_agents[n].procname)),c.a.createElement(u.c,{onClick:function(){for(var t in a){var n={title:s.active_agents[a[t]]?s.active_agents[a[t]].ip+"@"+s.active_agents[a[t]].pid+":"+s.active_agents[a[t]].procname:"undefined",type:"react-component",component:"agents-menu-component",props:{agentuuid:a[t]}};null===e.myMainLayout.selectedItem?e.myMainLayout.root.contentItems[0].addChild(n):e.myMainLayout.selectedItem.addChild(n)}}},"Interact"))});return c.a.createElement("div",{tabIndex:"1",onKeyDown:function(e){return t.selectMany(e)},className:"scrollable-noflex-nopadding table-responsive",id:"Agents_main",ref:function(e){return t.node=e}},this.state.newCheckin&&c.a.createElement("div",{className:"static"}),f,c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"noHover"},c.a.createElement("th",null,"Agent"),c.a.createElement("th",null,"IP"),c.a.createElement("th",null,"User"),c.a.createElement("th",null,"Hostname"),c.a.createElement("th",null,"OS"),c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Process"),c.a.createElement("th",null,"Sleep"),c.a.createElement("th",null,"Last Checkin"))),c.a.createElement("tbody",null,p)))}},{key:"triggerStatic",value:function(){var e=this;this.setState({newCheckin:!0}),setTimeout(function(t){return e.setState({newCheckin:!1})},1e3)}},{key:"selectRow",value:function(e,t){document.getElementById("Agents_main").focus();var n=this.state.activeIndex;e in this.state.activeIndex?delete n[e]:n[e]=t,this.setState({activeIndex:n})}},{key:"selectRowRight",value:function(e,t){document.getElementById("Agents_main").focus();var n=this.state.activeIndex;n[e]=t,this.setState({activeIndex:n})}},{key:"selectMany",value:function(e){var t=this.state,n=t.activeIndex,a=t.allIndexes;if(a={},27===e.keyCode)return n={},void this.setState({activeIndex:n});if(16===e.keyCode)for(var i in this.state.allIndexes){var s=[];for(var o in n)s.push(o);var l=Math.max.apply(Math,s),r=Math.min.apply(Math,s);parseInt(i)<l&&parseInt(i)>=r&&l!==r&&(n[i]=this.state.allIndexes[i])}this.setState({activeIndex:n,allIndexes:a})}},{key:"handleClick",value:function(e){if("Agents_main"===e.target.id)this.setState({activeIndex:{}});else if(this.node.contains(e.target))return;this.setState({activeIndex:{}})}},{key:"componentDidMount",value:function(){this.state.agents;var e=p(Object(h.b)("Host")+"/beacons",{method:"GET",credentials:"include"}).json();console.log(e)}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("mousedown",function(t){return e.handleClick(t)},!1)}},{key:"componentDidUpdate",value:function(){}}]),r}(c.a.Component)}).call(this,n(14))},23:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return d});var a=n(5),i=n(6),s=n(8),o=n(7),l=n(9),r=n(10),c=n(0),u=n.n(c),m=n(24),d=(n(11),function(t){function n(t){var i;return Object(a.a)(this,n),(i=Object(s.a)(this,Object(o.a)(n).call(this,t))).handleSelect=function(t){var n,a=Object(r.a)(Object(r.a)(i)),s=t.target.files,o=new FileReader;o.onload=function(t){n=t.target.result;var i=new Uint8Array(n);i=e.from(i).toString("base64"),a.setState({displayDrop:!1,value:a.state.value.trim()+" "+i});var s=a.state.value.lastIndexOf(" "),o=a.state.value.substring(0,s);a.print_result_newline("".concat(o,'\n[+] Tasking agent to run "').concat(o,'"')),a.sendAgentData(!0)},o.readAsArrayBuffer(s[0])},i.handleDrop=function(t,n){var a,s=Object(r.a)(Object(r.a)(i)),o=new FileReader;o.onload=function(t){a=t.target.result;var n=new Uint8Array(a);n=e.from(n).toString("base64"),s.setState({displayDrop:!1,value:s.state.value.trim()+" "+n});var i=s.state.value.lastIndexOf(" "),o=s.state.value.substring(0,i);s.print_result_newline("".concat(o,'\n[+] Tasking agent to run "').concat(o,'"')),s.sendAgentData(!0)},o.readAsArrayBuffer(t[0])},i.time=null,i.scrollToBottom=function(){i.messagesEnd.current.scrollIntoView({behavior:"smooth"})},i.state={results:"",agentuuid:i.props.agentuuid,value:"",history:[],historyval:0,historylatest:"",latest_result:"",scroll:!0,displayDrop:!1},i.messagesEnd=u.a.createRef(),i.messageInput=u.a.createRef(),i.bg=u.a.createRef(),i}return Object(l.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.agentuuid,a=t.results,i=(0,this.props.getCommState)().active_agents[n];return u.a.createElement("div",{className:"wrap agent-terminal",ref:this.bg,onClick:function(t){return e.onBgClick(t)},onDoubleClick:function(t){return e.onBgClickDouble(t)},onContextMenu:function(t){return e.handleClick(t)}},u.a.createElement(m.a,{onDrop:this.handleDrop,className:this.state.displayDrop?"file-drop":"none"},u.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100%"},onClick:function(){return e.setState({displayDrop:!1})},tabIndex:"0",id:"dropBox"}," "),u.a.createElement("div",null,"Drop a DLL here or select one below.  Click anywhere to cancel."),u.a.createElement("input",{style:{zIndex:5e4},type:"file",onChange:function(t){return e.handleSelect(t)}})),u.a.createElement("div",{className:"output"},u.a.createElement("div",null,"[+] Agent ",i&&i.uuid," ",i?"Connected.":"Disconnected."),u.a.createElement("div",null,"I am Bender; Please insert girder."),u.a.createElement("br",null),u.a.createElement("div",null,"Type 'help' for a list of commands.  Type help [command] to see more details about a command."),u.a.createElement("div",null,"Click the window to scroll to the bottom.  To select text, right click to disable this feature and right click again to re-enable."),u.a.createElement("br",null),u.a.createElement("div",{className:"pre"},a),u.a.createElement("div",{style:{display:"flex"}},u.a.createElement("div",{style:{whiteSpace:"nowrap"}},this.state.scroll&&"*",this.getStub(),"\xa0"),u.a.createElement("input",{ref:this.messageInput,maxLength:"512",onChange:function(e){this.handleChange(e)}.bind(this),value:this.state.value,className:"input clear",onKeyDown:function(e){this.keyPress(e)}.bind(this)})),u.a.createElement("div",{style:{height:"0"},ref:this.messagesEnd})))}},{key:"arrayBufferToBase64",value:function(e){for(var t=new Uint8Array(e),n=t.byteLength,a=new Array(n),i=0;i<n;i++)a[i]=String.fromCharCode(t[i]);return window.btoa(a.join(""))}},{key:"getStub",value:function(){var e,t=this.state.agentuuid,n=(0,this.props.getCommState)().active_agents[t];if(n){(e=Math.max(((new Date).getTime()-n.lastCheckIn)/1e3))>=1&&(e=Math.ceil(e));var a=!1,i=e+"s";Math.floor(e)>6+parseInt(n.sleep)+parseInt(n.sleep)*(parseInt(n.jitter)/100)+1&&(a=!0),e<0&&(e=0),"0"===n.sleep?e="interactive":(e=e>86400?i+"("+(e=Math.floor(e/86400))+"d)":e>3600?i+"("+(e=Math.floor(e/3600))+"h)":e>60?i+"("+(e=Math.floor(e/60))+"m)":e>=1|0===e?i:1===Math.round(e)?Math.round(e)+"s":Math.round(1e3*e)+"ms",!0===a&&(e="[STALE] "+e))}var s=n&&n.trueSleep;return void 0===s&&(s="\u221e"),"Agent (".concat(n?n.platform:"N/A",") (").concat(e,")[").concat(n?s:"N/A","] >")}},{key:"print_result_newline",value:function(e){var t=this,n=this.state.agentuuid,a=this.state,i=a.results,s=a.latest_result;if(localStorage.getItem(n)&&(i=localStorage.getItem(n)),localStorage.getItem(n+"_latest")&&(s=localStorage.getItem(n+"_latest")),s!==e){i+=this.getStub()+" "+e+"\n";t.setState({results:i},function(){t.bottomScroll()}),localStorage.setItem(n,i)}}},{key:"print_result",value:function(e){var t,n,a=this,i=this.state.agentuuid,s=(0,this.props.getCommState)().active_agents[i],o=!1;s&&((t=Math.max(((new Date).getTime()-s.lastCheckIn)/1e3))>=1&&(t=Math.ceil(t)),Math.floor(t)>parseInt(s.sleep)+parseInt(s.sleep)*(parseInt(s.jitter)/100)&&(o=!0)),n=e.includes("[X]")?"N/A":e.length;var l=this.state,r=l.results,c=l.latest_result;localStorage.getItem(i)&&(r=localStorage.getItem(i));var u=r.split("Results >>")[r.split("Results >>").length-1];void 0===u&&(u="");var m=localStorage.getItem(i+"_latest");if(null===this.time|(Math.ceil(((new Date).getTime()-this.time)/1e3)>this.props.getCommState().active_agents[this.props.agentuuid].trueSleep&&!1===o)|"LOAD"===e|(void 0===s.sleep&&m!==e&&e!==c)|(u.includes(e)&&u.includes("Tasking agent to")&&"smb"===s.type)){if(this.props.getCommState().active_agents[this.props.agentuuid].trueSleep<1&&Math.ceil(((new Date).getTime()-this.time)/1e3)<2)return!1;this.time=(new Date).getTime(),r+="LOAD"===e?"":"Results >>\n"+e+"\n[+] Host responded with ["+n+"] bytes.\n";a.setState({results:r,latest_result:e,dedup:!0},function(){localStorage.setItem(i,r),localStorage.setItem(i+"_latest",e),a.bottomScroll()})}}},{key:"onBgClick",value:function(e){this.state.scroll&&(!1===this.isInViewport()?this.bottomScroll():this.messageInput.current.focus())}},{key:"onBgClickDouble",value:function(e){this.state.scroll&&(!1===this.isInViewport()?this.bottomScroll():this.messageInput.current.focus())}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.state.scroll;2===e.button&&(t=!t,this.setState({scroll:t}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"keyPress",value:function(e){var t=this;if(38===e.keyCode){var n=this.state,a=n.value,i=n.history,s=n.historyval,o=n.historylatest;return s===i.length&&(o=a),s>0&&s--,a=i[s],e.preventDefault(),this.HAXLOL=!0,this.setState({value:a,historyval:s,historylatest:o}),!1}if(40===e.keyCode){var l=this.state,r=l.value,c=l.history,u=l.historyval,m=l.historylatest;return u!==c.length&&u++,r=u===c.length+1?c[u-1]:u===c.length?m:c[u],e.preventDefault(),this.HAXLOL=!0,this.setState({value:r,historyval:u}),!1}if(13===e.keyCode){this.bottomScroll();var d=this.state.agentuuid,h=(0,this.props.getCommState)(),p={};if(void 0===h.active_agents[d])return this.print_result_newline("Agent no longer exists - please close window."),void this.setState({value:""});switch(h.active_agents[d].platform){case"win32":"smb"===h.active_agents[d].type&&delete h.win32commands.sleep,p=h.win32commands;break;case"win64":"smb"===h.active_agents[d].type&&delete h.win64commands.sleep,p=h.win64commands;break;case"linux":p=h.linuxcommands;break;case"darwin":p=h.darwincommands}if(p.clear=["Clear the current agent panel."],p.help=["Show help menu.","help [command]","Display the help menu for a command."],""===this.state.value)return this.print_result_newline(" "),!1;if("help"===this.state.value||"help"===this.state.value.split(" ")[0]){var g=this.state.value.split(" ");if(g[1]){var v=g[1];v in p?2===p[v].length?this.print_result_newline(this.state.value+"\nUsage: "+p[v][1]+"\nHelp: "+p[v][0]+"\n"):3===p[v].length?this.print_result_newline(this.state.value+"\nUsage: "+p[v][1]+"\nHelp: "+p[v][0]+"\n"+p[v][2]+"\n"):this.print_result_newline(this.state.value+"\nUsage: "+v+"\nHelp: "+p[v][0]+"\n"):this.print_result_newline(this.state.value+"\nCommand does not exist!"),this.setState({value:""})}else{var f="",k={};for(var b in Object.keys(p).sort().forEach(function(e){k[e]=p[e]}),k)f+='\n"'.concat(b,'" : ').concat(k[b][0]);this.print_result_newline(this.state.value+"\n[+] Listing ["+Object.keys(p).length+"] "+h.active_agents[d].platform+" commands."+f),this.setState({value:""})}}else if("clear"===this.state.value||"clear"===this.state.value.split(" ")[0])this.setState({value:"",results:"",latest_result:""}),localStorage.removeItem(d),localStorage.removeItem(d+"_latest");else if(this.state.value.split(" ")[0]in p)if("inject"===this.state.value.split(" ")[0])if(this.state.value.split(" ").length<3||this.state.value.split(" ").length>5)this.print_result_newline("".concat(this.state.value,"\n[-] Wrong number of arguments.  Use 'help inject' for more info.")),this.setState({value:""});else{3!==this.state.value.split(" ").length&&""!==this.state.value.split(" ")[3]&&" "!==this.state.value.split(" ")[3]||this.setState({value:this.state.value.trim()+" none"});t.setState({displayDrop:!0},function(){document.getElementById("dropBox").focus()})}else if("shInject"===this.state.value.split(" ")[0])if(this.state.value.split(" ").length<3||this.state.value.split(" ").length>4)this.print_result_newline("".concat(this.state.value,"\n[-] Wrong number of arguments.  Use 'help shInject' for more info.")),this.setState({value:""});else{t.setState({displayDrop:!0},function(){document.getElementById("dropBox").focus()})}else this.print_result_newline("".concat(this.state.value,'\n[+] Tasking agent to run "').concat(this.state.value,'"')),this.sendAgentData();else this.print_result_newline("".concat(this.state.value,"\n[-] Invalid command.  Type 'help' for a list of commands.")),this.setState({value:""})}}},{key:"sendAgentData",value:function(e){var t=this.state,n=t.history,a=t.historyval,i=t.value;t.historylatest;if("",n.length>1024&&(n=n.slice(n.length-1024)),!0===e){n=n.concat(i);var s=i.lastIndexOf(" "),o=i.substring(0,s);n=n.concat(o)}else n=n.concat(i);a=n.length,this.setState({history:n,historyval:a,value:i,historylatest:""}),this.setState({value:""})}},{key:"bottomScroll",value:function(){this.scrollToBottom();var e=this.messageInput.current;if(e&&this.HAXLOL){this.HAXLOL=!1;var t=this.state.value;null!=t&&e.setSelectionRange(t.length,t.length)}}},{key:"isInViewport",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!this.messageInput.current)return!1;var t=this.messageInput.current.getBoundingClientRect().top;return t+e>=0&&t-e<=window.innerHeight}},{key:"componentDidMount",value:function(){var e=this;this.scrollToBottom(),this.state.agentuuid in(0,this.props.getCommState)().active_agents&&this.print_result("LOAD"),setInterval(function(t){return e.forceUpdate()},1e3)}},{key:"componentDidUpdate",value:function(){var e=this.state.agentuuid,t=(0,this.props.getCommState)();if(e in t.active_agents&&"results"in t.active_agents[e]){var n=t.active_agents[e].results;this.print_result(n.join("\n"))}}}]),n}(u.a.Component))}).call(this,n(19).Buffer)},25:function(e,t,n){e.exports=n.p+"static/media/background.977e3fd0.jpg"},26:function(e){e.exports={name:"shad0w-gui",version:"1.0.0",description:"First version of shad0w gui",private:!0,dependencies:{"bootstrap-css-only":"^4.3.1",enzyme:"^3.10.0","golden-layout":"^1.5.9",grpc:"^1.24.2","js-file-download":"^0.4.8",md5:"^2.2.1",react:"^16.12.0","react-confirm-alert":"^2.4.1","react-contextmenu":"^2.13.0","react-dom":"^16.12.0","react-file-drop":"^0.2.8","react-fontawesome":"^1.7.1","react-icons":"^3.8.0","react-router-dom":"^4.3.1","react-vis-network":"^1.0.0","sync-fetch":"^0.3.0"},homepage:"./",main:"electron-starter.js",scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test",eject:"react-scripts eject",electron:"electron .","electron-build":"npm run build && electron ."},eslintConfig:{extends:"react-app"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"],devDependencies:{electron:"^5.0.12","electron-packager":"^14.1.1","react-scripts":"^2.1.8"}}},27:function(e,t,n){e.exports=n(65)},32:function(e,t,n){},33:function(e,t,n){"use strict";var a=n(3),i=n.n(a);window.$=i.a,window.jQuery=i.a,window.jquery=i.a},63:function(e,t,n){},64:function(e,t,n){(function(e){e.myMainLayout=void 0}).call(this,n(14))},65:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(12),o=n.n(s),l=(n(32),n(11));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(64);window.React=i.a,window.ReactDOM=o.a,o.a.render(i.a.createElement(l.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.7b31ef98.chunk.js.map