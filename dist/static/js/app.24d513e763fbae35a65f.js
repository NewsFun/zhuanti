webpackJsonp([0],{"9rf8":function(t,e){},GCbf:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("VCXJ"),h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("X4nt")({name:"app"},h,!1,function(t){i("azwC")},null,null).exports,a=i("zO6J");const n=Math.PI,o=Math.sin,c=Math.cos,l=Math.asin,d=Math.round;class g{constructor(t){const e={coord:{x:100,y:100},vx:1,vy:1,ve:1,va:1,wait:0,errorRange:1};this.t=0,this.distance=null,this.attention=!1;let i=Object.assign(e,t);this.initData(i)}initData(t){Object.assign(this,t),"circling"===this.type&&(this.radius=d(this.getDistance(t.endPos)))}arrived(t){if(t<this.errorRange)return!0;if(null===this.distance)this.distance=t;else{if(this.distance===t)return this.distance=null,!0;this.distance=Math.min(this.distance,t)}return!1}bounce(t,e,i,s){return this.coord.x<=t&&(this.vx=-this.vx,this.coord.x=t),this.coord.x>=e&&(this.vx=-this.vx,this.coord.x=e),this.coord.y<=i&&(this.vy=-this.vy,this.coord.y=i),this.coord.y>=s&&(this.vy=-this.vy,this.coord.y=s),this}circling(t=0){let e=~~t,i=n*this.t/180;this.coord.x=this.endPos.x+c(i)*this.radius,this.coord.y=this.endPos.y+o(i)*this.radius,e>0&&this.t>=e&&(this.attention=!0),this.t+=this.va}delay(){return this.wait>0?this.wait-=1:this.wait=0,this.wait>0}getDistance(t,e){let i=t.x-this.coord.x,s=t.y-this.coord.y,h=Math.sqrt(i*i+s*s);return e?[i,s,h]:h}getInitAngle(t){let e=this.getDistance(t,!0),i=e[0]/e[2],s=l(i);return[s,e[2]]}movement(){return this.attention||this.delay()||this.selectMoveType(),this.coord}rectilinear(t){let e=this.getDistance(t,!0);return this.attention||(this.attention=this.arrived(e[2])),this.attention?(this.vx=0,this.vy=0):(this.vx=e[0]/e[2]*this.ve,this.vy=e[1]/e[2]*this.ve),this}selectMoveType(){switch(this.type||console.error('you need defined a "type" to start Motion!'),this.type){case"linear":this.rectilinear(this.endPos).update();break;case"bounce":{let t=this.minWidth,e=this.maxWidth,i=this.minHeight,s=this.maxHeight;this.bounce(t,e,i,s).update()}break;case"circling":this.circling(this.radian)}}update(){this.coord.x+=this.vx,this.coord.y+=this.vy,this.t+=1}}const u={mergeData(t,e){if(e){let i=Object.keys(e);for(let s=0;s<i[s];s++){let h=i[s];e[h]&&(t[h]=e[h])}}return t},is:t=>(function(e){return Object.prototype.toString.call(e)==="[object "+t+"]"})}.is("Array");class v{constructor(t){const e={coord:{x:100,y:100},width:50,height:50};this.step=null,this.stepNum=0,this.motions=[];let i=Object.assign(e,t);this.initData(i)}initData(t){Object.assign(this,t),this.boundary=this.getStageBounds(),t.img&&(this.shape="img")}drawPoint(t){let e=this.ctx;e.save(),e.beginPath(),e.fillStyle="#00ff00",e.arc(t.x,t.y,2,0,2*Math.PI),e.fill(),e.restore()}drawReact(t){let e=this.ctx;e.save(),e.beginPath(),e.fillStyle="#00ff00",e.rect(t.x,t.y,2,2),e.fill(),e.restore()}drawShape(){switch(this.shape){case"img":this.ctx.drawImage(this.img,this.coord.x,this.coord.y,this.width,this.height);break;case"square":this.drawReact(this.coord);break;case"round":this.drawPoint(this.coord)}}erase(){let t=this.getStarBounds(),e=t.upperLeft,i=t.lowerRight;return this.ctx.clearRect(e.x,e.y,i.x,i.y),this}getStarBounds(){let t=this.coord.x,e=this.coord.y,i=this.coord.x+this.width,s=this.coord.y+this.height;return{upperLeft:this.coord,lowerLeft:{x:t,y:s},upperRight:{x:i,y:e},lowerRight:{x:i,y:s}}}getStageBounds(){let t=this.width,e=this.height;return"round"===this.shape&&(t=this.radius,e=this.radius),{minWidth:0,minHeight:0,maxWidth:this.stageWidth-t,maxHeight:this.stageHeight-e}}render(){let t=this.stepBy();t&&(this.coord=t.movement()),this.drawShape()}setMotion(t){if(u(t))for(let e=0;e<t.length;e++){let i=t[e-1]||t[e];this.setMotionItem(t[e],i.coord)}else this.setMotionItem(t);return this}setMotionItem(t,e=this.coord){let i=Object.assign({},this.boundary,t),s=new g(i);s.coord=e,this.motions.push(s)}stepBy(){let t=this.motions[this.stepNum];return t&&t.attention&&(this.stepNum+=1),t}}const p=[{x:200,y:400},{x:500,y:500},{x:100,y:300},{x:200,y:50}],f=[{endPos:p[0],type:"linear",wait:60,ve:10},{endPos:p[1],type:"linear",ve:5},{endPos:p[2],type:"linear",ve:10},{endPos:p[3],type:"linear",ve:5}];var w={data:()=>({img:null,ctx:null,stage:null,canvas:null,W:window.innerWidth,H:window.innerHeight}),methods:{initStars(t){let e=this.stage,i={x:100,y:150};e.setActors({key:"star1",img:t,coord:{x:200,y:50}}).setMotion(f),e.setActors({key:"star2",shape:"round",coord:{x:100,y:100}}).setMotion([{type:"circling",endPos:i,radian:180,va:1}]),e.setActors({key:"star3",shape:"round",coord:i}),this.stage.animate()},setCanvas(){let t=new class{constructor(t){const e={el:"#canvas",width:window.innerWidth,height:window.innerHeight};let i=Object.assign(e,t);this.renderList={},this.option=i,this.width=i.width,this.height=i.height,this.canvas=this.initCanvas(i),this.ctx=this.canvas.getContext("2d")}initCanvas(t){let e=document.querySelector(t.el);return e.height=t.height,e.width=t.width,e}setActors(t){const e={ctx:this.ctx,stageWidth:this.width,stageHeight:this.height},i=Object.assign(e,t);let s=new v(i);return this.renderList[t.key]=s,s}getActors(t){return this.renderList[t]}renderStage(){this.ctx.clearRect(0,0,this.width,this.height),this.update()}update(){let t=Object.keys(this.renderList);for(let e=0;e<t.length;e++)this.renderList[t[e]].render()}animate(){const t=this,e=()=>{t.renderStage(),requestAnimationFrame(e)};e()}},e=t.ctx;return this.stage=t,this.ctx=e,e},imgLoad(t){let e=this;t.complete?e.img=t:t.onload=function(){e.img=t}},showPoint(t){let e=this.ctx;e.save(),e.fillStyle="#00ff00",e.arc(t.x,t.y,2,0,2*Math.PI),e.fill(),e.restore()}},mounted(){let t=document.querySelector("#star");this.imgLoad(t),this.ctx=this.setCanvas()},created(){},watch:{img(t){this.initStars(t)}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("canvas",{ref:"canvas",attrs:{id:"canvas"}},[e("img",{staticStyle:{display:"none"},attrs:{id:"star",src:i("qjY1"),alt:""}})])},staticRenderFns:[]};var x=i("X4nt")(w,m,!1,function(t){i("GCbf")},"data-v-335d5a71",null).exports,A={name:"HelloWorld",data:()=>({msg:"Welcome to Your Vue.js App"})},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("h2",[this._v("Essential Links")]),this._v(" "),this._m(0),this._v(" "),e("h2",[this._v("Ecosystem")]),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[this._v("Core Docs")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[this._v("Forum")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[this._v("Community Chat")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[this._v("Twitter")])]),this._v(" "),e("br"),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[this._v("Docs for This Template")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("vue-router")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("vuex")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("vue-loader")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("awesome-vue")])])])}]};var M=i("X4nt")(A,y,!1,function(t){i("9rf8")},"data-v-1d5f14c6",null).exports;s.a.use(a.a);var k=new a.a({routes:[{path:"/",name:"canvas",component:x},{path:"/hello-world",name:"HelloWorld",component:M}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:k,template:"<App/>",components:{App:r}})},azwC:function(t,e){},qjY1:function(t,e){t.exports="data:image/png;base64,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"}},["NHnr"]);
//# sourceMappingURL=app.24d513e763fbae35a65f.js.map