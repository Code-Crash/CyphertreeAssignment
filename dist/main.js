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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n\n.container .header {\n  min-height: 45px;\n  color: #fff;\n  background-color: #ff6358;\n  text-align: center;\n  line-height: 2;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciAuaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header\">{{ title }}</div>\n  <app-movie></app-movie>\n</div>\n\n<router-outlet></router-outlet>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CyphertreeAssignment';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm5/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_scrollview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-scrollview */ "./node_modules/@progress/kendo-angular-scrollview/dist/fesm5/index.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_7__["MovieComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__["InputsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogsModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_9__["ButtonsModule"],
                _progress_kendo_angular_scrollview__WEBPACK_IMPORTED_MODULE_10__["ScrollViewModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/movies.ts":
/*!********************************!*\
  !*** ./src/app/data/movies.ts ***!
  \********************************/
/*! exports provided: Movies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movies", function() { return Movies; });
var Movies = [
    {
        "ID": 1,
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "890,617",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ]
    },
    {
        "ID": 2,
        "Title": "I Am Legend",
        "Year": "2007",
        "Rated": "PG-13",
        "Released": "14 Dec 2007",
        "Runtime": "101 min",
        "Genre": "Drama, Horror, Sci-Fi",
        "Director": "Francis Lawrence",
        "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
        "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
        "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
        "Language": "English",
        "Country": "USA",
        "Awards": "9 wins & 21 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
        "Metascore": "65",
        "imdbRating": "7.2",
        "imdbVotes": "533,874",
        "imdbID": "tt0480249",
        "Type": "movie",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
        ]
    },
    {
        "ID": 3,
        "Title": "300",
        "Year": "2006",
        "Rated": "R",
        "Released": "09 Mar 2007",
        "Runtime": "117 min",
        "Genre": "Action, Drama, Fantasy",
        "Director": "Zack Snyder",
        "Writer": "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
        "Actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
        "Plot": "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
        "Language": "English",
        "Country": "USA",
        "Awards": "16 wins & 42 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
        "Metascore": "52",
        "imdbRating": "7.7",
        "imdbVotes": "611,046",
        "imdbID": "tt0416449",
        "Type": "movie",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
        ]
    },
    {
        "ID": 4,
        "Title": "The Avengers",
        "Year": "2012",
        "Rated": "PG-13",
        "Released": "04 May 2012",
        "Runtime": "143 min",
        "Genre": "Action, Sci-Fi, Thriller",
        "Director": "Joss Whedon",
        "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
        "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
        "Language": "English, Russian",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
        "Metascore": "69",
        "imdbRating": "8.1",
        "imdbVotes": "1,003,301",
        "imdbID": "tt0848228",
        "Type": "movie",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
        ]
    },
    {
        "ID": 5,
        "Title": "The Wolf of Wall Street",
        "Year": "2013",
        "Rated": "R",
        "Released": "25 Dec 2013",
        "Runtime": "180 min",
        "Genre": "Biography, Comedy, Crime",
        "Director": "Martin Scorsese",
        "Writer": "Terence Winter (screenplay), Jordan Belfort (book)",
        "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
        "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        "Language": "English, French",
        "Country": "USA",
        "Awards": "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
        "Metascore": "75",
        "imdbRating": "8.2",
        "imdbVotes": "786,985",
        "imdbID": "tt0993846",
        "Type": "movie",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
        ]
    },
    {
        "ID": 6,
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "937,412",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ]
    },
    {
        "ID": 7,
        "Title": "Game of Thrones",
        "Year": "2011–",
        "Rated": "TV-MA",
        "Released": "17 Apr 2011",
        "Runtime": "56 min",
        "Genre": "Adventure, Drama, Fantasy",
        "Director": "N/A",
        "Writer": "David Benioff, D.B. Weiss",
        "Actors": "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
        "Plot": "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "9.5",
        "imdbVotes": "1,046,830",
        "imdbID": "tt0944947",
        "Type": "series",
        "totalSeasons": "7",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmMmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
        ]
    },
    {
        "ID": 8,
        "Title": "Vikings",
        "Year": "2013–",
        "Rated": "TV-14",
        "Released": "03 Mar 2013",
        "Runtime": "44 min",
        "Genre": "Action, Drama, History",
        "Director": "N/A",
        "Writer": "Michael Hirst",
        "Actors": "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
        "Plot": "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
        "Language": "English, Old English, Norse, Old, Latin",
        "Country": "Ireland, Canada",
        "Awards": "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "8.6",
        "imdbVotes": "198,041",
        "imdbID": "tt2306299",
        "Type": "series",
        "totalSeasons": "5",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg"
        ]
    },
    {
        "ID": 9,
        "Title": "Gotham",
        "Year": "2014–",
        "Rated": "TV-14",
        "Released": "01 Aug 2014",
        "Runtime": "42 min",
        "Genre": "Action, Crime, Drama",
        "Director": "N/A",
        "Writer": "Bruno Heller",
        "Actors": "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
        "Plot": "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "8.0",
        "imdbVotes": "133,375",
        "imdbID": "tt3749900",
        "Type": "series",
        "totalSeasons": "3",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg"
        ]
    },
    {
        "ID": 10,
        "Title": "Power",
        "Year": "2014–",
        "Rated": "TV-MA",
        "Released": "N/A",
        "Runtime": "50 min",
        "Genre": "Crime, Drama",
        "Director": "N/A",
        "Writer": "Courtney Kemp Agboh",
        "Actors": "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
        "Plot": "James \"Ghost\" St. Patrick, a wealthy New York night club owner who has it all, catering for the city's elite and dreaming big, lives a double life as a drug kingpin.",
        "Language": "English",
        "Country": "USA",
        "Awards": "1 win & 6 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "8.0",
        "imdbVotes": "14,770",
        "imdbID": "tt3281796",
        "Type": "series",
        "totalSeasons": "3",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg"
        ]
    },
    {
        "ID": 11,
        "Title": "Narcos",
        "Year": "2015–",
        "Rated": "TV-MA",
        "Released": "28 Aug 2015",
        "Runtime": "49 min",
        "Genre": "Biography, Crime, Drama",
        "Director": "N/A",
        "Writer": "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
        "Actors": "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
        "Plot": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
        "Language": "English, Spanish",
        "Country": "USA",
        "Awards": "Nominated for 2 Golden Globes. Another 4 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "8.9",
        "imdbVotes": "118,680",
        "imdbID": "tt2707408",
        "Type": "series",
        "totalSeasons": "2",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ]
    },
    {
        "ID": 12,
        "Title": "Breaking Bad",
        "Year": "2008–2013",
        "Rated": "TV-14",
        "Released": "20 Jan 2008",
        "Runtime": "49 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "N/A",
        "Writer": "Vince Gilligan",
        "Actors": "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
        "Plot": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
        "Language": "English, Spanish",
        "Country": "USA",
        "Awards": "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "9.5",
        "imdbVotes": "889,883",
        "imdbID": "tt0903747",
        "Type": "series",
        "totalSeasons": "5",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZTgwNDM0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDcyNDMzMF5BMl5BanBnXkFtZTgwOTI0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMTczMjM3NjFeQTJeQWpwZ15BbWU4MDc1MTI1MzAx._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ]
    },
    {
        "ID": 13,
        "ComingSoon": true,
        "Title": "Doctor Strange",
        "Year": "2016",
        "Rated": "N/A",
        "Released": "04 Nov 2016",
        "Runtime": "N/A",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "Scott Derrickson",
        "Writer": "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
        "Actors": "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
        "Plot": "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
        "Language": "English",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "N/A",
        "imdbVotes": "N/A",
        "imdbID": "tt1211837",
        "Type": "movie",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg"
        ]
    },
    {
        "ID": 14,
        "ComingSoon": true,
        "Title": "Rogue One: A Star Wars Story",
        "Year": "2016",
        "Rated": "N/A",
        "Released": "16 Dec 2016",
        "Runtime": "N/A",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Gareth Edwards",
        "Writer": "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
        "Actors": "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
        "Plot": "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
        "Language": "English",
        "Country": "USA",
        "Awards": "1 nomination.",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        "Metascore": "N/A",
        "imdbRating": "N/A",
        "imdbVotes": "N/A",
        "imdbID": "tt3748528",
        "Type": "movie",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg"
        ]
    },
    {
        "ID": 15,
        "ComingSoon": true,
        "Title": "Assassin's Creed",
        "Year": "2016",
        "Rated": "N/A",
        "Released": "21 Dec 2016",
        "Runtime": "N/A",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "Justin Kurzel",
        "Writer": "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
        "Actors": "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
        "Plot": "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
        "Language": "English",
        "Country": "UK, France, USA, Hong Kong",
        "Awards": "N/A",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "N/A",
        "imdbVotes": "N/A",
        "imdbID": "tt2094766",
        "Type": "movie",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg"
        ]
    },
    {
        "ID": 16,
        "ComingSoon": true,
        "Title": "Luke Cage",
        "Year": "2016–",
        "Rated": "TV-MA",
        "Released": "30 Sep 2016",
        "Runtime": "55 min",
        "Genre": "Action, Crime, Drama",
        "Director": "N/A",
        "Writer": "Cheo Hodari Coker",
        "Actors": "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
        "Plot": "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
        "Language": "English",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "N/A",
        "imdbVotes": "N/A",
        "imdbID": "tt3322314",
        "Type": "series",
        "totalSeasons": "1",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg"
        ]
    }
];


/***/ }),

/***/ "./src/app/movie/movie.component.css":
/*!*******************************************!*\
  !*** ./src/app/movie/movie.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"gridView\" [pageSize]=\"pageSize\" [skip]=\"skip\" [pageable]=\"true\" (pageChange)=\"pageChange($event)\"\n  [sortable]=\"{ allowUnsort: allowUnsort, mode: 'single'}\" (dataStateChange)=\"dataStateChange($event)\" [sort]=\"sort\"\n  [filterable]=\"true\" [filter]=\"state.filter\" (sortChange)=\"sortChange($event)\" (cellClick)=\"cellClick($event)\">\n  <kendo-grid-column field=\"ID\" title=\"ID\"></kendo-grid-column>\n  <kendo-grid-column field=\"Images\" title=\"Thumbnail\" [filterable]=\"false\">\n    <ng-template kendoGridCellTemplate let-dataItem>\n      <img src=\"{{ dataItem.Images[0] }}\" height=\"50\" width=\"50\" />\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-column field=\"Title\" title=\"Name\"></kendo-grid-column>\n  <kendo-grid-column field=\"Genre\" title=\"Genre\"></kendo-grid-column>\n  <kendo-grid-column field=\"imdbRating\" title=\"Rating\"></kendo-grid-column>\n  <div *kendoGridDetailTemplate=\"let dataItem\">\n    <app-movie [movie]=\"dataItem\"></app-movie>\n  </div>\n</kendo-grid>\n\n\n<kendo-dialog title=\"{{selected.Title}}\" *ngIf=\"opened\" (close)=\"close('cancel')\" [minWidth]=\"250\" [width]=\"450\">\n  <div *ngFor=\"let k of serializedObject(selected)\">\n    <div>\n      <label>{{ k.key }}: </label><span>{{ k.value }}</span>\n    </div>\n  </div>\n  <kendo-dialog-actions>\n    <button kendoButton (click)=\"close('ok')\" primary=\"true\">Ok</button>\n  </kendo-dialog-actions>\n</kendo-dialog>\n"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/movies */ "./src/app/data/movies.ts");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es/main.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieComponent = /** @class */ (function () {
    function MovieComponent() {
        this.opened = false;
        this.pageSize = 5;
        this.skip = 0;
        this.movies = _data_movies__WEBPACK_IMPORTED_MODULE_1__["Movies"];
        this.allowUnsort = true;
        this.selected = null;
        this.sort = [
            { field: 'ID', dir: 'asc' },
        ];
        this.state = {
            skip: 0,
            take: 5,
            // Initial filter descriptor
            filter: {
                logic: 'and',
                filters: [{ field: 'Title', operator: 'contains', value: 'Ava' }]
            }
        };
    }
    /**
     * @description - On Init Life Cycle, we will check if we are getting the movie from
     *                parent component as a input, if movie is there, it means we need to show the child grid.
     */
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.movie) {
            var genres_1 = (this.movie['Genre'] || '').split(',').map(function (item) { return (item && item.trim()); });
            this.movies = this.movies.filter(function (movie) {
                if (genres_1 && genres_1.length && _this.movie['ID'] != movie.ID) {
                    var mGenres_1 = (movie['Genre'] || '').split(',').map(function (item) { return (item && item.trim()); });
                    if (genres_1.filter(function (value) { return -1 !== mGenres_1.indexOf(value); }).length) {
                        return movie;
                    }
                }
            });
            this.loadMovies(); // Load only genres matching data for a child grid
        }
        else {
            this.loadMovies(); // Load Parent Grid first time.
        }
    };
    /**
     * @description - This function will provide the data after click on a row in any grid
     * @param event
     */
    MovieComponent.prototype.cellClick = function (event) {
        var _this = this;
        this.selected = Object.assign({}, event.dataItem || {}); // create a copy of data to avoid reference issues
        if (this.selected['Images'] && this.selected['Images'].length) {
            this.selected['Images'] = this.selected.Images.map(function (item) { return { title: _this.selected.Title, url: item }; });
            console.log(this.selected);
        }
        this.open();
    };
    /**
     * @description - This function will load the movies data from stored constants
     */
    MovieComponent.prototype.loadMovies = function () {
        this.gridView = {
            data: Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["orderBy"])(this.movies.slice(this.skip, this.skip + this.pageSize), this.sort),
            total: this.movies.length
        };
    };
    MovieComponent.prototype.dataStateChange = function (state) {
        this.state = state;
        this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["process"])(this.movies, this.state);
        console.log(this.gridView);
    };
    /**
     * @description This function will help you to sort the columns based on event
     * @param sort
     */
    MovieComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.loadMovies();
    };
    /**
     * @description This function will handle the page change event.
     * @param event
     */
    MovieComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.loadMovies();
    };
    /**
     * @description This function will close the modal/dialog box
     * @param {string} status - Status for your personal usage
     */
    MovieComponent.prototype.close = function (status) {
        console.log("Dialog result: " + status);
        this.opened = false;
    };
    /**
     * @description - This function will open a modal/dialog box to show the movie details
     */
    MovieComponent.prototype.open = function () {
        this.opened = true;
    };
    /**
     * @description - This function will return the keys from the object
     * @param obj
     */
    MovieComponent.prototype.serializedObject = function (obj) {
        var serialized = [];
        if (obj) {
            serialized.push({ key: 'ID', value: (obj.ID || '') });
            serialized.push({ key: 'Title', value: (obj.Title || '') });
            serialized.push({ key: 'Year', value: (obj.Year || '') });
            serialized.push({ key: 'Rated', value: (obj.Rated || '') });
            serialized.push({ key: 'Released', value: (obj.Released || '') });
            serialized.push({ key: 'Runtime', value: (obj.Runtime || '') });
            serialized.push({ key: 'Genre', value: (obj.Genre || '') });
            serialized.push({ key: 'Director', value: (obj.Director || '') });
            serialized.push({ key: 'Writer', value: (obj.Writer || '') });
            serialized.push({ key: 'Language', value: (obj.Language || '') });
            serialized.push({ key: 'Rating', value: (obj.imdbRating || '') });
            serialized.push({ key: 'Votes', value: (obj.imdbVotes || '') });
        }
        return serialized;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MovieComponent.prototype, "movie", void 0);
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieComponent);
    return MovieComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/codecrash/Developments/assignments/CyphertreeAssignment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map