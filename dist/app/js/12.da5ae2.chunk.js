(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1691:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(171),cloudinary__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(167),cloudinary__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_2__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_lazy_load__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1693),react_lazy_load__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_lazy_load__WEBPACK_IMPORTED_MODULE_4__),react_image_smooth_loading__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1694),react_image_smooth_loading__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_image_smooth_loading__WEBPACK_IMPORTED_MODULE_5__),material_ui_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(53),material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_6__),material_ui_Grid__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(66),material_ui_Grid__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(material_ui_Grid__WEBPACK_IMPORTED_MODULE_7__),material_ui_Dialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(110),material_ui_Dialog__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_8__),material_ui_Card__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(166),material_ui_Card__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_9__),material_ui_Button__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(172),material_ui_Button__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_10__),material_ui_Paper__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(41),material_ui_Paper__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(material_ui_Paper__WEBPACK_IMPORTED_MODULE_11__),material_ui_Typography__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(52),material_ui_Typography__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_12__),material_ui_icons_GroupWork__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(270),material_ui_icons_GroupWork__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(material_ui_icons_GroupWork__WEBPACK_IMPORTED_MODULE_13__),_assets_locale_en_us__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(1550),_assets_locale_en_us__WEBPACK_IMPORTED_MODULE_14___namespace=Object.assign({},_assets_locale_en_us__WEBPACK_IMPORTED_MODULE_14__,{default:_assets_locale_en_us__WEBPACK_IMPORTED_MODULE_14__}),_redux_actions__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(1587),_extends=Object.assign||function(_){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(_[t]=a[t])}return _},_createClass=function(){function _(_,e){for(var a=0;a<e.length;a++){var t=e[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(_,t.key,t)}}return function(e,a,t){return a&&_(e.prototype,a),t&&_(e,t),e}}(),enterModule;function _classCallCheck(_,e){if(!(_ instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(_,e){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?_:e}function _inherits(_,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);_.prototype=Object.create(e&&e.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(_,e):_.__proto__=e)}enterModule=__webpack_require__(28).enterModule,enterModule&&enterModule(module);var styles={dialog:{zIndex:11111111},paper:{margin:"0 0 20 0",padding:0},image:{maxWidth:"100%"},title:{paddingBottom:10}},Portfolio=function(_Component){function Portfolio(_){_classCallCheck(this,Portfolio);var e=_possibleConstructorReturn(this,(Portfolio.__proto__||Object.getPrototypeOf(Portfolio)).call(this,_));return e.state={index:null},e}return _inherits(Portfolio,_Component),_createClass(Portfolio,[{key:"render",value:function(){var _,e=this,a=_extends({},this.props.c,this.props.classes),t=this.state;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Grid__WEBPACK_IMPORTED_MODULE_7___default.a,{container:!0,className:a.container,spacing:0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Grid__WEBPACK_IMPORTED_MODULE_7___default.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,{variant:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_icons_GroupWork__WEBPACK_IMPORTED_MODULE_13___default.a,{className:a.iconLarge})," Portfolio")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Grid__WEBPACK_IMPORTED_MODULE_7___default.a,{item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Grid__WEBPACK_IMPORTED_MODULE_7___default.a,{container:!0,spacing:24},_assets_locale_en_us__WEBPACK_IMPORTED_MODULE_14__.portfolio.map(function(_,t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Grid__WEBPACK_IMPORTED_MODULE_7___default.a,{key:t,item:!0,xs:12,sm:6},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_9___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_4___default.a,{className:a.lazyLoad,height:200},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:a.imgPlaceholder,src:cloudinary__WEBPACK_IMPORTED_MODULE_2___default.a.url("portfolio/"+_.image+".jpg",{height:200,quality:"auto:good",crop:"scale"}),title:_.name,alt:_.name})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_9__.CardContent,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,{variant:"title"},_.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,{variant:"body1",noWrap:!0},_.summary)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_9__.CardActions,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Button__WEBPACK_IMPORTED_MODULE_10___default.a,{size:"small",color:"primary",onClick:function(){return e.setState({index:t})}},"Learn More"),null!=_.website&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Button__WEBPACK_IMPORTED_MODULE_10___default.a,{target:"_new",href:_.website,color:"primary"},"Website"))))})))),null!=t.index&&(_=_assets_locale_en_us__WEBPACK_IMPORTED_MODULE_14__.portfolio[t.index],react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_8___default.a,{className:a.dialog,open:null!=t.index,onClose:function(){return e.setState({index:null})},"aria-labelledby":_.name,"aria-describedby":_.summary},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_8__.DialogContent,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_8__.DialogContentText,{id:_.summary},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Paper__WEBPACK_IMPORTED_MODULE_11___default.a,{className:a.paper,elevation:4},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:a.image,src:cloudinary__WEBPACK_IMPORTED_MODULE_2___default.a.url("portfolio/"+_.image+".jpg"),alt:_.name})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,{className:a.title,variant:"title"},_.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Typography__WEBPACK_IMPORTED_MODULE_12___default.a,{variant:"body1"},_.content))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Dialog__WEBPACK_IMPORTED_MODULE_8__.DialogActions,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Button__WEBPACK_IMPORTED_MODULE_10___default.a,{onClick:function(){return e.setState({index:null})},color:"primary"},"Close")))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Portfolio}(react__WEBPACK_IMPORTED_MODULE_0__.Component);Portfolio.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,c:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object},Portfolio.defaultProps={classes:{},c:{}};var _default=Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_6__.withStyles)(styles)(Portfolio),reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=__webpack_require__(28).default,leaveModule=__webpack_require__(28).leaveModule,reactHotLoader&&(reactHotLoader.register(styles,"styles","/Users/natthanhamilton/natthan-io/src/app/views/partials/Portfolio.jsx"),reactHotLoader.register(Portfolio,"Portfolio","/Users/natthanhamilton/natthan-io/src/app/views/partials/Portfolio.jsx"),reactHotLoader.register(_default,"default","/Users/natthanhamilton/natthan-io/src/app/views/partials/Portfolio.jsx"),leaveModule(module))}.call(this,__webpack_require__(51)(module))}}]);
//# sourceMappingURL=12.da5ae2.bundle.map