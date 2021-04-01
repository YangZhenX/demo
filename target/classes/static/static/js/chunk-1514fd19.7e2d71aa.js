/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-3-24 14:16:49
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1514fd19"],{2760:function(t,e,s){"use strict";s("c198")},"9ed6":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-container"},[s("el-row",[s("el-col",{attrs:{xs:24,sm:24,md:12,lg:16,xl:16}},[s("div",{staticStyle:{color:"transparent"}},[t._v("占位符")])]),s("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:8}},[s("el-form",{ref:"form",staticClass:"login-form",attrs:{model:t.form,rules:t.rules,"label-position":"left"}},[s("div",{staticClass:"title-tips"},[t._v(t._s(t.title))]),s("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{prop:"jobNo"}},[s("span",{staticClass:"svg-container svg-container-admin"},[s("vab-icon",{attrs:{icon:["fas","user"]}})],1),s("el-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{placeholder:"请输入工号/手机号",tabindex:"1",type:"text"},model:{value:t.form.jobNo,callback:function(e){t.$set(t.form,"jobNo","string"===typeof e?e.trim():e)},expression:"form.jobNo"}})],1),s("el-form-item",{attrs:{prop:"passWd"}},[s("span",{staticClass:"svg-container"},[s("vab-icon",{attrs:{icon:["fas","lock"]}})],1),s("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,tabindex:"2",placeholder:"请输入密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.form.passWd,callback:function(e){t.$set(t.form,"passWd","string"===typeof e?e.trim():e)},expression:"form.passWd"}}),"password"===t.passwordType?s("span",{staticClass:"show-password",on:{click:t.handlePassword}},[s("vab-icon",{attrs:{icon:["fas","eye-slash"]}})],1):s("span",{staticClass:"show-password",on:{click:t.handlePassword}},[s("vab-icon",{attrs:{icon:["fas","eye"]}})],1)],1),s("el-button",{staticClass:"login-btn",attrs:{round:"",loading:t.loading,type:"primary"},on:{click:t.handleLogin}},[t._v(" 登 录 ")])],1)],1)],1)],1)},r=[],n=(s("61f7"),{name:"Login",directives:{focus:{inserted:function(t){t.querySelector("input").focus()}}},data:function(){var t=function(t,e,s){""==e?s(new Error("工号/手机号 不能为空")):s()},e=function(t,e,s){""==e?s(new Error("密码 不能为空")):s()};return{nodeEnv:"production",title:this.$baseTitle,form:{jobNo:"",passWd:""},rules:{jobNo:[{required:!0,trigger:"blur",validator:t}],passWd:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect||"/"},immediate:!0}},created:function(){document.body.style.overflow="hidden"},beforeDestroy:function(){document.body.style.overflow="auto"},methods:{handlePassword:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return!1;t.loading=!0,t.$store.dispatch("user/login",t.form).then((function(){var e="/404"===t.redirect||"/401"===t.redirect?"/":t.redirect;t.$router.push(e).catch((function(){})),t.loading=!1})).catch((function(){t.loading=!1}))}))}}}),a=n,i=(s("2760"),s("2877")),c=Object(i["a"])(a,o,r,!1,null,"93316764",null);e["default"]=c.exports},c198:function(t,e,s){}}]);