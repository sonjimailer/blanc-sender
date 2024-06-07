(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{723:function(e,t,r){"use strict";r.r(t);var n=r(594),o=r(231),l=r(505),d=r(501),_=r(533),M=r(531),c=r(530),A=r(532),m=r(569),I=r(496),f=r(570),v=(r(35),r(188)),R={components:{ValidationProvider:v.b,ValidationObserver:v.a},data:function(){return{CONFIG_NAME:"Gmail",MAIL_MAILER:"smtp",MAIL_HOST:"smtp.gmail.com",MAIL_PORT:465,MAIL_USERNAME:"your_email@gmail.com",MAIL_PASSWORD:"your_password",MAIL_ENCRYPTION:"tls",MAIL_FROM_ADDRESS:"your_email@gmail.com",MAIL_FROM_NAME:"no-reply",an_email:!1,MAIL_PRIORITY:"normal",priorityList:["high","normal","low"],name:"{{NAME}}, {{EMAIL}}, {{COMPANYNAME}}, {{DOMAIN}}, {{DATE}}, {{DATETOMORROW}}, {{TIME}}, {{RANDOMSTRING1}} - {{RANDOMSTRING7}}, {{BASE64EMAIL}}, {{BASE64(Text Here)}}, {{URLENCODE(Url Here)}}"}},methods:{submit:function(){var e=this,t=new FormData;t.append("name",this.CONFIG_NAME),t.append("host",this.MAIL_HOST),t.append("port",this.MAIL_PORT),t.append("username",this.MAIL_USERNAME),t.append("password",this.MAIL_PASSWORD),t.append("encryption",this.MAIL_ENCRYPTION),t.append("from_email",this.MAIL_FROM_ADDRESS),t.append("from_name",this.MAIL_FROM_NAME),t.append("anonymous_name","low"===this.MAIL_PRIORITY?0:"high"===this.MAIL_PRIORITY?1:2),this.$axios.post("/mail-config",t).then((function(t){e.$toast.success("Config has been added",{position:"top-right",duration:2e3}),e.$router.push("/email/email-blast/smtp-config")})).catch((function(t){e.isLoading=!1;var r=t.response.data.meta;r&&"Nama konfigurasi sudah terdaftar"===r.message?e.$toast.error("SMTP config name already exist",{position:"top-right",duration:2e3}):e.$toast.error("Data Tidak Lengkap",{position:"top-right",duration:2e3})}))}}},O=r(80),component=Object(O.a)(R,(function(){var e=this,t=e._self._c;return t(M.a,{staticClass:"container-padding"},[t("div",{staticClass:"page-title"},[e._v("Master Setting")]),e._v(" "),t(n.a,{staticClass:"mt-2",staticStyle:{"font-size":"14px"},attrs:{dense:"",type:"info",color:"info"}},[e._v("\n      You can use "+e._s(e.name)+" function inside mail from name\n    ")]),e._v(" "),t(A.a,[t(_.a,[t("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(r){var n=r.invalid;return[t(l.a,{staticClass:"pa-6"},[t(d.c,{staticClass:"px-0"},[e._v("Create SMTP Config")]),e._v(" "),t(c.a,[t("validation-provider",{attrs:{name:"configName",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){r.errors;return[t(f.a,{attrs:{label:"Config Name",hint:"this for labeling your config"},model:{value:e.CONFIG_NAME,callback:function(t){e.CONFIG_NAME=t},expression:"CONFIG_NAME"}})]}}],null,!0)}),e._v(" "),t("validation-provider",{attrs:{name:"host",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){r.errors;return[t(f.a,{attrs:{label:"Mail Host"},model:{value:e.MAIL_HOST,callback:function(t){e.MAIL_HOST=t},expression:"MAIL_HOST"}})]}}],null,!0)}),e._v(" "),t("validation-provider",{attrs:{name:"port",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){r.errors;return[t(f.a,{attrs:{label:"Mail Port"},model:{value:e.MAIL_PORT,callback:function(t){e.MAIL_PORT=t},expression:"MAIL_PORT"}})]}}],null,!0)}),e._v(" "),t("validation-provider",{attrs:{name:"email"},scopedSlots:e._u([{key:"default",fn:function(r){r.errors;return[t(f.a,{attrs:{label:"Mail Username",required:""},model:{value:e.MAIL_USERNAME,callback:function(t){e.MAIL_USERNAME=t},expression:"MAIL_USERNAME"}})]}}],null,!0)}),e._v(" "),t("validation-provider",{attrs:{name:"password"},scopedSlots:e._u([{key:"default",fn:function(r){r.errors;return[t(f.a,{attrs:{label:"Mail Password (You can keep it blank for port 25)",required:""},model:{value:e.MAIL_PASSWORD,callback:function(t){e.MAIL_PASSWORD=t},expression:"MAIL_PASSWORD"}})]}}],null,!0)}),e._v(" "),t("validation-provider",{attrs:{name:"encrypt",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){r.errors;return[t(f.a,{attrs:{label:"Mail Encryption"},model:{value:e.MAIL_ENCRYPTION,callback:function(t){e.MAIL_ENCRYPTION=t},expression:"MAIL_ENCRYPTION"}})]}}],null,!0)}),e._v(" "),t("validation-provider",{attrs:{name:"mailFrom",rules:"email"},scopedSlots:e._u([{key:"default",fn:function(r){r.errors;return[t(f.a,{attrs:{label:"Mail From Address"},model:{value:e.MAIL_FROM_ADDRESS,callback:function(t){e.MAIL_FROM_ADDRESS=t},expression:"MAIL_FROM_ADDRESS"}})]}}],null,!0)}),e._v(" "),t("validation-provider",{attrs:{name:"fromName"},scopedSlots:e._u([{key:"default",fn:function(r){r.errors;return[t(f.a,{attrs:{label:"Mail From Name"},model:{value:e.MAIL_FROM_NAME,callback:function(t){e.MAIL_FROM_NAME=t},expression:"MAIL_FROM_NAME"}})]}}],null,!0)}),e._v(" "),t(m.a,{attrs:{items:e.priorityList,label:"Mail Priority",outlined:""},model:{value:e.MAIL_PRIORITY,callback:function(t){e.MAIL_PRIORITY=t},expression:"MAIL_PRIORITY"}})],1),e._v(" "),t(d.a,[t(I.a),e._v(" "),t(o.a,{attrs:{color:"green",disabled:n},on:{click:e.submit}},[e._v("\n        Save\n      ")])],1)],1)]}}])})],1),e._v(" "),t(_.a)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);