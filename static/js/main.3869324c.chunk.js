(this.webpackJsonpfosfoquim=this.webpackJsonpfosfoquim||[]).push([[0],{121:function(e,a,t){e.exports=t.p+"static/media/logo.38e28fdc.svg"},128:function(e,a,t){e.exports=t.p+"static/media/mail.51c44790.svg"},20:function(e,a,t){e.exports=t.p+"static/media/down-arrow.e840bd6a.svg"},234:function(e,a,t){e.exports=t.p+"static/media/search.c749c649.svg"},245:function(e,a,t){e.exports=t.p+"static/media/logout.b6890bc9.svg"},246:function(e,a,t){e.exports=t.p+"static/media/menu.abec3eda.svg"},247:function(e,a,t){e.exports=t.p+"static/media/chip.2b36db2f.svg"},248:function(e,a,t){e.exports=t.p+"static/media/gear.9501fe4d.svg"},249:function(e,a,t){e.exports=t.p+"static/media/team.f5936394.svg"},250:function(e,a,t){e.exports=t.p+"static/media/device-active.f045f0f6.svg"},251:function(e,a,t){e.exports=t.p+"static/media/clients-active.55a6fa73.svg"},252:function(e,a,t){e.exports=t.p+"static/media/accounts-active.1a26c22e.svg"},286:function(e,a,t){e.exports=t(543)},295:function(e,a,t){},296:function(e,a,t){},297:function(e,a,t){},298:function(e,a,t){},300:function(e,a,t){},301:function(e,a,t){},50:function(e,a,t){e.exports=t.p+"static/media/calendar.0b933919.svg"},533:function(e,a,t){},534:function(e,a,t){},535:function(e,a,t){},536:function(e,a,t){},537:function(e,a,t){},538:function(e,a,t){},539:function(e,a,t){},540:function(e,a,t){},541:function(e,a,t){},542:function(e,a,t){},543:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(13),s=t.n(l),i=t(80),r=t(109),m={navOpened:!1};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_NAV":return Object.assign({},e,{navOpened:!e.navOpened});default:return e}},u=Object(r.b)(o),d=t(33),v=t(57),E=t(29),p=(t(295),t(14)),h=t(15),y=t(16),N=t(17),f=(t(296),t(297),t(577)),b=(t(298),function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={},e}return Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,{item:!0,xs:12,md:6,lg:4,xl:3},c.a.createElement("div",{className:"device-card"},c.a.createElement("div",{className:"device-card-content"},c.a.createElement("div",{className:"device-card-header"},c.a.createElement("div",{className:"device-number"},"#3455"),c.a.createElement("div",{className:"device-type"},"Type 1")),c.a.createElement("div",{className:"device-card-body"},c.a.createElement("div",{className:"left"},c.a.createElement("p",{className:"label"},"Device field 1"),c.a.createElement("p",{className:"last-seen"},"Last seen 2 min ago")),c.a.createElement("div",{className:"right"},c.a.createElement("span",null,"0")," alerts"))),c.a.createElement("div",{className:"device-details"},c.a.createElement(d.b,{to:"/device"},"View Details"))))}}]),t}(n.Component)),g=t(589),C=t(588),k=t(234),O=t.n(k),w=t(20),j=t.n(w),D=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={selectedClient:"all",selectedCountry:"all",selectedType:"all",items:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]},e}return Object(h.a)(t,[{key:"selectClient",value:function(e){this.setState({selectedClient:e.target.value})}},{key:"selectCountry",value:function(e){this.setState({selectedCountry:e.target.value})}},{key:"selectType",value:function(e){this.setState({selectedType:e.target.value})}},{key:"render",value:function(){var e=this,a=this.state,t=a.selectedClient,n=a.selectedCountry,l=a.selectedType,s=a.items;return c.a.createElement("main",{className:"main-section devices-section"},c.a.createElement("div",{className:"section-header"},c.a.createElement("div",{className:"title"},c.a.createElement("h3",null,"Find devices")),c.a.createElement("p",{className:"last-seen"},c.a.createElement("img",{src:O.a,alt:""}),c.a.createElement("input",{type:"text",placeholder:"Search by name or code"}))),c.a.createElement("div",{className:"list-filters"},c.a.createElement(f.a,{container:!0,spacing:3},c.a.createElement(f.a,{item:!0,xs:12,md:6,lg:4,xl:3},c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Client:"),c.a.createElement(C.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,onChange:function(a){e.selectClient(a)}},c.a.createElement(g.a,{value:"all"},"All"),c.a.createElement(g.a,{value:"client1"},"Client 1"),c.a.createElement(g.a,{value:"client2"},"Client 2"),c.a.createElement(g.a,{value:"client3"},"Client 3")),c.a.createElement("img",{src:j.a,alt:""}))),c.a.createElement(f.a,{item:!0,xs:12,md:6,lg:4,xl:3},c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Country:"),c.a.createElement(C.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,onChange:function(a){e.selectCountry(a)}},c.a.createElement(g.a,{value:"all"},"All"),c.a.createElement(g.a,{value:"country1"},"Country 1"),c.a.createElement(g.a,{value:"country2"},"Country 2"),c.a.createElement(g.a,{value:"country3"},"Country 3")),c.a.createElement("img",{src:j.a,alt:""}))),c.a.createElement(f.a,{item:!0,xs:12,md:6,lg:4,xl:3},c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Type:"),c.a.createElement(C.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,onChange:function(a){e.selectType(a)}},c.a.createElement(g.a,{value:"all"},"All"),c.a.createElement(g.a,{value:"co2"},"CO2"),c.a.createElement(g.a,{value:"temperature"},"Temperature"),c.a.createElement(g.a,{value:"humidity"},"Humidity")),c.a.createElement("img",{src:j.a,alt:""}))))),c.a.createElement("div",{className:"device-list-container"},c.a.createElement("div",{className:"devices-list"},c.a.createElement(f.a,{container:!0,spacing:3},s.map((function(e){return c.a.createElement(b,{key:e.id})}))))))}}]),t}(n.Component),A=(t(300),t(301),t(52)),x=t.n(A),M=(t(137),t(50)),S=t.n(M),T=t(30),F=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={startDate:new Date,endDate:new Date,selectedType:"co2",data:[{date:"March 03",value:39},{date:"March 05",value:47},{date:"March 09",value:85},{date:"March 11",value:32},{date:"March 13",value:67},{date:"March 15",value:65},{date:"March 16",value:54},{date:"March 17",value:97}],width:0},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.chartContainer.offsetWidth;this.setState({width:e})}},{key:"changeStartDate",value:function(e){this.setState({startDate:e})}},{key:"changeEndDate",value:function(e){this.setState({endDate:e})}},{key:"selectType",value:function(e){this.setState({selectedType:e.target.value})}},{key:"render",value:function(){var e=this,a=this.state,t=a.startDate,n=a.endDate,l=a.selectedType,s=a.data,i=a.width;return c.a.createElement("main",{className:"main-section data-section"},c.a.createElement("div",{className:"data-header"},c.a.createElement("div",{className:"date-pickers"},c.a.createElement("div",{className:"picker-wrapp"},c.a.createElement("div",{className:"pickers"},c.a.createElement("span",{className:"date-header-label"},"From:"),c.a.createElement(x.a,{className:"date-picker",selected:t,onChange:function(a){e.changeStartDate(a)},dateFormat:"MMMM d, yyyy h:mm aa"}),c.a.createElement("img",{src:S.a,alt:""}))),c.a.createElement("div",{className:"picker-wrapp"},c.a.createElement("div",{className:"pickers"},c.a.createElement("span",{className:"date-header-label"},"To:"),c.a.createElement(x.a,{className:"date-picker",selected:n,onChange:function(a){e.changeEndDate(a)},dateFormat:"MMMM d, yyyy h:mm aa"}),c.a.createElement("img",{src:S.a,alt:""})))),c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Value:"),c.a.createElement(C.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,onChange:function(a){e.selectType(a)}},c.a.createElement(g.a,{value:"co2"},"CO2"),c.a.createElement(g.a,{value:"temperature"},"Temperature"),c.a.createElement(g.a,{value:"humidity"},"Humidity")),c.a.createElement("img",{src:j.a,alt:""}))),c.a.createElement("div",{className:"chart-container",ref:"chartContainer"},c.a.createElement(T.c,{width:i,height:600,data:s,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(T.e,{dataKey:"date"}),c.a.createElement(T.f,null),c.a.createElement(T.d,null),c.a.createElement(T.a,{strokeDasharray:"3 3"}),c.a.createElement(T.b,{type:"monotone",dataKey:"value",stroke:"#F24130"}))))}}]),t}(n.Component),L=(t(533),function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={alerts:[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9}]},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this,a=this.state.alerts;return c.a.createElement("main",{className:"main-section alert-section"},c.a.createElement("div",{className:"alerts"},a.map((function(e){return c.a.createElement("div",{className:"alert-item",key:e.id},c.a.createElement("div",{className:"label"},"Value over 20ppm - Channel A"),c.a.createElement("div",{className:"actions"},c.a.createElement("span",{className:"last-seen"},"20 min ago"),c.a.createElement("div",{className:"expand-btn"},c.a.createElement("img",{src:j.a,alt:""}))))}))),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"main-btn",onClick:function(){e.props.openConfig(1)}},"Alerts Config"),c.a.createElement("button",{className:"main-btn",onClick:function(){e.props.openConfig(2)}},"Device Config")))}}]),t}(n.Component)),I=(t(534),t(583)),J=t(587),V=t(586),G=t(582),q=t(584),H=t(585),P=t(581),U=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={data:[{id:1,name:"Max Thresh",channel:"2",value:"20 ppm",recipients:"john.doe@gmail.com",valid:"Permanent"},{id:2,name:"Max Thresh",channel:"2",value:"20 ppm",recipients:"john.doe@gmail.com",valid:"Permanent"},{id:3,name:"Max Thresh",channel:"2",value:"20 ppm",recipients:"john.doe@gmail.com",valid:"Permanent"},{id:4,name:"Max Thresh",channel:"2",value:"20 ppm",recipients:"john.doe@gmail.com",valid:"Permanent"}],active:0},e}return Object(h.a)(t,[{key:"close",value:function(){this.props.close()}},{key:"setActive",value:function(e){this.setState({active:e})}},{key:"render",value:function(){var e=this,a=this.state,t=a.data,n=a.active;return c.a.createElement("div",{className:"dialog-container"},c.a.createElement("div",{className:"section-header"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"back",onClick:function(){e.close()}},c.a.createElement("img",{src:j.a,alt:""})),c.a.createElement("h3",null,"Alerts set"))),c.a.createElement("div",{className:"alerts-set-table"},c.a.createElement(G.a,{component:P.a,className:"clients-list table-container"},c.a.createElement(I.a,{stickyHeader:!0,"aria-label":"simple table"},c.a.createElement(q.a,null,c.a.createElement(H.a,null,c.a.createElement(V.a,null,"Alert Name"),c.a.createElement(V.a,null,"Channel"),c.a.createElement(V.a,null,"Value"),c.a.createElement(V.a,null,"Recipients"),c.a.createElement(V.a,null,"Valid Until"))),c.a.createElement(J.a,null,t.map((function(a){return c.a.createElement(H.a,{key:a.id,onClick:function(){e.setActive(a.id)},className:a.id===n?"active":""},c.a.createElement(V.a,null,a.name),c.a.createElement(V.a,null,a.channel),c.a.createElement(V.a,null,a.value),c.a.createElement(V.a,null,a.recipients),c.a.createElement(V.a,null,a.valid))}))))),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"main-btn"},"New"),c.a.createElement("button",{className:"main-btn"},"Edit"),c.a.createElement("button",{className:"main-btn"},"Delete"))))}}]),t}(n.Component),B=(t(535),function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={aliasInput:"Field Device 3",companyLocation:"Main plant",channelAlias:"Mixture 1",companyUnits:"ppm"},e}return Object(h.a)(t,[{key:"changeAlias",value:function(e){this.setState({aliasInput:e.target.value})}},{key:"changeLocations",value:function(e){this.setState({companyLocation:e.target.value})}},{key:"changeChannelAlias",value:function(e){this.setState({channelAlias:e.target.value})}},{key:"changeUnits",value:function(e){this.setState({companyUnits:e.target.value})}},{key:"close",value:function(){this.props.close()}},{key:"render",value:function(){var e=this,a=this.state,t=a.aliasInput,n=a.companyLocation,l=a.channelAlias,s=a.companyUnits;return c.a.createElement("div",{className:"dialog-container"},c.a.createElement("div",{className:"section-header"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"back",onClick:function(){e.close()}},c.a.createElement("img",{src:j.a,alt:""})),c.a.createElement("h3",null,"Device config"))),c.a.createElement("div",{className:"device-config-container"},c.a.createElement("div",{className:"device-config"},c.a.createElement("div",{className:"device-details"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Device ID:"),c.a.createElement("span",null,"3")),c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Alias:"),c.a.createElement("input",{type:"text",className:"textfield",value:t,onChange:function(a){e.changeAlias(a)}}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Device Type:"),c.a.createElement("span",null,"Type 3")),c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Location:"),c.a.createElement("input",{type:"text",className:"textfield",value:n,onChange:function(a){e.changeLocations(a)}})))),c.a.createElement("div",{className:"device-channels"},c.a.createElement("div",{className:"label"},"Channels"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"name"},"Channel 1"),c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Alias:"),c.a.createElement("input",{type:"text",className:"textfield",value:l,onChange:function(a){e.changeChannelAlias(a)}})),c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Units:"),c.a.createElement("input",{type:"text",className:"textfield",value:s,onChange:function(a){e.changeUnits(a)}}))))),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"main-btn"},"Save"))))}}]),t}(n.Component)),K=(t(536),function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={startDate:new Date,endDate:new Date,technician:"--name--",location:"--name--",customer:"--name--",facility:"--name--",treatment:"--name--",notes:"Some notes"},e}return Object(h.a)(t,[{key:"changeStartDate",value:function(e){this.setState({startDate:e})}},{key:"changeEndDate",value:function(e){this.setState({endDate:e})}},{key:"changeTechnician",value:function(e){this.setState({technician:e.target.value})}},{key:"changeLocation",value:function(e){this.setState({location:e.target.value})}},{key:"changeCustomer",value:function(e){this.setState({customer:e.target.value})}},{key:"changeFacility",value:function(e){this.setState({facility:e.target.value})}},{key:"changeTreatment",value:function(e){this.setState({treatment:e.target.value})}},{key:"changeNotes",value:function(e){this.setState({notes:e.target.value})}},{key:"close",value:function(){this.props.close()}},{key:"render",value:function(){var e=this,a=this.state,t=a.startDate,n=a.endDate,l=a.technician,s=a.location,i=a.customer,r=a.facility,m=a.treatment,o=a.notes;return c.a.createElement("div",{className:"dialog-container"},c.a.createElement("div",{className:"section-header"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"back",onClick:function(){e.close()}},c.a.createElement("img",{src:j.a,alt:""})),c.a.createElement("h3",null,"Create report"))),c.a.createElement("div",{className:"report-config-container"},c.a.createElement("div",{className:"report-create"},c.a.createElement("div",{className:"date-range"},c.a.createElement("div",{className:"label"},"Set time range"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"picker-wrapp"},c.a.createElement("div",{className:"pickers"},c.a.createElement("span",{className:"date-header-label"},"From:"),c.a.createElement(x.a,{className:"date-picker",selected:t,onChange:function(a){e.changeStartDate(a)},dateFormat:"MMMM d, yyyy h:mm aa"}),c.a.createElement("img",{src:S.a,alt:""}))),c.a.createElement("div",{className:"picker-wrapp"},c.a.createElement("div",{className:"pickers"},c.a.createElement("span",{className:"date-header-label"},"To:"),c.a.createElement(x.a,{className:"date-picker",selected:n,onChange:function(a){e.changeEndDate(a)},dateFormat:"MMMM d, yyyy h:mm aa"}),c.a.createElement("img",{src:S.a,alt:""}))))),c.a.createElement("div",{className:"label"},"Report Information"),c.a.createElement("div",{className:"report-options"},c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Technician:"),c.a.createElement("input",{type:"text",className:"textfield",value:l,onChange:function(a){e.changeTechnician(a)}})),c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Customer:"),c.a.createElement("input",{type:"text",className:"textfield",value:i,onChange:function(a){e.changeCustomer(a)}})),c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Treatment ID:"),c.a.createElement("input",{type:"text",className:"textfield",value:m,onChange:function(a){e.changeTreatment(a)}}))),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Location:"),c.a.createElement("input",{type:"text",className:"textfield",value:s,onChange:function(a){e.changeLocation(a)}})),c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Facility:"),c.a.createElement("input",{type:"text",className:"textfield",value:r,onChange:function(a){e.changeFacility(a)}}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Notes:"),c.a.createElement("textarea",{type:"text",className:"textfield",value:o,onChange:function(a){e.changeNotes(a)}}))))),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"main-btn"},"Create"))))}}]),t}(n.Component)),W=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={tabValue:0,openConfig:0},e}return Object(h.a)(t,[{key:"changeTab",value:function(e){this.setState({tabValue:e})}},{key:"setOpeningPopup",value:function(e){this.setState({openConfig:e})}},{key:"close",value:function(){this.setState({openConfig:0})}},{key:"render",value:function(){var e=this,a=this.state,t=a.tabValue,n=a.openConfig;return c.a.createElement("main",{className:"main-section"},c.a.createElement("div",{className:"section-header"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"back",onClick:function(){e.props.history.goBack()}},c.a.createElement("img",{src:j.a,alt:""})),c.a.createElement("h3",null,"Field device (#1456) - Type 1")),c.a.createElement("p",{className:"last-seen"}," Last seen 2 min ago ")),c.a.createElement("div",{className:"tabs-header"},c.a.createElement("div",{className:"tabs"},c.a.createElement("div",{className:0===t?"tab active":"tab",onClick:function(){e.changeTab(0)}},"Data"),c.a.createElement("div",{className:1===t?"tab active":"tab",onClick:function(){e.changeTab(1)}},"Alerts and Config")),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"main-btn"},"Download Data"),c.a.createElement("button",{className:"main-btn",onClick:function(){e.setOpeningPopup(3)}},"Create Report"))),c.a.createElement("div",{className:"tab-content"},0===t?c.a.createElement("div",{className:"tab-item"},c.a.createElement(F,null)):c.a.createElement("div",{className:"tab-item"},c.a.createElement(L,{openConfig:function(a){e.setOpeningPopup(a)},close:function(){e.close()}}))),1===n?c.a.createElement("div",{className:"dialog-wrapp"},c.a.createElement(U,{close:function(){e.close()}})):"",2===n?c.a.createElement("div",{className:"dialog-wrapp"},c.a.createElement(B,{close:function(){e.close()}})):"",3===n?c.a.createElement("div",{className:"dialog-wrapp"},c.a.createElement(K,{close:function(){e.close()}})):"")}}]),t}(n.Component),R=(t(537),t(128)),_=t.n(R),$=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={data:[{id:1,company:"Company 1",owner:"Owner 1",country:"Country 1",devices:3},{id:2,company:"Company 2",owner:"Owner 2",country:"Country 2",devices:4},{id:3,company:"Company 3",owner:"Owner 3",country:"Country 3",devices:6},{id:4,company:"Company 4",owner:"Owner 4",country:"Country 4",devices:1},{id:5,company:"Company 5",owner:"Owner 5",country:"Country 5",devices:10},{id:6,company:"Company 6",owner:"Owner 6",country:"Country 6",devices:8},{id:7,company:"Company 7",owner:"Owner 7",country:"Country 7",devices:4},{id:8,company:"Company 8",owner:"Owner 8",country:"Country 8",devices:3},{id:9,company:"Company 9",owner:"Owner 9",country:"Country 9",devices:3}],active:0,selectedCountry:"country1",companyInput:"Company 1"},e}return Object(h.a)(t,[{key:"setActive",value:function(e){this.setState({active:e})}},{key:"selectCountry",value:function(e){this.setState({selectedCountry:e.target.value})}},{key:"changeCompanyName",value:function(e){this.setState({companyInput:e.target.value})}},{key:"render",value:function(){var e=this,a=this.state,t=a.data,n=a.active,l=a.selectedCountry,s=a.companyInput;return c.a.createElement("main",{className:"main-section"},c.a.createElement("div",{className:"section-header"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"back",onClick:function(){e.props.history.goBack()}},c.a.createElement("img",{src:j.a,alt:""})),c.a.createElement("h3",null,"Clients List"))),c.a.createElement("div",{className:"clients-list-container"},c.a.createElement(G.a,{component:P.a,className:"clients-list table-container"},c.a.createElement(I.a,{stickyHeader:!0,"aria-label":"simple table"},c.a.createElement(q.a,null,c.a.createElement(H.a,null,c.a.createElement(V.a,null,"Company Name"),c.a.createElement(V.a,null,"Owner"),c.a.createElement(V.a,null,"Country"),c.a.createElement(V.a,null,"Devices"))),c.a.createElement(J.a,null,t.map((function(a){return c.a.createElement(H.a,{key:a.id,onClick:function(){e.setActive(a.id)},className:a.id===n?"active":""},c.a.createElement(V.a,null,a.company),c.a.createElement(V.a,null,a.owner),c.a.createElement(V.a,null,a.country),c.a.createElement(V.a,null,a.devices))}))))),n?c.a.createElement("div",{className:"client-edit"},c.a.createElement("p",{className:"company-name"},"Company 1"),c.a.createElement("div",{className:"company-settings"},c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Company Name:"),c.a.createElement("input",{type:"text",className:"textfield",value:s,onChange:function(a){e.changeCompanyName(a)}})),c.a.createElement("div",{className:"type-select"},c.a.createElement("span",{className:"date-header-label"},"Country:"),c.a.createElement(C.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,onChange:function(a){e.selectCountry(a)}},c.a.createElement(g.a,{value:"all"},"All"),c.a.createElement(g.a,{value:"country1"},"Country 1"),c.a.createElement(g.a,{value:"country2"},"Country 2"),c.a.createElement(g.a,{value:"country3"},"Country 3"),c.a.createElement(g.a,{value:"country4"},"Country 4"),c.a.createElement(g.a,{value:"country5"},"Country 5"),c.a.createElement(g.a,{value:"country6"},"Country 6"),c.a.createElement(g.a,{value:"country7"},"Country 7"),c.a.createElement(g.a,{value:"country8"},"Country 8"),c.a.createElement(g.a,{value:"country9"},"Country 9")),c.a.createElement("img",{src:j.a,alt:""})))):"",n?c.a.createElement("div",{className:"client-details"},c.a.createElement("div",{className:"details-bottom"},c.a.createElement("div",{className:"contacts"},c.a.createElement("p",null,c.a.createElement("span",{className:"label"},"Contacts"),c.a.createElement("span",{className:"add"},"Add contact")),c.a.createElement("div",{className:"contact-item"},c.a.createElement("div",{className:"contact-info"},c.a.createElement("div",{className:"name"},"John Doe"),c.a.createElement("div",{className:"mail"},"john.doe@gmail.com")),c.a.createElement("a",{href:"mailto:john.doe@gmail.com",className:"mail-btn"},c.a.createElement("img",{src:_.a,alt:""}))),c.a.createElement("div",{className:"contact-item"},c.a.createElement("div",{className:"contact-info"},c.a.createElement("div",{className:"name"},"John Doe"),c.a.createElement("div",{className:"mail"},"john.doe@gmail.com")),c.a.createElement("a",{href:"mailto:john.doe@gmail.com",className:"mail-btn"},c.a.createElement("img",{src:_.a,alt:""}))),c.a.createElement("div",{className:"contact-item"},c.a.createElement("div",{className:"contact-info"},c.a.createElement("div",{className:"name"},"John Doe"),c.a.createElement("div",{className:"mail"},"john.doe@gmail.com")),c.a.createElement("a",{href:"mailto:john.doe@gmail.com",className:"mail-btn"},c.a.createElement("img",{src:_.a,alt:""})))),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"main-btn"},"View Devices"),c.a.createElement("button",{className:"main-btn"},"Delete Account")))):""))}}]),t}(n.Component),z=(t(538),function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={data:[{id:1,company:"John Doe",owner:"john.doe@gmail.com",country:"Admin",devices:"All"},{id:2,company:"John Doe",owner:"john.doe@gmail.com",country:"Admin",devices:"All"},{id:3,company:"John Doe",owner:"john.doe@gmail.com",country:"Admin",devices:"All"},{id:4,company:"John Doe",owner:"john.doe@gmail.com",country:"Admin",devices:"All"},{id:5,company:"John Doe",owner:"john.doe@gmail.com",country:"Admin",devices:"All"},{id:6,company:"John Doe",owner:"john.doe@gmail.com",country:"Admin",devices:"All"},{id:7,company:"John Doe",owner:"john.doe@gmail.com",country:"Admin",devices:"All"}],accessData:[{id:1,device:"4561",from:"06/03/2020",to:"06/04/2020",link:"dashboard.fosfoquim.cl/device/4561"},{id:2,device:"4561",from:"06/03/2020",to:"06/04/2020",link:"dashboard.fosfoquim.cl/device/4561"},{id:3,device:"4561",from:"06/03/2020",to:"06/04/2020",link:"dashboard.fosfoquim.cl/device/4561"},{id:4,device:"4561",from:"06/03/2020",to:"06/04/2020",link:"dashboard.fosfoquim.cl/device/4561"},{id:5,device:"4561",from:"06/03/2020",to:"06/04/2020",link:"dashboard.fosfoquim.cl/device/4561"}],active:0},e}return Object(h.a)(t,[{key:"setActive",value:function(e){this.setState({active:e})}},{key:"render",value:function(){var e=this,a=this.state,t=a.data,n=a.accessData,l=a.active;return c.a.createElement("main",{className:"main-section"},c.a.createElement("div",{className:"section-header"},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"back",onClick:function(){e.props.history.goBack()}},c.a.createElement("img",{src:j.a,alt:""})),c.a.createElement("h3",null,"Accounts List"))),c.a.createElement("div",{className:"accounts-list-container"},c.a.createElement("div",{className:"account-table-container"},c.a.createElement(G.a,{component:P.a,className:"table-container"},c.a.createElement(I.a,{stickyHeader:!0,"aria-label":"simple table"},c.a.createElement(q.a,null,c.a.createElement(H.a,null,c.a.createElement(V.a,null,"Name"),c.a.createElement(V.a,null,"Mail"),c.a.createElement(V.a,null,"Account Type"),c.a.createElement(V.a,null,"Access"))),c.a.createElement(J.a,null,t.map((function(a){return c.a.createElement(H.a,{key:a.id,onClick:function(){e.setActive(a.id)},className:a.id===l?"active":""},c.a.createElement(V.a,null,a.company),c.a.createElement(V.a,null,a.owner),c.a.createElement(V.a,null,a.country),c.a.createElement(V.a,null,a.devices))}))))),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"main-btn"},"New Account"),c.a.createElement("button",{className:"main-btn"},"Edit"))),c.a.createElement("div",{className:"account-table-container"},c.a.createElement(G.a,{component:P.a,className:"table-container"},c.a.createElement(I.a,{stickyHeader:!0,"aria-label":"simple table"},c.a.createElement(q.a,null,c.a.createElement(H.a,null,c.a.createElement(V.a,null,"ID"),c.a.createElement(V.a,null,"Device"),c.a.createElement(V.a,null,"From"),c.a.createElement(V.a,null,"To"),c.a.createElement(V.a,null,"Link"))),c.a.createElement(J.a,null,n.map((function(a){return c.a.createElement(H.a,{key:a.id,onClick:function(){e.setActive(a.id)},className:a.id===l?"active":""},c.a.createElement(V.a,null,a.id),c.a.createElement(V.a,null,a.device),c.a.createElement(V.a,null,a.from),c.a.createElement(V.a,null,a.to),c.a.createElement(V.a,null,a.link))}))))),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"main-btn"},"New Access"),c.a.createElement("button",{className:"main-btn"},"Edit")))))}}]),t}(n.Component));t(539);var Q=t(121),X=t.n(Q),Y=t(245),Z=t.n(Y),ee=t(246),ae=t.n(ee);var te=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("header",{className:"main-header"},c.a.createElement("div",{className:"header-left"},c.a.createElement("div",{className:"menu",onClick:function(){e.props.toggleNav()}},c.a.createElement("img",{src:ae.a,alt:""})),c.a.createElement(d.b,{to:"/devices"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:X.a,alt:""})))),this.props.guest?c.a.createElement("div",{className:"guest-label"},"Guest Access"):c.a.createElement("div",{className:"header-controls"},c.a.createElement("div",{className:"user"},c.a.createElement("p",{className:"user-name"},"John Doe"),c.a.createElement("p",{className:"user-role"},"admin")),c.a.createElement("div",{className:"logout"},c.a.createElement("img",{src:Z.a,alt:""}))))}}]),t}(n.Component),ne=Object(i.b)(null,(function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}}))(te),ce=(t(540),t(591)),le=t(247),se=t.n(le),ie=t(248),re=t.n(ie),me=t(249),oe=t.n(me),ue=t(250),de=t.n(ue),ve=t(251),Ee=t.n(ve),pe=t(252),he=t.n(pe);var ye=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={active:0},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=0;switch(window.location.pathname){case"/devices":e=0;break;case"/clients":e=1;break;case"/accounts":e=2;break;default:e=0}this.setState({active:e})}},{key:"setActive",value:function(e){this.setState({active:e}),this.props.toggleNav()}},{key:"render",value:function(){var e=this,a=this.state.active;return c.a.createElement(ce.a,{className:"main-menu",open:this.props.navOpened,onClose:function(){e.props.toggleNav()}},c.a.createElement("ul",null,c.a.createElement("div",{className:"header-line"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:X.a,alt:""})),c.a.createElement("div",{className:"close",onClick:function(){e.props.toggleNav()}},c.a.createElement("img",{src:j.a,alt:""}))),c.a.createElement("li",{className:0===a?"active":""},c.a.createElement(d.b,{to:"/devices",onClick:function(){e.setActive(0)}},0===a?c.a.createElement("img",{src:de.a,alt:""}):c.a.createElement("img",{src:se.a,alt:""}),c.a.createElement("span",null,"Devices"))),c.a.createElement("li",{className:1===a?"active":""},c.a.createElement(d.b,{to:"/clients",onClick:function(){e.setActive(1)}},1===a?c.a.createElement("img",{src:Ee.a,alt:""}):c.a.createElement("img",{src:oe.a,alt:""}),c.a.createElement("span",null,"Clients"))),c.a.createElement("li",{className:2===a?"active":""},c.a.createElement(d.b,{to:"/accounts",onClick:function(){e.setActive(2)}},2===a?c.a.createElement("img",{src:he.a,alt:""}):c.a.createElement("img",{src:re.a,alt:""}),c.a.createElement("span",null,"Accounts")))),c.a.createElement(d.b,{className:"guest-link",to:"/temporary-access"},"Guest Access"))}}]),t}(n.Component),Ne=Object(i.b)((function(e){return{navOpened:e.navOpened}}),(function(e){return{toggleNav:function(){return e({type:"TOGGLE_NAV"})}}}))(ye),fe=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={},e}return Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrapp"},c.a.createElement(ne,null),c.a.createElement("div",{className:"view-wrapp"},c.a.createElement(Ne,null),c.a.createElement("div",{className:"view"},c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/devices",component:D}),c.a.createElement(v.a,{path:"/device",component:W}),c.a.createElement(v.a,{path:"/clients",component:$}),c.a.createElement(v.a,{path:"/accounts",component:z}),c.a.createElement(v.a,{component:D})))))}}]),t}(n.Component),be=(t(541),t(542),function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={startDate:new Date,endDate:new Date,data:[{date:"March 03",value:39},{date:"March 05",value:47},{date:"March 09",value:85},{date:"March 11",value:32},{date:"March 13",value:67},{date:"March 15",value:65},{date:"March 16",value:54},{date:"March 17",value:97}],width:0,tableData:[{id:1,timestamp:"09:45:34 - 06/03/2020",channels:"2",value:"22 ppm"},{id:2,timestamp:"09:45:34 - 06/03/2020",channels:"2",value:"22 ppm"},{id:3,timestamp:"09:45:34 - 06/03/2020",channels:"2",value:"22 ppm"}],active:0},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.chartContainer.offsetWidth;this.setState({width:e})}},{key:"changeStartDate",value:function(e){this.setState({startDate:e})}},{key:"changeEndDate",value:function(e){this.setState({endDate:e})}},{key:"setActive",value:function(e){this.setState({active:e})}},{key:"render",value:function(){var e=this,a=this.state,t=a.startDate,n=a.endDate,l=a.width,s=a.data,i=a.tableData,r=a.active;return c.a.createElement("main",{className:"main-section temp-access"},c.a.createElement("div",{className:"section-header"},c.a.createElement("div",{className:"title"},c.a.createElement("h3",null,"Field device (#1456) - Type 1")),c.a.createElement("div",{className:"date-range"},c.a.createElement("div",{className:"picker-wrapp"},c.a.createElement("div",{className:"pickers"},c.a.createElement("span",{className:"date-header-label"},"From:"),c.a.createElement(x.a,{className:"date-picker",selected:t,onChange:function(a){e.changeStartDate(a)},dateFormat:"MMMM d, yyyy h:mm aa"}),c.a.createElement("img",{src:S.a,alt:""}))),c.a.createElement("div",{className:"picker-wrapp"},c.a.createElement("div",{className:"pickers"},c.a.createElement("span",{className:"date-header-label"},"To:"),c.a.createElement(x.a,{className:"date-picker",selected:n,onChange:function(a){e.changeEndDate(a)},dateFormat:"MMMM d, yyyy h:mm aa"}),c.a.createElement("img",{src:S.a,alt:""}))))),c.a.createElement("div",{className:"temp-access-content"},c.a.createElement("div",{className:"chart",ref:"chartContainer"},c.a.createElement(T.c,{width:l,height:400,data:s,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(T.e,{dataKey:"date"}),c.a.createElement(T.f,null),c.a.createElement(T.d,null),c.a.createElement(T.a,{strokeDasharray:"3 3"}),c.a.createElement(T.b,{type:"monotone",dataKey:"value",stroke:"#F24130"}))),c.a.createElement("div",{className:"table"},c.a.createElement("div",{className:"label"},"Data by timestamps"),c.a.createElement(G.a,{component:P.a,className:"clients-list table-container"},c.a.createElement(I.a,{stickyHeader:!0,"aria-label":"simple table"},c.a.createElement(q.a,null,c.a.createElement(H.a,null,c.a.createElement(V.a,null,"Timestamp"),c.a.createElement(V.a,null,"Channel"),c.a.createElement(V.a,null,"Value"))),c.a.createElement(J.a,null,i.map((function(a){return c.a.createElement(H.a,{key:a.id,onClick:function(){e.setActive(a.id)},className:a.id===r?"active":""},c.a.createElement(V.a,null,a.timestamp),c.a.createElement(V.a,null,a.channels),c.a.createElement(V.a,null,a.value))}))))))))}}]),t}(n.Component)),ge=function(e){Object(N.a)(t,e);var a=Object(y.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={},e}return Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrapp"},c.a.createElement(ne,{guest:!0}),c.a.createElement(be,null))}}]),t}(n.Component);var Ce=function(){var e=Object(E.a)();return console.log(window.location),c.a.createElement(d.a,{history:e},c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/temporary-access",component:ge}),c.a.createElement(v.a,{component:fe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(i.a,{store:u},c.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[286,1,2]]]);
//# sourceMappingURL=main.3869324c.chunk.js.map