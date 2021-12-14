(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{31:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(12),s=a.n(c),o=(a(31),a(26)),i=a(8),l=a.n(i),u=a(16),m=a(13),g=a(4),h=a(5),p=a(7),b=a(6),j=a(9),f=(a(33),a(2)),d=a.n(f),v=(a(36),a(1)),O=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imgName:""},e.imgToSearch=function(t){e.setState({imgName:t})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.imgName)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.imgToSearch,t=this.onFormSubmit,a=this.state;return Object(v.jsx)("header",{className:"searchbar",children:Object(v.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(v.jsxs)("button",{type:"submit",className:"SearchForm-button",children:["\ud83d\udd0d",Object(v.jsx)("span",{className:"SearchForm-button-label",children:"Search"})]}),Object(v.jsx)("input",{onChange:function(t){return e(t.target.value)},value:a.imgName,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component);O.propsTypes={onSubmit:d.a.func};var x=O,y=(a(38),function(e){var t=e.children;return Object(v.jsx)("ul",{className:"ImageGallery",children:t})}),S=a(15),I=a.n(S),k="24484342-5d490b786e593542a839fc86b";I.a.defaults.baseURL="https://pixabay.com/api/";var w=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,r,n,c,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:1,r=new URLSearchParams({key:k,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12,page:a}),e.prev=2,e.next=5,I.a.get("?"+r.toString());case 5:return n=e.sent,c=n.data,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),C=w,N=(a(57),function(e){var t=e.image,a=e.onClick;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("li",{className:"ImageGalleryItem",onClick:a,children:Object(v.jsx)("img",{className:"ImageGalleryItem-image",src:t.webformatURL,alt:t.tags,"data-large":t.largeImageURL})},t.id)})}),F=(a(58),function(e){var t=e.onClickBtn;return Object(v.jsx)("div",{className:"coverBtn",children:Object(v.jsx)("button",{onClick:function(){return t()},className:"btn",type:"button",children:"Load more"})})}),A=(a(59),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).pressEsc=function(t){"Escape"===t.code&&e.props.onClose()},e.onBackDropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.pressEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.pressEsc)}},{key:"render",value:function(){var e=this.props,t=e.largeImg,a=e.alt;return Object(v.jsx)("div",{className:"overlay",onClick:this.onBackDropClick,children:Object(v.jsx)("div",{className:"modal",children:Object(v.jsx)("img",{src:t,alt:a})})})}}]),a}(a(0).Component)),B=A,E=(a(60),a(25)),L=a.n(E),D={position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},T=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={page:1,imgsArray:[],searchImg:"",loader:!1,largeImg:"",altImage:""},e.fetchNextPageImg=function(){e.setState((function(e){return{page:e.page+1}}))},e.getSearchImg=Object(m.a)(l.a.mark((function t(){var a,r,n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,r=a.searchImg,n=a.page,e.setState({loader:!0}),t.prev=2,t.next=5,C(r,n);case 5:if((c=t.sent).totalHits){t.next=8;break}return t.abrupt("return",j.b.error("Please write valid value"));case 8:return e.setState((function(e){return{imgsArray:[].concat(Object(u.a)(e.imgsArray),Object(u.a)(c.hits))}})),e.state.imgsArray.length&&1===e.state.page&&j.b.success("We found ".concat(c.totalHits," images")),t.abrupt("return",c.hits);case 13:t.prev=13,t.t0=t.catch(2),j.b.error("".concat(t.t0.message));case 16:return t.prev=16,e.setState({loader:!1}),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[2,13,16,19]])}))),e.onSearchSubmit=function(t){e.setState({searchImg:t,imgsArray:[],page:1})},e.onCloseModal=function(){e.setState({largeImg:"",altImage:""})},e.onClickImage=function(t){if(t.currentTarget!==t.target){var a=t.target.dataset.large,r=t.target.alt;e.setState({largeImg:a,altImage:r})}},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,r=a.searchImg,n=a.page;t.searchImg===r&&t.page===n||this.getSearchImg()}},{key:"render",value:function(){var e=this.onSearchSubmit,t=this.fetchNextPageImg,a=this.onClickImage,r=this.state,n=r.imgsArray,c=r.loader,s=r.largeImg,i=r.altImage;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x,{onSubmit:e}),Object(v.jsxs)("main",{children:[c&&Object(v.jsx)(L.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,style:Object(o.a)({},D),timeout:1e3}),Object(v.jsx)(y,{children:n.map((function(e){return Object(v.jsx)(N,{image:e,onClick:a})}))}),n.length>11&&Object(v.jsx)(F,{onClickBtn:t}),Object(v.jsx)(j.a,{})]}),s&&Object(v.jsx)(B,{onClose:this.onCloseModal,largeImg:s,alt:i})]})}}]),a}(r.Component),U=T;s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.24a387c9.chunk.js.map