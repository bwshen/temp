!function(e,t,r,o,n){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[o]&&i[o],l=s.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,r){if(!l[t]){if(!e[t]){var n="function"==typeof i[o]&&i[o];if(!r&&n)return n(t,!0);if(s)return s(t,!0);if(a&&"string"==typeof t)return a(t);var p=Error("Cannot find module '"+t+"'");throw p.code="MODULE_NOT_FOUND",p}d.resolve=function(r){var o=e[t][1][r];return null!=o?o:r},d.cache={};var c=l[t]=new u.Module(t);e[t][0].call(c.exports,d,c,c.exports,this)}return l[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=s,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return i[o]}}),i[o]=u;for(var p=0;p<t.length;p++)u(t[p])}({bsvwu:[function(e,t,r){let o,n,i;var s=Object.create,l=Object.defineProperty,a=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,p=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of u(t))c.call(e,n)||n===r||l(e,n,{get:()=>t[n],enumerable:!(o=a(t,n))||o.enumerable});return e},h=(e,t,r)=>(d(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>v}),t.exports=f(l({},"__esModule",{value:!0}),y);var m=(i=null!=(o=e("4cb913f20a22c8cf"))?s(p(o)):{},f(!n&&o&&o.__esModule?i:l(i,"default",{value:o,enumerable:!0}),o)),b=e("3155e047b6a4eeaa"),g=e("92c4014b150cb617");class v extends m.Component{constructor(){super(...arguments),h(this,"callPlayer",b.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"fractionLoaded",null),h(this,"mute",()=>{this.setVolume(0)}),h(this,"unmute",()=>{null!==this.props.volume&&this.setVolume(this.props.volume)}),h(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){(0,b.getSDK)("https://w.soundcloud.com/player/api.js","SC").then(r=>{if(!this.iframe)return;let{PLAY:o,PLAY_PROGRESS:n,PAUSE:i,FINISH:s,ERROR:l}=r.Widget.Events;t||(this.player=r.Widget(this.iframe),this.player.bind(o,this.props.onPlay),this.player.bind(i,()=>{this.duration-this.currentTime<.05||this.props.onPause()}),this.player.bind(n,e=>{this.currentTime=e.currentPosition/1e3,this.fractionLoaded=e.loadedProgress}),this.player.bind(s,()=>this.props.onEnded()),this.player.bind(l,e=>this.props.onError(e))),this.player.load(e,{...this.props.config.options,callback:()=>{this.player.getDuration(e=>{this.duration=e/1e3,this.props.onReady()})}})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seekTo",1e3*e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.fractionLoaded*this.duration}render(){let{display:e}=this.props;return m.default.createElement("iframe",{ref:this.ref,src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,style:{width:"100%",height:"100%",display:e},frameBorder:0,allow:"autoplay"})}}h(v,"displayName","SoundCloud"),h(v,"canPlay",g.canPlay.soundcloud),h(v,"loopOnEnded",!0)},{"4cb913f20a22c8cf":"aUO8W","3155e047b6a4eeaa":"jqI8n","92c4014b150cb617":"5mKZv"}]},[],0,"parcelRequire26b5");
//# sourceMappingURL=SoundCloud.c22f9b1c.js.map