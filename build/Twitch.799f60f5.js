!function(e,t,r,n,a){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o[n]&&o[n],l=i.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function p(t,r){if(!l[t]){if(!e[t]){var a="function"==typeof o[n]&&o[n];if(!r&&a)return a(t,!0);if(i)return i(t,!0);if(s&&"string"==typeof t)return s(t);var d=Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}h.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},h.cache={};var u=l[t]=new p.Module(t);e[t][0].call(u.exports,h,u,u.exports,this)}return l[t].exports;function h(e){var t=h.resolve(e);return!1===t?{}:p(t)}}p.isParcelRequire=!0,p.Module=function(e){this.id=e,this.bundle=p,this.exports={}},p.modules=e,p.cache=l,p.parent=i,p.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(p,"root",{get:function(){return o[n]}}),o[n]=p;for(var d=0;d<t.length;d++)p(t[d])}({epdjJ:[function(e,t,r){let n,a,o;var i=Object.create,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,d=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of p(t))u.call(e,a)||a===r||l(e,a,{get:()=>t[a],enumerable:!(n=s(t,a))||n.enumerable});return e},f=(e,t,r)=>(h(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>g}),t.exports=c(l({},"__esModule",{value:!0}),y);var b=(o=null!=(n=e("aa6d30f1c503b94d"))?i(d(n)):{},c(!a&&n&&n.__esModule?o:l(o,"default",{value:n,enumerable:!0}),n)),m=e("6b40d70912fab3c5"),v=e("e85ed6b0f1376dfb");class g extends b.Component{constructor(){super(...arguments),f(this,"callPlayer",m.callPlayer),f(this,"playerID",this.props.config.playerId||`twitch-player-${(0,m.randomString)()}`),f(this,"mute",()=>{this.callPlayer("setMuted",!0)}),f(this,"unmute",()=>{this.callPlayer("setMuted",!1)})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){let{playsinline:r,onError:n,config:a,controls:o}=this.props,i=v.MATCH_URL_TWITCH_CHANNEL.test(e),l=i?e.match(v.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(v.MATCH_URL_TWITCH_VIDEO)[1];if(t){i?this.player.setChannel(l):this.player.setVideo("v"+l);return}(0,m.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then(t=>{this.player=new t.Player(this.playerID,{video:i?"":l,channel:i?l:"",height:"100%",width:"100%",playsinline:r,autoplay:this.props.playing,muted:this.props.muted,controls:!!i||o,time:(0,m.parseStartTime)(e),...a.options});let{READY:n,PLAYING:s,PAUSE:p,ENDED:d,ONLINE:u,OFFLINE:h,SEEK:c}=t.Player;this.player.addEventListener(n,this.props.onReady),this.player.addEventListener(s,this.props.onPlay),this.player.addEventListener(p,this.props.onPause),this.player.addEventListener(d,this.props.onEnded),this.player.addEventListener(c,this.props.onSeek),this.player.addEventListener(u,this.props.onLoaded),this.player.addEventListener(h,this.props.onLoaded)},n)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return b.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}f(g,"displayName","Twitch"),f(g,"canPlay",v.canPlay.twitch),f(g,"loopOnEnded",!0)},{aa6d30f1c503b94d:"aUO8W","6b40d70912fab3c5":"jqI8n",e85ed6b0f1376dfb:"5mKZv"}]},[],0,"parcelRequire26b5");
//# sourceMappingURL=Twitch.799f60f5.js.map