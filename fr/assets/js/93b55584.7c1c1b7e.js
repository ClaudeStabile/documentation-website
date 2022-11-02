"use strict";(self.webpackChunknewdoc=self.webpackChunknewdoc||[]).push([[2745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3},i="Custom Wake-Up Word",l={unversionedId:"developpers/agent/clients/custom_hotwords/custom_hotwords",id:"developpers/agent/clients/custom_hotwords/custom_hotwords",title:"Custom Wake-Up Word",description:"You want to use your own wake-word to call your agent with a sweet or business-related name ? You are at the right place.",source:"@site/docs/developpers/agent/clients/custom_hotwords/custom_hotwords.md",sourceDirName:"developpers/agent/clients/custom_hotwords",slug:"/developpers/agent/clients/custom_hotwords/",permalink:"/fr/docs/developpers/agent/clients/custom_hotwords/",draft:!1,editUrl:"https://github.com/linto-ai/documentation-website/tree/source/docs/developpers/agent/clients/custom_hotwords/custom_hotwords.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"devSidebar",previous:{title:"MQTT operating protocol",permalink:"/fr/docs/developpers/agent/clients/mqtt/"},next:{title:"LinTO Agents on Webpages",permalink:"/fr/docs/developpers/agent/clients/web/"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"HMG",id:"hmg",level:3},{value:"Data",id:"data",level:3},{value:"Prepare the data",id:"prepare-the-data",level:2},{value:"Build your model",id:"build-your-model",level:2},{value:"1 - Create a new project",id:"1---create-a-new-project",level:3},{value:"2. Setting the data",id:"2-setting-the-data",level:3},{value:"json file",id:"json-file",level:4},{value:"Adding sample from folder",id:"adding-sample-from-folder",level:4},{value:"Buildings sets",id:"buildings-sets",level:4},{value:"3. Setting the features.",id:"3-setting-the-features",level:3},{value:"4. Model setup and training.",id:"4-model-setup-and-training",level:3},{value:"5. Evaluate your model",id:"5-evaluate-your-model",level:3},{value:"6. Test your model",id:"6-test-your-model",level:3},{value:"7. Export your model",id:"7-export-your-model",level:3},{value:"Use your trained model",id:"use-your-trained-model",level:2},{value:"Use custom Hotword with LinTO Web Client &amp; Widget",id:"use-custom-hotword-with-linto-web-client--widget",level:3}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-wake-up-word"},"Custom Wake-Up Word"),(0,o.kt)("p",null,"You want to use your own wake-word to call your agent with a sweet or business-related name ? You are at the right place."),(0,o.kt)("p",null,"What make a good wake-word ?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Not too short, not too long"),'. "LinTO" is on the short side. It is good to have 2-4 syllabes.'),(0,o.kt)("li",{parentName:"ul"},"Not a common name. Using a common name expose you to risk of the system being randomly triggered."),(0,o.kt)("li",{parentName:"ul"},"There is some phoneme that are very disctinctivly identifiable such as ","[t, k, p, th]",".")),(0,o.kt)("p",null,"We published a tool that will help create your own keyword spotting model."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"hmg"},"HMG"),(0,o.kt)("p",null,"You need first to download the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linto-ai/hmg"},"howtord-model-generator")," tool."),(0,o.kt)("h3",{id:"data"},"Data"),(0,o.kt)("p",null,"In order to train your wake-word, you'll need to ",(0,o.kt)("strong",{parentName:"p"},"gather some samples")," first."),(0,o.kt)("p",null,"You'll need 2 kinds of audio samples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A bunch of recording of the word you want to use."),(0,o.kt)("li",{parentName:"ul"},"A bunch of recording of random speech/noise audio where the word is not pronounce.")),(0,o.kt)("p",null,"How many is a bunch ? There is no limit, the more sample you have with the more different voices, background noises, prononciations you can have, the more the trained model will be robust to new locutor and new context. The only limitation is to have approximatively a ratio of 1% wake-word for 99% non-wake-word."),(0,o.kt)("h2",{id:"prepare-the-data"},"Prepare the data"),(0,o.kt)("p",null,"Once you have your data you will need to prepare them. The preparation step is to ensure that all the recording have the same shape: duration, sampling_rate, number of channel, encoding."),(0,o.kt)("p",null,"[To be redacted]"),(0,o.kt)("h2",{id:"build-your-model"},"Build your model"),(0,o.kt)("p",null,"Once you have your samples ready to go, it's time to use hotword-model-generator."),(0,o.kt)("h3",{id:"1---create-a-new-project"},"1 - Create a new project"),(0,o.kt)("p",null,"First of all, launch ",(0,o.kt)("inlineCode",{parentName:"p"},"HMG"),"."),(0,o.kt)("p",null,"On the main page, you can load an existing project (1) or create a new project (2)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Home page",src:n(800).Z,width:"1223",height:"783"})),(0,o.kt)("p",null,"You can either set your project name or directly click on create to display the create project window."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Window",src:n(2245).Z,width:"579",height:"429"})),(0,o.kt)("p",null,"Set your project name and the project location and specify the keyword(s) you'll be training. It might be a single keyword or multiple keywords."),(0,o.kt)("p",null,"Once the information are set, click on create. A folder containing a single project_name.proj is created. It is a json file containing all the project parameters."),(0,o.kt)("h3",{id:"2-setting-the-data"},"2. Setting the data"),(0,o.kt)("p",null,"Once the project is created, a new tab is available: Prepare."),(0,o.kt)("p",null,"This tab allow your to specify the data you'll use to train the model."),(0,o.kt)("p",null,"There are two ways adding data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using a json file describing the data"),(0,o.kt)("li",{parentName:"ul"},"Selecting a folder containing the samples")),(0,o.kt)("h4",{id:"json-file"},"json file"),(0,o.kt)("p",null,"By selecting a json file (2) a prompt will ask you to select the field used to describe the samples:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set fields",src:n(1394).Z,width:"473",height:"226"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"File name")," is the field containing the ... file's name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Label")," is the field containing the keyword's name. Note that the name must be the same as the one set at the first step."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Attribute")," is the characteristic your want to use to split the samples between the different sets (training, validation, test). For instance the speaker.")),(0,o.kt)("h4",{id:"adding-sample-from-folder"},"Adding sample from folder"),(0,o.kt)("p",null,"To add sample from a folder (1), first select which keyword or non-keyword the folder contains using the comboBox at the far right, then click add from folder.\nThe folder must contain only one kind of sample. "),(0,o.kt)("h4",{id:"buildings-sets"},"Buildings sets"),(0,o.kt)("p",null,"By using the selector (3) set the percentages of sample you want to use to split the sets."),(0,o.kt)("p",null,"You can choose to split the samples using the attributes (if there is any). In that case they will be split so that samples in the different sets have different attributed. For example, if the attributes are the speaker's id, speakers in the training set will be different than the ones in the other 2 sets."),(0,o.kt)("p",null,"Once satisfied, click on done."),(0,o.kt)("h3",{id:"3-setting-the-features"},"3. Setting the features."),(0,o.kt)("p",null,"The next panel allows you tune the audio features use on the samples."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Features panel",src:n(61).Z,width:"1381",height:"960"})),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Sample Parameters")," you can specify the sample length (in second)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Preprocessing")," allows you to use pre-emphasis on the sample to amplify the high frequencies."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Window Parameters")," specifies the features extraction steps. Here, features are extracted on 64ms window every 32ms on 1s samples (Sample length) giving an input vector of size 30."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Features"),". For now, only MFCC features are implemented. You can tune feature parameters and visualize what the mean net input will looks like by clicking on analyse samples."),(0,o.kt)("p",null,"Once finished, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Setup Features Parameters")," to go to the training step."),(0,o.kt)("h3",{id:"4-model-setup-and-training"},"4. Model setup and training."),(0,o.kt)("p",null,"This tab allow you to tune the net and training parameters."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Training Tab",src:n(5582).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Model parameters")," you can change some of the net parameters such as Dropout, Loss function, Number of dense Layer and Layer's sizes or add a Gaussian noise layer."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Training parameters")," allows you to set the number of epoch, batch size and set some flags."),(0,o.kt)("p",null,"Once satisfied click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Train")," to begin training. "),(0,o.kt)("p",null,"The training might take some time as it need to extract all the features from the samples first. You can visualize in real time the progression of the training and stop it at any time."),(0,o.kt)("p",null,"Once the training is complete or stopped the next tabs become available."),(0,o.kt)("p",null,"If you are not satisfied you can click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete Model")," and start the training over with new parameters."),(0,o.kt)("h3",{id:"5-evaluate-your-model"},"5. Evaluate your model"),(0,o.kt)("p",null,"The Evaluate tab run the trained net on the training set and displays metrics.\n",(0,o.kt)("img",{alt:"Evaluate Tab",src:n(4654).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"Wrongly classified samples are available to listen on the bottom panel. It allows you to spot bad apples in your sets. "),(0,o.kt)("h3",{id:"6-test-your-model"},"6. Test your model"),(0,o.kt)("p",null,"The test tab allow to run your model and try it using your microphone"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Test tab",src:n(9030).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"Click on test to start the real time inference. The chart display the result for each hotword. If the threshold is reached the sample is added to ",(0,o.kt)("inlineCode",{parentName:"p"},"recorded activations")," output."),(0,o.kt)("h3",{id:"7-export-your-model"},"7. Export your model"),(0,o.kt)("p",null,"Once you are satisfied you can export your model using the export tab. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Export tab",src:n(4100).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"For now, only the tensorflow protobuf (.pb) is available. Select the model version and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Tensorflow format"),". Your model will be saved in ",(0,o.kt)("em",{parentName:"p"},"PROJECT_FOLDER"),"/output/",(0,o.kt)("em",{parentName:"p"},"MODEL_NAME"),"/",(0,o.kt)("em",{parentName:"p"},"VERSION"),"/."),(0,o.kt)("p",null,"To export the parameters file click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate Manifest")," then select the destination. The ",(0,o.kt)("em",{parentName:"p"},".param")," file created contains the audio, feature and model parameters. "),(0,o.kt)("h2",{id:"use-your-trained-model"},"Use your trained model"),(0,o.kt)("p",null,"To use your newly created model, you need to copy the content of the output folder on the device with the .param file beside the .pb."),(0,o.kt)("p",null,"Then you must specify it to the command-module either by editing the .env file or by passing it through an environement variable."),(0,o.kt)("p",null,"There you are ! You custom wake-word is now running."),(0,o.kt)("h3",{id:"use-custom-hotword-with-linto-web-client--widget"},"Use custom Hotword with LinTO Web Client & Widget"),(0,o.kt)("p",null,"The LinTO Web Client relies on an external library LinTO's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linto-ai/WebVoiceSDK"},"WebVoiceSDK")," that provides low-level inference for always-listening voice-enabled applications right in the browser. The models you built with Hotword Model Generator needs to get manualy repacked into a TensorFlowJS bundle. ",(0,o.kt)("strong",{parentName:"p"},"As these operations are not yet documented"),". We suggest you to dig in WebVoiceSDK source code, which already embeds the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linto-ai/WebVoiceSDK/tree/master/hotwords/linto"},"LinTO")," (Linet\xf4h) Wakeword or to contact us directly for further assistance."))}u.isMDXComponent=!0},1394:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-b7ceb1ced05d7a0b7db4a6fd5c449983.png"},2245:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-bd383e2ca024011d57254dfe398810a2.png"},4654:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/evaluate-4bdc7b112075cd1a742b37a57fd09e3d.png"},4100:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/export-d3cdc51d6fe0fcfe6121664f8e6b792e.png"},61:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/features-062e79f3f1351a12d7e51cc890d82364.png"},800:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/home-7009396f05470bbc7b90224b36732b16.png"},9030:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-6f45003fb7aada4d6bb7f7f5e141abc2.png"},5582:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/train-66c3efd53955678787d8bd4e9abaac92.png"}}]);