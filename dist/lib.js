!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.lib=e():t.lib=e()}(this,function(){return function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),n=i(r),s=o(2),a=i(s);e.default={apiLoader:n.default,Map:a.default}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){var o=document.createElement("script"),i=new Promise(function(e,i){window.initMap=function(){e({script:o,key:t})}}),r="https://maps.googleapis.com/maps/api/js?key="+t+"&callback=initMap";return e&&e.length>0&&(r+="&libraries="+e.join(",")),o.async="async",o.defer="defer",o.src=r,document.body.appendChild(o),i};e.default=i},function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},n=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}();o(3);var s=function(){function t(e,o,n){var s=this;i(this,t),this.gmaps=window.google.maps,this.map=new this.gmaps.Map(e,o),this.infoBubble=function(t){return new InfoBubble(r({},n,{map:s.map,content:t}))},this.markerList=[],this.activeMarker=null,this.onChangeActiveMarker=function(){}}return n(t,[{key:"markerRemoveAll",value:function(){this.markerList.forEach(function(t){t.setMap(null)}),this.markerList=[]}},{key:"markerRemove",value:function(t){t.setMap(null);var e=this.markerList.indexOf(t);this.markerList.splice(e,1)}},{key:"markerAdd",value:function(t){var e,o=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2],s=[];return t.forEach(function(t){var e=new google.maps.Marker(r({},i,{position:t,map:o.map}));e.addListener("click",function(t){var i=s.indexOf(e);o.activeMarker!==i&&o.onChangeActiveMarker(i,o.activeMarker),o.activeMarker=i}),s.push(e),n&&n(e)}),(e=this.markerList).push.apply(e,s),s}},{key:"vpOnMarkers",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.markerList,i=new google.maps.LatLngBounds;return o.map(function(e){return new t.gmaps.LatLng(e.position.lat(),e.position.lng())}).forEach(function(t){i.extend(t)}),e?this.map.fitBounds(i):this.map.panTo(i.getCenter()),i}},{key:"ibOpen",value:function(t,e,o){var i=!1;void 0!==t.infoBubble&&null!==t.infoBubble&&t.infoBubble.isOpen_&&(i=!0),i||(console.log(t),t.infoBubble=this.infoBubble(e),t.infoBubble.open(this.map,t)),o&&o()}},{key:"ibOpenOne",value:function(t,e,o,i){for(var r=document.querySelectorAll("."+e),n=0;n<this.markerList.length;n++)this.markerList[n].infoBubble&&this.markerList[n].infoBubble.close(this.map,this.markerList[n]);if(r.length){var s=r[0].parentNode.parentNode;s.parentNode.previousSibling.previousSibling.innerHTML="",s.parentNode.innerHTML=""}t.infoBubble=this.infoBubble(o),t.infoBubble.open(this.map,t),i&&i(t)}},{key:"ibClose",value:function(t,e,o){var i=document.querySelector("."+e);t.infoBubble.close(this.map,t);var r=i.parentNode.parentNode;r.parentNode.removeChild(r),o&&o(t)}},{key:"ibRemoveAllFromDom",value:function(){var t=document.querySelectorAll("."+className);if(t.length){var e=t[0].parentNode.parentNode;e.parentNode.previousSibling.previousSibling.innerHTML="",e.parentNode.innerHTML=""}}}]),t}();e.default=s},function(t,e){function o(t){this.extend(o,google.maps.OverlayView),this.tabs_=[],this.activeTab_=null,this.baseZIndex_=100,this.isOpen_=!1;var e=t||{};void 0==e.backgroundColor&&(e.backgroundColor=this.BACKGROUND_COLOR_),void 0==e.borderColor&&(e.borderColor=this.BORDER_COLOR_),void 0==e.borderRadius&&(e.borderRadius=this.BORDER_RADIUS_),void 0==e.borderWidth&&(e.borderWidth=this.BORDER_WIDTH_),void 0==e.padding&&(e.padding=this.PADDING_),void 0==e.arrowPosition&&(e.arrowPosition=this.ARROW_POSITION_),void 0==e.disableAutoPan&&(e.disableAutoPan=!1),void 0==e.disableAnimation&&(e.disableAnimation=!1),void 0==e.minWidth&&(e.minWidth=this.MIN_WIDTH_),void 0==e.shadowStyle&&(e.shadowStyle=this.SHADOW_STYLE_),void 0==e.arrowSize&&(e.arrowSize=this.ARROW_SIZE_),void 0==e.arrowStyle&&(e.arrowStyle=this.ARROW_STYLE_),void 0==e.closeSrc&&(e.closeSrc=this.CLOSE_SRC_),this.buildDom_(),this.setValues(e)}window.InfoBubble=o,o.prototype.ARROW_SIZE_=15,o.prototype.ARROW_STYLE_=0,o.prototype.SHADOW_STYLE_=1,o.prototype.MIN_WIDTH_=50,o.prototype.ARROW_POSITION_=50,o.prototype.PADDING_=10,o.prototype.BORDER_WIDTH_=1,o.prototype.BORDER_COLOR_="#ccc",o.prototype.BORDER_RADIUS_=10,o.prototype.BACKGROUND_COLOR_="#fff",o.prototype.CLOSE_SRC_="https://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif",o.prototype.extend=function(t,e){return function(t){for(var e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},o.prototype.buildDom_=function(){var t=this.bubble_=document.createElement("DIV");t.style.position="absolute",t.style.zIndex=this.baseZIndex_,(this.tabsContainer_=document.createElement("DIV")).style.position="relative";var e=this.close_=document.createElement("IMG");e.style.position="absolute",e.style.border=0,e.style.zIndex=this.baseZIndex_+1,e.style.cursor="pointer",e.src=this.get("closeSrc");var o=this;google.maps.event.addDomListener(e,"click",function(){o.close(),google.maps.event.trigger(o,"closeclick")});var i=this.contentContainer_=document.createElement("DIV");i.style.overflowX="auto",i.style.overflowY="auto",i.style.cursor="default",i.style.clear="both",i.style.position="relative";var r=this.content_=document.createElement("DIV");i.appendChild(r);var n=this.arrow_=document.createElement("DIV");n.style.position="relative";var s=this.arrowOuter_=document.createElement("DIV"),a=this.arrowInner_=document.createElement("DIV"),h=this.getArrowSize_();s.style.position=a.style.position="absolute",s.style.left=a.style.left="50%",s.style.height=a.style.height="0",s.style.width=a.style.width="0",s.style.marginLeft=this.px(-h),s.style.borderWidth=this.px(h),s.style.borderBottomWidth=0;var p=this.bubbleShadow_=document.createElement("DIV");p.style.position="absolute",t.style.display=p.style.display="none",t.appendChild(this.tabsContainer_),t.appendChild(e),t.appendChild(i),n.appendChild(s),n.appendChild(a),t.appendChild(n);var d=document.createElement("style");d.setAttribute("type","text/css"),this.animationName_="_ibani_"+Math.round(1e4*Math.random());var l="."+this.animationName_+"{-webkit-animation-name:"+this.animationName_+";-webkit-animation-duration:0.5s;-webkit-animation-iteration-count:1;}@-webkit-keyframes "+this.animationName_+" {from {-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% {-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}";d.textContent=l,document.getElementsByTagName("head")[0].appendChild(d)},o.prototype.setBackgroundClassName=function(t){this.set("backgroundClassName",t)},o.prototype.setBackgroundClassName=o.prototype.setBackgroundClassName,o.prototype.backgroundClassName_changed=function(){this.content_.className=this.get("backgroundClassName")},o.prototype.backgroundClassName_changed=o.prototype.backgroundClassName_changed,o.prototype.setTabClassName=function(t){this.set("tabClassName",t)},o.prototype.setTabClassName=o.prototype.setTabClassName,o.prototype.tabClassName_changed=function(){this.updateTabStyles_()},o.prototype.tabClassName_changed=o.prototype.tabClassName_changed,o.prototype.getArrowStyle_=function(){return parseInt(this.get("arrowStyle"),10)||0},o.prototype.setArrowStyle=function(t){this.set("arrowStyle",t)},o.prototype.setArrowStyle=o.prototype.setArrowStyle,o.prototype.arrowStyle_changed=function(){this.arrowSize_changed()},o.prototype.arrowStyle_changed=o.prototype.arrowStyle_changed,o.prototype.getArrowSize_=function(){return parseInt(this.get("arrowSize"),10)||0},o.prototype.setArrowSize=function(t){this.set("arrowSize",t)},o.prototype.setArrowSize=o.prototype.setArrowSize,o.prototype.arrowSize_changed=function(){this.borderWidth_changed()},o.prototype.arrowSize_changed=o.prototype.arrowSize_changed,o.prototype.setArrowPosition=function(t){this.set("arrowPosition",t)},o.prototype.setArrowPosition=o.prototype.setArrowPosition,o.prototype.getArrowPosition_=function(){return parseInt(this.get("arrowPosition"),10)||0},o.prototype.arrowPosition_changed=function(){var t=this.getArrowPosition_();this.arrowOuter_.style.left=this.arrowInner_.style.left=t+"%",this.redraw_()},o.prototype.arrowPosition_changed=o.prototype.arrowPosition_changed,o.prototype.setZIndex=function(t){this.set("zIndex",t)},o.prototype.setZIndex=o.prototype.setZIndex,o.prototype.getZIndex=function(){return parseInt(this.get("zIndex"),10)||this.baseZIndex_},o.prototype.zIndex_changed=function(){var t=this.getZIndex();this.bubble_.style.zIndex=this.baseZIndex_=t,this.close_.style.zIndex=t+1},o.prototype.zIndex_changed=o.prototype.zIndex_changed,o.prototype.setShadowStyle=function(t){this.set("shadowStyle",t)},o.prototype.setShadowStyle=o.prototype.setShadowStyle,o.prototype.getShadowStyle_=function(){return parseInt(this.get("shadowStyle"),10)||0},o.prototype.shadowStyle_changed=function(){var t=this.getShadowStyle_(),e="",o="",i="";switch(t){case 0:e="none";break;case 1:o="40px 15px 10px rgba(33,33,33,0.3)",i="transparent";break;case 2:o="0 0 2px rgba(33,33,33,0.3)",i="rgba(33,33,33,0.35)"}this.bubbleShadow_.style.boxShadow=this.bubbleShadow_.style.webkitBoxShadow=this.bubbleShadow_.style.MozBoxShadow=o,this.bubbleShadow_.style.backgroundColor=i,this.isOpen_&&(this.bubbleShadow_.style.display=e,this.draw())},o.prototype.shadowStyle_changed=o.prototype.shadowStyle_changed,o.prototype.showCloseButton=function(){this.set("hideCloseButton",!1)},o.prototype.showCloseButton=o.prototype.showCloseButton,o.prototype.hideCloseButton=function(){this.set("hideCloseButton",!0)},o.prototype.hideCloseButton=o.prototype.hideCloseButton,o.prototype.hideCloseButton_changed=function(){this.close_.style.display=this.get("hideCloseButton")?"none":""},o.prototype.hideCloseButton_changed=o.prototype.hideCloseButton_changed,o.prototype.setBackgroundColor=function(t){t&&this.set("backgroundColor",t)},o.prototype.setBackgroundColor=o.prototype.setBackgroundColor,o.prototype.backgroundColor_changed=function(){var t=this.get("backgroundColor");this.contentContainer_.style.backgroundColor=t,this.arrowInner_.style.borderColor=t+" transparent transparent",this.updateTabStyles_()},o.prototype.backgroundColor_changed=o.prototype.backgroundColor_changed,o.prototype.setBorderColor=function(t){t&&this.set("borderColor",t)},o.prototype.setBorderColor=o.prototype.setBorderColor,o.prototype.borderColor_changed=function(){var t=this.get("borderColor"),e=this.contentContainer_,o=this.arrowOuter_;e.style.borderColor=t,o.style.borderColor=t+" transparent transparent",e.style.borderStyle=o.style.borderStyle=this.arrowInner_.style.borderStyle="solid",this.updateTabStyles_()},o.prototype.borderColor_changed=o.prototype.borderColor_changed,o.prototype.setBorderRadius=function(t){this.set("borderRadius",t)},o.prototype.setBorderRadius=o.prototype.setBorderRadius,o.prototype.getBorderRadius_=function(){return parseInt(this.get("borderRadius"),10)||0},o.prototype.borderRadius_changed=function(){var t=this.getBorderRadius_(),e=this.getBorderWidth_();this.contentContainer_.style.borderRadius=this.contentContainer_.style.MozBorderRadius=this.contentContainer_.style.webkitBorderRadius=this.bubbleShadow_.style.borderRadius=this.bubbleShadow_.style.MozBorderRadius=this.bubbleShadow_.style.webkitBorderRadius=this.px(t),this.tabsContainer_.style.paddingLeft=this.tabsContainer_.style.paddingRight=this.px(t+e),this.redraw_()},o.prototype.borderRadius_changed=o.prototype.borderRadius_changed,o.prototype.getBorderWidth_=function(){return parseInt(this.get("borderWidth"),10)||0},o.prototype.setBorderWidth=function(t){this.set("borderWidth",t)},o.prototype.setBorderWidth=o.prototype.setBorderWidth,o.prototype.borderWidth_changed=function(){var t=this.getBorderWidth_();this.contentContainer_.style.borderWidth=this.px(t),this.tabsContainer_.style.top=this.px(t),this.updateArrowStyle_(),this.updateTabStyles_(),this.borderRadius_changed(),this.redraw_()},o.prototype.borderWidth_changed=o.prototype.borderWidth_changed,o.prototype.updateArrowStyle_=function(){var t=this.getBorderWidth_(),e=this.getArrowSize_(),o=this.getArrowStyle_(),i=this.px(e),r=this.px(Math.max(0,e-t)),n=this.arrowOuter_,s=this.arrowInner_;this.arrow_.style.marginTop=this.px(-t),n.style.borderTopWidth=i,s.style.borderTopWidth=r,0==o||1==o?(n.style.borderLeftWidth=i,s.style.borderLeftWidth=r):n.style.borderLeftWidth=s.style.borderLeftWidth=0,0==o||2==o?(n.style.borderRightWidth=i,s.style.borderRightWidth=r):n.style.borderRightWidth=s.style.borderRightWidth=0,o<2?(n.style.marginLeft=this.px(-e),s.style.marginLeft=this.px(-(e-t))):n.style.marginLeft=s.style.marginLeft=0,n.style.display=0==t?"none":""},o.prototype.setPadding=function(t){this.set("padding",t)},o.prototype.setPadding=o.prototype.setPadding,o.prototype.setCloseSrc=function(t){t&&this.close_&&(this.close_.src=t)},o.prototype.setCloseSrc=o.prototype.setCloseSrc,o.prototype.getPadding_=function(){return parseInt(this.get("padding"),10)||0},o.prototype.padding_changed=function(){var t=this.getPadding_();this.contentContainer_.style.padding=this.px(t),this.updateTabStyles_(),this.redraw_()},o.prototype.padding_changed=o.prototype.padding_changed,o.prototype.px=function(t){return t?t+"px":t},o.prototype.addEvents_=function(){var t=["mousedown","mousemove","mouseover","mouseout","mouseup","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","dblclick","contextmenu","click"],e=this.bubble_;this.listeners_=[];for(var o,i=0;o=t[i];i++)this.listeners_.push(google.maps.event.addDomListener(e,o,function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()}))},o.prototype.onAdd=function(){this.bubble_||this.buildDom_(),this.addEvents_();var t=this.getPanes();t&&(t.floatPane.appendChild(this.bubble_),t.floatShadow.appendChild(this.bubbleShadow_)),google.maps.event.trigger(this,"domready")},o.prototype.onAdd=o.prototype.onAdd,o.prototype.draw=function(){var t=this.getProjection();if(t){var e=this.get("position");if(!e)return void this.close();var o=0;this.activeTab_&&(o=this.activeTab_.offsetHeight);var i=this.getAnchorHeight_(),r=this.getArrowSize_(),n=this.getArrowPosition_();n/=100;var s=t.fromLatLngToDivPixel(e),a=this.contentContainer_.offsetWidth,h=this.bubble_.offsetHeight;if(a){var p=s.y-(h+r);i&&(p-=i);var d=s.x-a*n;this.bubble_.style.top=this.px(p),this.bubble_.style.left=this.px(d);switch(parseInt(this.get("shadowStyle"),10)){case 1:this.bubbleShadow_.style.top=this.px(p+o-1),this.bubbleShadow_.style.left=this.px(d),this.bubbleShadow_.style.width=this.px(a),this.bubbleShadow_.style.height=this.px(this.contentContainer_.offsetHeight-r);break;case 2:a*=.8,this.bubbleShadow_.style.top=i?this.px(s.y):this.px(s.y+r),this.bubbleShadow_.style.left=this.px(s.x-a*n),this.bubbleShadow_.style.width=this.px(a),this.bubbleShadow_.style.height=this.px(2)}}}},o.prototype.draw=o.prototype.draw,o.prototype.onRemove=function(){this.bubble_&&this.bubble_.parentNode&&this.bubble_.parentNode.removeChild(this.bubble_),this.bubbleShadow_&&this.bubbleShadow_.parentNode&&this.bubbleShadow_.parentNode.removeChild(this.bubbleShadow_);for(var t,e=0;t=this.listeners_[e];e++)google.maps.event.removeListener(t)},o.prototype.onRemove=o.prototype.onRemove,o.prototype.isOpen=function(){return this.isOpen_},o.prototype.isOpen=o.prototype.isOpen,o.prototype.close=function(){this.bubble_&&(this.bubble_.style.display="none",this.bubble_.className=this.bubble_.className.replace(this.animationName_,"")),this.bubbleShadow_&&(this.bubbleShadow_.style.display="none",this.bubbleShadow_.className=this.bubbleShadow_.className.replace(this.animationName_,"")),this.isOpen_=!1},o.prototype.close=o.prototype.close,o.prototype.open=function(t,e){var o=this;window.setTimeout(function(){o.open_(t,e)},0)},o.prototype.open_=function(t,e){if(this.updateContent_(),t&&this.setMap(t),e&&(this.set("anchor",e),this.bindTo("anchorPoint",e),this.bindTo("position",e)),this.bubble_.style.display=this.bubbleShadow_.style.display="",!this.get("disableAnimation")&&(this.bubble_.className+=" "+this.animationName_,this.bubbleShadow_.className+=" "+this.animationName_),this.redraw_(),this.isOpen_=!0,!this.get("disableAutoPan")){var o=this;window.setTimeout(function(){o.panToView()},200)}},o.prototype.open=o.prototype.open,o.prototype.setPosition=function(t){t&&this.set("position",t)},o.prototype.setPosition=o.prototype.setPosition,o.prototype.getPosition=function(){return this.get("position")},o.prototype.getPosition=o.prototype.getPosition,o.prototype.position_changed=function(){this.draw()},o.prototype.position_changed=o.prototype.position_changed,o.prototype.panToView=function(){var t=this.getProjection();if(t&&this.bubble_){var e=this.getAnchorHeight_(),o=this.bubble_.offsetHeight+e,i=this.get("map"),r=i.getDiv(),n=r.offsetHeight,s=this.getPosition(),a=t.fromLatLngToContainerPixel(i.getCenter()),h=t.fromLatLngToContainerPixel(s),p=a.y-o,d=n-a.y,l=p<0,c=0;l&&(p*=-1,c=(p+d)/2),h.y-=c,s=t.fromContainerPixelToLatLng(h),i.getCenter()!=s&&i.panTo(s)}},o.prototype.panToView=o.prototype.panToView,o.prototype.htmlToDocumentFragment_=function(t){t=t.replace(/^\s*([\S\s]*)\b\s*$/,"$1");var e=document.createElement("DIV");if(e.innerHTML=t,1==e.childNodes.length)return e.removeChild(e.firstChild);for(var o=document.createDocumentFragment();e.firstChild;)o.appendChild(e.firstChild);return o},o.prototype.removeChildren_=function(t){if(t)for(var e;e=t.firstChild;)t.removeChild(e)},o.prototype.setContent=function(t){this.set("content",t)},o.prototype.setContent=o.prototype.setContent,o.prototype.getContent=function(){return this.get("content")},o.prototype.getContent=o.prototype.getContent,o.prototype.updateContent_=function(){if(this.content_){this.removeChildren_(this.content_);var t=this.getContent();if(t){"string"==typeof t&&(t=this.htmlToDocumentFragment_(t)),this.content_.appendChild(t);for(var e,o=this,i=this.content_.getElementsByTagName("IMG"),r=0;e=i[r];r++)google.maps.event.addDomListener(e,"load",function(){o.imageLoaded_()})}this.redraw_()}},o.prototype.imageLoaded_=function(){var t=!this.get("disableAutoPan");this.redraw_(),!t||0!=this.tabs_.length&&0!=this.activeTab_.index||this.panToView()},o.prototype.updateTabStyles_=function(){if(this.tabs_&&this.tabs_.length){for(var t,e=0;t=this.tabs_[e];e++)this.setTabStyle_(t.tab);this.activeTab_.style.zIndex=this.baseZIndex_;var o=this.getBorderWidth_(),i=this.getPadding_()/2;this.activeTab_.style.borderBottomWidth=0,this.activeTab_.style.paddingBottom=this.px(i+o)}},o.prototype.setTabStyle_=function(t){var e=this.get("backgroundColor"),o=this.get("borderColor"),i=this.getBorderRadius_(),r=this.getBorderWidth_(),n=this.getPadding_(),s=this.px(-Math.max(n,i)),a=this.px(i),h=this.baseZIndex_;t.index&&(h-=t.index);var p={cssFloat:"left",position:"relative",cursor:"pointer",backgroundColor:e,border:this.px(r)+" solid "+o,padding:this.px(n/2)+" "+this.px(n),marginRight:s,whiteSpace:"nowrap",borderRadiusTopLeft:a,MozBorderRadiusTopleft:a,webkitBorderTopLeftRadius:a,borderRadiusTopRight:a,MozBorderRadiusTopright:a,webkitBorderTopRightRadius:a,zIndex:h,display:"inline"};for(var d in p)t.style[d]=p[d];var l=this.get("tabClassName");void 0!=l&&(t.className+=" "+l)},o.prototype.addTabActions_=function(t){var e=this;t.listener_=google.maps.event.addDomListener(t,"click",function(){e.setTabActive_(this)})},o.prototype.setTabActive=function(t){var e=this.tabs_[t-1];e&&this.setTabActive_(e.tab)},o.prototype.setTabActive=o.prototype.setTabActive,o.prototype.setTabActive_=function(t){if(!t)return this.setContent(""),void this.updateContent_();var e=this.getPadding_()/2,o=this.getBorderWidth_();if(this.activeTab_){var i=this.activeTab_;i.style.zIndex=this.baseZIndex_-i.index,i.style.paddingBottom=this.px(e),i.style.borderBottomWidth=this.px(o)}t.style.zIndex=this.baseZIndex_,t.style.borderBottomWidth=0,t.style.marginBottomWidth="-10px",t.style.paddingBottom=this.px(e+o),this.setContent(this.tabs_[t.index].content),this.updateContent_(),this.activeTab_=t,this.redraw_()},o.prototype.setMaxWidth=function(t){this.set("maxWidth",t)},o.prototype.setMaxWidth=o.prototype.setMaxWidth,o.prototype.maxWidth_changed=function(){this.redraw_()},o.prototype.maxWidth_changed=o.prototype.maxWidth_changed,o.prototype.setMaxHeight=function(t){this.set("maxHeight",t)},o.prototype.setMaxHeight=o.prototype.setMaxHeight,o.prototype.maxHeight_changed=function(){this.redraw_()},o.prototype.maxHeight_changed=o.prototype.maxHeight_changed,o.prototype.setMinWidth=function(t){this.set("minWidth",t)},o.prototype.setMinWidth=o.prototype.setMinWidth,o.prototype.minWidth_changed=function(){this.redraw_()},o.prototype.minWidth_changed=o.prototype.minWidth_changed,o.prototype.setMinHeight=function(t){this.set("minHeight",t)},o.prototype.setMinHeight=o.prototype.setMinHeight,o.prototype.minHeight_changed=function(){this.redraw_()},o.prototype.minHeight_changed=o.prototype.minHeight_changed,o.prototype.addTab=function(t,e){var o=document.createElement("DIV");o.innerHTML=t,this.setTabStyle_(o),this.addTabActions_(o),this.tabsContainer_.appendChild(o),this.tabs_.push({label:t,content:e,tab:o}),o.index=this.tabs_.length-1,o.style.zIndex=this.baseZIndex_-o.index,this.activeTab_||this.setTabActive_(o),o.className=o.className+" "+this.animationName_,this.redraw_()},o.prototype.addTab=o.prototype.addTab,o.prototype.updateTab=function(t,e,o){if(!(!this.tabs_.length||t<0||t>=this.tabs_.length)){var i=this.tabs_[t];void 0!=e&&(i.tab.innerHTML=i.label=e),void 0!=o&&(i.content=o),this.activeTab_==i.tab&&(this.setContent(i.content),this.updateContent_()),this.redraw_()}},o.prototype.updateTab=o.prototype.updateTab,o.prototype.removeTab=function(t){if(!(!this.tabs_.length||t<0||t>=this.tabs_.length)){var e=this.tabs_[t];e.tab.parentNode.removeChild(e.tab),google.maps.event.removeListener(e.tab.listener_),this.tabs_.splice(t,1),delete e;for(var o,i=0;o=this.tabs_[i];i++)o.tab.index=i;e.tab==this.activeTab_&&(this.tabs_[t]?this.activeTab_=this.tabs_[t].tab:this.tabs_[t-1]?this.activeTab_=this.tabs_[t-1].tab:this.activeTab_=void 0,this.setTabActive_(this.activeTab_)),this.redraw_()}},o.prototype.removeTab=o.prototype.removeTab,o.prototype.getElementSize_=function(t,e,o){var i=document.createElement("DIV");i.style.display="inline",i.style.position="absolute",i.style.visibility="hidden","string"==typeof t?i.innerHTML=t:i.appendChild(t.cloneNode(!0)),document.body.appendChild(i);var r=new google.maps.Size(i.offsetWidth,i.offsetHeight);return e&&r.width>e&&(i.style.width=this.px(e),r=new google.maps.Size(i.offsetWidth,i.offsetHeight)),o&&r.height>o&&(i.style.height=this.px(o),r=new google.maps.Size(i.offsetWidth,i.offsetHeight)),document.body.removeChild(i),delete i,r},o.prototype.redraw_=function(){this.figureOutSize_(),this.positionCloseButton_(),this.draw()},o.prototype.figureOutSize_=function(){var t=this.get("map");if(t){var e=this.getPadding_(),o=(this.getBorderWidth_(),this.getBorderRadius_(),this.getArrowSize_()),i=t.getDiv(),r=2*o,n=i.offsetWidth-r,s=i.offsetHeight-r-this.getAnchorHeight_(),a=0,h=this.get("minWidth")||0,p=this.get("minHeight")||0,d=this.get("maxWidth")||0,l=this.get("maxHeight")||0;d=Math.min(n,d),l=Math.min(s,l);var c=0;if(this.tabs_.length)for(var u,b=0;u=this.tabs_[b];b++){var y=this.getElementSize_(u.tab,d,l),_=this.getElementSize_(u.content,d,l);h<y.width&&(h=y.width),c+=y.width,p<y.height&&(p=y.height),y.height>a&&(a=y.height),h<_.width&&(h=_.width),p<_.height&&(p=_.height)}else{var g=this.get("content");if("string"==typeof g&&(g=this.htmlToDocumentFragment_(g)),g){var _=this.getElementSize_(g,d,l);h<_.width&&(h=_.width),p<_.height&&(p=_.height)}}d&&(h=Math.min(h,d)),l&&(p=Math.min(p,l)),h=Math.max(h,c),h==c&&(h+=2*e),o*=2,h=Math.max(h,o),h>n&&(h=n),p>s&&(p=s-a),this.tabsContainer_&&(this.tabHeight_=a,this.tabsContainer_.style.width=this.px(c)),this.contentContainer_.style.width=this.px(h),this.contentContainer_.style.height=this.px(p)}},o.prototype.getAnchorHeight_=function(){if(this.get("anchor")){var t=this.get("anchorPoint");if(t)return-1*t.y}return 0},o.prototype.anchorPoint_changed=function(){this.draw()},o.prototype.anchorPoint_changed=o.prototype.anchorPoint_changed,o.prototype.positionCloseButton_=function(){var t=(this.getBorderRadius_(),this.getBorderWidth_()),e=2,o=2;this.tabs_.length&&this.tabHeight_&&(o+=this.tabHeight_),o+=t,e+=t;var i=this.contentContainer_;i&&i.clientHeight<i.scrollHeight&&(e+=15),this.close_.style.right=this.px(e),this.close_.style.top=this.px(o)}}]).default});