/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var dateUtil = __webpack_require__(2);
	var List = __webpack_require__(3);
	var Detail = __webpack_require__(4);

	// console.log($)

	// console.log(List(222));
	// console.log(Detail);
	// var detailinfo = new Detail();
	// console.log(detailinfo);

	// console.log('main js');
	// console.log(dateUtil.getDate());
	$.post(
		"/api/skill",{},function(text){
			
			var html='<ul>';
			for(var i=0;i<text.length;i++){
				html+='<li>'+text[i].name+"</li>";
			}
			html+='</ul>';
			$('#list').html(html);
		
	})
	alert(1)

/***/ },
/* 2 */
/***/ function(module, exports) {

	var DateUtil = {
		getDate:function(){
			return new Date().toLocaleDateString();
		}
	}

	module.exports = DateUtil;        //允许外部调用

	console.log("DateUtil is required");


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var date = __webpack_require__(2);

	function say(msg){
		console.log(date.getDate());
		return "say list " + msg;
	}

	module.exports = say;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var date = __webpack_require__(2);

	function Detail() {}

	Detail.prototype = {
		constructor:Detail,
		say:function(msg){
			console.log(date.getDate());
			return "show detail " + msg;
		}
	}

	module.exports = Detail;


/***/ }
/******/ ]);