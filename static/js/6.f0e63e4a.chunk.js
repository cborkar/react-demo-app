(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[6],{165:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(19),i=a(24),r=a(13),l=a(25),s=a(26),o=a(20),d=a(27),u=a(0),c=a.n(u),h=(a(165),a(110)),m=a(206),g=a(207),p=a(210),v=a(137),b=(a(30),a(37)),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={id:"",title:"",description:"",date:"",time:"",loading:!1,showingAlert:!1},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a.handleSignUp=a.handleSignUp.bind(Object(o.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),a=e.getHours()+":"+e.getMinutes(),n=Math.random();n.toString(36);var i=n.toString(36).substr(2,9);this.setState({date:t,time:a,id:i})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,i=t.value;this.setState(Object(n.a)({},a,i))}},{key:"handleSignUp",value:function(e){var t=this;e.preventDefault(),setTimeout((function(){var e=new Date,a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),n=e.getHours()+":"+e.getMinutes(),i=t.state,r={id:i.id,title:i.title,description:i.description,date:i.date,time:i.time,created_date:a,created_time:n};t.props.dispatch({type:"ADD",item:r}),t.props.history.push("/home")}),500)}},{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.description,i=t.date,r=t.time;return c.a.createElement("div",null,c.a.createElement("div",{className:"mainbody signup-page"},c.a.createElement("div",{className:"padding"},c.a.createElement(h.a,{container:!0},c.a.createElement(h.a,{item:!0,xs:2}),c.a.createElement(h.a,{item:!0,xs:8},c.a.createElement(m.a,null,c.a.createElement("h4",null,"Add New"),this.state.showingAlert?c.a.createElement("div",null,c.a.createElement(p.a,{severity:"error",onClose:function(){e.setState({showingAlert:!1})}},"Registration failed. Please try again!"),c.a.createElement("p",null)):"",c.a.createElement(v.ValidatorForm,{ref:"form",onSubmit:this.handleSignUp,method:"POST"},c.a.createElement(v.TextValidator,{label:"Title",variant:"outlined",name:"title",value:a,onChange:this.handleChange,validators:["required"],errorMessages:["This field is required"]}),c.a.createElement(v.TextValidator,{label:"Description",variant:"outlined",name:"description",value:n,onChange:this.handleChange,validators:["required"],errorMessages:["Please enter description"]}),c.a.createElement(v.TextValidator,{type:"date",variant:"outlined",name:"date",value:i,defaultValue:i,InputLabelProps:{shrink:!0},onChange:this.handleChange,validators:["required"],errorMessages:["Please enter date"]}),c.a.createElement(v.TextValidator,{type:"time",variant:"outlined",name:"time",value:r,defaultValue:r,InputLabelProps:{shrink:!0},onChange:this.handleChange,validators:["required"],errorMessages:["Please enter time"]}),c.a.createElement(g.a,{type:"submit",variant:"contained",color:"primary"},"Save")))),c.a.createElement(h.a,{item:!0,xs:2})))))}}]),t}(c.a.Component);t.default=Object(b.b)((function(e){return{}}),null)(f)}}]);
//# sourceMappingURL=6.f0e63e4a.chunk.js.map