webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/ad/ad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    margin-top: 2px;\r\n}\r\n.item>img{\r\n    height: 220px;\r\n    width: 100%;\r\n}\r\n.thumbnail{\r\n    margin-bottom: 6px;\r\n}\r\n.carousel{\r\n    margin-bottom: 6px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ad/ad.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n        <!-- Indicators -->\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\" role=\"listbox\">\n          <div class=\"item active\">\n            <img src=\"http://i1.buimg.com/1949/e40e7b31f028ac1b.jpg\" alt=\"...\">\n            <div class=\"carousel-caption\">\n              <h3>惊了</h3>\n              <p>厉害了</p>\n            </div>\n          </div>\n          <div class=\"item\">\n            <img src=\"http://i1.buimg.com/1949/058c9592feb06edd.png\" alt=\"...\">\n            <div class=\"carousel-caption\">\n              <h3>啊</h3>\n              <p>碉堡了</p>\n            </div>\n          </div>\n          <div class=\"item\">\n            <img src=\"http://i1.buimg.com/1949/3678e1ab8bdba347.jpg\" alt=\"...\">\n            <div class=\"carousel-caption\">\n              <h3>哦</h3>\n              <p>逼炸了</p>\n            </div>\n          </div>\n        </div>\n        <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-8 col-sm-12\">\n      <div class=\"row\">\n        <div *ngFor=\"let video of videos\" class=\"col-md-3 col-sm-3 col-xs-6\">\n          <a href=\"#\" class=\"thumbnail\" [routerLink]=\"['/videoplay',video.id]\"><img src=\"http://placehold.it/160x100\" alt=\"\"></a>\n        </div>\n      </div>\n      <div class=\"row\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ad/ad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdComponent = (function () {
    function AdComponent(videosService) {
        this.videosService = videosService;
        this.videos = this.videosService.getAdVedios();
    }
    AdComponent.prototype.ngOnInit = function () {
    };
    return AdComponent;
}());
AdComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-ad',
        template: __webpack_require__("../../../../../src/app/ad/ad.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ad/ad.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */]) === "function" && _a || Object])
], AdComponent);

var _a;
//# sourceMappingURL=ad.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-comment/add-comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-comment-container{\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    border-bottom: solid 1px #b6b7be;\r\n}\r\n.add-comment-container>.user-face{\r\n    display: inline-block;\r\n    width: 48px;\r\n    height: 48px;\r\n    vertical-align: top;\r\n}\r\n.add-comment-container>.comment-textarea{\r\n    display: inline-block;\r\n    margin-left: 30px;\r\n    width: calc(100% - 48px - 30px - 30px);\r\n    vertical-align: top;\r\n}\r\n.add-comment-container>.comment-textarea>textarea{\r\n    height: 70px;\r\n    width: calc(100% - 100px);\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    border-radius: 6px;\r\n    background-color: #e5e9ef;\r\n}\r\n.add-comment-container>.comment-textarea>textarea.focus,\r\n.add-comment-container>.comment-textarea>textarea.hover{\r\n    background-color: white;\r\n    border-color: #00a1d6;\r\n}\r\n.add-comment-container>.comment-textarea>button{\r\n    width: 70px;\r\n    height: 70px;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    border-radius: 6px;\r\n    padding: 5px 15px;\r\n    background-color: #00a1d6;\r\n    border: 1px solid #00a1d6;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-comment/add-comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-comment-container\">\n  <div class=\"user-face\">\n    <img src=\"http://placehold.it/48x48\" alt=\"用户头像\" class=\"img-circle\">\n  </div>\n  <div class=\"comment-textarea\">\n    <textarea placeholder=\"请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。\"></textarea>\n    <button type=\"submit\" (click)=\"onAddComment($event)\">发表评论</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add-comment/add-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddCommentComponent = (function () {
    function AddCommentComponent() {
    }
    AddCommentComponent.prototype.ngOnInit = function () {
        this.buttonHover();
        this.textareaHoverAndFocus();
    };
    // 发表评论按钮效果
    AddCommentComponent.prototype.buttonHover = function () {
        $(".add-comment-container>.comment-textarea>button").on({
            "mouseover": function () {
                $(this).css({
                    "background-color": "rgba(0, 161, 214, 0.76)"
                });
                // 文本输入框样式变化
                $(".add-comment-container>.comment-textarea>textarea").addClass("focus hover");
            },
            "mouseout": function () {
                $(this).css({
                    "background-color": "rgba(0, 161, 214, 1)"
                });
                // 文本输入框样式变化
                $(".add-comment-container>.comment-textarea>textarea").removeClass("focus hover");
            }
        });
    };
    // textarea获得焦点和hover效果
    AddCommentComponent.prototype.textareaHoverAndFocus = function () {
        $(".add-comment-container>.comment-textarea>textarea").on({
            "mouseover": function () {
                $(this).addClass("hover");
            },
            "mouseout": function () {
                $(this).removeClass("hover");
            },
            "focus": function () {
                $(this).addClass("focus");
            },
            "blur": function () {
                $(this).removeClass("focus");
            }
        });
    };
    /////////添加评论按钮/////////////
    AddCommentComponent.prototype.onAddComment = function (e) {
        console.log(e.srcElement.previousElementSibling.value);
    };
    return AddCommentComponent;
}());
AddCommentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-add-comment',
        template: __webpack_require__("../../../../../src/app/add-comment/add-comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-comment/add-comment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddCommentComponent);

//# sourceMappingURL=add-comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<app-navbar></app-navbar>\n<app-header></app-header>\n<app-content-nav></app-content-nav>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_nav_content_nav_component__ = __webpack_require__("../../../../../src/app/content-nav/content-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ad_ad_component__ = __webpack_require__("../../../../../src/app/ad/ad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__spread_spread_component__ = __webpack_require__("../../../../../src/app/spread/spread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__side_navbar_side_navbar_component__ = __webpack_require__("../../../../../src/app/side-navbar/side-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__live_broadcast_live_broadcast_component__ = __webpack_require__("../../../../../src/app/live-broadcast/live-broadcast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cartoon_cartoon_component__ = __webpack_require__("../../../../../src/app/cartoon/cartoon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__music_music_component__ = __webpack_require__("../../../../../src/app/music/music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dance_dance_component__ = __webpack_require__("../../../../../src/app/dance/dance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__videoplay_videoplay_component__ = __webpack_require__("../../../../../src/app/videoplay/videoplay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__comment_comment_component__ = __webpack_require__("../../../../../src/app/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_comment_add_comment_component__ = __webpack_require__("../../../../../src/app/add-comment/add-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__china_cartoon_china_cartoon_component__ = __webpack_require__("../../../../../src/app/china-cartoon/china-cartoon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routerConfig = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'videoplay/:id', component: __WEBPACK_IMPORTED_MODULE_17__videoplay_videoplay_component__["a" /* VideoplayComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__content_nav_content_nav_component__["a" /* ContentNavComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ad_ad_component__["a" /* AdComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__spread_spread_component__["a" /* SpreadComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__side_navbar_side_navbar_component__["a" /* SideNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__live_broadcast_live_broadcast_component__["a" /* LiveBroadcastComponent */],
            __WEBPACK_IMPORTED_MODULE_13__cartoon_cartoon_component__["a" /* CartoonComponent */],
            __WEBPACK_IMPORTED_MODULE_14__music_music_component__["a" /* MusicComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dance_dance_component__["a" /* DanceComponent */],
            __WEBPACK_IMPORTED_MODULE_17__videoplay_videoplay_component__["a" /* VideoplayComponent */],
            __WEBPACK_IMPORTED_MODULE_18__comment_comment_component__["a" /* CommentComponent */],
            __WEBPACK_IMPORTED_MODULE_19__add_comment_add_comment_component__["a" /* AddCommentComponent */],
            __WEBPACK_IMPORTED_MODULE_20__china_cartoon_china_cartoon_component__["a" /* ChinaCartoonComponent */],
            __WEBPACK_IMPORTED_MODULE_21__game_game_component__["a" /* GameComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_router__["a" /* RouterModule */].forRoot(routerConfig),
            __WEBPACK_IMPORTED_MODULE_22__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__share_videos_service__["a" /* VideosService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_19__add_comment_add_comment_component__["a" /* AddCommentComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cartoon/cartoon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon{\r\n    padding: 5px;\r\n}\r\n.title{\r\n    display: inline-block;\r\n}\r\n.two-button{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.two-button>a{\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n    color: black;\r\n    font-size: 12px;\r\n}\r\n.two-button>a:hover,\r\n.two-button>a:focus{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\n.glyphicon{\r\n    padding: 0px;\r\n}\r\n.fresh>a{\r\n    display: inline-block;\r\n    color: black;\r\n    border: solid 1px rgb(185, 185, 185);\r\n    padding: 4px 5px;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n    margin-top: 30px;\r\n    font-size: 12px;\r\n    vertical-align: middle;\r\n}\r\n.fresh>a:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n    background-color: rgb(185, 185, 185);\r\n}\r\n.title-small{\r\n    color: darkgray;\r\n    display: block;\r\n    height: 34px;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    line-height: 34px;\r\n}\r\n.live-pic{\r\n    background: url(" + __webpack_require__("../../../../../src/images/cartoon.jpg") + ") no-repeat -0px -100px;\r\n    height: 200px;\r\n    width: 97%;\r\n    margin: 0 auto;\r\n    border-radius: 3px;\r\n}\r\n.title-rank{\r\n    margin-left: 20px;\r\n    margin-bottom: 0px;\r\n    margin-top: 20px;\r\n}\r\nul{\r\n    list-style: none;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    width: 90%;\r\n    /*border: solid 1px thistle;*/\r\n    /*border-radius: 5px;*/\r\n    /*box-shadow: 2px 2px 1px 2px linen;*/\r\n}\r\nul>li>a{\r\n    line-height: 2.3;\r\n    vertical-align: middle;\r\n    font-size: 12px;\r\n    margin-left: 15px;\r\n    color: black;\r\n}\r\nul>li>a:hover{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\nspan[class^=rank-number]{\r\n    display: inline-block;\r\n    background-color: rgb(185, 185, 185);\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    color: white;\r\n}\r\nspan.rank-number1,\r\nspan.rank-number2,\r\nspan.rank-number3{\r\n    background-color: hotpink;\r\n}\r\n.video-div{\r\n    width: calc(25% - 4px);\r\n    display: inline-block;\r\n    height: 170px;\r\n    margin-left: 2px;\r\n}\r\n.video-des{\r\n    overflow: hidden;\r\n    height: 20px;\r\n}\r\n.ranking{\r\n    float: right;\r\n    width: calc(33%);\r\n    height: 340px;\r\n}\r\na.look-more{\r\n    display: block;\r\n    color: black;\r\n    width: 90%;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    text-align: center;\r\n    background-color: rgb(219, 219, 219);\r\n    border-radius: 6px;\r\n}\r\na.look-more:hover{\r\n    color: black;\r\n    background-color: silver;\r\n}\r\n@media screen and (max-width: 992px) and (min-width: 768px){\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    .video-div{\r\n        width: calc(50% - 4px);\r\n        display: inline-block;\r\n        height: 170px;\r\n        margin-left: 2px;\r\n    }\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cartoon/cartoon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"live-pic\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3 class=\"title\"><span class=\"glyphicon glyphicon-play-circle\"></span>动画</h3>\n      <div class=\"two-button\">\n        <a href=\"#\">最新动态</a>\n        <a href=\"#\">最新投稿</a>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <span class=\"title-small\">厉害了(*/ω＼*)</span>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"fresh\">\n        <a href=\"#\"><span class=\"glyphicon glyphicon-refresh\"></span>11111条新动态</a>\n        <a href=\"#\">更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"title title-rank\">\n        <h4>排行</h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngFor=\"let video of vides\" class=\"video-div\">\n        <a href=\"#\" class=\"thumbnail\" [routerLink]=\"['/videoplay',video.id]\">\n          <img src=\"http://placehold.it/160x100\" alt=\"\">\n          <div class=\"caption\">\n            <p class=\"video-des\" title=\"{{video.des}}\">{{video.des}}</p>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"ranking\">\n      <ul>\n        <li *ngFor=\"let video_rank of vides; let i=index\"><span class=\"rank-number{{i+1}}\">{{i+1}}</span><a [routerLink]=\"['/videoplay',video_rank.id]\" title=\"{{video_rank.des}}\">{{video_rank.des}}</a></li>\n      </ul>\n      <a href=\"#\" class=\"look-more\">查看更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cartoon/cartoon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartoonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartoonComponent = (function () {
    function CartoonComponent(videoService) {
        this.videoService = videoService;
        this.vides = [];
    }
    CartoonComponent.prototype.ngOnInit = function () {
        this.vides = this.videoService.getLiveVideos();
    };
    return CartoonComponent;
}());
CartoonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-cartoon',
        template: __webpack_require__("../../../../../src/app/cartoon/cartoon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cartoon/cartoon.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */]) === "function" && _a || Object])
], CartoonComponent);

var _a;
//# sourceMappingURL=cartoon.component.js.map

/***/ }),

/***/ "../../../../../src/app/china-cartoon/china-cartoon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon{\r\n    padding: 5px;\r\n}\r\n.title{\r\n    display: inline-block;\r\n}\r\n.two-button{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.two-button>a{\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n    color: black;\r\n    font-size: 12px;\r\n}\r\n.two-button>a:hover,\r\n.two-button>a:focus{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\n.glyphicon{\r\n    padding: 0px;\r\n}\r\n.fresh>a{\r\n    display: inline-block;\r\n    color: black;\r\n    border: solid 1px rgb(185, 185, 185);\r\n    padding: 4px 5px;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n    margin-top: 30px;\r\n    font-size: 12px;\r\n    vertical-align: middle;\r\n}\r\n.fresh>a:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n    background-color: rgb(185, 185, 185);\r\n}\r\n.title-small{\r\n    color: darkgray;\r\n    display: block;\r\n    height: 34px;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    line-height: 34px;\r\n}\r\n.live-pic{\r\n    background: url(" + __webpack_require__("../../../../../src/images/cartoon.jpg") + ") no-repeat -0px -100px;\r\n    height: 200px;\r\n    width: 97%;\r\n    margin: 0 auto;\r\n    border-radius: 3px;\r\n}\r\n.title-rank{\r\n    margin-left: 20px;\r\n    margin-bottom: 0px;\r\n    margin-top: 20px;\r\n}\r\nul{\r\n    list-style: none;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    width: 90%;\r\n    /*border: solid 1px thistle;*/\r\n    /*border-radius: 5px;*/\r\n    /*box-shadow: 2px 2px 1px 2px linen;*/\r\n}\r\nul>li>a{\r\n    line-height: 2.3;\r\n    vertical-align: middle;\r\n    font-size: 12px;\r\n    margin-left: 15px;\r\n    color: black;\r\n}\r\nul>li>a:hover{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\nspan[class^=rank-number]{\r\n    display: inline-block;\r\n    background-color: rgb(185, 185, 185);\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    color: white;\r\n}\r\nspan.rank-number1,\r\nspan.rank-number2,\r\nspan.rank-number3{\r\n    background-color: hotpink;\r\n}\r\n.video-div{\r\n    width: calc(25% - 4px);\r\n    display: inline-block;\r\n    height: 170px;\r\n    margin-left: 2px;\r\n}\r\n.video-des{\r\n    overflow: hidden;\r\n    height: 20px;\r\n}\r\n.ranking{\r\n    float: right;\r\n    width: calc(33%);\r\n    height: 340px;\r\n}\r\na.look-more{\r\n    display: block;\r\n    color: black;\r\n    width: 90%;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    text-align: center;\r\n    background-color: rgb(219, 219, 219);\r\n    border-radius: 6px;\r\n}\r\na.look-more:hover{\r\n    color: black;\r\n    background-color: silver;\r\n}\r\n@media screen and (max-width: 992px) and (min-width: 768px){\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    .video-div{\r\n        width: calc(50% - 4px);\r\n        display: inline-block;\r\n        height: 170px;\r\n        margin-left: 2px;\r\n    }\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/china-cartoon/china-cartoon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3 class=\"title\"><span class=\"glyphicon glyphicon-sunglasses\"></span>国创</h3>\n      <div class=\"two-button\">\n        <a href=\"#\">最新动态</a>\n        <a href=\"#\">最新投稿</a>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <span class=\"title-small\">厉害了(*/ω＼*)</span>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"fresh\">\n        <a href=\"#\"><span class=\"glyphicon glyphicon-refresh\"></span>11111条新动态</a>\n        <a href=\"#\">更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"title title-rank\">\n        <h4>排行</h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngFor=\"let video of videos\" class=\"video-div\">\n        <a href=\"#\" class=\"thumbnail\" [routerLink]=\"['/videoplay',video.id]\">\n          <img src=\"http://placehold.it/160x100\" alt=\"\">\n          <div class=\"caption\">\n            <p class=\"video-des\" title=\"{{video.des}}\">{{video.des}}</p>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"ranking\">\n      <ul>\n        <li *ngFor=\"let video_rank of videos; let i=index\"><span class=\"rank-number{{i+1}}\">{{i+1}}</span><a [routerLink]=\"['/videoplay',video_rank.id]\" title=\"{{video_rank.des}}\">{{video_rank.des}}</a></li>\n      </ul>\n      <a href=\"#\" class=\"look-more\">查看更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/china-cartoon/china-cartoon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChinaCartoonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChinaCartoonComponent = (function () {
    function ChinaCartoonComponent(videoService) {
        this.videoService = videoService;
        this.videos = [];
    }
    ChinaCartoonComponent.prototype.ngOnInit = function () {
        this.videos = this.videoService.getDanceVideos();
    };
    return ChinaCartoonComponent;
}());
ChinaCartoonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-china-cartoon',
        template: __webpack_require__("../../../../../src/app/china-cartoon/china-cartoon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/china-cartoon/china-cartoon.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */]) === "function" && _a || Object])
], ChinaCartoonComponent);

var _a;
//# sourceMappingURL=china-cartoon.component.js.map

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    padding-top: 20px;\r\n}\r\n.info>.label-container{\r\n    border-bottom: solid 1px #b6b7be;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n.info>.label-container>.des-label>a{\r\n    font-size: 10px;\r\n    color: gray;\r\n    display: inline-block;\r\n    padding: 3px 5px;\r\n    border: solid 1px #6e747d;\r\n    border-radius: 15px;\r\n}\r\n.info>.label-container>.des-label>a:hover{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n    border:solid 1px dodgerblue;\r\n}\r\n.info>.video-des{\r\n    color: gray;\r\n    padding-top: 35px;\r\n    padding-bottom: 35px;\r\n    border-bottom: solid 1px #b6b7be;\r\n}\r\n/*评论内容*/\r\n.comment_container{\r\n    padding-top: 20px;\r\n}\r\n.comment_container>.comment_top>span{\r\n    font-size: 18px;\r\n    display: inline-block;\r\n}\r\n.comment_container>.comment_top>h4{\r\n    display: inline-block;\r\n    padding-left: 15px;\r\n}\r\n.comment_container>.comment_top>.delete-log{\r\n    display: inline-block;\r\n    float: right;\r\n    color: silver;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n.comment_container>.comment_top>.delete-log:hover{\r\n    color: dodgerblue;\r\n}\r\n.comment_container>.comment-content{\r\n    padding-top: 20px;\r\n}\r\n/*选择评论按钮组----全部--热门*/\r\n.comment_container>.comment-content>.comment-select{\r\n  border-bottom: solid 1px #b6b7be;\r\n}\r\n.comment_container>.comment-content>.comment-select>.selection{\r\n    margin-bottom: -1px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-right: 20px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: solid 1px #b6b7be;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n.comment_container>.comment-content>.comment-select>.selection:hover{\r\n    color: dodgerblue;\r\n    border-bottom: solid 1px dodgerblue;\r\n}\r\n.comment_container>.comment-content>.comment-select>.selection.on{\r\n    color: dodgerblue;\r\n    border-bottom: solid 1px dodgerblue;\r\n}\r\n.comment_container>.comment-content>.comment-select>.selection.on:after{\r\n    content: '';\r\n    width: 6px;\r\n    height: 3px;\r\n    border-radius: 3px;\r\n    margin-left: -3px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    background-color: dodgerblue;\r\n}\r\n/*用户评论内容*/\r\n.comment_container>.comment-content>.video-comments{\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    border-bottom: solid 1px #b6b7be;\r\n}\r\n.comment_container>.comment-content>.video-comments>.user-pic{\r\n    display: inline-block;\r\n}\r\n.comment_container>.comment-content>.video-comments>.user-comment{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-left: 30px;\r\n    width: 85%;\r\n}\r\n.comment_container>.comment-content>.video-comments>.user-comment>a{\r\n   vertical-align: top;\r\n}\r\n.comment_container>.comment-content>.video-comments>.user-comment>.user-comment-content{\r\n    padding-top: 15px;\r\n}\r\n.comment_container>.comment-content>.video-comments>.user-comment>.info{\r\n    font-size: 10px;\r\n    color: silver;\r\n}\r\n.comment_container>.comment-content>.video-comments>.user-comment>.info>span ~span{\r\n    padding-left: 20px;\r\n}\r\n.comment_container>.comment-content>.video-comments>.user-comment>.info>span>i:hover,\r\n.comment_container>.comment-content>.video-comments>.user-comment>.info>.reply:hover,\r\n.comment_container>.comment-content>.video-comments>.user-comment>.info>.zan:hover,\r\n.comment_container>.comment-content>.video-comments>.user-comment>.info>.cai:hover{\r\n    color: dodgerblue;\r\n    cursor: pointer;\r\n}\r\n/*右侧toolbar*/\r\n.right-toolbar{\r\n    border: solid 1px #dfe0ea;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n}\r\n/*侧边工具样式*/\r\n.right-toolbar>ul>li{\r\n    list-style: none;\r\n    width: 260px;\r\n    height: 232px;\r\n}\r\n.right-toolbar>ul>li>img{\r\n    background: url(" + __webpack_require__("../../../../../src/images/videohold.jpg") + ") no-repeat -500px -200px;\r\n    width: 258px;\r\n    height: 160px;\r\n}\r\n.right-toolbar>ul>li>.img-holder{\r\n    width: 258px;\r\n    height: 160px;\r\n    background-color: rgba(65, 125, 209, 0.5);\r\n    position: relative;\r\n    top: -160px;\r\n    display: none;\r\n}\r\n.right-toolbar>ul>li>a{\r\n    float: left;\r\n}\r\n@media screen and (max-width: 996px){\r\n    .right-toolbar{\r\n        margin-top: 30px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"info\">\n        <div class=\"label-container\">\n          <span class=\"des-label\"><a href=\"#\">各种标签</a></span>\n        </div>\n        <div class=\"video-des\">\n          作者描述\n        </div>\n      </div>\n      <app-add-comment></app-add-comment>\n      <div class=\"comment_container clear-fix\">\n        <div class=\"comment_top\">\n          <span>56</span>\n          <h4>评论</h4>\n          <div class=\"delete-log\">查看删除日志</div>\n        </div>\n        <div class=\"comment-content\">\n          <div class=\"comment-select\">\n            <span class=\"selection on\">全部评论</span><span class=\"selection\">按热度排序</span>\n          </div>\n          <div *ngFor=\"let comment of comments; let i = index\" class=\"video-comments\">\n            <div class=\"user-pic\"><img src=\"http://placehold.it/48x48\" alt=\"用户头像\" class=\"img-circle\"></div>\n            <div class=\"user-comment\">\n              <a href=\"#\">{{comment.user_id}}</a>\n              <div class=\"user-comment-content\">\n                <p>{{comment.user_comment}}</p>\n              </div>\n              <div class=\"info\">\n                <span class=\"comment-floor\">#1</span>\n                <span>来自<i>{{comment.equipment}}</i></span>\n                <span class=\"time\">{{comment.time}}</span>\n                <span class=\"zan\">赞</span>\n                <span class=\"cai\">踩</span>\n                <span class=\"reply\" (click)=\"createAddComment($event)\">回复</span>\n              </div>\n              <ng-template #addCommentContainer></ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"right-toolbar\">\n        <div class=\"right-title\">大家都在看</div>\n        <ul>\n          <li>\n            <img src=\"\" alt=\"\">\n            <div class=\"img-holder\"></div>\n            <a href=\"#\">官方旧版直播</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_comment_add_comment_component__ = __webpack_require__("../../../../../src/app/add-comment/add-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentComponent = (function () {
    function CommentComponent(resolver, videoService) {
        this.resolver = resolver;
        this.videoService = videoService;
        this.isAddCommentOn = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.comments = this.videoService.comments;
        this.selectCommentHead();
    };
    // 选择评论函数 ：全部/热门
    CommentComponent.prototype.selectCommentHead = function () {
        var $select_items = $(".comment_container>.comment-content>.comment-select>.selection");
        $select_items.each(function () {
            $(this).on({
                "click": function () {
                    $(this).addClass("on");
                    $(this).siblings("span").removeClass("on");
                }
            });
        });
    };
    CommentComponent.prototype.createAddComment = function (e) {
        console.log(e.srcElement);
        this.isAddCommentOn = !this.isAddCommentOn;
        if (this.isAddCommentOn) {
            this.container.clear();
            var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__add_comment_add_comment_component__["a" /* AddCommentComponent */]);
            this.componentRef = this.container.createComponent(factory);
        }
        else {
            this.container.clear();
        }
    };
    CommentComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    CommentComponent.prototype.ngAfterViewInit = function () {
    };
    return CommentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("addCommentContainer", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */]) === "function" && _a || Object)
], CommentComponent.prototype, "container", void 0);
CommentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-comment',
        template: __webpack_require__("../../../../../src/app/comment/comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comment/comment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__share_videos_service__["a" /* VideosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_videos_service__["a" /* VideosService */]) === "function" && _c || Object])
], CommentComponent);

var _a, _b, _c;
//# sourceMappingURL=comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/content-nav/content-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    color: black;\r\n}\r\n.nav-tabs>li +li{\r\n    margin-left: -3px;\r\n}\r\n.dropdown-menu>li>a{\r\n    font-size: 12px;\r\n}\r\n.dropdown-menu>li>a:hover {\r\n    padding-left: 15px;\r\n    text-shadow: 3px 3px 1px hotpink;\r\n}\r\n.big-li{\r\n    font-size: 17px;\r\n    height: 60px;\r\n}\r\n.big-li>a{\r\n    height: 100%;\r\n    line-height: 2.5;\r\n}\r\nspan.glyphicon{\r\n    padding-right: 1px;\r\n}\r\nspan.badge{\r\n    background-color: lightpink;\r\n    display: block;\r\n    padding: 3px;\r\n    font-size: 10px;\r\n    border-radius: 5px;\r\n}\r\nspan.home-icon{\r\n    display: block;\r\n    color: hotpink;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    padding: 2px 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-nav/content-nav.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n      <ul class=\"nav nav-tabs\">\n        <li class=\"dropdown\"><a href=\"#\"><span class=\"home-icon glyphicon glyphicon-home\"></span>首页</a>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n               aria-expanded=\"false\" href=\"#\"><span class=\"badge\">55</span>动画</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">综合</a></li>\n            <li><a href=\"#\">MMD·3D</a></li>\n            <li><a href=\"#\">短片·手术·配音</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">999+</span>番剧</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">连载</a></li>\n            <li><a href=\"#\">完结</a></li>\n            <li><a href=\"#\">咨询</a></li>\n            <li><a href=\"#\">官方延伸</a></li>\n            <li><a href=\"#\">新番索引</a></li>\n            <li><a href=\"#\">新番时间表</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">999+</span>国创</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">国产动画</a></li>\n            <li><a href=\"#\">国产相关咨询</a></li>\n            <li><a href=\"#\">布袋戏</a></li>\n            <li><a href=\"#\">官方延伸</a></li>\n            <li><a href=\"#\">新番索引</a></li>\n            <li><a href=\"#\">国漫时间表</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">60</span>音乐</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">原创</a></li>\n            <li><a href=\"#\">二次元音乐</a></li>\n            <li><a href=\"#\">三次元</a></li>\n            <li><a href=\"#\">演奏</a></li>\n            <li><a href=\"#\">精选</a></li>\n            <li><a href=\"#\">OP/ED/OST</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">365</span>舞蹈</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">宅舞</a></li>\n            <li><a href=\"#\">三次元舞蹈</a></li>\n            <li><a href=\"#\">舞蹈教程</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">999+</span>游戏</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">网络游戏</a></li>\n            <li><a href=\"#\">单机联机</a></li>\n            <li><a href=\"#\">手机游戏</a></li>\n            <li><a href=\"#\">电子竞技</a></li>\n            <li><a href=\"#\">棋牌</a></li>\n            <li><a href=\"#\">Mugen</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">10</span>科技</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">趣味科普</a></li>\n            <li><a href=\"#\">纪录片</a></li>\n            <li><a href=\"#\">野生技术协会</a></li>\n            <li><a href=\"#\">公开课</a></li>\n            <li><a href=\"#\">数码</a></li>\n            <li><a href=\"#\">机械</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">789</span>生活</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">搞笑</a></li>\n            <li><a href=\"#\">日常</a></li>\n            <li><a href=\"#\">动物圈</a></li>\n            <li><a href=\"#\">美食圈</a></li>\n            <li><a href=\"#\">手工</a></li>\n            <li><a href=\"#\">绘画</a></li>\n            <li><a href=\"#\">运动</a></li>\n            <li><a href=\"#\">其他</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">666</span>鬼畜</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">鬼畜调教</a></li>\n            <li><a href=\"#\">音MAD</a></li>\n            <li><a href=\"#\">教程</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">235</span>时尚</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">美食</a></li>\n            <li><a href=\"#\">服饰</a></li>\n            <li><a href=\"#\">健身</a></li>\n            <li><a href=\"#\">咨询</a></li>\n          </ul>\n        </li>\n        <li><a href=\"#\"><span class=\"badge\">100</span>广告</a></li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">56</span>娱乐</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">综艺</a></li>\n            <li><a href=\"#\">明星</a></li>\n            <li><a href=\"#\">韩综</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown-li\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n                                   aria-expanded=\"false\" href=\"#\"><span class=\"badge\">77</span>影视</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">电影</a></li>\n            <li><a href=\"#\">电视剧</a></li>\n          </ul>\n        </li>\n        <li class=\"big-li\"><a\n                class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-road\" aria-hidden=\"true\"></span>广场</a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">活动中心</a></li>\n            <li><a href=\"#\">游戏中心</a></li>\n            <li><a href=\"#\">娱乐中心</a></li>\n            <li><a href=\"#\">画友</a></li>\n            <li><a href=\"#\">芒果TV</a></li>\n          </ul>\n        </li>\n        <li class=\"big-li\"><a href=\"#\"><span class=\"glyphicon glyphicon-film\" aria-hidden=\"true\"></span>直播</a></li>\n        <li class=\"big-li\"><a href=\"#\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>小黑屋</a></li>\n      </ul>\n </div>"

/***/ }),

/***/ "../../../../../src/app/content-nav/content-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentNavComponent = (function () {
    function ContentNavComponent() {
    }
    ContentNavComponent.prototype.ngOnInit = function () {
        this.navhover();
    };
    ContentNavComponent.prototype.navhover = function () {
        $("li.dropdown-li,li.big-li").each(function () {
            $(this).on("mouseout mouseover", function (event) {
                if (event.type === "mouseover") {
                    $(this).addClass("open");
                }
                else if (event.type === "mouseout") {
                    $(this).removeClass("open");
                }
            });
        });
    };
    return ContentNavComponent;
}());
ContentNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-content-nav',
        template: __webpack_require__("../../../../../src/app/content-nav/content-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content-nav/content-nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContentNavComponent);

//# sourceMappingURL=content-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/dance/dance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon{\r\n    padding: 5px;\r\n}\r\n.title{\r\n    display: inline-block;\r\n}\r\n.two-button{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.two-button>a{\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n    color: black;\r\n    font-size: 12px;\r\n}\r\n.two-button>a:hover,\r\n.two-button>a:focus{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\n.glyphicon{\r\n    padding: 0px;\r\n}\r\n.fresh>a{\r\n    display: inline-block;\r\n    color: black;\r\n    border: solid 1px rgb(185, 185, 185);\r\n    padding: 4px 5px;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n    margin-top: 30px;\r\n    font-size: 12px;\r\n    vertical-align: middle;\r\n}\r\n.fresh>a:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n    background-color: rgb(185, 185, 185);\r\n}\r\n.title-small{\r\n    color: darkgray;\r\n    display: block;\r\n    height: 34px;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    line-height: 34px;\r\n}\r\n.live-pic{\r\n    background: url(" + __webpack_require__("../../../../../src/images/cartoon.jpg") + ") no-repeat -0px -100px;\r\n    height: 200px;\r\n    width: 97%;\r\n    margin: 0 auto;\r\n    border-radius: 3px;\r\n}\r\n.title-rank{\r\n    margin-left: 20px;\r\n    margin-bottom: 0px;\r\n    margin-top: 20px;\r\n}\r\nul{\r\n    list-style: none;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    width: 90%;\r\n    /*border: solid 1px thistle;*/\r\n    /*border-radius: 5px;*/\r\n    /*box-shadow: 2px 2px 1px 2px linen;*/\r\n}\r\nul>li>a{\r\n    line-height: 2.3;\r\n    vertical-align: middle;\r\n    font-size: 12px;\r\n    margin-left: 15px;\r\n    color: black;\r\n}\r\nul>li>a:hover{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\nspan[class^=rank-number]{\r\n    display: inline-block;\r\n    background-color: rgb(185, 185, 185);\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    color: white;\r\n}\r\nspan.rank-number1,\r\nspan.rank-number2,\r\nspan.rank-number3{\r\n    background-color: hotpink;\r\n}\r\n.video-div{\r\n    width: calc(25% - 4px);\r\n    display: inline-block;\r\n    height: 170px;\r\n    margin-left: 2px;\r\n}\r\n.video-des{\r\n    overflow: hidden;\r\n    height: 20px;\r\n}\r\n.ranking{\r\n    float: right;\r\n    width: calc(33%);\r\n    height: 340px;\r\n}\r\na.look-more{\r\n    display: block;\r\n    color: black;\r\n    width: 90%;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    text-align: center;\r\n    background-color: rgb(219, 219, 219);\r\n    border-radius: 6px;\r\n}\r\na.look-more:hover{\r\n    color: black;\r\n    background-color: silver;\r\n}\r\n@media screen and (max-width: 992px) and (min-width: 768px){\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    .video-div{\r\n        width: calc(50% - 4px);\r\n        display: inline-block;\r\n        height: 170px;\r\n        margin-left: 2px;\r\n    }\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dance/dance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3 class=\"title\"><span class=\"glyphicon glyphicon-sunglasses\"></span>舞蹈</h3>\n      <div class=\"two-button\">\n        <a href=\"#\">最新动态</a>\n        <a href=\"#\">最新投稿</a>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <span class=\"title-small\">厉害了(*/ω＼*)</span>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"fresh\">\n        <a href=\"#\"><span class=\"glyphicon glyphicon-refresh\"></span>11111条新动态</a>\n        <a href=\"#\">更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"title title-rank\">\n        <h4>排行</h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngFor=\"let video of videos\" class=\"video-div\">\n        <a href=\"#\" class=\"thumbnail\" [routerLink]=\"['/videoplay',video.id]\">\n          <img src=\"http://placehold.it/160x100\" alt=\"\">\n          <div class=\"caption\">\n            <p class=\"video-des\" title=\"{{video.des}}\">{{video.des}}</p>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"ranking\">\n      <ul>\n        <li *ngFor=\"let video_rank of videos; let i=index\"><span class=\"rank-number{{i+1}}\">{{i+1}}</span><a [routerLink]=\"['/videoplay',video_rank.id]\" title=\"{{video_rank.des}}\">{{video_rank.des}}</a></li>\n      </ul>\n      <a href=\"#\" class=\"look-more\">查看更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dance/dance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DanceComponent = (function () {
    function DanceComponent(videoService) {
        this.videoService = videoService;
        this.videos = [];
    }
    DanceComponent.prototype.ngOnInit = function () {
        this.videos = this.videoService.getDanceVideos();
    };
    return DanceComponent;
}());
DanceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-dance',
        template: __webpack_require__("../../../../../src/app/dance/dance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dance/dance.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */]) === "function" && _a || Object])
], DanceComponent);

var _a;
//# sourceMappingURL=dance.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\r\n    background-color: #f6f9fa;\r\n}\r\n.footer-divide{\r\n    text-align: center;\r\n    display: inline-block;\r\n    width: 30%;\r\n    margin-top: 30px;\r\n    position: relative;\r\n}\r\n.footer-divide>p{\r\n    color: darkgray;\r\n    display: block;\r\n}\r\n.footer-divide>a{\r\n    color: black;\r\n    display: block;\r\n}\r\n.footer-divide>a:hover{\r\n    color: cornflowerblue;\r\n    text-decoration: none;\r\n}\r\n.footer-divide>.pic{\r\n    height: 60px;\r\n    width: 60px;\r\n    margin: auto;\r\n}\r\n.footer-divide>.pic.phone{\r\n    background: url(" + __webpack_require__("../../../../../src/images/icons.d895b84.png") + ") no-repeat -1024px -194px;\r\n}\r\n.footer-divide>.pic.weichat{\r\n    background: url(" + __webpack_require__("../../../../../src/images/icons.d895b84.png") + ") no-repeat -1024px -322px;\r\n}\r\n.footer-divide>.pic.sina{\r\n    background: url(" + __webpack_require__("../../../../../src/images/icons.d895b84.png") + ") no-repeat -1024px -66px;\r\n}\r\n.footer-contain{\r\n    padding-top: 30px;\r\n    width: 96%;\r\n    font-size: 10px;\r\n    color: gray;\r\n    margin: 10px auto;\r\n}\r\n/*分享弹出框*/\r\n.pop{\r\n    width: 128px;\r\n    height: 128px;\r\n    border: 1px solid #b6b7be;\r\n    border-radius: 10px;\r\n    background: url(" + __webpack_require__("../../../../../src/images/barcode-scanner.png") + ") no-repeat;\r\n    position: absolute;\r\n    bottom:calc(100% + 10px);\r\n    left: calc(50% - 64px);\r\n    display: none;\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\r\n    background-color: white;\r\n}\r\n.pop::before{\r\n    content: '';\r\n    border: 10px solid transparent;\r\n    border-top-color: #b6b7be;\r\n    position: absolute;\r\n    top:100%;\r\n    left: calc(50% - 10px);\r\n}\r\n.pop::after{\r\n    content: '';\r\n    border: 9px solid transparent;\r\n    border-top-color: #FFFFFF;\r\n    position: absolute;\r\n    top:100%;\r\n    left: calc(50% - 9px);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 div-left\">\n        <div class=\"footer-divide\">\n          <p>传送门</p>\n          <a href=\"#\">帮助中心</a><br>\n          <a href=\"#\">侵权申诉</a><br>\n          <a href=\"#\">用户反馈论坛</a>\n        </div>\n        <div class=\"footer-divide\">\n          <p> </p>\n          <a href=\"#\">高级弹幕</a><br>\n          <a href=\"#\">分院帽计划</a><br>\n          <a href=\"#\">壁纸站</a>\n        </div>\n        <div class=\"footer-divide\">\n          <p> </p>\n          <a href=\"#\">活动专题</a><br>\n          <a href=\"#\">名人堂</a><br>\n          <a href=\"#\">活动中心</a>\n        </div>\n      </div>\n      <div class=\"col-md-4 div-center\">\n        <div class=\"footer-divide\">\n          <p>bilibili</p>\n          <a href=\"#\">关于我们</a><br>\n          <a href=\"#\">联系我们</a>\n        </div>\n        <div class=\"footer-divide\">\n          <p> </p>\n          <a href=\"#\">友情链接</a><br>\n          <a href=\"#\">加入我们</a>\n        </div>\n        <div class=\"footer-divide\">\n          <p> </p>\n          <a href=\"#\">哔哩哔哩周边</a><br>\n          <a href=\"#\">官方认证</a>\n        </div>\n      </div>\n      <div class=\"col-md-4 div-right\">\n        <div class=\"footer-divide\">\n          <div class=\"pop\"></div>\n          <div class=\"pic phone\"></div>\n          <div class=\"pic-des\">手机端下载</div>\n        </div>\n          <div class=\"footer-divide\">\n            <div class=\"pop\"></div>\n            <div class=\"pic weichat\"></div>\n            <div class=\"pic-des\">新浪微博</div>\n          </div>\n          <div class=\"footer-divide\">\n            <div class=\"pop\"></div>\n            <div class=\"pic sina\"></div>\n            <div class=\"pic-des\">微信</div>\n          </div>\n      </div>\n    </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n           <div class=\"footer-contain\">\n              <p>滚犊子有限公司|区tmd省xxx市公安局|备案号52654215-63356466| 违法不良信息举报邮箱：help@bilibili.com | 违法不良信息举报电话：4000233233转3\n              |沪B2-20100043| 沪ICP证：沪ICP备13002172号-3|</p>\n               <p>12318 全国文化市场举报网站:www.asdas.com</p>\n               <p> 上海互联网举报中心:www.asdasdasd.com</p>\n           </div>\n        </div>\n      </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.PopAnimate();
    };
    // 分享弹出框动画效果
    FooterComponent.prototype.PopAnimate = function () {
        $("div.pic").hover(function handIn() {
            $(this).siblings(".pop").stop();
            $(this).siblings(".pop").fadeIn(200);
        }, function handOut() {
            $(this).siblings(".pop").stop();
            $(this).siblings(".pop").fadeOut(200);
        });
        $(".pop").hover(function () {
            $(this).stop();
            $(this).fadeIn(200);
        }, function () {
            $(this).stop();
            $(this).fadeOut(200);
        });
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon{\r\n    padding: 5px;\r\n}\r\n.title{\r\n    display: inline-block;\r\n}\r\n.two-button{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.two-button>a{\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n    color: black;\r\n    font-size: 12px;\r\n}\r\n.two-button>a:hover,\r\n.two-button>a:focus{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\n.glyphicon{\r\n    padding: 0px;\r\n}\r\n.fresh>a{\r\n    display: inline-block;\r\n    color: black;\r\n    border: solid 1px rgb(185, 185, 185);\r\n    padding: 4px 5px;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n    margin-top: 30px;\r\n    font-size: 12px;\r\n    vertical-align: middle;\r\n}\r\n.fresh>a:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n    background-color: rgb(185, 185, 185);\r\n}\r\n.title-small{\r\n    color: darkgray;\r\n    display: block;\r\n    height: 34px;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    line-height: 34px;\r\n}\r\n.live-pic{\r\n    background: url(" + __webpack_require__("../../../../../src/images/cartoon.jpg") + ") no-repeat -0px -100px;\r\n    height: 200px;\r\n    width: 97%;\r\n    margin: 0 auto;\r\n    border-radius: 3px;\r\n}\r\n.title-rank{\r\n    margin-left: 20px;\r\n    margin-bottom: 0px;\r\n    margin-top: 20px;\r\n}\r\nul{\r\n    list-style: none;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    width: 90%;\r\n    /*border: solid 1px thistle;*/\r\n    /*border-radius: 5px;*/\r\n    /*box-shadow: 2px 2px 1px 2px linen;*/\r\n}\r\nul>li>a{\r\n    line-height: 2.3;\r\n    vertical-align: middle;\r\n    font-size: 12px;\r\n    margin-left: 15px;\r\n    color: black;\r\n}\r\nul>li>a:hover{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\nspan[class^=rank-number]{\r\n    display: inline-block;\r\n    background-color: rgb(185, 185, 185);\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    color: white;\r\n}\r\nspan.rank-number1,\r\nspan.rank-number2,\r\nspan.rank-number3{\r\n    background-color: hotpink;\r\n}\r\n.video-div{\r\n    width: calc(25% - 4px);\r\n    display: inline-block;\r\n    height: 170px;\r\n    margin-left: 2px;\r\n}\r\n.video-des{\r\n    overflow: hidden;\r\n    height: 20px;\r\n}\r\n.ranking{\r\n    float: right;\r\n    width: calc(33%);\r\n    height: 340px;\r\n}\r\na.look-more{\r\n    display: block;\r\n    color: black;\r\n    width: 90%;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    text-align: center;\r\n    background-color: rgb(219, 219, 219);\r\n    border-radius: 6px;\r\n}\r\na.look-more:hover{\r\n    color: black;\r\n    background-color: silver;\r\n}\r\n@media screen and (max-width: 992px) and (min-width: 768px){\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    .video-div{\r\n        width: calc(50% - 4px);\r\n        display: inline-block;\r\n        height: 170px;\r\n        margin-left: 2px;\r\n    }\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3 class=\"title\"><span class=\"glyphicon glyphicon-sunglasses\"></span>{{componentType}}</h3>\n      <div class=\"two-button\">\n        <a href=\"#\">最新动态</a>\n        <a href=\"#\">最新投稿</a>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <span class=\"title-small\">厉害了(*/ω＼*)</span>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"fresh\">\n        <a href=\"#\"><span class=\"glyphicon glyphicon-refresh\"></span>11111条新动态</a>\n        <a href=\"#\">更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"title title-rank\">\n        <h4>排行</h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngFor=\"let video of videos\" class=\"video-div\">\n        <a href=\"#\" class=\"thumbnail\" [routerLink]=\"['/videoplay',video.id]\">\n          <img src=\"http://placehold.it/160x100\" alt=\"\">\n          <div class=\"caption\">\n            <p class=\"video-des\" title=\"{{video.des}}\">{{video.des}}</p>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"ranking\">\n      <ul>\n        <li *ngFor=\"let video_rank of videos; let i=index\"><span class=\"rank-number{{i+1}}\">{{i+1}}</span><a [routerLink]=\"['/videoplay',video_rank.id]\" title=\"{{video_rank.des}}\">{{video_rank.des}}</a></li>\n      </ul>\n      <a href=\"#\" class=\"look-more\">查看更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = (function () {
    function GameComponent(videoService) {
        this.videoService = videoService;
        this.videos = [];
    }
    GameComponent.prototype.ngOnInit = function () {
        this.videos = this.videoService.getDanceVideos();
    };
    return GameComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], GameComponent.prototype, "componentType", void 0);
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-game',
        template: __webpack_require__("../../../../../src/app/game/game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game/game.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */]) === "function" && _a || Object])
], GameComponent);

var _a;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid{\r\n    background-image: url(" + __webpack_require__("../../../../../src/images/b21c8701a18b87d629819f80010828381e30fd69.jpg") + ");\r\n    height: 250px;\r\n}\r\n.row{\r\n    margin-top: 180px;\r\n}\r\nimg{\r\n    float: inherit;\r\n}\r\n@media screen and (max-width: 768px){\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row bottom-right\">\n    <div class=\"col-md-4 col-md-offset-8 col-sm-offset-4 col-xs-8 col-xs-offset-2\">\n      <form class=\"form-inline\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"search\" class=\"form-control\">\n          <button type=\"submit\" class=\"btn btn-default\">搜索</button>\n       </div>\n     </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon{\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\napp-side-navbar{\r\n    position: fixed;\r\n    z-index: 3;\r\n}\r\n.place_holder{\r\n    height: 800px;\r\n}\r\n@media screen and (max-width: 768px){\r\n    app-side-navbar{\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home_content\" class=\"container\">\r\n    <app-side-navbar id=\"side-navbar\" [scrollFlag]=\"scroll_flag\"></app-side-navbar>\r\n    <app-ad id=\"ad\"></app-ad>\r\n    <app-spread id=\"spread\"></app-spread>\r\n    <app-live-broadcast id=\"broadcast\"></app-live-broadcast>\r\n    <app-cartoon id=\"cartoon\"></app-cartoon>\r\n    <app-music id=\"music\"></app-music>\r\n    <app-dance id=\"dance\"></app-dance>\r\n    <app-china-cartoon id=\"china-cartoon\"></app-china-cartoon>\r\n    <app-game id=\"game\" [componentType]=\"componentType[0]\"></app-game>\r\n    <app-game id=\"life\" [componentType]=\"componentType[1]\"></app-game>\r\n    <app-game id=\"guichu\" [componentType]=\"componentType[2]\"></app-game>\r\n    <app-game id=\"sceince\" [componentType]=\"componentType[3]\"></app-game>\r\n    <app-game id=\"fashion\" [componentType]=\"componentType[4]\"></app-game>\r\n    <app-game id=\"advertisment\" [componentType]=\"componentType[5]\"></app-game>\r\n    <app-game id=\"entertainment\" [componentType]=\"componentType[6]\"></app-game>\r\n    <app-game id=\"film\" [componentType]=\"componentType[7]\"></app-game>\r\n</div>\r\n<div class=\"place_holder\"></div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrollFlag; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.scroll_flag = new ScrollFlag(false, false, false, false, false, false, false, false, false, false, false, false, false, false);
        this.componentType = ['游戏', '生活', '鬼畜', '科学', '时尚', '广告', '娱乐', '影视'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        ////////////侧边导航定位////////////////
        console.log('OnInIt');
        // window.onload = e => {
        this.sideNavPosition();
        // }
        $(window).resize(function () {
            _this.sideNavPosition();
        });
        ////////////////window的滚动监听//////////////////
        //////////////scroll_flag作为输出属性给到side-nav//
        $(window).scroll(function (e) {
            var pageoffset = $(document).scrollTop();
            if (pageoffset > 250 - 150) {
                $("#side-navbar").css({ "top": "150px" });
            }
            else {
                $("#side-navbar").css({ "top": 250 - pageoffset + "px" });
            }
            ///推广高度和offset-top////////
            var $spread = $("#spread");
            var $spread_h = $("#spread>.container").height();
            var spread_top = $spread.offset().top;
            ////直播//////////
            var $broadcast = $("#broadcast");
            var $broadcaet_h = $("#broadcast>.container").height();
            var bro_top = $broadcast.offset().top;
            //////动画/////////////
            var cartoon_top = $("#cartoon").offset().top;
            var cartoon_h = $("#cartoon>.container").height();
            ///////音乐/////////////
            var $music = $("#music");
            var music_top = $music.offset().top;
            var music_h = $("#music>.container").height();
            ///////舞蹈//////////////
            var dance_top = $("#dance").offset().top;
            var dance_h = $("#dance>.container").height();
            //////国创///////////////
            var china_top = $("#china-cartoon").offset().top;
            var china_h = $("#china-cartoon>.container").height();
            ///////游戏/////////////
            var game_top = $("#game").offset().top;
            var game_h = $("#game>.container").height();
            ///////生活/////////////
            var life_top = $("#life").offset().top;
            var life_h = $("#life>.container").height();
            ///////鬼畜/////////////
            var guichu_top = $("#guichu").offset().top;
            var guichu_h = $("#guichu>.container").height();
            ///////科学/////////////
            var sceince_top = $("#sceince").offset().top;
            var sceince_h = $("#sceince>.container").height();
            ///////时尚/////////////
            var fashion_top = $("#fashion").offset().top;
            var fashion_h = $("#fashion>.container").height();
            ///////广告/////////////
            var ad_top = $("#advertisment").offset().top;
            var ad_h = $("#advertisment>.container").height();
            ///////娱乐/////////////
            var entertain_top = $("#entertainment").offset().top;
            var entartain_h = $("#entertainment>.container").height();
            ///////影视/////////////
            var film_top = $("#film").offset().top;
            var film_h = $("#film>.container").height();
            if (spread_top <= pageoffset && pageoffset < spread_top + $spread_h) {
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = true;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset >= bro_top && pageoffset < bro_top + $broadcaet_h) {
                _this.scroll_flag.isBroadcast = true;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset >= cartoon_top && pageoffset < cartoon_top + cartoon_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = true;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset >= music_top && pageoffset < music_top + music_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = true;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset >= dance_top && pageoffset < dance_top + dance_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = true;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset >= china_top && pageoffset < china_top + china_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = true;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset >= game_top && pageoffset < game_top + game_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = true;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset >= guichu_top && pageoffset < guichu_top + guichu_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = true;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset > sceince_top && pageoffset < sceince_top + sceince_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = true;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset > fashion_top && pageoffset < fashion_top + fashion_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = true;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset >= ad_top && pageoffset < ad_top + ad_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = true;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset >= film_top && pageoffset < film_top + film_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = true;
                _this.scroll_flag.isEntertainment = false;
            }
            else if (pageoffset >= entertain_top && pageoffset < entertain_top + entartain_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = true;
            }
            else if (pageoffset >= life_top && pageoffset < life_top + life_h) {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = true;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
            else {
                _this.scroll_flag.isBroadcast = false;
                _this.scroll_flag.isSpread = false;
                _this.scroll_flag.isCartoon = false;
                _this.scroll_flag.isChina = false;
                _this.scroll_flag.isMusic = false;
                _this.scroll_flag.isDance = false;
                _this.scroll_flag.isGame = false;
                _this.scroll_flag.isLife = false;
                _this.scroll_flag.isGuiChu = false;
                _this.scroll_flag.isSceince = false;
                _this.scroll_flag.isFashon = false;
                _this.scroll_flag.isAD = false;
                _this.scroll_flag.isFilm = false;
                _this.scroll_flag.isEntertainment = false;
            }
        });
    };
    ///////////////侧边导航栏定位函数//////////////////////
    HomeComponent.prototype.sideNavPosition = function () {
        var container = $("#home_content");
        var container_right = container.offset().left;
        var container_width = container.width();
        var offset_top = 250; /////////头部巨幕高度/////////
        $("#side-navbar").css({ "left": container_right + container_width + 40 + "px", "top": offset_top + "px" });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        $(window).unbind();
        console.log("Home ondestroy");
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", ScrollFlag)
], HomeComponent.prototype, "scroll_flag", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

var ScrollFlag = (function () {
    function ScrollFlag(isBroadcast, isSpread, isCartoon, isChina, isMusic, isDance, isGame, isLife, isGuiChu, isSceince, isFashion, isAD, isFilm, isEntertainment) {
        this.isBroadcast = isBroadcast;
        this.isSpread = isSpread;
        this.isCartoon = isCartoon;
        this.isChina = isChina;
        this.isMusic = isMusic;
        this.isDance = isDance;
        this.isGame = isGame;
        this.isLife = isLife;
        this.isGuiChu = isGuiChu;
        this.isSceince = isSceince;
        this.isFashon = isFashion;
        this.isAD = isAD;
        this.isFilm = isFilm;
        this.isEntertainment = isEntertainment;
    }
    ;
    return ScrollFlag;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/live-broadcast/live-broadcast.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon{\r\n    padding: 5px;\r\n}\r\n.title{\r\n    display: inline-block;\r\n}\r\n.two-button{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.two-button>a{\r\n     display: inline-block;\r\n     margin-left: 5px;\r\n     color: black;\r\n    font-size: 12px;\r\n }\r\n.two-button>a:hover,\r\n.two-button>a:focus{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\n.glyphicon{\r\n    padding: 0px;\r\n}\r\n.fresh>a{\r\n    display: inline-block;\r\n    color: black;\r\n    border: solid 1px rgb(185, 185, 185);\r\n    padding: 4px 5px;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n    margin-top: 30px;\r\n    font-size: 12px;\r\n    vertical-align: middle;\r\n}\r\n.fresh>a:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n    background-color: rgb(185, 185, 185);\r\n}\r\n.title-small{\r\n    color: darkgray;\r\n    display: block;\r\n    height: 34px;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    line-height: 34px;\r\n}\r\n.live-pic{\r\n    background: url(" + __webpack_require__("../../../../../src/images/live.jpg") + ") no-repeat -0px -300px;\r\n    height: 200px;\r\n    width: 97%;\r\n    margin: 0 auto;\r\n    border-radius: 3px;\r\n}\r\n.title-rank{\r\n    margin-left: 20px;\r\n    margin-bottom: 0px;\r\n    margin-top: 20px;\r\n}\r\nul{\r\n    list-style: none;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    width: 90%;\r\n    /*border: solid 1px thistle;*/\r\n    /*border-radius: 5px;*/\r\n    /*box-shadow: 2px 2px 1px 2px linen;*/\r\n}\r\nul>li>a{\r\n    line-height: 2.3;\r\n    vertical-align: middle;\r\n    font-size: 12px;\r\n    margin-left: 15px;\r\n    color: black;\r\n}\r\nul>li>a:hover{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\nspan[class^=rank-number]{\r\n    display: inline-block;\r\n    background-color: rgb(185, 185, 185);\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    color: white;\r\n}\r\nspan.rank-number1,\r\nspan.rank-number2,\r\nspan.rank-number3{\r\n    background-color: hotpink;\r\n}\r\n.video-div{\r\n    width: calc(25% - 4px);\r\n    display: inline-block;\r\n    height: 170px;\r\n    margin-left: 2px;\r\n}\r\n@media screen and (max-width: 992px) and (min-width: 768px){\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    .video-div{\r\n        width: calc(50% - 4px);\r\n        display: inline-block;\r\n        height: 170px;\r\n        margin-left: 2px;\r\n    }\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}\r\n.video-des{\r\n    overflow: hidden;\r\n    height: 20px;\r\n}\r\n.ranking{\r\n    float: right;\r\n    width: calc(33%);\r\n    height: 340px;\r\n}\r\na.look-more{\r\n    display: block;\r\n    color: black;\r\n    width: 90%;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    text-align: center;\r\n    background-color: rgb(219, 219, 219);\r\n    border-radius: 6px;\r\n}\r\na.look-more:hover{\r\n    color: black;\r\n    background-color: silver;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/live-broadcast/live-broadcast.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"live-pic\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3 class=\"title\"><span class=\"glyphicon glyphicon-expand\"></span>直播</h3>\n      <div class=\"two-button\">\n        <a href=\"#\">最新动态</a>\n        <a href=\"#\">最新投稿</a>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <span class=\"title-small\">惊了(*/ω＼*)</span>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"fresh\">\n        <a href=\"#\"><span class=\"glyphicon glyphicon-refresh\"></span>11111条新动态</a>\n        <a href=\"#\">更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"title title-rank\">\n        <h4>排行</h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8 col-xs-12\">\n      <div *ngFor=\"let video of videos\" class=\"video-div\">\n        <a href=\"#\" class=\"thumbnail\" [routerLink]=\"['/videoplay',video.id]\">\n          <img src=\"http://placehold.it/160x100\" alt=\"\">\n          <div class=\"caption\">\n            <p class=\"video-des\" title=\"{{video.des}}\">{{video.des}}</p>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"ranking\">\n      <ul>\n        <li *ngFor=\"let video_rank of videos; let i=index\"><span class=\"rank-number{{i+1}}\">{{i+1}}</span><a [routerLink]=\"['/videoplay',video_rank.id]\" title=\"{{video_rank.des}}\">{{video_rank.des}}</a></li>\n      </ul>\n      <a href=\"#\" class=\"look-more\">查看更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/live-broadcast/live-broadcast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveBroadcastComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveBroadcastComponent = (function () {
    function LiveBroadcastComponent(videoService) {
        this.videoService = videoService;
        this.videos = [];
        this.videos = this.videoService.getLiveVideos();
    }
    LiveBroadcastComponent.prototype.ngOnInit = function () {
    };
    return LiveBroadcastComponent;
}());
LiveBroadcastComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-live-broadcast',
        template: __webpack_require__("../../../../../src/app/live-broadcast/live-broadcast.component.html"),
        styles: [__webpack_require__("../../../../../src/app/live-broadcast/live-broadcast.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */]) === "function" && _a || Object])
], LiveBroadcastComponent);

var _a;
//# sourceMappingURL=live-broadcast.component.js.map

/***/ }),

/***/ "../../../../../src/app/music/music.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon{\r\n    padding: 5px;\r\n}\r\n.title{\r\n    display: inline-block;\r\n}\r\n.two-button{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.two-button>a{\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n    color: black;\r\n    font-size: 12px;\r\n}\r\n.two-button>a:hover,\r\n.two-button>a:focus{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\n.glyphicon{\r\n    padding: 0px;\r\n}\r\n.fresh>a{\r\n    display: inline-block;\r\n    color: black;\r\n    border: solid 1px rgb(185, 185, 185);\r\n    padding: 4px 5px;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n    margin-top: 30px;\r\n    font-size: 12px;\r\n    vertical-align: middle;\r\n}\r\n.fresh>a:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n    background-color: rgb(185, 185, 185);\r\n}\r\n.title-small{\r\n    color: darkgray;\r\n    display: block;\r\n    height: 34px;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    line-height: 34px;\r\n}\r\n.live-pic{\r\n    background: url(" + __webpack_require__("../../../../../src/images/cartoon.jpg") + ") no-repeat -0px -100px;\r\n    height: 200px;\r\n    width: 97%;\r\n    margin: 0 auto;\r\n    border-radius: 3px;\r\n}\r\n.title-rank{\r\n    margin-left: 20px;\r\n    margin-bottom: 0px;\r\n    margin-top: 20px;\r\n}\r\nul{\r\n    list-style: none;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    width: 90%;\r\n    /*border: solid 1px thistle;*/\r\n    /*border-radius: 5px;*/\r\n    /*box-shadow: 2px 2px 1px 2px linen;*/\r\n}\r\nul>li>a{\r\n    line-height: 2.3;\r\n    vertical-align: middle;\r\n    font-size: 12px;\r\n    margin-left: 15px;\r\n    color: black;\r\n}\r\nul>li>a:hover{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\nspan[class^=rank-number]{\r\n    display: inline-block;\r\n    background-color: rgb(185, 185, 185);\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    color: white;\r\n}\r\nspan.rank-number1,\r\nspan.rank-number2,\r\nspan.rank-number3{\r\n    background-color: hotpink;\r\n}\r\n.video-div{\r\n    width: calc(25% - 4px);\r\n    display: inline-block;\r\n    height: 170px;\r\n    margin-left: 2px;\r\n}\r\n.video-des{\r\n    overflow: hidden;\r\n    height: 20px;\r\n}\r\n.ranking{\r\n    float: right;\r\n    width: calc(33%);\r\n    height: 340px;\r\n}\r\na.look-more{\r\n    display: block;\r\n    color: black;\r\n    width: 90%;\r\n    padding: 5px;\r\n    margin-left: 20px;\r\n    text-align: center;\r\n    background-color: rgb(219, 219, 219);\r\n    border-radius: 6px;\r\n}\r\na.look-more:hover{\r\n    color: black;\r\n    background-color: silver;\r\n}\r\n@media screen and (max-width: 992px) and (min-width: 768px){\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    .video-div{\r\n        width: calc(50% - 4px);\r\n        display: inline-block;\r\n        height: 170px;\r\n        margin-left: 2px;\r\n    }\r\n    .ranking{\r\n        display: none !important;\r\n        float: none !important;\r\n    }\r\n    .title-rank{\r\n        display: none !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/music/music.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3 class=\"title\"><span class=\"glyphicon glyphicon-headphones\"></span>音乐</h3>\n      <div class=\"two-button\">\n        <a href=\"#\">最新动态</a>\n        <a href=\"#\">最新投稿</a>\n      </div>\n    </div>\n    <div class=\"col-md-2\">\n      <span class=\"title-small\">厉害了(*/ω＼*)</span>\n    </div>\n    <div class=\"col-md-2\">\n      <div class=\"fresh\">\n        <a href=\"#\"><span class=\"glyphicon glyphicon-refresh\"></span>11111条新动态</a>\n        <a href=\"#\">更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"title title-rank\">\n        <h4>排行</h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div *ngFor=\"let video of videos\" class=\"video-div\">\n        <a href=\"#\" class=\"thumbnail\" [routerLink]=\"['/videoplay',video.id]\">\n          <img src=\"http://placehold.it/160x100\" alt=\"\">\n          <div class=\"caption\">\n            <p class=\"video-des\" title=\"{{video.des}}\">{{video.des}}</p>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"ranking\">\n      <ul>\n        <li *ngFor=\"let video_rank of videos; let i=index\"><span class=\"rank-number{{i+1}}\">{{i+1}}</span><a [routerLink]=\"['/videoplay',video_rank.id]\" title=\"{{video_rank.des}}\">{{video_rank.des}}</a></li>\n      </ul>\n      <a href=\"#\" class=\"look-more\">查看更多<span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/music/music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MusicComponent = (function () {
    function MusicComponent(videoService) {
        this.videoService = videoService;
        this.videos = [];
    }
    MusicComponent.prototype.ngOnInit = function () {
        this.videos = this.videoService.getMusicVideos();
    };
    return MusicComponent;
}());
MusicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-music',
        template: __webpack_require__("../../../../../src/app/music/music.component.html"),
        styles: [__webpack_require__("../../../../../src/app/music/music.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */]) === "function" && _a || Object])
], MusicComponent);

var _a;
//# sourceMappingURL=music.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav {\r\n    height: 50px;\r\n}\r\n.navbar-inverse{\r\n    background-color: rgba(0,0,0,0.5);\r\n}\r\nul>li>a.nav-icon{\r\n    padding: 0;\r\n    line-height: 0;\r\n}\r\nul>li.bg-danger{\r\n    background-color: hotpink;\r\n    height: 55px;\r\n    border-radius: 0 0 4px 4px;\r\n}\r\nul>li.bg-danger>a{\r\n    color: white;\r\n}\r\n.btn-pink{\r\n    background-color: hotpink;\r\n    border: solid palevioletred 1px;\r\n}\r\n@media screen and (max-width: 768px){\r\n    ul>li>a.nav-icon{\r\n        padding: 10px;\r\n    }\r\n    ul>li>a.nav-icon>img{\r\n        height: 30px;\r\n        width: 30px;\r\n    }\r\n    ul>li.bg-danger{\r\n        background-color: transparent;\r\n    }\r\n    .nav {\r\n        height: auto;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#ul-content\">\n          <span class=\"sr-only\">切换</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a href=\"#\" class=\"navbar-brand\">首页</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"ul-content\">\n        <ul class=\"nav navbar-nav\">\n          <li><a href=\"#\">上天</a></li>\n          <li><a href=\"#\">滚</a></li>\n          <li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">厉害了 <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"\">aaa</a></li>\n              <li><a href=\"\">bbb</a></li>\n              <li><a href=\"\">ccc</a></li>\n            </ul>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\" class=\"nav-icon\" data-toggle=\"modal\" data-target=\"#myModal\"><img src=\"http://placehold.it/50x50\" alt=\"\" class=\"img-circle\"></a></li>\n          <li><a href=\"#\">消息</a></li>\n          <li><a href=\"#\">动态</a></li>\n          <li><a href=\"#\">稍后再看</a></li>\n          <li><a href=\"#\">历史</a></li>\n          <li><a href=\"#\">收藏夹</a></li>\n          <li class=\"bg-danger\"><a href=\"#\">投稿</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">注册/登录</h4>\n      </div>\n      <div class=\"modal-body\">\n      <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li role=\"presentation\" class=\"active\"><a href=\"#sign\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">注册</a></li>\n        <li role=\"presentation\"><a href=\"#login\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">登录</a></li>\n      </ul>\n      <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"sign\">\n          <form [formGroup]=\"formModule1\" novalidate (ngSubmit)=\"onSignSubmit()\">\n            <div class=\"form-group\" [class.has-error]=\"formModule1.hasError('required','username')||formModule1.hasError('minlength','username')\">\n              <label for=\"username\" class=\"control-label\">用户名：</label>\n              <input type=\"text\" id=\"username\" placeholder=\"请输入用户名\" class=\"form-control\" formControlName=\"username\">\n              <span [class.hidden]=\"!formModule1.hasError('required','username')\" class=\"help-block\">用户名必填</span>\n              <span [class.hidden]=\"!formModule1.hasError('minlength','username')\" class=\"help-block\">用户名长度大于6</span>\n            </div>\n            <div formGroupName=\"passwordGroup\">\n              <div class=\"form-group\" [class.has-error]=\"formModule1.hasError('minlength',['passwordGroup','password'])\">\n                <label for=\"password\" class=\"control-label\">密码：</label>\n                <input type=\"password\" id=\"password\" placeholder=\"请输入密码\" class=\"form-control\" formControlName=\"password\">\n                <span [class.hidden]=\"!formModule1.hasError('minlength',['passwordGroup','password'])\" class=\"help-block\">密码必须大于6位</span>\n              </div>\n              <div class=\"form-group\" [class.has-error]=\"formModule1.hasError('passwordNoEquail','passwordGroup')\">\n                <label for=\"pass-confirm\" class=\"control-label\">确认密码：</label>\n                <input type=\"password\" id=\"pass-confirm\" placeholder=\"确认密码\" class=\"form-control\" formControlName=\"passwordConfirm\">\n                <span [class.hidden]=\"!formModule1.hasError('passwordNoEquail','passwordGroup')\" class=\"help-block\">两次密码必须相同</span>\n              </div>\n            </div>\n            <button class=\"btn btn-primary btn-pink\" type=\"submit\" >提交</button>\n          </form>\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"login\">\n          <form [formGroup]=\"formModule2\" (ngSubmit)=\"onLogin()\">\n            <div class=\"form-group\" [class.has-error]=\"formModule2.hasError('minlength','username_login')||formModule2.hasError('required','username_login')\">\n              <label for=\"username\" class=\"control-label\">用户名：</label>\n              <input type=\"text\" id=\"username-login\" placeholder=\"请输入用户名\" class=\"form-control\" formControlName=\"username_login\">\n              <span [class.hidden]=\"!formModule2.hasError('minlength','username_login')\" class=\"help-block\">长度必须大于6</span>\n              <span [class.hidden]=\"!formModule2.hasError('required','username_login')\" class=\"help-block\">是必填项</span>\n            </div>\n            <div class=\"form-group\" [class.has-error]=\"formModule2.hasError('minlength','password_login')||formModule2.hasError('required','password_login')\">\n              <label for=\"password\" class=\"control-label\">密码：</label>\n              <input type=\"password\" id=\"password-login\" placeholder=\"请输入密码\" class=\"form-control\" formControlName=\"password_login\">\n              <span [class.hidden]=\"!formModule2.hasError('minlength','password_login')\" class=\"help-block\">长度必须大于6</span>\n              <span [class.hidden]=\"!formModule2.hasError('required','password_login')\" class=\"help-block\">是必填项</span>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-pink\">提交</button>\n          </form>\n        </div>\n      </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(http) {
        this.http = http;
        // 注册界面表单
        this.formModule1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)]),
            passwordGroup: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
                password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)]),
                passwordConfirm: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)])
            }, this.equalPassword)
        });
        this.formModule2 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username_login: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)]),
            password_login: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)])
        });
        // 登录界面表单，采用表单构造器
        this.fb = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]();
        var body = JSON.stringify(this.formModule1.value);
        this.req = this.http.post('api/sign', body).map(function (res) { return res.json(); });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onSignSubmit = function () {
        if (this.formModule1.valid) {
            this.req.subscribe(function (res) {
                console.log(res);
            });
            console.log(this.formModule1.valid);
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.onLogin = function () {
        if (this.formModule2.valid) {
            console.log("\u767B\u5F55\u8BF7\u6C42\u53D1\u9001" + this.formModule2.valid);
        }
        else {
            console.log(this.formModule2.errors);
            return false;
        }
    };
    //////////密码验证////////////////
    NavbarComponent.prototype.equalPassword = function (group) {
        var password = group.get("password");
        var passwordConfirm = group.get("passwordConfirm");
        var valid = (password.value === passwordConfirm.value);
        return valid ? null : { passwordNoEquail: true };
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/share/videos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosService; });
/* unused harmony export Video */
/* unused harmony export Comment */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideosService = (function () {
    function VideosService() {
        this.videos = [
            new Video('视频1', '10:25', 25, '震惊：18岁少女居然被...', 1),
            new Video('视频2', '13:25', 105, '劲爆！！！小学校长居然...', 2),
            new Video('视频3', '7:25', 50, '奥术大师啊沙发沙发发顺丰', 3),
            new Video('视频4', '6:25', 30, '啊实打实收GIF四评估后四', 4),
            new Video('视频5', '20:25', 200, '我热hi偶会更好服务', 5),
            new Video('视频6', '15:25', 165, '法规无法是否不锁第四季度', 6),
            new Video('视频7', '16:25', 185, '有人能够尽快十大歌', 7),
            new Video('视频8', '17:25', 196, '啥都奥地方拿来得及', 8)
        ];
        this.comments = [
            new Comment(1, new Date(), 'IPhone7', '强无敌'),
            new Comment(2, new Date(), 'Sumsong', '厉害了'),
            new Comment(3, new Date(), '前后2000 oppoR11', '碉堡了'),
            new Comment(4, new Date(), 'Mix', '逼炸了'),
            new Comment(5, new Date(), '华为', '惊了'),
            new Comment(6, new Date(), 'vivo', '啊山东我还of还哦孵化器维护费黄金芳尽快回复hiof后发货萨哈迪欧哇哈掉收费和覅偶回去额')
        ];
    }
    VideosService.prototype.getVideoById = function (id) {
        var video;
        video = this.videos.filter(function (value) { return value.id === id; })[0];
        console.log(video);
        return video;
    };
    VideosService.prototype.getAdVedios = function () {
        return this.videos;
    };
    VideosService.prototype.getSpreadVideos = function () {
        return this.videos.slice(0, 6);
    };
    VideosService.prototype.getMusicVideos = function () {
        return this.videos;
    };
    VideosService.prototype.getLiveVideos = function () {
        return this.videos;
    };
    VideosService.prototype.getDanceVideos = function () {
        return this.videos;
    };
    return VideosService;
}());
VideosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], VideosService);

var Video = (function () {
    function Video(name, time, size, des, id) {
        this.name = name;
        this.time = time;
        this.size = size;
        this.des = des;
        this.id = id;
    }
    return Video;
}());

var Comment = (function () {
    function Comment(user_id, time, equipment, user_comment) {
        this.user_comment = user_comment;
        this.time = time;
        this.equipment = equipment;
        this.user_id = user_id;
    }
    return Comment;
}());

//# sourceMappingURL=videos.service.js.map

/***/ }),

/***/ "../../../../../src/app/side-navbar/side-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style: none;\r\n    border: solid lavender 1px;\r\n    border-radius: 4px;\r\n    display: block;\r\n    padding: 0px;\r\n}\r\nul>li{\r\n    display: block;\r\n    width: auto;\r\n}\r\nul>li>a{\r\n    background-color: #f6f9fa;\r\n    display: block;\r\n    height: 45px;\r\n    width: 45px;\r\n    padding: 1px 2px;\r\n    text-align: center;\r\n    color: black;\r\n    margin: auto;\r\n    line-height: 45px;\r\n}\r\nul>li>a:hover{\r\n    color: white;\r\n    text-decoration: none;\r\n    background-color: dodgerblue;\r\n}\r\nul>.hovered>a{\r\n    color: white;\r\n    text-decoration: none;\r\n    background-color: dodgerblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-navbar/side-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul (click)=\"ulClick($event)\">\n    <li [class.hovered]=\"scrollFlag.isSpread\"><a href=\"#\" (click)=\"spreadClick()\">推广</a></li>\n    <li [class.hovered]=\"scrollFlag.isBroadcast\"><a href=\"#\" (click)=\"liveClick()\">直播</a></li>\n    <li [class.hovered]=\"scrollFlag.isCartoon\"><a href=\"#\" (click)=\"cartoonClick()\">动画</a></li>\n    <li [class.hovered]=\"scrollFlag.isMusic\"><a href=\"#\" (click)=\"musicClick()\">音乐</a></li>\n    <li [class.hovered]=\"scrollFlag.isDance\"><a href=\"#\" (click)=\"danceClick()\">舞蹈</a></li>\n    <li [class.hovered]=\"scrollFlag.isChina\"><a href=\"#\" (click)=\"chinaClick()\">国创</a></li>\n    <li [class.hovered]=\"scrollFlag.isGame\"><a href=\"#\">游戏</a></li>\n    <li [class.hovered]=\"scrollFlag.isLife\"><a href=\"#\">生活</a></li>\n    <li [class.hovered]=\"scrollFlag.isGuiChu\"><a href=\"#\">鬼畜</a></li>\n    <li [class.hovered]=\"scrollFlag.isSceince\"><a href=\"#\">科技</a></li>\n    <li [class.hovered]=\"scrollFlag.isFashon\"><a href=\"#\">时尚</a></li>\n    <li [class.hovered]=\"scrollFlag.isAD\"><a href=\"#\">广告</a></li>\n    <li [class.hovered]=\"scrollFlag.isEntertainment\"><a href=\"#\">娱乐</a></li>\n    <li [class.hovered]=\"scrollFlag.isFilm\"><a href=\"#\">影视</a></li>\n    <li><a href=\"#\" (click)=\"onClick()\"><span class=\"glyphicon glyphicon-arrow-up\"></span></a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/side-navbar/side-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNavbarComponent = (function () {
    function SideNavbarComponent() {
    }
    SideNavbarComponent.prototype.ngOnInit = function () {
    };
    ///////////游戏之后的事件绑定////////////////
    SideNavbarComponent.prototype.ulClick = function (e) {
        var src = e.srcElement;
        if (src.innerHTML === "游戏") {
            $("body,html").animate({ scrollTop: $("#game").offset().top + 10 }, 500);
            return false;
        }
        else if (src.innerHTML === "生活") {
            $("body,html").animate({ scrollTop: $("#life").offset().top + 10 }, 500);
            return false;
        }
        else if (src.innerHTML === "鬼畜") {
            $("body,html").animate({ scrollTop: $("#guichu").offset().top + 10 }, 500);
            return false;
        }
        else if (src.innerHTML === "科技") {
            $("body,html").animate({ scrollTop: $("#sceince").offset().top + 10 }, 500);
            return false;
        }
        else if (src.innerHTML === "时尚") {
            $("body,html").animate({ scrollTop: $("#fashion").offset().top + 10 }, 500);
            return false;
        }
        else if (src.innerHTML === "娱乐") {
            $("body,html").animate({ scrollTop: $("#entertainment").offset().top + 10 }, 500);
            return false;
        }
        else if (src.innerHTML === "广告") {
            $("body,html").animate({ scrollTop: $("#advertisment").offset().top + 10 }, 500);
            return false;
        }
        else if (src.innerHTML === "影视") {
            $("body,html").animate({ scrollTop: $("#film").offset().top + 10 }, 500);
            return false;
        }
    };
    //////////////游戏之前的事件绑定,应该合并到UlClick中///////////之后再改
    SideNavbarComponent.prototype.onClick = function () {
        $("body,html").animate({ scrollTop: 0 }, 500);
        return false;
    };
    SideNavbarComponent.prototype.spreadClick = function () {
        $("body,html").animate({ scrollTop: $("#spread").offset().top }, 500);
        return false;
    };
    SideNavbarComponent.prototype.liveClick = function () {
        $("body,html").animate({ scrollTop: $("#broadcast").offset().top + 20 }, 500);
        return false;
    };
    SideNavbarComponent.prototype.cartoonClick = function () {
        $("body,html").animate({ scrollTop: $("#cartoon").offset().top + 20 }, 500);
        return false;
    };
    SideNavbarComponent.prototype.musicClick = function () {
        $("body,html").animate({ scrollTop: $("#music").offset().top + 20 }, 500);
        return false;
    };
    SideNavbarComponent.prototype.danceClick = function () {
        $("body,html").animate({ scrollTop: $("#dance").offset().top + 20 }, 500);
        return false;
    };
    SideNavbarComponent.prototype.chinaClick = function () {
        $("body,html").animate({ scrollTop: $("#china-cartoon").offset().top + 20 }, 500);
        return false;
    };
    return SideNavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_home_component__["b" /* ScrollFlag */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_home_component__["b" /* ScrollFlag */]) === "function" && _a || Object)
], SideNavbarComponent.prototype, "scrollFlag", void 0);
SideNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-side-navbar',
        template: __webpack_require__("../../../../../src/app/side-navbar/side-navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/side-navbar/side-navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SideNavbarComponent);

var _a;
//# sourceMappingURL=side-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/spread/spread.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n    margin: 20px 0px;\r\n}\r\n.title{\r\n    display: inline;\r\n}\r\n.title-small{\r\n    margin-left: 50px;\r\n    color: darkgray;\r\n}\r\n.ad{\r\n    background-color: whitesmoke;\r\n    width: 260px;\r\n    float: right;\r\n    margin: 10px;\r\n    text-align: center;\r\n}\r\n.ad>span>a{\r\n    color: darkgray;\r\n}\r\n.ad>span>a:hover{\r\n    color: cornflowerblue;\r\n}\r\n.caption{\r\n    padding: 3px;\r\n}\r\n.video-des{\r\n    font-size: 14px;\r\n    height: 20px;\r\n}\r\n.video-des>a{\r\n    color: black;\r\n    overflow: hidden;\r\n    height: 20px;\r\n    display: block;\r\n}\r\n.video-des>a:hover{\r\n    color: cornflowerblue;\r\n    text-decoration: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spread/spread.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-4\">\n          <h3 class=\"title\"><span class=\"glyphicon glyphicon-volume-up\"></span>&nbsp;推广</h3><span class=\"title-small\">来闪耀一下吧φ(>ω<*) </span>\n      </div>\n      <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"ad\"><span><a href=\"#\" class=\"\">在线人数:11212</a><span>  |  </span><a href=\"#\">投稿人数:9876</a></span></div>\n      </div>\n  </div>\n  <div class=\"row\">\n    <div *ngFor=\"let video of videos\" class=\"col-md-2 col-xs-6\" >\n      <a href=\"#\" class=\"thumbnail\" [routerLink]=\"['/videoplay',video.id]\">\n        <img src=\"http://placehold.it/160x100\" alt=\"\">\n        <div class=\"caption\">\n          <p class=\"video-des\"><a href=\"#\">{{video.des}}</a></p>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/spread/spread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpreadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpreadComponent = (function () {
    function SpreadComponent(videosService) {
        this.videosService = videosService;
        this.videos = this.videosService.getSpreadVideos();
    }
    SpreadComponent.prototype.ngOnInit = function () {
    };
    return SpreadComponent;
}());
SpreadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-spread',
        template: __webpack_require__("../../../../../src/app/spread/spread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/spread/spread.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */]) === "function" && _a || Object])
], SpreadComponent);

var _a;
//# sourceMappingURL=spread.component.js.map

/***/ }),

/***/ "../../../../../src/app/videoplay/videoplay.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-inner{\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.container{\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n/***************左侧信息栏**********/\r\n.left-inner{\r\n    width: 40%;\r\n    float: left;\r\n}\r\n.video-info{\r\n    margin-top: 15px;\r\n    font-size: 0;\r\n}\r\n.divide-kind{\r\n    margin-top: 15px;\r\n    font-size: 10px;\r\n    color: silver;\r\n}\r\n.divide-kind>a{\r\n    color: silver;\r\n}\r\n.divide-kind>a:hover{\r\n    color: dodgerblue;\r\n    text-decoration: none;\r\n}\r\n.divide-kind>.video-date{\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n}\r\n.info-line{\r\n    font-size: 14px;\r\n    display: inline-block;\r\n    width: 25%;\r\n}\r\n.info-line.info-line3{\r\n    border-left: solid 1px rgba(205,205,205,1);\r\n}\r\n.info-line{\r\n    text-align: center;\r\n}\r\n.icon-lichengdixian{\r\n    color: gold;\r\n}\r\n.icon-xihuan{\r\n    color: hotpink;\r\n}\r\n.info-number{\r\n    padding-left: 5px;\r\n}\r\n.inner-ad{\r\n    width: 100%;\r\n    height: 80px;\r\n    margin-top: 10px;\r\n    background: url(" + __webpack_require__("../../../../../src/images/inner-ad1.jpg") + ") no-repeat;\r\n}\r\n/****************右侧信息栏**************/\r\n.right-inner{\r\n    width: 315px;\r\n    float: right;\r\n}\r\n.right-inner>.face-pic{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.right-inner>.up-info{\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    font-size: 10px;\r\n    width: 240px;\r\n}\r\n.up-name{\r\n    font-size: 14px;\r\n}\r\n.right-inner>.face-pic>a>img{\r\n    width: 64px;\r\n    height: 64px;\r\n    background: url(" + __webpack_require__("../../../../../src/images/upface.jpg") + ");\r\n    background-size: cover;\r\n}\r\n.up-info-des{\r\n    color: silver;\r\n}\r\n.inner-email{\r\n    float: right;\r\n}\r\n.inner-email>a{\r\n    font-size: 14px;\r\n}\r\n.btn-choudian,\r\n.btn-guanzhu{\r\n    display: inline-block;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    line-height: 22px;\r\n}\r\n.btn-guanzhu{\r\n    width: 152px;\r\n    height: 22px;\r\n    border: solid dodgerblue 1px;\r\n    background-color: dodgerblue;\r\n    color: white;\r\n}\r\n.btn-guanzhu:hover{\r\n    background-color: cornflowerblue;\r\n}\r\n.btn-choudian{\r\n    width: 62px;\r\n    height: 22px;\r\n    border: solid hotpink 1px;\r\n    color: hotpink;\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.btn-choudian:hover{\r\n    background-color: hotpink;\r\n    color: white;\r\n}\r\n/*****************小于768px信息栏******************/\r\n@media screen and (max-width: 768px){\r\n    .left-inner{\r\n        float: none;\r\n        display: block;\r\n        width: 456px;\r\n    }\r\n    .right-inner{\r\n        float: none;\r\n        display: block;\r\n        width: 100%;\r\n        margin-top: 20px;\r\n    }\r\n}\r\n/***********video组件********************/\r\n.video-body{\r\n    background-color: #f6f9fa;\r\n    border-top: 1px solid #e5e9ef\r\n}\r\n.video-container{\r\n     font-size: 0px;\r\n }\r\nvideo{\r\n    display: inline-block;\r\n    height: 500px;\r\n    width: 70%;\r\n    font-size: 14px;\r\n    background-color: white;\r\n    background: url(" + __webpack_require__("../../../../../src/images/bilitv.jpg") + ") no-repeat;\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n    vertical-align: top;\r\n    border: 1px solid #e5e9ef;\r\n}\r\n.video-danmu{\r\n    height: 500px;\r\n    width: 30%;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    background-color: #4e5157;\r\n    vertical-align: top;\r\n    color: #f6f9fa;\r\n}\r\n@media screen and (max-width: 996px){\r\n    video{\r\n        width: 100%;\r\n    }\r\n    .video-danmu{\r\n        display: none;\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    video{\r\n        height: 400px;\r\n    }\r\n}\r\n@media screen and (max-width: 512px){\r\n    video{\r\n        height: 300px;\r\n    }\r\n}\r\n/****************播放器下方工具栏**********/\r\n.toolbar-container{\r\n    height: 82px;\r\n    border: 1px solid #e5e9ef;\r\n    margin-top: 20px;\r\n    border-radius: 4px;\r\n    background-color: white;\r\n    line-height: 82px;\r\n}\r\n@media screen and (max-width: 1280px){\r\n    .toolbar-container{\r\n        display: none;\r\n    }\r\n}\r\n/*************工具栏左边******************/\r\n.toolbar-container>.toolbar-left{\r\n    width: 30%;\r\n    display: inline-block;\r\n}\r\n.toolbar-container>.toolbar-left>.toolbar-share{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 80px;\r\n    text-align: center;\r\n    line-height: 1.42857143;\r\n}\r\n.toolbar-container>.toolbar-left>.toolbar-share>span,\r\n.toolbar-container>.toolbar-middle>.shoucang-container>span,\r\n.toolbar-container>.toolbar-middle>.coin-container>span,\r\n.toolbar-container>.toolbar-middle>.tv-container>span{ /********toolbar的文字部分,都写在一起了********/\r\n    display: block;\r\n    font-size: 20px;\r\n}\r\n.toolbar-container>.toolbar-left>.toolbar-share>span.share-number,\r\n.toolbar-container>.toolbar-middle>.shoucang-container>span.shoucang-number,\r\n.toolbar-container>.toolbar-middle>.coin-container>span.coin-number,\r\n.toolbar-container>.toolbar-middle>.tv-container>span.tv-number{ /********toolbar的数字部分,都写在一起了********/\r\n    font-size: 10px;\r\n    color: silver;\r\n}\r\n.toolbar-container>.toolbar-left>.sina,\r\n.toolbar-container>.toolbar-left>.qq-zoon,\r\n.toolbar-container>.toolbar-left>.qq,\r\n.toolbar-container>.toolbar-left>.tieba\r\n{\r\n    display: inline-block;\r\n    line-height: 1.42857143;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url(" + __webpack_require__("../../../../../src/images/icons.d895b84.png") + ") no-repeat -1357px;\r\n    vertical-align: middle;\r\n}\r\n.toolbar-container>.toolbar-left>.sina{\r\n    background-position-y: -586px;\r\n}\r\n.toolbar-container>.toolbar-left>.qq-zoon{\r\n    background-position-y: -726px;\r\n}\r\n.toolbar-container>.toolbar-left>.qq{\r\n    background-position-y: -796px;\r\n}\r\n.toolbar-container>.toolbar-left>.tieba{\r\n    background-position-y: -656px;\r\n}\r\n.toolbar-container>.toolbar-left>.border-left{\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    height: 20px;\r\n    width: 1px;\r\n    border-right: solid 1px gray;\r\n    margin-left: 25px;\r\n}\r\n/**************中间toolbar********************/\r\n/*星星*/\r\n.toolbar-container>.toolbar-middle{\r\n    width: 40%;\r\n    display: inline-block;\r\n}\r\n.toolbar-container>.toolbar-middle>.icon-star,\r\n.toolbar-container>.toolbar-middle>.icon-coin,\r\n.toolbar-container>.toolbar-middle>.icon-tv{\r\n    display: inline-block;\r\n    line-height: 1.42857143;\r\n    width: 80px;\r\n    height: 80px;\r\n    vertical-align: middle;\r\n}\r\n.toolbar-container>.toolbar-middle>.icon-coin{\r\n    position: relative;\r\n    top: -20px;\r\n}\r\n.toolbar-container>.toolbar-middle>.icon-star{\r\n    background: url(" + __webpack_require__("../../../../../src/images/anim-fav.png") + ") no-repeat -0px -0px;\r\n}\r\n.toolbar-container>.toolbar-middle>.shoucang-container,\r\n.toolbar-container>.toolbar-middle>.coin-container,\r\n.toolbar-container>.toolbar-middle>.tv-container{\r\n    display: inline-block;\r\n    line-height: 1.42857143;\r\n    vertical-align: middle;\r\n}\r\n/*硬币*/\r\n.toolbar-container>.toolbar-middle>.icon-coin{\r\n    background: url(" + __webpack_require__("../../../../../src/images/anim-coin.png") + ") no-repeat -0px -0px;\r\n}\r\n/*稍后播放*/\r\n.toolbar-container>.toolbar-middle>.icon-tv{\r\n    background: url(" + __webpack_require__("../../../../../src/images/tv.png") + ") no-repeat -0px -0px;\r\n}\r\n/******************toolbar右侧*********************/\r\n.toolbar-container>.toolbar-right{\r\n    width: 30%;\r\n    display: inline-block;\r\n}\r\n.toolbar-container>.toolbar-right>.icon-chongdian{\r\n    display: inline-block;\r\n    line-height: 1.42857143;\r\n    width: 80px;\r\n    height: 80px;\r\n    vertical-align: middle;\r\n}\r\n.toolbar-container>.toolbar-right>.icon-chongdian{\r\n    background: url(" + __webpack_require__("../../../../../src/images/anim-battery.png") + ") no-repeat -0px -0px;\r\n    position: relative;\r\n    left: 40px;\r\n}\r\n.toolbar-container>.toolbar-right>span{\r\n    display: inline-block;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #ff94eb;\r\n    height: 60px;\r\n    width: 60%;\r\n    border: 2px solid #ff94eb;\r\n    border-radius: 30px;\r\n    text-align: center;\r\n    line-height: 60px;\r\n    vertical-align: middle;\r\n}\r\n/****************清除浮动****************/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/videoplay/videoplay.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row main-inner\">\n    <div class=\"left-inner\">\n      <h4>{{video.des}}</h4>\n      <div class=\"divide-kind\"><a [routerLink]=\"['']\">主页</a> > <a href=\"#\">一级分类</a> > <a href=\"#\">二级分类</a>\n        <span class=\"video-date\">2017-10-22 0:00</span><a href=\"#\">稿件投诉</a>\n      </div>\n      <div class=\"video-info\">\n        <div class=\"info-line\"><span class=\"iconfont icon-bofang\"></span><span class=\"info-number\">10.1万</span></div>\n        <div class=\"info-line\"><span class=\"icon-mulu iconfont\"></span><span class=\"info-number\">1121</span></div>\n        <div class=\"info-line info-line3\"><span class=\"icon-xihuan iconfont\"></span><span class=\"info-number\">8384</span></div>\n        <div class=\"info-line\"><span class=\"icon-lichengdixian iconfont\"></span><span class=\"info-number\">1790</span></div>\n      </div>\n      <div class=\"inner-ad\"></div>\n    </div>\n    <div class=\"right-inner\">\n      <div class=\"face-pic\">\n        <a href=\"#\"><img src=\"\" alt=\"\"></a>\n      </div>\n      <div class=\"up-info\">\n        <a href=\"#\" class=\"up-name\">我是up主</a>\n        <span class=\"iconfont icon-mulu inner-email\"><a href=\"#\">私信</a></span>\n        <div>我是up主信息</div>\n        <div class=\"up-info-des\">\n          <span>投稿：321</span>\n          <span>粉丝：　20.5万</span>\n        </div>\n        <div>\n          <div class=\"btn-guanzhu\">关注+</div>\n          <div class=\"btn-choudian\">充电</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"video-body\">\n  <div class=\"container video-container\">\n    <video src=\"../../videos/fate.mp4\" controls poster=\"../../images/videohold.jpg\"></video>\n    <div class=\"video-danmu\">\n      我是弹幕\n    </div>\n    <div class=\"toolbar-container\">\n      <div class=\"toolbar-left\">\n        <div class=\"toolbar-share\">\n          <span>分享</span>\n          <span class=\"share-number\">109</span>\n        </div>\n        <div class=\"sina\"></div>\n        <div class=\"qq-zoon\"></div>\n        <div class=\"qq\"></div>\n        <div class=\"tieba\"></div>\n        <span class=\"border-left\"></span>\n      </div>\n      <div class=\"toolbar-middle\">\n        <div class=\"icon-star\" (mouseover)=\"starAnimate($event)\" (mouseleave)=\"starAnimateEnd($event)\"></div>\n        <div class=\"shoucang-container\">\n          <span>收藏</span>\n          <span class=\"shoucang-number\">666</span>\n        </div>\n        <div class=\"icon-coin\" (mouseover)=\"coinAnimate($event)\" (mouseleave)=\"coinAnimateEnd($event)\"></div>\n        <div class=\"coin-container\">\n          <span>收藏</span>\n          <span class=\"coin-number\">666</span>\n        </div>\n        <div class=\"icon-tv\" (mouseover)=\"tvAnimate($event)\" (mouseleave)=\"tvAnimateEnd($event)\"></div>\n        <div class=\"tv-container\">\n          <span>稍后看</span>\n          <span class=\"tv-number\">马克一下~</span>\n        </div>\n      </div>\n      <div class=\"toolbar-right\">\n          <div class=\"icon-chongdian\" (mouseover)=\"batteryAnimate($event)\" (mouseleave)=\"batteryAnimateEnd($event)\"></div>\n          <span>为TA充电</span>\n      </div>\n    </div>\n  </div>\n</div>\n<app-comment>加载中...</app-comment>\n"

/***/ }),

/***/ "../../../../../src/app/videoplay/videoplay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_videos_service__ = __webpack_require__("../../../../../src/app/share/videos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoplayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoplayComponent = (function () {
    function VideoplayComponent(videoService, router) {
        this.videoService = videoService;
        this.router = router;
        this.video = null;
        this.id = 0;
    }
    VideoplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        $("html,body").scrollTop(0);
        this.router.params.subscribe(function (params) {
            _this.id = parseInt(params['id'], 0);
        });
        console.log(this.id);
        this.video = this.videoService.getVideoById(this.id);
    };
    // 收藏动画特效
    VideoplayComponent.prototype.starAnimate = function (e) {
        var positionX = parseInt(e.srcElement.style.backgroundPositionX, 0) || 0;
        this.timer = setInterval(function () {
            if (positionX < 1040) {
                positionX = positionX + 80;
                e.srcElement.style.backgroundPositionX = "-" + positionX + "px";
            }
            else {
                positionX = 0;
                e.srcElement.style.backgroundPositionX = "-" + positionX + "px";
            }
        }, 100);
        console.log(parseInt(e.srcElement.style.backgroundPositionX, 0));
    };
    VideoplayComponent.prototype.starAnimateEnd = function (e) {
        clearInterval(this.timer);
        e.srcElement.style.backgroundPositionX = '-0px';
    };
    //  硬币动画特效
    VideoplayComponent.prototype.coinAnimate = function (e) {
        var flag = false;
        var positionX = parseInt(e.srcElement.style.backgroundPositionX, 0) || 0;
        this.timer = setInterval(function () {
            if (!flag) {
                if (positionX < 480) {
                    positionX = positionX + 80;
                    e.srcElement.style.backgroundPositionX = "-" + positionX + "px";
                }
                else {
                    flag = true;
                }
            }
            if (flag) {
                if (positionX > 0) {
                    positionX = positionX - 80;
                    e.srcElement.style.backgroundPositionX = "-" + positionX + "px";
                }
                else {
                    flag = false;
                }
            }
        }, 100);
        console.log(parseInt(e.srcElement.style.backgroundPositionX, 0));
    };
    VideoplayComponent.prototype.coinAnimateEnd = function (e) {
        clearInterval(this.timer);
        e.srcElement.style.backgroundPositionX = '-0px';
    };
    //  小电视动画特效
    VideoplayComponent.prototype.tvAnimate = function (e) {
        var positionX = parseInt(e.srcElement.style.backgroundPositionX, 0) || 0;
        this.timer = setInterval(function () {
            if (positionX < 880) {
                positionX = positionX + 80;
                e.srcElement.style.backgroundPositionX = "-" + positionX + "px";
            }
            else {
                positionX = 0;
                e.srcElement.style.backgroundPositionX = "-" + positionX + "px";
            }
        }, 100);
    };
    VideoplayComponent.prototype.tvAnimateEnd = function (e) {
        clearInterval(this.timer);
        e.srcElement.style.backgroundPositionX = '-0px';
    };
    //  电池特效
    VideoplayComponent.prototype.batteryAnimate = function (e) {
        var positionX = parseInt(e.srcElement.style.backgroundPositionX, 0) || 0;
        this.timer = setInterval(function () {
            if (positionX < 320) {
                positionX = positionX + 80;
                e.srcElement.style.backgroundPositionX = "-" + positionX + "px";
            }
            else {
                positionX = 0;
                e.srcElement.style.backgroundPositionX = "-" + positionX + "px";
            }
        }, 100);
    };
    VideoplayComponent.prototype.batteryAnimateEnd = function (e) {
        clearInterval(this.timer);
        e.srcElement.style.backgroundPositionX = '-0px';
    };
    return VideoplayComponent;
}());
VideoplayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-videoplay',
        template: __webpack_require__("../../../../../src/app/videoplay/videoplay.component.html"),
        styles: [__webpack_require__("../../../../../src/app/videoplay/videoplay.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_videos_service__["a" /* VideosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], VideoplayComponent);

var _a, _b;
//# sourceMappingURL=videoplay.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/images/anim-battery.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "anim-battery.b019cf4bde0c32b25502.png";

/***/ }),

/***/ "../../../../../src/images/anim-coin.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "anim-coin.a9ad01bc3ddc7f2ff280.png";

/***/ }),

/***/ "../../../../../src/images/anim-fav.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "anim-fav.446432d0bb99e03c9d57.png";

/***/ }),

/***/ "../../../../../src/images/b21c8701a18b87d629819f80010828381e30fd69.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b21c8701a18b87d629819f80010828381e30fd69.739a967e2cacb75c4606.jpg";

/***/ }),

/***/ "../../../../../src/images/barcode-scanner.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAJT1JREFUeNrsnQl4HVX1wM972ZMuaVqa7nSnpYVSKGUTZPkoCEIBEUFBBVFE+SuLoP5FUVBAPhVl+fOpIO4gIiAiUCxi2Ze2lqX7ktK9SZMmbbMv739+d+ak0+ElfWnSvJLO+b6beZm5c+fOPfu5596JJRIJiWD/hXg0BBEBRBARQAQRAUQQEUAEEQFEEBFABBEBRBARQAQRAUSwH0BmZxv4++OPR6OYRph57rmRBIggjRKgHcjTcraWGVqmaRmmpSga8pSgQss6LXO1PKflSS21HxYC6K3lBi1XDR02rHDgwIHSt7BQ8vLyJDs7O0JtCtDQ0FBUW1tbVFVZeWhpaell69etq9TT92i5Q8v2rnxWrLPTwSEbAG5/cOz48UPGjRsXIbzrCEKWL18uK5Yt26D/XupLhS6xAbpSAvyPlp9PP/ro+KBBg9yJKNegayArK0sOPvhgKSoqGvLm668/o6eu1nL3vqQCrhw5atRdo0aPlt69e0cY20sAY510yinxklWr7lpdUtKkp+7bF+IAJ0GNSgAR8rsBGGPG2pcAJ6eVAFT/99LDb6dNn57Rp0+fCDvdBIz1kTrm2FuKg4J0SoBrxo4bN2LIkCERVroZBuuYj9Gx15/XpsULUMrLwVc99bTTBuTm5kYYSQPU1dXJv2bN2qI/h6k3UN/dEuBjgwYPjpCfRmDswYH+PCMdKuD0gcXFERbSDD4OTksHAUwrLCyMMJBm8HEwLR0EMJLwbgTpBR8HI/f0/s4EggozMzOjaF+aARwo9EuHBMiIxWIRBtIMPg7i6SCAPYJDDjlEBgwYIMwSHnDAAR0q/fr1c/f+4Q9/2KNnP/PMMzJy5EgXW3/ppZfarFdZWSmf+cxnHHd9/etflx07drgJmbPPPlt69erl+sKRd3n99dfdPfSJvtHHjr4XY8G9tNftEqQzN++J+F+3bp1s3769lXpTaSNcj/v5n9LU1CQtLS0OqfF4vPUcR7svIyPDlaqqKodcq1NfX996zd6H8/jX27ZtayUGztH+hg0b3D1cB7Zs2SK1tbXuPvpE3bb6nMq7NTc3d7tKzexuimMggWOPPVZOP/10N6C71TWKoI0bN8r999/filBg7dq18sQTT0h5ebl86lOfcjNmENhDDz0kjY2NjiA4jh8/Xj7xiU/IYYcdJt/61rccIbzyyivy4osvumsXXniha48p10cffdTdM23aNGFK+/jjj5ecnBz3zKuuukref/99ee+99+Txxx937VOsj4bQyy+/XAYPHuwQujug7WeffVZeffXV1rHpVjBO6mh54rHHEjpQHS4qIhM6SInbbrutQ/etXr06kZubC3sk7r33XnfuqaeeSmRnZ7tzjzzyiDs3Z84c93+wTJ8+PaHEskt7kydPdtcUwa3nlJjcOfqnBNJmX5RwXL3i4uLE888/787RJ87RR/rakXdjLHgmY7MnYwou9hSPmSLpITr0KlBTUyMlJSXu6Fu0rYBoHz58uNORiNcwR+ECoXM3b97sJMT8+fNl06ZNcuihh7rrK1eulOrqaunbt+8H2obz4WRgwYIFjnORKMaVnIO70dHDhg1z11etWuWkx3//+982340+0tehQ4dKaWmpa9OkhAEqJT8/X0aNGuWOjEW6vKlutwHC9yN2r7zySlmzZs0uItDa/uY3vylf/vKXHTEkk1p2/rvf/a4bTJD/2GOPOT39gx/8QP7617+6Olbf4KKLLnLqA9F7zjnnOASb3ufe73znO44QLrjgArn55ptd29dff7289dZbTu8bgQb7EiRc/v/b3/4mP/7xj4PWugNUzIgRI+S+++5rJdauGtN93gYIA4O9dOnS1sEPw9atW1Nqh/spcCyD65zjfp57DMLguiBwDaTAsevXr0/qCQBIFjiYuitWrHDSJlWg78natj6ZMZnWOEK6O0DeIOHMtggAzksFPve5z8nUqVOdyIdT4SSmqW+//XYZnSRTycQuiL3iiivcvUiD3/3ud05dXHbZZXLEEUc4Mf7973/fcfVnP/tZ1x9UAPXCnN2RvvPO+0LOZLerALsnKMKD4r09IzV8LgiXXHKJs9jR6yAOJD744INOhCfrLwQB8iif//znHQFg9YNYbAu8hhNPPFF+9atfOfUCvPbaa3L44YfLv//9b1cPDsaLaat/7Y2PvXew3u7u6ZESoKtg8eLFzvXiaIOJS4ghCKchDXDVMMowODHobLC5h0DMokWLWg05MzhRKeoxOERzL1yNoYlhiKr5sM+H9BgCQOwTnTMDDQQiujHCTjnlFLn77rulf//+7tyTTz7ZGkAC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"

/***/ }),

/***/ "../../../../../src/images/bilitv.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bilitv.d9fac987d06bcc23757b.jpg";

/***/ }),

/***/ "../../../../../src/images/cartoon.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cartoon.3302640e8c7d7fc0772b.jpg";

/***/ }),

/***/ "../../../../../src/images/icons.d895b84.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons.d895b84.d895b845095a259fcb3a.png";

/***/ }),

/***/ "../../../../../src/images/inner-ad1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "inner-ad1.e9b18a34f94a577a6181.jpg";

/***/ }),

/***/ "../../../../../src/images/live.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "live.42764e9d6c4372505ce3.jpg";

/***/ }),

/***/ "../../../../../src/images/tv.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tv.c9645f690314b25e2166.png";

/***/ }),

/***/ "../../../../../src/images/upface.jpg":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADIAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD36iiigAooooAKKKKACiiigAoopM0ALRSZppkUfeYD6mpugH0VF50WceYmf94VICD0oUk9gFopM0tUAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSZqvc3MVpAZJW2qPzJ9B6muXvtTuL5iCxig7Rg8n/eI6/Tp9etcmIxcKK137GlOlKpsbd7rlraZVW86Qfwp0H1PSsK48RXspPlukIz/Au4/mazWJkzj5UXgn0Pp9ajICkIoy7dN3Qe5rxK2PrVHo7LyO6GHhHfUr6jc38rh21S9KjGY0faD+VVE1ALkFc/7WS1W71ljt19NwJJ6n3NVBADctlflk5rz6mInfV3OhU0aEM4YDCJk/rVpJmjG5RImOpjkP+PFZsds0L4BJB6DPB9vY/wA6vRb1Ibn0DY6exqY1Z7pg4ItxazfRH5LqTH/TUBx/iK1LbxLKB/pdvuXvJBzj6qf6VleUkw3KoV+4FR/6s55VgfvD+td9DGVo/aMJ0YS6Hb2t7Bdx74ZVcd8HkfUdqsVxVtOpcOGMcq/xocf5Hsa3bbVSpEd2APSUDg/X0r2MPj4z92ejOSph3HWOps0UinIz2pa9E5wooooAKKKKACiiigAooooAKKKKACopZEijaRzhQMmpScVg3l19qmaNTmGM4JH8TVzYmuqMObqXThzuxUvHe8lM0v3R9xM8KP8AE1lzfvHKKdqIMyP/AHR2A9z2rSvWZFESLukbt6n/AD+gNU2hxFsX5wDnJ/jc9z/noK+cnJyblLc9KCSVkUMNK5CrhI+i9hnt9e5NMCHaWPWRiq/7o6mtF7fy1WBSdx5ZvXPU1UnGJ9g6KNi4/X+RrmbZskUNQiMkRB6Fd3+f0qzBGrxRORxU11DkSJ6R4/UUW64tEXHqv+FZ8l2UWxboykEAhh0ptsAxeJ8llHX+8PX60sDM8AbupzU7RlJVlA6c/h3q407CbI2hMbZ7d8fzodBKTkDfjB9DV8RgjHXHT6UxoQCPQjj3HpWqjYz5kzEkikicPGSGB9f0rTs7hZ4gjcMP/HT/AIU+SAONp5JHHv8A/Xqs8XlN5i/jj0rS5Js2F8LVhDK2IicAn+A+n0/lW8OlcW84miJ4LgYYeo9a1/D+p/aY3s5DmWEDaT/EnY/h0/KvXwGKb/dz+Rx4ilb3kb1FFFescoUUUUAFFFFABRRRQAUUVHLKkMTySMFRAWZj2ApN2Ay9b1A2sCwQn9/Odq+w6ZrPtVVcAH93D39T61jzX8l3fSXpBB6RKe2eF/IZP41omUW1kqZxnkk/59AT+FfO4uv7Wppsj0KVPlj6j+WLyt99uB7D/wDVUiRjgnp1qskhMEZPDMNxHpnt+oFWpG8uNRnljXG2b2Ehi8yRpT3OB+H+TVYWYkm3/wC0cf5+n86vr8kRA/hT9TUUMg2j6/41PVCUnqUngy02R2P9TRFbAWpwOhyPrjNW7jgSMO+R+hqK3lVoJP8AdVv0/wD10KJXM7XC0iVZHHY1YlTES4HI4qvDJyf0/CpZ5f8ARt+e+Cf0/nTWmopXuOhcbFbOccH6f5xTnYEMnRk+dayY70LLJGOcneo9QR0/nTprrZLFKGyCnPuKti5TSyrx5XthlPpVG5kCt7Ht/n/PWoba72yNGWyAeD6g1XvpgoDt91W2P7DsakpxIpZGhl3L+Xr/AJ/mKZFemyv4b2LnaeQP4lPUfiP1ps+57fI++hyPwqgjhiUHQglf8KqMnF3W4mlJWZ6tbzx3MEc0TBo5FDKR3BqauL8G6qCX0yV+Vy8HuP4lH06/j7V2lfT0Kqq01JHlzhySsFFFFbEBRRRQAUUUUAFYOtOty32HJWBF867YdoxyF/HH5CtieVYIXlf7qKWNcrr85svDsjSYFzfMN59B1I/AYH41z4iVoO5dNXkZFq5ur4vgAL8+OwY8AfgKNUusxlAfvERj2GeT+QP51HpjbLdSeGkzIx9ug/xrJv75UtjdvxGsqd/7zf4EV8y7tnqI6iJ9zRZ/iGf1z/hUs0+68iQdAD/I1m28+2YKx5jibP1BAoM+L0HPIxn81qGUtzdll228vPRazbe7DSTQg/NGqf8Ajwb/AAqOW5Jtrlc8iNv/AEI1kRySr4qulQExNZJz6MrEj9DSir3C1kdHLPvgkfPGVb8DVDTLobEVj38tvwJFLazLNHLCD1Uhc/mP5/pWQsrQ3Fwozw3mD8cH+YNaMlbG3bykeYp+9Gx/z+lTyEyWtxEDztJX/P4VQjkA1gqPuXMe9frirCTCO9RT0Zcfl/8AWqHsUYQuGaRXX72WH4/eH9avTTg6bFMOitjj/P0rNmX7NqEsfYASD/gLYP6GpkkA067iIz5bB8e3H+FWnoBYtSXgicHOC0TH6dP0qe7O+IsRkOu1h74qhpT7ba4jJyFcOD+mfyqzI5ZmTsw4+opS0ZRDDNhU3HP8LH19DVGZHt7ltvRG3AVIj7I5VYcRuM/7pPH5E0+Ql4I5m5ZMpJ7gd/yo6EdSMPJb3kc9u5U5EkTgfdP+f516bo2pJqunR3KgK/3ZEHO1u4+ncexrzeGI+UY+rQtlfcVt2tw3h+8hv49z6VeYDgdYz6H3HP1Ga9HL6zi2nt/WpzYmCdmtz0Cio43WRFdGDKwBBB4IqSveOAKKKKACiiigCjfgSmG24/eyDcP9leT/AEH41xnjqbzriCDOFVtv6ZY/yrsnO7V8kjbFb557bm5/Ra838TztNdeYf+eXmH2Mjcf+OkV5+Nl+7a7m9Be8Paby9OuZBwVhAUemf8isu/smv4dN0tf+W12nmf7qjef0UfnU4kEtgYyeHZN30AyauaM3neILdmHIjnm+mcKP0rw6fxHe2NWRl1TY/wApkgkUg9jxn+VJdyPA5kAyxtywHqVIOP0q34ggQTJfW53NC26aMDnYRtY/lz9RWZeTG4tFGf30LkHH8SkdR9RzRODTGmXRcqzblOY5lOw+oI3CnaavneIbhSSN0BAOe42GuV0/WFFqts5AaEhkY9Bz/I8j2JrpNCuFn8R5jOVZecf7uP8ACinC0hykSq7W98V6FidufUHkfn/MVWvpUiuknPEZG2T/AHCev4GpPFOs6Lp9wTcX9vBMf9ZFJKoLY6MBnIOOOnIrKn1C31O1BtpUeQDcpDArJnt+I4q6lKUNWtDNSNbzjFb20rH95aPsY+3/AOo1fu32vBNnjeM/jwax7R1urPysNukh24bqCuR+Y4q8WNxpG7+IKkn9D+orCSsaJlXVcf2xGD/y0jdPzX/GobJvOjlz/wAtLbB+ozRrEgc6TcL3kUH8aZpbbdQaE9Dbv+YJ/wATRsrDGaPMTPeQk8jBH4gH/GtBX3JExP8AFsb8f/r1hwExarNjI8y33ceyn/Ctm1PnpMo9f1HP8iKcnpcYk0W6/MTcC4gI/HofyPNGllppvJkHMqc/73T+YP51o31sdtrcjqsuD9G/+vUUkBtr2KVRx5hI9icHH55qIsQtjCVnQEcp8re4HB/TBrprCzjezksLgZhlYx/Rh8ysPw/9BFUp4Fhu1njAKygSL+X+Ga2UQmJ9n3tgZT/tLyP0rtwT5Kyvsznru8CLQWksZX0i5OWi+aFuzL6D6dfx9q6GsbVYTNDBqFt/roCJF/2l7j8jWrFKs0KSIcq6hh9DX0FO6919PyOCWupJRRRWpIUUUUAYWqu0dxdBfvTWyxp9S23/ANmrifFflpe3y9P38MKj/ZCk/wBBXca8UgeyunztSdQ+OuOT/MVx+u2jTz3ssyBZZJElx12jy24/lXmYx6Nf1sdFFa3ObiYiBlP3tq/y/wD1VMsWpXGtz22m3MdtOtqdshTcQu9c9eB1znBpEiKXUEBHXbn8Sx/kBVvTWC+P4Hc4ScSQ/mMj9UryaOk1c6pHnHizS28O6tNeLrU5vkZWMzSFJZCepUDggcZB9fTNdR4el1PV9I+0Pbl5oQFLRjG9eobH19Pp6VS+NOhyJfGeISNna6jb1yMHH6V2/wAK7aZPCiLcphwADke5/wA/hXo1kpxSfdnPCpaWpztn4PvL68luFDwo/Oz0Y9fp9K1NN8F+I7Y3Kw30dqsi7PNRQWx6jPQ49K9MSEKcYqwEGMVEIWZpKofP+teALDRZJJdRuxdXkitK01xlgSAcLjjJOMZP16VyGl3un3d60NuGsH6Axk7Bn29PavavibpCzWzyb1BaLgEHnqD/ADrwXR9Nn/t3CKchs9evNazafOm9tjm9o+56n4Wvr5nSK/T9/DIcP1EiFeoPf7tdTZHaLiBvuhXH4HmpbrTkTwna6ksKq9tMj7wMZQttYfTnP4UlqhN2RjmSIj8QB/SvNxMOWz7nZRnzRuYl0GaGGE8tHKm38H/wJp1jxrEMg6GJv51JeRlbiEn++pP4H/ACptMt986NjO1G59uT/SudvRG6Ks9qYtSDf9MGH6kf1q34eUzvOg6tnH5AitS9tV+3xDuITn8zWf4eYQXpAP8AACf5f0ojqO+h0bRC70PePvMgbH+0AD/MGs/VX8u3inAGAFJHtmpdIuy6y2pPB+ZfbNVtQIk0+SPHTI+lQlZkrc1Le4judMwGzJbNnnrtzmtm0lCsD02sp/A//rrzrRtSKX1uCxCzq0D/AF5A/UV2Fvdq1hbB+JWQxntnqVP6EV2Urr3u2plUj07nSWQH2TyzyEZo8ewJH8qg0n9zHPZk5NtKUXJ/gPzL+hx+FR6LfRXMcqhh5vmMxU9cE9fpRbNt8R36Do8ET/iNw/wr6GMk1GSPPkmm0zXooorYkKKKQ0AY94r3FzFM3+ot51AH94ngt+GeKzNetkGorwAJISDj2BroEiSex8pu6lW9Qe/61zOozh7RLiZv35lCH/cxhSPY9fxNedi4/u33epvSfvHKyR/8TkcfdCv+AVhWNr92+lxw6ogJa2lEh/Ag/wAs/nXRSpv1NyOqwyp9RtyKzPEdoLjRgCMpLPGD9DtBrx7ctRHba6O18R6Ra+JNNgkwDIgDJnuCKfolmNIsorYR4Mkowi/wDH/6zU6uEAQAALwKlTm5hlyRszkDuCMV1ppy5nuc8qCi+Y1CBTx0qPduFI74XFdCVyLXKGt2EOq2XlMB5i52k989RXBWPgiMXXEe1t33sFcD37f/AKq72WTBqETHNY1YqT1KeF5tQ1a0jPhifT4h8i27IPc7ev51y2m3C3ENldL0kCN/30hrrnl320gPdTXB+G8/8I7bFv8AlnII/wDvlyv8s1jinzK5tShyOxNrEXlTO3aNmb8Arf4CpNGKplGP3YY8/wDfJz/OpteKPFP03OFUH/eyf5VlLdiOeZQcM7En2XO0fyzXDa6OhG7qUmLzzD08pm/Dk/1rC0xylvcXPQJGefz/AK1e1WYm0lkA58tV/BlH+H61j310tpp9vZqcNM67/YZpwQntY0rG6MMEU+D8rbG+lXdSlCxSTjBR2VyB78H+h/Gsq1GUu7Zv4WDLUmmXC6lp13YSHE9u/lle+CDgj+f4VSiJs55JGt76a3z88L+ap/4F1/ka9GLxTeFRcnAltrhdrdxlxx/48a85ubSV9XnmcELHbBnPsWEZ/Vq6q0LzeGtXLt8ttKhVR3ckDJ+nb6110Vuu6ZlUe3qdhp1pDqGk289tIYLmMFfMUdGB5BH+etQaVeXA17UXvocMipD5sILR8evcUy0uxo2mw3bjMc8JG31lUkoPqw4/AVo+GoHj09ppTmSZyzH19T+ea9Sk78iW9tfuOKfVm2rK6hlIIPINFOAA7UV3GQUUUUAZ+pKUtZWjJWSTEYx3LHaP51jeKLISaWAijfbxM8ZXg4Xbx+XatrUyFgikPCpPGzH0G4c06/EX2fzJiBGgPmE9lIIP+fauepBSTRcZWaZ59d/Je6ZOJAwv7VgOAMOBgA/yzWfeyC48PBM4Jd1yexABB/lVzw5o6a1PqMN3O6S2aCO0U8GJSSwfH1/Q/SsnUfMj0O9icgTxTPkDs2f8BXi4im04z7nfTl9nsdZoWqR6zpkV2mBIPkmT+5IPvD+o9iK2kHArxOx1e98PakdRsTvhn4ngb7r4/kfQ16h4e8XaX4ghBtZgtwPv28hw6n6d6pLqipSujqYZAcLkbsZx3x60Sn0qmIYJp4pXQGWIko/Qrnrz6HuOlXtgNbQba0Od6MoyLnNQFDmtCSMAcGs6/v7HTITNf3cFsg7yyBc/TPWhq7N41EEr+VAxNcVoR2aBOh6C/lUH28xz/StBvFlrq8rxaSrTpH1mYEJ+HrVPw/bPNoloh5MxknPvuZjn/wAernxOkbDUk3dEetXJWW3gyN0hj/AKoH82rnpblRc33zdCUFaV/eRX3im6gjHyWsUaE+jZDn+YrjZbgw6heuxLDG5B2bnk5rGENzS+x6Je3KxqJJADF5aZH94gdPyrjNUvmbWjG7Z8tQM+pxnNXp717sWTlsIqI7egUYz/ACI/GuXupWlv1ckl97MT6oQxH5E4/GlRhe4mehWc6tqsYJ/4+LNG/HPNYk97cWl5PqNoMyxyAzxnpIqrtwfqT+Y9qmsmkGs6Zn7os+T77m/+tUSxvND4gURsxl2hCOiqrrkn82/OtacU5akt6G681vrGi3E9khk+0xKOuGjIdWOR36f1p2nTM+nXdvF8zXmoqAPVY8k/rtqrojHT9F0eK2VTO32m8nY8bYwcBT9dp/HFdH4d0uD+2YrmBkFiqtcJk4C5OSPxOPoFrWEJKaj32+e5lJqzfY17nTLx/wCz0vJI1gimjjihj5PcFifXGeecc9K62NFjjVEUKqjAA7CsuBm1LUEnAItbbPlsRjzHIwWH+yBkA9yT6VsCvZpU4xu0cUpN7hRRRWxAVHKrMhCttbscZwakooAy7ma9MTQtpnnhgVbbMoUj8ef0rPTTNRdkOoEXNvGcpbRv9303k48zHvj8a6TFFZund3bHzW2OH8QaXqFvexa/oULtdwpsntXUjz4/7vuR2/D0FcbNeR6uNWmtkdRK0Nx5bjDKdqq6/XKn869prh/Fmjy29x/a9jbeYoyLuONfnZD/ABAD7xB5x1wT7Vx4yg3G8TejUSlZnDa7obaWbS/hUNpt8iktj5YpsYKn0DEZH4isS60qJyLyFDHOhw+OCD+Hf39a9AstWtktZIn8q7025GJLeQ5GfVWHH1Bx0B4Oag/4R9rBoXPzWl4jCJJeZIiPmCsf4hgcHqK4JJNc8Pmux0J20kcpZeL/ABBo10bWSeO8RVDx/aM5ZD0IYc/XritxviLrZhOLLT4GHXc8kmO3TiqOo6TZB7e3nDRyIf8AR5xzt/2WHdTkj1H5iqUUCXMRRh86gK4z6r/UfyqHVaV0PlvuR3/iPxNrqNEniOSyJyNtrbrGv0LZ3frXM6R4dnvtTc38rzTo5V3lcuc59T+ddMNKtrS/s5ra4kJkBFzBKuDEQOCD0ZT6+1T6Mh/t1hjHmKsn1HI/kK6KdWd3FkNKx072UWkeFrhbZAkkieSmOpdztH86txNHpFjLMwJgtIREAP4to+6PqSB+FV5Zm1DV7e1hUNHZHzWJ+6ZiMLn2UEsffFXY7T+0riO2XJtLY5yf+Wj+p/U+5PtXLWfPNJGsVZanmPhuS5t/FGpRal/x83MhnJ9d3zDH5EfgKzdcjksL6VRyJiqhSMg/OR0r0Dxj4d8rVLa9tSsd0sL+UWO0SFPn2E+pAbHuBWfBBZ+JL7TJVYIWkWGVduGG4jkH0xmt3pNPuPmVinbWrPo6KVXfgBwOwDbsfzzVK40YRnTJiWMl1NKh4+6nlgY/Evn8K7G20oaXdT6bJ91ZXjQkdRncv6E1SktLnUbuxjtoi5t0c8dFY4BJPQdAea54XjUcfkO6auVLNRLrEyA8R7QmPRSoP55/StGxaWGLVIo4IJVeArIHfayjrkevJ6VY03w3daUkuo3Mis1yRFGqcqoB3ZB75wee56VffRl1K0tLqxiaS+ViroV/dkqx+8fy/Ct4U5KdrakOcWjnND06+vJRYw7VS9PlFz95YlbcQB2GevriuzsYItI8TNpqAPbDyyoYA/eHPH15/GtTSvD93Zm4vZJ4W1O5X53CfJGewUenY1Lpnh2SDUH1DULoXF2xzlVwo/z/AIV1xw8rLTW/3I5pVU2zolGBS0DiivTOYKKKKACiiigAooooAKRhkUtFAGW+g6VJe/bG0+3NxnJkCAEn3x1/GszxJa313eWKW1s0kKFndgQOTgAe3GfzrpqCM1jUoxnFx2uXGbTTOeOiN/ZDwNHBJdTZDPIuVjz6euB09TWJr3hjRNG0qS+iTyHQKGdnOHx65/E8V2d/c/ZLKWYLvZR8iZ+83YfnXkN/p82oeILx7p5J5Nyh5GYlT8o+VF6KOo4rKWHhy8iQ1VafM2J4j8UW2o+HbWHTYJDDEip9qePa0pxgKinkgnucflzVHwppepXJnu76RxK6CKI5GUUDAAwB0rTstMGq689qP+Pew+R8dDKRz/3yMD6k13dlpcdsqqi/KOgrnxHLF8sTSi21zMx9N0CSKAW6gRxn/WSAks/4np/nmultbOO2jEcagAfrVtYwigBST7UzEoOdhx9a5IwW5o6l9DnvF2hf29pItUl8mZXEkUuM7HHIPuOx9jVI6Ymv+HooE0+Cy1mwCg26napAPRW6lGxkHsevOa61gzdVI/Cs2eISSpLaMEljJxOOi+uP7w9ulddFcz5bXTMqk1FXbsZupaKbyyS8sLWWGZQBLbSZ3HHcEnlh9eR6VhWt7NZ6oqLB5j5+e2MLFmY9TjHU/lXWS6/NpxL3kkEsHdlHlsPpkkH/ADzW7Y39tqNotzaTLLE3RlPf0Poa2qYFOSlezJp4nSy1K0tk2r6O0d2rQSSgMAp+aJhyp+oPNZOj2WuabdvbyQ2xtncPJOrdeMZC9icDPaurxRW7oxclLqiVNpNdBetFFFbEBRRRQAUUUUAFFFFABRRRQAUUUUAFFFV725WztJZ2GQi5x6nsKHoBz3iPUSLlbeLkx9B6yEcfkOfxrn7l00mwmugvmSxrlQf45DwB+J/QVYjZp5nuZTlsnB9WPU1n6wTPd2VkOhJnf8OF/qamOicmYTfNLlQeAYXtNIWO7Ob1nZ7gnqzsxJP6131uquMjFYFrZpNGiksjKPkkU/Mv+I9jWpCl3b43p5i9pIh/Mdv1rzpUW5cy1O3nVrGsAAKRyqqWYgADJJPSuW1nXZ7eWOOCTy9o3OSv6HNRzeI/tEcayowAA3KnQt7n09quNBytc3+p1nBTir3NW4uWum2rkQenQv8AX29u/f0rF8Q62mkWQIBkmkby4Yh1d+wFaCXKywLInRumfWuW0RI/EPiWbWZjutbfMNkD0xn5n+rH9AK9CThh6funkqE6lRqfQu6T4ZN0o1DXj9run5WJv9XEPQL0/E810GnWkOkNJJYQrHFIwM0CDAOB95R2OPzxV9VDYA6VJ5e0Z6GvIlWnzc1z0Ywio2NFHWRFdSCrDII7in1l6ZPGJJ7EuvmQtuVM87G5Bx6ZyPwrUr1IS5opmDVnYKKKKsQUUUUAFFFFABRRRQAUUUUAFFFFABXL+KLt/MgsIyQX+Zj/AC/kTRRUy6Ez0TsZagBQqDCqMAVk/wCt8RXTnpHtjH4D/EmiiifwmFL4jqLM4C1t28ny9aKKx5UtjoZyXiTSTqmqMY7iVAihZFUgZPscelc99mubO6Fs6mVm+4xYcj3ooroUFyo6cNja0W4p6WNHWpHtNEFpGx8yf9zvBxy2SxHp8qtj6inaHYzW1nEkUnlqigKGAYAdhxg0UVnijjpSbcpPc6q3ju9uCiE+qv1/MVI0d8erqifXcf6UUVxciOlSZQWG3t9T/tFYwbtVEckp+80YJ+X0xyT9a6odM0UV10fhIkLRRRWxIUUUUAFFFFAH/9k="

/***/ }),

/***/ "../../../../../src/images/videohold.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "videohold.21d39c4664999465caa4.jpg";

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map