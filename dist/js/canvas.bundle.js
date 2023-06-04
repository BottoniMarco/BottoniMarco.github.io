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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/Asset 8.png":
/*!*****************************!*\
  !*** ./src/img/Asset 8.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b3aa662c1c1c7586142c9e0aa4912e7d.png");

/***/ }),

/***/ "./src/img/answer 1.png":
/*!******************************!*\
  !*** ./src/img/answer 1.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a3e132474163a1a35dbb580ae02300d6.png");

/***/ }),

/***/ "./src/img/answer_2.png":
/*!******************************!*\
  !*** ./src/img/answer_2.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ef5edee53c601499a5f5cde11243ef4e.png");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_Asset_8_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../img/Asset 8.png */ "./src/img/Asset 8.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_answer_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../img/answer 1.png */ "./src/img/answer 1.png");
/* harmony import */ var _img_answer_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../img/answer_2.png */ "./src/img/answer_2.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var openModalBtn = document.querySelector(".btn-open");
var closeModalBtn = document.querySelector(".btn-close");

var openModal = function openModal() {
  modal.classList.remove("hidden");
  reading = true;
};

var closeModal = function closeModal() {
  modal.classList.add("hidden");
  reading = false;
  scrollOffset += 51;
}; // document.addEventListener("keydown", function (e) {
//     if (e.keyCode === 68 || 83 ||65 && !modal.classList.contains("hidden")) {
//         closeModal();
//     }
//   });


closeModalBtn.addEventListener("click", function (e) {
  if (!modal.classList.contains("hidden")) {
    closeModal();
  }
});
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 676;
var gravity = 1;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 7;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) {
        this.frames = 0;
      } else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) {
        this.frames = 0;
      }

      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var answers = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;
var reading = false;

function init() {
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width * 6 + 200 - platformSmallTallImage.width - 5,
    y: 380,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 6 + 200 - 5,
    y: 380,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 6,
    y: 480,
    image: createImage(_img_answer_1_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Platform({
    x: platformImage.width * 6,
    y: 280,
    image: createImage(_img_answer_2_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  }), new Platform({
    x: platformImage.width * 10 + 200 - 5,
    y: 380,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 11 + 200 - platformSmallTallImage.width - 5,
    y: 380,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 11 + 200 - 5,
    y: 380,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 11,
    y: 480,
    image: createImage(_img_answer_1_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Platform({
    x: platformImage.width * 11,
    y: 280,
    image: createImage(_img_answer_2_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  }), new Platform({
    x: platformImage.width * 20 - 5,
    y: 380,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 20 - platformSmallTallImage.width - 5,
    y: 380,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 20 + platformSmallTallImage.width - 5,
    y: 380,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 20 - 5,
    y: 380,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 20,
    y: 480,
    image: createImage(_img_answer_1_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Platform({
    x: platformImage.width * 20,
    y: 280,
    image: createImage(_img_answer_2_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  }), new Platform({
    x: -5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 10 + 400,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 200 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7 + 300 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 9 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 10 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 11 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 12 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 13 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 14 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 15 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 16 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 17 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 18 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 19 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 20 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 21 + 400 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 22 + 250 - 5,
    y: 570,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 23 - 5,
    y: 570,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: +25,
    image: createImage(_img_Asset_8_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
}

function animate() {
  console.log("reading", reading);
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (reading == true) {
    player.velocity.x = 0;
  } else {
    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = player.speed;
    } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
      player.velocity.x = -player.speed;
    } else {
      player.velocity.x = 0;

      if (keys.right.pressed) {
        scrollOffset += player.speed;
        platforms.forEach(function (platform) {
          platform.position.x -= player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x -= player.speed * 0.66;
        });
      } else if (keys.left.pressed && scrollOffset > 0) {
        scrollOffset -= player.speed;
        platforms.forEach(function (platform) {
          platform.position.x += player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x += player.speed * 0.66;
        });
      }
    }
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // sprite switch

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  console.log(scrollOffset); // win condition

  if (scrollOffset > platformImage.width * 22 + 500) {
    console.log("you win");
    init();
  }

  if (scrollOffset === 0 || scrollOffset > 1700 && scrollOffset < 1750 || scrollOffset > 4600 && scrollOffset < 4650 || scrollOffset > 6650 && scrollOffset < 6700 && reading == false) {
    console.log("question");
    openModal();
  }

  if (scrollOffset > platformImage.width * 5 && scrollOffset < platformImage.width * 6 && reading == false) {
    c.font = "30px Arial";
    c.fillText("Hello World", platformImage.width * 5, 200);
  } // lose condition


  if (player.position.y > canvas.height) {
    init();
  }
}

init();
animate();
addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 83:
      break;

    case 68:
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 87:
      player.velocity.y -= 25;
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;

    case 83:
      break;

    case 68:
      keys.right.pressed = false;
      break;

    case 87:
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map