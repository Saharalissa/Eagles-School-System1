(this.webpackJsonpeagles_school=this.webpackJsonpeagles_school||[]).push([[0],{38:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),c=n(31),r=n.n(c),i=(n(38),n(13)),d=n(2),l=(n(39),n(4)),j=n(5),u=n(7),o=n(6),h=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(s.jsx)(i.b,{to:"/",className:"navbar-brand",children:"EAGLES"}),Object(s.jsx)("div",{className:"collpase navbar-collapse",children:Object(s.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(s.jsx)("li",{className:"navbar-item",children:Object(s.jsx)(i.b,{to:"/create/student",className:"nav-link",children:"Students"})}),Object(s.jsx)("li",{className:"navbar-item",children:Object(s.jsx)(i.b,{to:"/create/admin",className:"nav-link",children:"Admins"})}),Object(s.jsx)("li",{className:"navbar-item",children:Object(s.jsx)(i.b,{to:"/crud/marks",className:"nav-link",children:"Marks"})})]})})]})}}]),n}(a.Component),b=n(17),m=n(11),O=n(14),x=n.n(O),p=function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.student.studentId}),Object(s.jsx)("td",{children:e.student.studentName}),Object(s.jsx)("td",{children:e.student.studentPassword}),Object(s.jsx)("td",{children:Object(s.jsx)(i.b,{to:"/edit/"+e.student.studentId,children:"edit"})}),Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"#",onClick:function(){e.deleteStudent(e.student.studentId)},children:"delete"})})]})},v=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={students:[]},s.deleteStudent=s.deleteStudent.bind(Object(m.a)(s)),s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){}},{key:"deleteStudent",value:function(e){x.a.delete("/students/"+e).then((function(e){console.log(e.data)})),this.setState({students:this.state.students.filter((function(t){return t.id!==e}))})}},{key:"studentsList",value:function(){var e=this,t=this.props.searchTrim;return this.state.students.filter((function(e){return e.studentName.includes(t)})).map((function(t){return Object(s.jsx)(p,{student:t,deleteStudent:e.deleteStudent},t.studentId)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Students"}),Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{className:"thead-light",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Student Id"}),Object(s.jsx)("th",{children:"Student Name"}),Object(s.jsx)("th",{children:"Password"}),Object(s.jsx)("th",{children:"Update"}),Object(s.jsx)("th",{children:"Delete"})]})}),Object(s.jsx)("tbody",{children:this.studentsList()})]})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={studentName:"",studentpassword:"",userType:"",students:[]},s.changeFormHandle=s.changeFormHandle.bind(Object(m.a)(s)),s.onSubmit=s.onSubmit.bind(Object(m.a)(s)),s}return Object(j.a)(n,[{key:"changeFormHandle",value:function(e){var t=e.target,n=t.value,s=t.name;this.setState(Object(b.a)({},s,n))}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log(this.state.studentName),console.log(this.state.studentpassword),console.log(this.state.userType),x()({method:"post",url:"/create",data:{studentName:this.state.studentName,studentpassword:this.state.studentpassword,userType:this.state.userType},headers:{"Content-Type":"multipart/form-data"}})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Create New Student"}),Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Student name: "}),Object(s.jsx)("input",{type:"text",required:!0,name:"studentName",className:"form-control",value:this.state.studentName,onChange:this.changeFormHandle})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Passowrd: "}),Object(s.jsx)("input",{type:"passowrd",required:!0,name:"studentpassword",className:"form-control",value:this.state.passowrd,onChange:this.changeFormHandle})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"UserType: "}),Object(s.jsxs)("select",{ref:"userInput",required:!0,name:"userType",className:"form-control",value:this.state.userType,onChange:this.changeFormHandle,children:[Object(s.jsx)("option",{value:"Student",children:"Student"}),Object(s.jsx)("option",{value:"Admin",children:"Admin"})]})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"submit",value:"Create Student",className:"btn btn-primary"})})]})]}),Object(s.jsx)("div",{children:Object(s.jsx)(v,{})})]})}}]),n}(a.Component),N=function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.admin.adminId}),Object(s.jsx)("td",{children:e.admin.adminName}),Object(s.jsx)("td",{children:e.admin.adminPassword}),Object(s.jsx)("td",{children:Object(s.jsx)(i.b,{to:"/edit/"+e.admin.adminId,children:"edit"})}),Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"#",onClick:function(){e.deleteadmin(e.admin.adminId)},children:"delete"})})]})},g=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={admins:[]},s.deleteAdmin=s.deleteAdmin.bind(Object(m.a)(s)),s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){}},{key:"deleteAdmin",value:function(e){x.a.delete("/admins/"+e).then((function(e){console.log(e.data)})),this.setState({admins:this.state.admins.filter((function(t){return t.id!==e}))})}},{key:"adminsList",value:function(){var e=this;return this.state.admins.map((function(t){return Object(s.jsx)(N,{admin:t,deleteadmin:e.deleteadmin},t.adminId)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Admins"}),Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{className:"thead-light",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Admin Id"}),Object(s.jsx)("th",{children:"Admin Name"}),Object(s.jsx)("th",{children:"Password"}),Object(s.jsx)("th",{children:"Update"}),Object(s.jsx)("th",{children:"Delete"})]})}),Object(s.jsx)("tbody",{children:this.adminsList()})]})]})}}]),n}(a.Component),y=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={adminName:"",adminpassword:"",userType:"",users:[]},s.changeFormHandle=s.changeFormHandle.bind(Object(m.a)(s)),s.onSubmit=s.onSubmit.bind(Object(m.a)(s)),s}return Object(j.a)(n,[{key:"changeFormHandle",value:function(e){var t=e.target,n=t.value,s=t.name;this.setState(Object(b.a)({},s,n))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={adminName:this.state.adminName,adminpassword:this.state.adminpassword,userType:this.state.userType};console.log(t),x.a.post("/create/admin",t).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Create New Admin"}),Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"AdminName: "}),Object(s.jsx)("input",{type:"text",required:!0,name:"adminName",className:"form-control",value:this.state.adminName,onChange:this.changeFormHandle})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Passowrd: "}),Object(s.jsx)("input",{type:"passowrd",required:!0,name:"adminpassword",className:"form-control",value:this.state.adminpassowrd,onChange:this.changeFormHandle})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"UserType: "}),Object(s.jsxs)("select",{ref:"userInput",required:!0,name:"userType",className:"form-control",value:this.state.userType,onChange:this.changeFormHandle,children:[Object(s.jsx)("option",{value:"user",children:"Student"}),Object(s.jsx)("option",{value:"Admin",children:"Admin"})]})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"submit",value:"Create Admin",className:"btn btn-primary"})})]})]}),Object(s.jsx)("div",{children:Object(s.jsx)(g,{})})]})}}]),n}(a.Component),S=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;Object(l.a)(this,n),(s=t.call(this,e)).state={searchTrim:""};var a=s.props.updateSearch;return s.submitSearch=function(){a({searchTrim:s.state.searchTrim})},s.handleOnChange=function(e){var t=e.target.value;s.setState({searchTrim:t}),a({searchTrim:t})},s}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Search for student"}),Object(s.jsx)("form",{action:"",onSubmit:function(t){t.preventDefault(),e.submitSearch()},children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"",children:"Search Student"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"searchTrim",onChange:this.handleOnChange})]})})]})}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={searchTrim:""},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(S,{updateSearch:this.setState.bind(this)}),Object(s.jsx)(v,{searchTrim:this.state.searchTrim})]})}}]),n}(a.Component);function w(){return Object(s.jsxs)(i.a,{children:[Object(s.jsx)(h,{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(d.a,{path:"/create/student",component:f}),Object(s.jsx)(d.a,{path:"/create/admin",component:y}),Object(s.jsx)(d.a,{path:"/crud/marks",component:k})]})]})}r.a.render(Object(s.jsx)(w,{}),document.getElementById("app"))}},[[62,1,2]]]);
//# sourceMappingURL=main.a4c2852d.chunk.js.map