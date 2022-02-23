(this.webpackJsonp=this.webpackJsonp||[]).push([["vis-recommend-similar-products"],{"9/SL":function(e,t,n){var i=n("h56c");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("7b441ec5",i,!0,{})},E50F:function(e,t){e.exports='<div>\n    <sw-button-process\n        :isLoading="isLoading"\n        @click="check"\n    >{{ $tc(\'vis-verify-api-key.apiButton\') }}</sw-button-process>\n</div>\n'},EIxa:function(e,t,n){},"JPr/":function(e){e.exports=JSON.parse('{"vis-get-credentials":{"title":"Please click here to get your API credentials"},"vis-verify-api-key":{"success":"Connection was successfully established.","error":"Connection could not be established. Please check your API credentials.","apiButton":"Validate API credentials"},"vis-support":{"documentation":"Documentation","api_documentation":"API Documentation","read_docs":"Read our documentation for more information about VisualSearch and how to get started","manual":"Manual","changelog":"Changelog","faq":"FAQ","for_developers":"For developers","account":"Account","e-mail":"E-mail","telephone":"Telephone","contact":"Contact","visualsearch_assistance_integration_team":"Need assistance? Feel free to contact our integration team:"}}')},fNE8:function(e,t){e.exports='<template>\n    <div id="visualsearch-support">\n        <h2 class="visualsearch-title">{{ $tc("vis-support.documentation") }}</h2>\n        <p>{{ $tc("vis-support.read_docs") }}:</p>\n        <p class="mt-1">{{ $tc("vis-support.for_developers") }}:\n            <a href="https://github.com/VisualSearch-GmbH/VisRecommendSimilarProducts" target="_blank" rel="noopener">\n                VisualSearch Github\n            </a>\n        </p>\n        <h2 class="mt-2">{{ $tc("vis-support.contact") }}</h2>\n        <p>\n            {{ $tc("vis-support.visualsearch_assistance_integration_team") }}\n        </p>\n        <ul class="visualsearch-ul-none">\n            <li>\n                {{ $tc("vis-support.telephone") }}:\n                <a href="tel:+43 670 6017118">\n                    +43 670 6017118\n                </a>\n            </li>\n            <li>\n                {{ $tc("vis-support.e-mail") }}:\n                <a href="mailto:office@visualsearch.at">\n                    office@visualsearch.at\n                </a>\n            </li>\n        </ul>\n    </div>\n\n</template>\n'},h56c:function(e,t,n){},kRqn:function(e,t,n){var i=n("EIxa");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("a7dee90a",i,!0,{})},pAdO:function(e,t,n){"use strict";n.r(t);const i=Shopware.Classes.ApiService;var a=class extends i{constructor(e,t,n="vis/sim"){super(e,t,n)}verifyKey(){const e=`/_action/${this.getApiBasePath()}/api_key_verify`;return this.httpClient.post(e,{},{baseURL:Shopware.Context.api.apiPath,headers:this.getBasicHeaders()}).then(e=>e)}};const{Application:s}=Shopware;s.addServiceProvider("ApiKeyVerifyService",e=>{const t=s.getContainer("init");return new a(t.httpClient,e.loginService)});n("9/SL");var o=n("vjLC"),r=n.n(o);const{Component:c}=Shopware;c.register("vis-get-credentials",{template:r.a});n("kRqn");var l=n("fNE8"),p=n.n(l);const{Component:u}=Shopware;u.register("vis-support",{template:p.a});var h=n("E50F"),d=n.n(h);const{Component:v,Mixin:m}=Shopware;v.register("vis-verify-api-key",{template:d.a,mixins:[m.getByName("notification")],inject:["ApiKeyVerifyService"],data:()=>({isLoading:!1}),methods:{async check(){this.isLoading=!0,await this.ApiKeyVerifyService.verifyKey().then(e=>{1==e.data.success?this.createNotificationSuccess({title:"VisualSearch",message:this.$tc("vis-verify-api-key.success")}):this.createNotificationError({title:"VisualSearch",message:this.$tc("vis-verify-api-key.error")})}).catch(e=>{}),this.isLoading=!1}}});var f=n("pIQn"),g=n("JPr/");Shopware.Locale.extend("de-DE",f),Shopware.Locale.extend("en-GB",g)},pIQn:function(e){e.exports=JSON.parse('{"vis-get-credentials":{"title":"Klicken Sie bitte hier, um Ihre API-Zugangsdaten zu erhalten"},"vis-verify-api-key":{"success":"Die Verbindung wurde erfolgreich hergestellt.","error":"Verbindung konnte nicht hergestellt werden. Überprüfen Sie bitte Ihre API-Zugangsdaten.","apiButton":"API-Zugangsdaten testen"},"vis-support":{"documentation":"Dokumentation","api_documentation":"API Dokumentation","read_docs":"Lesen Sie in unserem Dokumentationen mehr über VisualSearch und wie Sie mit uns starten können","manual":"Anleitung","changelog":"Änderungsprotokoll","faq":"FAQ","for_developers":"Für Entwickler","account":"Account","e-mail":"E-Mail","telephone":"Telefon","contact":"Kontakt","visualsearch_assistance_integration_team":"Sie brauchen Hilfe? Kontaktieren Sie unser Integrations-Team:"}}')},vjLC:function(e,t){e.exports='<template>\n    <div id="visualsearch-get-credentials">\n        <p class="gc-1">\n        <a href="https://www.visualsearch.at/index.php/credentials" target="_blank" rel="noopener">\n            {{ $tc("vis-get-credentials.title") }}\n        </a>\n        </p>\n    </div>\n</template>\n'}},[["pAdO","runtime","vendors-node"]]]);