/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _PageOne_PageOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageOne/PageOne */ "./src/PageOne/PageOne.js");
/* harmony import */ var _PageVideoCurse_PageVideoCouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageVideoCurse/PageVideoCouse */ "./src/PageVideoCurse/PageVideoCouse.js");
/* harmony import */ var _PagePrice_PagePrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PagePrice/PagePrice */ "./src/PagePrice/PagePrice.js");
/* harmony import */ var _PageContacts_PageContacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageContacts/PageContacts */ "./src/PageContacts/PageContacts.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Layout/Layout */ "./src/components/Layout/Layout.js");
/* harmony import */ var _preloader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preloader/Loader */ "./src/preloader/Loader.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








 // const route = createBrowserRouter( createRoutesFromElements(
// <Route path="/" element={<Layout/>}>
//     <Route index element={<PageOne/>} />
//     <Route path="/online" element = {<PageVideoCouse/>}/>
//     <Route path="/services" element = {<PagePrice/>}/>
//     <Route path="/contacts" element = {<PageContacts/>}/>
// </Route>
// ))

var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
    }, 3000);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_preloader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageOne_PageOne__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/online",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageVideoCurse_PageVideoCouse__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/services",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PagePrice_PagePrice__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/contacts",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageContacts_PageContacts__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/PageContacts/Contacts/Contacts.js":
/*!***********************************************!*\
  !*** ./src/PageContacts/Contacts/Contacts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Text/Title/Title */ "./src/components/Text/Title/Title.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _contacts_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.scss */ "./src/PageContacts/Contacts/contacts.scss");






var Contacts = function Contacts() {
  var animate = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: function visible(custom) {
      return {
        y: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.1
        }
      };
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "contacts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {
    custom: 1,
    variants: animate,
    className: "contacts__img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    custom: 2,
    variants: animate,
    className: "contacts__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "contacts__title",
    footer: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    custom: 2,
    variants: animate,
    className: "contacts__tell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "contacts__tell--namb",
    href: "tel: +380500869337"
  }, "+38(050)-086-93-37")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    custom: 3,
    variants: animate,
    className: "contacts__icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://t.me/Bogdanrehab",
    target: "_blank",
    className: "contacts__icons--telega"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.facebook.com/Bogdan.rehab",
    target: "_blank",
    className: "contacts__icons--facebook"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "viber://add?number=380500869337",
    target: "_blank",
    className: "contacts__icons--viber"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/channel/UCwmnffKo-6yY4u5SaXMB5eA",
    target: "_blank",
    className: "contacts__icons--youtube"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.instagram.com/bogdan.rehab/",
    target: "_blank",
    className: "contacts__icons--instagram"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.a, {
    custom: 4,
    variants: animate,
    href: "https://form.jotform.com/242576521556057",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], null, "\u0417\u0430\u043F\u043E\u0432\u043D\u0438\u0442\u0438 \u0430\u043D\u043A\u0435\u0442\u0443")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contacts);

/***/ }),

/***/ "./src/PageContacts/PageContacts.js":
/*!******************************************!*\
  !*** ./src/PageContacts/PageContacts.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contacts_Contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contacts/Contacts */ "./src/PageContacts/Contacts/Contacts.js");



var PageContacts = function PageContacts() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contacts_Contacts__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContacts);

/***/ }),

/***/ "./src/PageOne/About/About.js":
/*!************************************!*\
  !*** ./src/PageOne/About/About.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var _components_Text_SubTitle_SubTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Text/SubTitle/SubTitle */ "./src/components/Text/SubTitle/SubTitle.js");
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.scss */ "./src/PageOne/About/about.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");





var animate = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    y: 10,
    transition: {
      type: 'scale',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }
};

var About = function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    variants: animate,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    className: "about__title"
  }, "\u041F\u0440\u043E \u0441\u0435\u0431\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    className: "about__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    className: "about__left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    className: "about__subtitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text_SubTitle_SubTitle__WEBPACK_IMPORTED_MODULE_2__["default"], null, "\u0414\u0438\u043F\u043B\u043E\u043C\u043E\u0432\u0430\u043D\u0438\u0439 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u043E\u043B\u043E\u0433 \u0437\u0456 \u0441\u0442\u0430\u0436\u0435\u043C \u0431\u0456\u043B\u044C\u0448\u0435 10 \u0440\u043E\u043A\u0456\u0432. \u0421\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u0443\u044E\u0441\u044F \u0432 \u043B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u043C\u0430\u0441\u0430\u0436\u0456 \u0432\u0456\u0434 \u0433\u0440\u0443\u0434\u043D\u043E\u0433\u043E \u0432\u0456\u043A\u0443 \u0434\u043E \u043B\u0456\u0442\u043D\u044C\u043E\u0433\u043E, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0443 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u0457 \u043F\u0456\u0441\u043B\u044F \u0456\u043D\u0441\u0443\u043B\u044C\u0442\u0443, \u043F\u0435\u0440\u0435\u043B\u043E\u043C\u0443 \u0445\u0440\u0435\u0431\u0442\u0430, \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0438\u0445 \u0442\u0440\u0430\u0432\u043C \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0437\u0430\u0445\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u044C \u043E\u043F\u043E\u0440\u043D\u043E-\u0440\u0443\u0445\u043E\u0432\u043E\u0433\u043E \u0430\u043F\u0430\u0440\u0430\u0442\u0443 (\u041E\u0420\u0410). \u0417\u0430 \u0440\u043E\u043A\u0438 \u0440\u043E\u0431\u043E\u0442\u0438 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u043E\u043B\u043E\u0433\u043E\u043C, \u043D\u0430\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0432 \u0432\u0435\u043B\u0438\u0447\u0435\u0437\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u041E\u0420\u0410, \u0442\u0430 \u043F\u043E\u0431\u0443\u0434\u0443\u0432\u0430\u0432 \u0432\u043B\u0430\u0441\u043D\u0443 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0443 \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0437 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0438\u043C \u043F\u0456\u0434\u0445\u043E\u0434\u043E\u043C, \u0449\u043E \u0441\u043F\u0440\u0438\u044F\u0454 \u0448\u0432\u0438\u0434\u043A\u043E\u043C\u0443 \u043E\u0434\u0443\u0436\u0430\u043D\u043D\u044E.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    className: "about__btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://form.jotform.com/242576521556057",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], null, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044C")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {
    custom: 1,
    variants: animate,
    className: "about__img"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/PageOne/FirstVisit/FirstVisit.js":
/*!**********************************************!*\
  !*** ./src/PageOne/FirstVisit/FirstVisit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firstVisit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstVisit.scss */ "./src/PageOne/FirstVisit/firstVisit.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _img_stepOne_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/stepOne.png */ "./src/img/stepOne.png");
/* harmony import */ var _img_stepTwo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/stepTwo.png */ "./src/img/stepTwo.png");
/* harmony import */ var _img_stepThree_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/stepThree.png */ "./src/img/stepThree.png");
/* harmony import */ var _img_stepFour_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/stepFour.png */ "./src/img/stepFour.png");







var firstVisitArray = [{
  image: _img_stepOne_png__WEBPACK_IMPORTED_MODULE_2__,
  name: 'Опитування',
  description: 'Виявлення скарг та історії хвороби (анамнез), вивчення досліджень (МРТ, КТ, рентген, аналізи, тощо).'
}, {
  image: _img_stepTwo_png__WEBPACK_IMPORTED_MODULE_3__,
  name: 'Загальний огляд',
  description: "\u041E\u0446\u0456\u043D\u043A\u0430 \u0441\u0442\u0430\u043D\u0443 \u043E\u043F\u043E\u0440\u043D\u043E-\u0440\u0443\u0445\u043E\u0432\u043E\u0433\u043E \u0430\u043F\u0430\u0440\u0430\u0442\u0443, \u043F\u043E\u0441\u0442\u0430\u0432\u0438, \u0445\u0440\u0435\u0431\u0442\u0430, \u0441\u0443\u0433\u043B\u043E\u0431\u0456\u0432 \u0442\u0430 \u043E\u0433\u043B\u044F\u0434 \u043C\u0456\u0441\u0446\u044F\n        \u0431\u043E\u043B\u044E/\u0441\u043A\u0430\u0440\u0433, \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F,  \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u0447\u0438\u043D\u0438 \u0431\u043E\u043B\u044E."
}, {
  image: _img_stepThree_png__WEBPACK_IMPORTED_MODULE_4__,
  name: 'Лікування',
  description: 'Підбирається індивідуально на основі діагностики'
}, {
  image: _img_stepFour_png__WEBPACK_IMPORTED_MODULE_5__,
  name: 'Рекомендації',
  description: "\u041E\u0431\u0433\u043E\u0432\u043E\u0440\u044E\u0454\u043C\u043E \u043F\u043E\u0434\u0430\u043B\u044C\u0448\u0443 \u0442\u0430\u043A\u0442\u0438\u043A\u0443 \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F. \u0421\u0442\u0432\u043E\u0440\u044E\u044E,\n        \u043F\u0440\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0456, \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u0457 \u0432 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043A\u0443, \u0434\u0430\u044E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u0457 \u0449\u043E\u0434\u043E\n        \u0437\u0430\u043F\u043E\u0431\u0456\u0433\u0430\u043D\u043D\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u0438\u0445 \u0437\u0430\u0433\u043E\u0441\u0442\u0440\u0435\u043D\u044C \u0442\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E\u0433\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443."
}];
var animate = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    y: 10,
    transition: {
      type: 'scale',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }
};

var FirstVisit = function FirstVisit() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "firstVisit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
    variants: animate,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "firstVisit__title"
  }, "\u042F\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u043F\u0435\u0440\u0448\u0430 \u0437\u0443\u0441\u0442\u0440\u0456\u0447"), firstVisitArray.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
      variants: animate,
      initial: "hidden",
      whileInView: "show",
      viewport: {
        amout: 0.1,
        once: true
      },
      className: "firstVisit__row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: "firstVisit__image",
      src: item.image
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "firstVisit__info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "firstVisit__name"
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "firstVisit__description"
    }, item.description)));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirstVisit);

/***/ }),

/***/ "./src/PageOne/Header/Header.js":
/*!**************************************!*\
  !*** ./src/PageOne/Header/Header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.scss */ "./src/PageOne/Header/header.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");





var animate = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: function visible(custom) {
    return {
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.5
      }
    };
  }
};

var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    className: "header__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    custom: 1,
    variants: animate,
    className: "header__text"
  }, "\u0412\u0430\u0448\u0430 \u0434\u043E\u0440\u043E\u0433\u0430 \u0434\u043E \u0437\u0434\u043E\u0440\u043E\u0432\u043E\u0433\u043E \u0442\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0436\u0438\u0442\u0442\u044F \u043F\u043E\u0447\u0438\u043D\u0430\u0454\u0442\u044C\u0441\u044F \u0442\u0443\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    custom: 1,
    variants: animate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/contacts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], null, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044C")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/PageOne/Methods/Methods.js":
/*!****************************************!*\
  !*** ./src/PageOne/Methods/Methods.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MethodItem_MethodItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MethodItem/MethodItem */ "./src/components/MethodItem/MethodItem.js");
/* harmony import */ var _methods_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods.scss */ "./src/PageOne/Methods/methods.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _img_massage_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/massage.png */ "./src/img/massage.png");
/* harmony import */ var _img_rehab_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/rehab.png */ "./src/img/rehab.png");
/* harmony import */ var _img_manual_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/manual.png */ "./src/img/manual.png");
/* harmony import */ var _img_kinezio_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/kinezio.png */ "./src/img/kinezio.png");
/* harmony import */ var _img_pirm_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/pirm.png */ "./src/img/pirm.png");
/* harmony import */ var _img_osteo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/osteo.png */ "./src/img/osteo.png");
/* harmony import */ var _img_pnf_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/pnf.png */ "./src/img/pnf.png");
/* harmony import */ var _img_malligan_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/malligan.png */ "./src/img/malligan.png");
/* harmony import */ var _img_kineziotape_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/kineziotape.png */ "./src/img/kineziotape.png");
/* harmony import */ var _img_yumeiho_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/yumeiho.png */ "./src/img/yumeiho.png");














var methods = [{
  name: 'Масаж',
  icon: _img_massage_png__WEBPACK_IMPORTED_MODULE_3__
}, {
  name: 'Реабілітація',
  icon: _img_rehab_png__WEBPACK_IMPORTED_MODULE_4__
}, {
  name: 'Мануальна терапія',
  icon: _img_manual_png__WEBPACK_IMPORTED_MODULE_5__
}, {
  name: 'Прикладна кінезіологія',
  icon: _img_kinezio_png__WEBPACK_IMPORTED_MODULE_6__
}, {
  name: 'ПІРМ (постізометрична релаксація мʼязів)',
  icon: _img_pirm_png__WEBPACK_IMPORTED_MODULE_7__
}, {
  name: 'Елементи остеопатії',
  icon: _img_osteo_png__WEBPACK_IMPORTED_MODULE_8__
}, {
  name: 'PNF (пропріоцептивна нейромʼязова фасілітація)',
  icon: _img_pnf_png__WEBPACK_IMPORTED_MODULE_9__
}, {
  name: 'Концепція Малліган',
  icon: _img_malligan_png__WEBPACK_IMPORTED_MODULE_10__
}, {
  name: 'Кінезіотейпування',
  icon: _img_kineziotape_png__WEBPACK_IMPORTED_MODULE_11__
}, {
  name: 'Юмейхо терапія',
  icon: _img_yumeiho_png__WEBPACK_IMPORTED_MODULE_12__
}];
var navVariants1 = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    y: 10,
    transition: {
      type: 'scale',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }
};
var animate = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: function visible(custom) {
    return {
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1
      }
    };
  }
};

var Methods = function Methods() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "methods"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {
    variants: navVariants1,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "methods__title"
  }, "\u041C\u0435\u0442\u043E\u0434\u0438, \u044F\u043A\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E \u0432 \u0440\u043E\u0431\u043E\u0442\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "methods__list"
  }, methods.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {
      variants: animate,
      initial: "hidden",
      whileInView: "visible",
      viewport: {
        amout: 0.1,
        once: true
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MethodItem_MethodItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: item.name,
      icon: item.icon
    }));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Methods);

/***/ }),

/***/ "./src/PageOne/PageOne.js":
/*!********************************!*\
  !*** ./src/PageOne/PageOne.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About/About */ "./src/PageOne/About/About.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/Header */ "./src/PageOne/Header/Header.js");
/* harmony import */ var _Services_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/Services */ "./src/PageOne/Services/Services.js");
/* harmony import */ var _Methods_Methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Methods/Methods */ "./src/PageOne/Methods/Methods.js");
/* harmony import */ var _FirstVisit_FirstVisit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FirstVisit/FirstVisit */ "./src/PageOne/FirstVisit/FirstVisit.js");
/* harmony import */ var _WhyMe_WhyMe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WhyMe/WhyMe */ "./src/PageOne/WhyMe/WhyMe.js");
/* harmony import */ var _SliderFeedback_SliderFeedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SliderFeedback/SliderFeedback */ "./src/PageOne/SliderFeedback/SliderFeedback.js");
/* harmony import */ var _Promo_Promo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Promo/Promo */ "./src/PageOne/Promo/Promo.js");










var PageOne = function PageOne() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_About_About__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Services_Services__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Methods_Methods__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FirstVisit_FirstVisit__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_WhyMe_WhyMe__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SliderFeedback_SliderFeedback__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Promo_Promo__WEBPACK_IMPORTED_MODULE_8__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageOne);

/***/ }),

/***/ "./src/PageOne/Promo/Promo.js":
/*!************************************!*\
  !*** ./src/PageOne/Promo/Promo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var _promo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promo.scss */ "./src/PageOne/Promo/promo.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");





var animate = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    y: 10,
    transition: {
      type: 'scale',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }
};

var Promo = function Promo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "promo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    variants: animate,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "promo__text"
  }, "\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0437\u0434\u043E\u0440\u043E\u0432'\u044F - \u0446\u0435 \u043D\u0430\u0448 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0443\u0441\u043F\u0456\u0445."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    variants: animate,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/contacts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], null, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044C"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promo);

/***/ }),

/***/ "./src/PageOne/Services/Services.js":
/*!******************************************!*\
  !*** ./src/PageOne/Services/Services.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.scss */ "./src/PageOne/Services/services.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");



var navVariants1 = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    y: 10,
    transition: {
      type: 'scale',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }
};
var navVariants2 = {
  hidden: {
    scroll: 0,
    opacity: 0,
    y: 50,
    transition: {
      type: 'scroll',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    scroll: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }
};
var navVariants3 = {
  hidden: {
    scroll: 0,
    opacity: 0,
    y: 50,
    transition: {
      type: 'scroll',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    scroll: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }
};

var Services = function Services() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    variants: navVariants1,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "services__title"
  }, "\u0417\u0430\u0439\u043C\u0430\u044E\u0441\u044F \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F\u043C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    variants: navVariants2,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "services__children"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services__childrenTitle"
  }, "\u0414\u0456\u0442\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services__childrenList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0434\u0438\u0441\u043F\u043B\u0430\u0437\u0456\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u043A\u0440\u0438\u0432\u043E\u0448\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0437\u0430\u0442\u0440\u0438\u043C\u043A\u0430 \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u0433\u043E \u0440\u043E\u0437\u0432\u0438\u0442\u043A\u0443"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0433\u0456\u043F\u0435\u0440\u0442\u043E\u043D\u0443\u0441"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0441\u043A\u043E\u043B\u0456\u043E\u0437"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0432\u0430\u043B\u044C\u0433\u0443\u0441 \u0441\u0442\u043E\u043F")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    variants: navVariants3,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "services__adult"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services__adultTitle"
  }, "\u0414\u043E\u0440\u043E\u0441\u043B\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services__adultList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0433\u0440\u0438\u0436\u0456, \u043F\u0440\u043E\u0442\u0440\u0443\u0437\u0456\u0457"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0431\u0456\u043B\u044C \u0432 \u043C\u02BC\u044F\u0437\u0430\u0445"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0431\u0456\u043B\u044C \u0432 \u0441\u043F\u0438\u043D\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0431\u0456\u043B\u044C \u0432 \u043A\u0456\u043D\u0446\u0456\u0432\u043A\u0430\u0445"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0456 \u0442\u0440\u0430\u0432\u043C\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u043F\u0435\u0440\u0435\u043B\u043E\u043C\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457"))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

/***/ }),

/***/ "./src/PageOne/SliderFeedback/SliderFeedback.js":
/*!******************************************************!*\
  !*** ./src/PageOne/SliderFeedback/SliderFeedback.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider.scss */ "./src/PageOne/SliderFeedback/slider.scss");
/* harmony import */ var _img_feedback1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/feedback1.png */ "./src/img/feedback1.png");
/* harmony import */ var _img_feedback2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/feedback2.png */ "./src/img/feedback2.png");
/* harmony import */ var _img_feedback3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/feedback3.png */ "./src/img/feedback3.png");
/* harmony import */ var _img_feedback4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/feedback4.png */ "./src/img/feedback4.png");
/* harmony import */ var _img_feedback5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/feedback5.png */ "./src/img/feedback5.png");
/* harmony import */ var _img_feedback6_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/feedback6.png */ "./src/img/feedback6.png");
/* harmony import */ var _img_feedback7_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/feedback7.png */ "./src/img/feedback7.png");
/* harmony import */ var _img_feedback8_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/feedback8.png */ "./src/img/feedback8.png");
/* harmony import */ var _img_feedback9_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/feedback9.png */ "./src/img/feedback9.png");
/* harmony import */ var _img_feedback10_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/feedback10.png */ "./src/img/feedback10.png");
/* harmony import */ var _img_feedback11_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/feedback11.png */ "./src/img/feedback11.png");
/* harmony import */ var _img_feedback12_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../img/feedback12.png */ "./src/img/feedback12.png");
/* harmony import */ var _img_feedback13_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../img/feedback13.png */ "./src/img/feedback13.png");
/* harmony import */ var _img_feedback14_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../img/feedback14.png */ "./src/img/feedback14.png");




 // images















var feedbackArray = [_img_feedback1_png__WEBPACK_IMPORTED_MODULE_5__, _img_feedback2_png__WEBPACK_IMPORTED_MODULE_6__, _img_feedback3_png__WEBPACK_IMPORTED_MODULE_7__, _img_feedback4_png__WEBPACK_IMPORTED_MODULE_8__, _img_feedback5_png__WEBPACK_IMPORTED_MODULE_9__, _img_feedback6_png__WEBPACK_IMPORTED_MODULE_10__, _img_feedback7_png__WEBPACK_IMPORTED_MODULE_11__, _img_feedback8_png__WEBPACK_IMPORTED_MODULE_12__, _img_feedback9_png__WEBPACK_IMPORTED_MODULE_13__, _img_feedback10_png__WEBPACK_IMPORTED_MODULE_14__, _img_feedback11_png__WEBPACK_IMPORTED_MODULE_15__, _img_feedback12_png__WEBPACK_IMPORTED_MODULE_16__, _img_feedback13_png__WEBPACK_IMPORTED_MODULE_17__, _img_feedback14_png__WEBPACK_IMPORTED_MODULE_18__];
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1800,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 540,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
};

var SliderFeedback = function SliderFeedback() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "feedback"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "feedback__title"
  }, "\u0412\u0456\u0434\u0433\u0443\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_slick__WEBPACK_IMPORTED_MODULE_1__["default"], settings, feedbackArray.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "feedback__item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: item,
      alt: "feedback image"
    }));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderFeedback);

/***/ }),

/***/ "./src/PageOne/WhyMe/WhyMe.js":
/*!************************************!*\
  !*** ./src/PageOne/WhyMe/WhyMe.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _whyMe_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whyMe.scss */ "./src/PageOne/WhyMe/whyMe.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var _img_individual_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/individual.png */ "./src/img/individual.png");
/* harmony import */ var _img_experience_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/experience.png */ "./src/img/experience.png");
/* harmony import */ var _img_complex_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/complex.png */ "./src/img/complex.png");
/* harmony import */ var _img_result_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/result.png */ "./src/img/result.png");









var whyMeArray = [{
  image: _img_individual_png__WEBPACK_IMPORTED_MODULE_3__,
  name: 'Індивідуальний підхід',
  descriprion: "\u041A\u043E\u0436\u0435\u043D \u043F\u0430\u0446\u0456\u0454\u043D\u0442 - \u0446\u0435 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0430 \u0456\u0441\u0442\u043E\u0440\u0456\u044F, \u0456 \u044F \u0437\u0430\u0432\u0436\u0434\u0438 \u043F\u0440\u0430\u0446\u044E\u044E\n        \u0437 \u043A\u043E\u0436\u043D\u0438\u043C \u0456\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u043E, \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u044F\u044E\u0447\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F, \u044F\u043A\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0432\u0430\u0448\u0438\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u0430\u043C."
}, {
  image: _img_experience_png__WEBPACK_IMPORTED_MODULE_4__,
  name: 'Досвід і професіоналізм',
  descriprion: "\u041C\u0430\u044E \u0431\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0443 \u0441\u0444\u0435\u0440\u0456 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u0457 \u0442\u0430 \u0441\u0442\u0435\u0436\u0443 \u0437\u0430\n        \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u043C\u0438 \u0434\u043E\u0441\u044F\u0433\u043D\u0435\u043D\u043D\u044F\u043C\u0438 \u0432 \u0433\u0430\u043B\u0443\u0437\u0456. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0431\u0443\u0442\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456 \u0432 \u044F\u043A\u0456\u0441\u043D\u043E\u043C\u0443 \u043C\u0435\u0434\u0438\u0447\u043D\u043E\u043C\u0443 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u0456."
}, {
  image: _img_complex_png__WEBPACK_IMPORTED_MODULE_5__,
  name: 'Комплексний піхід',
  descriprion: "\u041C\u043E\u044F \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0430 \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0454\u0434\u043D\u0443\u0454 \u0444\u0456\u0437\u0438\u0447\u043D\u0456 \u0432\u043F\u0440\u0430\u0432\u0438, \u043C\u0430\u0441\u0430\u0436,\n        \u0442\u0430 \u0456\u043D\u0448\u0456 \u043C\u0435\u0442\u043E\u0434\u0438 \u0437 \u043C\u0435\u0442\u043E\u044E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456."
}, {
  image: _img_result_png__WEBPACK_IMPORTED_MODULE_6__,
  name: 'Результати',
  descriprion: "\u041C\u043E\u0457 \u043F\u0430\u0446\u0456\u0454\u043D\u0442\u0438 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C \u0432\u0438\u0434\u0438\u043C\u0438\u0445 \u0442\u0430 \u0441\u0442\u0456\u0439\u043A\u0438\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u0443\n        \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0456 \u0440\u0443\u0445\u043B\u0438\u0432\u043E\u0441\u0442\u0456 \u0442\u0430 \u044F\u043A\u043E\u0441\u0442\u0456 \u0436\u0438\u0442\u0442\u044F. \u0412\u0430\u0448\u0435 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F - \u0446\u0435 \u043C\u043E\u044F \u0433\u043E\u043B\u043E\u0432\u043D\u0430 \u043C\u0435\u0442\u0430."
}];
var animate = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    y: 10,
    transition: {
      type: 'scale',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }
};

var WhyMe = function WhyMe() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "whyMe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
    variants: animate,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "whyMe__title"
  }, "\u0427\u043E\u043C\u0443 \u0432\u0430\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0441\u0430\u043C\u0435 \u0434\u043E \u043C\u0435\u043D\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "whyMe__reasons"
  }, whyMeArray.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
      variants: animate,
      initial: "hidden",
      whileInView: "show",
      viewport: {
        amout: 0.1,
        once: true
      },
      className: "whyMe__item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: "whyMe__image",
      src: item.image,
      alt: item.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "whyMe__name"
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "whyMe__description"
    }, item.descriprion));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
    variants: animate,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "whyMe__promo"
  }, "\u042F\u043A\u0449\u043E \u0442\u0438 \u0448\u0443\u043A\u0430\u0454\u0448 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u043A\u0432\u0430\u043B\u0456\u0444\u0456\u043A\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u043E\u043B\u043E\u0433\u0430"), ", \u0442\u043E\u0434\u0456 \u0432\u0436\u0435 \u0437\u0430\u0440\u0430\u0437 \u0437\u0430\u043F\u0438\u0441\u0443\u0439\u0441\u044F \u043D\u0430 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
    variants: animate,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "whyMe__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "/contacts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], null, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044C"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhyMe);

/***/ }),

/***/ "./src/PagePrice/Header/HeaderPrice.js":
/*!*********************************************!*\
  !*** ./src/PagePrice/Header/HeaderPrice.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Text/Title/Title */ "./src/components/Text/Title/Title.js");
/* harmony import */ var _header_price_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-price.scss */ "./src/PagePrice/Header/header-price.scss");




var HeaderPrice = function HeaderPrice() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "header-price__img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "header-price__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    price: "\u043F\u043E\u0441\u043B\u0443\u0433\u0438"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderPrice);

/***/ }),

/***/ "./src/PagePrice/PagePrice.js":
/*!************************************!*\
  !*** ./src/PagePrice/PagePrice.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_HeaderPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/HeaderPrice */ "./src/PagePrice/Header/HeaderPrice.js");
/* harmony import */ var _Price_Price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Price/Price */ "./src/PagePrice/Price/Price.js");




function PagePrice() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_HeaderPrice__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Price_Price__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagePrice);

/***/ }),

/***/ "./src/PagePrice/Price/Accordion.js":
/*!******************************************!*\
  !*** ./src/PagePrice/Price/Accordion.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.scss */ "./src/PagePrice/Price/accordion.scss");
/* harmony import */ var _components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Text/Title/Title */ "./src/components/Text/Title/Title.js");
/* harmony import */ var _components_Text_SubTitle_SubTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Text/SubTitle/SubTitle */ "./src/components/Text/SubTitle/SubTitle.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Accordion = function Accordion(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "accordion ".concat(active ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "accordion__title",
    onClick: function onClick() {
      return setActive(!active);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_2__.Title, null, props.btn), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "accordion__icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiChevronDown, {
    className: "bx bxs-chevron-down"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "accordion__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text_SubTitle_SubTitle__WEBPACK_IMPORTED_MODULE_3__["default"], null, props.text)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

/***/ }),

/***/ "./src/PagePrice/Price/Price.js":
/*!**************************************!*\
  !*** ./src/PagePrice/Price/Price.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var _components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Text/Title/Title */ "./src/components/Text/Title/Title.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _price_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./price.scss */ "./src/PagePrice/Price/price.scss");
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Accordion */ "./src/PagePrice/Price/Accordion.js");






var animate = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: function visible(custom) {
    return {
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1
      }
    };
  }
};
var price = [// {
//     id: 1,
//     title:'Реабілітація з виїздом на дом',
//     price:'від 900 грн/60-70 хв.',
//     btn:'Записатись',
//     detal: 'Детальніше',
//     trg: 'На першому сеансі спочатку роблю первинний огляд і збір анамнезу. Після чого проводиться перше заняття. В залежності від проблематики, я використовую різні методики як масажу і маніпуляцій, так і вправ, тобто індивідуальний і комплексний підхід. Після першого сеансу визначається тактика та можливі варіанти реабілітації. Також даю рекомендації для подальшої підтримки здоровʼя.'
// },
{
  id: 2,
  title: 'Онлайн консультація + програма реабілітації',
  price: '1000 грн/60 хв.',
  btn: 'Записатись',
  detal: 'Детальніше',
  trg: 'Якщо маєш проблеми зі спиною та суглобами і немає можливості або часу звертатись до кваліфікованого реабілітолога за лікуванням офлайн, та їздити регулярно на реабілітацію, то онлайн консультація - найкраща альтернатива. Цей варіант підходить для тих хто цінує свій час, адже Вам не знадобиться їхати кудись і тратити багато часу на це.👍 Отримайте всі відповіді на питання просто не виходячи з дому і проходьте реабілітацію в любий зручний час для Вас😀 У вартість консультації входить: 1.Збір історії хвороби. 2.Тестування мʼязів та суглобів. 3.Консультація ( уточнюючі запитання, додаткові тести ) 4.Тестові вправи на поточні фізичні можливості та техніку. 5.Підбір програми лікувальних вправ. 6.Ретест попереднього результату. 7. Відповіді на питання та обговорення стратегії лікування Після консультації даю рекомендації та створюю індивідуальну програму з вправами і самомасажем у відеоматеріалі на 2 тижні. І протягом цих 2 тижнів підтримуємо звʼязок та аналізуємо результати.'
} // {
//     id: 3,
//     title:'Побудова програми реабілітації',
//     price:'500 грн',
//     btn:'Записатись',
//     detal: 'Детальніше',
//     trg: 'Реабілітація вдома онлайн має багато переваг. По-перше, це зручніше для пацієнта, оскільки йому не потрібно їздити на прийом і назад. По-друге, це доступніше, ніж традиційні послуги амбулаторної реабілітації. По-третє, це дозволяє пацієнту отримувати терапію в приватному житті власного дому, або з любої точки світу. Нарешті, це може забезпечити більш гнучкий графік для пацієнта.'
// },
// {
//     id: 4,
//     title:'Перший сеанс',
//     price:'500 грн/45 хв.',
//     btn:'Записатись',
//     detal: 'Детальніше',
//     trg: 'Маєте дискомфорт або біль, але не знаєте на яку послугу записатись? Вибирай цю послугу. На сеансі я проводжу огляд та збираю всю історію хвороби, тестую та проводжу лікувальні заходи. Оцінюю оптимальну тактику лікування та даю рекомендації.'
// },
// {
//     id: 5,
//     title:'Дитячий масаж',
//     price:'450 грн/30 хв.',
//     btn:'Записатись',
//     detal: 'Детальніше',
//     trg: 'Дитячий масаж дуже корисний дітям дошкільного та шкільного віку, які мають певні проблеми з поставою. Масаж можна виконувати як в лікуванні так і в профілактиці захворювань опорно-рухового апарату.'
// },
// {
//     id: 6,
//     title:'Масаж + гімнастика 0-1 року',
//     price:'450 грн/30 хв.',
//     btn:'Записатись',
//     detal: 'Детальніше',
//     trg: 'Масаж та гімнастика в грудному віці сприяє нормальному фізичному розвитку дитини. Також такі сеанси призначаються при різних проблемах опорно-рухового апарату та патологіях (дисплазія, кривошия, гіпертонус, відставання в розвитку тощо). На сеансі Ви отримаєте також рекомендації як займатись з дитиною вдома для більшого результату від курсу.'
// },
// {
//     id: 7,
//     title:'Лікувальний масаж 30 хв',
//     price:'500 грн/30 хв.',
//     btn:'Записатись',
//     detal: 'Детальніше',
//     trg: "Лікувальний масаж - це не ліки, а гостра необхідність для кожного, хто піклується про своє здоров'я.  Процедури виконуються у різний спосіб, які вибираються виходячи з потреб пацієнта.  Сеанс лікувального масажу може виконуватися як самостійна форма терапії, і як додаткова процедура, що використовується при комплексному лікуванні."
// },
// {
//     id: 8,
//     title:'Лікувальний масаж 60 хв',
//     price:'900 грн/60 хв.',
//     btn:'Записатись',
//     detal: 'Детальніше',
//     trg: "Лікувальний масаж - це не ліки, а гостра необхідність для кожного, хто піклується про своє здоров'я.  Процедури виконуються у різний спосіб, які вибираються виходячи з потреб пацієнта.  Сеанс лікувального масажу може виконуватися як самостійна форма терапії, і як додаткова процедура, що використовується при комплексному лікуванні."
// },
// {
//     id: 9,
//     title:'Реабілітація',
//     price:'900 грн/60 хв.',
//     btn:'Записатись',
//     detal: 'Детальніше',
//     trg: "Реабілітація - це комплекс лікувальних та профілактичних заходів, який спрямований на максимально можливе відновлення втрачених здібностей пацієнта після різних захворювань.На першому сеансі спочатку роблю первинний огляд і збір анамнезу. Після чого проводиться перше заняття. В залежності від проблематики, я використовую різні методики як масажу і маніпуляцій, так і вправ, тобто індивідуальний і комплексний підхід. Після першого сеансу визначається тактика та можливі варіанти реабілітації. Також даю рекомендації для подальшої підтримки здоровʼя."
// },
];

var Price = function Price() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.ul, {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      amout: 0.1,
      once: true
    }
  }, price.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
      custom: item.id,
      variants: animate,
      key: item.id,
      className: "price__li"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "price__title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_2__["default"], null, item.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "price__subtitle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_2__["default"], null, item.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "price__btn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://www.bogdan-rehab.com.ua/#/contacts"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], null, item.btn))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Accordion__WEBPACK_IMPORTED_MODULE_4__["default"], {
      btn: item.detal,
      text: item.trg
    })));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);

/***/ }),

/***/ "./src/PageVideoCurse/Form/KOOSForm.js":
/*!*********************************************!*\
  !*** ./src/PageVideoCurse/Form/KOOSForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KOOSForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KOOSForm.scss */ "./src/PageVideoCurse/Form/KOOSForm.scss");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // Стилі форми

var KOOSForm = function KOOSForm() {
  var koosQuestions = [{
    category: "Біль",
    questions: ["Чи відчували ви біль у коліні при підйомі або спуску по сходах?", "Чи відчували ви біль у коліні при ходьбі по рівній поверхні?", "Чи відчували ви біль у коліні при вставанні з положення сидячи?", "Чи відчували ви біль у коліні вночі під час сну?", "Чи відчували ви біль у коліні при стоянні впродовж 30 хвилин?", "Чи відчували ви біль у коліні після фізичних навантажень?"]
  }, {
    category: "Симптоми",
    questions: ["Чи відчували ви скутість (жорсткість) у коліні після пробудження вранці?", "Чи відчували ви скутість у коліні після тривалого сидіння чи відпочинку?", "Чи було у вас припухання в коліні?", "Чи хрумтів або клацав ваш колінний суглоб при русі?", "Чи відчували ви нестабільність (підкошування) коліна?"]
  }, {
    category: "Функція, повсякденна активність",
    questions: ["Чи відчували ви труднощі при спуску по сходах?", "Чи відчували ви труднощі при підйомі по сходах?", "Чи відчували ви труднощі при вставанні з положення сидячи?", "Чи відчували ви труднощі при стоянні?", "Чи відчували ви труднощі при підйомі з ліжка?", "Чи відчували ви труднощі при вході та виході з автомобіля?", "Чи відчували ви труднощі при покупках (наприклад, носінні сумок)?", "Чи відчували ви труднощі при ходьбі по рівній поверхні?", "Чи відчували ви труднощі при митті підлоги або пилососінні?"]
  }, {
    category: "Спортивна активність",
    questions: ["Чи відчували ви труднощі при бігу?", "Чи відчували ви труднощі при стрибках?", "Чи відчували ви труднощі при присіданнях?", "Чи відчували ви труднощі при коліноприклонному положенні?"]
  }, {
    category: "Якість життя",
    questions: ["Чи усвідомлюєте ви наявність проблем із коліном у повсякденному житті?", "Чи змушені ви адаптувати свій спосіб життя через коліно?", "Наскільки часто ви відчуваєте проблеми з коліном?", "Чи можете ви повністю довіряти своєму коліну?"]
  }]; // Загальна кількість питань

  var totalQuestions = koosQuestions.reduce(function (acc, category) {
    return acc + category.questions.length;
  }, 0);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Array(totalQuestions).fill(0)),
      _useState2 = _slicedToArray(_useState, 2),
      answers = _useState2[0],
      setAnswers = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      activeCategory = _useState4[0],
      setActiveCategory = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      result = _useState6[0],
      setResult = _useState6[1]; // Функція для обробки змін у відповідях


  var handleChange = function handleChange(index, value) {
    var newAnswers = _toConsumableArray(answers);

    newAnswers[index] = parseInt(value);
    setAnswers(newAnswers);
  }; // Функція для підрахунку результату


  var calculateResult = function calculateResult() {
    var totalScore = answers.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    setResult(totalScore);
  }; // Функція для відкриття блоку з питаннями


  var toggleCategory = function toggleCategory(index) {
    setActiveCategory(activeCategory === index ? null : index);
  }; // Функція для отримання індексу питання в масиві answers


  var getQuestionIndex = function getQuestionIndex(catIndex, qIndex) {
    var index = 0;

    for (var i = 0; i < catIndex; i++) {
      index += koosQuestions[i].questions.length;
    }

    return index + qIndex;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "koos-form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "koos-title"
  }, "\u041E\u0446\u0456\u043D\u043A\u0430 \u0442\u0440\u0430\u0432\u043C\u0438 \u043A\u043E\u043B\u0456\u043D\u0430 \u0442\u0430 \u043E\u0441\u0442\u0435\u043E\u0430\u0440\u0442\u0440\u0438\u0442\u0443 KOOS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "koos-sutitle"
  }, "\u0406\u041D\u0421\u0422\u0420\u0423\u041A\u0426\u0406\u0407. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043E\u043F\u0438\u0442\u0443\u0432\u0430\u043D\u043D\u0456 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u043D\u0430\u0434\u0430\u0442\u0438 \u0432\u0430\u0448\u0435 \u0431\u0430\u0447\u0435\u043D\u043D\u044F \u0449\u043E\u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u043B\u0456\u043D\u0430. \u0426\u0435 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435 \u0432\u0430\u043C \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438 \u0441\u0442\u0435\u043F\u0456\u043D\u044C \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u043A\u043E\u043B\u0456\u043D\u0430. \u0414\u0430\u0439\u0442\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u043D\u0430 \u043A\u043E\u0436\u043D\u0435 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u0432\u0456\u0434\u0437\u043D\u0430\u0447\u0438\u0432\u0448\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0443 \u043A\u043B\u0456\u0442\u0438\u043D\u043A\u0443, \u043B\u0438\u0448\u0435 \u043E\u0434\u043D\u0443 \u043A\u043B\u0456\u0442\u0438\u043D\u043A\u0443 \u0434\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F. \u042F\u043A\u0449\u043E \u0432\u0438 \u043D\u0435 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u044F\u043A \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438 \u043D\u0430 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u043D\u0430\u0434\u0430\u0439\u0442\u0435 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C, \u044F\u043A\u0443 \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435."), koosQuestions.map(function (category, catIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: catIndex,
      className: "koos-category"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "koos-category-btn",
      onClick: function onClick() {
        return toggleCategory(catIndex);
      }
    }, category.category), activeCategory === catIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "koos-questions"
    }, category.questions.map(function (question, qIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "koos-question",
        key: qIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        onChange: function onChange(e) {
          return handleChange(getQuestionIndex(catIndex, qIndex), e.target.value);
        },
        value: answers[getQuestionIndex(catIndex, qIndex)]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "0"
      }, "0 - \u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u043E\u0431\u043B\u0435\u043C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "1"
      }, "1 - \u041B\u0435\u0433\u043A\u0456 \u0442\u0440\u0443\u0434\u043D\u043E\u0449\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "2"
      }, "2 - \u041F\u043E\u043C\u0456\u0440\u043D\u0456 \u0442\u0440\u0443\u0434\u043D\u043E\u0449\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "3"
      }, "3 - \u0417\u043D\u0430\u0447\u043D\u0456 \u0442\u0440\u0443\u0434\u043D\u043E\u0449\u0456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "4"
      }, "4 - \u0414\u0443\u0436\u0435 \u0432\u0430\u0436\u043A\u043E")));
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "koos-submit-btn",
    onClick: calculateResult
  }, "\u041F\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"), result !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "koos-result"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ", result), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, result <= 80 ? "Ваше коліно функціонує добре! Можливо, є незначний дискомфорт, але серйозних обмежень немає. Для профілактики варто підтримувати фізичну активність." : result <= 60 ? "Є помірні проблеми з коліном. Ви можете відчувати біль або скутість у певних ситуаціях. Рекомендується програма реабілітації для зміцнення суглоба." : result <= 40 ? "Ви маєте суттєві обмеження у функції коліна. Це впливає на повсякденне життя та активність. Вам варто пройти курс реабілітації, щоб відновити рухливість і зменшити біль." : "Ваш стан потребує уваги! Значні труднощі з рухом та болем можуть вказувати на серйозне порушення. Вам рекомендовано пройти спеціалізовану програму відновлення або звернутися до спеціаліста."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "\u042F\u043A\u0438\u0439 \u0435\u0442\u0430\u043F \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u0457 \u0432\u0430\u043C \u043F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, result <= 80 ? "Вам підходить заключний етап реабілітації, спрямований на зміцнення та повернення до активного способу життя. Цей етап включає інтенсивні вправи на витривалість, координацію та вибухову силу." : result <= 60 ? "Вам підходить функціональний етап реабілітації, що включає вправи для підвищення сили м’язів, стабільності суглоба та поступової підготовки до активних навантажень." : result <= 40 ? "Вам підходить середній етап реабілітації, який допоможе зменшити біль, покращити контроль м’язів і відновити рухливість. Включає вправи на баланс, стабільність і помірні силові навантаження." : "Вам підходить початковий етап реабілітації, який допоможе зменшити біль, зняти запалення та відновити базову рухливість. Основний акцент на м’які мобілізаційні та ізометричні вправи."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "tg://resolve?domain=Bogdan_rehab_bot",
    className: "koos-course-btn"
  }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u043A\u0443\u0440\u0441\u0443")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KOOSForm);

/***/ }),

/***/ "./src/PageVideoCurse/Header/HeaderExer.js":
/*!*************************************************!*\
  !*** ./src/PageVideoCurse/Header/HeaderExer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Text/Title/Title */ "./src/components/Text/Title/Title.js");
/* harmony import */ var _header_exer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-exer.scss */ "./src/PageVideoCurse/Header/header-exer.scss");




var HeaderExer = function HeaderExer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-exer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "header-exer__img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "header-exer__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], null, "\u0420\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044F \u0432\u0434\u043E\u043C\u0430")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderExer);

/***/ }),

/***/ "./src/PageVideoCurse/PageVideoCouse.js":
/*!**********************************************!*\
  !*** ./src/PageVideoCurse/PageVideoCouse.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_HeaderExer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/HeaderExer */ "./src/PageVideoCurse/Header/HeaderExer.js");
/* harmony import */ var _VideoSlider_PlayList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoSlider/PlayList */ "./src/PageVideoCurse/VideoSlider/PlayList.js");
/* harmony import */ var _Form_KOOSForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form/KOOSForm */ "./src/PageVideoCurse/Form/KOOSForm.js");





var PageVideoCouse = function PageVideoCouse() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_HeaderExer__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form_KOOSForm__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VideoSlider_PlayList__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageVideoCouse);

/***/ }),

/***/ "./src/PageVideoCurse/VideoSlider/PlayList.js":
/*!****************************************************!*\
  !*** ./src/PageVideoCurse/VideoSlider/PlayList.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _videoplayer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoplayer.scss */ "./src/PageVideoCurse/VideoSlider/videoplayer.scss");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/YouTube.mjs");
/* harmony import */ var _components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Text/Title/Title */ "./src/components/Text/Title/Title.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");





var animate = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: function visible(custom) {
    return {
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1
      }
    };
  }
};
var opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    autoplay: 0,
    loop: 0,
    controls: 1,
    hl: 'uk',
    ListType: 'playlist',
    list: 'PLXJwr7tq-Wx98D_AyER5hZl9m_FXFx-_b'
  }
};

var PlayList = function PlayList() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "video"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    custom: 1,
    variants: animate,
    className: "video-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_2__["default"], null, "\u0412\u043F\u0440\u0430\u0432\u0438 \u043D\u0430 \u043A\u043E\u0440\u0435\u043A\u0446\u0456\u044E \u0441\u043A\u043E\u043B\u0456\u043E\u0442\u0438\u0447\u043D\u043E\u0457 \u043F\u043E\u0441\u0442\u0430\u0432\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    custom: 2,
    variants: animate,
    className: "video-container-styles"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_youtube__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: 'video-styles',
    opts: opts
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    custom: 3,
    variants: animate,
    className: "video-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Text_Title_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    exercis: "\u0414\u043B\u044F \u0434\u043E\u043D\u0430\u0442\u0456\u0432:"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    custom: 4,
    variants: animate,
    className: "video-donate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://send.monobank.ua/jar/2fDaWaSzTd",
    target: "_blank",
    className: "video-donate__mono"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.privat24.ua/rd/transfer_to_card/?hash=rd%2Ftransfer_to_card%2F%7B%22from%22%3A%22%22%2C%22to%22%3A%225168752080776746%22%2C%22amt%22%3A%220%22%2C%22ccy%22%3A%22UAH%22%7D",
    target: "_blank",
    className: "video-donate__privat"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayList);

/***/ }),

/***/ "./src/components/Button/Button.js":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.scss */ "./src/components/Button/button.scss");



var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "button"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text/Title/Title */ "./src/components/Text/Title/Title.js");
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/tb */ "./node_modules/react-icons/tb/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.scss */ "./src/components/Footer/footer.scss");










var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "footer__title"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer__tell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "footer__tell--namb",
    href: "tel: +380500869337"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsTelephoneForwardFill, {
    className: "phone__icon"
  }), "+38(050)-086-93-37")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer__icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://t.me/Bogdanrehab",
    target: "_blank",
    className: "footer__icons--telega"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbBrandTelegram, {
    className: "react-icons"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.facebook.com/Bogdan.rehab",
    target: "_blank",
    className: "footer__icons--facebook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiFacebook, {
    className: "react-icons"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "viber://add?number=380500869337",
    target: "_blank",
    className: "footer__icons--viber"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaViber, {
    className: "react-icons"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/channel/UCwmnffKo-6yY4u5SaXMB5eA",
    target: "_blank",
    className: "footer__icons--facebook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiYoutube, {
    className: "react-icons"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.instagram.com/bogdan.rehab/",
    target: "_blank",
    className: "footer__icons--facebook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiInstagram, {
    className: "react-icons"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/Navbar */ "./src/components/Navbar/Navbar.js");





var Layout = function Layout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/MethodItem/MethodItem.js":
/*!*************************************************!*\
  !*** ./src/components/MethodItem/MethodItem.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _methodItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methodItem.scss */ "./src/components/MethodItem/methodItem.scss");



var MethodItem = function MethodItem(_ref) {
  var icon = _ref.icon,
      name = _ref.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "methodItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "methodItem__icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: icon,
    alt: name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "methodItem__text"
  }, name));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MethodItem);

/***/ }),

/***/ "./src/components/Navbar/Menu.js":
/*!***************************************!*\
  !*** ./src/components/Navbar/Menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.scss */ "./src/components/Navbar/menu.scss");




var Menu = function Menu(_ref) {
  var items = _ref.items,
      active = _ref.active,
      setActive = _ref.setActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: active ? 'menu menu__view' : 'menu',
    onClick: function onClick() {
      return setActive(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: active ? 'blur' : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu__content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: item.id,
      className: "menu__content--li",
      onClick: function onClick() {
        return setActive(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      className: "menu__content--a",
      to: item.to
    }, item.value));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/components/Navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/Navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.scss */ "./src/components/Navbar/navbar.scss");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/components/Navbar/Menu.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Navbar = function Navbar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuActive = _useState2[0],
      setMenuActive = _useState2[1];

  var items = [{
    id: 1,
    value: 'головна',
    to: '/'
  }, {
    id: 2,
    value: 'послуги',
    to: '/services'
  }, {
    id: 3,
    value: 'реабілітація вдома',
    to: '/online'
  }, {
    id: 4,
    value: 'контакти',
    to: '/contacts'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/",
    className: "nav__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav__link--logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav__burger",
    onClick: function onClick() {
      return setMenuActive(!menuActive);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: menuActive ? 'nav__burger--btn active' : 'nav__burger--btn'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: menuActive,
    setActive: setMenuActive,
    items: items
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/Text/SubTitle/SubTitle.js":
/*!**************************************************!*\
  !*** ./src/components/Text/SubTitle/SubTitle.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subtitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtitle.scss */ "./src/components/Text/SubTitle/subtitle.scss");



var SubTitle = function SubTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subtitle"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTitle);

/***/ }),

/***/ "./src/components/Text/Title/Title.js":
/*!********************************************!*\
  !*** ./src/components/Text/Title/Title.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MTitle": () => (/* binding */ MTitle),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.scss */ "./src/components/Text/Title/title.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");



var Title = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: ref,
    className: "title"
  }, children);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);
var MTitle = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)(Title);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");





var container = document.getElementById('app');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container); // createRoot(container!) if you use TypeScript

root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  tab: "home"
}))));

/***/ }),

/***/ "./src/preloader/Loader.js":
/*!*********************************!*\
  !*** ./src/preloader/Loader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _loader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.scss */ "./src/preloader/loader.scss");




var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    className: "loading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    className: "loading__image",
    animate: {
      scale: [2, 1, 2, 1, 2] // rotate: [0, 0, 180, 180, 0],
      // borderRadius: ["0%", "0%", "50%", "50%", "0%"]

    },
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageContacts/Contacts/contacts.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageContacts/Contacts/contacts.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/About.png */ "./src/img/About.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/telegram.svg */ "./src/img/telegram.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/facebook.svg */ "./src/img/facebook.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/viber.svg */ "./src/img/viber.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/youtube.svg */ "./src/img/youtube.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/instagram.svg */ "./src/img/instagram.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contacts {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-top: 80px;\n  padding-bottom: 60px;\n  max-height: calc(100vh - 172px);\n}\n@media (min-width: 1024px) {\n  .contacts {\n    max-height: calc(100vh - 224px);\n  }\n}\n.contacts__img {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  width: 205px;\n  height: 167px;\n  margin-top: 9px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  border-radius: 2px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media (min-width: 575px) {\n  .contacts__img {\n    width: 290px;\n    height: 238px;\n  }\n}\n.contacts__title {\n  margin-top: 25px;\n}\n.contacts__title .title {\n  color: #008FAD;\n}\n@media (min-width: 1024px) {\n  .contacts__title .title {\n    font-size: 24px;\n  }\n}\n.contacts__tell {\n  margin: 15px 0;\n}\n@media (min-width: 1024px) {\n  .contacts__tell {\n    margin: 30px 0;\n  }\n}\n.contacts__tell--namb {\n  display: block;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 190.9%;\n  text-align: center;\n  letter-spacing: 0.02em;\n  text-decoration: none;\n  color: #008FAD;\n  margin-left: 3px;\n}\n@media (min-width: 1024px) {\n  .contacts__tell--namb {\n    font-size: 18px;\n  }\n}\n.contacts__icons {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n.contacts__icons--telega, .contacts__icons--facebook, .contacts__icons--viber, .contacts__icons--youtube, .contacts__icons--instagram {\n  text-decoration: none;\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  transition: 0.3s;\n}\n@media (min-width: 576px) {\n  .contacts__icons--telega, .contacts__icons--facebook, .contacts__icons--viber, .contacts__icons--youtube, .contacts__icons--instagram {\n    width: 45px;\n    height: 45px;\n  }\n}\n.contacts__icons--telega:hover, .contacts__icons--facebook:hover, .contacts__icons--viber:hover, .contacts__icons--youtube:hover, .contacts__icons--instagram:hover {\n  translate: 0 -3px;\n}\n.contacts__icons--telega {\n  margin-left: 7px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.contacts__icons--facebook {\n  margin-left: 20px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.contacts__icons--viber {\n  margin-left: 20px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.contacts__icons--youtube {\n  margin-left: 20px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.contacts__icons--instagram {\n  margin-left: 20px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}", "",{"version":3,"sources":["webpack://./src/PageContacts/Contacts/contacts.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,oBAAA;EACA,+BAAA;AACJ;AACI;EATJ;IAUQ,+BAAA;EAEN;AACF;AAAI;EACI,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,4BAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,yFAAA;EACA,kBAAA;EACA,oBAAA;KAAA,iBAAA;AAER;AAAQ;EAZJ;IAaQ,YAAA;IACA,aAAA;EAGV;AACF;AAAI;EACI,gBAAA;AAER;AAAQ;EACI,cAAA;AAEZ;AACQ;EAJA;IAKI,eAAA;EAEV;AACF;AAEI;EACI,cAAA;AAAR;AAEQ;EAHJ;IAIQ,cAAA;EACV;AACF;AAEQ;EACI,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;AAAZ;AAEY;EAZJ;IAaQ,eAAA;EACd;AACF;AAGI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AADR;AAIQ;EACI,qBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAFZ;AAKY;EARJ;IASQ,WAAA;IACA,YAAA;EAFd;AACF;AAKQ;EACI,iBAAA;AAHZ;AAOQ;EACI,gBAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;AALZ;AASQ;EACI,iBAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;AAPZ;AAUQ;EACI,iBAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;AARZ;AAWQ;EACI,iBAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;AATZ;AAYQ;EACI,iBAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;AAVZ","sourcesContent":[".contacts{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-top: 80px;\n    padding-bottom: 60px;\n    max-height: calc(100vh - 172px);\n\n    @media (min-width: 1024px) {\n        max-height: calc(100vh - 224px);\n    }\n\n    &__img {\n        background-image: url(../../img/About.png);\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: 50% 50%;\n        width: 205px;\n        height: 167px;\n        margin-top: 9px;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n        border-radius: 2px;\n        object-fit: cover;\n\n        @media (min-width: 575px) {\n            width: 290px;\n            height: 238px;\n        }\n    }\n\n    &__title {\n        margin-top: 25px;\n\n        .title {\n            color: #008FAD;\n\n\n        @media (min-width: 1024px) {\n            font-size: 24px;\n        }\n        }\n    }\n\n    &__tell {\n        margin: 15px 0;\n\n        @media (min-width: 1024px) {\n            margin: 30px 0;\n        }\n\n\n        &--namb{\n            display: block;\n            font-style: normal;\n            font-weight: 700;\n            font-size: 14px;\n            line-height: 190.9%;\n            text-align: center;\n            letter-spacing: 0.02em;\n            text-decoration: none;\n            color:#008FAD;\n            margin-left: 3px;\n\n            @media (min-width: 1024px) {\n                font-size: 18px;\n            }\n        }\n    }\n\n    &__icons {\n        display: flex;\n        justify-content: center;\n        margin-bottom: 40px;\n\n\n        &--telega, &--facebook, &--viber, &--youtube, &--instagram {\n            text-decoration: none;\n            display: inline-block;\n            width: 25px;\n            height: 25px;\n            transition: 0.3s;\n\n\n            @media (min-width: 576px) {\n                width: 45px;\n                height: 45px;\n            }\n        }\n\n        &--telega:hover, &--facebook:hover, &--viber:hover, &--youtube:hover, &--instagram:hover {\n            translate: 0 -3px;\n            // box-shadow: 5px 5px 4px 1px rgba(0, 0, 0, 0.25);\n        }\n\n        &--telega {\n            margin-left: 7px;\n            background-image: url(../../img/telegram.svg);\n            background-repeat: no-repeat;\n            background-size: cover;\n\n        }\n\n        &--facebook {\n            margin-left: 20px;\n            background-image: url(../../img/facebook.svg);\n            background-repeat: no-repeat;\n            background-size: cover;\n        }\n\n        &--viber {\n            margin-left: 20px;\n            background-image: url(../../img/viber.svg);\n            background-repeat: no-repeat;\n            background-size: cover;\n        }\n\n        &--youtube {\n            margin-left: 20px;\n            background-image: url(../../img/youtube.svg);\n            background-repeat: no-repeat;\n            background-size: cover;\n        }\n\n        &--instagram {\n            margin-left: 20px;\n            background-image: url(../../img/instagram.svg);\n            background-repeat: no-repeat;\n            background-size: cover;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/About/about.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/About/about.scss ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/About.png */ "./src/img/About.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about {\n  padding: 20px 16px 40px;\n}\n@media (min-width: 768px) {\n  .about {\n    padding: 50px 32px;\n  }\n}\n@media (min-width: 1024px) {\n  .about {\n    padding: 50px 38px 100px;\n  }\n}\n@media (min-width: 1600px) {\n  .about {\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n}\n.about__info {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (min-width: 768px) {\n  .about__info {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n}\n.about__left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 21px;\n}\n@media (min-width: 768px) {\n  .about__left {\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n}\n.about__title {\n  text-transform: uppercase;\n  color: #008FAD;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0.88px;\n  text-align: center;\n}\n@media (min-width: 575px) {\n  .about__title {\n    font-size: 24px;\n    line-height: 32px;\n    margin-bottom: 12px;\n  }\n}\n@media (min-width: 768px) {\n  .about__title {\n    text-align: left;\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1024px) {\n  .about__title {\n    font-size: 44px;\n    line-height: 84px;\n    text-align: left;\n  }\n}\n.about__subtitle {\n  max-width: 567px;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .about__subtitle {\n    text-align: left;\n    max-width: none;\n    max-width: initial;\n  }\n}\n.about__btn {\n  margin-top: 20px;\n}\n@media (min-width: 575px) {\n  .about__btn {\n    margin-top: 28px;\n  }\n}\n@media (min-width: 1024px) {\n  .about__btn {\n    margin-top: 52px;\n  }\n}\n.about__img {\n  flex-shrink: 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  width: 205px;\n  height: 167px;\n  margin-top: 15px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  border-radius: 2px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media (min-width: 575px) {\n  .about__img {\n    width: 290px;\n    height: 238px;\n  }\n}\n@media (min-width: 768px) {\n  .about__img {\n    margin-top: 32px;\n    margin-left: 24px;\n  }\n}\n@media (min-width: 1024px) {\n  .about__img {\n    width: 400px;\n    height: 330px;\n    margin-left: 32px;\n    margin-top: 0;\n  }\n}\n@media (min-width: 1240px) {\n  .about__img {\n    width: 500px;\n    height: 403px;\n    margin-left: 68px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PageOne/About/about.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;AACJ;AACI;EAHJ;IAIQ,kBAAA;EAEN;AACF;AAAI;EAPJ;IAQQ,wBAAA;EAGN;AACF;AADI;EAXJ;IAYQ,iBAAA;IACA,cAAA;EAIN;AACF;AAFI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,8BAAA;AAIR;AAFQ;EANJ;IAOQ,mBAAA;IACA,uBAAA;EAKV;AACF;AAFI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AAIR;AAFQ;EANJ;IAOQ,2BAAA;IACA,uBAAA;EAKV;AACF;AAFI;EACI,yBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;AAIR;AAFQ;EATJ;IAUQ,eAAA;IACA,iBAAA;IACA,mBAAA;EAKV;AACF;AAHQ;EAfJ;IAgBQ,gBAAA;IACA,gBAAA;EAMV;AACF;AAJQ;EApBJ;IAqBQ,eAAA;IACA,iBAAA;IACA,gBAAA;EAOV;AACF;AAJI;EACI,gBAAA;EACA,kBAAA;AAMR;AAJQ;EAJJ;IAKQ,gBAAA;IACA,eAAA;IAAA,kBAAA;EAOV;AACF;AAJI;EACI,gBAAA;AAMR;AAJQ;EAHJ;IAIQ,gBAAA;EAOV;AACF;AALQ;EAPJ;IAQQ,gBAAA;EAQV;AACF;AALI;EACI,cAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,4BAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,yFAAA;EACA,kBAAA;EACA,oBAAA;KAAA,iBAAA;AAOR;AALQ;EAbJ;IAcQ,YAAA;IACA,aAAA;EAQV;AACF;AANQ;EAlBJ;IAmBQ,gBAAA;IACA,iBAAA;EASV;AACF;AAPQ;EAvBJ;IAwBQ,YAAA;IACA,aAAA;IACA,iBAAA;IACA,aAAA;EAUV;AACF;AARQ;EA9BJ;IA+BQ,YAAA;IACA,aAAA;IACA,iBAAA;EAWV;AACF","sourcesContent":[".about {\n    padding: 20px 16px 40px;\n\n    @media (min-width: 768px) {\n        padding: 50px 32px;\n    }\n\n    @media (min-width: 1024px) {\n        padding: 50px 38px 100px;\n    }\n\n    @media (min-width: 1600px) {\n        max-width: 1200px;\n        margin: 0 auto;\n    }\n\n    &__info {\n        display: flex;\n        flex-direction: column-reverse;\n        align-items: center;\n        justify-content: space-between;\n\n        @media (min-width: 768px) {\n            flex-direction: row;\n            align-items: flex-start;\n        }\n    }\n\n    &__left {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin-top: 21px;\n\n        @media (min-width: 768px) {\n            justify-content: flex-start;\n            align-items: flex-start;\n        }\n    }\n\n    &__title {\n        text-transform: uppercase;\n        color: #008FAD;\n        font-size: 18px;\n        font-weight: 700;\n        line-height: 24px;\n        letter-spacing: 0.88px;\n        text-align: center;\n\n        @media (min-width: 575px) {\n            font-size: 24px;\n            line-height: 32px;\n            margin-bottom: 12px;\n        }\n\n        @media (min-width: 768px) {\n            text-align: left;\n            margin-bottom: 0;\n        }\n\n        @media (min-width: 1024px) {\n            font-size: 44px;\n            line-height: 84px;\n            text-align: left;\n        }\n    }\n\n    &__subtitle {\n        max-width: 567px;\n        text-align: center;\n\n        @media (min-width: 768px) {\n            text-align: left;\n            max-width: unset;\n        }\n    }\n\n    &__btn {\n        margin-top: 20px;\n\n        @media (min-width: 575px) {\n            margin-top: 28px;\n        }\n\n        @media (min-width: 1024px) {\n            margin-top: 52px;\n        }\n    }\n\n    &__img {\n        flex-shrink: 0;\n        background-image: url(../../img/About.png);\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: 50% 50%;\n        width: 205px;\n        height: 167px;\n        margin-top: 15px;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n        border-radius: 2px;\n        object-fit: cover;\n\n        @media (min-width: 575px) {\n            width: 290px;\n            height: 238px;\n        }\n\n        @media (min-width: 768px) {\n            margin-top: 32px;\n            margin-left: 24px;\n        }\n\n        @media (min-width: 1024px) {\n            width: 400px;\n            height: 330px;\n            margin-left: 32px;\n            margin-top: 0;\n        }\n\n        @media (min-width: 1240px) {\n            width: 500px;\n            height: 403px;\n            margin-left: 68px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/FirstVisit/firstVisit.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/FirstVisit/firstVisit.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".firstVisit {\n  padding: 20px 16px;\n  background: #008FAD;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n@media (min-width: 768px) {\n  .firstVisit {\n    padding: 32px 32px 50px;\n  }\n}\n@media (min-width: 1240px) {\n  .firstVisit {\n    padding: 50px 120px;\n  }\n}\n.firstVisit__title {\n  color: white;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0.64px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n}\n@media (min-width: 1024px) {\n  .firstVisit__title {\n    font-size: 30px;\n    line-height: 40px;\n    margin-bottom: 24px;\n  }\n}\n@media (min-width: 1440px) {\n  .firstVisit__title {\n    font-size: 32px;\n    line-height: 61px;\n  }\n}\n.firstVisit__row {\n  display: flex;\n  max-width: 567px;\n  margin: 0 auto;\n}\n.firstVisit__row:not(:last-child) {\n  margin-bottom: 30px;\n}\n@media (min-width: 768px) {\n  .firstVisit__row {\n    max-width: none;\n    max-width: initial;\n  }\n}\n@media (min-width: 1600px) {\n  .firstVisit__row {\n    max-width: 1124px;\n    margin: 0 auto;\n  }\n}\n.firstVisit__image {\n  display: block;\n  width: 30px;\n  height: 32px;\n  flex-shrink: 0;\n}\n@media (min-width: 768px) {\n  .firstVisit__image {\n    width: 52px;\n    height: 54px;\n  }\n}\n@media (min-width: 1024px) {\n  .firstVisit__image {\n    width: 64px;\n    height: 66px;\n  }\n}\n@media (min-width: 1440px) {\n  .firstVisit__image {\n    width: 80px;\n    height: 82px;\n  }\n}\n.firstVisit__info {\n  display: flex;\n  flex-direction: column;\n  margin-left: 8px;\n  margin-top: 4px;\n}\n@media (min-width: 540px) {\n  .firstVisit__info {\n    display: inline;\n    display: initial;\n  }\n}\n@media (min-width: 768px) {\n  .firstVisit__info {\n    margin-left: 12px;\n  }\n}\n@media (min-width: 1024px) {\n  .firstVisit__info {\n    margin-top: 8px;\n  }\n}\n@media (min-width: 1440px) {\n  .firstVisit__info {\n    margin-top: 12px;\n    margin-left: 16px;\n  }\n}\n.firstVisit__name {\n  color: black;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  margin-right: 4px;\n}\n@media (min-width: 1024px) {\n  .firstVisit__name {\n    font-size: 16px;\n    line-height: 28px;\n    margin-right: 6px;\n  }\n}\n@media (min-width: 1240px) {\n  .firstVisit__name {\n    font-size: 18px;\n    line-height: 30px;\n  }\n}\n@media (min-width: 1440px) {\n  .firstVisit__name {\n    font-size: 20px;\n    line-height: 38px;\n    margin-right: 10px;\n  }\n}\n.firstVisit__description {\n  color: white;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.4px;\n}\n@media (min-width: 1024px) {\n  .firstVisit__description {\n    font-size: 16px;\n    line-height: 28px;\n  }\n}\n@media (min-width: 1240px) {\n  .firstVisit__description {\n    font-size: 18px;\n    line-height: 30px;\n  }\n}\n@media (min-width: 1440px) {\n  .firstVisit__description {\n    font-size: 20px;\n    line-height: 38px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PageOne/FirstVisit/firstVisit.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,mBAAA;EACA,2CAAA;AACJ;AACI;EALJ;IAMQ,uBAAA;EAEN;AACF;AAAI;EATJ;IAUQ,mBAAA;EAGN;AACF;AADI;EACI,YAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;AAGR;AADQ;EAVJ;IAWQ,eAAA;IACA,iBAAA;IACA,mBAAA;EAIV;AACF;AAFQ;EAhBJ;IAiBQ,eAAA;IACA,iBAAA;EAKV;AACF;AAFI;EACI,aAAA;EACA,gBAAA;EACA,cAAA;AAIR;AAFQ;EACI,mBAAA;AAIZ;AADQ;EATJ;IAUQ,eAAA;IAAA,kBAAA;EAIV;AACF;AAFQ;EAbJ;IAcQ,iBAAA;IACA,cAAA;EAKV;AACF;AAFI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;AAIR;AAFQ;EANJ;IAOQ,WAAA;IACA,YAAA;EAKV;AACF;AAHQ;EAXJ;IAYQ,WAAA;IACA,YAAA;EAMV;AACF;AAJQ;EAhBJ;IAiBQ,WAAA;IACA,YAAA;EAOV;AACF;AAJI;EACI,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;AAMR;AAJQ;EANJ;IAOQ,eAAA;IAAA,gBAAA;EAOV;AACF;AALQ;EAVJ;IAWQ,iBAAA;EAQV;AACF;AANQ;EAdJ;IAeQ,eAAA;EASV;AACF;AAPQ;EAlBJ;IAmBQ,gBAAA;IACA,iBAAA;EAUV;AACF;AAPI;EACI,YAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,yBAAA;EACA,iBAAA;AASR;AAPQ;EATJ;IAUQ,eAAA;IACA,iBAAA;IACA,iBAAA;EAUV;AACF;AARQ;EAfJ;IAgBQ,eAAA;IACA,iBAAA;EAWV;AACF;AATQ;EApBJ;IAqBQ,eAAA;IACA,iBAAA;IACA,kBAAA;EAYV;AACF;AATI;EACI,YAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;AAWR;AATQ;EAPJ;IAQQ,eAAA;IACA,iBAAA;EAYV;AACF;AAVQ;EAZJ;IAaQ,eAAA;IACA,iBAAA;EAaV;AACF;AAXQ;EAjBJ;IAkBQ,eAAA;IACA,iBAAA;EAcV;AACF","sourcesContent":[".firstVisit {\n    padding: 20px 16px;\n    background: #008FAD;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n    @media (min-width: 768px) {\n        padding: 32px 32px 50px;\n    }\n\n    @media (min-width: 1240px) {\n        padding: 50px 120px;\n    }\n\n    &__title {\n        color: white;\n        font-size: 18px;\n        font-weight: 700;\n        line-height: 24px;\n        letter-spacing: 0.64px;\n        text-align: center;\n        text-transform: uppercase;\n        margin-bottom: 12px;\n\n        @media (min-width: 1024px) {\n            font-size: 30px;\n            line-height: 40px;\n            margin-bottom: 24px;\n        }\n\n        @media (min-width: 1440px) {\n            font-size: 32px;\n            line-height: 61px;\n        }\n    }\n\n    &__row {\n        display: flex;\n        max-width: 567px;\n        margin: 0 auto;\n\n        &:not(:last-child) {\n            margin-bottom: 30px;\n        }\n\n        @media (min-width: 768px) {\n            max-width: unset;\n        }\n\n        @media (min-width: 1600px) {\n            max-width: 1124px;\n            margin: 0 auto;\n        }\n    }\n\n    &__image {\n        display: block;\n        width: 30px;\n        height: 32px;\n        flex-shrink: 0;\n\n        @media (min-width: 768px) {\n            width: 52px;\n            height: 54px;\n        }\n\n        @media (min-width: 1024px) {\n            width: 64px;\n            height: 66px;\n        }\n\n        @media (min-width: 1440px) {\n            width: 80px;\n            height: 82px;\n        }\n    }\n\n    &__info {\n        display: flex;\n        flex-direction: column;\n        margin-left: 8px;\n        margin-top: 4px;\n\n        @media (min-width: 540px) {\n            display: unset;\n        }\n\n        @media (min-width: 768px) {\n            margin-left: 12px;\n        }\n\n        @media (min-width: 1024px) {\n            margin-top: 8px;\n        }\n\n        @media (min-width: 1440px) {\n            margin-top: 12px;\n            margin-left: 16px;\n        }\n    }\n\n    &__name {\n        color: black;\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 24px;\n        letter-spacing: 0.40px;\n        text-transform: uppercase;\n        margin-right: 4px;\n\n        @media (min-width: 1024px) {\n            font-size: 16px;\n            line-height: 28px;\n            margin-right: 6px;\n        }\n\n        @media (min-width: 1240px) {\n            font-size: 18px;\n            line-height: 30px;\n        }\n\n        @media (min-width: 1440px) {\n            font-size: 20px;\n            line-height: 38px;\n            margin-right: 10px;\n        }\n    }\n\n    &__description {\n        color: white;\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 24px;\n        letter-spacing: 0.40px;\n\n        @media (min-width: 1024px) {\n            font-size: 16px;\n            line-height: 28px;\n        }\n\n        @media (min-width: 1240px) {\n            font-size: 18px;\n            line-height: 30px;\n        }\n\n        @media (min-width: 1440px) {\n            font-size: 20px;\n            line-height: 38px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Header/header.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Header/header.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/main-min.png */ "./src/img/main-min.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n  height: 35vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top 45px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n@media (min-width: 575px) {\n  .header {\n    height: 50vh;\n    background-position: top 60px left;\n  }\n}\n@media (min-width: 768px) {\n  .header {\n    height: 65vh;\n  }\n}\n@media (min-width: 1024px) {\n  .header {\n    height: 80vh;\n  }\n}\n.header__info {\n  padding: 25% 0 0 16px;\n}\n@media (min-width: 575px) {\n  .header__info {\n    padding: 25% 0 0 32px;\n  }\n}\n@media (min-width: 1024px) {\n  .header__info {\n    padding: 13% 0 0 38px;\n  }\n}\n@media (min-width: 1600px) {\n  .header__info {\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n}\n.header__text {\n  max-width: 60%;\n  color: white;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 700;\n  letter-spacing: 0.6px;\n  margin-bottom: 12px;\n}\n@media (min-width: 575px) {\n  .header__text {\n    font-size: 18px;\n    line-height: 28px;\n    max-width: 70%;\n    margin-bottom: 20px;\n  }\n}\n@media (min-width: 768px) {\n  .header__text {\n    font-size: 24px;\n    line-height: 36px;\n    max-width: 56%;\n    margin-bottom: 24px;\n  }\n}\n@media (min-width: 1024px) {\n  .header__text {\n    font-size: 30px;\n    line-height: 45px;\n    max-width: 496px;\n    margin-bottom: 32px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PageOne/Header/header.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,mDAAA;EACA,4BAAA;EACA,sBAAA;EACA,oCAAA;EACA,2CAAA;AACJ;AACI;EARJ;IASQ,YAAA;IACA,kCAAA;EAEN;AACF;AAAI;EAbJ;IAcQ,YAAA;EAGN;AACF;AADI;EAjBJ;IAkBQ,YAAA;EAIN;AACF;AAFI;EACI,qBAAA;AAIR;AAFQ;EAHJ;IAIQ,qBAAA;EAKV;AACF;AAHQ;EAPJ;IAQQ,qBAAA;EAMV;AACF;AAJQ;EAXJ;IAYQ,iBAAA;IACA,cAAA;EAOV;AACF;AAJI;EACI,cAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;AAMR;AAJQ;EATJ;IAUQ,eAAA;IACA,iBAAA;IACA,cAAA;IACA,mBAAA;EAOV;AACF;AALQ;EAhBJ;IAiBQ,eAAA;IACA,iBAAA;IACA,cAAA;IACA,mBAAA;EAQV;AACF;AANQ;EAvBJ;IAwBQ,eAAA;IACA,iBAAA;IACA,gBAAA;IACA,mBAAA;EASV;AACF","sourcesContent":[".header {\n    height: 35vh;\n    background: url(../../img/main-min.png), ;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center top 45px;\n    box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));\n\n    @media (min-width: 575px) {\n        height: 50vh;\n        background-position: top 60px left;\n    }\n\n    @media (min-width: 768px) {\n        height: 65vh;\n    }\n\n    @media (min-width: 1024px) {\n        height: 80vh;\n    }\n\n    &__info {\n        padding: 25% 0 0 16px;\n\n        @media (min-width: 575px) {\n            padding: 25% 0 0 32px;\n        }\n\n        @media (min-width: 1024px) {\n            padding: 13% 0 0 38px;\n        }\n\n        @media (min-width: 1600px) {\n            max-width: 1200px;\n            margin: 0 auto;\n        }\n    }\n\n    &__text {\n        max-width: 60%;\n        color: white;\n        font-size: 12px;\n        line-height: 18px;\n        font-weight: 700;\n        letter-spacing: 0.60px;\n        margin-bottom: 12px;\n\n        @media (min-width: 575px) {\n            font-size: 18px;\n            line-height: 28px;\n            max-width: 70%;\n            margin-bottom: 20px;\n        }\n\n        @media (min-width: 768px) {\n            font-size: 24px;\n            line-height: 36px;\n            max-width: 56%;\n            margin-bottom: 24px;\n        }\n\n        @media (min-width: 1024px) {\n            font-size: 30px;\n            line-height: 45px;\n            max-width: 496px;\n            margin-bottom: 32px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Methods/methods.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Methods/methods.scss ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".methods {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 16px 40px;\n}\n@media (min-width: 768px) {\n  .methods {\n    padding: 32px 32px 50px;\n  }\n}\n@media (min-width: 1024px) {\n  .methods {\n    padding: 44px 38px 50px;\n  }\n}\n@media (min-width: 1240px) {\n  .methods {\n    padding: 50px 120px;\n  }\n}\n@media (min-width: 1600px) {\n  .methods {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 44px 38px 50px;\n  }\n}\n.methods__title {\n  color: #008FAD;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0.72px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 24px;\n}\n@media (min-width: 1024px) {\n  .methods__title {\n    font-size: 30px;\n    line-height: 44px;\n    margin-bottom: 32px;\n  }\n}\n@media (min-width: 1240px) {\n  .methods__title {\n    line-height: 68px;\n  }\n}\n.methods__list {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 20px 0;\n}\n@media (min-width: 768px) {\n  .methods__list {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 36px 28px;\n  }\n}\n@media (min-width: 1024px) {\n  .methods__list {\n    grid-gap: 48px 32px;\n  }\n}\n@media (min-width: 1240px) {\n  .methods__list {\n    grid-gap: 56px 44px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PageOne/Methods/methods.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AACJ;AACI;EANJ;IAOQ,uBAAA;EAEN;AACF;AAAI;EAVJ;IAWQ,uBAAA;EAGN;AACF;AADI;EAdJ;IAeQ,mBAAA;EAIN;AACF;AAFI;EAlBJ;IAmBQ,iBAAA;IACA,cAAA;IACA,uBAAA;EAKN;AACF;AAHI;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,mBAAA;AAKR;AAHQ;EAVJ;IAWQ,eAAA;IACA,iBAAA;IACA,mBAAA;EAMV;AACF;AAJQ;EAhBJ;IAiBQ,iBAAA;EAOV;AACF;AAJI;EACI,aAAA;EACA,qCAAA;EACA,gBAAA;AAMR;AAJQ;EALJ;IAMQ,qCAAA;IACA,mBAAA;EAOV;AACF;AALQ;EAVJ;IAWQ,mBAAA;EAQV;AACF;AANQ;EAdJ;IAeQ,mBAAA;EASV;AACF","sourcesContent":[".methods {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 16px 40px;\n\n    @media (min-width: 768px) {\n        padding: 32px 32px 50px;\n    }\n\n    @media (min-width: 1024px) {\n        padding: 44px 38px 50px;\n    }\n\n    @media (min-width: 1240px) {\n        padding: 50px 120px;\n    }\n\n    @media (min-width: 1600px) {\n        max-width: 1200px;\n        margin: 0 auto;\n        padding: 44px 38px 50px;\n    }\n\n    &__title {\n        color: #008FAD;\n        font-size: 18px;\n        font-weight: 700;\n        line-height: 24px;\n        letter-spacing: 0.72px;\n        text-transform: uppercase;\n        text-align: center;\n        margin-bottom: 24px;\n\n        @media (min-width: 1024px) {\n            font-size: 30px;\n            line-height: 44px;\n            margin-bottom: 32px;\n        }\n\n        @media (min-width: 1240px) {\n            line-height: 68px;\n        }\n    }\n\n    &__list {\n        display: grid;\n        grid-template-columns: repeat(1, 1fr);\n        grid-gap: 20px 0;\n\n        @media (min-width: 768px) {\n            grid-template-columns: repeat(2, 1fr);\n            grid-gap: 36px 28px;\n        }\n\n        @media (min-width: 1024px) {\n            grid-gap: 48px 32px;\n        }\n\n        @media (min-width: 1240px) {\n            grid-gap: 56px 44px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Promo/promo.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Promo/promo.scss ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/success.png */ "./src/img/success.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".promo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  padding: 32px 16px;\n}\n@media (min-width: 768px) {\n  .promo {\n    padding: 64px 16px;\n  }\n}\n@media (min-width: 1240px) {\n  .promo {\n    padding: 80px 16px;\n  }\n}\n.promo__text {\n  max-width: 650px;\n  color: white;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0.64px;\n  text-align: center;\n  margin-bottom: 32px;\n}\n@media (min-width: 1024px) {\n  .promo__text {\n    font-size: 30px;\n    line-height: 42px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PageOne/Promo/promo.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,yDAAA;EACA,sBAAA;EACA,2BAAA;EACA,kBAAA;AACJ;AACI;EATJ;IAUQ,kBAAA;EAEN;AACF;AAAI;EAbJ;IAcQ,kBAAA;EAGN;AACF;AADI;EACI,gBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;AAGR;AADQ;EAVJ;IAWQ,eAAA;IACA,iBAAA;EAIV;AACF","sourcesContent":[".promo {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(../../img/success.png);\n    background-size: cover;\n    background-position: center;\n    padding: 32px 16px;\n\n    @media (min-width: 768px) {\n        padding: 64px 16px;\n    }\n\n    @media (min-width: 1240px) {\n        padding: 80px 16px;\n    }\n\n    &__text {\n        max-width: 650px;\n        color: white;\n        font-size: 18px;\n        font-weight: 700;\n        line-height: 24px;\n        letter-spacing: 0.64px;\n        text-align: center;\n        margin-bottom: 32px;\n\n        @media (min-width: 1024px) {\n            font-size: 30px;\n            line-height: 42px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Services/services.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Services/services.scss ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".services {\n  background-color: #008FAD;\n  padding: 28px 0 40px;\n}\n@media (min-width: 768px) {\n  .services {\n    padding: 36px 0 70px;\n  }\n}\n@media (min-width: 1024px) {\n  .services {\n    padding: 40px 0 70px;\n  }\n}\n@media (min-width: 1240px) {\n  .services {\n    padding: 50px 0 70px;\n  }\n}\n.services__title {\n  text-align: center;\n  color: white;\n  font-weight: 700;\n  letter-spacing: 0.64px;\n  margin-bottom: 20px;\n  font-size: 18px;\n  line-height: 28px;\n  text-transform: uppercase;\n}\n@media (min-width: 768px) {\n  .services__title {\n    font-size: 24px;\n    line-height: 32px;\n    margin-bottom: 28px;\n  }\n}\n@media (min-width: 1024px) {\n  .services__title {\n    font-size: 30px;\n    line-height: 40px;\n    margin-bottom: 30px;\n  }\n}\n@media (min-width: 1240px) {\n  .services__title {\n    font-size: 32px;\n    line-height: 61px;\n    margin-bottom: 33px;\n  }\n}\n.services__info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (min-width: 375px) {\n  .services__info {\n    flex-direction: row;\n    justify-content: center;\n  }\n}\n.services__children, .services__adult {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  height: 150px;\n  background: #006079;\n  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.36);\n  border-radius: 20px;\n  font-size: 16px;\n  line-height: 24px;\n  color: white;\n  font-weight: 700;\n  letter-spacing: 0.64px;\n  position: relative;\n}\n.services__children:hover, .services__adult:hover {\n  cursor: pointer;\n}\n@media (min-width: 480px) {\n  .services__children, .services__adult {\n    width: 200px;\n    height: 200px;\n  }\n}\n@media (min-width: 540px) {\n  .services__children, .services__adult {\n    width: 220px;\n    height: 220px;\n  }\n}\n@media (min-width: 768px) {\n  .services__children, .services__adult {\n    width: 260px;\n    height: 260px;\n    font-size: 20px;\n    line-height: 28px;\n  }\n}\n@media (min-width: 1024px) {\n  .services__children, .services__adult {\n    width: 300px;\n    height: 300px;\n    font-size: 24px;\n    line-height: 28px;\n  }\n}\n@media (min-width: 1240px) {\n  .services__children, .services__adult {\n    width: 350px;\n    height: 350px;\n    font-size: 32px;\n    line-height: 61px;\n  }\n}\n.services__children {\n  margin-bottom: 40px;\n}\n@media (min-width: 375px) {\n  .services__children {\n    margin-right: 40px;\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1024px) {\n  .services__children {\n    margin-right: 130px;\n  }\n}\n@media (min-width: 1240px) {\n  .services__children {\n    margin-right: 170px;\n  }\n}\n.services__adultList, .services__childrenList {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 150px;\n  background: #006079;\n  border-radius: 20px;\n  position: absolute;\n  bottom: 0;\n  height: 0;\n  font-size: 10px;\n  line-height: 14px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  overflow: hidden;\n}\n.services__adultList ul, .services__childrenList ul {\n  max-width: 110px;\n  margin-left: 30px;\n  display: none;\n}\n.services__adultList ul li, .services__childrenList ul li {\n  list-style: disc;\n}\n@media (min-width: 480px) {\n  .services__adultList, .services__childrenList {\n    width: 200px;\n    font-size: 12px;\n    line-height: 16px;\n  }\n  .services__adultList ul, .services__childrenList ul {\n    max-width: 170px;\n    margin-left: 36px;\n  }\n}\n@media (min-width: 540px) {\n  .services__adultList, .services__childrenList {\n    width: 220px;\n  }\n  .services__adultList ul, .services__childrenList ul {\n    max-width: 180px;\n    margin-left: 44px;\n  }\n}\n@media (min-width: 768px) {\n  .services__adultList, .services__childrenList {\n    width: 260px;\n    font-size: 14px;\n    line-height: 18px;\n  }\n  .services__adultList ul, .services__childrenList ul {\n    max-width: 200px;\n    margin-left: 52px;\n  }\n}\n@media (min-width: 1024px) {\n  .services__adultList, .services__childrenList {\n    width: 300px;\n    line-height: 26px;\n  }\n  .services__adultList ul, .services__childrenList ul {\n    max-width: 228px;\n  }\n}\n@media (min-width: 1240px) {\n  .services__adultList, .services__childrenList {\n    width: 350px;\n    font-size: 15px;\n    line-height: 30px;\n  }\n  .services__adultList ul, .services__childrenList ul {\n    max-width: 280px;\n    margin-left: 70px;\n  }\n}\n.services__children:hover .services__childrenList, .services__adult:hover .services__adultList {\n  height: 150px;\n  transition: all 0.3s;\n}\n.services__children:hover .services__childrenList ul, .services__adult:hover .services__adultList ul {\n  display: block;\n}\n@media (min-width: 480px) {\n  .services__children:hover .services__childrenList, .services__adult:hover .services__adultList {\n    height: 200px;\n  }\n}\n@media (min-width: 540px) {\n  .services__children:hover .services__childrenList, .services__adult:hover .services__adultList {\n    height: 220px;\n  }\n}\n@media (min-width: 768px) {\n  .services__children:hover .services__childrenList, .services__adult:hover .services__adultList {\n    height: 260px;\n  }\n}\n@media (min-width: 1024px) {\n  .services__children:hover .services__childrenList, .services__adult:hover .services__adultList {\n    height: 300px;\n  }\n}\n@media (min-width: 1240px) {\n  .services__children:hover .services__childrenList, .services__adult:hover .services__adultList {\n    height: 350px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PageOne/Services/services.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,oBAAA;AACJ;AACI;EAJJ;IAKQ,oBAAA;EAEN;AACF;AAAI;EARJ;IASQ,oBAAA;EAGN;AACF;AADI;EAZJ;IAaQ,oBAAA;EAIN;AACF;AAFI;EACI,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;AAIR;AAFQ;EAVJ;IAWQ,eAAA;IACA,iBAAA;IACA,mBAAA;EAKV;AACF;AAHQ;EAhBJ;IAiBQ,eAAA;IACA,iBAAA;IACA,mBAAA;EAMV;AACF;AAJQ;EAtBJ;IAuBQ,eAAA;IACA,iBAAA;IACA,mBAAA;EAOV;AACF;AAJI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AAMR;AAJQ;EALJ;IAMQ,mBAAA;IACA,uBAAA;EAOV;AACF;AAJI;EAEI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,+CAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;AAKR;AAHQ;EACI,eAAA;AAKZ;AAFQ;EArBJ;IAsBQ,YAAA;IACA,aAAA;EAKV;AACF;AAHQ;EA1BJ;IA2BQ,YAAA;IACA,aAAA;EAMV;AACF;AAJQ;EA/BJ;IAgCQ,YAAA;IACA,aAAA;IACA,eAAA;IACA,iBAAA;EAOV;AACF;AALQ;EAtCJ;IAuCQ,YAAA;IACA,aAAA;IACA,eAAA;IACA,iBAAA;EAQV;AACF;AANQ;EA7CJ;IA8CQ,YAAA;IACA,aAAA;IACA,eAAA;IACA,iBAAA;EASV;AACF;AANI;EACI,mBAAA;AAQR;AANQ;EAHJ;IAIQ,kBAAA;IACA,gBAAA;EASV;AACF;AAPQ;EARJ;IASQ,mBAAA;EAUV;AACF;AARQ;EAZJ;IAaQ,mBAAA;EAWV;AACF;AARI;EAEI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;EACA,gBAAA;AASR;AAPQ;EACI,gBAAA;EACA,iBAAA;EACA,aAAA;AASZ;AAPY;EACI,gBAAA;AAShB;AALQ;EA3BJ;IA4BQ,YAAA;IACA,eAAA;IACA,iBAAA;EAQV;EANU;IACI,gBAAA;IACA,iBAAA;EAQd;AACF;AALQ;EAtCJ;IAuCQ,YAAA;EAQV;EANU;IACI,gBAAA;IACA,iBAAA;EAQd;AACF;AALQ;EA/CJ;IAgDQ,YAAA;IACA,eAAA;IACA,iBAAA;EAQV;EANU;IACI,gBAAA;IACA,iBAAA;EAQd;AACF;AALQ;EA1DJ;IA2DQ,YAAA;IACA,iBAAA;EAQV;EANU;IACI,gBAAA;EAQd;AACF;AALQ;EAnEJ;IAoEQ,YAAA;IACA,eAAA;IACA,iBAAA;EAQV;EANU;IACI,gBAAA;IACA,iBAAA;EAQd;AACF;AAJI;EAEI,aAAA;EACA,oBAAA;AAKR;AAHQ;EACI,cAAA;AAKZ;AAFQ;EATJ;IAUQ,aAAA;EAKV;AACF;AAHQ;EAbJ;IAcQ,aAAA;EAMV;AACF;AAJQ;EAjBJ;IAkBQ,aAAA;EAOV;AACF;AALQ;EArBJ;IAsBQ,aAAA;EAQV;AACF;AANQ;EAzBJ;IA0BQ,aAAA;EASV;AACF","sourcesContent":[".services {\n    background-color: #008FAD;\n    padding: 28px 0 40px;\n\n    @media (min-width: 768px) {\n        padding: 36px 0 70px;\n    }\n\n    @media (min-width: 1024px) {\n        padding: 40px 0 70px;\n    }\n\n    @media (min-width: 1240px) {\n        padding: 50px 0 70px;\n    }\n\n    &__title {\n        text-align: center;\n        color: white;\n        font-weight: 700;\n        letter-spacing: 0.64px;\n        margin-bottom: 20px;\n        font-size: 18px;\n        line-height: 28px;\n        text-transform: uppercase;\n\n        @media (min-width: 768px) {\n            font-size: 24px;\n            line-height: 32px;\n            margin-bottom: 28px;\n        }\n\n        @media (min-width: 1024px) {\n            font-size: 30px;\n            line-height: 40px;\n            margin-bottom: 30px;\n        }\n\n        @media (min-width: 1240px) {\n            font-size: 32px;\n            line-height: 61px;\n            margin-bottom: 33px;\n        }\n    }\n\n    &__info {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        @media (min-width: 375px) {\n            flex-direction: row;\n            justify-content: center;\n        }\n    }\n\n    &__children,\n    &__adult {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 150px;\n        height: 150px;\n        background: #006079;\n        box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.36);\n        border-radius: 20px;\n        font-size: 16px;\n        line-height: 24px;\n        color: white;\n        font-weight: 700;\n        letter-spacing: 0.64px;\n        position: relative;\n\n        &:hover {\n            cursor: pointer;\n        }\n\n        @media (min-width: 480px) {\n            width: 200px;\n            height: 200px;\n        }\n\n        @media (min-width: 540px) {\n            width: 220px;\n            height: 220px;\n        }\n\n        @media (min-width: 768px) {\n            width: 260px;\n            height: 260px;\n            font-size: 20px;\n            line-height: 28px;\n        }\n\n        @media (min-width: 1024px) {\n            width: 300px;\n            height: 300px;\n            font-size: 24px;\n            line-height: 28px;\n        }\n\n        @media (min-width: 1240px) {\n            width: 350px;\n            height: 350px;\n            font-size: 32px;\n            line-height: 61px;\n        }\n    }\n\n    &__children {\n        margin-bottom: 40px;\n\n        @media (min-width: 375px) {\n            margin-right: 40px;\n            margin-bottom: 0;\n        }\n\n        @media (min-width: 1024px) {\n            margin-right: 130px;\n        }\n\n        @media (min-width: 1240px) {\n            margin-right: 170px;\n        }\n    }\n\n    &__adultList,\n    &__childrenList {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        width: 150px;\n        background: #006079;\n        border-radius: 20px;\n        position: absolute;\n        bottom: 0;\n        height: 0;\n        font-size: 10px;\n        line-height: 14px;\n        font-weight: 400;\n        letter-spacing: 0.40px;\n        overflow: hidden;\n\n        ul {\n            max-width: 110px;\n            margin-left: 30px;\n            display: none;\n\n            li {\n                list-style: disc;\n            }\n        }\n\n        @media (min-width: 480px) {\n            width: 200px;\n            font-size: 12px;\n            line-height: 16px;\n\n            ul {\n                max-width: 170px;\n                margin-left: 36px;\n            }\n        }\n\n        @media (min-width: 540px) {\n            width: 220px;\n\n            ul {\n                max-width: 180px;\n                margin-left: 44px;\n            }\n        }\n\n        @media (min-width: 768px) {\n            width: 260px;\n            font-size: 14px;\n            line-height: 18px;\n\n            ul {\n                max-width: 200px;\n                margin-left: 52px;\n            }\n        }\n\n        @media (min-width: 1024px) {\n            width: 300px;\n            line-height: 26px;\n\n            ul {\n                max-width: 228px;\n            }\n        }\n\n        @media (min-width: 1240px) {\n            width: 350px;\n            font-size: 15px;\n            line-height: 30px;\n\n            ul {\n                max-width: 280px;\n                margin-left: 70px;\n            }\n        }\n    }\n\n    &__children:hover  &__childrenList,\n    &__adult:hover  &__adultList {\n        height: 150px;\n        transition: all 0.3s;\n\n        ul {\n            display: block;\n        }\n\n        @media (min-width: 480px) {\n            height: 200px;\n        }\n\n        @media (min-width: 540px) {\n            height: 220px;\n        }\n\n        @media (min-width: 768px) {\n            height: 260px;\n        }\n\n        @media (min-width: 1024px) {\n            height: 300px;\n        }\n\n        @media (min-width: 1240px) {\n            height: 350px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/SliderFeedback/slider.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/SliderFeedback/slider.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/arrow.png */ "./src/img/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".feedback {\n  position: relative;\n  background-color: #008FAD;\n  padding: 28px 0 20px 16px;\n}\n@media (min-width: 375px) {\n  .feedback {\n    padding: 28px 0 20px 16px;\n  }\n}\n.feedback__title {\n  color: white;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 700;\n  letter-spacing: 0.64px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 16px;\n}\n@media (min-width: 375px) {\n  .feedback__title {\n    margin-bottom: 24px;\n  }\n}\n@media (min-width: 1024px) {\n  .feedback__title {\n    font-size: 30px;\n    line-height: 40px;\n    margin-bottom: 32px;\n  }\n}\n.feedback__item {\n  width: 250px;\n  width: 40%;\n  height: 252px;\n  margin-right: 32px;\n}\n.feedback__item img {\n  display: block;\n  width: 250px;\n  height: 252px;\n}\n.feedback .slick-prev, .feedback .slick-next {\n  width: 25px;\n  height: 25px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n}\n.feedback .slick-prev:hover, .feedback .slick-next:hover {\n  opacity: 0.7;\n}\n@media (min-width: 768px) {\n  .feedback .slick-prev, .feedback .slick-next {\n    width: 50px;\n    height: 50px;\n  }\n}\n.feedback .slick-prev:before,\n.feedback .slick-next:before {\n  display: none;\n}\n.feedback .slick-prev {\n  top: 97%;\n  left: 40%;\n}\n@media (min-width: 540px) {\n  .feedback .slick-prev {\n    left: 43%;\n  }\n}\n@media (min-width: 768px) {\n  .feedback .slick-prev {\n    top: 92%;\n    left: 44%;\n  }\n}\n.feedback .slick-next {\n  transform: rotate(-180deg);\n  top: 93%;\n  right: 40%;\n}\n@media (min-width: 540px) {\n  .feedback .slick-next {\n    right: 46%;\n  }\n}\n@media (min-width: 768px) {\n  .feedback .slick-next {\n    top: 85%;\n    right: 43%;\n  }\n}\n.feedback .slick-slider .slick-track, .feedback .slick-slider .slick-list {\n  height: 300px;\n}\n@media (min-width: 768px) {\n  .feedback .slick-slider .slick-track, .feedback .slick-slider .slick-list {\n    height: 350px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PageOne/SliderFeedback/slider.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,yBAAA;EACA,yBAAA;AACJ;AACI;EALJ;IAMQ,yBAAA;EAEN;AACF;AAAI;EACI,YAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,mBAAA;AAER;AAAQ;EAVJ;IAWQ,mBAAA;EAGV;AACF;AADQ;EAdJ;IAeQ,eAAA;IACA,iBAAA;IACA,mBAAA;EAIV;AACF;AADI;EACI,YAAA;EACA,UAAA;EACA,aAAA;EAEA,kBAAA;AAER;AAAQ;EACI,cAAA;EACA,YAAA;EACA,aAAA;AAEZ;AAEI;EACI,WAAA;EACA,YAAA;EACA,yDAAA;EACA,qBAAA;AAAR;AAEQ;EACI,YAAA;AAAZ;AAGQ;EAVJ;IAWQ,WAAA;IACA,YAAA;EAAV;AACF;AAGI;;EAEI,aAAA;AADR;AAII;EACI,QAAA;EACA,SAAA;AAFR;AAIQ;EAJJ;IAKQ,SAAA;EADV;AACF;AAGQ;EARJ;IASQ,QAAA;IACA,SAAA;EAAV;AACF;AAGI;EACI,0BAAA;EACA,QAAA;EACA,UAAA;AADR;AAGQ;EALJ;IAMQ,UAAA;EAAV;AACF;AAEQ;EATJ;IAUQ,QAAA;IACA,UAAA;EACV;AACF;AAEI;EACI,aAAA;AAAR;AAEQ;EAHJ;IAIQ,aAAA;EACV;AACF","sourcesContent":[".feedback {\n    position: relative;\n    background-color: #008FAD;\n    padding: 28px 0 20px 16px;\n\n    @media (min-width: 375px) {\n        padding: 28px 0 20px 16px;\n    }\n\n    &__title {\n        color: white;\n        font-size: 18px;\n        line-height: 24px;\n        font-weight: 700;\n        letter-spacing: 0.64px;\n        text-transform: uppercase;\n        text-align: center;\n        margin-bottom: 16px;\n\n        @media (min-width: 375px) {\n            margin-bottom: 24px;\n        }\n\n        @media (min-width: 1024px) {\n            font-size: 30px;\n            line-height: 40px;\n            margin-bottom: 32px;\n        }\n    }\n\n    &__item {\n        width: 250px;\n        width: 40%;\n        height: 252px;\n        // margin-right: 83px;\n        margin-right: 32px;\n\n        img {\n            display: block;\n            width: 250px;\n            height: 252px;\n        }\n    }\n\n    .slick-prev, .slick-next {\n        width: 25px;\n        height: 25px;\n        background-image: url('../../img/arrow.png');\n        background-size: 100%;\n\n        &:hover {\n            opacity: 0.7;\n        }\n\n        @media (min-width: 768px) {\n            width: 50px;\n            height: 50px;\n        }\n    }\n\n    .slick-prev:before,\n    .slick-next:before {\n        display: none;\n    }\n\n    .slick-prev {\n        top: 97%;\n        left: 40%;\n\n        @media (min-width: 540px) {\n            left: 43%;\n        }\n\n        @media (min-width: 768px) {\n            top: 92%;\n            left: 44%;\n        }\n    }\n\n    .slick-next {\n        transform: rotate(-180deg);\n        top: 93%;\n        right: 40%;\n\n        @media (min-width: 540px) {\n            right: 46%\n        }\n\n        @media (min-width: 768px) {\n            top: 85%;\n            right: 43%\n        }\n    }\n\n    .slick-slider .slick-track, .slick-slider .slick-list {\n        height: 300px;\n\n        @media (min-width: 768px) {\n            height: 350px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/WhyMe/whyMe.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/WhyMe/whyMe.scss ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".whyMe {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 28px 16px 40px;\n}\n@media (min-width: 768px) {\n  .whyMe {\n    padding: 32px 50px;\n  }\n}\n.whyMe__title {\n  color: #008FAD;\n  font-weight: 700;\n  letter-spacing: 0.64px;\n  font-size: 18px;\n  line-height: 24px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n}\n@media (min-width: 1024px) {\n  .whyMe__title {\n    font-size: 30px;\n    line-height: 40px;\n    margin-bottom: 32px;\n  }\n}\n@media (min-width: 1240px) {\n  .whyMe__title {\n    font-size: 32px;\n    line-height: 61px;\n  }\n}\n.whyMe__reasons {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  margin-top: 24px;\n  grid-gap: 20px 0;\n  margin-bottom: 60px;\n}\n@media (min-width: 768px) {\n  .whyMe__reasons {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 32px 20px;\n  }\n}\n@media (min-width: 1024px) {\n  .whyMe__reasons {\n    margin-bottom: 80px;\n  }\n}\n@media (min-width: 1440px) {\n  .whyMe__reasons {\n    grid-gap: 60px 48px;\n  }\n}\n.whyMe__item {\n  max-width: 491px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.whyMe__image {\n  width: 56px;\n  height: 56px;\n  flex-shrink: 0;\n}\n@media (min-width: 1024px) {\n  .whyMe__image {\n    width: 64px;\n    height: 64px;\n  }\n}\n@media (min-width: 1440px) {\n  .whyMe__image {\n    width: 91px;\n    height: 91px;\n  }\n}\n.whyMe__name {\n  color: #008FAD;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0.4px;\n  margin-top: 8px;\n}\n@media (min-width: 1024px) {\n  .whyMe__name {\n    font-size: 18px;\n    line-height: 32px;\n  }\n}\n@media (min-width: 1440px) {\n  .whyMe__name {\n    font-size: 20px;\n  }\n}\n.whyMe__description {\n  color: black;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.32px;\n  text-align: center;\n}\n@media (min-width: 1024px) {\n  .whyMe__description {\n    font-size: 16px;\n    line-height: 20px;\n  }\n}\n@media (min-width: 1440px) {\n  .whyMe__description {\n    font-size: 18px;\n    line-height: 24px;\n  }\n}\n.whyMe__promo {\n  max-width: 567px;\n  color: #008FAD;\n  font-size: 18px;\n  line-height: 28px;\n  font-weight: 700;\n  letter-spacing: 0.64px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.whyMe__promo span {\n  color: #AD0000;\n}\n@media (min-width: 1024px) {\n  .whyMe__promo {\n    font-size: 20px;\n    line-height: 28px;\n    margin-bottom: 28px;\n  }\n}\n@media (min-width: 1440px) {\n  .whyMe__promo {\n    font-size: 30px;\n    line-height: 44px;\n    margin-bottom: 40px;\n    max-width: 977px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PageOne/WhyMe/whyMe.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AACJ;AACI;EANJ;IAOQ,kBAAA;EAEN;AACF;AAAI;EACI,cAAA;EACA,gBAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;AAER;AAAQ;EAVJ;IAWQ,eAAA;IACA,iBAAA;IACA,mBAAA;EAGV;AACF;AADQ;EAhBJ;IAiBQ,eAAA;IACA,iBAAA;EAIV;AACF;AADI;EACI,aAAA;EACA,qCAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAGR;AADQ;EAPJ;IAQQ,qCAAA;IACA,mBAAA;EAIV;AACF;AAFQ;EAZJ;IAaQ,mBAAA;EAKV;AACF;AAHQ;EAhBJ;IAiBQ,mBAAA;EAMV;AACF;AAHI;EACI,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAKR;AAFI;EACI,WAAA;EACA,YAAA;EACA,cAAA;AAIR;AAFQ;EALJ;IAMQ,WAAA;IACA,YAAA;EAKV;AACF;AAHQ;EAVJ;IAWQ,WAAA;IACA,YAAA;EAMV;AACF;AAHI;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;AAKR;AAHQ;EARJ;IASQ,eAAA;IACA,iBAAA;EAMV;AACF;AAJQ;EAbJ;IAcQ,eAAA;EAOV;AACF;AAJI;EACI,YAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;AAMR;AAJQ;EAPJ;IAQQ,eAAA;IACA,iBAAA;EAOV;AACF;AALQ;EAZJ;IAaQ,eAAA;IACA,iBAAA;EAQV;AACF;AALI;EACI,gBAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;AAOR;AALQ;EACI,cAAA;AAOZ;AAJQ;EAdJ;IAeQ,eAAA;IACA,iBAAA;IACA,mBAAA;EAOV;AACF;AALQ;EApBJ;IAqBQ,eAAA;IACA,iBAAA;IACA,mBAAA;IACA,gBAAA;EAQV;AACF","sourcesContent":[".whyMe {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 28px 16px 40px;\n\n    @media (min-width: 768px) {\n        padding: 32px 50px;\n    }\n\n    &__title {\n        color: #008FAD;\n        font-weight: 700;\n        letter-spacing: 0.64px;\n        font-size: 18px;\n        line-height: 24px;\n        text-align: center;\n        text-transform: uppercase;\n        margin-bottom: 12px;\n\n        @media (min-width: 1024px) {\n            font-size: 30px;\n            line-height: 40px;\n            margin-bottom: 32px;\n        }\n\n        @media (min-width: 1240px) {\n            font-size: 32px;\n            line-height: 61px;\n        }\n    }\n\n    &__reasons {\n        display: grid;\n        grid-template-columns: repeat(1, 1fr);\n        margin-top: 24px;\n        grid-gap: 20px 0;\n        margin-bottom: 60px;\n\n        @media (min-width: 768px) {\n            grid-template-columns: repeat(2, 1fr);\n            grid-gap: 32px 20px;\n        }\n\n        @media (min-width: 1024px) {\n            margin-bottom: 80px;\n        }\n\n        @media (min-width: 1440px) {\n            grid-gap: 60px 48px;\n        }\n    }\n\n    &__item {\n        max-width: 491px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    &__image {\n        width: 56px;\n        height: 56px;\n        flex-shrink: 0;\n\n        @media (min-width: 1024px) {\n            width: 64px;\n            height: 64px;\n        }\n\n        @media (min-width: 1440px) {\n            width: 91px;\n            height: 91px;\n        }\n    }\n\n    &__name {\n        color: #008FAD;\n        font-size: 16px;\n        font-weight: 700;\n        line-height: 24px;\n        letter-spacing: 0.40px;\n        margin-top: 8px;\n\n        @media (min-width: 1024px) {\n            font-size: 18px;\n            line-height: 32px;\n        }\n\n        @media (min-width: 1440px) {\n            font-size: 20px;\n        }\n    }\n\n    &__description {\n        color: black;\n        font-size: 14px;\n        line-height: 18px;\n        letter-spacing: 0.32px;\n        text-align: center;\n\n        @media (min-width: 1024px) {\n            font-size: 16px;\n            line-height: 20px;\n        }\n\n        @media (min-width: 1440px) {\n            font-size: 18px;\n            line-height: 24px;\n        }\n    }\n\n    &__promo {\n        max-width: 567px;\n        color: #008FAD;\n        font-size: 18px;\n        line-height: 28px;\n        font-weight: 700;\n        letter-spacing: 0.64px;\n        text-align: center;\n        margin-bottom: 20px;\n\n        span {\n            color: #AD0000;\n        }\n\n        @media (min-width: 1024px) {\n            font-size: 20px;\n            line-height: 28px;\n            margin-bottom: 28px;\n        }\n\n        @media (min-width: 1440px) {\n            font-size: 30px;\n            line-height: 44px;\n            margin-bottom: 40px;\n            max-width: 977px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PagePrice/Header/header-price.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PagePrice/Header/header-price.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/Header-price.png */ "./src/img/Header-price.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/heder-price-desctop.png */ "./src/img/heder-price-desctop.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-price {\n  position: relative;\n  padding-top: 45px;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-price__img {\n  position: relative;\n  width: 100vw;\n  height: 20vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: top;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n@media (min-width: 575px) {\n  .header-price__img {\n    height: 50vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n}\n.header-price__text {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 15px;\n  min-width: 90%;\n  min-height: 50%;\n  z-index: 5;\n}\n.header-price__text .title {\n  font-weight: 700;\n  font-size: 24px;\n  color: #fff;\n  text-transform: uppercase;\n}\n@media (min-width: 575px) {\n  .header-price__text .title {\n    font-size: 30px;\n  }\n}\n@media (min-width: 575px) {\n  .header-price__text .title {\n    font-size: 40px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PagePrice/Header/header-price.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,iBAAA;EACA,UAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AADJ;AAGI;EACI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,0BAAA;EACA,2CAAA;AADR;AAGQ;EAVJ;IAWQ,YAAA;IACA,yDAAA;EAAV;AACF;AAGI;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,cAAA;EACA,eAAA;EACA,UAAA;AADR;AAIQ;EACI,gBAAA;EACA,eAAA;EACA,WAAA;EACA,yBAAA;AAFZ;AAKY;EAPJ;IAQQ,eAAA;EAFd;AACF;AAIY;EAXJ;IAYQ,eAAA;EADd;AACF","sourcesContent":["\n\n.header-price {\n    position: relative;\n    padding-top: 45px;\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &__img {\n        position: relative;\n        width: 100vw;\n        height: 20vh;\n        background-image: url(../../img/Header-price.png);\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position-y: top;\n        box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));\n\n        @media (min-width: 575px) {\n            height: 50vh;\n            background-image: url(../../img/heder-price-desctop.png);\n        }\n    }\n\n    &__text {\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0 15px;\n        min-width: 90%;\n        min-height: 50%;\n        z-index: 5;\n        // background-color: rgba(0, 0, 0, 0.61);\n\n        .title {\n            font-weight: 700;\n            font-size: 24px;\n            color: #fff;\n            text-transform: uppercase;\n            // text-shadow: 0 0 2px #060606, 0 0 2px #060606;\n\n            @media (min-width: 575px) {\n                font-size: 30px;\n            }\n\n            @media (min-width: 575px) {\n                font-size: 40px;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PagePrice/Price/accordion.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PagePrice/Price/accordion.scss ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".accordion__title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #fff;\n  margin: 8px;\n  position: relative;\n  transition: all 0.2s ease-in;\n}\n.accordion__title .title {\n  color: #fff;\n}\n.accordion__icon {\n  transition: 0.3s ease-in-out;\n  margin-left: 10px;\n  margin-top: 3px;\n}\n.accordion.active .accordion__icon {\n  transform: rotate(180deg);\n}\n.accordion__content {\n  display: none;\n  height: 30px;\n  width: 281px;\n  font-size: 14px;\n  position: relative;\n  z-index: 10;\n  margin-top: -30px;\n  transition: all 200ms cubic-bezier(0.6, -0.28, 0.735, 0.045);\n  visibility: hidden;\n}\n@media (min-width: 540px) {\n  .accordion__content {\n    width: 372px;\n  }\n}\n.accordion__content .subtitle {\n  color: white;\n  text-align: left;\n  padding: 4%;\n}\n.accordion.active .accordion__content {\n  display: block;\n  visibility: visible;\n  margin-top: 8px;\n  height: -moz-fit-content;\n  height: fit-content;\n  transition: all 350ms cubic-bezier(0.08, 1.09, 0.32, 1.275);\n}\n\n.bx {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n}\n@media (min-width: 1024px) {\n  .bx {\n    width: 25px;\n    height: 25px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PagePrice/Price/accordion.scss"],"names":[],"mappings":"AACI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,4BAAA;AAAR;AAEQ;EACI,WAAA;AAAZ;AAII;EACI,4BAAA;EACA,iBAAA;EACA,eAAA;AAFR;AAKI;EACI,yBAAA;AAHR;AAMI;EACI,aAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,4DAAA;EACA,kBAAA;AAJR;AAMQ;EAXJ;IAYQ,YAAA;EAHV;AACF;AAKQ;EACI,YAAA;EACA,gBAAA;EACA,WAAA;AAHZ;AAOI;EACI,cAAA;EACA,mBAAA;EACA,eAAA;EACA,wBAAA;EAAA,mBAAA;EACA,2DAAA;AALR;;AASA;EACI,qBAAA;EACA,WAAA;EACA,YAAA;AANJ;AAQI;EALJ;IAMQ,WAAA;IACA,YAAA;EALN;AACF","sourcesContent":[".accordion {\n    &__title {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        color: #fff;\n        margin: 8px;\n        position: relative;\n        transition: all .2s ease-in;\n\n        .title {\n            color: #fff;\n        }\n    }\n\n    &__icon {\n        transition: 0.3s ease-in-out;\n        margin-left: 10px;\n        margin-top: 3px;\n    }\n\n    &.active &__icon {\n        transform: rotate(180deg);\n    }\n\n    &__content {\n        display: none;\n        height: 30px;\n        width: 281px;\n        font-size: 14px;\n        position: relative;\n        z-index: 10;\n        margin-top: -30px;\n        transition: all 200ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\n        visibility: hidden;\n\n        @media (min-width: 540px) {\n            width: 372px;\n        }\n\n        .subtitle {\n            color: white;\n            text-align:left;\n            padding: 4%;\n        }\n    }\n\n    &.active &__content {\n        display: block;\n        visibility: visible;\n        margin-top: 8px;\n        height: fit-content;\n        transition: all 350ms cubic-bezier(0.080, 1.090, 0.320, 1.275);\n    }\n}\n\n.bx {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n\n    @media (min-width: 1024px) {\n        width: 25px;\n        height: 25px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PagePrice/Price/price.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PagePrice/Price/price.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/rehabHome.png */ "./src/img/rehabHome.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/onlineConsul.png */ "./src/img/onlineConsul.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/onlineRehab.png */ "./src/img/onlineRehab.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/first-seans.png */ "./src/img/first-seans.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/kids-mass.png */ "./src/img/kids-mass.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/kids-massage.png */ "./src/img/kids-massage.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/massage30.png */ "./src/img/massage30.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/massage60.png */ "./src/img/massage60.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/rehab-kab.png */ "./src/img/rehab-kab.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".price {\n  padding-top: 20px;\n  padding-bottom: 100px;\n}\n.price ul {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media (min-width: 576px) {\n  .price ul {\n    flex-wrap: wrap;\n  }\n}\n@media (min-width: 1024px) {\n  .price ul {\n    justify-content: space-around;\n  }\n}\n.price__li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 281px;\n  min-height: 160px;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 30px;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media (min-width: 540px) {\n  .price__li {\n    width: 382px;\n    min-height: 227px;\n    justify-content: space-around;\n    padding: 5px 0;\n  }\n}\n@media (min-width: 764px) {\n  .price__li {\n    margin: 15px 15px;\n    width: 925px;\n    min-height: 320px;\n  }\n}\n.price__li:first-child {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.price__li:nth-child(2) {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.price__li:nth-child(3) {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.price__li:nth-child(4) {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.price__li:nth-child(5) {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.price__li:nth-child(6) {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.price__li:nth-child(7) {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.price__li:nth-child(8) {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.price__li:nth-child(9) {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n.price__title {\n  margin-top: 15px;\n}\n.price__title, .price__subtitle {\n  color: white;\n  margin-bottom: 7px;\n}\n.price__title .title, .price__subtitle .title {\n  font-weight: 700;\n  font-size: 15px;\n  color: #fff;\n}\n@media (min-width: 540px) {\n  .price__title .title, .price__subtitle .title {\n    font-size: 19px;\n  }\n}\n.price__subtitle .title {\n  font-size: 18px;\n}\n@media (min-width: 540px) {\n  .price__subtitle .title {\n    font-size: 21px;\n  }\n}\n.price__btn .button-prime {\n  width: 121px;\n  height: 35px;\n  cursor: pointer;\n}\n@media (min-width: 576px) {\n  .price__btn .button-prime {\n    width: 151px;\n    height: 45px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PagePrice/Price/price.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,qBAAA;AACJ;AACI;EACI,aAAA;EACA,uBAAA;EACA,eAAA;AACR;AACQ;EALJ;IAMQ,eAAA;EAEV;AACF;AAAQ;EATJ;IAUQ,6BAAA;EAGV;AACF;AAAI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;EACA,wBAAA;EAAA,mBAAA;EACA,mBAAA;EACA,4BAAA;EACA,sBAAA;AAER;AAAQ;EAZJ;IAaQ,YAAA;IACA,iBAAA;IACA,6BAAA;IACA,cAAA;EAGV;AACF;AADQ;EAnBJ;IAoBQ,iBAAA;IACA,YAAA;IACA,iBAAA;EAIV;AACF;AADI;EACI,yDAAA;AAGR;AAAI;EACI,yDAAA;AAER;AACI;EACI,yDAAA;AACR;AAEI;EACI,yDAAA;AAAR;AAGI;EACI,yDAAA;AADR;AAII;EACI,yDAAA;AAFR;AAKI;EACI,yDAAA;AAHR;AAMI;EACI,yDAAA;AAJR;AAOI;EACI,yDAAA;AALR;AAQI;EACI,gBAAA;AANR;AASI;EACI,YAAA;EACA,kBAAA;AAPR;AASQ;EACI,gBAAA;EACA,eAAA;EACA,WAAA;AAPZ;AASY;EALJ;IAMQ,eAAA;EANd;AACF;AAWQ;EACI,eAAA;AATZ;AAWY;EAHJ;IAIQ,eAAA;EARd;AACF;AAaQ;EACI,YAAA;EACA,YAAA;EACA,eAAA;AAXZ;AAaY;EALJ;IAMQ,YAAA;IACA,YAAA;EAVd;AACF","sourcesContent":[".price {\n    padding-top: 20px;\n    padding-bottom: 100px;\n\n    ul {\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n\n        @media (min-width: 576px) {\n            flex-wrap: wrap;\n        }\n\n        @media (min-width: 1024px) {\n            justify-content: space-around;\n        }\n    }\n\n    &__li {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        width: 281px;\n        min-height: 160px;\n        height: fit-content;\n        margin-bottom: 30px;\n        background-repeat: no-repeat;\n        background-size: cover;\n\n        @media (min-width: 540px) {\n            width: 382px;\n            min-height: 227px;\n            justify-content: space-around;\n            padding: 5px 0;\n        }\n\n        @media (min-width: 764px) {\n            margin: 15px 15px;\n            width: 925px;\n            min-height: 320px;\n        }\n    }\n\n    &__li:first-child {\n        background-image: url(../../img/rehabHome.png);\n    }\n\n    &__li:nth-child(2) {\n        background-image: url(../../img/onlineConsul.png);\n    }\n\n    &__li:nth-child(3) {\n        background-image: url(../../img/onlineRehab.png);\n    }\n\n    &__li:nth-child(4) {\n        background-image: url(../../img/first-seans.png);\n    }\n\n    &__li:nth-child(5) {\n        background-image: url(../../img/kids-mass.png);\n    }\n\n    &__li:nth-child(6) {\n        background-image: url(../../img/kids-massage.png);\n    }\n\n    &__li:nth-child(7) {\n        background-image: url(../../img/massage30.png);\n    }\n\n    &__li:nth-child(8) {\n        background-image: url(../../img/massage60.png);\n    }\n\n    &__li:nth-child(9) {\n        background-image: url(../../img/rehab-kab.png);\n    }\n\n    &__title {\n        margin-top: 15px;\n    }\n\n    &__title, &__subtitle {\n        color: white;\n        margin-bottom: 7px;\n\n        .title {\n            font-weight: 700;\n            font-size: 15px;\n            color: #fff;\n\n            @media (min-width: 540px) {\n                font-size: 19px;\n            }\n        }\n    }\n\n    &__subtitle {\n        .title {\n            font-size: 18px;\n\n            @media (min-width: 540px) {\n                font-size: 21px;\n            }\n        }\n    }\n\n    &__btn {\n        .button-prime  {\n            width: 121px;\n            height: 35px;\n            cursor: pointer;\n\n            @media (min-width: 576px) {\n                width: 151px;\n                height: 45px;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageVideoCurse/Form/KOOSForm.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageVideoCurse/Form/KOOSForm.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".koos-form-container {\n  font-family: Arial, sans-serif;\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  max-width: 600px;\n  margin: 50px auto;\n}\n\n.koos-title {\n  font-size: 24px;\n  color: #333;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.koos-sutitle {\n  font-size: 19px;\n  color: #333;\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.koos-category {\n  margin-bottom: 10px;\n}\n\n.koos-category-btn {\n  width: 100%;\n  padding: 10px;\n  font-size: 18px;\n  background: #008fad;\n  color: white;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.koos-category-btn:hover {\n  background: #006079;\n}\n\n.koos-questions {\n  padding: 10px;\n  background: #f9f9f9;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.koos-question {\n  margin-bottom: 10px;\n}\n\n.koos-submit-btn {\n  width: 100%;\n  padding: 10px;\n  font-size: 18px;\n  background: #28a745;\n  color: white;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  margin-top: 20px;\n}\n\n.koos-submit-btn:hover {\n  background: #218838;\n}\n\n.koos-result {\n  margin-top: 20px;\n  padding: 15px;\n  background: #fff3cd;\n  border-left: 5px solid #ffa502;\n  border-radius: 5px;\n}\n\n.koos-course-btn {\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n  background: #007bff;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  margin-top: 15px;\n}\n\n.koos-course-btn:hover {\n  background: #0056b3;\n}", "",{"version":3,"sources":["webpack://./src/PageVideoCurse/Form/KOOSForm.scss"],"names":[],"mappings":"AAAA;EACI,8BAAA;EACA,yBAAA;EACA,aAAA;EACA,kBAAA;EACA,yCAAA;EACA,gBAAA;EACA,iBAAA;AACJ;;AAEA;EACI,eAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AACJ;;AACA;EACI,eAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AAEJ;;AACA;EACI,mBAAA;AAEJ;;AACA;EACI,WAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;AAEJ;;AACA;EACI,mBAAA;AAEJ;;AACA;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AAEJ;;AACA;EACI,mBAAA;AAEJ;;AACA;EACI,WAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;AAEJ;;AACA;EACI,mBAAA;AAEJ;;AACA;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;AAEJ;;AAAA;EACI,cAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;AAGJ;;AAAA;EACI,mBAAA;AAGJ","sourcesContent":[".koos-form-container {\n    font-family: Arial, sans-serif;\n    background-color: #ffffff;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n    max-width: 600px;\n    margin: 50px auto;\n}\n\n.koos-title {\n    font-size: 24px;\n    color: #333;\n    text-align: center;\n    margin-bottom: 20px;\n}\n.koos-sutitle {\n    font-size: 19px;\n    color: #333;\n    text-align: center;\n    margin-bottom: 50px;\n}\n\n.koos-category {\n    margin-bottom: 10px;\n}\n\n.koos-category-btn {\n    width: 100%;\n    padding: 10px;\n    font-size: 18px;\n    background: #008fad;\n    color: white;\n    border: none;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.koos-category-btn:hover {\n    background: #006079;\n}\n\n.koos-questions {\n    padding: 10px;\n    background: #f9f9f9;\n    border-radius: 5px;\n    margin-top: 5px;\n}\n\n.koos-question {\n    margin-bottom: 10px;\n}\n\n.koos-submit-btn {\n    width: 100%;\n    padding: 10px;\n    font-size: 18px;\n    background: #28a745;\n    color: white;\n    border: none;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-top: 20px;\n}\n\n.koos-submit-btn:hover {\n    background: #218838;\n}\n\n.koos-result {\n    margin-top: 20px;\n    padding: 15px;\n    background: #fff3cd;\n    border-left: 5px solid #ffa502;\n    border-radius: 5px;\n}\n.koos-course-btn {\n    display: block;\n    width: 100%;\n    text-align: center;\n    padding: 10px;\n    background: #007bff;\n    color: white;\n    text-decoration: none;\n    border-radius: 5px;\n    margin-top: 15px;\n}\n\n.koos-course-btn:hover {\n    background: #0056b3;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageVideoCurse/Header/header-exer.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageVideoCurse/Header/header-exer.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/header-online.png */ "./src/img/header-online.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/header-exer-desc.png */ "./src/img/header-exer-desc.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-exer {\n  position: relative;\n  padding-top: 45px;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-exer__img {\n  position: relative;\n  width: 100vw;\n  height: 20vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: bottom;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n@media (min-width: 575px) {\n  .header-exer__img {\n    height: 50vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position-y: 75%;\n  }\n}\n.header-exer__text {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 15px;\n  width: 50%;\n  min-height: 50%;\n  z-index: 5;\n}\n@media (min-width: 575px) {\n  .header-exer__text {\n    width: 90%;\n  }\n}\n.header-exer__text .title {\n  font-weight: 700;\n  font-size: 24px;\n  color: #fff;\n  text-transform: uppercase;\n  line-height: 40px;\n}\n@media (min-width: 575px) {\n  .header-exer__text .title {\n    font-size: 30px;\n  }\n}\n@media (min-width: 575px) {\n  .header-exer__text .title {\n    font-size: 40px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/PageVideoCurse/Header/header-exer.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,iBAAA;EACA,UAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;AACI;EACI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,6BAAA;EACA,2CAAA;AACR;AACQ;EAVJ;IAWQ,YAAA;IACA,yDAAA;IACA,0BAAA;EAEV;AACF;AACI;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,UAAA;EACA,eAAA;EACA,UAAA;AACR;AAEQ;EAXJ;IAYQ,UAAA;EACV;AACF;AACQ;EACI,gBAAA;EACA,eAAA;EACA,WAAA;EACA,yBAAA;EACA,iBAAA;AACZ;AAEY;EARJ;IASQ,eAAA;EACd;AACF;AACY;EAZJ;IAaQ,eAAA;EAEd;AACF","sourcesContent":[".header-exer {\n    position: relative;\n    padding-top: 45px;\n    z-index: 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &__img {\n        position: relative;\n        width: 100vw;\n        height: 20vh;\n        background-image: url(../../img/header-online.png);\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position-y: bottom;\n        box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));\n\n        @media (min-width: 575px) {\n            height: 50vh;\n            background-image: url(../../img/header-exer-desc.png);\n            background-position-y: 75%;\n        }\n    }\n\n    &__text {\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0 15px;\n        width: 50%;\n        min-height: 50%;\n        z-index: 5;\n        // background-color: rgba(0, 0, 0, 0.61);\n\n        @media (min-width: 575px) {\n            width: 90%;\n        }\n\n        .title {\n            font-weight: 700;\n            font-size: 24px;\n            color: #fff;\n            text-transform: uppercase;\n            line-height: 40px;\n            // text-shadow: 0 0 2px #060606, 0 0 2px #060606;\n\n            @media (min-width: 575px) {\n                font-size: 30px;\n            }\n\n            @media (min-width: 575px) {\n                font-size: 40px;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageVideoCurse/VideoSlider/videoplayer.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageVideoCurse/VideoSlider/videoplayer.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/mono.png */ "./src/img/mono.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/privat24.png */ "./src/img/privat24.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".video {\n  margin-top: 80px;\n  padding-bottom: 100px;\n}\n\n.video-container-styles {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  position: relative;\n  padding-top: 56.25%;\n}\n@media (min-width: 1024px) {\n  .video-container-styles {\n    padding-top: 36.25%;\n  }\n}\n\n.video-styles {\n  position: absolute;\n  top: 0;\n  left: auto;\n  width: 90%;\n  height: 98%;\n}\n@media (min-width: 1024px) {\n  .video-styles {\n    width: 60%;\n  }\n}\n\n.video-title {\n  margin-top: 40px;\n}\n\n.video-donate {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n.video-donate__mono {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 90px;\n  height: 90px;\n  margin-right: 10px;\n}\n@media (min-width: 1024px) {\n  .video-donate__mono {\n    width: 110px;\n    height: 110px;\n    margin-right: 20px;\n  }\n}\n.video-donate__privat {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 90px;\n  height: 90px;\n}\n@media (min-width: 1024px) {\n  .video-donate__privat {\n    width: 110px;\n    height: 110px;\n  }\n}\n.video-donate__mono, .video-donate__privat {\n  translate: 0 -1px;\n  box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);\n  transition: 0.3s;\n}\n.video-donate__mono:hover, .video-donate__privat:hover {\n  translate: 0 -3px;\n  box-shadow: 5px 5px 4px 1px rgba(0, 0, 0, 0.25);\n}", "",{"version":3,"sources":["webpack://./src/PageVideoCurse/VideoSlider/videoplayer.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,qBAAA;AACJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;AACJ;AACI;EAPJ;IAQQ,mBAAA;EAEN;AACF;;AACA;EACI,kBAAA;EACA,MAAA;EACA,UAAA;EACA,UAAA;EACA,WAAA;AAEJ;AAAI;EAPJ;IAQQ,UAAA;EAGN;AACF;;AAAA;EACI,gBAAA;AAGJ;;AAAA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AAGJ;AADI;EACI,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AAGR;AADQ;EARJ;IASQ,YAAA;IACA,aAAA;IACA,kBAAA;EAIV;AACF;AADI;EACI,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;AAGR;AADQ;EAPJ;IAQQ,YAAA;IACA,aAAA;EAIV;AACF;AADI;EACI,iBAAA;EACA,+CAAA;EACA,gBAAA;AAGR;AADQ;EACI,iBAAA;EACA,+CAAA;AAGZ","sourcesContent":[".video {\n    margin-top: 80px;\n    padding-bottom: 100px;\n}\n\n.video-container-styles {\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n    position: relative;\n    padding-top: 56.25%;\n\n    @media (min-width: 1024px) {\n        padding-top: 36.25%;\n    }\n}\n\n.video-styles {\n    position: absolute;\n    top: 0;\n    left: auto;\n    width: 90%;\n    height: 98%;\n\n    @media (min-width: 1024px) {\n        width: 60%;\n    }\n}\n\n.video-title {\n    margin-top: 40px;\n}\n\n.video-donate {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n\n    &__mono {\n        background-image: url(../../img/mono.png);\n        background-repeat: no-repeat;\n        background-size: cover;\n        width: 90px;\n        height: 90px;\n        margin-right: 10px;\n\n        @media (min-width: 1024px) {\n            width: 110px;\n            height: 110px;\n            margin-right: 20px;\n        }\n    }\n\n    &__privat {\n        background-image: url(../../img/privat24.png);\n        background-repeat: no-repeat;\n        background-size: cover;\n        width: 90px;\n        height: 90px;\n\n        @media (min-width: 1024px) {\n            width: 110px;\n            height: 110px;\n        }\n    }\n\n    &__mono, &__privat {\n        translate: 0 -1px;\n        box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);\n        transition: 0.3s;\n\n        &:hover {\n            translate: 0 -3px;\n            box-shadow: 5px 5px 4px 1px rgba(0, 0, 0, 0.25);\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/button.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/button.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button {\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 190%;\n  text-align: center;\n  letter-spacing: 0.02em;\n  color: #FDFDFD;\n  width: 151px;\n  height: 40px;\n  border-radius: 35px;\n  background-color: #008FAD;\n  border: 1px solid #008FAD;\n  box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);\n  transition: 0.3s;\n  animation: shake-bottom 1.2s ease 10s 3 normal both;\n}\n@media (min-width: 575px) {\n  .button {\n    width: 200px;\n    height: 60px;\n    font-size: 14px;\n  }\n}\n.button:hover {\n  translate: 0 -3px;\n  background: #008FAD;\n  color: #FDFDFD;\n  box-shadow: 5px 5px 4px 1px rgba(0, 0, 0, 0.25);\n}\n.button:active {\n  translate: 0 -1px;\n  box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);\n}\n\n@keyframes shake-bottom {\n  0% {\n    transform: rotate(0deg);\n    transform-origin: 50% 100%;\n  }\n  10% {\n    transform: rotate(2deg);\n  }\n  20% {\n    transform: rotate(-4deg);\n  }\n  30% {\n    transform: rotate(4deg);\n  }\n  40% {\n    transform: rotate(-4deg);\n  }\n  50% {\n    transform: rotate(4deg);\n  }\n  60% {\n    transform: rotate(-4deg);\n  }\n  70% {\n    transform: rotate(4deg);\n  }\n  80% {\n    transform: rotate(-2deg);\n  }\n  90% {\n    transform: rotate(2deg);\n  }\n  100% {\n    transform: rotate(0deg);\n    transform-origin: 50% 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Button/button.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,cAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,yBAAA;EACA,+CAAA;EACA,gBAAA;EACA,mDAAA;AACJ;AACI;EAhBJ;IAiBQ,YAAA;IACA,YAAA;IACA,eAAA;EAEN;AACF;AAAI;EACI,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,+CAAA;AAER;AACI;EACI,iBAAA;EACA,+CAAA;AACR;;AAIA;EACI;IACI,uBAAA;IACA,0BAAA;EADN;EAGE;IACI,uBAAA;EADN;EAGE;IACI,wBAAA;EADN;EAGE;IACI,uBAAA;EADN;EAGE;IACI,wBAAA;EADN;EAGE;IACI,uBAAA;EADN;EAGE;IACI,wBAAA;EADN;EAGE;IACI,uBAAA;EADN;EAGE;IACI,wBAAA;EADN;EAGE;IACI,uBAAA;EADN;EAGE;IACI,uBAAA;IACA,0BAAA;EADN;AACF","sourcesContent":[".button {\n    font-weight: 700;\n    font-size: 10px;\n    line-height: 190%;\n    text-align: center;\n    letter-spacing: 0.02em;\n    color: #FDFDFD;\n    width: 151px;\n    height: 40px;\n    border-radius: 35px;\n    background-color: #008FAD;\n    border: 1px solid #008FAD;\n    box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);\n    transition: 0.3s;\n    animation: shake-bottom 1.2s ease 10s 3 normal both;\n\n    @media (min-width: 575px) {\n        width: 200px;\n        height: 60px;\n        font-size: 14px;\n    }\n\n    &:hover {\n        translate: 0 -3px;\n        background: #008FAD;\n        color: #FDFDFD;\n        box-shadow: 5px 5px 4px 1px rgba(0, 0, 0, 0.25);\n    }\n\n    &:active {\n        translate: 0 -1px;\n        box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);\n    }\n}\n\n\n@keyframes shake-bottom {\n    0% {\n        transform: rotate(0deg);\n        transform-origin: 50% 100%;\n    }\n    10% {\n        transform: rotate(2deg);\n    }\n    20% {\n        transform: rotate(-4deg);\n    }\n    30% {\n        transform: rotate(4deg);\n    }\n    40% {\n        transform: rotate(-4deg);\n    }\n    50% {\n        transform: rotate(4deg);\n    }\n    60% {\n        transform: rotate(-4deg);\n    }\n    70% {\n        transform: rotate(4deg);\n    }\n    80% {\n        transform: rotate(-2deg);\n    }\n    90% {\n        transform: rotate(2deg);\n    }\n    100% {\n        transform: rotate(0deg);\n        transform-origin: 50% 100%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 172px;\n  background: #008FAD;\n  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.25);\n}\n@media (min-width: 1024px) {\n  .footer {\n    height: 224px;\n  }\n}\n.footer__title {\n  margin-top: 25px;\n}\n.footer__title .title {\n  color: #fff;\n}\n@media (min-width: 1024px) {\n  .footer__title .title {\n    font-size: 24px;\n  }\n}\n.footer__tell {\n  margin: 15px 0;\n}\n@media (min-width: 1024px) {\n  .footer__tell {\n    margin: 30px 0;\n  }\n}\n.footer__tell--namb {\n  display: block;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 190.9%;\n  text-align: center;\n  letter-spacing: 0.02em;\n  text-decoration: none;\n  color: #fff;\n  margin-left: 3px;\n}\n@media (min-width: 1024px) {\n  .footer__tell--namb {\n    font-size: 18px;\n  }\n}\n.footer__icons {\n  display: flex;\n  justify-content: center;\n}\n.footer__icons--telega, .footer__icons--facebook, .footer__icons--viber {\n  text-decoration: none;\n  display: inline-block;\n  color: #fff;\n  transition: 0.3s;\n}\n.footer__icons--telega:hover, .footer__icons--facebook:hover, .footer__icons--viber:hover {\n  translate: 0 -3px;\n}\n.footer__icons--telega {\n  margin-left: 7px;\n}\n.footer__icons--facebook {\n  margin-left: 20px;\n}\n.footer__icons--viber {\n  margin-left: 20px;\n}\n\n.phone__icon {\n  width: 12px;\n  height: 12px;\n  margin-right: 4px;\n}\n@media (min-width: 1024px) {\n  .phone__icon {\n    width: 16px;\n    height: 16px;\n    margin-right: 6px;\n  }\n}\n\n.react-icons {\n  width: 20px;\n  height: 20px;\n}\n@media (min-width: 1024px) {\n  .react-icons {\n    width: 30px;\n    height: 30px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Footer/footer.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,4CAAA;AACJ;AACI;EATJ;IAUQ,aAAA;EAEN;AACF;AAAI;EACI,gBAAA;AAER;AAAQ;EACI,WAAA;AAEZ;AACQ;EAJA;IAKI,eAAA;EAEV;AACF;AAEI;EACI,cAAA;AAAR;AAEQ;EAHJ;IAIQ,cAAA;EACV;AACF;AAEQ;EACI,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,qBAAA;EACA,WAAA;EACA,gBAAA;AAAZ;AAEY;EAZJ;IAaQ,eAAA;EACd;AACF;AAGI;EACI,aAAA;EACA,uBAAA;AADR;AAIQ;EACI,qBAAA;EACA,qBAAA;EACA,WAAA;EACA,gBAAA;AAFZ;AAKQ;EACI,iBAAA;AAHZ;AAMQ;EACI,gBAAA;AAJZ;AAOQ;EACI,iBAAA;AALZ;AAQQ;EACI,iBAAA;AANZ;;AAYA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AATJ;AAWI;EALJ;IAMQ,WAAA;IACA,YAAA;IACA,iBAAA;EARN;AACF;;AAWA;EACI,WAAA;EACA,YAAA;AARJ;AAUI;EAJJ;IAKQ,WAAA;IACA,YAAA;EAPN;AACF","sourcesContent":[".footer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 172px;\n    background: #008FAD;\n    box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.25);\n\n    @media (min-width: 1024px) {\n        height: 224px;\n    }\n\n    &__title {\n        margin-top: 25px;\n\n        .title {\n            color: #fff;\n\n\n        @media (min-width: 1024px) {\n            font-size: 24px;\n        }\n        }\n    }\n\n    &__tell {\n        margin: 15px 0;\n\n        @media (min-width: 1024px) {\n            margin: 30px 0;\n        }\n\n\n        &--namb{\n            display: block;\n            font-style: normal;\n            font-weight: 700;\n            font-size: 14px;\n            line-height: 190.9%;\n            text-align: center;\n            letter-spacing: 0.02em;\n            text-decoration: none;\n            color: #fff;\n            margin-left: 3px;\n\n            @media (min-width: 1024px) {\n                font-size: 18px;\n            }\n        }\n    }\n\n    &__icons {\n        display: flex;\n        justify-content: center;\n\n\n        &--telega, &--facebook, &--viber {\n            text-decoration: none;\n            display: inline-block;\n            color: #fff;\n            transition: 0.3s;\n        }\n\n        &--telega:hover, &--facebook:hover, &--viber:hover {\n            translate: 0 -3px;\n        }\n\n        &--telega {\n            margin-left: 7px;\n        }\n\n        &--facebook {\n            margin-left: 20px;\n        }\n\n        &--viber {\n            margin-left: 20px;\n        }\n\n    }\n}\n\n.phone__icon {\n    width: 12px;\n    height: 12px;\n    margin-right: 4px;\n\n    @media (min-width: 1024px) {\n        width: 16px;\n        height: 16px;\n        margin-right: 6px;\n    }\n}\n\n.react-icons {\n    width: 20px;\n    height: 20px;\n\n    @media (min-width: 1024px) {\n        width: 30px;\n        height: 30px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/MethodItem/methodItem.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/MethodItem/methodItem.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".methodItem {\n  display: flex;\n  width: 100%;\n  height: 40px;\n  background: #7BC3D9;\n  box-shadow: 0px 4px 4px rgba(0, 96, 121, 0);\n  border-radius: 6px;\n}\n@media (min-width: 480px) {\n  .methodItem {\n    height: 48px;\n  }\n}\n@media (min-width: 768px) {\n  .methodItem {\n    height: 56px;\n  }\n}\n@media (min-width: 1024px) {\n  .methodItem {\n    height: 68px;\n  }\n}\n@media (min-width: 1240px) {\n  .methodItem {\n    height: 87px;\n  }\n}\n.methodItem__icon {\n  width: 40px;\n  height: 100%;\n  flex-shrink: 0;\n}\n.methodItem__icon img {\n  width: 100%;\n  border-radius: 6px 0 0 6px;\n}\n@media (min-width: 480px) {\n  .methodItem__icon {\n    width: 48px;\n  }\n}\n@media (min-width: 768px) {\n  .methodItem__icon {\n    width: 56px;\n  }\n}\n@media (min-width: 1024px) {\n  .methodItem__icon {\n    width: 68px;\n  }\n}\n@media (min-width: 1240px) {\n  .methodItem__icon {\n    width: 89px;\n  }\n}\n.methodItem__text {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.4px;\n  text-align: center;\n  padding: 11px 27px 12px 11px;\n}\n@media (min-width: 1024px) {\n  .methodItem__text {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n@media (min-width: 1240px) {\n  .methodItem__text {\n    font-size: 20px;\n    line-height: 38px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/MethodItem/methodItem.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,2CAAA;EACA,kBAAA;AACJ;AACI;EARJ;IASQ,YAAA;EAEN;AACF;AAAI;EAZJ;IAaQ,YAAA;EAGN;AACF;AADI;EAhBJ;IAiBQ,YAAA;EAIN;AACF;AAFI;EApBJ;IAqBQ,YAAA;EAKN;AACF;AAHI;EACI,WAAA;EACA,YAAA;EACA,cAAA;AAKR;AAHQ;EACI,WAAA;EACA,0BAAA;AAKZ;AAFQ;EAVJ;IAWQ,WAAA;EAKV;AACF;AAHQ;EAdJ;IAeQ,WAAA;EAMV;AACF;AAJQ;EAlBJ;IAmBQ,WAAA;EAOV;AACF;AALQ;EAtBJ;IAuBQ,WAAA;EAQV;AACF;AALI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,kBAAA;EACA,4BAAA;AAOR;AALQ;EAdJ;IAeQ,eAAA;IACA,iBAAA;EAQV;AACF;AANQ;EAnBJ;IAoBQ,eAAA;IACA,iBAAA;EASV;AACF","sourcesContent":[".methodItem {\n    display: flex;\n    width: 100%;\n    height: 40px;\n    background: #7BC3D9;\n    box-shadow: 0px 4px 4px rgba(0, 96, 121, 0);\n    border-radius: 6px;\n\n    @media (min-width: 480px) {\n        height: 48px;\n    }\n\n    @media (min-width: 768px) {\n        height: 56px;\n    }\n\n    @media (min-width: 1024px) {\n        height: 68px;\n    }\n\n    @media (min-width: 1240px) {\n        height: 87px;\n    }\n\n    &__icon {\n        width: 40px;\n        height: 100%;\n        flex-shrink: 0;\n\n        img {\n            width: 100%;\n            border-radius: 6px 0 0 6px;\n        }\n\n        @media (min-width: 480px) {\n            width: 48px;\n        }\n\n        @media (min-width: 768px) {\n            width: 56px;\n        }\n\n        @media (min-width: 1024px) {\n            width: 68px;\n        }\n\n        @media (min-width: 1240px) {\n            width: 89px;\n        }\n    }\n\n    &__text {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: black;\n        font-size: 12px;\n        font-weight: 700;\n        line-height: 18px;\n        letter-spacing: 0.40px;\n        text-align: center;\n        padding: 11px 27px 12px 11px;\n\n        @media (min-width: 1024px) {\n            font-size: 16px;\n            line-height: 24px;\n        }\n\n        @media (min-width: 1240px) {\n            font-size: 20px;\n            line-height: 38px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/menu.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/menu.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu {\n  position: absolute;\n  position: fixed;\n  padding: 90px 15px 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #008fad;\n  transform: translateX(100%);\n  transition: 0.3s;\n  z-index: 50;\n}\n@media (min-width: 785px) {\n  .menu {\n    max-width: 30%;\n    transform: translateX(335%);\n  }\n}\n.menu__view {\n  transform: translateX(0);\n  transition: 0.3s;\n}\n@media (min-width: 785px) {\n  .menu__view {\n    transform: translateX(235%);\n  }\n}\n.menu__content {\n  text-align: center;\n  text-transform: uppercase;\n}\n.menu__content--a {\n  display: block;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 40px;\n  letter-spacing: 0.02em;\n  text-decoration: none;\n  color: white;\n  position: relative;\n}\n.menu__content--a::after {\n  content: \"\";\n  background-color: white;\n  position: absolute;\n  left: 0;\n  bottom: 3px;\n  width: 100%;\n  height: 0px;\n  z-index: -1;\n  border-bottom: 1px solid white;\n  transition: all 0.3s;\n  border-radius: 2px;\n}\n.menu__content--a:hover::after {\n  bottom: 0;\n  height: 100%;\n}\n.menu__content--a:hover {\n  color: #008fad;\n}\n.menu__content--li {\n  margin-bottom: 25px;\n}\n\n.blur {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  position: fixed;\n  top: 0;\n  right: 100%;\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}", "",{"version":3,"sources":["webpack://./src/components/Navbar/menu.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,eAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,2BAAA;EACA,gBAAA;EACA,WAAA;AADJ;AAGI;EAXJ;IAYQ,cAAA;IACA,2BAAA;EAAN;AACF;AAGI;EACI,wBAAA;EACA,gBAAA;AADR;AAGQ;EAJJ;IAKQ,2BAAA;EAAV;AACF;AAGI;EACI,kBAAA;EACA,yBAAA;AADR;AAGQ;EACI,cAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;AADZ;AAGY;EACI,WAAA;EACA,uBAAA;EACA,kBAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,8BAAA;EACA,oBAAA;EACA,kBAAA;AADhB;AAIY;EACI,SAAA;EACA,YAAA;AAFhB;AAKY;EACI,cAAA;AAHhB;AAQQ;EACI,mBAAA;AANZ;;AAWA;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;EACA,MAAA;EACA,WAAA;EACA,kCAAA;UAAA,0BAAA;AARJ","sourcesContent":["\n\n.menu {\n    position: absolute;\n    position: fixed;\n    padding: 90px 15px 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #008fad;\n    transform: translateX(100%);\n    transition: 0.3s;\n    z-index: 50;\n\n    @media (min-width: 785px) {\n        max-width: 30%;\n        transform: translateX(335%);\n\n    }\n\n    &__view {\n        transform: translateX(0);\n        transition: 00.3s;\n\n        @media (min-width: 785px) {\n            transform: translateX(235%);\n        }\n    }\n\n    &__content {\n        text-align: center;\n        text-transform: uppercase;\n\n        &--a {\n            display: block;\n            font-weight: 700;\n            font-size: 16px;\n            line-height: 40px;\n            letter-spacing: 0.02em;\n            text-decoration: none;\n            color: #ffff;\n            position: relative;\n\n            &::after{\n                content: '';\n                background-color: #ffff;\n                position: absolute;\n                left: 0;\n                bottom: 3px;\n                width: 100%;\n                height: 0px;\n                z-index: -1;\n                border-bottom: 1px solid #ffff;\n                transition: all .3s ;\n                border-radius: 2px;\n            }\n\n            &:hover::after{\n                bottom: 0;\n                height: 100%;\n            }\n\n            &:hover {\n                color: #008fad;\n            }\n        }\n\n\n        &--li {\n            margin-bottom: 25px;\n        }\n    }\n}\n\n.blur {\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    position: fixed;\n    top: 0;\n    right: 100%;\n    backdrop-filter: blur(2px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/navbar.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/navbar.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/Logo.svg */ "./src/img/Logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav {\n  position: relative;\n  position: fixed;\n  width: 100%;\n  height: 45px;\n  background: #008FAD;\n  z-index: 50;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  z-index: 60;\n}\n@media (min-width: 575px) {\n  .nav {\n    height: 60px;\n  }\n}\n.nav__link {\n  display: block;\n  width: 50px;\n  height: 30px;\n  position: absolute;\n  top: 8px;\n  left: 15px;\n  cursor: pointer;\n}\n.nav__link--logo {\n  width: 50px;\n  height: 30px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: 50% 50%;\n}\n@media (min-width: 575px) {\n  .nav__link--logo {\n    width: 70px;\n    height: 50px;\n  }\n}\n.nav__burger {\n  display: flex;\n  flex: content;\n  position: absolute;\n  width: 30px;\n  height: 18px;\n  right: 15px;\n  top: 14px;\n  cursor: pointer;\n}\n@media (min-width: 575px) {\n  .nav__burger {\n    top: 20px;\n    width: 40px;\n    height: 28px;\n  }\n}\n.nav__burger--btn, .nav__burger ::after, .nav__burger ::before {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  background: #FFFFFF;\n  border-radius: 2px;\n  transition: 300ms;\n}\n.nav__burger--btn {\n  top: 6px;\n}\n.nav__burger--btn::after {\n  content: \"\";\n  bottom: -10px;\n  transition: bottom 300ms 300ms, transform 300ms;\n  transition: cubic-bazier(0.23, 1, 0.32, 1);\n}\n.nav__burger--btn::before {\n  content: \"\";\n  top: -10px;\n  transition: top 300ms 300ms, transform 300ms;\n  transition: cubic-bazier(0.23, 1, 0.32, 1);\n}\n.nav__burger .active {\n  background: rgba(255, 255, 255, 0);\n  transition: none;\n}\n.nav__burger .active::after {\n  content: \"\";\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms, transform 300ms 300ms;\n  transition: cubic-bazier(0.68, -0.55, 0, 1.55);\n}\n.nav__burger .active::before {\n  content: \"\";\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms, transform 300ms 300ms;\n  transition: cubic-bazier(0.68, -0.55, 0, 1.55);\n}", "",{"version":3,"sources":["webpack://./src/components/Navbar/navbar.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,2CAAA;EACA,WAAA;AACJ;AAEI;EAXJ;IAYQ,YAAA;EACN;AACF;AACI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,eAAA;AACR;AACQ;EACI,WAAA;EACA,YAAA;EACA,yDAAA;EACA,4BAAA;EACA,wBAAA;EACA,4BAAA;AACZ;AACY;EARJ;IASQ,WAAA;IACA,YAAA;EAEd;AACF;AAEI;EACI,aAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,eAAA;AAAR;AAEQ;EAVJ;IAWQ,SAAA;IACA,WAAA;IACA,YAAA;EACV;AACF;AACQ;EACI,cAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;AACZ;AAEQ;EACI,QAAA;AAAZ;AAGQ;EACI,WAAA;EACA,aAAA;EACA,+CAAA;EACA,0CAAA;AADZ;AAKQ;EACI,WAAA;EACA,UAAA;EACA,4CAAA;EACA,0CAAA;AAHZ;AAOQ;EACI,kCAAA;EACA,gBAAA;AALZ;AAQQ;EACI,WAAA;EACA,SAAA;EACA,yBAAA;EACA,+CAAA;EACA,8CAAA;AANZ;AASQ;EACI,WAAA;EACA,MAAA;EACA,wBAAA;EACA,4CAAA;EACA,8CAAA;AAPZ","sourcesContent":[".nav {\n    position: relative;\n    position: fixed;\n    width: 100%;\n    height: 45px;\n    background: #008FAD;\n    z-index: 50;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    z-index: 60;\n\n\n    @media (min-width: 575px) {\n        height: 60px;\n    }\n\n    &__link{\n        display: block;\n        width: 50px;\n        height: 30px;\n        position: absolute;\n        top: 8px;\n        left: 15px;\n        cursor: pointer;\n\n        &--logo {\n            width: 50px;\n            height: 30px;\n            background-image: url(../../img/Logo.svg);\n            background-repeat: no-repeat;\n            background-size: contain;\n            background-position: 50% 50%;\n\n            @media (min-width: 575px) {\n                width: 70px;\n                height: 50px;\n            }\n        }\n    }\n\n    &__burger {\n        display: flex;\n        flex: content;\n        position: absolute;\n        width: 30px;\n        height: 18px;\n        right: 15px;\n        top: 14px;\n        cursor: pointer;\n\n        @media (min-width: 575px) {\n            top: 20px;\n            width: 40px;\n            height: 28px;\n        }\n\n        &--btn, ::after, ::before {\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 3px;\n            background: #FFFFFF;\n            border-radius: 2px;\n            transition: 300ms;\n        }\n\n        &--btn {\n            top: 6px;\n        }\n\n        &--btn::after {\n            content: '';\n            bottom: -10px;\n            transition: bottom 300ms 300ms, transform 300ms;\n            transition: cubic-bazier(0.23, 1, 0.32, 1);\n\n        }\n\n        &--btn::before {\n            content: '';\n            top: -10px;\n            transition: top 300ms 300ms, transform 300ms;\n            transition: cubic-bazier(0.23, 1, 0.32, 1);\n\n        }\n\n        .active {\n            background: rgba(255,255,255,0);\n            transition: none;\n        }\n\n        .active::after {\n            content: '';\n            bottom: 0;\n            transform: rotate(-45deg);\n            transition: bottom 300ms, transform 300ms 300ms;\n            transition: cubic-bazier(0.68, -0.55, 0, 1.55);\n        }\n\n        .active::before {\n            content: '';\n            top: 0;\n            transform: rotate(45deg);\n            transition: top 300ms, transform 300ms 300ms;\n            transition: cubic-bazier(0.68, -0.55, 0, 1.55);\n        }\n\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/SubTitle/subtitle.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/SubTitle/subtitle.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".subtitle {\n  color: black;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 22px;\n  letter-spacing: 0.72px;\n}\n@media (min-width: 480px) {\n  .subtitle {\n    line-height: 27px;\n  }\n}\n@media (min-width: 575px) {\n  .subtitle {\n    font-size: 16px;\n  }\n}\n@media (min-width: 1024px) {\n  .subtitle {\n    font-size: 18px;\n    line-height: 30px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Text/SubTitle/subtitle.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AACJ;AACI;EAPJ;IAQQ,iBAAA;EAEN;AACF;AAAI;EAXJ;IAYQ,eAAA;EAGN;AACF;AADI;EAfJ;IAgBQ,eAAA;IACA,iBAAA;EAIN;AACF","sourcesContent":[".subtitle {\n    color: black;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 22px;\n    letter-spacing: 0.72px;\n\n    @media (min-width: 480px) {\n        line-height: 27px;\n    }\n\n    @media (min-width: 575px) {\n        font-size: 16px;\n    }\n\n    @media (min-width: 1024px) {\n        font-size: 18px;\n        line-height: 30px;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/Title/title.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/Title/title.scss ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 23px;\n  text-align: center;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n@media (min-width: 575px) {\n  .title {\n    font-size: 18px;\n  }\n}\n@media (min-width: 1024px) {\n  .title {\n    font-size: 21px;\n    line-height: 40px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Text/Title/title.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,cAAA;AACJ;AACI;EATJ;IAUQ,eAAA;EAEN;AACF;AAAI;EAbJ;IAcQ,eAAA;IACA,iBAAA;EAGN;AACF","sourcesContent":[".title {\n    font-style: normal;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 23px;\n    text-align: center;\n    letter-spacing: 0.02em;\n    color: #000000;\n\n    @media (min-width: 575px) {\n        font-size: 18px;\n    }\n\n    @media (min-width: 1024px) {\n        font-size: 21px;\n        line-height: 40px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/preloader/loader.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/preloader/loader.scss ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/logo-favicon.png */ "./src/img/logo-favicon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loading {\n  position: absolute;\n  background-color: white;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10000;\n  overflow: hidden;\n}\n\n.loading__image {\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: auto;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: 50% 50%;\n  z-index: 100000;\n}\n@keyframes myAnim {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@media (min-width: 1024px) {\n  .loading__image {\n    background-size: 10%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/preloader/loader.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;AACJ;;AAEA;EACI,YAAA;EACA,aAAA;EACA,MAAA;EACA,UAAA;EACA,yDAAA;EACA,4BAAA;EACA,oBAAA;EACA,4BAAA;EACA,eAAA;AACJ;AACI;EACI;IACI,mBAAA;EACV;EAEM;IACI,qBAAA;EAAV;EAGM;IACI,mBAAA;EADV;AACF;AAII;EAzBJ;IA0BQ,oBAAA;EADN;AACF","sourcesContent":[".loading {\n    position: absolute;\n    background-color: white;\n    width: 100vw;\n    height: 100vh;\n    z-index: 10000;\n    overflow: hidden;\n}\n\n.loading__image {\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: auto;\n    background-image: url(../img/logo-favicon.png);\n    background-repeat: no-repeat;\n    background-size: 20%;\n    background-position: 50% 50%;\n    z-index: 100000;\n\n    @keyframes myAnim {\n        0% {\n            transform: scale(1);\n        }\n\n        50% {\n            transform: scale(1.1);\n        }\n\n        100% {\n            transform: scale(1);\n        }\n    }\n\n    @media (min-width: 1024px) {\n        background-size: 10%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../fonts/fonts.scss */ "./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.scss");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Montserrat;\n}\n\nli {\n  list-style: none;\n}", "",{"version":3,"sources":["webpack://./src/style/index.scss"],"names":[],"mappings":"AAEA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EACA,uBAAA;AAAJ;;AAGA;EACI,gBAAA;AAAJ","sourcesContent":["@import url(../fonts/fonts.scss);\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Montserrat;\n}\n\nli {\n    list-style: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.scss":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.scss ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/PageContacts/Contacts/contacts.scss":
/*!*************************************************!*\
  !*** ./src/PageContacts/Contacts/contacts.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_contacts_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./contacts.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageContacts/Contacts/contacts.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_contacts_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_contacts_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_contacts_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_contacts_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageOne/About/about.scss":
/*!**************************************!*\
  !*** ./src/PageOne/About/about.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./about.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/About/about.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageOne/FirstVisit/firstVisit.scss":
/*!************************************************!*\
  !*** ./src/PageOne/FirstVisit/firstVisit.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_firstVisit_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./firstVisit.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/FirstVisit/firstVisit.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_firstVisit_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_firstVisit_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_firstVisit_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_firstVisit_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageOne/Header/header.scss":
/*!****************************************!*\
  !*** ./src/PageOne/Header/header.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Header/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageOne/Methods/methods.scss":
/*!******************************************!*\
  !*** ./src/PageOne/Methods/methods.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_methods_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./methods.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Methods/methods.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_methods_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_methods_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_methods_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_methods_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageOne/Promo/promo.scss":
/*!**************************************!*\
  !*** ./src/PageOne/Promo/promo.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_promo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./promo.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Promo/promo.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_promo_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_promo_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_promo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_promo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageOne/Services/services.scss":
/*!********************************************!*\
  !*** ./src/PageOne/Services/services.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_services_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./services.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/Services/services.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_services_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_services_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_services_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_services_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageOne/SliderFeedback/slider.scss":
/*!************************************************!*\
  !*** ./src/PageOne/SliderFeedback/slider.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./slider.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/SliderFeedback/slider.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageOne/WhyMe/whyMe.scss":
/*!**************************************!*\
  !*** ./src/PageOne/WhyMe/whyMe.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_whyMe_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./whyMe.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageOne/WhyMe/whyMe.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_whyMe_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_whyMe_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_whyMe_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_whyMe_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PagePrice/Header/header-price.scss":
/*!************************************************!*\
  !*** ./src/PagePrice/Header/header-price.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_price_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./header-price.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PagePrice/Header/header-price.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PagePrice/Price/accordion.scss":
/*!********************************************!*\
  !*** ./src/PagePrice/Price/accordion.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_accordion_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./accordion.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PagePrice/Price/accordion.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_accordion_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_accordion_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_accordion_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_accordion_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PagePrice/Price/price.scss":
/*!****************************************!*\
  !*** ./src/PagePrice/Price/price.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_price_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./price.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PagePrice/Price/price.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageVideoCurse/Form/KOOSForm.scss":
/*!***********************************************!*\
  !*** ./src/PageVideoCurse/Form/KOOSForm.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_KOOSForm_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./KOOSForm.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageVideoCurse/Form/KOOSForm.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_KOOSForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_KOOSForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_KOOSForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_KOOSForm_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageVideoCurse/Header/header-exer.scss":
/*!****************************************************!*\
  !*** ./src/PageVideoCurse/Header/header-exer.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_exer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./header-exer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageVideoCurse/Header/header-exer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_exer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_exer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_exer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_exer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/PageVideoCurse/VideoSlider/videoplayer.scss":
/*!*********************************************************!*\
  !*** ./src/PageVideoCurse/VideoSlider/videoplayer.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_videoplayer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./videoplayer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/PageVideoCurse/VideoSlider/videoplayer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_videoplayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_videoplayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_videoplayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_videoplayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/Button/button.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/button.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MethodItem/methodItem.scss":
/*!***************************************************!*\
  !*** ./src/components/MethodItem/methodItem.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_methodItem_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./methodItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/MethodItem/methodItem.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_methodItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_methodItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_methodItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_methodItem_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Navbar/menu.scss":
/*!*****************************************!*\
  !*** ./src/components/Navbar/menu.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Navbar/navbar.scss":
/*!*******************************************!*\
  !*** ./src/components/Navbar/navbar.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./navbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/navbar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Text/SubTitle/subtitle.scss":
/*!****************************************************!*\
  !*** ./src/components/Text/SubTitle/subtitle.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./subtitle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/SubTitle/subtitle.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Text/Title/title.scss":
/*!**********************************************!*\
  !*** ./src/components/Text/Title/title.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./title.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/Title/title.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/preloader/loader.scss":
/*!***********************************!*\
  !*** ./src/preloader/loader.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_loader_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../node_modules/sass-loader/dist/cjs.js!./loader.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/preloader/loader.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_loader_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_loader_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_loader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_loader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/img/About.png":
/*!***************************!*\
  !*** ./src/img/About.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8bbaa84cd7d19d9cd29c.png";

/***/ }),

/***/ "./src/img/Header-price.png":
/*!**********************************!*\
  !*** ./src/img/Header-price.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f5bb728023675949bcd0.png";

/***/ }),

/***/ "./src/img/Logo.svg":
/*!**************************!*\
  !*** ./src/img/Logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/eb97523d7891921befbf.svg";

/***/ }),

/***/ "./src/img/arrow.png":
/*!***************************!*\
  !*** ./src/img/arrow.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f913e634251b23cfbee1.png";

/***/ }),

/***/ "./src/img/complex.png":
/*!*****************************!*\
  !*** ./src/img/complex.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6f151d3deeee8c212f77.png";

/***/ }),

/***/ "./src/img/experience.png":
/*!********************************!*\
  !*** ./src/img/experience.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e411487eb62b916da099.png";

/***/ }),

/***/ "./src/img/facebook.svg":
/*!******************************!*\
  !*** ./src/img/facebook.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e21fdd88373c3c2e5be8.svg";

/***/ }),

/***/ "./src/img/feedback1.png":
/*!*******************************!*\
  !*** ./src/img/feedback1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/571a5fb977189ba0675d.png";

/***/ }),

/***/ "./src/img/feedback10.png":
/*!********************************!*\
  !*** ./src/img/feedback10.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/984b77af201c3410af48.png";

/***/ }),

/***/ "./src/img/feedback11.png":
/*!********************************!*\
  !*** ./src/img/feedback11.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a14e1a43a78e88193d68.png";

/***/ }),

/***/ "./src/img/feedback12.png":
/*!********************************!*\
  !*** ./src/img/feedback12.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c1d4b6a453cc5c643e7d.png";

/***/ }),

/***/ "./src/img/feedback13.png":
/*!********************************!*\
  !*** ./src/img/feedback13.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d253b6b79b4d8c8b03c5.png";

/***/ }),

/***/ "./src/img/feedback14.png":
/*!********************************!*\
  !*** ./src/img/feedback14.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/09a80f9a1eb387bb7a2c.png";

/***/ }),

/***/ "./src/img/feedback2.png":
/*!*******************************!*\
  !*** ./src/img/feedback2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cc44f0f63c165bbe19c0.png";

/***/ }),

/***/ "./src/img/feedback3.png":
/*!*******************************!*\
  !*** ./src/img/feedback3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d3b9824ba375c0ae8fdb.png";

/***/ }),

/***/ "./src/img/feedback4.png":
/*!*******************************!*\
  !*** ./src/img/feedback4.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/4fbc22cee3ba86b67392.png";

/***/ }),

/***/ "./src/img/feedback5.png":
/*!*******************************!*\
  !*** ./src/img/feedback5.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7511f31de74873749ad5.png";

/***/ }),

/***/ "./src/img/feedback6.png":
/*!*******************************!*\
  !*** ./src/img/feedback6.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/42f96d0d1f7e4b189913.png";

/***/ }),

/***/ "./src/img/feedback7.png":
/*!*******************************!*\
  !*** ./src/img/feedback7.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/807d041cffe534017929.png";

/***/ }),

/***/ "./src/img/feedback8.png":
/*!*******************************!*\
  !*** ./src/img/feedback8.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c53bcb47e7fec88f43c4.png";

/***/ }),

/***/ "./src/img/feedback9.png":
/*!*******************************!*\
  !*** ./src/img/feedback9.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/40682b9c5d5c57315911.png";

/***/ }),

/***/ "./src/img/first-seans.png":
/*!*********************************!*\
  !*** ./src/img/first-seans.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/22a16daea26fcc0a246f.png";

/***/ }),

/***/ "./src/img/header-exer-desc.png":
/*!**************************************!*\
  !*** ./src/img/header-exer-desc.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2a1eb46b29657372448c.png";

/***/ }),

/***/ "./src/img/header-online.png":
/*!***********************************!*\
  !*** ./src/img/header-online.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ea5004efa1b75cdedb6d.png";

/***/ }),

/***/ "./src/img/heder-price-desctop.png":
/*!*****************************************!*\
  !*** ./src/img/heder-price-desctop.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f272738c73f54c062889.png";

/***/ }),

/***/ "./src/img/individual.png":
/*!********************************!*\
  !*** ./src/img/individual.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fdce76e9d36d1041a1a2.png";

/***/ }),

/***/ "./src/img/instagram.svg":
/*!*******************************!*\
  !*** ./src/img/instagram.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5b3a03f85d2741db18a8.svg";

/***/ }),

/***/ "./src/img/kids-mass.png":
/*!*******************************!*\
  !*** ./src/img/kids-mass.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b483847f02b7fc899169.png";

/***/ }),

/***/ "./src/img/kids-massage.png":
/*!**********************************!*\
  !*** ./src/img/kids-massage.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cb393f8064be8c7559fe.png";

/***/ }),

/***/ "./src/img/kinezio.png":
/*!*****************************!*\
  !*** ./src/img/kinezio.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ea2824d84c41b732bffb.png";

/***/ }),

/***/ "./src/img/kineziotape.png":
/*!*********************************!*\
  !*** ./src/img/kineziotape.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ff3e9ca3ecfc18bcfc55.png";

/***/ }),

/***/ "./src/img/logo-favicon.png":
/*!**********************************!*\
  !*** ./src/img/logo-favicon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/118ebce631b99aa2a5f1.png";

/***/ }),

/***/ "./src/img/main-min.png":
/*!******************************!*\
  !*** ./src/img/main-min.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f69be0ce16fca613570c.png";

/***/ }),

/***/ "./src/img/malligan.png":
/*!******************************!*\
  !*** ./src/img/malligan.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f407de8354c3854d64d4.png";

/***/ }),

/***/ "./src/img/manual.png":
/*!****************************!*\
  !*** ./src/img/manual.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1f400905d7d1d9b2cf41.png";

/***/ }),

/***/ "./src/img/massage.png":
/*!*****************************!*\
  !*** ./src/img/massage.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cd71f4ea5290868a51a1.png";

/***/ }),

/***/ "./src/img/massage30.png":
/*!*******************************!*\
  !*** ./src/img/massage30.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ffac6395d82279aa3990.png";

/***/ }),

/***/ "./src/img/massage60.png":
/*!*******************************!*\
  !*** ./src/img/massage60.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b0a8c6536d41b5459952.png";

/***/ }),

/***/ "./src/img/mono.png":
/*!**************************!*\
  !*** ./src/img/mono.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3c4b2725d7fb9ef48ee9.png";

/***/ }),

/***/ "./src/img/onlineConsul.png":
/*!**********************************!*\
  !*** ./src/img/onlineConsul.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7fbcb16ec938e2265440.png";

/***/ }),

/***/ "./src/img/onlineRehab.png":
/*!*********************************!*\
  !*** ./src/img/onlineRehab.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7206372d29559efa8dd6.png";

/***/ }),

/***/ "./src/img/osteo.png":
/*!***************************!*\
  !*** ./src/img/osteo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/508184a840e73489e13a.png";

/***/ }),

/***/ "./src/img/pirm.png":
/*!**************************!*\
  !*** ./src/img/pirm.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0744db3b09bd767c3660.png";

/***/ }),

/***/ "./src/img/pnf.png":
/*!*************************!*\
  !*** ./src/img/pnf.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/467e345a16fb090bc38c.png";

/***/ }),

/***/ "./src/img/privat24.png":
/*!******************************!*\
  !*** ./src/img/privat24.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ccd1746395ea76745b65.png";

/***/ }),

/***/ "./src/img/rehab-kab.png":
/*!*******************************!*\
  !*** ./src/img/rehab-kab.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1e9bc07feb5f106d735f.png";

/***/ }),

/***/ "./src/img/rehab.png":
/*!***************************!*\
  !*** ./src/img/rehab.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a188993c053c17c18444.png";

/***/ }),

/***/ "./src/img/rehabHome.png":
/*!*******************************!*\
  !*** ./src/img/rehabHome.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a7bbc90f74e48149ae0d.png";

/***/ }),

/***/ "./src/img/result.png":
/*!****************************!*\
  !*** ./src/img/result.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1b7ed9e819f7db92ac35.png";

/***/ }),

/***/ "./src/img/stepFour.png":
/*!******************************!*\
  !*** ./src/img/stepFour.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/25e0a2efc639c220cd1d.png";

/***/ }),

/***/ "./src/img/stepOne.png":
/*!*****************************!*\
  !*** ./src/img/stepOne.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/be924c6ed37763eb3a69.png";

/***/ }),

/***/ "./src/img/stepThree.png":
/*!*******************************!*\
  !*** ./src/img/stepThree.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9d80a54d6666bc01f69b.png";

/***/ }),

/***/ "./src/img/stepTwo.png":
/*!*****************************!*\
  !*** ./src/img/stepTwo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fbc32b4719a34fcd0771.png";

/***/ }),

/***/ "./src/img/success.png":
/*!*****************************!*\
  !*** ./src/img/success.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a72e895330e9101d3dc1.png";

/***/ }),

/***/ "./src/img/telegram.svg":
/*!******************************!*\
  !*** ./src/img/telegram.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/14cbacdc8fcba2cee26a.svg";

/***/ }),

/***/ "./src/img/viber.svg":
/*!***************************!*\
  !*** ./src/img/viber.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e25c5d9a39f8b0e21a09.svg";

/***/ }),

/***/ "./src/img/youtube.svg":
/*!*****************************!*\
  !*** ./src/img/youtube.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/96e99ceb068430de8c2f.svg";

/***/ }),

/***/ "./src/img/yumeiho.png":
/*!*****************************!*\
  !*** ./src/img/yumeiho.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bf67380aeaff5de97255.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"scripts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_r"] = self["webpackChunkwebpack_r"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_react-icons_bi_index_esm_js-node_module-3895d9"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=scripts.ae1f961021e8fef2eedd.js.map