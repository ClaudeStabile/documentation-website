"use strict";(self.webpackChunknewdoc=self.webpackChunknewdoc||[]).push([[2602],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),A=c(i),u=r,m=A["".concat(s,".").concat(u)]||A[u]||p[u]||a;return i?n.createElement(m,o(o({ref:t},d),{},{components:i})):n.createElement(m,o({ref:t},d))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=A;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}A.displayName="MDXCreateElement"},4746:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));const a={},o="LinTO Web UI - User documentation",l={unversionedId:"developpers/agent/clients/web/widget",id:"developpers/agent/clients/web/widget",title:"LinTO Web UI - User documentation",description:"LinTO UI is a javascript library allowing you to use the customizable features of LinTO intelligent agents directly in your web pages.",source:"@site/docs/developpers/agent/clients/web/widget.md",sourceDirName:"developpers/agent/clients/web",slug:"/developpers/agent/clients/web/widget",permalink:"/fr/docs/developpers/agent/clients/web/widget",draft:!1,editUrl:"https://github.com/linto-ai/documentation-website/tree/source/docs/developpers/agent/clients/web/widget.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"LinTO Agents on Webpages",permalink:"/fr/docs/developpers/agent/clients/web/"},next:{title:"Android",permalink:"/fr/docs/developpers/agent/clients/android"}},s={},c=[{value:"1 Activation",id:"1-activation",level:2},{value:"2 Display modes",id:"2-display-modes",level:2},{value:"2.1 \u201cmulti-modal\u201d Mode",id:"21-multi-modal-mode",level:3},{value:"2.2 \u201cminimal-streaming\u201d Mode",id:"22-minimal-streaming-mode",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linto-web-ui---user-documentation"},"LinTO Web UI - User documentation"),(0,r.kt)("p",null,"LinTO UI is a javascript library allowing you to use the customizable features of LinTO intelligent agents directly in your web pages.\nThanks to LinTO UI, you can easily customize and integrate a chatbot, or design voice commands to trigger actions on your web pages."),(0,r.kt)("h2",{id:"1-activation"},"1 Activation"),(0,r.kt)("p",null,'When the user loads the page, the LinTO user interface is disabled by default. The "disabled" state is symbolized by the LinTO icon sleeping in the lower right corner of the web page.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"linto-ui.png",src:i(9839).Z,width:"284",height:"499"})),(0,r.kt)("p",null,"To activate the user interface, simply click on the LinTO icon. "),(0,r.kt)("p",null,'A window will open to propose to the user to activate LinTO UI, with the possibility to activate or deactivate the "wake word" listening and the audio response.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"linto-ui.png",src:i(6664).Z,width:"87",height:"91"})),(0,r.kt)("h2",{id:"2-display-modes"},"2 Display modes"),(0,r.kt)("h3",{id:"21-multi-modal-mode"},"2.1 \u201cmulti-modal\u201d Mode"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"linto-ui.png",src:i(3615).Z,width:"297",height:"522"})),(0,r.kt)("p",null,'The multi-modal mode takes the form of a chat window. Questions can be asked from the keyboard or verbally via the user\'s microphone.\nIt is possible to trigger the microphone by saying the word "wake up" when the microphone is activated, or by clicking on the "microphone" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"linto-ui.png",src:i(1024).Z,width:"80",height:"89"})),(0,r.kt)("h3",{id:"22-minimal-streaming-mode"},"2.2 \u201cminimal-streaming\u201d Mode"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"linto-ui.png",src:i(3825).Z,width:"130",height:"151"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"minimal-streaming")," mode is voice only and takes the form of a banner at the bottom of the page displaying the user's questions and the intelligent agent's answers.\nWhen the user interface is activated, it is possible to trigger a listening session by saying the word alarm or by clicking on the LinTO icon.\nBy clicking on the pop-up above the LinTO icon, you can access the transcript of the questions/commands and answers."))}p.isMDXComponent=!0},9839:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/1-257e93c06070b1abcdfd3c349ba89f88.png"},6664:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"},3615:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/3-fc2a709eb3712a40cca613ae57a2eae7.png"},1024:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABZCAYAAACpHqNlAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAWUSURBVHic7ZtbaBRXGIC/2cwm2U1MQrFNwNs2EQxoVmMppE1j60MolILkxVK0tEVoLVJoLSh9qY+FFkweRPSlF2pFpbSFSkEEWxJbtVg1a4uXRt1oaxSsZk2ym+xOdvowmkbZNjNz5sxM4Hwvyw5zZv75OLc55x/NNE0ThWsiQQcw21ECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBVECBdGDDuD/uJA1OTE8yclMkV+Gi5zIFEue11YXoa0uwpO1EdrqymiMab7FqIUtP3CiCHuvG2xPF/ht1F1oy6o13ktEWTdPJyrZZWgEjk3CjsEC3YMFbk54c836Cti8qJxNi3Sqyry55sMELnB0EnYOGnycLnArLyeUueUaWx6P8tZCnWqPRQYqsH/EZM2pHIM5f+6XiMHXrTFaa7xr14EJ3H/D4PVUnlzpcUEa8QjsXVHBmse8qYqBTGN2DBq8fMZ/eQDZInSdmqAnbXhyPd8F9qQN3j6XJ8iO1wTePZ/3RKKvTXjPdYNXU3kCqHgliQBftVbQVe++Ofsm8NRdk47jObJhsXePeAR+fTpGc7W7gcWXJpwxoOt0+OTBvT7x9DgZl63ZF4Hb/shz1aepihvOj5l8eDnvqqz0Jnwha7K0N8ekzJt4QIUGZ9qdN2XpNbD7SiH08gAmTOgZLDguJ7UG3jFM5h3JBTLfc0M8AtdWx3jEwQqE1Br4+Z+Ts0YeWAPKgSFn7UWqwM/+ct4kgmbfkLPhWJrAqzmT1EgoVsoc0XenyO2C/bilCTzy92Sgr2tuKQK9d+z3O9IEHsvMhrG3NIdu2Y9dmsD+u4L17/hBuNTvvNylfqusAOdG7NdAaZtKAzmXAseGiW55gcJlS57e+QrG5l22iurbN2Ic/gKAaONyCh99D1V1jkMYcDB1kFYDRx10xA/w83dT8gBLiJ2aeDM9JQ+wrnF4j6sQbjnYk5EicLxozexdMZaxd+xhRkucU+qYDZzEHr6N9c71RJuSU3+jLR2QXDVzuabl6J3rp/5Gqmqha5PrMMZttmJpr3KVh7ICtXAYUn1QVWtP3nRSvVaNTXa46v/AWlgYfz5u61xpAht+yHq2v+s39RVwY7U9gdKacHM8fL2DXZzELu0pl7hcIg8DTmKXJvCpWkm5FD7gJHZpAtvqZq/A5+baj13am0hztcbiuMZA1oMxamwYvt0J9Quh5RmoT1jHb6bh7FFrvte5zvWoO51l1RqJSvtNWGp+4Ib5Ou9fFF8T1HdvxZjhrUJP9WJ8sF/4XhvmRx2dL3WofG2+jheDsdHYYuOc5IznzEQsYsXsBOm7cht/z7P7mgd5KKleSPURTfU9cLiQ7LAmzU4n3CV4c4HOrqXljsr4sq3Z3BviTeFpDDwbo8lherD02e6SuMbWxlCnYgOwbXHUsTzwKTdmZBJajmZ9S6R0SlNcY2BVzFVZX9635pRZmaFhfLuLR+DgykrX5X17pJU1Gp8knXXQfvBpstx1Zhb4vB74UoNOd3N4JHY3l7O2Qax/DiRHuidtsPl8sFmqLXM0Uu3u+r3pBNIrvZPQ2beinFhgfaLGyhpvbh7YI6xt0PmpLUZCvBLYRzNB0wCTYW9yzIPdE2mt0TjTHueNBWVIXz00TTAj1i/Qf9ebjf/AJxa1OuxeWsGxtkpefFTiEti9mnefdA5+vC2eOhb4p14Pc3bE5MuhAgeGDK64nXjff6TIvzWuFIkYnG6PUycwEIdO4HQujpkcz1ifux4bLnLyPz53xQQiJpjOO4IVczS+eaLS0RrgdEItcDYQeB8421ECBVECBVECBVECBVECBVECBVECBVECBfkHdZPfEwcreAEAAAAASUVORK5CYII="},3825:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);