/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-3-24 14:16:49
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1126dc0c"],{"0def":function(t,e,r){"use strict";r.r(e),r.d(e,"supplierReportList",(function(){return a})),r.d(e,"productReportList",(function(){return n})),r.d(e,"companyKcReportList",(function(){return i})),r.d(e,"companyRkReportList",(function(){return l})),r.d(e,"companyLlReportList",(function(){return u})),r.d(e,"companyLlQueryList",(function(){return s})),r.d(e,"getCompanyNotInLogin",(function(){return c})),r.d(e,"hoKcReportList",(function(){return p})),r.d(e,"queryZBDropDown",(function(){return m})),r.d(e,"hoLlReportList",(function(){return f})),r.d(e,"querySupList",(function(){return d})),r.d(e,"hoZBKcReportList",(function(){return h})),r.d(e,"hoZBRkReportList",(function(){return b})),r.d(e,"queryCompanyList",(function(){return L})),r.d(e,"hoZBSlReportList",(function(){return y}));var o=r("8b2a");function a(t){return Object(o["default"])({url:"/supplierreportmaster/supReportList",method:"post",data:t})}function n(t){return Object(o["default"])({url:"/supplierreportmaster/prodKcReportList",method:"post",data:t})}function i(t){return Object(o["default"])({url:"/companyreportmaster/companyKcReportList",method:"post",data:t})}function l(t){return Object(o["default"])({url:"/companyreportmaster/companyRkReportList",method:"post",data:t})}function u(t){return Object(o["default"])({url:"/companyreportmaster/companyLlReportList",method:"post",data:t})}function s(t){return Object(o["default"])({url:"/companyreportmaster/queryDropDown",method:"post",data:t})}function c(t){return Object(o["default"])({url:"/headofficemaster/getCompanyNotInLogin/"+t,method:"get"})}function p(t){return Object(o["default"])({url:"/headofficemaster/headOfficeKcReportList",method:"post",data:t})}function m(t){return Object(o["default"])({url:"/headofficemaster/queryZBDropDown/"+t,method:"get"})}function f(t){return Object(o["default"])({url:"/headofficemaster/headOfficeLlReportList",method:"post",data:t})}function d(){return Object(o["default"])({url:"/headofficemaster/querySupList/",method:"get"})}function h(t){return Object(o["default"])({url:"/headofficemaster/zbKcReportList",method:"post",data:t})}function b(t){return Object(o["default"])({url:"/headofficemaster/zbRkReportList",method:"post",data:t})}function L(){return Object(o["default"])({url:"/headofficemaster/queryCompanyList",method:"get"})}function y(t){return Object(o["default"])({url:"/headofficemaster/zbSLReportList",method:"post",data:t})}},"34c5":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"userManagement-container"},[r("vab-query-form",[r("vab-query-form-left-panel",{staticStyle:{"margin-bottom":"0%"},attrs:{span:24}},[r("el-form",{attrs:{inline:!0,model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[r("el-form-item",{attrs:{label:"图册名称:"}},[r("el-input",{attrs:{clearable:!0,placeholder:"请输入名称"},model:{value:t.form.prodName,callback:function(e){t.$set(t.form,"prodName",e)},expression:"form.prodName"}})],1),r("el-form-item",{attrs:{label:"版本号:"}},[r("el-input",{attrs:{clearable:!0,placeholder:"请输入版本号"},model:{value:t.form.edition,callback:function(e){t.$set(t.form,"edition",e)},expression:"form.edition"}})],1),r("el-form-item",{attrs:{label:"申领中:"}},[r("el-select",{staticStyle:{width:"80px"},attrs:{placeholder:"请选择申领中"},model:{value:t.form.sLNum,callback:function(e){t.$set(t.form,"sLNum",e)},expression:"form.sLNum"}},[r("el-option",{attrs:{label:"全部",value:"-"}}),r("el-option",{attrs:{label:"是",value:"Y"}}),r("el-option",{attrs:{label:"否",value:"N"}})],1)],1),r("el-form-item",{attrs:{label:"调配中:"}},[r("el-select",{staticStyle:{width:"80px"},attrs:{placeholder:"请选择调配中"},model:{value:t.form.tPNum,callback:function(e){t.$set(t.form,"tPNum",e)},expression:"form.tPNum"}},[r("el-option",{attrs:{label:"全部",value:"-"}}),r("el-option",{attrs:{label:"是",value:"Y"}}),r("el-option",{attrs:{label:"否",value:"N"}})],1)],1),r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:t.queryData}},[t._v(" 查询 ")]),r("el-button",{attrs:{icon:"el-icon-files",type:"primary"},on:{click:t.exportReport}},[t._v(" 导出报表 ")])],1)],1)],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:"","element-loading-text":t.elementLoadingText}},[r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"prodName",label:"图册名称","min-width":"30%"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"edition",label:"版本号","min-width":"30%"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"kcNum",label:"库存","min-width":"10%"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"sLNum",label:"申领中","min-width":"10%"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"tPNum",label:"调配中","min-width":"10%"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"costPrice",label:"成本","min-width":"10%"}})],1),r("el-pagination",{attrs:{background:"","current-page":t.form.pageno,"page-size":this.pageSize,layout:t.layout,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},a=[],n=(r("caad"),r("2532"),r("96cf"),r("1da1")),i=r("5530"),l=r("0def"),u=r("d4a5"),s=r.n(u),c=r("2f62"),p={name:"inventoryStatisticsManagement",computed:Object(i["a"])({},Object(c["c"])({userdata:"user/userdata"})),data:function(){return{list:[],elementLoadingText:"正在加载...",layout:"total, prev, pager, next, jumper",total:0,pageSize:10,baseUrl:"",form:{pageno:1,userPid:"",prodName:"",edition:"",sLNum:"-",tPNum:"-"}}},created:function(){this.baseUrl=s.a.newBaseUrl,this.fetchData()},methods:{handleSizeChange:function(t){this.form.pageSize=t,this.fetchData()},handleCurrentChange:function(t){this.form.pageno=t,this.fetchData()},queryData:function(){this.form.pageno=1,this.fetchData()},fetchData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.form.userPid=t.userdata.userPid,e.next=3,Object(l["productReportList"])(t.form).then((function(e){var r=e.message;r.includes("请重新登录")?t.$message.error("无token信息，请重新登录。"):200==e.code&&(t.list=e.data.dataList,t.total=e.data.total)}));case 3:case"end":return e.stop()}}),e)})))()},exportReport:function(){var t=this.userdata.userPid,e=""==this.form.prodName?"-":this.form.prodName,r=""==this.form.edition?"-":this.form.edition,o=""==this.form.sLNum?"-":this.form.sLNum,a=""==this.form.tPNum?"-":this.form.tPNum,n=this.baseUrl+"/supplierreportmaster/prodKcExcel/"+t+"/"+e+"/"+r+"/"+o+"/"+a;window.open(n)}}},m=p,f=(r("bcc3"),r("2877")),d=Object(f["a"])(m,o,a,!1,null,null,null);e["default"]=d.exports},bcc3:function(t,e,r){"use strict";r("e727")},e727:function(t,e,r){}}]);