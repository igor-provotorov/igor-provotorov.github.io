(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["main"],
    {
        /***/ "./$$_lazy_route_resource lazy recursive": /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/ /*! no static exports found */ /***/ function $$_lazy_route_resourceLazyRecursive(
            module,
            exports
        ) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function() {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function() {
                return [];
            };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive"; /***/
        },
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": /*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/ /*! exports provided: default */ /***/ function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                "<app-navigation-menu></app-navigation-menu>\n\n<router-outlet></router-outlet>\n"; /***/
        },
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/films-to-watch-page/films-to-watch-page.component.html": /*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/films-to-watch-page/films-to-watch-page.component.html ***!
  \**************************************************************************************************************/ /*! exports provided: default */ /***/ function node_modulesRawLoaderDistCjsJsSrcAppFilmsToWatchPageFilmsToWatchPageComponentHtml(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                '<mat-accordion>\n    <mat-expansion-panel\n        *ngFor="let film of filmsToWatch$ | async"\n        class="mat-expansion-panel"\n        (opened)="panelOpenState = true"\n        (closed)="panelOpenState = false"\n    >\n        <mat-expansion-panel-header>\n            <mat-panel-title class="mat-panel-title">\n                {{ film.title }}\n            </mat-panel-title>\n            <mat-panel-description class="mat-panel-description">\n                {{ film.releaseDate | date: "yyyy" }}</mat-panel-description\n            >\n        </mat-expansion-panel-header>\n        <p>{{ film.overview }}</p>\n    </mat-expansion-panel>\n</mat-accordion>\n<div class="container mat-h2" *ngIf="!(filmsToWatch$ | async).length">\n    There are no movies in list\n</div>\n'; /***/
        },
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/movie-list-item/movie-list-item.component.html": /*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/movie-list-item/movie-list-item.component.html ***!
  \************************************************************************************************************************/ /*! exports provided: default */ /***/ function node_modulesRawLoaderDistCjsJsSrcAppMovieSearchPageMovieListItemMovieListItemComponentHtml(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                '<li class="card-panel mat-typography">\n    <h3 class="card-title mat-h1">{{ film.title }}</h3>\n\n    <p class="card-release-date mat-typography mat-h5" *ngIf="film.releaseDate">\n        <strong>Release date: </strong>{{ film.releaseDate | date }}\n    </p>\n\n    <img class="card-poster" *ngIf="film.posterPath" [src]="film.posterPath" [alt]="film.title" />\n    <p>{{ film.overview }}</p>\n    <p>\n        <a mat-raised-button color="primary" *ngIf="film.videos" [href]="film.videos" target="_blank">{{\n            "View trailer" | uppercase\n        }}</a>\n    </p>\n    <h5 class="actors-title mat-h3" *ngIf="film.credits">Actors:</h5>\n    <ul class="actors-list">\n        <li class="actors-list__item" *ngFor="let actor of film.credits">\n            <p class="actors-list__actor-name">{{ actor.name }}</p>\n            <img class="actors-list__actor-photo" [src]="actor.profile_path" [alt]="actor.name" />\n        </li>\n    </ul>\n    <div class="wish-list" *ngIf="film.id">\n        <mat-checkbox\n            class="wish-list__checkbox"\n            color="primary"\n            (change)="onCheckboxClicked($event)"\n            [(ngModel)]="film.checkboxValue"\n            >Add movie to wish list</mat-checkbox\n        >\n    </div>\n</li>\n'; /***/
        },
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/movie-list/movie-list.component.html": /*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/movie-list/movie-list.component.html ***!
  \**************************************************************************************************************/ /*! exports provided: default */ /***/ function node_modulesRawLoaderDistCjsJsSrcAppMovieSearchPageMovieListMovieListComponentHtml(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                '<ul class="movies">\n    <app-movie-list-item\n        *ngFor="let film of resultsFilms; trackBy: trackByFn"\n        [film]="film"\n        (checkBoxClicked)="onCheckBoxClicked($event)"\n    ></app-movie-list-item>\n</ul>\n'; /***/
        },
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/movie-search-page.component.html": /*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/movie-search-page.component.html ***!
  \**********************************************************************************************************/ /*! exports provided: default */ /***/ function node_modulesRawLoaderDistCjsJsSrcAppMovieSearchPageMovieSearchPageComponentHtml(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                '<div class="container mat-app-background">\n    <div class="wrapper">\n        <app-search-input (addValue)="loadFilms($event)"></app-search-input>\n        <app-movie-list\n            [resultsFilms]="resultsFilms$ | async"\n            (checkBoxClicked)="onCheckBoxClicked($event)"\n        ></app-movie-list>\n        <p class="no-movies-paragraph mat-typography" *ngIf="isNoMoreResults">There are no more movies</p>\n        <mat-spinner *ngIf="isLoading && !isNoMoreResults" diameter="50"></mat-spinner>\n        <button\n            class="load-more-button"\n            *ngIf="isSearchedFilms"\n            type="submit"\n            mat-raised-button\n            color="primary"\n            (click)="LoadMoreMovies()"\n            [disabled]="isLoading || isNoMoreResults"\n        >\n            Load more films\n        </button>\n    </div>\n</div>\n'; /***/
        },
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/search-input/search-input.component.html": /*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/search-input/search-input.component.html ***!
  \******************************************************************************************************************/ /*! exports provided: default */ /***/ function node_modulesRawLoaderDistCjsJsSrcAppMovieSearchPageSearchInputSearchInputComponentHtml(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                '<form action="" (submit)="onChangeInput()">\n    <mat-form-field>\n        <input\n            type="text"\n            matInput\n            [(ngModel)]="inputValue"\n            name="inputValue"\n            placeholder="Type something for search..."\n            autocomplete="off"\n            autofocus\n        />\n    </mat-form-field>\n    <button class="submit-button" type="submit" mat-raised-button color="primary">Click to find films</button>\n</form>\n'; /***/
        },
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-menu/navigation-menu.component.html": /*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-menu/navigation-menu.component.html ***!
  \******************************************************************************************************/ /*! exports provided: default */ /***/ function node_modulesRawLoaderDistCjsJsSrcAppNavigationMenuNavigationMenuComponentHtml(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                '<mat-toolbar color="primary">\n    <div class="wrapper">\n        <p class="title"><a class="title__link" [routerLink]="[\'/\']">Search movies app</a></p>\n        <ul class="navigation-menu">\n            <li class="navigation-menu__link">\n                <a\n                    [routerLink]="[\'/\']"\n                    routerLinkActive="active"\n                    [routerLinkActiveOptions]="{ exact: true }"\n                    class="link mat-typography"\n                    mat-button\n                    >Home</a\n                >\n            </li>\n            <li class="navigation-menu__link">\n                <a [routerLink]="[\'films-to-watch\']" routerLinkActive="active" class="link mat-typography" mat-button\n                    >Films to watch</a\n                >\n            </li>\n        </ul>\n    </div>\n</mat-toolbar>\n'; /***/
        },
        /***/ "./node_modules/tslib/tslib.es6.js": /*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/ /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */ /***/ function node_modulesTslibTslibEs6Js(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() {
                return __extends;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() {
                return _assign;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() {
                return __rest;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() {
                return __decorate;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() {
                return __param;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() {
                return __metadata;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() {
                return __awaiter;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() {
                return __generator;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() {
                return __exportStar;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() {
                return __values;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() {
                return __read;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() {
                return __spread;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() {
                return __spreadArrays;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() {
                return __await;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() {
                return __asyncGenerator;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() {
                return __asyncDelegator;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() {
                return __asyncValues;
            });
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "__makeTemplateObject",
                function() {
                    return __makeTemplateObject;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() {
                return __importStar;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() {
                return __importDefault;
            });
            /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ /* global Reflect, Promise */ var _extendStatics = function extendStatics(
                d,
                b
            ) {
                _extendStatics =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function(d, b) {
                            d.__proto__ = b;
                        }) ||
                    function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                return _extendStatics(d, b);
            };
            function __extends(d, b) {
                _extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
            }
            var _assign = function __assign() {
                _assign =
                    Object.assign ||
                    function __assign(t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) {
                                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                            }
                        }
                        return t;
                    };
                return _assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s) {
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
                }
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--) {
                        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    }
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function(target, key) {
                    decorator(target, key, paramIndex);
                };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done
                            ? resolve(result.value)
                            : new P(function(resolve) {
                                  resolve(result.value);
                              }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = {
                        label: 0,
                        sent: function sent() {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: [],
                    },
                    f,
                    y,
                    t,
                    g;
                return (
                    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
                    typeof Symbol === "function" &&
                        (g[Symbol.iterator] = function() {
                            return this;
                        }),
                    g
                );
                function verb(n) {
                    return function(v) {
                        return step([n, v]);
                    };
                }
                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) {
                        try {
                            if (
                                ((f = 1),
                                y &&
                                    (t =
                                        op[0] & 2
                                            ? y["return"]
                                            : op[0]
                                            ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                                            : y.next) &&
                                    !(t = t.call(y, op[1])).done)
                            )
                                return t;
                            if (((y = 0), t)) op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                        (op[0] === 6 || op[0] === 2)
                                    ) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2]) _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        } catch (e) {
                            op = [6, e];
                            y = 0;
                        } finally {
                            f = t = 0;
                        }
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m) {
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator],
                    i = 0;
                if (m) return m.call(o);
                return {
                    next: function next() {
                        if (o && i >= o.length) o = void 0;
                        return { value: o && o[i++], done: !o };
                    },
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m) return o;
                var i = m.call(o),
                    r,
                    ar = [],
                    e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                        ar.push(r.value);
                    }
                } catch (error) {
                    e = { error: error };
                } finally {
                    try {
                        if (r && !r.done && (m = i["return"])) m.call(i);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++) {
                    ar = ar.concat(__read(arguments[i]));
                }
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
                    s += arguments[i].length;
                }
                for (var r = Array(s), k = 0, i = 0; i < il; i++) {
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
                        r[k] = a[j];
                    }
                }
                return r;
            }
            function __await(v) {
                return this instanceof __await ? ((this.v = v), this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []),
                    i,
                    q = [];
                return (
                    (i = {}),
                    verb("next"),
                    verb("throw"),
                    verb("return"),
                    (i[Symbol.asyncIterator] = function() {
                        return this;
                    }),
                    i
                );
                function verb(n) {
                    if (g[n])
                        i[n] = function(v) {
                            return new Promise(function(a, b) {
                                q.push([n, v, a, b]) > 1 || resume(n, v);
                            });
                        };
                }
                function resume(n, v) {
                    try {
                        step(g[n](v));
                    } catch (e) {
                        settle(q[0][3], e);
                    }
                }
                function step(r) {
                    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
                }
                function fulfill(value) {
                    resume("next", value);
                }
                function reject(value) {
                    resume("throw", value);
                }
                function settle(f, v) {
                    if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
                }
            }
            function __asyncDelegator(o) {
                var i, p;
                return (
                    (i = {}),
                    verb("next"),
                    verb("throw", function(e) {
                        throw e;
                    }),
                    verb("return"),
                    (i[Symbol.iterator] = function() {
                        return this;
                    }),
                    i
                );
                function verb(n, f) {
                    i[n] = o[n]
                        ? function(v) {
                              return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
                          }
                        : f;
                }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator],
                    i;
                return m
                    ? m.call(o)
                    : ((o = typeof __values === "function" ? __values(o) : o[Symbol.iterator]()),
                      (i = {}),
                      verb("next"),
                      verb("throw"),
                      verb("return"),
                      (i[Symbol.asyncIterator] = function() {
                          return this;
                      }),
                      i);
                function verb(n) {
                    i[n] =
                        o[n] &&
                        function(v) {
                            return new Promise(function(resolve, reject) {
                                (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                            });
                        };
                }
                function settle(resolve, reject, d, v) {
                    Promise.resolve(v).then(function(v) {
                        resolve({ value: v, done: d });
                    }, reject);
                }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                } else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            function __importStar(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod) {
                        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                    }
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return mod && mod.__esModule ? mod : { default: mod };
            } /***/
        },
        /***/ "./src/app/app-routing.module.ts": /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/ /*! exports provided: AppRoutingModule */ /***/ function srcAppAppRoutingModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() {
                return AppRoutingModule;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"
            );
            /* harmony import */ var _movie_search_page_movie_search_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./movie-search-page/movie-search-page.component */ "./src/app/movie-search-page/movie-search-page.component.ts"
            );
            /* harmony import */ var _films_to_watch_page_films_to_watch_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./films-to-watch-page/films-to-watch-page.component */ "./src/app/films-to-watch-page/films-to-watch-page.component.ts"
            );
            var routes = [
                {
                    path: "",
                    component:
                        _movie_search_page_movie_search_page_component__WEBPACK_IMPORTED_MODULE_3__[
                            "MovieSearchPageComponent"
                        ],
                },
                {
                    path: "films-to-watch",
                    component:
                        _films_to_watch_page_films_to_watch_page_component__WEBPACK_IMPORTED_MODULE_4__[
                            "FilmsToWatchPageComponent"
                        ],
                },
            ];
            var AppRoutingModule = function AppRoutingModule() {};
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                    }),
                ],
                AppRoutingModule
            ); /***/
        },
        /***/ "./src/app/app.component.scss": /*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/ /*! exports provided: default */ /***/ function srcAppAppComponentScss(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"; /***/
        },
        /***/ "./src/app/app.component.ts": /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/ /*! exports provided: AppComponent */ /***/ function srcAppAppComponentTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() {
                return AppComponent;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            var AppComponent = function AppComponent() {};
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                        selector: "app-root",
                        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                            __webpack_require__(
                                /*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"
                            )
                        ).default,
                        styles: [
                            tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                                __webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")
                            ).default,
                        ],
                    }),
                ],
                AppComponent
            ); /***/
        },
        /***/ "./src/app/app.module.ts": /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/ /*! exports provided: AppModule */ /***/ function srcAppAppModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() {
                return AppModule;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js"
            );
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./app.component */ "./src/app/app.component.ts"
            );
            /* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ./core/index */ "./src/app/core/index.ts"
            );
            /* harmony import */ var _movie_search_page_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ./movie-search-page/index */ "./src/app/movie-search-page/index.ts"
            );
            /* harmony import */ var _navigation_menu_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! ./navigation-menu/index */ "./src/app/navigation-menu/index.ts"
            );
            /* harmony import */ var _films_to_watch_page_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                /*! ./films-to-watch-page/index */ "./src/app/films-to-watch-page/index.ts"
            );
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                /*! ./app-routing.module */ "./src/app/app-routing.module.ts"
            );
            var AppModule = function AppModule() {};
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                        imports: [
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                            _movie_search_page_index__WEBPACK_IMPORTED_MODULE_6__["MovieSearchPageModule"],
                            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__[
                                "BrowserAnimationsModule"
                            ],
                            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                            _navigation_menu_index__WEBPACK_IMPORTED_MODULE_7__["NavigationMenuModule"],
                            _films_to_watch_page_index__WEBPACK_IMPORTED_MODULE_8__["FilmsToWatchPageModule"],
                        ],
                        providers: [],
                        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                    }),
                ],
                AppModule
            ); /***/
        },
        /***/ "./src/app/core/constants/index.ts": /*!*****************************************!*\
  !*** ./src/app/core/constants/index.ts ***!
  \*****************************************/ /*! exports provided: BASE_SEARCH_URL, BASE_SEARCH_IMAGES_URL, BASE_YOUTUBE_VIDEOS_URL, POSTER_IMAGE_SIZE_PX, POSTER, ACTOR_IMAGE_SIZE_PX, ACTOR, DEFAULT_IMAGE_SIZE_PX, API_KEY, OVER_THE_ALLOWED_LIMIT, SERVER_DELAY_TIME, DIGITS, NO_ACTOR_IMAGE_URL, NO_SUCH_MOVIES, ERROR, FILMS_TO_WATCH_KEY */ /***/ function srcAppCoreConstantsIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_SEARCH_URL", function() {
                return BASE_SEARCH_URL;
            });
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "BASE_SEARCH_IMAGES_URL",
                function() {
                    return BASE_SEARCH_IMAGES_URL;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "BASE_YOUTUBE_VIDEOS_URL",
                function() {
                    return BASE_YOUTUBE_VIDEOS_URL;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "POSTER_IMAGE_SIZE_PX",
                function() {
                    return POSTER_IMAGE_SIZE_PX;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTER", function() {
                return POSTER;
            });
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "ACTOR_IMAGE_SIZE_PX",
                function() {
                    return ACTOR_IMAGE_SIZE_PX;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTOR", function() {
                return ACTOR;
            });
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "DEFAULT_IMAGE_SIZE_PX",
                function() {
                    return DEFAULT_IMAGE_SIZE_PX;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() {
                return API_KEY;
            });
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "OVER_THE_ALLOWED_LIMIT",
                function() {
                    return OVER_THE_ALLOWED_LIMIT;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_DELAY_TIME", function() {
                return SERVER_DELAY_TIME;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIGITS", function() {
                return DIGITS;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_ACTOR_IMAGE_URL", function() {
                return NO_ACTOR_IMAGE_URL;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_SUCH_MOVIES", function() {
                return NO_SUCH_MOVIES;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() {
                return ERROR;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILMS_TO_WATCH_KEY", function() {
                return FILMS_TO_WATCH_KEY;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            var BASE_SEARCH_URL = "https://api.themoviedb.org/3/";
            var BASE_SEARCH_IMAGES_URL = "https://image.tmdb.org/t/p/w";
            var BASE_YOUTUBE_VIDEOS_URL = "https://www.youtube.com/watch?v=";
            var POSTER_IMAGE_SIZE_PX = 500;
            var POSTER = "poster";
            var ACTOR_IMAGE_SIZE_PX = 92;
            var ACTOR = "actor";
            var DEFAULT_IMAGE_SIZE_PX = 500;
            var API_KEY = "026c9d92e76619507fb31d8065f3304d";
            var OVER_THE_ALLOWED_LIMIT = 429;
            var SERVER_DELAY_TIME = 10000;
            var DIGITS = { ZERO: 0, ONE: 1 };
            var NO_ACTOR_IMAGE_URL =
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/400px-User-Pict-Profil.svg.png";
            var NO_SUCH_MOVIES = "No such movies";
            var ERROR = "#Error:";
            var FILMS_TO_WATCH_KEY = "FILMS_TO_WATCH"; /***/
        },
        /***/ "./src/app/core/core.module.ts": /*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/ /*! exports provided: CoreModule */ /***/ function srcAppCoreCoreModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() {
                return CoreModule;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js"
            );
            /* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js"
            );
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js"
            );
            /* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ./services/index */ "./src/app/core/services/index.ts"
            );
            /* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ./store/index */ "./src/app/core/store/index.ts"
            );
            /* harmony import */ var _store_facades_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! ./store-facades/index */ "./src/app/core/store-facades/index.ts"
            );
            /* harmony import */ var _environments_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                /*! ../../environments/index */ "./src/environments/index.ts"
            );
            var CoreModule = function CoreModule() {};
            CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                        imports: [
                            _services_index__WEBPACK_IMPORTED_MODULE_5__["ServiceModule"],
                            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(
                                _store_index__WEBPACK_IMPORTED_MODULE_6__["reducers"]
                            ),
                            _store_facades_index__WEBPACK_IMPORTED_MODULE_7__["StoreFacadeModule"],
                            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({
                                maxAge: 25,
                                logOnly: _environments_index__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
                            }),
                            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([
                                _store_index__WEBPACK_IMPORTED_MODULE_6__["FilmsToWatchEffects"],
                            ]),
                        ],
                        providers: [
                            {
                                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                                useFactory: function useFactory(store) {
                                    return function() {
                                        store.dispatch(
                                            new _store_index__WEBPACK_IMPORTED_MODULE_6__["GetFilmsToWatch"]()
                                        );
                                    };
                                },
                                multi: true,
                                deps: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]],
                            },
                        ],
                    }),
                ],
                CoreModule
            ); /***/
        },
        /***/ "./src/app/core/index.ts": /*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/ /*! exports provided: CoreModule, BASE_SEARCH_URL, BASE_SEARCH_IMAGES_URL, BASE_YOUTUBE_VIDEOS_URL, POSTER_IMAGE_SIZE_PX, POSTER, ACTOR_IMAGE_SIZE_PX, ACTOR, DEFAULT_IMAGE_SIZE_PX, API_KEY, OVER_THE_ALLOWED_LIMIT, SERVER_DELAY_TIME, DIGITS, NO_ACTOR_IMAGE_URL, NO_SUCH_MOVIES, ERROR, FILMS_TO_WATCH_KEY, transformResultMovies, ServiceModule, getSearchUrl, getImagesUrl, getMovieDetailsUrl, getMovieTrailerUrl, checkEmptyResults, StoreFacadeModule, SearchFilmsService, LocalStorageService, reducers, FilmsToWatchStoreFacade, FilmsToWatchActionTypes, AddFilmToWatchList, RemoveFilmFromWatchList, GetFilmsToWatch, GetFilmsToWatchSuccess, FilmsToWatchEffects, initialState, filmsToWatchReducer, selectFilmToWatchState, selectFilmToWatchList */ /***/ function srcAppCoreIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./constants/index */ "./src/app/core/constants/index.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_SEARCH_URL", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_SEARCH_URL"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "BASE_SEARCH_IMAGES_URL",
                function() {
                    return _constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_SEARCH_IMAGES_URL"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "BASE_YOUTUBE_VIDEOS_URL",
                function() {
                    return _constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_YOUTUBE_VIDEOS_URL"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "POSTER_IMAGE_SIZE_PX",
                function() {
                    return _constants_index__WEBPACK_IMPORTED_MODULE_1__["POSTER_IMAGE_SIZE_PX"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POSTER", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["POSTER"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTOR_IMAGE_SIZE_PX", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["ACTOR_IMAGE_SIZE_PX"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTOR", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["ACTOR"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "DEFAULT_IMAGE_SIZE_PX",
                function() {
                    return _constants_index__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_IMAGE_SIZE_PX"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["API_KEY"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "OVER_THE_ALLOWED_LIMIT",
                function() {
                    return _constants_index__WEBPACK_IMPORTED_MODULE_1__["OVER_THE_ALLOWED_LIMIT"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVER_DELAY_TIME", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["SERVER_DELAY_TIME"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DIGITS", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["DIGITS"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NO_ACTOR_IMAGE_URL", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["NO_ACTOR_IMAGE_URL"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NO_SUCH_MOVIES", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["NO_SUCH_MOVIES"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["ERROR"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILMS_TO_WATCH_KEY", function() {
                return _constants_index__WEBPACK_IMPORTED_MODULE_1__["FILMS_TO_WATCH_KEY"];
            });
            /* harmony import */ var _mappers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./mappers/index */ "./src/app/core/mappers/index.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "transformResultMovies",
                function() {
                    return _mappers_index__WEBPACK_IMPORTED_MODULE_2__["transformResultMovies"];
                }
            );
            /* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./services/index */ "./src/app/core/services/index.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() {
                return _services_index__WEBPACK_IMPORTED_MODULE_3__["ServiceModule"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFilmsService", function() {
                return _services_index__WEBPACK_IMPORTED_MODULE_3__["SearchFilmsService"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() {
                return _services_index__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"];
            });
            /* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./store/index */ "./src/app/core/store/index.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() {
                return _store_index__WEBPACK_IMPORTED_MODULE_4__["reducers"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchActionTypes",
                function() {
                    return _store_index__WEBPACK_IMPORTED_MODULE_4__["FilmsToWatchActionTypes"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddFilmToWatchList", function() {
                return _store_index__WEBPACK_IMPORTED_MODULE_4__["AddFilmToWatchList"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "RemoveFilmFromWatchList",
                function() {
                    return _store_index__WEBPACK_IMPORTED_MODULE_4__["RemoveFilmFromWatchList"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFilmsToWatch", function() {
                return _store_index__WEBPACK_IMPORTED_MODULE_4__["GetFilmsToWatch"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "GetFilmsToWatchSuccess",
                function() {
                    return _store_index__WEBPACK_IMPORTED_MODULE_4__["GetFilmsToWatchSuccess"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilmsToWatchEffects", function() {
                return _store_index__WEBPACK_IMPORTED_MODULE_4__["FilmsToWatchEffects"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() {
                return _store_index__WEBPACK_IMPORTED_MODULE_4__["initialState"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filmsToWatchReducer", function() {
                return _store_index__WEBPACK_IMPORTED_MODULE_4__["filmsToWatchReducer"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "selectFilmToWatchState",
                function() {
                    return _store_index__WEBPACK_IMPORTED_MODULE_4__["selectFilmToWatchState"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "selectFilmToWatchList",
                function() {
                    return _store_index__WEBPACK_IMPORTED_MODULE_4__["selectFilmToWatchList"];
                }
            );
            /* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ./utils/index */ "./src/app/core/utils/index.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchUrl", function() {
                return _utils_index__WEBPACK_IMPORTED_MODULE_5__["getSearchUrl"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImagesUrl", function() {
                return _utils_index__WEBPACK_IMPORTED_MODULE_5__["getImagesUrl"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMovieDetailsUrl", function() {
                return _utils_index__WEBPACK_IMPORTED_MODULE_5__["getMovieDetailsUrl"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMovieTrailerUrl", function() {
                return _utils_index__WEBPACK_IMPORTED_MODULE_5__["getMovieTrailerUrl"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkEmptyResults", function() {
                return _utils_index__WEBPACK_IMPORTED_MODULE_5__["checkEmptyResults"];
            });
            /* harmony import */ var _store_facades_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ./store-facades/index */ "./src/app/core/store-facades/index.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreFacadeModule", function() {
                return _store_facades_index__WEBPACK_IMPORTED_MODULE_6__["StoreFacadeModule"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchStoreFacade",
                function() {
                    return _store_facades_index__WEBPACK_IMPORTED_MODULE_6__["FilmsToWatchStoreFacade"];
                }
            );
            /* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! ./core.module */ "./src/app/core/core.module.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() {
                return _core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"];
            }); /***/
        },
        /***/ "./src/app/core/mappers/index.ts": /*!***************************************!*\
  !*** ./src/app/core/mappers/index.ts ***!
  \***************************************/ /*! exports provided: transformResultMovies */ /***/ function srcAppCoreMappersIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _transform_result_movies_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./transform-result-movies.mapper */ "./src/app/core/mappers/transform-result-movies.mapper.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "transformResultMovies",
                function() {
                    return _transform_result_movies_mapper__WEBPACK_IMPORTED_MODULE_1__["transformResultMovies"];
                }
            ); /***/
        },
        /***/ "./src/app/core/mappers/transform-result-movies.mapper.ts": /*!****************************************************************!*\
  !*** ./src/app/core/mappers/transform-result-movies.mapper.ts ***!
  \****************************************************************/ /*! exports provided: transformResultMovies */ /***/ function srcAppCoreMappersTransformResultMoviesMapperTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "transformResultMovies",
                function() {
                    return transformResultMovies;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ../utils/index */ "./src/app/core/utils/index.ts"
            );
            /* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ../constants/index */ "./src/app/core/constants/index.ts"
            );
            /**
             * Create array of objects with combined data about movies, their trailers and actors.
             */ function transformResultMovies(movies) {
                return movies.map(function(movie) {
                    var result = {
                        id: movie.id,
                        posterPath: movie.poster_path
                            ? Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["getImagesUrl"])(
                                  movie.poster_path,
                                  _constants_index__WEBPACK_IMPORTED_MODULE_2__["POSTER"]
                              )
                            : null,
                        credits: movie.credits.cast.length
                            ? movie.credits.cast.slice(0, 5).map(function(actor) {
                                  if (actor.profile_path) {
                                      actor.profile_path = Object(
                                          _utils_index__WEBPACK_IMPORTED_MODULE_1__["getImagesUrl"]
                                      )(actor.profile_path, _constants_index__WEBPACK_IMPORTED_MODULE_2__["ACTOR"]);
                                  } else {
                                      actor.profile_path =
                                          _constants_index__WEBPACK_IMPORTED_MODULE_2__["NO_ACTOR_IMAGE_URL"];
                                  }
                                  return actor;
                              })
                            : null,
                        overview: movie.overview,
                        releaseDate: movie.release_date,
                        title: movie.title,
                        videos: movie.videos.results.length
                            ? Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["getMovieTrailerUrl"])(
                                  movie.videos.results[0].key
                              )
                            : null,
                    };
                    return result;
                });
            } /***/
        },
        /***/ "./src/app/core/services/index.ts": /*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/ /*! exports provided: ServiceModule, SearchFilmsService, LocalStorageService */ /***/ function srcAppCoreServicesIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _search_films_service_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./search-films-service/index */ "./src/app/core/services/search-films-service/index.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFilmsService", function() {
                return _search_films_service_index__WEBPACK_IMPORTED_MODULE_1__["SearchFilmsService"];
            });
            /* harmony import */ var _local_storage_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./local-storage-service/index */ "./src/app/core/services/local-storage-service/index.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() {
                return _local_storage_service_index__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"];
            });
            /* harmony import */ var _service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./service.module */ "./src/app/core/services/service.module.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() {
                return _service_module__WEBPACK_IMPORTED_MODULE_3__["ServiceModule"];
            }); /***/
        },
        /***/ "./src/app/core/services/local-storage-service/index.ts": /*!**************************************************************!*\
  !*** ./src/app/core/services/local-storage-service/index.ts ***!
  \**************************************************************/ /*! exports provided: LocalStorageService */ /***/ function srcAppCoreServicesLocalStorageServiceIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./local-storage.service */ "./src/app/core/services/local-storage-service/local-storage.service.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() {
                return _local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"];
            }); /***/
        },
        /***/ "./src/app/core/services/local-storage-service/local-storage.service.ts": /*!******************************************************************************!*\
  !*** ./src/app/core/services/local-storage-service/local-storage.service.ts ***!
  \******************************************************************************/ /*! exports provided: LocalStorageService */ /***/ function srcAppCoreServicesLocalStorageServiceLocalStorageServiceTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "LocalStorageService",
                function() {
                    return LocalStorageService;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ../../constants/index */ "./src/app/core/constants/index.ts"
            );
            var LocalStorageService = /*#__PURE__*/ (function() {
                function LocalStorageService() {}
                var _proto = LocalStorageService.prototype;
                /**
                 * Set checked movie to local storage by the given key.
                 */ _proto.setSavedState = function setSavedState(payload) {
                    var actions =
                        this.getSavedState(_constants_index__WEBPACK_IMPORTED_MODULE_2__["FILMS_TO_WATCH_KEY"]) || [];
                    var newActions = actions.concat(payload);
                    localStorage.setItem(
                        _constants_index__WEBPACK_IMPORTED_MODULE_2__["FILMS_TO_WATCH_KEY"],
                        JSON.stringify(newActions)
                    );
                }
                /**
                 * Remove unchecked movie from local storage by the given key.
                 */;
                _proto.removeFromState = function removeFromState(payload) {
                    var actions = this.getSavedState(
                        _constants_index__WEBPACK_IMPORTED_MODULE_2__["FILMS_TO_WATCH_KEY"]
                    );
                    var newActions = actions.filter(function(movie) {
                        return movie.id !== payload.id;
                    });
                    localStorage.setItem(
                        _constants_index__WEBPACK_IMPORTED_MODULE_2__["FILMS_TO_WATCH_KEY"],
                        JSON.stringify(newActions)
                    );
                }
                /**
                 * Get data from local storage by the given key.
                 */;
                _proto.getSavedState = function getSavedState(localStorageKey) {
                    return JSON.parse(localStorage.getItem(localStorageKey));
                };
                return LocalStorageService;
            })();
            LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()],
                LocalStorageService
            ); /***/
        },
        /***/ "./src/app/core/services/search-films-service/index.ts": /*!*************************************************************!*\
  !*** ./src/app/core/services/search-films-service/index.ts ***!
  \*************************************************************/ /*! exports provided: SearchFilmsService */ /***/ function srcAppCoreServicesSearchFilmsServiceIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _search_films_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./search-films.service */ "./src/app/core/services/search-films-service/search-films.service.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFilmsService", function() {
                return _search_films_service__WEBPACK_IMPORTED_MODULE_1__["SearchFilmsService"];
            }); /***/
        },
        /***/ "./src/app/core/services/search-films-service/search-films.service.ts": /*!****************************************************************************!*\
  !*** ./src/app/core/services/search-films-service/search-films.service.ts ***!
  \****************************************************************************/ /*! exports provided: SearchFilmsService */ /***/ function srcAppCoreServicesSearchFilmsServiceSearchFilmsServiceTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilmsService", function() {
                return SearchFilmsService;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js"
            );
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! rxjs */ "./node_modules/rxjs/_esm2015/index.js"
            );
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js"
            );
            /* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../../utils/index */ "./src/app/core/utils/index.ts"
            );
            /* harmony import */ var _mappers_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ../../mappers/index */ "./src/app/core/mappers/index.ts"
            );
            /* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! ../../constants/index */ "./src/app/core/constants/index.ts"
            );
            /* harmony import */ var _store_facades_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                /*! ../../store-facades/index */ "./src/app/core/store-facades/index.ts"
            );
            var SearchFilmsService = /*#__PURE__*/ (function() {
                function SearchFilmsService(http, filmsToWatchStoreFacade) {
                    /**
                     * If no more results flag.
                     */ this.isNoMoreResults = false;
                    this.http = http;
                    this.filmsToWatchStoreFacade = filmsToWatchStoreFacade;
                }
                /**
                 * Makes response to API and fetching mapped-data.
                 */ var _proto2 = SearchFilmsService.prototype;
                _proto2.getFilmsFromApi = function getFilmsFromApi(searchQuery) {
                    var _this = this;
                    this.startPage = _constants_index__WEBPACK_IMPORTED_MODULE_7__["DIGITS"].ONE;
                    this.isNoMoreResults = false;
                    this.behaviorSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.startPage);
                    return this.behaviorSubject$.pipe(
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounce"])(function() {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(_this.getDebounceTime());
                        }),
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function(currPage) {
                            return _this.http
                                .get(
                                    Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__["getSearchUrl"])(
                                        searchQuery,
                                        currPage
                                    )
                                )
                                .pipe(
                                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function(data) {
                                        return (_this.totalPages = data.total_pages);
                                    }),
                                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function(data) {
                                        return data.results;
                                    })
                                );
                        }),
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function(searchFilms) {
                            return _this.getDetailsFilmsInfo(searchFilms).pipe(
                                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function(moviesArr) {
                                    return _this.checkNoMovies(moviesArr);
                                }),
                                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(function(
                                    errorObservable
                                ) {
                                    return errorObservable.pipe(
                                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function(
                                            sourceErr
                                        ) {
                                            return sourceErr.status ===
                                                _constants_index__WEBPACK_IMPORTED_MODULE_7__["OVER_THE_ALLOWED_LIMIT"]
                                                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true)
                                                : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(sourceErr);
                                        })
                                    );
                                }),
                                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function() {
                                    return (_this.lastFetchingDate = Date.now());
                                })
                            );
                        }),
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function(acc, movies) {
                            return [].concat(acc, movies);
                        }, []),
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function(movies) {
                            return _this.filmsToWatchStoreFacade.filmsToWatch$.pipe(
                                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function(filmsToWatchArray) {
                                    return _this.addCheckboxesFromStore(movies, filmsToWatchArray);
                                })
                            );
                        }),
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function(err) {
                            var errorMessage = err.error.status_message || err.error.errors.toString();
                            return Object(
                                rxjs__WEBPACK_IMPORTED_MODULE_3__["of"]
                            )([{ title: "#Error: " + errorMessage }]);
                        })
                    );
                }
                /**
                 * Emit fetching data from next page.
                 */;
                _proto2.nextPage = function nextPage() {
                    if (this.startPage < this.totalPages) {
                        this.startPage++;
                        this.behaviorSubject$.next(this.startPage);
                    } else {
                        this.isNoMoreResults = true;
                    }
                }
                /**
                 * Debounce time for server request rate limiting.
                 */;
                _proto2.getDebounceTime = function getDebounceTime() {
                    var currentDate = Date.now();
                    var debouncer;
                    if (!this.lastFetchingDate) {
                        debouncer = _constants_index__WEBPACK_IMPORTED_MODULE_7__["DIGITS"].ZERO;
                    } else {
                        debouncer =
                            _constants_index__WEBPACK_IMPORTED_MODULE_7__["SERVER_DELAY_TIME"] -
                            (currentDate - this.lastFetchingDate);
                    }
                    return debouncer;
                }
                /**
                 * Fetch details movies info (actors, images, trailers)
                 */;
                _proto2.getDetailsFilmsInfo = function getDetailsFilmsInfo(movies) {
                    var _this2 = this;
                    if (movies.length) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(
                            movies.map(function(movie) {
                                return _this2.http.get(
                                    Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__["getMovieDetailsUrl"])(movie.id)
                                );
                            })
                        );
                    } else {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                    }
                }
                /**
                 * Check if there are no movies found.
                 */;
                _proto2.checkNoMovies = function checkNoMovies(movies) {
                    return movies.length
                        ? Object(_mappers_index__WEBPACK_IMPORTED_MODULE_6__["transformResultMovies"])(movies)
                        : [{ title: "No such movies" }];
                }
                /**
                 * Joined result array from fetch and array with checkboxes from store.
                 */;
                _proto2.addCheckboxesFromStore = function addCheckboxesFromStore(movies, filmsToWatchArray) {
                    return movies.map(function(movie) {
                        var checkboxValue = Boolean(
                            filmsToWatchArray.find(function(filmToWatch) {
                                return filmToWatch.id === movie.id;
                            })
                        );
                        return Object.assign({}, movie, { checkboxValue: checkboxValue });
                    });
                };
                return SearchFilmsService;
            })();
            SearchFilmsService.ctorParameters = function() {
                return [
                    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                    { type: _store_facades_index__WEBPACK_IMPORTED_MODULE_8__["FilmsToWatchStoreFacade"] },
                ];
            };
            SearchFilmsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()],
                SearchFilmsService
            ); /***/
        },
        /***/ "./src/app/core/services/service.module.ts": /*!*************************************************!*\
  !*** ./src/app/core/services/service.module.ts ***!
  \*************************************************/ /*! exports provided: ServiceModule */ /***/ function srcAppCoreServicesServiceModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() {
                return ServiceModule;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js"
            );
            /* harmony import */ var _search_films_service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./search-films-service/index */ "./src/app/core/services/search-films-service/index.ts"
            );
            /* harmony import */ var _local_storage_service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./local-storage-service/index */ "./src/app/core/services/local-storage-service/index.ts"
            );
            var ServiceModule = function ServiceModule() {};
            ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                        providers: [
                            _search_films_service_index__WEBPACK_IMPORTED_MODULE_3__["SearchFilmsService"],
                            _local_storage_service_index__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
                        ],
                    }),
                ],
                ServiceModule
            ); /***/
        },
        /***/ "./src/app/core/store-facades/films-to-watch/films-to-watch.store-facade.ts": /*!**********************************************************************************!*\
  !*** ./src/app/core/store-facades/films-to-watch/films-to-watch.store-facade.ts ***!
  \**********************************************************************************/ /*! exports provided: FilmsToWatchStoreFacade */ /***/ function srcAppCoreStoreFacadesFilmsToWatchFilmsToWatchStoreFacadeTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchStoreFacade",
                function() {
                    return FilmsToWatchStoreFacade;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js"
            );
            /* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ../../store/index */ "./src/app/core/store/index.ts"
            );
            var FilmsToWatchStoreFacade = /*#__PURE__*/ (function() {
                function FilmsToWatchStoreFacade(store) {
                    this.store = store;
                    this.filmsToWatch$ = this.store.select(
                        _store_index__WEBPACK_IMPORTED_MODULE_3__["selectFilmToWatchList"]
                    );
                }
                /**
                 * Dispath AddFilmToWatchList action to store.
                 */ var _proto3 = FilmsToWatchStoreFacade.prototype;
                _proto3.addFilmToWatchList = function addFilmToWatchList(movie) {
                    this.store.dispatch(new _store_index__WEBPACK_IMPORTED_MODULE_3__["AddFilmToWatchList"](movie));
                }
                /**
                 * Dispath RemoveFilmFromWatchList action to store.
                 */;
                _proto3.removeFilmFromWatchList = function removeFilmFromWatchList(movie) {
                    this.store.dispatch(
                        new _store_index__WEBPACK_IMPORTED_MODULE_3__["RemoveFilmFromWatchList"](movie)
                    );
                };
                return FilmsToWatchStoreFacade;
            })();
            FilmsToWatchStoreFacade.ctorParameters = function() {
                return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }];
            };
            FilmsToWatchStoreFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()],
                FilmsToWatchStoreFacade
            ); /***/
        },
        /***/ "./src/app/core/store-facades/films-to-watch/index.ts": /*!************************************************************!*\
  !*** ./src/app/core/store-facades/films-to-watch/index.ts ***!
  \************************************************************/ /*! exports provided: FilmsToWatchStoreFacade */ /***/ function srcAppCoreStoreFacadesFilmsToWatchIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _films_to_watch_store_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./films-to-watch.store-facade */ "./src/app/core/store-facades/films-to-watch/films-to-watch.store-facade.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchStoreFacade",
                function() {
                    return _films_to_watch_store_facade__WEBPACK_IMPORTED_MODULE_1__["FilmsToWatchStoreFacade"];
                }
            ); /***/
        },
        /***/ "./src/app/core/store-facades/index.ts": /*!*********************************************!*\
  !*** ./src/app/core/store-facades/index.ts ***!
  \*********************************************/ /*! exports provided: StoreFacadeModule, FilmsToWatchStoreFacade */ /***/ function srcAppCoreStoreFacadesIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./films-to-watch/index */ "./src/app/core/store-facades/films-to-watch/index.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchStoreFacade",
                function() {
                    return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["FilmsToWatchStoreFacade"];
                }
            );
            /* harmony import */ var _store_facades_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./store-facades.module */ "./src/app/core/store-facades/store-facades.module.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreFacadeModule", function() {
                return _store_facades_module__WEBPACK_IMPORTED_MODULE_2__["StoreFacadeModule"];
            }); /***/
        },
        /***/ "./src/app/core/store-facades/store-facades.module.ts": /*!************************************************************!*\
  !*** ./src/app/core/store-facades/store-facades.module.ts ***!
  \************************************************************/ /*! exports provided: StoreFacadeModule */ /***/ function srcAppCoreStoreFacadesStoreFacadesModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFacadeModule", function() {
                return StoreFacadeModule;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"
            );
            /* harmony import */ var _films_to_watch_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./films-to-watch/index */ "./src/app/core/store-facades/films-to-watch/index.ts"
            );
            var StoreFacadeModule = function StoreFacadeModule() {};
            StoreFacadeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                        declarations: [],
                        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                        exports: [],
                        providers: [_films_to_watch_index__WEBPACK_IMPORTED_MODULE_3__["FilmsToWatchStoreFacade"]],
                    }),
                ],
                StoreFacadeModule
            ); /***/
        },
        /***/ "./src/app/core/store/films-to-watch/films-to-watch.action.ts": /*!********************************************************************!*\
  !*** ./src/app/core/store/films-to-watch/films-to-watch.action.ts ***!
  \********************************************************************/ /*! exports provided: FilmsToWatchActionTypes, AddFilmToWatchList, RemoveFilmFromWatchList, GetFilmsToWatch, GetFilmsToWatchSuccess */ /***/ function srcAppCoreStoreFilmsToWatchFilmsToWatchActionTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchActionTypes",
                function() {
                    return FilmsToWatchActionTypes;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFilmToWatchList", function() {
                return AddFilmToWatchList;
            });
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "RemoveFilmFromWatchList",
                function() {
                    return RemoveFilmFromWatchList;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFilmsToWatch", function() {
                return GetFilmsToWatch;
            });
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "GetFilmsToWatchSuccess",
                function() {
                    return GetFilmsToWatchSuccess;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /**
             * Types of films-to-watch actions.
             */ var FilmsToWatchActionTypes;
            (function(FilmsToWatchActionTypes) {
                FilmsToWatchActionTypes["ADD_FILM_TO_WATCH_LIST"] = "[Films-to-watch] ADD_FILM_TO_WATCH_LIST";
                FilmsToWatchActionTypes["REMOVE_FILM_FROM_WATCH_LIST"] = "[Films-to-watch] REMOVE_FILM_FROM_WATCH_LIST";
                FilmsToWatchActionTypes["GET_FILMS_TO_WATCH"] = "[Films-to-watch] GET_FILMS_TO_WATCH";
                FilmsToWatchActionTypes["GET_FILMS_TO_WATCH_SUCCESS"] = "[Films-to-watch] GET_FILMS_TO_WATCH_SUCCESS";
            })(FilmsToWatchActionTypes || (FilmsToWatchActionTypes = {}));
            /**
             * ADD_FILM_TO_WATCH_LIST action class.
             */ var AddFilmToWatchList = function AddFilmToWatchList(payload) {
                this.type = FilmsToWatchActionTypes.ADD_FILM_TO_WATCH_LIST;
                this.payload = payload;
            };
            /**
             * REMOVE_FILM_FROM_WATCH_LIST action class.
             */ var RemoveFilmFromWatchList = function RemoveFilmFromWatchList(payload) {
                this.type = FilmsToWatchActionTypes.REMOVE_FILM_FROM_WATCH_LIST;
                this.payload = payload;
            };
            /**
             * GET_FILMS_TO_WATCH action class.
             */ var GetFilmsToWatch = function GetFilmsToWatch() {
                this.type = FilmsToWatchActionTypes.GET_FILMS_TO_WATCH;
            };
            /**
             * GET_FILMS_TO_WATCH action class.
             */ var GetFilmsToWatchSuccess = function GetFilmsToWatchSuccess(payload) {
                this.type = FilmsToWatchActionTypes.GET_FILMS_TO_WATCH_SUCCESS;
                this.payload = payload;
            }; /***/
        },
        /***/ "./src/app/core/store/films-to-watch/films-to-watch.effect.ts": /*!********************************************************************!*\
  !*** ./src/app/core/store/films-to-watch/films-to-watch.effect.ts ***!
  \********************************************************************/ /*! exports provided: FilmsToWatchEffects */ /***/ function srcAppCoreStoreFilmsToWatchFilmsToWatchEffectTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchEffects",
                function() {
                    return FilmsToWatchEffects;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js"
            );
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js"
            );
            /* harmony import */ var _films_to_watch_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./films-to-watch.action */ "./src/app/core/store/films-to-watch/films-to-watch.action.ts"
            );
            /* harmony import */ var _services_local_storage_service_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../../services/local-storage-service/index */ "./src/app/core/services/local-storage-service/index.ts"
            );
            /* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ../../constants/index */ "./src/app/core/constants/index.ts"
            );
            var FilmsToWatchEffects = function FilmsToWatchEffects(actions$, localStorageService) {
                var _this3 = this;
                this.actions$ = actions$;
                this.localStorageService = localStorageService;
                this.localStorageActions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(
                    function() {
                        return _this3.actions$.pipe(
                            Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(
                                _films_to_watch_action__WEBPACK_IMPORTED_MODULE_4__["FilmsToWatchActionTypes"]
                                    .ADD_FILM_TO_WATCH_LIST,
                                _films_to_watch_action__WEBPACK_IMPORTED_MODULE_4__["FilmsToWatchActionTypes"]
                                    .REMOVE_FILM_FROM_WATCH_LIST
                            ),
                            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function(action) {
                                switch (action.type) {
                                    case _films_to_watch_action__WEBPACK_IMPORTED_MODULE_4__[
                                        "FilmsToWatchActionTypes"
                                    ].ADD_FILM_TO_WATCH_LIST:
                                        _this3.localStorageService.setSavedState(action.payload);
                                        break;
                                    case _films_to_watch_action__WEBPACK_IMPORTED_MODULE_4__[
                                        "FilmsToWatchActionTypes"
                                    ].REMOVE_FILM_FROM_WATCH_LIST:
                                        _this3.localStorageService.removeFromState(action.payload);
                                        break;
                                    default:
                                        break;
                                }
                            })
                        );
                    },
                    { dispatch: false }
                );
                this.getFilmsToWatchActions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(
                    function() {
                        return _this3.actions$.pipe(
                            Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(
                                _films_to_watch_action__WEBPACK_IMPORTED_MODULE_4__["FilmsToWatchActionTypes"]
                                    .GET_FILMS_TO_WATCH
                            ),
                            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function() {
                                var localStorageMovies =
                                    _this3.localStorageService.getSavedState(
                                        _constants_index__WEBPACK_IMPORTED_MODULE_6__["FILMS_TO_WATCH_KEY"]
                                    ) || [];
                                return new _films_to_watch_action__WEBPACK_IMPORTED_MODULE_4__[
                                    "GetFilmsToWatchSuccess"
                                ](localStorageMovies);
                            })
                        );
                    }
                );
            };
            FilmsToWatchEffects.ctorParameters = function() {
                return [
                    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
                    { type: _services_local_storage_service_index__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
                ];
            };
            FilmsToWatchEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()],
                FilmsToWatchEffects
            ); /***/
        },
        /***/ "./src/app/core/store/films-to-watch/films-to-watch.reducer.ts": /*!*********************************************************************!*\
  !*** ./src/app/core/store/films-to-watch/films-to-watch.reducer.ts ***!
  \*********************************************************************/ /*! exports provided: initialState, filmsToWatchReducer */ /***/ function srcAppCoreStoreFilmsToWatchFilmsToWatchReducerTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() {
                return initialState;
            });
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "filmsToWatchReducer",
                function() {
                    return filmsToWatchReducer;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _films_to_watch_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./films-to-watch.action */ "./src/app/core/store/films-to-watch/films-to-watch.action.ts"
            );
            /**
             * Initial state for reducer.
             */ var initialState = { filmsToWatch: [] };
            /**
             * Reducer function that reduce films to watch actions.
             */ var filmsToWatchReducer = function filmsToWatchReducer(state, action) {
                if (state === void 0) {
                    state = initialState;
                }
                switch (action.type) {
                    case _films_to_watch_action__WEBPACK_IMPORTED_MODULE_1__["FilmsToWatchActionTypes"]
                        .ADD_FILM_TO_WATCH_LIST: {
                        return Object.assign({}, state, {
                            filmsToWatch: [].concat(state.filmsToWatch, [action.payload]),
                        });
                    }
                    case _films_to_watch_action__WEBPACK_IMPORTED_MODULE_1__["FilmsToWatchActionTypes"]
                        .REMOVE_FILM_FROM_WATCH_LIST: {
                        return Object.assign({}, state, {
                            filmsToWatch: state.filmsToWatch.filter(function(movie) {
                                return movie.id !== action.payload.id;
                            }),
                        });
                    }
                    case _films_to_watch_action__WEBPACK_IMPORTED_MODULE_1__["FilmsToWatchActionTypes"]
                        .GET_FILMS_TO_WATCH_SUCCESS:
                        return Object.assign({}, state, {
                            filmsToWatch: [].concat(state.filmsToWatch, action.payload),
                        });
                    default: {
                        return state;
                    }
                }
            }; /***/
        },
        /***/ "./src/app/core/store/films-to-watch/films-to-watch.selector.ts": /*!**********************************************************************!*\
  !*** ./src/app/core/store/films-to-watch/films-to-watch.selector.ts ***!
  \**********************************************************************/ /*! exports provided: selectFilmToWatchState, selectFilmToWatchList */ /***/ function srcAppCoreStoreFilmsToWatchFilmsToWatchSelectorTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "selectFilmToWatchState",
                function() {
                    return selectFilmToWatchState;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "selectFilmToWatchList",
                function() {
                    return selectFilmToWatchList;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js"
            );
            var selectFilmToWatchState = function selectFilmToWatchState(state) {
                return state.filmsToWatch;
            };
            var selectFilmToWatchList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(
                selectFilmToWatchState,
                function(state) {
                    return state.filmsToWatch;
                }
            ); /***/
        },
        /***/ "./src/app/core/store/films-to-watch/index.ts": /*!****************************************************!*\
  !*** ./src/app/core/store/films-to-watch/index.ts ***!
  \****************************************************/ /*! exports provided: FilmsToWatchActionTypes, AddFilmToWatchList, RemoveFilmFromWatchList, GetFilmsToWatch, GetFilmsToWatchSuccess, FilmsToWatchEffects, initialState, filmsToWatchReducer, selectFilmToWatchState, selectFilmToWatchList */ /***/ function srcAppCoreStoreFilmsToWatchIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _films_to_watch_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./films-to-watch.action */ "./src/app/core/store/films-to-watch/films-to-watch.action.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchActionTypes",
                function() {
                    return _films_to_watch_action__WEBPACK_IMPORTED_MODULE_1__["FilmsToWatchActionTypes"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddFilmToWatchList", function() {
                return _films_to_watch_action__WEBPACK_IMPORTED_MODULE_1__["AddFilmToWatchList"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "RemoveFilmFromWatchList",
                function() {
                    return _films_to_watch_action__WEBPACK_IMPORTED_MODULE_1__["RemoveFilmFromWatchList"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFilmsToWatch", function() {
                return _films_to_watch_action__WEBPACK_IMPORTED_MODULE_1__["GetFilmsToWatch"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "GetFilmsToWatchSuccess",
                function() {
                    return _films_to_watch_action__WEBPACK_IMPORTED_MODULE_1__["GetFilmsToWatchSuccess"];
                }
            );
            /* harmony import */ var _films_to_watch_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./films-to-watch.effect */ "./src/app/core/store/films-to-watch/films-to-watch.effect.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilmsToWatchEffects", function() {
                return _films_to_watch_effect__WEBPACK_IMPORTED_MODULE_2__["FilmsToWatchEffects"];
            });
            /* harmony import */ var _films_to_watch_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./films-to-watch.reducer */ "./src/app/core/store/films-to-watch/films-to-watch.reducer.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() {
                return _films_to_watch_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filmsToWatchReducer", function() {
                return _films_to_watch_reducer__WEBPACK_IMPORTED_MODULE_3__["filmsToWatchReducer"];
            });
            /* harmony import */ var _films_to_watch_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./films-to-watch.selector */ "./src/app/core/store/films-to-watch/films-to-watch.selector.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "selectFilmToWatchState",
                function() {
                    return _films_to_watch_selector__WEBPACK_IMPORTED_MODULE_4__["selectFilmToWatchState"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "selectFilmToWatchList",
                function() {
                    return _films_to_watch_selector__WEBPACK_IMPORTED_MODULE_4__["selectFilmToWatchList"];
                }
            ); /***/
        },
        /***/ "./src/app/core/store/index.ts": /*!*************************************!*\
  !*** ./src/app/core/store/index.ts ***!
  \*************************************/ /*! exports provided: reducers, FilmsToWatchActionTypes, AddFilmToWatchList, RemoveFilmFromWatchList, GetFilmsToWatch, GetFilmsToWatchSuccess, FilmsToWatchEffects, initialState, filmsToWatchReducer, selectFilmToWatchState, selectFilmToWatchList */ /***/ function srcAppCoreStoreIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./films-to-watch/index */ "./src/app/core/store/films-to-watch/index.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchActionTypes",
                function() {
                    return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["FilmsToWatchActionTypes"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddFilmToWatchList", function() {
                return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["AddFilmToWatchList"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "RemoveFilmFromWatchList",
                function() {
                    return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["RemoveFilmFromWatchList"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFilmsToWatch", function() {
                return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["GetFilmsToWatch"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "GetFilmsToWatchSuccess",
                function() {
                    return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["GetFilmsToWatchSuccess"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilmsToWatchEffects", function() {
                return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["FilmsToWatchEffects"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() {
                return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["initialState"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filmsToWatchReducer", function() {
                return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["filmsToWatchReducer"];
            });
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "selectFilmToWatchState",
                function() {
                    return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["selectFilmToWatchState"];
                }
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "selectFilmToWatchList",
                function() {
                    return _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["selectFilmToWatchList"];
                }
            );
            /* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./reducers */ "./src/app/core/store/reducers.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() {
                return _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"];
            }); /***/
        },
        /***/ "./src/app/core/store/reducers.ts": /*!****************************************!*\
  !*** ./src/app/core/store/reducers.ts ***!
  \****************************************/ /*! exports provided: reducers */ /***/ function srcAppCoreStoreReducersTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() {
                return reducers;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./films-to-watch/index */ "./src/app/core/store/films-to-watch/index.ts"
            );
            /**
             * Reducers Map.
             */ var reducers = {
                filmsToWatch: _films_to_watch_index__WEBPACK_IMPORTED_MODULE_1__["filmsToWatchReducer"],
            }; /***/
        },
        /***/ "./src/app/core/utils/check-empty-results.util.ts": /*!********************************************************!*\
  !*** ./src/app/core/utils/check-empty-results.util.ts ***!
  \********************************************************/ /*! exports provided: checkEmptyResults */ /***/ function srcAppCoreUtilsCheckEmptyResultsUtilTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEmptyResults", function() {
                return checkEmptyResults;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ../constants/index */ "./src/app/core/constants/index.ts"
            );
            /**
             * Check if results is empty or response is .
             */ var checkEmptyResults = function checkEmptyResults(data) {
                var res =
                    data[0].title !== _constants_index__WEBPACK_IMPORTED_MODULE_1__["NO_SUCH_MOVIES"] &&
                    !data[0].title.includes(_constants_index__WEBPACK_IMPORTED_MODULE_1__["ERROR"]);
                return res;
            }; /***/
        },
        /***/ "./src/app/core/utils/get-images-url.util.ts": /*!***************************************************!*\
  !*** ./src/app/core/utils/get-images-url.util.ts ***!
  \***************************************************/ /*! exports provided: getImagesUrl */ /***/ function srcAppCoreUtilsGetImagesUrlUtilTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImagesUrl", function() {
                return getImagesUrl;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ../constants/index */ "./src/app/core/constants/index.ts"
            );
            /**
             * Returns images url for pictures in movies.
             */ var getImagesUrl = function getImagesUrl(searchValue, who) {
                switch (who) {
                    case "poster":
                        return (
                            "" +
                            _constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_SEARCH_IMAGES_URL"] +
                            _constants_index__WEBPACK_IMPORTED_MODULE_1__["POSTER_IMAGE_SIZE_PX"] +
                            searchValue
                        );
                    case "actor":
                        return (
                            "" +
                            _constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_SEARCH_IMAGES_URL"] +
                            _constants_index__WEBPACK_IMPORTED_MODULE_1__["ACTOR_IMAGE_SIZE_PX"] +
                            searchValue
                        );
                    default:
                        return (
                            "" +
                            _constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_SEARCH_IMAGES_URL"] +
                            _constants_index__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_IMAGE_SIZE_PX"] +
                            searchValue
                        );
                }
            }; /***/
        },
        /***/ "./src/app/core/utils/get-movie-details-url.util.ts": /*!**********************************************************!*\
  !*** ./src/app/core/utils/get-movie-details-url.util.ts ***!
  \**********************************************************/ /*! exports provided: getMovieDetailsUrl */ /***/ function srcAppCoreUtilsGetMovieDetailsUrlUtilTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieDetailsUrl", function() {
                return getMovieDetailsUrl;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ../constants/index */ "./src/app/core/constants/index.ts"
            );
            /**
             * Returns search url for movie details.
             */ var getMovieDetailsUrl = function getMovieDetailsUrl(id) {
                return (
                    _constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_SEARCH_URL"] +
                    "movie/" +
                    id +
                    "?api_key=" +
                    _constants_index__WEBPACK_IMPORTED_MODULE_1__["API_KEY"] +
                    "&append_to_response=videos,credits"
                );
            }; /***/
        },
        /***/ "./src/app/core/utils/get-movie-trailer-url.util.ts": /*!**********************************************************!*\
  !*** ./src/app/core/utils/get-movie-trailer-url.util.ts ***!
  \**********************************************************/ /*! exports provided: getMovieTrailerUrl */ /***/ function srcAppCoreUtilsGetMovieTrailerUrlUtilTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieTrailerUrl", function() {
                return getMovieTrailerUrl;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ../constants/index */ "./src/app/core/constants/index.ts"
            );
            /**
             * Returns search url for movie trailer.
             */ var getMovieTrailerUrl = function getMovieTrailerUrl(key) {
                return "" + _constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_YOUTUBE_VIDEOS_URL"] + key;
            }; /***/
        },
        /***/ "./src/app/core/utils/get-search-url.util.ts": /*!***************************************************!*\
  !*** ./src/app/core/utils/get-search-url.util.ts ***!
  \***************************************************/ /*! exports provided: getSearchUrl */ /***/ function srcAppCoreUtilsGetSearchUrlUtilTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchUrl", function() {
                return getSearchUrl;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ../constants/index */ "./src/app/core/constants/index.ts"
            );
            /**
             * Returns search url for search movies.
             */ var getSearchUrl = function getSearchUrl(searchValue, page) {
                return (
                    _constants_index__WEBPACK_IMPORTED_MODULE_1__["BASE_SEARCH_URL"] +
                    "search/movie?api_key=" +
                    _constants_index__WEBPACK_IMPORTED_MODULE_1__["API_KEY"] +
                    "&query=" +
                    searchValue +
                    "&page=" +
                    page
                );
            }; /***/
        },
        /***/ "./src/app/core/utils/index.ts": /*!*************************************!*\
  !*** ./src/app/core/utils/index.ts ***!
  \*************************************/ /*! exports provided: getSearchUrl, getImagesUrl, getMovieDetailsUrl, getMovieTrailerUrl, checkEmptyResults */ /***/ function srcAppCoreUtilsIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _get_search_url_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./get-search-url.util */ "./src/app/core/utils/get-search-url.util.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchUrl", function() {
                return _get_search_url_util__WEBPACK_IMPORTED_MODULE_1__["getSearchUrl"];
            });
            /* harmony import */ var _get_images_url_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./get-images-url.util */ "./src/app/core/utils/get-images-url.util.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImagesUrl", function() {
                return _get_images_url_util__WEBPACK_IMPORTED_MODULE_2__["getImagesUrl"];
            });
            /* harmony import */ var _get_movie_details_url_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./get-movie-details-url.util */ "./src/app/core/utils/get-movie-details-url.util.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMovieDetailsUrl", function() {
                return _get_movie_details_url_util__WEBPACK_IMPORTED_MODULE_3__["getMovieDetailsUrl"];
            });
            /* harmony import */ var _get_movie_trailer_url_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./get-movie-trailer-url.util */ "./src/app/core/utils/get-movie-trailer-url.util.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMovieTrailerUrl", function() {
                return _get_movie_trailer_url_util__WEBPACK_IMPORTED_MODULE_4__["getMovieTrailerUrl"];
            });
            /* harmony import */ var _check_empty_results_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ./check-empty-results.util */ "./src/app/core/utils/check-empty-results.util.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkEmptyResults", function() {
                return _check_empty_results_util__WEBPACK_IMPORTED_MODULE_5__["checkEmptyResults"];
            }); /***/
        },
        /***/ "./src/app/films-to-watch-page/films-to-watch-page.component.scss": /*!************************************************************************!*\
  !*** ./src/app/films-to-watch-page/films-to-watch-page.component.scss ***!
  \************************************************************************/ /*! exports provided: default */ /***/ function srcAppFilmsToWatchPageFilmsToWatchPageComponentScss(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                ".mat-expansion-panel,\n.container {\n  width: 85%;\n  margin: 0.25rem auto;\n  margin-top: 1rem;\n  text-align: center;\n}\n\n.mat-panel-title {\n  flex-grow: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMtdG8td2F0Y2gtcGFnZS9DOlxcVXNlcnNcXEloYXJfUHJhdmF0b3JhdVxcRGVza3RvcFxcdGFza3NcXGFuZ3VsYXItYXBwLXNhbmRib3gvc3JjXFxhcHBcXGZpbG1zLXRvLXdhdGNoLXBhZ2VcXGZpbG1zLXRvLXdhdGNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbG1zLXRvLXdhdGNoLXBhZ2UvZmlsbXMtdG8td2F0Y2gtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9maWxtcy10by13YXRjaC1wYWdlL2ZpbG1zLXRvLXdhdGNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWV4cGFuc2lvbi1wYW5lbCxcbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwLjI1cmVtIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtcGFuZWwtdGl0bGUge1xuICAgIGZsZXgtZ3JvdzogMDtcbn1cbiIsIi5tYXQtZXhwYW5zaW9uLXBhbmVsLFxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMC4yNXJlbSBhdXRvO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtcGFuZWwtdGl0bGUge1xuICBmbGV4LWdyb3c6IDA7XG59Il19 */"; /***/
        },
        /***/ "./src/app/films-to-watch-page/films-to-watch-page.component.ts": /*!**********************************************************************!*\
  !*** ./src/app/films-to-watch-page/films-to-watch-page.component.ts ***!
  \**********************************************************************/ /*! exports provided: FilmsToWatchPageComponent */ /***/ function srcAppFilmsToWatchPageFilmsToWatchPageComponentTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchPageComponent",
                function() {
                    return FilmsToWatchPageComponent;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ../core/index */ "./src/app/core/index.ts"
            );
            var FilmsToWatchPageComponent = /*#__PURE__*/ (function() {
                function FilmsToWatchPageComponent(filmsToWatchStoreFacade) {
                    /**
                     * Property for Angular material open-close panel.
                     */ this.panelOpenState = false;
                    this.filmsToWatchStoreFacade = filmsToWatchStoreFacade;
                }
                /**
                 * Get films from store to filmsToWatch$ property when ther component will mount.
                 */ var _proto4 = FilmsToWatchPageComponent.prototype;
                _proto4.ngOnInit = function ngOnInit() {
                    this.filmsToWatch$ = this.filmsToWatchStoreFacade.filmsToWatch$;
                };
                return FilmsToWatchPageComponent;
            })();
            FilmsToWatchPageComponent.ctorParameters = function() {
                return [{ type: _core_index__WEBPACK_IMPORTED_MODULE_2__["FilmsToWatchStoreFacade"] }];
            };
            FilmsToWatchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                        selector: "app-films-to-watch-page",
                        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                            __webpack_require__(
                                /*! raw-loader!./films-to-watch-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/films-to-watch-page/films-to-watch-page.component.html"
                            )
                        ).default,
                        styles: [
                            tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                                __webpack_require__(
                                    /*! ./films-to-watch-page.component.scss */ "./src/app/films-to-watch-page/films-to-watch-page.component.scss"
                                )
                            ).default,
                        ],
                    }),
                ],
                FilmsToWatchPageComponent
            ); /***/
        },
        /***/ "./src/app/films-to-watch-page/films-to-watch-page.module.ts": /*!*******************************************************************!*\
  !*** ./src/app/films-to-watch-page/films-to-watch-page.module.ts ***!
  \*******************************************************************/ /*! exports provided: FilmsToWatchPageModule */ /***/ function srcAppFilmsToWatchPageFilmsToWatchPageModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchPageModule",
                function() {
                    return FilmsToWatchPageModule;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"
            );
            /* harmony import */ var _films_to_watch_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./films-to-watch-page.component */ "./src/app/films-to-watch-page/films-to-watch-page.component.ts"
            );
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js"
            );
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js"
            );
            var FilmsToWatchPageModule = function FilmsToWatchPageModule() {};
            FilmsToWatchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                        declarations: [
                            _films_to_watch_page_component__WEBPACK_IMPORTED_MODULE_3__["FilmsToWatchPageComponent"],
                        ],
                        imports: [
                            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                            _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                        ],
                    }),
                ],
                FilmsToWatchPageModule
            ); /***/
        },
        /***/ "./src/app/films-to-watch-page/index.ts": /*!**********************************************!*\
  !*** ./src/app/films-to-watch-page/index.ts ***!
  \**********************************************/ /*! exports provided: FilmsToWatchPageModule */ /***/ function srcAppFilmsToWatchPageIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _films_to_watch_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./films-to-watch-page.module */ "./src/app/films-to-watch-page/films-to-watch-page.module.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "FilmsToWatchPageModule",
                function() {
                    return _films_to_watch_page_module__WEBPACK_IMPORTED_MODULE_1__["FilmsToWatchPageModule"];
                }
            ); /***/
        },
        /***/ "./src/app/movie-search-page/index.ts": /*!********************************************!*\
  !*** ./src/app/movie-search-page/index.ts ***!
  \********************************************/ /*! exports provided: MovieSearchPageModule */ /***/ function srcAppMovieSearchPageIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _movie_search_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./movie-search-page.module */ "./src/app/movie-search-page/movie-search-page.module.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "MovieSearchPageModule",
                function() {
                    return _movie_search_page_module__WEBPACK_IMPORTED_MODULE_1__["MovieSearchPageModule"];
                }
            ); /***/
        },
        /***/ "./src/app/movie-search-page/movie-list-item/movie-list-item.component.scss": /*!**********************************************************************************!*\
  !*** ./src/app/movie-search-page/movie-list-item/movie-list-item.component.scss ***!
  \**********************************************************************************/ /*! exports provided: default */ /***/ function srcAppMovieSearchPageMovieListItemMovieListItemComponentScss(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                ".card-panel {\n  border: 0.06rem solid #5555;\n  margin: 0 0.625rem;\n  margin-bottom: 1rem;\n  padding: 0 0.625rem;\n  width: 380px;\n  min-height: 99%;\n  border-radius: 0.3rem;\n  background-color: #fffc;\n  text-align: center;\n}\n.card-panel .card-release-date {\n  text-align: center;\n}\n.card-panel .card-poster {\n  width: 100%;\n}\n.card-title {\n  text-align: center;\n  border-radius: 0.3rem;\n  padding: 0.625rem 0;\n  font-size: 1.375rem;\n}\n.actors-title {\n  margin: 0;\n  font-size: 1rem;\n  text-transform: uppercase;\n  text-align: center;\n}\n.actors-list {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding: 0;\n  list-style: none;\n}\n.actors-list .actors-list__item {\n  margin: 1rem 0;\n  padding: 0;\n  max-width: 18%;\n  border-radius: 0.3rem;\n}\n.actors-list .actors-list__item .actors-list__actor-name {\n  margin: 0 auto;\n  min-height: 4.125rem;\n}\n.actors-list .actors-list__item .actors-list__actor-photo {\n  border-radius: 0.3rem;\n  width: 100%;\n}\n.wish-list {\n  margin-bottom: 0.25rem;\n}\n.wish-list__checkbox {\n  text-transform: uppercase;\n}\n@media screen and (max-width: 420px) {\n  .card-panel {\n    width: 300px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .card-panel {\n    width: 280px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtc2VhcmNoLXBhZ2UvbW92aWUtbGlzdC1pdGVtL0M6XFxVc2Vyc1xcSWhhcl9QcmF2YXRvcmF1XFxEZXNrdG9wXFx0YXNrc1xcYW5ndWxhci1hcHAtc2FuZGJveC9zcmNcXGFwcFxcbW92aWUtc2VhcmNoLXBhZ2VcXG1vdmllLWxpc3QtaXRlbVxcbW92aWUtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1zZWFyY2gtcGFnZS9tb3ZpZS1saXN0LWl0ZW0vbW92aWUtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FERUk7RUFDSSxXQUFBO0FDQVI7QURJQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDREo7QURHSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDRFI7QURHUTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQ0RaO0FESVE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNGWjtBRE9BO0VBQ0ksc0JBQUE7QUNKSjtBRE9BO0VBQ0kseUJBQUE7QUNKSjtBRE9BO0VBQ0k7SUFDSSxZQUFBO0VDSk47QUFDRjtBRE9BO0VBQ0k7SUFDSSxZQUFBO0VDTE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vdmllLXNlYXJjaC1wYWdlL21vdmllLWxpc3QtaXRlbS9tb3ZpZS1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wYW5lbCB7XG4gICAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkICM1NTU1O1xuICAgIG1hcmdpbjogMCAwLjYyNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDk5JTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJiAuY2FyZC1yZWxlYXNlLWRhdGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJiAuY2FyZC1wb3N0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICAgIHBhZGRpbmc6IDAuNjI1cmVtIDA7XG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcbn1cblxuLmFjdG9ycy10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdG9ycy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAmIC5hY3RvcnMtbGlzdF9faXRlbSB7XG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXgtd2lkdGg6IDE4JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuXG4gICAgICAgICYgLmFjdG9ycy1saXN0X19hY3Rvci1uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNC4xMjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmIC5hY3RvcnMtbGlzdF9fYWN0b3ItcGhvdG8ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi53aXNoLWxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbi53aXNoLWxpc3RfX2NoZWNrYm94IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgIC5jYXJkLXBhbmVsIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICAuY2FyZC1wYW5lbCB7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICB9XG59XG4iLCIuY2FyZC1wYW5lbCB7XG4gIGJvcmRlcjogMC4wNnJlbSBzb2xpZCAjNTU1NTtcbiAgbWFyZ2luOiAwIDAuNjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICB3aWR0aDogMzgwcHg7XG4gIG1pbi1oZWlnaHQ6IDk5JTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtcGFuZWwgLmNhcmQtcmVsZWFzZS1kYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtcGFuZWwgLmNhcmQtcG9zdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIHBhZGRpbmc6IDAuNjI1cmVtIDA7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG59XG5cbi5hY3RvcnMtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0b3JzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmFjdG9ycy1saXN0IC5hY3RvcnMtbGlzdF9faXRlbSB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXgtd2lkdGg6IDE4JTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xufVxuLmFjdG9ycy1saXN0IC5hY3RvcnMtbGlzdF9faXRlbSAuYWN0b3JzLWxpc3RfX2FjdG9yLW5hbWUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLWhlaWdodDogNC4xMjVyZW07XG59XG4uYWN0b3JzLWxpc3QgLmFjdG9ycy1saXN0X19pdGVtIC5hY3RvcnMtbGlzdF9fYWN0b3ItcGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2lzaC1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLndpc2gtbGlzdF9fY2hlY2tib3gge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuY2FyZC1wYW5lbCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuY2FyZC1wYW5lbCB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICB9XG59Il19 */"; /***/
        },
        /***/ "./src/app/movie-search-page/movie-list-item/movie-list-item.component.ts": /*!********************************************************************************!*\
  !*** ./src/app/movie-search-page/movie-list-item/movie-list-item.component.ts ***!
  \********************************************************************************/ /*! exports provided: MovieListItemComponent */ /***/ function srcAppMovieSearchPageMovieListItemMovieListItemComponentTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "MovieListItemComponent",
                function() {
                    return MovieListItemComponent;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            var MovieListItemComponent = /*#__PURE__*/ (function() {
                function MovieListItemComponent() {
                    /**
                     * Create output new EventEmmiter with data about movie
                     * when user is clicked to 'Add movie to wish list' button.
                     */ this.checkBoxClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                /**
                 * Emit movie with checkbox value if ckeckbox was clicked.
                 */ var _proto5 = MovieListItemComponent.prototype;
                _proto5.onCheckboxClicked = function onCheckboxClicked() {
                    this.checkBoxClicked.emit(this.film);
                };
                return MovieListItemComponent;
            })();
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()],
                MovieListItemComponent.prototype,
                "film",
                void 0
            );
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()],
                MovieListItemComponent.prototype,
                "checkBoxClicked",
                void 0
            );
            MovieListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                        selector: "app-movie-list-item",
                        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                            __webpack_require__(
                                /*! raw-loader!./movie-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/movie-list-item/movie-list-item.component.html"
                            )
                        ).default,
                        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                        styles: [
                            tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                                __webpack_require__(
                                    /*! ./movie-list-item.component.scss */ "./src/app/movie-search-page/movie-list-item/movie-list-item.component.scss"
                                )
                            ).default,
                        ],
                    }),
                ],
                MovieListItemComponent
            ); /***/
        },
        /***/ "./src/app/movie-search-page/movie-list/movie-list.component.scss": /*!************************************************************************!*\
  !*** ./src/app/movie-search-page/movie-list/movie-list.component.scss ***!
  \************************************************************************/ /*! exports provided: default */ /***/ function srcAppMovieSearchPageMovieListMovieListComponentScss(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                ".movies {\n  list-style: none;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtc2VhcmNoLXBhZ2UvbW92aWUtbGlzdC9DOlxcVXNlcnNcXEloYXJfUHJhdmF0b3JhdVxcRGVza3RvcFxcdGFza3NcXGFuZ3VsYXItYXBwLXNhbmRib3gvc3JjXFxhcHBcXG1vdmllLXNlYXJjaC1wYWdlXFxtb3ZpZS1saXN0XFxtb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1zZWFyY2gtcGFnZS9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1zZWFyY2gtcGFnZS9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWVzIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbiIsIi5tb3ZpZXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59Il19 */"; /***/
        },
        /***/ "./src/app/movie-search-page/movie-list/movie-list.component.ts": /*!**********************************************************************!*\
  !*** ./src/app/movie-search-page/movie-list/movie-list.component.ts ***!
  \**********************************************************************/ /*! exports provided: MovieListComponent */ /***/ function srcAppMovieSearchPageMovieListMovieListComponentTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() {
                return MovieListComponent;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            var MovieListComponent = /*#__PURE__*/ (function() {
                function MovieListComponent() {
                    /**
                     * Create output new EventEmmiter.
                     */ this.checkBoxClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                /**
                 * Emit movie with checkbox value from movie-list-item-component if ckeckbox was clicked.
                 */ var _proto6 = MovieListComponent.prototype;
                _proto6.onCheckBoxClicked = function onCheckBoxClicked(movie) {
                    this.checkBoxClicked.emit(movie);
                }
                /**
                 * trackBy function for optimize painting movies on the page.
                 */;
                _proto6.trackByFn = function trackByFn(_, film) {
                    return film.id;
                };
                return MovieListComponent;
            })();
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()],
                MovieListComponent.prototype,
                "resultsFilms",
                void 0
            );
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()],
                MovieListComponent.prototype,
                "checkBoxClicked",
                void 0
            );
            MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                        selector: "app-movie-list",
                        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                            __webpack_require__(
                                /*! raw-loader!./movie-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/movie-list/movie-list.component.html"
                            )
                        ).default,
                        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                        styles: [
                            tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                                __webpack_require__(
                                    /*! ./movie-list.component.scss */ "./src/app/movie-search-page/movie-list/movie-list.component.scss"
                                )
                            ).default,
                        ],
                    }),
                ],
                MovieListComponent
            ); /***/
        },
        /***/ "./src/app/movie-search-page/movie-search-page.component.scss": /*!********************************************************************!*\
  !*** ./src/app/movie-search-page/movie-search-page.component.scss ***!
  \********************************************************************/ /*! exports provided: default */ /***/ function srcAppMovieSearchPageMovieSearchPageComponentScss(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                ".container {\n  margin: 0 auto;\n  margin-bottom: 1rem;\n  min-height: calc(100vh - 5rem);\n}\n\n.wrapper {\n  margin: 0 auto;\n  width: 90%;\n  padding-bottom: 1rem;\n}\n\n.load-more-button,\n.mat-spinner {\n  display: block;\n  margin: 0 auto;\n  margin-top: 0.625rem;\n}\n\n.mat-toolbar {\n  padding: 2.5rem 1rem;\n}\n\n.mat-h1 {\n  display: block;\n  padding: 0;\n  margin: 0;\n}\n\n.no-movies-paragraph {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtc2VhcmNoLXBhZ2UvQzpcXFVzZXJzXFxJaGFyX1ByYXZhdG9yYXVcXERlc2t0b3BcXHRhc2tzXFxhbmd1bGFyLWFwcC1zYW5kYm94L3NyY1xcYXBwXFxtb3ZpZS1zZWFyY2gtcGFnZVxcbW92aWUtc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllLXNlYXJjaC1wYWdlL21vdmllLXNlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTs7RUFFSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtc2VhcmNoLXBhZ2UvbW92aWUtc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1cmVtKTtcbn1cblxuLndyYXBwZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5sb2FkLW1vcmUtYnV0dG9uLFxuLm1hdC1zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAwLjYyNXJlbTtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAyLjVyZW0gMXJlbTtcbn1cblxuLm1hdC1oMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5uby1tb3ZpZXMtcGFyYWdyYXBoIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1cmVtKTtcbn1cblxuLndyYXBwZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5sb2FkLW1vcmUtYnV0dG9uLFxuLm1hdC1zcGlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAwLjYyNXJlbTtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgcGFkZGluZzogMi41cmVtIDFyZW07XG59XG5cbi5tYXQtaDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubm8tbW92aWVzLXBhcmFncmFwaCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"; /***/
        },
        /***/ "./src/app/movie-search-page/movie-search-page.component.ts": /*!******************************************************************!*\
  !*** ./src/app/movie-search-page/movie-search-page.component.ts ***!
  \******************************************************************/ /*! exports provided: MovieSearchPageComponent */ /***/ function srcAppMovieSearchPageMovieSearchPageComponentTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "MovieSearchPageComponent",
                function() {
                    return MovieSearchPageComponent;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! rxjs */ "./node_modules/rxjs/_esm2015/index.js"
            );
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js"
            );
            /* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ../core/index */ "./src/app/core/index.ts"
            );
            var MovieSearchPageComponent = /*#__PURE__*/ (function() {
                function MovieSearchPageComponent(searchFilmsService, filmsToWatchStoreFacade) {
                    /**
                     * Loading flag.
                     */ this.isLoading = false;
                    /**
                     * Is no more results flag.
                     */ this.isNoMoreResults = false;
                    /**
                     * If searching films exists flag.
                     */ this.isSearchedFilms = false;
                    this.searchFilmsService = searchFilmsService;
                    this.filmsToWatchStoreFacade = filmsToWatchStoreFacade;
                }
                /**
                 *  Makes response to API and fetching mapped-data to resultsFilms$ Array.
                 */ var _proto7 = MovieSearchPageComponent.prototype;
                _proto7.loadFilms = function loadFilms(searchQuery) {
                    var _this4 = this;
                    this.isSearchedFilms = false;
                    this.isNoMoreResults = false;
                    if (!searchQuery || !searchQuery.trim()) {
                        this.resultsFilms$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([
                            { title: "Type something for search" },
                        ]);
                    } else {
                        this.isLoading = true;
                        this.resultsFilms$ = this.searchFilmsService.getFilmsFromApi(searchQuery).pipe(
                            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function(data) {
                                _this4.isLoading = false;
                                _this4.isSearchedFilms = Object(
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["checkEmptyResults"]
                                )(data);
                            })
                        );
                    }
                }
                /**
                 * Emit fetching data from next page when user click "Load More" button.
                 */;
                _proto7.LoadMoreMovies = function LoadMoreMovies() {
                    this.isLoading = true;
                    this.searchFilmsService.nextPage();
                    this.isNoMoreResults = this.searchFilmsService.isNoMoreResults;
                }
                /**
                 * Change isChecked property if checkbox was clicked.
                 */;
                _proto7.onCheckBoxClicked = function onCheckBoxClicked(movie) {
                    if (movie.checkboxValue) {
                        this.filmsToWatchStoreFacade.addFilmToWatchList(movie);
                    } else {
                        this.filmsToWatchStoreFacade.removeFilmFromWatchList(movie);
                    }
                };
                return MovieSearchPageComponent;
            })();
            MovieSearchPageComponent.ctorParameters = function() {
                return [
                    { type: _core_index__WEBPACK_IMPORTED_MODULE_4__["SearchFilmsService"] },
                    { type: _core_index__WEBPACK_IMPORTED_MODULE_4__["FilmsToWatchStoreFacade"] },
                ];
            };
            MovieSearchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                        selector: "app-movie-search-page",
                        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                            __webpack_require__(
                                /*! raw-loader!./movie-search-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/movie-search-page.component.html"
                            )
                        ).default,
                        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                        styles: [
                            tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                                __webpack_require__(
                                    /*! ./movie-search-page.component.scss */ "./src/app/movie-search-page/movie-search-page.component.scss"
                                )
                            ).default,
                        ],
                    }),
                ],
                MovieSearchPageComponent
            ); /***/
        },
        /***/ "./src/app/movie-search-page/movie-search-page.module.ts": /*!***************************************************************!*\
  !*** ./src/app/movie-search-page/movie-search-page.module.ts ***!
  \***************************************************************/ /*! exports provided: MovieSearchPageModule */ /***/ function srcAppMovieSearchPageMovieSearchPageModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "MovieSearchPageModule",
                function() {
                    return MovieSearchPageModule;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"
            );
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"
            );
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js"
            );
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js"
            );
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js"
            );
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js"
            );
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                /*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js"
            );
            /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                /*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js"
            );
            /* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
                /*! ./search-input/search-input.component */ "./src/app/movie-search-page/search-input/search-input.component.ts"
            );
            /* harmony import */ var _movie_search_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
                /*! ./movie-search-page.component */ "./src/app/movie-search-page/movie-search-page.component.ts"
            );
            /* harmony import */ var _movie_list_item_movie_list_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
                /*! ./movie-list-item/movie-list-item.component */ "./src/app/movie-search-page/movie-list-item/movie-list-item.component.ts"
            );
            /* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
                /*! ./movie-list/movie-list.component */ "./src/app/movie-search-page/movie-list/movie-list.component.ts"
            );
            var MovieSearchPageModule = function MovieSearchPageModule() {};
            MovieSearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                        declarations: [
                            _movie_search_page_component__WEBPACK_IMPORTED_MODULE_11__["MovieSearchPageComponent"],
                            _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_10__["SearchInputComponent"],
                            _movie_list_item_movie_list_item_component__WEBPACK_IMPORTED_MODULE_12__[
                                "MovieListItemComponent"
                            ],
                            _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_13__["MovieListComponent"],
                        ],
                        imports: [
                            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                        ],
                        providers: [],
                        exports: [
                            _movie_search_page_component__WEBPACK_IMPORTED_MODULE_11__["MovieSearchPageComponent"],
                        ],
                    }),
                ],
                MovieSearchPageModule
            ); /***/
        },
        /***/ "./src/app/movie-search-page/search-input/search-input.component.scss": /*!****************************************************************************!*\
  !*** ./src/app/movie-search-page/search-input/search-input.component.scss ***!
  \****************************************************************************/ /*! exports provided: default */ /***/ function srcAppMovieSearchPageSearchInputSearchInputComponentScss(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                ".mat-form-field {\n  padding: 0.625rem;\n  width: calc(100% - 1.25rem);\n}\n\n.submit-button {\n  margin-left: 0.625rem;\n}\n\n@media screen and (max-width: 768px) {\n  .submit-button {\n    display: block;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtc2VhcmNoLXBhZ2Uvc2VhcmNoLWlucHV0L0M6XFxVc2Vyc1xcSWhhcl9QcmF2YXRvcmF1XFxEZXNrdG9wXFx0YXNrc1xcYW5ndWxhci1hcHAtc2FuZGJveC9zcmNcXGFwcFxcbW92aWUtc2VhcmNoLXBhZ2VcXHNlYXJjaC1pbnB1dFxcc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1zZWFyY2gtcGFnZS9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLFlBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtc2VhcmNoLXBhZ2Uvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XG4gICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuMjVyZW0pO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNjI1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG4iLCIubWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuMjVyZW0pO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjYyNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN1Ym1pdC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufSJdfQ== */"; /***/
        },
        /***/ "./src/app/movie-search-page/search-input/search-input.component.ts": /*!**************************************************************************!*\
  !*** ./src/app/movie-search-page/search-input/search-input.component.ts ***!
  \**************************************************************************/ /*! exports provided: SearchInputComponent */ /***/ function srcAppMovieSearchPageSearchInputSearchInputComponentTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "SearchInputComponent",
                function() {
                    return SearchInputComponent;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            var SearchInputComponent = /*#__PURE__*/ (function() {
                function SearchInputComponent() {
                    /**
                     * Create output new EventEmmiter.
                     */ this.addValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                /**
                 * Emit value from input and clear input value.
                 */ var _proto8 = SearchInputComponent.prototype;
                _proto8.onChangeInput = function onChangeInput() {
                    this.addValue.emit(this.inputValue);
                    this.inputValue = "";
                    return false;
                };
                return SearchInputComponent;
            })();
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()],
                SearchInputComponent.prototype,
                "addValue",
                void 0
            );
            SearchInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                        selector: "app-search-input",
                        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                            __webpack_require__(
                                /*! raw-loader!./search-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-search-page/search-input/search-input.component.html"
                            )
                        ).default,
                        styles: [
                            tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                                __webpack_require__(
                                    /*! ./search-input.component.scss */ "./src/app/movie-search-page/search-input/search-input.component.scss"
                                )
                            ).default,
                        ],
                    }),
                ],
                SearchInputComponent
            ); /***/
        },
        /***/ "./src/app/navigation-menu/index.ts": /*!******************************************!*\
  !*** ./src/app/navigation-menu/index.ts ***!
  \******************************************/ /*! exports provided: NavigationMenuModule */ /***/ function srcAppNavigationMenuIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _navigation_menu_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./navigation-menu.module */ "./src/app/navigation-menu/navigation-menu.module.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "NavigationMenuModule",
                function() {
                    return _navigation_menu_module__WEBPACK_IMPORTED_MODULE_1__["NavigationMenuModule"];
                }
            ); /***/
        },
        /***/ "./src/app/navigation-menu/navigation-menu.component.scss": /*!****************************************************************!*\
  !*** ./src/app/navigation-menu/navigation-menu.component.scss ***!
  \****************************************************************/ /*! exports provided: default */ /***/ function srcAppNavigationMenuNavigationMenuComponentScss(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] =
                ".wrapper {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.title {\n  margin: auto 0;\n}\n\n.title__link {\n  text-decoration: none;\n  color: #fff;\n}\n\n.navigation-menu {\n  list-style: none;\n}\n\n.navigation-menu__link {\n  box-sizing: border-box;\n  display: inline;\n}\n\n.link {\n  font-weight: 700;\n  box-sizing: border-box;\n  color: #fff7;\n  text-decoration: none;\n  padding: 1rem;\n}\n\n.active {\n  color: #fff;\n}\n\n@media screen and (max-width: 450px) {\n  .wrapper {\n    justify-content: center;\n  }\n\n  .title__link {\n    display: none;\n  }\n\n  .link {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi1tZW51L0M6XFxVc2Vyc1xcSWhhcl9QcmF2YXRvcmF1XFxEZXNrdG9wXFx0YXNrc1xcYW5ndWxhci1hcHAtc2FuZGJveC9zcmNcXGFwcFxcbmF2aWdhdGlvbi1tZW51XFxuYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24tbWVudS9uYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSx1QkFBQTtFQ0NOOztFREVFO0lBQ0ksYUFBQTtFQ0NOOztFREVFO0lBQ0ksZUFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uLW1lbnUvbmF2aWdhdGlvbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi50aXRsZSB7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbi50aXRsZV9fbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51X19saW5rIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogI2ZmZjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC53cmFwcGVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRpdGxlX19saW5rIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubGluayB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG59XG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuXG4udGl0bGVfX2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tbWVudV9fbGluayB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmxpbmsge1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI2ZmZjc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAud3JhcHBlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAudGl0bGVfX2xpbmsge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubGluayB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59Il19 */"; /***/
        },
        /***/ "./src/app/navigation-menu/navigation-menu.component.ts": /*!**************************************************************!*\
  !*** ./src/app/navigation-menu/navigation-menu.component.ts ***!
  \**************************************************************/ /*! exports provided: NavigationMenuComponent */ /***/ function srcAppNavigationMenuNavigationMenuComponentTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "NavigationMenuComponent",
                function() {
                    return NavigationMenuComponent;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            var NavigationMenuComponent = function NavigationMenuComponent() {};
            NavigationMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                        selector: "app-navigation-menu",
                        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                            __webpack_require__(
                                /*! raw-loader!./navigation-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-menu/navigation-menu.component.html"
                            )
                        ).default,
                        styles: [
                            tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                                __webpack_require__(
                                    /*! ./navigation-menu.component.scss */ "./src/app/navigation-menu/navigation-menu.component.scss"
                                )
                            ).default,
                        ],
                    }),
                ],
                NavigationMenuComponent
            ); /***/
        },
        /***/ "./src/app/navigation-menu/navigation-menu.module.ts": /*!***********************************************************!*\
  !*** ./src/app/navigation-menu/navigation-menu.module.ts ***!
  \***********************************************************/ /*! exports provided: NavigationMenuModule */ /***/ function srcAppNavigationMenuNavigationMenuModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                "NavigationMenuModule",
                function() {
                    return NavigationMenuModule;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"
            );
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js"
            );
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js"
            );
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js"
            );
            /* harmony import */ var _navigation_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ./navigation-menu.component */ "./src/app/navigation-menu/navigation-menu.component.ts"
            );
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! ../app-routing.module */ "./src/app/app-routing.module.ts"
            );
            var NavigationMenuModule = function NavigationMenuModule() {};
            NavigationMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
                [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                        declarations: [
                            _navigation_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavigationMenuComponent"],
                        ],
                        imports: [
                            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                        ],
                        providers: [],
                        exports: [_navigation_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavigationMenuComponent"]],
                    }),
                ],
                NavigationMenuModule
            ); /***/
        },
        /***/ "./src/environments/environment.prod.ts": /*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/ /*! exports provided: environment */ /***/ function srcEnvironmentsEnvironmentProdTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() {
                return environment;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            ); // tslint:disable-next-line: typedef
            var environment = { production: true }; /***/
        },
        /***/ "./src/environments/environment.ts": /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/ /*! exports provided: environment */ /***/ function srcEnvironmentsEnvironmentTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() {
                return environment;
            });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            ); // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = { production: false };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */ // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/
        },
        /***/ "./src/environments/index.ts": /*!***********************************!*\
  !*** ./src/environments/index.ts ***!
  \***********************************/ /*! exports provided: environment, environmentProduction */ /***/ function srcEnvironmentsIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./environment */ "./src/environments/environment.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "environment", function() {
                return _environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
            });
            /* harmony import */ var _environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./environment.prod */ "./src/environments/environment.prod.ts"
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                "environmentProduction",
                function() {
                    return _environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"];
                }
            ); /***/
        },
        /***/ "./src/main.ts": /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/ /*! no exports provided */ /***/ function srcMainTs(
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! tslib */ "./node_modules/tslib/tslib.es6.js"
            );
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
            );
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js"
            );
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./app/app.module */ "./src/app/app.module.ts"
            );
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./environments/environment */ "./src/environments/environment.ts"
            );
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
                .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function(err) {
                    return console.error(err);
                }); /***/
        },
        /***/ 0: /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/ /*! no static exports found */ /***/ function _(
            module,
            exports,
            __webpack_require__
        ) {
            module.exports = __webpack_require__(
                /*! C:\Users\Ihar_Pravatorau\Desktop\tasks\angular-app-sandbox\src\main.ts */ "./src/main.ts"
            ); /***/
        },
    },
    [[0, "runtime", "vendor"]],
]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
