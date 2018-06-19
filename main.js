(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-main-nav></app-main-nav>\n\n  <router-outlet></router-outlet>\n\n<div class=\"navbar navbar-light navbar-footer bg-light text-center\">\n  <div class=\"col text-center\">\n    <p>&copy; 2018, Brewsoft, LLC</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico\");\n.responsive-image {\n  max-width: 100%; }\n.navbar-footer {\n  bottom: 0;\n  position: fixed;\n  width: 100%;\n  padding: 1em; }\n.navbar-footer p:last-child {\n    margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Brewsoft, LLC';
        this.resizeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AppComponent.prototype.OnInit = function () {
        this.resizeEvent.next(window);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _brew_ticker_brew_ticker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brew-ticker/brew-ticker.component */ "./src/app/brew-ticker/brew-ticker.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _brew_ticker_brew_ticker_component__WEBPACK_IMPORTED_MODULE_6__["BrewTickerComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__["MainNavComponent"],
                _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"],
                _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_9__["PanelHeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"], },
                    // { path: 'home', component: HomeComponent },
                    { path: '**', redirectTo: '' }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/brew-ticker/brew-ticker.component.html":
/*!********************************************************!*\
  !*** ./src/app/brew-ticker/brew-ticker.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"brew-ticker\">\n  <h1>\n    <span class=\"panel--header__left\">Brew</span>\n    <span class=\"panel--header__right\">{{ panelTitleRight }}</span>\n    <span class=\"panel--header__right panel--header__flasher animated infinite flash\">|</span>\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/brew-ticker/brew-ticker.component.scss":
/*!********************************************************!*\
  !*** ./src/app/brew-ticker/brew-ticker.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel--header__right {\n  color: #f7622c; }\n\n.panel--header__left {\n  margin-right: 10px; }\n\n.panel--header__flasher {\n  margin-left: -4px; }\n"

/***/ }),

/***/ "./src/app/brew-ticker/brew-ticker.component.ts":
/*!******************************************************!*\
  !*** ./src/app/brew-ticker/brew-ticker.component.ts ***!
  \******************************************************/
/*! exports provided: BrewTickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrewTickerComponent", function() { return BrewTickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var BrewTickerComponent = /** @class */ (function () {
    function BrewTickerComponent() {
        // backgroundImageUrl = 'assets/images/kevin-364843-unsplash.jpg';
        this.panelTitleRightList = [
            'Software.',
            'Ideas.',
            'Solutions.',
            'Innovations.',
        ];
        this.panelTitleRight = this.panelTitleRightList[0];
    }
    BrewTickerComponent.prototype.setPanelTitle = function (index) {
        var me = this;
        var newString = this.panelTitleRightList[index];
        var oldString = this.panelTitleRight;
        var oldStringLength = oldString.length;
        var newStringLength = newString.length;
        var i = 0;
        var j = newStringLength;
        return new Promise(function (resolve) {
            var timer = window.setInterval(function () {
                if (i < oldStringLength) {
                    me.panelTitleRight = oldString.substring(0, oldStringLength - i);
                    i++;
                }
                else if (j >= 0) {
                    me.panelTitleRight = newString.substring(0, newStringLength - j);
                    j--;
                }
                else {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    };
    BrewTickerComponent.prototype.panelTitleTimer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var index, me;
            return __generator(this, function (_a) {
                index = 1;
                me = this;
                setInterval(function () {
                    if (index === me.panelTitleRightList.length) {
                        index = 0;
                    }
                    me.setPanelTitle(index).then(function () {
                        index += 1;
                    });
                }, 5000);
                return [2 /*return*/];
            });
        });
    };
    BrewTickerComponent.prototype.ngOnInit = function () {
        this.panelTitleTimer();
    };
    BrewTickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brew-ticker',
            template: __webpack_require__(/*! ./brew-ticker.component.html */ "./src/app/brew-ticker/brew-ticker.component.html"),
            styles: [__webpack_require__(/*! ./brew-ticker.component.scss */ "./src/app/brew-ticker/brew-ticker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BrewTickerComponent);
    return BrewTickerComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-panel [windowHeight]=\"windowHeight\" [windowWidth]=\"windowWidth\" [backgroundImg]=\"'assets/images/hero-1.jpg'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n          <div class=\"jumbotron\">\n              <h1 class=\"display-4\">\n                <app-brew-ticker></app-brew-ticker>\n              </h1>\n              <p class=\"lead\">Brewsoft specializes in providing quality software solutions and consulting services</p>\n              <!-- <hr class=\"my-4\">\n              <p>To see some of the work we've done, check out the Brewsoft portfolio:</p>\n              <p class=\"lead\">\n                <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n              </p> -->\n            </div>\n<!-- \n        <app-panel-header>\n          <app-brew-ticker></app-brew-ticker>\n        </app-panel-header> -->\n      </div>\n    </div>\n  </div>\n</app-panel>\n\n<app-panel [windowHeight]=\"windowHeight\" [windowWidth]=\"windowWidth\" [backgroundImg]=\"'assets/images/hero-2.jpg'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <app-panel-header>\n            We Brew <span class=\"accent-color\">Software.</span>\n        </app-panel-header>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2 col-md-4\">\n        <div class=\"skill-card\">\n          <div class=\"skill-card__icon\">\n            <mat-icon>phonelink</mat-icon>\n          </div>\n          <div class=\"skill-card__content\">\n            <div class=\"skill-card__content-title\">\n              Web Development\n            </div>\n            <div class=\"skill-card__content-body\">\n              With extensive experience in mobile and desktop browsing experience, we're ready to tackle whatever development needs you have\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-2 col-md-4\">\n        <div class=\"skill-card\">\n          <div class=\"skill-card__icon\">\n            <mat-icon>cloud</mat-icon>\n          </div>\n          <div class=\"skill-card__content\">\n            <div class=\"skill-card__content-title\">\n                Cloud Apps\n            </div>\n            <div class=\"skill-card__content-body\">\n                Brewsoft specializes in cloud application development, freeing clients of the cumbersome nature of hosting apps in house\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-2 col-md-4\">\n        <div class=\"skill-card\">\n          <div class=\"skill-card__icon\">\n            <mat-icon>dashboard</mat-icon>\n          </div>\n          <div class=\"skill-card__content\">\n            <div class=\"skill-card__content-title\">\n                User Experience\n            </div>\n            <div class=\"skill-card__content-body\">\n                We believe that apps should be intuitive and effective for users, and excel at designing apps with that in mind\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-panel>\n\n<app-panel [windowHeight]=\"windowHeight\" [windowWidth]=\"windowWidth\" [backgroundImg]=\"'assets/images/hero-3.jpg'\">\n  <div class=\"conatiner\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <app-panel-header>\n          We Brew in <span class=\"accent-color\">Many Different Languages and Frameworks.</span> \n        </app-panel-header>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div *ngFor=\"let language of languages\" class=\"col-6 col-sm-4 col-md-3 text-center\">\n        <div class=\"language-tile\">\n            {{ language }}\n        </div>\n      </div>\n    </div>\n  </div>\n</app-panel>\n\n<app-panel [windowHeight]=\"windowHeight\" [windowWidth]=\"windowWidth\" [backgroundImg]=\"'assets/images/hero-4.jpg'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <app-panel-header>\n            We Brew <span class=\"accent-color\">Results.</span>\n        </app-panel-header>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2 col-md-4\">\n        <div class=\"skill-card\">\n          <div class=\"skill-card__icon\">\n            <mat-icon>supervisor_account</mat-icon>\n          </div>\n          <div class=\"skill-card__content\">\n            <div class=\"skill-card__content-title\">\n                Project Management\n            </div>\n            <div class=\"skill-card__content-body\">\n              We can help manage your projects throughout the entire project lifecycle, using PMI traditional and agile methodologies \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-2 col-md-4\">\n        <div class=\"skill-card\">\n          <div class=\"skill-card__icon\">\n            <mat-icon>repeat</mat-icon>\n          </div>\n          <div class=\"skill-card__content\">\n            <div class=\"skill-card__content-title\">\n              Process Optimization\n            </div>\n            <div class=\"skill-card__content-body\">\n              Time is money, and we can analyze software and business processes to help make sure things run effectively \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-2 col-md-4\">\n        <div class=\"skill-card\">\n          <div class=\"skill-card__icon\">\n            <mat-icon>description</mat-icon>\n          </div>\n          <div class=\"skill-card__content\">\n            <div class=\"skill-card__content-title\">\n                Professional Documents \n            </div>\n            <div class=\"skill-card__content-body\">\n              We want to make your content shine, from new marketing collateral to handouts for an important meeting and everything in between\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-panel>\n\n<app-panel [windowHeight]=\"windowHeight\" [windowWidth]=\"windowWidth\" [backgroundImg]=\"'assets/images/hero-5.jpg'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n          <div class=\"jumbotron\">\n              <h1 class=\"display-4\">\n                We Brew <span class=\"accent-color\">For You.</span>\n              </h1>\n              <p>Brewsoft specializes in solving problems, plain and simple.  If we can't do it in-house, we'll use our ever-growing network of professionals and consultants to get the right people to get the job done.</p>\n              <p>Get in touch to discuss your needs today:</p>\n              <p class=\"lead\">\n                <a class=\"btn btn-primary btn-lg\" href=\"mailto:contact@brewsoft.io\" role=\"button\">Contact@Brewsoft.io</a>\n              </p>\n              <p>\n                  <img class=\"responsive-image\" src=\"assets/BrewsoftLogo_v2_withoutBackground_withText.png\" style=\"max-width: 18em;\" alt=\"\">\n              </p>\n            </div>\n<!-- \n        <app-panel-header>\n          <app-brew-ticker></app-brew-ticker>\n        </app-panel-header> -->\n      </div>\n    </div>\n  </div>\n</app-panel>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  border-radius: 0;\n  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));\n  margin-top: 4em;\n  text-align: center; }\n\n.btn {\n  border-radius: 0; }\n\n.accent-color {\n  color: #f7622c; }\n\n::ng-deep .skill-card {\n  text-align: center;\n  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));\n  padding: 2em; }\n\n::ng-deep .skill-card .skill-card__icon .material-icons {\n    font-size: 5em;\n    color: #f7622c; }\n\n::ng-deep .skill-card .skill-card__icon .mat-icon {\n    height: 1em;\n    width: 2em; }\n\n::ng-deep .skill-card .skill-card__content .skill-card__content-title {\n    font-size: 2em;\n    color: #f7622c;\n    font-weight: 600; }\n\n.language-tile {\n  padding: 1em;\n  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));\n  margin: 1em; }\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.languages = [
            'Typescript',
            'JavaScript',
            'C#',
            'CSS, SASS & LESS',
            'Liquid',
            'VB',
            'PLSQL (Oracle)',
            'TSQL (SQL Server)',
            'Python',
            'MySQL',
            'MongoDB',
            'AngularJS (2.x & legacy)',
            'Angular Material',
            '.NET Core',
            'JQuery',
            'Shopify Timber',
            'Bootstrap',
            'Bourbon',
            'Neat',
            'Django',
            'Node.JS',
            'Docker',
            'Grunt',
            // 'Adobe Photoshop & Lightroom',
            'Gulp',
        ];
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        // this.resizeEvent.subscribe(event => {
        //   this.windowHeight = event.innerHeight;
        //   this.windowWidth = event.innerWidth;
        // });
    };
    HomePageComponent.prototype.onResize = function (event) {
        var window = event.target;
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], HomePageComponent.prototype, "onResize", null);
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg sticky-top navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/BrewsoftLogo_v2_withoutBackground.png\" alt=\"\">\n        Brewsoft\n      </a>    \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"\">Home<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/portfolio\">Portfolio</a>\n        </li> -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://github.com/Brewsoft\" target=\"_blank\">GitHub</a>\n        </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  font-family: 'Pacifico', cursive;\n  font-size: 3em; }\n  .navbar-brand img {\n    width: 2em;\n    height: 2em; }\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavComponent = /** @class */ (function () {
    function MainNavComponent() {
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/main-nav/main-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/panel-header/panel-header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/panel-header/panel-header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel--header text-center\">\n  <h1>\n    <ng-content></ng-content>\n  </h1>\n</div>"

/***/ }),

/***/ "./src/app/panel-header/panel-header.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/panel-header/panel-header.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel--header {\n  padding: 10em 1em 2em 1em;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/panel-header/panel-header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/panel-header/panel-header.component.ts ***!
  \********************************************************/
/*! exports provided: PanelHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHeaderComponent", function() { return PanelHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelHeaderComponent = /** @class */ (function () {
    function PanelHeaderComponent() {
    }
    PanelHeaderComponent.prototype.ngOnInit = function () {
    };
    PanelHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panel-header',
            template: __webpack_require__(/*! ./panel-header.component.html */ "./src/app/panel-header/panel-header.component.html"),
            styles: [__webpack_require__(/*! ./panel-header.component.scss */ "./src/app/panel-header/panel-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelHeaderComponent);
    return PanelHeaderComponent;
}());



/***/ }),

/***/ "./src/app/panel/panel.component.html":
/*!********************************************!*\
  !*** ./src/app/panel/panel.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\" [ngStyle]=\"{ 'min-height': windowHeight - 122 + 'px', 'width': windowWidth + 'px', 'background': 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255,255,255, 0.6)), url(' + backgroundImg + ') no-repeat center center, fixed', 'background-size': 'cover' }\">\n  <div class=\"fluid-container\">\n      <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/panel/panel.component.scss":
/*!********************************************!*\
  !*** ./src/app/panel/panel.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PanelComponent.prototype, "windowHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PanelComponent.prototype, "windowWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "backgroundImg", void 0);
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/app/panel/panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kmjugersen/Projects/brewsoft-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map