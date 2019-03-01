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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-popup/login-popup.component */ "./src/app/login-popup/login-popup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.guard.service */ "./src/app/services/auth.guard.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Services







var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'login-popup',
        component: _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_4__["LoginPopupComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'card',
        component: _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_4__["LoginPopupComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"] //required for toastr
            ],
            providers: [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container {\n  font-family: 'Roboto', sans-serif;\n}\n\n.profile-container h1 {\n  font-size: 24px;\n  color: #7C55FB;\n  font-weight: bold;\n  line-height: 32px;\n  letter-spacing: 1.2px;\n  text-align: center;\n  margin-top: 82px;\n  text-transform: uppercase;\n}\n\n.profile-fields-container {\n  max-width: 740px;\n  min-height: 500px;\n  margin: 0 auto;\n  border: 1px solid #ccc;\n  box-shadow: #ccc 1px 1px 4px;\n  position: relative;\n}\n\n.profile-fields-container .profile-image-container {\n  height: 200px;\n  width: 100%;\n  background-size: cover !important;\n  background: url('/assets/images/Solid_Pattern.png');\n}\n\n.profile-fields-container .profile-image-container img {\n  height: 128px;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right:auto;\n  position: relative;\n  top:40px;\n  display: block;\n}\n\n.profile-fields-container i {\n  font-size: 14px;\n  color: #89969F;\n  padding-left: 26px;\n  padding-right: 10px;\n  margin-top: 24px;\n}\n\n.profile-fields-container input[type=text].field-text {\n  height: 12px;\n  width: 280px;\n  border: 1px solid #89969F;\n  border-radius: 4px;\n  padding: 10px;\n}\n\n.profile-fields-container input[type=text].field-text::-webkit-input-placeholder {\n  color: rgba(102,102,102,0.2);\n}\n\n.profile-fields-container input[type=text].field-text:-ms-input-placeholder {\n  color: rgba(102,102,102,0.2);\n}\n\n.profile-fields-container input[type=text].field-text::-ms-input-placeholder {\n  color: rgba(102,102,102,0.2);\n}\n\n.profile-fields-container input[type=text].field-text::placeholder {\n  color: rgba(102,102,102,0.2);\n}\n\n.profile-save-button-container {\n  display: flex;\n  align-items: center;\n  margin-bottom: auto;\n  height: 100px;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.profile-save-button {\n  background-color: #7C55FB;\n  margin-left: auto;\n  margin-right: auto;\n  width: 280px;\n}\n\n.profile-save-button:disabled {\n  background-color: #F0EEEB;\n  border-color: #F0EEEB;\n  cursor: not-allowed;\n}\n\n.topnav {\n  position:absolute;\n  top:0;\n  left:0;\n  width: 100%;\n  background-color: #7C4DFF;\n  height: 50px;\n  color: #fff;\n}\n\n.topnav .logo {\n  display: inline-block;\n  font-family: 'Roboto Slab', serif;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n  line-height: 32px;\n  padding-right: 80px;\n  position: relative;\n  top: -8px;\n  left: 28px;\n}\n\n.topnav .menu-item {\n  display: inline-block;\n  font-size: 10px;\n  line-height: 13px;\n  width: 100px;\n  height: 100%;\n  text-align: center;\n}\n\n.topnav .menu-item i {\n  font-size: 24px;\n  margin-top:8px;\n  margin-bottom: 2px;\n}\n\n.topnav .profile-menu {\n  float: right;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  background-color: rgba(0,0,0,0.25);\n}\n\n.topnav .profile-menu img {\n  display: block;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-top:10px;\n  cursor: pointer;\n}\n\n.loading-image {\n  text-align: center;\n  margin-top: 50px;\n}\n"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\n  <!-- EXAMPLE TOP NAV -->\n  <div class=\"topnav\">\n    <div class=\"logo\">Solid</div>\n    <div class=\"menu-item\">\n      <div>\n        <i class=\"far fa-compass\"></i>\n      </div>\n      Menu Item 1\n    </div>\n    <div class=\"menu-item\">\n      <div>\n        <i class=\"far fa-comment\"></i>\n      </div>\n      Menu Item 2\n    </div>\n    <div class=\"menu-item\">\n      <div>\n        <i class=\"fas fa-sliders-h\"></i>\n      </div>\n      Menu Item 3\n    </div>\n\n    <div class=\"profile-menu\" (click)=\"logout()\">\n      <img [src]=\"profileImage\" />\n    </div>\n  </div>\n  <h1>Profile</h1>\n\n  <!-- LOADING IMAGE -->\n  <div class=\"loading-image\" *ngIf=\"loadingProfile\">\n    <i class=\"fas fa-circle-notch fa-4x fa-spin\"></i>\n  </div>\n\n  <!-- MAIN PROFILE -->\n  <div class=\"profile-fields-container\" *ngIf=\"!loadingProfile\">\n    <div class=\"profile-image-container\">\n      <img [src]=\"profileImage\" />\n    </div>\n    <form style=\"padding-top: 26px;\" #f=\"ngForm\" (submit)=\"onSubmit()\">\n      <div class=\"fields pure-g\">\n        <!-- NAME -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-user\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"fn\" placeholder=\"NAME\" [(ngModel)]=\"profile.fn\" />\n        </div>\n\n        <!-- PHONE -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-phone\"></i><input type=\"text\" class=\"field-text form-control\" name=\"phone\" placeholder=\"PHONE\" [(ngModel)]=\"profile.phone\" />\n        </div>\n      </div>\n\n      <div class=\"fields pure-g\">\n        <!-- ROLE -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-user-astronaut\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"role\" placeholder=\"ROLE\" [(ngModel)]=\"profile.role\" />\n        </div>\n\n        <!-- EMAIL -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-envelope\"></i><input type=\"text\" class=\"field-text form-control\" name=\"email\" placeholder=\"EMAIL\" [(ngModel)]=\"profile.email\" />\n        </div>\n      </div>\n\n      <div class=\"fields pure-g\">\n        <!-- ORGANIZATION -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-building\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"company\" placeholder=\"ORGANIZATION\" [(ngModel)]=\"profile.company\" />\n        </div>\n\n        <!-- ADDRESS -->\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\n          <i class=\"fas fa-map-marker-alt\" style=\"width: 12px; margin-left: 2px;\"></i><input type=\"text\" class=\"field-text form-control\" name=\"address\" placeholder=\"ADDRESS\" [(ngModel)]=\"profile.address.street\" />\n        </div>\n      </div>\n\n      <div class=\"profile-save-button-container\">\n        <button type=\"submit\" class=\"wide-button profile-save-button\" [disabled]=\"!cardForm || cardForm.pristine\">Save</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_rdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rdf.service */ "./src/app/services/rdf.service.ts");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
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





var CardComponent = /** @class */ (function () {
    function CardComponent(rdf, route, auth) {
        this.rdf = rdf;
        this.route = route;
        this.auth = auth;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.loadingProfile = true;
        this.loadProfile();
        // Clear cached profile data
        // TODO: Remove this code and find a better way to get the old data
        localStorage.removeItem('oldProfileData');
    };
    // Loads the profile from the rdf service and handles the response
    CardComponent.prototype.loadProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var profile, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.loadingProfile = true;
                        return [4 /*yield*/, this.rdf.getProfile()];
                    case 1:
                        profile = _a.sent();
                        if (profile) {
                            this.profile = profile;
                            this.auth.saveOldUserData(profile);
                        }
                        this.loadingProfile = false;
                        this.setupProfileData();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Submits the form, and saves the profile data using the auth/rdf service
    CardComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.cardForm.invalid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rdf.updateProfile(this.cardForm)];
                    case 2:
                        _a.sent();
                        localStorage.setItem('oldProfileData', JSON.stringify(this.profile));
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log("Error: " + err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Format data coming back from server. Intended purpose is to replace profile image with default if it's missing
    // and potentially format the address if we need to reformat it for this UI
    CardComponent.prototype.setupProfileData = function () {
        if (this.profile) {
            this.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
        }
        else {
            this.profileImage = '/assets/images/profile.png';
        }
    };
    // Example of logout functionality. Normally wouldn't be triggered by clicking the profile picture.
    CardComponent.prototype.logout = function () {
        this.auth.solidSignOut();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], CardComponent.prototype, "cardForm", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")],
        }),
        __metadata("design:paramtypes", [_services_rdf_service__WEBPACK_IMPORTED_MODULE_3__["RdfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n  <p>Your webId is {{ session.webId }}</p>\n  <ul>\n    <li><a [routerLink]=\"['/card']\">Profile</a></li>\n    <li><a (click)=\"onSignOut()\">Signout</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
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


// import { currentSession } from 'solid-auth-client';
// Services

var Session = /** @class */ (function () {
    function Session() {
    }
    return Session;
}());
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, route) {
        var _this = this;
        this.auth = auth;
        this.route = route;
        this.session = new Session();
        this.loadSession = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        this.onSignOut = function () {
            _this.auth.solidSignOut();
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('hello');
        this.loadSession();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login-popup/login-popup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\">Loading...</div>\n\n\n"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.ts ***!
  \******************************************************/
/*! exports provided: LoginPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPopupComponent", function() { return LoginPopupComponent; });
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

var LoginPopupComponent = /** @class */ (function () {
    function LoginPopupComponent(elementRef) {
        this.elementRef = elementRef;
    }
    LoginPopupComponent.prototype.ngOnInit = function () {
        this.runScript();
    };
    LoginPopupComponent.prototype.runScript = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = '/assets/js/libs/popup.js';
        this.elementRef.nativeElement.appendChild(s);
        // s.onload = () => this.triggerDuo();
    };
    LoginPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-popup',
            template: __webpack_require__(/*! ./login-popup.component.html */ "./src/app/login-popup/login-popup.component.html"),
            styles: [__webpack_require__(/*! ./login-popup.component.css */ "./src/app/login-popup/login-popup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LoginPopupComponent);
    return LoginPopupComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.login-page {\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n  color: #666;\n}\n\n.login-page h1 {\n  font-size: 38px;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n  letter-spacing: 1.9px;\n  padding-top: 12px;\n  margin-top: 0px;\n}\n\n.login-page h2 {\n  color: #666;\n\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  line-height: 21px;\n  margin-top: 48px;\n}\n\n.login-page .small-link {\n  font-size: 12px;\n  color: #666;\n  letter-spacing: 0.75px;\n  line-height: 16px;\n}\n\n.login-page .registration-link {\n  margin-top: 38px;\n}\n\n.login-page .registration-link p {\n  font-size: 16px;\n  color: #666;\n  letter-spacing: 1px;\n}\n\n.login-page .item-divider {\n  box-sizing:border-box;\n  height: 1px;\n  width: 354px;\n  border-bottom: 1px solid #E0E0E0;\n  position: absolute;\n  bottom:-8px; left:-9px;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\n  <!-- APP LOGO -->\n  <div style=\"margin-top:60px;\">\n    <i class=\"fas fa-user-circle\" style=\"font-size: 64px;\"></i>\n  </div>\n\n  <!-- APP NAME -->\n  <h1>\n    Profile Demo App\n  </h1>\n\n  <!-- LOGIN TITLE -->\n  <h2>\n    Login with Solid Identity\n  </h2>\n\n  <!-- PROVIDER SELECTION -->\n  <div style=\"margin-top: 10px;\">\n    <ng-select class=\"login-select\"\n               bindLabel=\"name\"\n               bindValue=\"loginUrl\"\n               placeholder=\"Select ID Provider\"\n               dropdownPosition=\"bottom\"\n               [items]=\"identityProviders\"\n               [(ngModel)]=\"selectedProviderUrl\"\n               style=\"width: 360px; height: 48px; margin-left: auto; margin-right: auto;\">\n\n      <!-- DROPDOWN TEMPLATE -->\n      <ng-template ng-option-tmp let-item=\"item\">\n        <div style=\"height:40px; padding-top:10px; position: relative;\">\n          <img [src]=\"item.image\" style=\"float: left; height: 32px; width: 32px; margin-top:-5px;\" />\n          <span style=\"float: left; margin-left: 10px;\">{{ item.name }}</span>\n          <div style=\"clear: both;\"></div>\n          <div class=\"item-divider\"></div>\n        </div>\n      </ng-template>\n\n    </ng-select>\n    <input type=\"text\"\n           class=\"wide-text\"\n           *ngIf=\"selectedProviderUrl===null\"\n           placeholder=\"Enter WebID\"\n           style=\"margin-top:10px; padding: 12px 10px; width: 340px; height: 16px; display: block; margin-left: auto; margin-right: auto;\"\n           [(ngModel)]=\"customProviderUrl\" />\n    <button class=\"wide-button\" (click)=\"onLogin()\" *ngIf=\"selectedProviderUrl !== undefined || customProviderUrl !== undefined\" [disabled]=\"selectedProviderUrl===null && !customProviderUrl\" style=\"margin-top:10px;\">Go</button>\n  </div>\n\n  <!-- REGISTRATION -->\n  <div class=\"registration-link\">\n    <p style=\"margin: 12px;\">Don't have a Solid Identity?</p>\n    <button class=\"wide-button\" (click)=\"goToRegistration()\">Register</button>\n  </div>\n\n  <!-- HELP -->\n  <div style=\"margin-top: 48px;\">\n    <a href=\"https://solid.mit.edu\" target=\"_blank\" class=\"small-link\">\n      <i class=\"fas fa-info-circle\"></i> What is a Solid Identity?\n    </a>\n  </div>\n\n</div>\n  \n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
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


// Auth Service

var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        /*
        *  Alternate login-popup function for Solid. See service for more details.
        */
        this.onLoginPopup = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.auth.solidLoginPopup();
                return [2 /*return*/];
            });
        }); };
        this.onLogin = function () { return __awaiter(_this, void 0, void 0, function () {
            var idp;
            return __generator(this, function (_a) {
                idp = this.selectedProviderUrl ? this.selectedProviderUrl : this.customProviderUrl;
                if (idp) {
                    try {
                        this.auth.solidLogin(idp);
                    }
                    catch (err) {
                        console.log('An error has occurred logging in: ' + err);
                    }
                }
                return [2 /*return*/];
            });
        }); };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // If we're authenticated, go to profile
        if (localStorage.getItem('solid-auth-client')) {
            this.router.navigateByUrl('/card');
        }
        this.identityProviders = this.auth.getIdentityProviders();
    };
    LoginComponent.prototype.goToRegistration = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration {\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n}\n\n.registration .header-bar {\n  margin: 0px;\n  height: 44px;\n  width: calc(100% + 16px);\n  background-color: #3D6DEB;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.registration .header-bar p {\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1px;\n  line-height: 15px;\n}\n\n.registration .header-text {\n  margin-top:92px;\n  width: 360px;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 14px;\n  color: #666;\n}\n\n.registration .header-text a {\n  color: #666;\n  font-size: 12px;\n}\n\n.registration .provider-card-container {\n  margin-top: 28px;\n}\n\n.registration .provider-card {\n  height: 140px;\n  width: 320px;\n  border: 1px solid #DAE0E6;\n  border-radius: 2px;\n  background-color: #fff;\n  margin: 10px;\n  display: inline-block;\n  box-shadow: #DAE0E6 1px 1px 6px;\n}\n\n.registration .provider-card .provider-logo {\n  height: 44px;\n  width: 44px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 16px;\n}\n\n.registration .provider-card h2 {\n  color: #656E75;\n  font-size: 18px;\n  margin-top: -2px;\n  letter-spacing: 0.9px;\n  line-height: 24px;\n}\n\n.registration .provider-card p {\n  color: #656E75;\n  font-size: 12px;\n  line-height: 16px;\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration\">\n  <!-- Header Bar -->\n  <div class=\"header-bar\">\n    <p>Select Solid Identity Provider</p>\n  </div>\n\n  <!-- Header Text -->\n  <div class=\"header-text\">\n    <p>\n      With a Solid Identity your personal data is stored securely in a POD. You control who has access to it.\n    </p>\n    <a href=\"https://solid.mit.edu\" target=\"_blank\">\n      Learn more about Solid IDs and PODs\n    </a>\n  </div>\n\n  <!-- Provider cards -->\n  <div class=\"provider-card-container\">\n    <div class=\"provider-card\" *ngFor=\"let provider of availableProviders\">\n      <img [src]=\"provider.image\" class=\"provider-logo\">\n      <h2>{{ provider.name }}</h2>\n      <p>{{ provider.desc }}</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_solid_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth) {
        this.auth = auth;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.availableProviders = this.auth.getIdentityProviders();
        this.availableProviders = this.availableProviders.filter(function (idp) { return idp.providerLoginUrl !== null; });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_solid_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth.guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solid.auth.service */ "./src/app/services/solid.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var isLoggedIn = localStorage.getItem('solid-auth-client') ? true : false;
        if (!isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        return isLoggedIn; /* this.auth.session.pipe(
          take(1),
          map(session => !!session),
          tap(loggedIn => {
            if (!loggedIn) {
              return this.router.navigate(['/']);
            }
          })
        );*/
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/rdf.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/rdf.service.ts ***!
  \*****************************************/
/*! exports provided: RdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdfService", function() { return RdfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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


var VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
var FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
/**
 * A service layer for RDF data manipulation using rdflib.js
 * @see https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
 */
var RdfService = /** @class */ (function () {
    function RdfService(toastr) {
        var _this = this;
        this.toastr = toastr;
        this.store = $rdf.graph();
        /**
         * A helper object that connects to the web, loads data, and saves it back. More powerful than using a simple
         * store object.
         * When you have a fetcher, then you also can ask the query engine to go fetch new linked data automatically
         * as your query makes its way across the web.
         * @see http://linkeddata.github.io/rdflib.js/doc/Fetcher.html
         */
        this.fetcher = $rdf.Fetcher;
        /**
         * The UpdateManager allows you to send small changes to the server to “patch” the data as your user changes data in
         * real time. It also allows you to subscribe to changes other people make to the same file, keeping track of
         * upstream and downstream changes, and signaling any conflict between them.
         * @see http://linkeddata.github.io/rdflib.js/doc/UpdateManager.html
         */
        this.updateManager = $rdf.UpdateManager;
        /**
         * Fetches the session from Solid, and store results in localStorage
         */
        this.getSession = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, solid.auth.currentSession(localStorage)];
                    case 1:
                        _a.session = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Gets a node that matches the specified pattern using the VCARD onthology
         *
         * any() can take a subject and a predicate to find Any one person identified by the webId
         * that matches against the node/predicated
         *
         * @param {string} node VCARD predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         * @see https://github.com/solid/solid-tutorial-rdflib.js
         */
        this.getValueFromVcard = function (node, webId) {
            return _this.getValueFromNamespace(node, VCARD, webId);
        };
        /**
         * Gets a node that matches the specified pattern using the FOAF onthology
         * @param {string} node FOAF predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         */
        this.getValueFromFoaf = function (node, webId) {
            return _this.getValueFromNamespace(node, FOAF, webId);
        };
        this.transformDataForm = function (form, me, doc) {
            var insertions = [];
            var deletions = [];
            var fields = Object.keys(form.value);
            var oldProfileData = JSON.parse(localStorage.getItem('oldProfileData')) || {};
            // We need to split out into three code paths here:
            // 1. There is an old value and a new value. This is the update path
            // 2. There is no old value and a new value. This is the insert path
            // 3. There is an old value and no new value. Ths is the delete path
            // These are separate codepaths because the system needs to know what to do in each case
            fields.map(function (field) {
                var predicate = VCARD(_this.getFieldName(field));
                var subject = _this.getUriForField(field, me);
                var why = doc;
                var fieldValue = _this.getFieldValue(form, field);
                var oldFieldValue = _this.getOldFieldValue(field, oldProfileData);
                // if there's no existing home phone number or email address, we need to add one, then add the link for hasTelephone or hasEmail
                if (!oldFieldValue && fieldValue && (field === 'phone' || field === 'email')) {
                    _this.addNewLinkedField(field, insertions, predicate, fieldValue, why, me);
                }
                else {
                    //Add a value to be updated
                    if (oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                        deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                        insertions.push($rdf.st(subject, predicate, fieldValue, why));
                    }
                    else if (oldProfileData[field] && !form.value[field] && !form.controls[field].pristine) {
                        deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                    }
                    else if (!oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                        insertions.push($rdf.st(subject, predicate, fieldValue, why));
                    }
                }
            });
            return {
                insertions: insertions,
                deletions: deletions
            };
        };
        this.updateProfile = function (form) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var me, doc, data;
            return __generator(this, function (_a) {
                me = $rdf.sym(this.session.webId);
                doc = $rdf.NamedNode.fromValue(this.session.webId.split('#')[0]);
                data = this.transformDataForm(form, me, doc);
                //Update existing values
                if (data.insertions.length > 0 || data.deletions.length > 0) {
                    this.updateManager.update(data.deletions, data.insertions, function (response, success, message) {
                        if (success) {
                            _this.toastr.success('Your Solid profile has been successfully updated', 'Success!');
                            form.form.markAsPristine();
                            form.form.markAsTouched();
                        }
                        else {
                            _this.toastr.error('Message: ' + message, 'An error has occurred');
                        }
                    });
                }
                return [2 /*return*/];
            });
        }); };
        this.getAddress = function () {
            var linkedUri = _this.getValueFromVcard('hasAddress');
            if (linkedUri) {
                return {
                    locality: _this.getValueFromVcard('locality', linkedUri),
                    country_name: _this.getValueFromVcard('country-name', linkedUri),
                    region: _this.getValueFromVcard('region', linkedUri),
                    street: _this.getValueFromVcard('street-address', linkedUri),
                };
            }
            return {};
        };
        //Function to get email. This returns only the first email, which is temporary
        this.getEmail = function () {
            var linkedUri = _this.getValueFromVcard('hasEmail');
            if (linkedUri) {
                return _this.getValueFromVcard('value', linkedUri).split('mailto:')[1];
            }
            return '';
        };
        //Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
        this.getPhone = function () {
            var linkedUri = _this.getValueFromVcard('hasTelephone');
            if (linkedUri) {
                return _this.getValueFromVcard('value', linkedUri).split('tel:+')[1];
            }
        };
        this.getProfile = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.session) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getSession()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.fetcher.load(this.session.webId)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {
                                fn: this.getValueFromVcard('fn'),
                                company: this.getValueFromVcard('organization-name'),
                                phone: this.getPhone(),
                                role: this.getValueFromVcard('role'),
                                image: this.getValueFromVcard('hasPhoto'),
                                address: this.getAddress(),
                                email: this.getEmail(),
                            }];
                    case 4:
                        error_1 = _a.sent();
                        console.log("Error fetching data: " + error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        var fetcherOptions = {};
        this.fetcher = new $rdf.Fetcher(this.store, fetcherOptions);
        this.updateManager = new $rdf.UpdateManager(this.store);
        this.getSession();
    }
    RdfService.prototype.addNewLinkedField = function (field, insertions, predicate, fieldValue, why, me) {
        //Generate a new ID. This id can be anything but needs to be unique.
        var newId = field + ':' + Date.now();
        //Get a new subject, using the new ID
        var newSubject = $rdf.sym(this.session.webId.split('#')[0] + '#' + newId);
        //Set new predicate, based on email or phone fields
        var newPredicate = field === 'phone' ? $rdf.sym(VCARD('hasTelephone')) : $rdf.sym(VCARD('hasEmail'));
        //Add new phone or email to the pod
        insertions.push($rdf.st(newSubject, predicate, fieldValue, why));
        //Set the type (defaults to Home/Personal for now) and insert it into the pod as well
        //Todo: Make this dynamic
        var type = field === 'phone' ? $rdf.literal('Home') : $rdf.literal('Personal');
        insertions.push($rdf.st(newSubject, VCARD('type'), type, why));
        //Add a link in #me to the email/phone number (by id)
        insertions.push($rdf.st(me, newPredicate, newSubject, why));
    };
    RdfService.prototype.getUriForField = function (field, me) {
        var uriString;
        var uri;
        switch (field) {
            case 'phone':
                uriString = this.getValueFromVcard('hasTelephone');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            case 'email':
                uriString = this.getValueFromVcard('hasEmail');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            default:
                uri = me;
                break;
        }
        return uri;
    };
    /**
     * Extracts the value of a field of a NgForm and converts it to a $rdf.NamedNode
     * @param {NgForm} form
     * @param {string} field The name of the field that is going to be extracted from the form
     * @return {RdfNamedNode}
     */
    RdfService.prototype.getFieldValue = function (form, field) {
        var fieldValue;
        if (!form.value[field]) {
            return;
        }
        switch (field) {
            case 'phone':
                fieldValue = $rdf.sym('tel:+' + form.value[field]);
                break;
            case 'email':
                fieldValue = $rdf.sym('mailto:' + form.value[field]);
                break;
            default:
                fieldValue = form.value[field];
                break;
        }
        return fieldValue;
    };
    RdfService.prototype.getOldFieldValue = function (field, oldProfile) {
        var oldValue;
        if (!oldProfile || !oldProfile[field]) {
            return;
        }
        switch (field) {
            case 'phone':
                oldValue = $rdf.sym('tel:+' + oldProfile[field]);
                break;
            case 'email':
                oldValue = $rdf.sym('mailto:' + oldProfile[field]);
                break;
            default:
                oldValue = oldProfile[field];
                break;
        }
        return oldValue;
    };
    RdfService.prototype.getFieldName = function (field) {
        switch (field) {
            case 'company':
                return 'organization-name';
            case 'phone':
            case 'email':
                return 'value';
            default:
                return field;
        }
    };
    /**
     * Gets any resource that matches the node, using the provided Namespace
     * @param {string} node The name of the predicate to be applied using the provided Namespace
     * @param {$rdf.namespace} namespace The RDF Namespace
     * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
     */
    RdfService.prototype.getValueFromNamespace = function (node, namespace, webId) {
        var store = this.store.any($rdf.sym(webId || this.session.webId), namespace(node));
        if (store) {
            return store.value;
        }
        return '';
    };
    RdfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], RdfService);
    return RdfService;
}());



/***/ }),

/***/ "./src/app/services/solid.auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/solid.auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rdf.service */ "./src/app/services/rdf.service.ts");
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




var AuthService = /** @class */ (function () {
    function AuthService(router, rdf) {
        var _this = this;
        this.router = router;
        this.rdf = rdf;
        this.fechInit = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/sparql-update',
            },
            body: '',
        };
        /*
         * This will check if current session is active to avoid security problems
        */
        this.isSessionActive = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.session = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(solid.auth.currentSession());
                return [2 /*return*/];
            });
        }); };
        /**
         * Alternative login-popup function. This will open a popup that will allow you to choose an identity provider
         * without leaving the current page
         * This is recommended if you don't want to leave the current workflow.
         */
        this.solidLoginPopup = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, solid.auth.popupLogin({ popupUri: './login-popup' })];
                    case 1:
                        _a.sent();
                        // Check if session is valid to avoid redirect issues
                        return [4 /*yield*/, this.isSessionActive()];
                    case 2:
                        // Check if session is valid to avoid redirect issues
                        _a.sent();
                        // popupLogin success redirect to profile
                        this.router.navigate(['/card']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /*
        * Signs out of Solid in this app, by calling the logout function and clearing the localStorage token
        */
        this.solidSignOut = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, solid.auth.logout()];
                    case 1:
                        _a.sent();
                        // Remove localStorage
                        localStorage.removeItem('solid-auth-client');
                        // Redirect to login page
                        this.router.navigate(['/']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log("Error: " + error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.saveOldUserData = function (profile) {
            if (!localStorage.getItem('oldProfileData')) {
                localStorage.setItem('oldProfileData', JSON.stringify(profile));
            }
        };
        this.getOldUserData = function () {
            return JSON.parse(localStorage.getItem('oldProfileData'));
        };
        /*
        *  Make a call to the solid auth endpoint. It requires an identity provider url, which here is coming from the dropdown, which
        *  is populated by the getIdentityProviders() function call. It currently requires a callback url and a storage option or else
        *  the call will fail.
        */
        this.solidLogin = function (idp) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid.auth.login(idp, {
                            callbackUri: window.location.href + "card",
                            storage: localStorage,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.isSessionActive();
    }
    /**
     * Function to get providers. This is to mimic the future provider registry
     *
     * @return {SolidProvider[]} A list of SolidProviders
     */
    AuthService.prototype.getIdentityProviders = function () {
        var inruptProvider = {
            name: 'Inrupt',
            image: '/assets/images/Inrupt.png',
            loginUrl: 'https://inrupt.net/auth',
            desc: 'Inrupt Inc. provider'
        };
        var solidCommunityProvider = {
            name: 'Solid Community',
            image: '/assets/images/Solid.png',
            loginUrl: 'https://solid.community',
            desc: 'A provider maintained by the Solid Community'
        };
        var otherProvider = {
            name: 'Other (Enter WebID)',
            image: '/assets/images/Generic.png',
            loginUrl: null,
            desc: 'Generic provider'
        };
        return [
            inruptProvider,
            solidCommunityProvider,
            otherProvider
        ];
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _rdf_service__WEBPACK_IMPORTED_MODULE_3__["RdfService"]])
    ], AuthService);
    return AuthService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! D:\Escritorio\Uni\Oviedo\ASW\Chat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map