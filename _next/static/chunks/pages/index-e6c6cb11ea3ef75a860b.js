(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3867:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Ne}});var t=r(5893),a=(r(9008),r(3679)),l=r.n(a),i=r(8017),s=r(8448),o=r(3808);function c(e,n){if(null!=e)if((0,o.mf)(e))e(n);else try{e.current=n}catch(r){throw new Error("Cannot assign value '"+n+"' to ref '"+e+"'")}}function d(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return e=>{n.forEach((n=>c(n,e)))}}var u=r(917),p=r(63),m=r(2326),h=r(5284),f=r(227),v=r(4461),x={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},y=(0,f.m$)("span",{baseStyle:x});o.Ts&&(y.displayName="VisuallyHidden");var b=(0,f.m$)("input",{baseStyle:x});o.Ts&&(b.displayName="VisuallyHiddenInput");var g=r(7294);function _(){return(_=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var j=(0,u.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),N=(0,p.G)(((e,n)=>{var r=(0,m.m)("Spinner",e),t=(0,h.Lr)(e),{label:a="Loading...",thickness:l="2px",speed:i="0.45s",emptyColor:s="transparent",className:o}=t,c=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["label","thickness","speed","emptyColor","className"]),d=(0,v.cx)("chakra-spinner",o),u=_({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:l,borderBottomColor:s,borderLeftColor:s,animation:j+" "+i+" linear infinite"},r);return g.createElement(f.m$.div,_({ref:n,__css:u,className:d},c),a&&g.createElement(y,null,a))}));o.Ts&&(N.displayName="Spinner");var O=r(8554),E=r.n(O),k=r(8500);function I(){return(I=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var[S,w]=(0,k.k)({strict:!1,name:"ButtonGroupContext"}),C=(0,p.G)(((e,n)=>{var{size:r,colorScheme:t,variant:a,className:l,spacing:i="0.5rem",isAttached:s,isDisabled:o}=e,c=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),d=(0,v.cx)("chakra-button__group",l),u=g.useMemo((()=>({size:r,colorScheme:t,variant:a,isDisabled:o})),[r,t,a,o]),p={display:"inline-flex"};return p=I({},p,s?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:i}}),g.createElement(S,{value:u},g.createElement(f.m$.div,I({ref:n,role:"group",__css:p,className:d},c)))}));function T(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}function P(){return(P=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}o.Ts&&(C.displayName="ButtonGroup");var R=(0,p.G)(((e,n)=>{var r,t=w(),a=(0,m.m)("Button",P({},t,e)),l=(0,h.Lr)(e),{isDisabled:i=(null==t?void 0:t.isDisabled),isLoading:s,isActive:o,isFullWidth:c,children:u,leftIcon:p,rightIcon:x,loadingText:y,iconSpacing:b="0.5rem",type:_,spinner:j,spinnerPlacement:N="start",className:O,as:k}=l,I=T(l,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),S=E()({},null!=(r=null==a?void 0:a._focus)?r:{},{zIndex:1}),C=P({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:c?"100%":"auto"},a,!!t&&{_focus:S}),{ref:R,type:F}=function(e){var[n,r]=g.useState(!e),t=g.useCallback((e=>{e&&r("BUTTON"===e.tagName)}),[]),a=n?"button":void 0;return{ref:t,type:a}}(k);return g.createElement(f.m$.button,P({disabled:i||s,ref:d(n,R),as:k,type:null!=_?_:F,"data-active":(0,v.PB)(o),"data-loading":(0,v.PB)(s),__css:C,className:(0,v.cx)("chakra-button",O)},I),p&&!s&&g.createElement(H,{marginEnd:b},p),s&&"start"===N&&g.createElement(L,{className:"chakra-button__spinner--start",label:y,placement:"start"},j),s?y||g.createElement(f.m$.span,{opacity:0},u):u,s&&"end"===N&&g.createElement(L,{className:"chakra-button__spinner--end",label:y,placement:"end"},j),x&&!s&&g.createElement(H,{marginStart:b},x))}));o.Ts&&(R.displayName="Button");var H=e=>{var{children:n,className:r}=e,t=T(e,["children","className"]),a=g.isValidElement(n)?g.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,l=(0,v.cx)("chakra-button__icon",r);return g.createElement(f.m$.span,P({display:"inline-flex",alignSelf:"center",flexShrink:0},t,{className:l}),a)};o.Ts&&(H.displayName="ButtonIcon");var L=e=>{var{label:n,placement:r,children:t=g.createElement(N,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:l}=e,i=T(e,["label","placement","spacing","children","className","__css"]),s=(0,v.cx)("chakra-button__spinner",a),o=P({display:"flex",alignItems:"center",position:n?"relative":"absolute",["start"===r?"marginEnd":"marginStart"]:n?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},l);return g.createElement(f.m$.div,P({className:s},i,{__css:o}),t)};o.Ts&&(L.displayName="ButtonSpinner");var F=r(4577);var G=r(9676),q=r(658);function z(){return(z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function D(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var[B,$]=(0,k.k)({strict:!1,name:"FormControlContext"});function A(e){var{id:n,isRequired:r,isInvalid:t,isDisabled:a,isReadOnly:l}=e,i=D(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),s=(0,F.Me)(),o=n||"field-"+s,c=o+"-label",u=o+"-feedback",p=o+"-helptext",[m,h]=g.useState(!1),[f,x]=g.useState(!1),[y,b]=function(e){void 0===e&&(e=!1);var[n,r]=(0,g.useState)(e);return[n,{on:(0,g.useCallback)((()=>{r(!0)}),[]),off:(0,g.useCallback)((()=>{r(!1)}),[]),toggle:(0,g.useCallback)((()=>{r((e=>!e))}),[])}]}(),_=g.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),z({id:p},e,{ref:d(n,(e=>{e&&x(!0)}))})}),[p]),j=g.useCallback((function(e,n){var r,i;return void 0===e&&(e={}),void 0===n&&(n=null),z({},e,{ref:n,"data-focus":(0,v.PB)(y),"data-disabled":(0,v.PB)(a),"data-invalid":(0,v.PB)(t),"data-readonly":(0,v.PB)(l),id:null!=(r=e.id)?r:c,htmlFor:null!=(i=e.htmlFor)?i:o})}),[o,a,y,t,l,c]),N=g.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),z({id:u},e,{ref:d(n,(e=>{e&&h(!0)})),"aria-live":"polite"})}),[u]),O=g.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),z({},e,i,{ref:n,role:"group"})}),[i]),E=g.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),z({},e,{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]),k=g.useCallback((()=>{(0,q.A4)(b.on)}),[b]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!l,isDisabled:!!a,isFocused:!!y,onFocus:k,onBlur:b.off,hasFeedbackText:m,setHasFeedbackText:h,hasHelpText:f,setHasHelpText:x,id:o,labelId:c,feedbackId:u,helpTextId:p,htmlProps:i,getHelpTextProps:_,getErrorMessageProps:N,getRootProps:O,getLabelProps:j,getRequiredIndicatorProps:E}}var M=(0,p.G)(((e,n)=>{var r=(0,m.j)("Form",e),t=A((0,h.Lr)(e)),{getRootProps:a}=t,l=D(t,["getRootProps","htmlProps"]),i=(0,v.cx)("chakra-form-control",e.className),s=g.useMemo((()=>l),[l]);return g.createElement(B,{value:s},g.createElement(G.Fo,{value:r},g.createElement(f.m$.div,z({},a({},n),{className:i,__css:{width:"100%",position:"relative"}}))))}));o.Ts&&(M.displayName="FormControl");var V=(0,p.G)(((e,n)=>{var r=$(),t=(0,G.yK)(),a=(0,v.cx)("chakra-form__helper-text",e.className);return g.createElement(f.m$.div,z({},null==r?void 0:r.getHelpTextProps(e,n),{__css:t.helperText,className:a}))}));function W(){return(W=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}o.Ts&&(V.displayName="FormHelperText");var X=(0,p.G)(((e,n)=>{var r,t=(0,m.m)("FormLabel",e),a=(0,h.Lr)(e),{children:l,requiredIndicator:i=g.createElement(Q,null)}=a,s=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(a,["className","children","requiredIndicator"]),o=$(),c=null!=(r=null==o?void 0:o.getLabelProps(s,n))?r:W({ref:n},s);return g.createElement(f.m$.label,W({},c,{className:(0,v.cx)("chakra-form__label",a.className),__css:W({display:"block",textAlign:"start"},t)}),l,null!=o&&o.isRequired?i:null)}));o.Ts&&(X.displayName="FormLabel");var Q=(0,p.G)(((e,n)=>{var r=$(),t=(0,G.yK)();if(null==r||!r.isRequired)return null;var a=(0,v.cx)("chakra-form__required-indicator",e.className);return g.createElement(f.m$.span,W({},null==r?void 0:r.getRequiredIndicatorProps(e,n),{__css:t.requiredIndicator,className:a}))}));function Z(){return(Z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function K(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}function U(e){var n=function(e){var n,r,t,a=$(),{id:l,disabled:i,readOnly:s,required:o,isRequired:c,isInvalid:d,isReadOnly:u,isDisabled:p,onFocus:m,onBlur:h}=e,f=K(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),v=[];null!=a&&a.hasFeedbackText&&null!=a&&a.isInvalid&&v.push(a.feedbackId);null!=a&&a.hasHelpText&&v.push(a.helpTextId);return Z({},f,{"aria-describedby":v.join(" ")||void 0,id:null!=l?l:null==a?void 0:a.id,isDisabled:null!=(n=null!=i?i:p)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(r=null!=s?s:u)?r:null==a?void 0:a.isReadOnly,isRequired:null!=(t=null!=o?o:c)?t:null==a?void 0:a.isRequired,isInvalid:null!=d?d:null==a?void 0:a.isInvalid,onFocus:(0,q.v0)(null==a?void 0:a.onFocus,m),onBlur:(0,q.v0)(null==a?void 0:a.onBlur,h)})}(e),{isDisabled:r,isInvalid:t,isReadOnly:a,isRequired:l}=n;return Z({},K(n,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:r,readOnly:a,required:l,"aria-invalid":(0,v.Qm)(t),"aria-required":(0,v.Qm)(l),"aria-readonly":(0,v.Qm)(a)})}function Y(){return(Y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}o.Ts&&(Q.displayName="RequiredIndicator");var J=(0,p.G)(((e,n)=>{var r=(0,m.j)("Input",e),t=U((0,h.Lr)(e)),a=(0,v.cx)("chakra-input",e.className);return g.createElement(f.m$.input,Y({},t,{__css:r.field,ref:n,className:a}))}));function ee(){return(ee=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}o.Ts&&(J.displayName="Input"),J.id="Input";var ne=(0,p.G)(((e,n)=>{var r=(0,m.m)("Heading",e),t=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}((0,h.Lr)(e),["className"]);return g.createElement(f.m$.h2,ee({ref:n,className:(0,v.cx)("chakra-heading",e.className)},t,{__css:r}))}));function re(){return(re=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}o.Ts&&(ne.displayName="Heading");var te=(0,p.G)(((e,n)=>{var r=(0,m.m)("Link",e),t=(0,h.Lr)(e),{className:a,isExternal:l}=t,i=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["className","isExternal"]);return g.createElement(f.m$.a,re({target:l?"_blank":void 0,rel:l?"noopener noreferrer":void 0,ref:n,className:(0,v.cx)("chakra-link",a)},i,{__css:r}))}));function ae(){return(ae=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}o.Ts&&(te.displayName="Link");var le=(0,p.G)(((e,n)=>{var r=(0,m.j)("Input",e),t=(0,h.Lr)(e),{children:a,className:l}=t,i=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["children","className"]),s=(0,v.cx)("chakra-input__group",l),o={},c=function(e){return g.Children.toArray(e).filter((e=>g.isValidElement(e)))}(a),d=r.field;c.forEach((e=>{if(r){var n,t;if(d&&"InputLeftElement"===e.type.id)o.paddingStart=null!=(n=d.height)?n:d.h;if(d&&"InputRightElement"===e.type.id)o.paddingEnd=null!=(t=d.height)?t:d.h;"InputRightAddon"===e.type.id&&(o.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(o.borderStartRadius=0)}}));var u=c.map((n=>{var r,t,a={size:(null==(r=n.props)?void 0:r.size)||e.size,variant:(null==(t=n.props)?void 0:t.variant)||e.variant};return"Input"!==n.type.id?g.cloneElement(n,a):g.cloneElement(n,Object.assign(a,o,n.props))}));return g.createElement(f.m$.div,ae({className:s,ref:n,__css:{width:"100%",display:"flex",position:"relative"}},i),g.createElement(G.Fo,{value:r},u))}));function ie(){return(ie=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function se(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}o.Ts&&(le.displayName="InputGroup");var oe=(0,f.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),ce=(0,p.G)(((e,n)=>{var r,t,{placement:a="left"}=e,l=se(e,["placement"]),i=(0,G.yK)().field,s={["left"===a?"insetStart":"insetEnd"]:"0",width:null!=(r=null==i?void 0:i.height)?r:null==i?void 0:i.h,height:null!=(t=null==i?void 0:i.height)?t:null==i?void 0:i.h,fontSize:null==i?void 0:i.fontSize};return g.createElement(oe,ie({ref:n,__css:s},l))}));ce.id="InputElement",o.Ts&&(ce.displayName="InputElement");var de=(0,p.G)(((e,n)=>{var{className:r}=e,t=se(e,["className"]),a=(0,v.cx)("chakra-input__left-element",r);return g.createElement(ce,ie({ref:n,placement:"left",className:a},t))}));de.id="InputLeftElement",o.Ts&&(de.displayName="InputLeftElement");var ue=(0,p.G)(((e,n)=>{var{className:r}=e,t=se(e,["className"]),a=(0,v.cx)("chakra-input__right-element",r);return g.createElement(ce,ie({ref:n,placement:"right",className:a},t))}));ue.id="InputRightElement",o.Ts&&(ue.displayName="InputRightElement");var pe=r(6759),me=r(5505);function he(){return(he=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function fe(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var ve=(0,p.G)(((e,n)=>{var{children:r,placeholder:t,className:a}=e,l=U(fe(e,["children","placeholder","className"]));return g.createElement(f.m$.select,he({},l,{ref:n,className:(0,v.cx)("chakra-select",a)}),t&&g.createElement("option",{value:""},t),r)}));o.Ts&&(ve.displayName="SelectField");var xe=(0,p.G)(((e,n)=>{var r=(0,m.j)("Select",e),t=(0,h.Lr)(e),{rootProps:a,placeholder:l,icon:i,color:s,height:o,h:c,minH:d,minHeight:u,iconColor:p,iconSize:v}=t,x=fe(t,["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"]),[y,b]=(0,me.Vl)(x,pe.layoutPropNames),_={width:"100%",height:"fit-content",position:"relative",color:s},j=E()({},r.field,{paddingEnd:"2rem",_focus:{zIndex:"unset"}});return g.createElement(f.m$.div,he({className:"chakra-select__wrapper",__css:_},y,a),g.createElement(ve,he({ref:n,height:null!=c?c:o,minH:null!=d?d:u,placeholder:l},b,{__css:j}),e.children),g.createElement(ge,he({"data-disabled":e.isDisabled},(p||s)&&{color:p||s},{__css:r.icon},v&&{fontSize:v}),i))}));o.Ts&&(xe.displayName="Select");var ye=e=>g.createElement("svg",he({viewBox:"0 0 24 24"},e),g.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),be=(0,f.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),ge=e=>{var{children:n=g.createElement(ye,null)}=e,r=fe(e,["children"]),t=g.cloneElement(n,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return g.createElement(be,he({},r,{className:"chakra-select__icon-wrapper"}),g.isValidElement(n)?t:null)};function _e(){var e=(0,g.useState)(!1),n=e[0],r=e[1];return(0,t.jsx)(i.xu,{children:(0,t.jsxs)("div",{className:l().contentGeneral,children:[(0,t.jsx)(s.M,{mb:"10",children:(0,t.jsx)(ne,{as:"h4",size:"lg",isTruncated:!0,children:"Login your account"})}),(0,t.jsxs)(M,{id:"email",mb:"5",children:[(0,t.jsx)(X,{children:"Email address"}),(0,t.jsx)(J,{type:"email"})]}),(0,t.jsxs)(M,{id:"email",children:[(0,t.jsx)(X,{children:"Password"}),(0,t.jsxs)(le,{size:"md",children:[(0,t.jsx)(J,{pr:"4.5rem",type:n?"text":"password",placeholder:"Enter password"}),(0,t.jsx)(ue,{width:"4.5rem",children:(0,t.jsx)(R,{h:"1.75rem",size:"sm",onClick:function(){return r(!n)},children:n?"Hide":"Show"})})]})]}),(0,t.jsx)(i.xu,{mt:"10",children:(0,t.jsx)(R,{isFullWidth:"true",variant:"solid",children:"Login"})})]})})}function je(){var e=(0,g.useState)(!1);e[0],e[1];return(0,t.jsx)(i.xu,{children:(0,t.jsxs)("div",{className:l().contentGeneral,children:[(0,t.jsx)(s.M,{mb:"10",children:(0,t.jsx)(ne,{as:"h4",size:"lg",isTruncated:!0,children:"Create your account"})}),(0,t.jsxs)(M,{id:"email",mb:"4",children:[(0,t.jsx)(X,{children:"Company Name"}),(0,t.jsx)(J,{type:"email"})]}),(0,t.jsxs)(M,{id:"email",mb:"4",children:[(0,t.jsx)(X,{children:"Company Website"}),(0,t.jsx)(J,{type:"email"})]}),(0,t.jsxs)(M,{id:"email",mb:"4",children:[(0,t.jsx)(X,{children:"Company Size"}),(0,t.jsxs)(xe,{placeholder:"Select company size",children:[(0,t.jsx)("option",{value:"1",children:"It's just me"}),(0,t.jsx)("option",{value:"2-10",children:"2 - 10"}),(0,t.jsx)("option",{value:"11-50",children:"11 - 50"}),(0,t.jsx)("option",{value:"51-100",children:"51 - 100"}),(0,t.jsx)("option",{value:"101-250",children:"101 - 250"}),(0,t.jsx)("option",{value:"251-500",children:"251 - 500"}),(0,t.jsx)("option",{value:"501-1000",children:"501 - 1.000"}),(0,t.jsx)("option",{value:"1001-5000",children:"1.001 - 5.000"}),(0,t.jsx)("option",{value:"5000+",children:"5.000"})]})]}),(0,t.jsxs)(M,{id:"email",mb:"4",children:[(0,t.jsx)(X,{children:"Your Role"}),(0,t.jsxs)(xe,{placeholder:"Select your role",children:[(0,t.jsx)("option",{value:"product",children:"Product"}),(0,t.jsx)("option",{value:"marketing",children:"Marketing"}),(0,t.jsx)("option",{value:"software",children:"Software Development/Engineering"}),(0,t.jsx)("option",{value:"ux",children:"UX Design"}),(0,t.jsx)("option",{value:"product-research",children:"Product Researcher"}),(0,t.jsx)("option",{value:"sales",children:"Sales"}),(0,t.jsx)("option",{value:"customer-success",children:"Customer Success"}),(0,t.jsx)("option",{value:"support",children:"Support"}),(0,t.jsx)("option",{value:"data",children:"Data"}),(0,t.jsx)("option",{value:"operations",children:"Operations"})]})]}),(0,t.jsx)(i.xu,{mt:"10",children:(0,t.jsx)(R,{isFullWidth:"true",variant:"solid",children:"Create my Account"})})]})})}function Ne(){var e=(0,g.useState)(!1),n=e[0],r=e[1],a=function(e){r(e)};return(0,t.jsx)("div",{className:l().container,children:(0,t.jsxs)("main",{className:l().main,children:[(0,t.jsx)(s.M,{children:(0,t.jsx)("img",{src:"/logo_grex.png",alt:"Vercel Logo",width:150,height:75})}),n?(0,t.jsx)(_e,{}):(0,t.jsx)(je,{}),(0,t.jsx)(s.M,{children:n?(0,t.jsxs)(i.xu,{mb:"10",className:l().bottomAbsolute,children:["Don't have an account?",(0,t.jsx)(te,{ml:"2",className:l().linkColor,onClick:function(){return a(!1)},children:"Register!"})]}):(0,t.jsxs)(i.xu,{mb:"10",className:l().bottomAbsolute,children:["i have an account",(0,t.jsx)(te,{ml:"2",className:l().linkColor,onClick:function(){return a(!0)},children:"Login!"})]})})]})})}o.Ts&&(ge.displayName="SelectIcon")},8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3867)}])},3679:function(e){e.exports={container:"Home_container__3sao-",center:"Home_center__1ZZjG",main:"Home_main__1Z1aG",linkColor:"Home_linkColor__1MvpD",bottomAbsolute:"Home_bottomAbsolute__3w0HW",footer:"Home_footer__2v49s",title:"Home_title__28pEg",description:"Home_description__3GmI3",code:"Home_code__2X25X",contentGeneral:"Home_contentGeneral__2oyDD",containerNormal:"Home_containerNormal__3n5ei",grid:"Home_grid__QT_Bm",card:"Home_card__PT3hq",logo:"Home_logo__3GqVp",steps:"Home_steps__2iOFL",step:"Home_step__3LZjz","is-complete":"Home_is-complete__31f3x",isActive:"Home_isActive__2c-gX"}}},function(e){e.O(0,[667,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);