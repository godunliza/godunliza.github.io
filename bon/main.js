/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./scss/style_1024.scss */ \"./src/scss/style_1024.scss\");\n\nvar _getData = __webpack_require__(/*! ./js/getData */ \"./src/js/getData.js\");\n\nvar _getData2 = _interopRequireDefault(_getData);\n\nvar _filterData = __webpack_require__(/*! ./js/filterData.js */ \"./src/js/filterData.js\");\n\nvar _filterData2 = _interopRequireDefault(_filterData);\n\nvar _cleanFilter = __webpack_require__(/*! ./js/cleanFilter.js */ \"./src/js/cleanFilter.js\");\n\nvar _cleanFilter2 = _interopRequireDefault(_cleanFilter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import 'reset-css';\n//import './scss/style_320.scss';\nvar selectVal;\n\nif (document.location.href == 'http://bonusplus/') {\n  /* var  header_menu_list=document.querySelector(\".header_menu_list\");\r\n         header_menu_list.mousedown=function(event){\r\n       console.log(\"Click\",event.target);\r\n       sessionStorage.setItem('key',event.target);\r\n   }*/\n  var headerFind = document.querySelector(\".header_find\");\n\n  headerFind.onclick = function () {\n    var headerOb = document.querySelector('.header_ob');\n    var headerFindForm = document.querySelector('.header_find-form');\n    headerOb.classList.add('header_hide');\n    headerFindForm.classList.remove('header_hide');\n  };\n\n  var foundClose = document.querySelector(\".header_find-form_inp_close\");\n\n  foundClose.onclick = function () {\n    var headerOb = document.querySelector('.header_ob');\n    var headerFindForm = document.querySelector('.header_find-form');\n    var foundWrite = document.querySelector(\".header_find-form_inp_write\");\n    headerFindForm.classList.add('header_hide');\n    headerOb.classList.remove('header_hide');\n    foundWrite.value = \"\";\n    (0, _cleanFilter2.default)('#slayderpart');\n    (0, _cleanFilter2.default)('#slaydercoup');\n    (0, _cleanFilter2.default)('#slayderbon');\n  };\n\n  (0, _getData2.default)(\"bonus.json\", '#slayderbon', '#item');\n  (0, _getData2.default)(\"coupon.json\", \"#slaydercoup\", '#item');\n  (0, _getData2.default)(\"partners.json\", \"#slayderpart\", '#itempart');\n  var foundWrite = document.querySelector(\".header_find-form_inp_write\");\n\n  foundWrite.onkeyup = function () {\n    var foundWrite = document.querySelector(\".header_find-form_inp_write\");\n    (0, _filterData2.default)(foundWrite);\n  };\n\n  var selected = document.querySelector('.header_find-form_select_opt');\n\n  selected.onchange = function () {\n    var selected = document.querySelector('.header_find-form_select_opt');\n    selectVal = selected.value;\n    (0, _filterData2.default)(foundWrite); //window.location.href = selectVal+'#' + selected.name;\n  };\n} else {\n  //var data = sessionStorage.getItem('key');\n  //console.log(\"Blabla\",data);\n  //var text = window.location.hash.substring(1);\n  //console.log(\"SELECTVAL\",text);\n  var page = document.location.href;\n\n  switch (page) {\n    case 'http://bonusplus/allbonus.html':\n      {\n        console.log(\"Zachlo\");\n        /*var selected=document.querySelector('.header_find-form_select_opt_bon');\r\n        selected.setAttribute('selected','selected');*/\n\n        (0, _getData2.default)(\"bonus.json\", '#template_load', '#item');\n      }\n\n    case 'http://bonusplus/allcoupon.html':\n      {\n        (0, _getData2.default)(\"coupon.json\", '#template_load', '#item');\n      }\n\n    case 'http://bonusplus/allpartners.html':\n      {\n        (0, _getData2.default)(\"partners.json\", '#template_load', '#itempart');\n      }\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/cleanFilter.js":
/*!*******************************!*\
  !*** ./src/js/cleanFilter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = cleanFilter;\n\nvar _slayderOn = __webpack_require__(/*! ./slayderOn.js */ \"./src/js/slayderOn.js\");\n\nvar _slayderOn2 = _interopRequireDefault(_slayderOn);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction cleanFilter(idDest) {\n  var slayder = document.querySelector(idDest);\n  $(idDest).slick('unslick');\n  var filtered = slayder.getElementsByClassName('hide');\n  console.log(\"cleanFilter!\", filtered);\n\n  for (var i = 0; i < filtered.length; i++) {\n    filtered[0].style = \"display:block\";\n  }\n\n  (0, _slayderOn2.default)(idDest);\n}\n\n//# sourceURL=webpack:///./src/js/cleanFilter.js?");

/***/ }),

/***/ "./src/js/fillTemplate.js":
/*!********************************!*\
  !*** ./src/js/fillTemplate.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = fillTemplate;\n\nfunction fillTemplate(resp, template) {\n  var MAX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;\n  var idDest = arguments[3];\n  var regExp = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : /\\w+/gmi;\n\n  /*\r\n  Функция принимает:\r\n  resp-ответ сервера;\r\n  tepmlate-массив node-элементов шаблона();\r\n  MAX-максимальное количество выводимых элементов\r\n  idDest-id куда будут помещены данные шаблона\r\n  */\n  var fragment = document.createDocumentFragment(); //fragment\n\n  var clone;\n  resp.slice(0, MAX).forEach(function (element, index) {\n    if (template.length <= 6) {\n      template[1].src = element.urlicon;\n      template[2].innerText = element.category;\n      template[3].innerText = element.name;\n      template[4].innerText = element.addr;\n      template[5].innerHTML = element.phone;\n      clone = document.importNode(template[0].content, true);\n      fragment.appendChild(clone);\n    } else {\n      template[1].src = element.urlicon;\n      template[2].innerText = element.category;\n      template[3].innerText = element.name;\n      template[4].innerText = element.addr;\n      template[5].innerHTML = element.bonusnow;\n      template[6].innerHTML = element.bonuslast;\n      template[7].src = element.urlpic;\n      template[8].innerHTML = \"Осталось\" + element.daylast;\n      template[9].innerHTML = 'Действует:' + element.timestart + '-' + element.timeend;\n      template[10].innerHTML = 'Участников: ' + element.members;\n      clone = document.importNode(template[0].content, true);\n      fragment.appendChild(clone);\n    }\n  });\n  var items = document.querySelector(idDest); //destination\n\n  console.log(\"idDest\", idDest);\n  items.appendChild(fragment);\n}\n/* где  template[0]-нода шаблона\r\n         template[1]-нода для вставки иконки\r\n         template[2]-нода для вставки категории\r\n         template[3]-нода для вставки заголовка\r\n         template[4]-нода для вставки адреса\r\n         template[5]-нода для вставки телефона\r\n    \r\n     */\n\n//# sourceURL=webpack:///./src/js/fillTemplate.js?");

/***/ }),

/***/ "./src/js/filterData.js":
/*!******************************!*\
  !*** ./src/js/filterData.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = filterData;\n\nvar _foundData = __webpack_require__(/*! ./foundData.js */ \"./src/js/foundData.js\");\n\nvar _foundData2 = _interopRequireDefault(_foundData);\n\nvar _cleanFilter = __webpack_require__(/*! ./cleanFilter.js */ \"./src/js/cleanFilter.js\");\n\nvar _cleanFilter2 = _interopRequireDefault(_cleanFilter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction filterData(foundWrite) {\n  var selected = document.querySelector('.header_find-form_select_opt');\n  var selectVal = selected.value;\n  var val = 0;\n  console.log(\"Filter selected\", foundWrite.value, selectVal);\n\n  if (foundWrite.value) {\n    console.log(\"Filter selected\", selectVal);\n    val = new RegExp(foundWrite.value, 'gmi');\n\n    switch (selectVal) {\n      case 'Всё':\n        {\n          console.log(\"selectedVal Все\", selectVal);\n          (0, _foundData2.default)(\"bonus.json\", '#slayderbon', val);\n          (0, _foundData2.default)(\"coupon.json\", '#slaydercoup', val);\n          (0, _foundData2.default)(\"partners.json\", '#slayderpart', val);\n          break;\n        }\n\n      case 'Акции':\n        {\n          console.log(\"selectedValАкции\", selectVal);\n          (0, _foundData2.default)(\"bonus.json\", '#slayderbon', val);\n          break;\n        }\n\n      case 'Партнеры':\n        {\n          console.log(\"selectedValПартнеры\", selectVal);\n          (0, _foundData2.default)(\"partners.json\", '#slayderpart', val);\n          break;\n        }\n\n      case 'Купоны':\n        {\n          console.log(\"selectedValКупоны\", selectVal);\n          (0, _foundData2.default)(\"coupon.json\", '#slaydercoup', val);\n          break;\n        }\n    }\n  } else {\n    if (event.keyCode > 57 || event.keyCode == 16) ;\n    {\n      (0, _cleanFilter2.default)('#slayderpart');\n      (0, _cleanFilter2.default)('#slaydercoup');\n      (0, _cleanFilter2.default)('#slayderbon'); //slayderbon\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/js/filterData.js?");

/***/ }),

/***/ "./src/js/foundData.js":
/*!*****************************!*\
  !*** ./src/js/foundData.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = foundData;\n\nvar _cleanFilter = __webpack_require__(/*! ./cleanFilter.js */ \"./src/js/cleanFilter.js\");\n\nvar _cleanFilter2 = _interopRequireDefault(_cleanFilter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction foundData(filejson, idDest, regExp) {\n  var card = document.querySelector(idDest);\n  var cardName = card.querySelectorAll('.card_item_desc_zag');\n\n  if (regExp) {\n    for (var i = 0; i < cardName.length; i++) {\n      var found = cardName[i].innerHTML.search(regExp);\n      console.log(\"Found\", found);\n\n      if (filejson == 'partners.json') {\n        var elHide = cardName[i].parentElement.parentElement;\n      } else {\n        var elHide = cardName[i].parentElement.parentElement;\n      }\n\n      if (found == -1) {\n        elHide.style.display = \"none \";\n        elHide.classList.add(\"hide\");\n      }\n    }\n  } else {\n    (0, _cleanFilter2.default)(idDest);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/foundData.js?");

/***/ }),

/***/ "./src/js/getData.js":
/*!***************************!*\
  !*** ./src/js/getData.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = getData;\n\nvar _fillTemplate = __webpack_require__(/*! ./fillTemplate.js */ \"./src/js/fillTemplate.js\");\n\nvar _fillTemplate2 = _interopRequireDefault(_fillTemplate);\n\nvar _takeTemplate = __webpack_require__(/*! ./takeTemplate.js */ \"./src/js/takeTemplate.js\");\n\nvar _takeTemplate2 = _interopRequireDefault(_takeTemplate);\n\nvar _slayderOn = __webpack_require__(/*! ./slayderOn.js */ \"./src/js/slayderOn.js\");\n\nvar _slayderOn2 = _interopRequireDefault(_slayderOn);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction getData(filejson, idDest, idTemp, regExp) {\n  /*Функция принимает :filejson-название файла json ж\r\n                        idDest-id куда будут помещены данные шаблона\r\n                        idTemp-id шаблона\r\n  \r\n  \r\n  */\n  console.log(\"getData\");\n  var xhr = new XMLHttpRequest();\n  var resp,\n      template = [];\n  xhr.open('GET', '../json/' + filejson, true);\n  xhr.responseType = \"json\";\n\n  xhr.onload = function () {\n    resp = xhr.response;\n    template = (0, _takeTemplate2.default)(filejson, idTemp);\n    (0, _fillTemplate2.default)(resp, template, 20, idDest);\n    console.log(\"Response\");\n\n    if (document.location.href == 'http://bonusplus/') {\n      (0, _slayderOn2.default)(idDest);\n    }\n  };\n\n  xhr.send();\n}\n\n//# sourceURL=webpack:///./src/js/getData.js?");

/***/ }),

/***/ "./src/js/slayderOn.js":
/*!*****************************!*\
  !*** ./src/js/slayderOn.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = slayderOn;\n\nfunction slayderOn(idDest) {\n  switch (true) {\n    case screen.width < 768:\n      {\n        $(\".footer_cards\").addClass(\"header_hide\");\n        $(idDest).slick({});\n        break;\n      }\n\n    case screen.width >= 768 && screen.width < 1024:\n      {\n        $(\".footer_links\").addClass(\"header_hide\");\n        $(idDest).slick({\n          slidesToShow: 2,\n          slidesToScroll: 2,\n          variableWidth: true\n        });\n        break;\n      }\n\n    case screen.width >= 1024 && screen.width < 1280:\n      {\n        $(\".footer_links\").addClass(\"header_hide\");\n        $(idDest).slick({\n          slidesToShow: 3,\n          slidesToScroll: 3,\n          variableWidth: true\n        });\n        break;\n      }\n\n    case screen.width >= 1280:\n      {\n        $(\".footer_links\").addClass(\"header_hide\");\n        $(idDest).slick({\n          slidesToShow: 4,\n          slidesToScroll: 4,\n          variableWidth: true\n        });\n        break;\n      }\n\n    default:\n      {\n        console.log(\"Mistake\");\n      }\n  }\n}\n\n//# sourceURL=webpack:///./src/js/slayderOn.js?");

/***/ }),

/***/ "./src/js/takeTemplate.js":
/*!********************************!*\
  !*** ./src/js/takeTemplate.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = takeTemplate;\n\nfunction takeTemplate(filejson, idTemp) {\n  var templ = [];\n  /*\r\n  Функция принимает :\r\n                      filejson-имя файла json\r\n                      idTemp-id шаблона \r\n  \r\n  Возвращает :        массив templ содержащий элементы для заполнения шаблона*/\n\n  if (filejson == 'partners.json') {\n    /*Шаблон для партнеров */\n    var item = document.querySelector(idTemp); //template\n\n    var urlIcon = item.content.querySelector(\".card_item_desc_pic_bonus_icon\");\n    var categ = item.content.querySelector(\".card_item_desc_categ\");\n    var descZag = item.content.querySelector(\".card_item_desc_zag\");\n    var addr = item.content.querySelector(\".card_item_desc_addr\");\n    var tel = item.content.querySelector(\".card_item_desc_tel\");\n    templ.push(item);\n    templ.push(urlIcon);\n    templ.push(categ);\n    templ.push(descZag);\n    templ.push(addr);\n    templ.push(tel);\n  } else {\n    //Шаблон для акций и бонусов\n    var item = document.querySelector(idTemp); //template\n\n    var urlIcon = item.content.querySelector(\".card_item_pic_bonus_icon\");\n    var categ = item.content.querySelector(\".card_item_desc_categ\");\n    var descZag = item.content.querySelector(\".card_item_desc_zag\");\n    var addr = item.content.querySelector(\".card_item_desc_addr\");\n    var h6 = item.content.querySelector('h6');\n    var lastBonus = item.content.querySelector(\".card_item_pic_last_bonus\");\n    var urlImage = item.content.querySelector(\".card_pic\");\n    var timeost = item.content.querySelector(\".card_item_pic_time_text\");\n    var time = item.content.querySelector(\".card_item_desc_time\");\n    var buyers = item.content.querySelector(\".card_item_desc_bottom_buyers\");\n    templ.push(item);\n    templ.push(urlIcon);\n    templ.push(categ);\n    templ.push(descZag);\n    templ.push(addr);\n    templ.push(h6);\n    templ.push(lastBonus);\n    templ.push(urlImage);\n    templ.push(timeost);\n    templ.push(time);\n    templ.push(buyers);\n  }\n\n  return templ;\n}\n\n//# sourceURL=webpack:///./src/js/takeTemplate.js?");

/***/ }),

/***/ "./src/scss/style_1024.scss":
/*!**********************************!*\
  !*** ./src/scss/style_1024.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/style_1024.scss?");

/***/ })

/******/ });