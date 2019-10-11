(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n  <div class=\"top-border wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\"></div>\n  <div class=\"right-border wow fadeInRight animated\" style=\"visibility: visible; animation-name: fadeInRight;\"></div>\n  <div class=\"bottom-border wow fadeInUp animated\" style=\"visibility: visible; animation-name: fadeInUp;\"></div>\n  <div class=\"left-border wow fadeInLeft animated\" style=\"visibility: visible; animation-name: fadeInLeft;\"></div>\n</div>\n\n<div id=\"wrapper\">\n\n  \n\n  <!--Main Content Area-->\n  <main id=\"content\">\n    \n    <app-navigation></app-navigation>\n     <router-outlet></router-outlet>\n     <app-footer></app-footer>\n  </main>\n  <!--End Main Content Area-->\n\n\n  \n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/article/article.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/article/article.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--blog Tables-->\n <section id=\"blog\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\" *ngIf=\"post\">\n\n       \n        <div class=\"post-block col-1 wow fadeInUp\" data-wow-delay=\"0.4s\">\n             <app-post [post]='post'></app-post>\n        </div>\n    </div>\n    <a (click)=\"getBack()\" class=\"button\">Back</a>\n</section>\n<!--End of blog Tables-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog/blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--blog Tables-->\n <section id=\"blog\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n        <div class=\"section-heading\">\n            <h3>{{blog.tagline}}</h3>\n            <h2 class=\"section-title\">{{blog.title | uppercase}}</h2>\n        </div>\n        <div *ngFor=\"let post of pages\"class=\"post-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n             <app-post [post]='post'></app-post>\n        </div>\n    </div>\n    <div class=\"row clearfix\">\n       <app-pagination [pager]=\"pager\" (setPage)=\"setPage($event)\"></app-pagination>\n    </div>\n</section>\n<!--End of blog Tables-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/clients.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/clients.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Clients-->\n<section id=\"clients\" class=\"scrollto clearfix\">\n    <div class=\"row clearfix\">\n\n        <div class=\"col-3\">\n\n            <div class=\"section-heading\">\n                <h3>{{clients.tagline}}</h3>\n                <h2 class=\"section-title\">{{clients.title}}</h2>\n                <p class=\"section-subtitle\">{{clients.description}}</p>\n            </div>\n\n        </div>\n\n        <div class=\"col-2-3\" >\n\n            <a href=\"{{company.weblink}}\" class=\"col-3\" *ngFor=\"let company of clients.companies\">\n                <img src=\"../assets/images/company-images/{{company.logo}}\" alt=\"{{company.name}}\"/>\n                <div class=\"client-overlay\"><span>{{company.name}}</span></div>\n            </a>\n\n        </div>\n\n    </div>\n</section>\n<!--End of Clients-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contactus/contactus.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n        <div class=\"row clearfix\">\n    \n            <div class=\"container\">\n    \n                <div class=\"center-form panel\">\n                    <div class=\"panel-body\">\n                        <h4 class=\"text-center\"><i class=\"ion-person-add\"></i>Sing up</h4>\n    \n                        <form [formGroup]=\"contactusForm\" (ngSubmit)=\"sendMessage(contactusForm.value)\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"fristname\" name=\"fristname\" placeholder=\"Frist Name\">\n                                <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"lastname\" name=\"lastname\" placeholder=\"Last Name\">\n                                <span class=\"ion-person form-control-icon\"></span>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control input-lg\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\n                                <span class=\"ion-at form-control-icon\"></span>\n                            </div>\n                            <div class=\"form-group\">\n                                <textarea rows=\"10\" cols=\"20\" class=\"form-control input-lg\" name=\"Message\" formControlName=\"password\" placeholder=\"Message\"></textarea>\n                                <span class=\"ion-edit form-control-icon\"></span>\n                            </div>\n    \n                            <button type=\"submit\" class=\"btn btn-block btn-success\">Sing up</button>\n    \n                            <p class=\"text-center\">\n                                <small>Continue here!<a routerLink=\"/Home\"> Home</a></small>\n                            </p>\n    \n                        </form>\n                    </div>\n    \n                </div>\n    \n            </div>\n    \n        </div>\n    </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/content/content.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content/content.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Content Section-->\n<div id=\"services\" class=\"scrollto clearfix\">\n\n    <div class=\"row no-padding-bottom clearfix\">\n\n\n        <!--Content Left Side-->\n        <div class=\"col-3\">\n            <!--User Testimonial-->\n            <blockquote class=\"testimonial text-right bigtest\">\n                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et dolore magna aliqua</q>\n                <footer>— John Doe, Happy Customer</footer>\n            </blockquote>\n            <!-- End of Testimonial-->\n\n        </div>\n        <!--End Content Left Side-->\n\n        <!--Content of the Right Side-->\n        <div class=\"col-3\">\n            <div class=\"section-heading\">\n                <h3>{{services.tagline}}</h3>\n                <h2 class=\"section-title\">{{services.title}}</h2>\n                <p class=\"section-subtitle\">{{services.description}}</p>\n            </div>\n            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n                dicta sunt explicabo.\n            </p>\n            <p>\n                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!\n            </p>\n            <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n            <a href=\"#\" data-videoid=\"UYJ5IjBRlW8\" data-videosite=\"youtube\" class=\"button video link-lightbox\">\n                WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n        <!--End Content Right Side-->\n\n        <div class=\"col-3\">\n            <img src=\"../assets/images/dancer.jpg\" alt=\"Dancer\"/>\n        </div>\n\n    </div>\n\n\n</div>\n<!--End of Content Section-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer id=\"landing-footer\" class=\"clearfix\">\n    <div class=\"row clearfix\">\n\n        <p id=\"copyright\" class=\"col-2\">{{footer.copyrighttext}}<a href=\"{{footer.developerlink}}\">{{footer.developer}}</a></p>\n\n        <!--Social Icons in Footer-->\n        <div class=\"col-2 social-icons\">\n                <app-social></app-social>\n            \n        </div>\n        <!--End of Social Icons in Footer-->\n    </div>\n</footer>\n<!--End of Footer-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Gallery-->\n<aside id=\"gallery\" class=\"row text-center scrollto clearfix\" data-featherlight-gallery\ndata-featherlight-filter=\"a\">\n<div *ngFor=\"let image of gallery.images\">\n<a href=\"../assets/images/gallery-images/{{image}}\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.1s\">\n  <img src=\"../assets/images/gallery-images/{{image}}\" alt=\"Landing Page\"/></a>\n</div>\n  \n\n</aside>\n<!--End of Gallery-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n<header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\n    <!--Banner Content-->\n    <div id=\"banner-content\" class=\"row clearfix\">\n\n        <div class=\"col-38\">\n\n            <div class=\"section-heading\">\n                <h1>{{ header.heading}}</h1>\n                <h2>{{header.headingtext}}</h2>\n            </div>\n\n            <!--Call to Action-->\n            <a href=\"{{header.buttonlink}}\" class=\"button\">{{header.buttontext}}</a>\n            <!--End Call to Action-->\n\n        </div>\n\n    </div><!--End of Row-->\n</header> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/intro/intro.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Introduction-->\n<section id=\"about\" class=\"introduction scrollto\">\n\n    <div class=\"row clearfix\">\n\n        <div class=\"col-3\">\n            <div class=\"section-heading\">\n                <h3>{{intro.tagline}}</h3>\n                <h2 class=\"section-title\">{{intro.title}}</h2>\n                <p class=\"section-subtitle\">{{intro.description}}</p>\n            </div>\n\n        </div>\n\n        <div class=\"col-2-3\">\n\n            <!--Icon Block-->\n            <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\" *ngFor=\"let feature of intro.features\">\n                <!--Icon-->\n                <div class=\"icon\">\n                    <i class=\"fa fa-{{feature.icon}} fa-2x\"></i>\n                </div>\n                <!--Icon Block Description-->\n                <div class=\"icon-block-description\">\n                    <h4>{{feature.title}}</h4>\n                    <p>{{feature.description}}</p>\n                </div>\n            </div>\n            <!--End of Icon Block-->\n\n        </div>\n\n    </div>\n\n\n</section>\n<!--End of Introduction-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n        <div class=\"container\">\n\n            <div class=\"center-form panel\">\n                <div class=\"panel-body\">\n                    <h4 class=\"text-center\"><i class=\"ion-log-in\"></i>Login</h4>\n\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\n                        <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-lg\" name=\"email\" placeholder=\"Email\" formControlName=\"email\">\n                        <span class=\"ion-at form-control-icon\"></span>\n                        </div>\n                        <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control input-lg\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                        <span class=\"ion-key form-control-icon\"></span>\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-block btn-success\">Login</button>\n\n                        <p class=\"text-center\">\n                            <small>Don't have an account yet?  <a routerLink=\"/Signup\"> Sing up</a></small>\n                        </p>\n\n                    </form>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"nav-collapse nav-solid\">\n    <div class=\"row clearfix\">\n        <div class=\"col-1\">\n\n            <!--Logo-->\n            <div id=\"logo\">\n\n                <!--Logo that is shown on the banner-->\n                <img src=\"../assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\"/>\n                <!--End of Banner Logo-->\n\n                <!--The Logo that is shown on the sticky Navigation Bar-->\n                <img src=\"../assets/images/logo-2.png\" id=\"navigation-logo\" alt=\"Landing Page\"/>\n                <!--End of Navigation Logo-->\n\n            </div>\n            <!--End of Logo-->\n\n            <aside>\n            <app-social></app-social>\n            \n\n            </aside>\n\n            <!--Main Navigation-->\n<nav id=\"nav-main\">\n<ul>\n    <li>\n        <a  routerLink=\"/Home\" (click)=\"getActiveTab('home')\" [class.active]=\"activetab == 'home'\">Home</a>\n    </li>\n    <li>\n        <a  routerLink=\"/About\" (click)=\"getActiveTab('about')\" [class.active]=\"activetab == 'about'\">About</a>\n    </li>\n    <li>\n        <a  routerLink=\"/Gallery\" (click)=\"getActiveTab('gallery')\" [class.active]=\"activetab == 'gallery'\">Gallery</a>\n    </li>\n    <li>\n        <a  routerLink=\"/Services\" (click)=\"getActiveTab('services')\" [class.active]=\"activetab == 'services'\">Services</a>\n    </li>\n    <li>\n        <a  routerLink=\"/Testimonials\" (click)=\"getActiveTab('testimonials')\" [class.active]=\"activetab == 'testimonials'\">Testimonials</a>\n    </li>\n    <li>\n        <a  routerLink=\"/Clients\" (click)=\"getActiveTab('clients')\" [class.active]=\"activetab == 'clients'\">Clients</a>\n    </li>\n    <li>\n        <a  routerLink=\"/Pricing\" (click)=\"getActiveTab('pricing')\" [class.active]=\"activetab == 'pricing'\">Pricing</a>\n    </li>\n    <li>\n        <a  routerLink=\"/Blog\" (click)=\"getActiveTab('blog')\" [class.active]=\"activetab == 'blog'\">Blog</a>\n    </li>\n</ul>\n</nav>\n<!--End of Main Navigation-->\n            \n\n            <div id=\"nav-trigger\"><span></span></div>\n            <nav id=\"nav-mobile\"></nav>\n\n        </div>\n    </div>\n</div><!--End of Header-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/notfound/notfound.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notfound/notfound.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--404-->\n<section id=\"blog\" class=\"secondary-color text-center scrollto clearfix\">\n    <div class=\"row clearfix\">\n      <h1 class=\"big-text\"> \n          404\n      </h1>\n      <h2>Nothing Found Here!! try our<a routerLink=\"/Home\"> Home Page</a></h2>\n    </div>\n</section>\n<!--End 404-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pagination/pagination.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pagination/pagination.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"pager\" class=\"pagination\">\n        <li [class.disabled]=\"pager.currentPage == 1\">\n            <a (click)=\"setCurrentPage(1)\">Frist</a>\n        </li>\n        <li [class.disabled]=\"pager.currentPage == 1\">\n            <a (click)=\"setCurrentPage(pager.currentPage - 1)\">Previous</a>\n        </li>\n        <li *ngFor=\"let page of pager.pages\" [class.active]=\"pager.currentPage == page\">\n            <a (click)=\"setCurrentPage(page)\">{{page}}</a>\n        </li>\n        <li [class.disabled]=\"pager.currentPage == pager.totalPages\">\n            <a (click)=\"setCurrentPage(pager.currentPage + 1)\">Next</a>\n        </li>\n        <li [class.disabled]=\"pager.currentPage == pager.totalPages\">\n            <a (click)=\"setCurrentPage(pager.totalPages)\">Last</a>\n        </li>\n    </ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post/post.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post/post.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Post Block-->\n\n    <div class=\"post-block-content\">\n        <h3>{{post.title}}</h3>\n        <p class=\"post-sub\">By {{post.author}} | {{ post.publisdate | date:'dd-MMM-yyyy'}}</p>\n        <div class=\"post-featured-image\">\n            <img src=\"../../assets/images/gallery-images/{{post.image}}\">\n        </div>\n        <ul>\n            {{post.excert}}\n        </ul>\n        <a routerLink=\"/Article/{{post.id}}\" class=\"\">Read More..</a>\n    </div>\n\n<!--End Post Block-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pricing/pricing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pricing/pricing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--Pricing Tables-->\n <section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n        <div class=\"section-heading\">\n            <h3>{{pricing.tagline}}</h3>\n            <h2 class=\"section-title\">{{pricing.title}}</h2>\n        </div>\n\n        <!--Pricing Block-->\n        <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\" *ngFor='let plan of pricing.plans' [class.featured] =\"plan.featured\">\n            <div class=\"pricing-block-content\">\n                <h3>{{plan.title}}</h3>\n                <p class=\"pricing-sub\">{{plan.subtitle}}</p>\n                <div class=\"pricing\">\n                    <div class=\"price\"><span>{{plan.currency}}</span>{{plan.price}}</div>\n                    <p>{{plan.description}}</p>\n                </div>\n                <ul>\n                    <li>{{plan.downloads}}</li>\n                    <li>{{plan.extensions}}</li>\n                    <li>{{plan.tutorials}}</li>\n                    <li>{{plan.support}}</li>\n                    <li>{{plan.updates}}</li>\n                </ul>\n                <a href=\"{{plan.buttonlink}}\" class=\"button\">{{plan.buttontext}}</a>\n            </div>\n        </div>\n        <!--End Pricing Block-->\n    </div>\n</section>\n<!--End of Pricing Tables-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n        <div class=\"row clearfix\">\n    \n            <div class=\"container\">\n    \n                <div class=\"center-form panel\">\n                    <div class=\"panel-body\">\n                        <h4 class=\"text-center\"><i class=\"ion-person-add\"></i>Sing up</h4>\n    \n                        <form [ formGroup ]=\"signupForm\" (ngSubmit)=\"signup(signupForm.value)\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control form-names input-lg\" name=\"fristname\" formControlName=\"fristname\" placeholder=\"Frist Name\">\n                                <input type=\"text\" class=\"form-control form-names input-lg\" name=\"lastname\"  formControlName=\"lastname\" placeholder=\"Last Name\">\n                                <span class=\"ion-person form-control-icon\"></span>\n                           </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control input-lg\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\n                                <span class=\"ion-at form-control-icon\"></span>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"password\" class=\"form-control input-lg\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n                                <span class=\"ion-key form-control-icon\"></span>\n                            </div>\n    \n                            <button type=\"submit\" class=\"btn btn-block btn-success\">Sing up</button>\n    \n                            <p class=\"text-center\">\n                                <small>Already have an account!<a routerLink=\"/Login\"> Login</a></small>\n                            </p>\n    \n                        </form>\n                    </div>\n    \n                </div>\n    \n            </div>\n    \n        </div>\n    </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/social/social.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/social/social.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--Social Icons in Header-->\n <ul class=\"social-icons\">\n    <li *ngFor=\"let website of socialsites\">\n        <a target=\"{{website.target}}\" title=\"{{website.title}}\" href=\"{{website.link}}/{{website.username}}\">\n            <i class=\"fa fa-{{website.icon}} fa-1x\"></i><span>{{website.title}}</span>\n        </a>\n    </li>\n</ul>\n<!--End of Social Icons in Header-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/testimonials/testimonials.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/testimonials/testimonials.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Testimonials-->\n<aside id=\"testimonials\" class=\"scrollto text-center\" data-enllax-ratio=\".2\">\n\n    <div class=\"row clearfix\">\n\n        <div class=\"section-heading\">\n            <h3>{{testimonials.tagline}}</h3>\n            <h2 class=\"section-title\">{{testimonials.title}}</h2>\n        </div>\n\n        <!--User Testimonial-->\n        <blockquote class=\"col-3 testimonial classic\" *ngFor=\"let feedback of testimonials.feedbacks\">\n            <img src=\"../assets/images/user-images/{{feedback.userimage}}\" alt=\"User\"/>\n            <q>{{feedback.comments}}</q>\n            <footer>{{feedback.name}} - {{feedback.company}}</footer>\n        </blockquote>\n        <!-- End of Testimonial-->\n    </div>\n\n</aside>\n<!--End of Testimonials-->"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/testimonials/testimonials.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _routegaurd_Service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routegaurd.Service */ "./src/app/routegaurd.Service.ts");

















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'Home', component: _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"] },
    { path: 'About', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"] },
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'Signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"] },
    { path: 'Contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__["ContactusComponent"] },
    { path: 'Gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"] },
    { path: 'Services', component: _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"] },
    { path: 'Testimonials', component: _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialsComponent"] },
    { path: 'Clients', component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__["ClientsComponent"] },
    { path: 'Pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"] },
    { path: 'Blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"], canActivate: [_routegaurd_Service__WEBPACK_IMPORTED_MODULE_16__["RoutegaurdService"]] },
    { path: 'Article/:id', component: _article_article_component__WEBPACK_IMPORTED_MODULE_11__["ArticleComponent"] },
    { path: '404', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'website';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/testimonials/testimonials.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pager.service */ "./src/app/pager.service.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"],
                _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialsComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_13__["ClientsComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_14__["PricingComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_17__["SocialComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__["NavigationComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_20__["BlogComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_21__["PostComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_22__["ArticleComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_23__["NotfoundComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_24__["PaginationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_config_service__WEBPACK_IMPORTED_MODULE_19__["ConfigService"], _pager_service__WEBPACK_IMPORTED_MODULE_25__["PagerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");





var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(route, config, location) {
        this.route = route;
        this.config = config;
        this.location = location;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        //consol.log(id);
        this.post = this.getPostById(id);
    };
    ArticleComponent.prototype.getPostById = function (id) {
        return this.config.getPostByID(id);
    };
    ArticleComponent.prototype.getBack = function () {
        this.location.back();
    };
    ArticleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/index.js!./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        })
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pager.service */ "./src/app/pager.service.ts");




var BlogComponent = /** @class */ (function () {
    function BlogComponent(config, pagerService) {
        this.config = config;
        this.pagerService = pagerService;
        this.blog = {};
        this.pageSize = 3;
        this.pager = {};
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.blog = this.getBlog();
        this.allItems = this.blog.posts;
        this.setPage(1);
    };
    BlogComponent.prototype.getBlog = function () {
        return this.config.getConfig().blog;
    };
    BlogComponent.prototype.setPage = function (pageNumber) {
        // create  a pager using a paging service
        this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);
        // current page posts
        this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    BlogComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: _pager_service__WEBPACK_IMPORTED_MODULE_3__["PagerService"] }
    ]; };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        })
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.css":
/*!***********************************************!*\
  !*** ./src/app/clients/clients.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(config) {
        this.config = config;
        this.clients = {};
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.clients = this.getClients();
    };
    ClientsComponent.prototype.getClients = function () {
        return this.config.getConfig().clients;
    };
    ClientsComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! raw-loader!./clients.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/clients/clients.component.css")]
        })
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/app/configuration.ts");



var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.config = _configuration__WEBPACK_IMPORTED_MODULE_2__["configuration"];
    }
    ConfigService.prototype.getConfig = function () {
        return this.config;
    };
    ConfigService.prototype.getPostByID = function (id) {
        return this.config.blog.posts[id - 1];
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/configuration.ts":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuration", function() { return configuration; });
var configuration = {
    header: {
        heading: 'My Website',
        headingtext: 'Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
        buttontext: 'START CREATING TODAY',
        buttonlink: '\home'
    },
    intro: {
        tagline: 'SUCCESS',
        title: 'How We Help You To Sell Your Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        features: [
            { icon: 'html5', title: 'HTML5 &amp; CSS3', description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico' },
            { icon: 'bolt', title: 'Easy to Use', description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi' },
            { icon: 'tablet', title: 'Fully Responsive', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
            { icon: 'rocket', title: 'Parallax Effect', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' }
        ]
    },
    services: {
        tagline: 'BELIEVING',
        title: 'Focusing On What Matters Most',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    },
    testimonials: {
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: '',
        feedbacks: [
            { name: 'John Doe', userimage: 'user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'abc' },
            { name: 'Roslyn Doe', userimage: 'user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'xyz' },
            { name: 'Thomas Doe', userimage: 'user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'pqr' }
        ]
    },
    clients: {
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        companies: [
            { name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png' },
            { name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png' },
            { name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png' },
            { name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png' },
            { name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png' },
            { name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png' },
            { name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png' },
            { name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png' },
            { name: 'Cold', weblink: 'company-logo9.png', logo: 'company-logo9.png' }
        ]
    },
    pricing: {
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
        plans: [
            { title: 'Personal', subtitle: 'The standard version', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '19', currency: '₹', downloads: '5 Downloads', extensions: '2 Extensions', tutorials: ' Tutorials', support: 'Forum Support', updates: '1 year free updates', buttontext: 'BUY TODAY', buttonlink: '#', featured: true },
            { title: 'Student', subtitle: 'Most popular choice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '29', currency: '₹', downloads: '15 Downloads', extensions: '5 Extensions', tutorials: 'Tutorials with Files', support: 'Forum Support', updates: '2 year free updates', buttontext: 'BUY TODAY', buttonlink: '#', featured: true },
            { title: 'Business', subtitle: 'For the whole team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '49', currency: '₹', downloads: 'Unlimited Downloads', extensions: 'Unlimited Extensions', tutorials: 'HD Video Tutorials', support: 'Chat Support', updates: 'Lifetime free updates', buttontext: 'BUY TODAY', buttonlink: '#', featured: true }
        ]
    },
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg'
        ]
    },
    footer: {
        copyrighttext: 'Made with ❤ by ',
        developer: 'Ankit Shukla',
        developerlink: 'https://saralinfosoft.com/'
    },
    socialsites: [
        { link: 'https://www.facebook.com/', title: 'Facebook', target: '_blank', username: 'ank', icon: 'facebook' },
        { link: 'https://www.google.com/+', title: 'Google+', target: '_blank', username: 'ank', icon: 'google-plus' },
        { link: 'https://www.twitter.com/', title: 'Twitter', target: '_blank', username: 'ank', icon: 'twitter' },
        { link: 'https://www.instagram.com/', title: 'Instagram', target: '_blank', username: 'ank', icon: 'instagram' },
        { link: 'https://www.behance.net/', title: 'behance', target: '_blank', username: 'ank', icon: 'behance' }
    ],
    blog: {
        tagline: 'MY Blog',
        title: 'Thoughts become things..',
        posts: [
            { id: 1, title: 'The fristh article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-1.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' },
            { id: 2, title: 'The Second article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-2.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' },
            { id: 3, title: 'The Third article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-3.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' },
            { id: 4, title: 'The Fourth article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-4.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' },
            { id: 5, title: 'The Fifth article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-5.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' },
            { id: 6, title: 'The Sixth article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-6.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' },
            { id: 7, title: 'The Seventh article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-1.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' },
            { id: 8, title: 'The Eighth article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-3.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' },
            { id: 9, title: 'The Nineth article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-4.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' },
            { id: 10, title: 'The Tenth article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-5.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' },
            { id: 11, title: 'The Eleventh article', author: 'AD', publisdate: '2019-09-12T07:22Z', image: 'gallery-image-2.jpg', excert: 'Learn the list of words that you can use to describe positive sentiments and negative sentiments' }
        ]
    },
};


/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{ position: fixed; bottom: 10px; right: 10px;}\r\n.container{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    \r\n}\r\nsection{\r\n    background-color: #ddd;\r\n}\r\n.panel {\r\n    background-color: #fff;\r\n    border: none;\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n.panel-body{\r\n    padding: 15px;\r\n}\r\n.center-form {\r\n    width: 315px;\r\n    margin-top: 8px;\r\n    margin-right: auto;\r\n    margin-bottom: 0px;\r\n    margin-left: auto;\r\n}\r\n.panel-body{\r\n\r\n}\r\n.text-center{\r\n    text-align: center;\r\n}\r\nform {\r\n    display: block;\r\n    margin-top: 0em;\r\n}\r\n.form-group{\r\n    margin-bottom: 15px;\r\n    position: relative;\r\n}\r\n.form-control{\r\n    padding-left: 42px;\r\n    box-shadow: inset 0 -2px 0 #e51c23;\r\n    color: #666666;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    display: block;\r\n    width: 100%;\r\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\r\n}\r\n.form-names{\r\n    /* padding-left: 42px; */\r\n    box-shadow: inset 0 -2px 0 #e51c23;\r\n    color: #666666;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    display: inline-block;\r\n    width: 50%;\r\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\r\n}\r\n.form-control-icon{position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 46px;\r\n    height: 46px;\r\n    line-height: 46px;\r\n    color: #555;\r\n    z-index: 2;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n.btn{\r\n    text-transform: uppercase;\r\n    border-right: none;\r\n    border-bottom: none;\r\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\r\n    transition: all 0.2s;\r\n    margin-bottom: 0;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    white-space: nowrap;\r\n    padding: 6px 16px;\r\n    font-size: 13px;\r\n    line-height: 1.846;\r\n    border-radius: 3px;\r\n}\r\n.btn-block{\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.btn-primary {\r\n    color: #ffffff;\r\n    background-color: #2196f3;\r\n    border-color: transparent;\r\n}\r\n.btn-success{\r\n    background-color: #4caf50;\r\n    color:#fff;\r\n}\r\n.signup-or-separator{\r\n    position: relative;\r\n    height: 29px;\r\n    margin: 5px 0;\r\n    text-align: center;\r\n    background: none;\r\n}\r\n.signup-or-separator .text {\r\n    display: inline-block;\r\n    padding: 8px;\r\n    margin: 0;\r\n    background-color: #fff;\r\n}\r\n.signup-or-separator hr {\r\n    width: 90%;\r\n    margin: -16px auto 10px auto;\r\n    border-top: 1px solid #dce0e0;\r\n}\r\n[type=text].form-control, [type=text].form-names, [type=password].form-control {\r\n    /* padding: 0; */\r\n    border: none;\r\n    border-radius: 0;\r\n    box-shadow: inset 0 -1px 0 #dddddd;\r\n    font-size: 16px;\r\n}\r\n[class^='ion-'] {\r\n    font-size: 1.2em;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZUFBZSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7QUFDbEQ7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsc0VBQXNFO0FBQzFFO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysc0VBQXNFO0FBQzFFO0FBRUEsbUJBQW1CLGtCQUFrQjtJQUNqQyxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHsgcG9zaXRpb246IGZpeGVkOyBib3R0b206IDEwcHg7IHJpZ2h0OiAxMHB4O31cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIFxyXG59XHJcbnNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcbi5wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4ucGFuZWwtYm9keXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNlbnRlci1mb3JtIHtcclxuICAgIHdpZHRoOiAzMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5wYW5lbC1ib2R5e1xyXG5cclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwZW07XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQycHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjZTUxYzIzO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcclxufVxyXG5cclxuLmZvcm0tbmFtZXN7XHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDQycHg7ICovXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjZTUxYzIzO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS44NDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmJ0bi1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bi1zdWNjZXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLnNpZ251cC1vci1zZXBhcmF0b3J7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uc2lnbnVwLW9yLXNlcGFyYXRvciAudGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2lnbnVwLW9yLXNlcGFyYXRvciBociB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAtMTZweCBhdXRvIDEwcHggYXV0bztcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlMGUwO1xyXG59XHJcblxyXG5bdHlwZT10ZXh0XS5mb3JtLWNvbnRyb2wsIFt0eXBlPXRleHRdLmZvcm0tbmFtZXMsIFt0eXBlPXBhc3N3b3JkXS5mb3JtLWNvbnRyb2wge1xyXG4gICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjZGRkZGRkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5bY2xhc3NePSdpb24tJ10ge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(fb) {
        this.fb = fb;
    }
    ContactusComponent.prototype.ngOnInit = function () {
        this.sendMessageForm = this.fb.group({
            'fristname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ContactusComponent.prototype.sendMessage = function (formData) {
        console.log(formData);
    };
    ContactusComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/index.js!./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        })
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var ContentComponent = /** @class */ (function () {
    function ContentComponent(config) {
        this.config = config;
        this.services = {};
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.services = this.getServices();
    };
    ContentComponent.prototype.getServices = function () {
        return this.config.getConfig().services;
    };
    ContentComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/index.js!./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        })
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(config) {
        this.config = config;
        this.footer = {};
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.footer = this.getFooter();
    };
    FooterComponent.prototype.getFooter = function () {
        return this.config.getConfig().footer;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(config) {
        this.config = config;
        this.gallery = {};
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.gallery = this.getGallery();
    };
    GalleryComponent.prototype.getGallery = function () {
        return this.config.getConfig().gallery;
    };
    GalleryComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(config) {
        this.config = config;
        this.header = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.header = this.getHeader();
    };
    HeaderComponent.prototype.getHeader = function () {
        return this.config.getConfig().header;
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var IntroComponent = /** @class */ (function () {
    function IntroComponent(config) {
        this.config = config;
        this.intro = {};
    }
    IntroComponent.prototype.ngOnInit = function () {
        this.intro = this.getIntro();
    };
    IntroComponent.prototype.getIntro = function () {
        return this.config.getConfig().intro;
    };
    IntroComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
        })
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    \r\n}\r\nsection{\r\n    background-color: #ddd;\r\n}\r\n.panel {\r\n    background-color: #fff;\r\n    border: none;\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n.panel-body{\r\n    padding: 15px;\r\n}\r\n.center-form {\r\n    width: 315px;\r\n    margin-top: 18px;\r\n    margin-right: auto;\r\n    margin-bottom: 0px;\r\n    margin-left: auto;\r\n}\r\n.panel-body{\r\n\r\n}\r\n.text-center{\r\n    text-align: center;\r\n}\r\nform {\r\n    display: block;\r\n    margin-top: 0em;\r\n}\r\n.form-group{\r\n    margin-bottom: 15px;\r\n    position: relative;\r\n}\r\n.form-control{\r\n    padding-left: 42px;\r\n    box-shadow: inset 0 -2px 0 #e51c23;\r\n    color: #666666;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    display: block;\r\n    width: 100%;\r\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\r\n}\r\n.form-control-icon{position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 46px;\r\n    height: 46px;\r\n    line-height: 46px;\r\n    color: #555;\r\n    z-index: 2;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n.btn{\r\n    text-transform: uppercase;\r\n    border-right: none;\r\n    border-bottom: none;\r\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\r\n    transition: all 0.2s;\r\n    margin-bottom: 0;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    white-space: nowrap;\r\n    padding: 6px 16px;\r\n    font-size: 13px;\r\n    line-height: 1.846;\r\n    border-radius: 3px;\r\n}\r\n.btn-block{\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.btn-success{\r\n    background-color: #4caf50;\r\n    color:#fff;\r\n}\r\n.signup-or-separator{\r\n    position: relative;\r\n    height: 29px;\r\n    margin: 5px 0;\r\n    text-align: center;\r\n    background: none;\r\n}\r\n.signup-or-separator .text {\r\n    display: inline-block;\r\n    padding: 8px;\r\n    margin: 0;\r\n    background-color: #fff;\r\n}\r\n.signup-or-separator hr {\r\n    width: 90%;\r\n    margin: -16px auto 10px auto;\r\n    border-top: 1px solid #dce0e0;\r\n}\r\n[type=text].form-control, [type=password].form-control {\r\n    border: none;\r\n    border-radius: 0;\r\n    box-shadow: inset 0 -1px 0 #dddddd;\r\n    font-size: 16px;\r\n}\r\n[class^='ion-'] {\r\n    font-size: 1.2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFdBQVc7SUFDWCxzRUFBc0U7QUFDMUU7QUFFQSxtQkFBbUIsa0JBQWtCO0lBQ2pDLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIFxyXG59XHJcbnNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcbi5wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4ucGFuZWwtYm9keXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNlbnRlci1mb3JtIHtcclxuICAgIHdpZHRoOiAzMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4ucGFuZWwtYm9keXtcclxuXHJcbn1cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MnB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgI2U1MWMyMztcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDQ2cHg7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDZweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODQ2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5idG4tYmxvY2t7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG4tc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5zaWdudXAtb3Itc2VwYXJhdG9ye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLnNpZ251cC1vci1zZXBhcmF0b3IgLnRleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNpZ251cC1vci1zZXBhcmF0b3IgaHIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogLTE2cHggYXV0byAxMHB4IGF1dG87XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZTBlMDtcclxufVxyXG5cclxuW3R5cGU9dGV4dF0uZm9ybS1jb250cm9sLCBbdHlwZT1wYXNzd29yZF0uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjZGRkZGRkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5bY2xhc3NePSdpb24tJ10ge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb) {
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    LoginComponent.prototype.login = function (formData) {
        console.log(formData);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.activetab = 'home';
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.getActiveTab = function (tabname) {
        this.activetab = tabname;
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-text{\r\n    font-size:15em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpZy10ZXh0e1xyXG4gICAgZm9udC1zaXplOjE1ZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pager.service.ts":
/*!**********************************!*\
  !*** ./src/app/pager.service.ts ***!
  \**********************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure that this do not fail out of bounds
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // if more than 10 pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        //calculate start and end indexitem
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min((startIndex + pageSize - 1), (totalItems - 1));
        // create an array of pages
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination > li{\r\n display:inline-block;\r\n background-color: #fff;\r\n border:1px solid #ddd;\r\n margin-left: -1px;\r\n padding-left: 15px;\r\n padding-right:15px;\r\n padding-top: 10px;\r\n padding-bottom: 10px;\r\n cursor: pointer;\r\n\r\n}\r\n.pagination> li.active{\r\n    background-color: #005575;\r\n}\r\n.pagination li.disable{\r\n    background-color: #ddd;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQkFBb0I7Q0FDcEIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGVBQWU7O0FBRWhCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbiA+IGxpe1xyXG4gZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG4gbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiBwYWRkaW5nLXRvcDogMTBweDtcclxuIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG4ucGFnaW5hdGlvbj4gbGkuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTU3NTtcclxufVxyXG4ucGFnaW5hdGlvbiBsaS5kaXNhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.setPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.setCurrentPage = function (pageNumber) {
        this.setPage.emit(pageNumber);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaginationComponent.prototype, "pager", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PaginationComponent.prototype, "setPage", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")]
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --------- Post ---------- */\r\n\r\n.post-block-content {\r\n    background: #fff;\r\n    padding: 25px 0 25px 0;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\r\n    transition: all 0.2s ease-in-out 0s;\r\n    position: relative;\r\n    border: 10px solid #fff;\r\n}\r\n\r\n#banner .section-heading:before, .testimonial.classic footer:before {\r\n    background: #d2b356;\r\n}\r\n\r\n.post-block-content:hover {\r\n    border-color:#d2b356;\r\n}\r\n\r\n*, ::before, ::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.post-block ul {\r\n    list-style: none;\r\n    margin: 25px 0 25px 0;\r\n}\r\n\r\n.post-block li {\r\n    padding: 14px 0;\r\n    border-bottom: 1px dotted #e1e1e1;\r\n}\r\n\r\n.post-block li:last-of-type {\r\n    border:none;\r\n}\r\n\r\n.post-block h3 {\r\n    font-size:17px;\r\n    text-transform:uppercase;\r\n    padding-bottom:0;\r\n}\r\n\r\n.post-sub {\r\n    font-style: italic;\r\n    color:#ccc;\r\n    margin:0 0 25px 0;\r\n}\r\n\r\n.post {\r\n    background: #f5f5f5;\r\n    padding: 25px;\r\n    position: relative;\r\n}\r\n\r\n.post-featured-image {\r\n    display: inline-block;\r\n    font-size: 62px;\r\n    font-weight: 700;\r\n    position: relative;\r\n}\r\n\r\n.post-featured-image span {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -20px;\r\n    font-size: 22px;\r\n}\r\n\r\n.post  p {\r\n    font-style:italic;\r\n    color:#b4b4b4;\r\n    line-height:auto;\r\n    margin:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCOztBQUU5QjtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsMkNBQTJDO0lBQzNDLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0tLS0tLS0gUG9zdCAtLS0tLS0tLS0tICovXHJcblxyXG4ucG9zdC1ibG9jay1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDAgMjVweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmZmY7XHJcbn1cclxuI2Jhbm5lciAuc2VjdGlvbi1oZWFkaW5nOmJlZm9yZSwgLnRlc3RpbW9uaWFsLmNsYXNzaWMgZm9vdGVyOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDJiMzU2O1xyXG59XHJcblxyXG4ucG9zdC1ibG9jay1jb250ZW50OmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjojZDJiMzU2O1xyXG59XHJcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnBvc3QtYmxvY2sgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMjVweCAwIDI1cHggMDtcclxufVxyXG5cclxuLnBvc3QtYmxvY2sgbGkge1xyXG4gICAgcGFkZGluZzogMTRweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTFlMWUxO1xyXG59XHJcblxyXG4ucG9zdC1ibG9jayBsaTpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbi5wb3N0LWJsb2NrIGgzIHtcclxuICAgIGZvbnQtc2l6ZToxN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZy1ib3R0b206MDtcclxufVxyXG5cclxuLnBvc3Qtc3ViIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiNjY2M7XHJcbiAgICBtYXJnaW46MCAwIDI1cHggMDtcclxufVxyXG4ucG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBvc3QtZmVhdHVyZWQtaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiA2MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBvc3QtZmVhdHVyZWQtaW1hZ2Ugc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLnBvc3QgIHAge1xyXG4gICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgICBjb2xvcjojYjRiNGI0O1xyXG4gICAgbGluZS1oZWlnaHQ6YXV0bztcclxuICAgIG1hcmdpbjowO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PostComponent.prototype, "post", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/index.js!./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        })
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var PricingComponent = /** @class */ (function () {
    function PricingComponent(config) {
        this.config = config;
        this.pricing = {};
    }
    PricingComponent.prototype.ngOnInit = function () {
        this.pricing = this.getPricing();
    };
    PricingComponent.prototype.getPricing = function () {
        return this.config.getConfig().pricing;
    };
    PricingComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! raw-loader!./pricing.component.html */ "./node_modules/raw-loader/index.js!./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pricing/pricing.component.css")]
        })
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/routegaurd.Service.ts":
/*!***************************************!*\
  !*** ./src/app/routegaurd.Service.ts ***!
  \***************************************/
/*! exports provided: RoutegaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutegaurdService", function() { return RoutegaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RoutegaurdService = /** @class */ (function () {
    function RoutegaurdService(router) {
        this.router = router;
    }
    RoutegaurdService.prototype.canActivate = function (router, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    RoutegaurdService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RoutegaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RoutegaurdService);
    return RoutegaurdService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    \r\n}\r\nsection{\r\n    background-color: #ddd;\r\n}\r\n.panel {\r\n    background-color: #fff;\r\n    border: none;\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n.panel-body{\r\n    padding: 15px;\r\n}\r\n.center-form {\r\n    width: 315px;\r\n    margin-top: 8px;\r\n    margin-right: auto;\r\n    margin-bottom: 0px;\r\n    margin-left: auto;\r\n}\r\n.panel-body{\r\n\r\n}\r\n.text-center{\r\n    text-align: center;\r\n}\r\nform {\r\n    display: block;\r\n    margin-top: 0em;\r\n}\r\n.form-group{\r\n    margin-bottom: 15px;\r\n    position: relative;\r\n}\r\n.form-control{\r\n    padding-left: 42px;\r\n    box-shadow: inset 0 -2px 0 #e51c23;\r\n    color: #666666;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    display: block;\r\n    width: 100%;\r\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\r\n}\r\n.form-names{\r\n    /* padding-left: 42px; */\r\n    box-shadow: inset 0 -2px 0 #e51c23;\r\n    color: #666666;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    display: inline-block;\r\n    width: 50%;\r\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\r\n}\r\n.form-control-icon{position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 46px;\r\n    height: 46px;\r\n    line-height: 46px;\r\n    color: #555;\r\n    z-index: 2;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n.btn{\r\n    text-transform: uppercase;\r\n    border-right: none;\r\n    border-bottom: none;\r\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\r\n    transition: all 0.2s;\r\n    margin-bottom: 0;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    white-space: nowrap;\r\n    padding: 6px 16px;\r\n    font-size: 13px;\r\n    line-height: 1.846;\r\n    border-radius: 3px;\r\n}\r\n.btn-block{\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.btn-primary {\r\n    color: #ffffff;\r\n    background-color: #2196f3;\r\n    border-color: transparent;\r\n}\r\n.btn-success{\r\n    background-color: #4caf50;\r\n    color:#fff;\r\n}\r\n.signup-or-separator{\r\n    position: relative;\r\n    height: 29px;\r\n    margin: 5px 0;\r\n    text-align: center;\r\n    background: none;\r\n}\r\n.signup-or-separator .text {\r\n    display: inline-block;\r\n    padding: 8px;\r\n    margin: 0;\r\n    background-color: #fff;\r\n}\r\n.signup-or-separator hr {\r\n    width: 90%;\r\n    margin: -16px auto 10px auto;\r\n    border-top: 1px solid #dce0e0;\r\n}\r\n[type=text].form-control, [type=text].form-names, [type=password].form-control {\r\n    /* padding: 0; */\r\n    border: none;\r\n    border-radius: 0;\r\n    box-shadow: inset 0 -1px 0 #dddddd;\r\n    font-size: 16px;\r\n}\r\n[class^='ion-'] {\r\n    font-size: 1.2em;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztJQUNYLHNFQUFzRTtBQUMxRTtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHNFQUFzRTtBQUMxRTtBQUVBLG1CQUFtQixrQkFBa0I7SUFDakMsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIFxyXG59XHJcbnNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcbi5wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4ucGFuZWwtYm9keXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNlbnRlci1mb3JtIHtcclxuICAgIHdpZHRoOiAzMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5wYW5lbC1ib2R5e1xyXG5cclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwZW07XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQycHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjZTUxYzIzO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcclxufVxyXG5cclxuLmZvcm0tbmFtZXN7XHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDQycHg7ICovXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjZTUxYzIzO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS44NDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmJ0bi1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bi1zdWNjZXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLnNpZ251cC1vci1zZXBhcmF0b3J7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uc2lnbnVwLW9yLXNlcGFyYXRvciAudGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2lnbnVwLW9yLXNlcGFyYXRvciBociB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAtMTZweCBhdXRvIDEwcHggYXV0bztcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlMGUwO1xyXG59XHJcblxyXG5bdHlwZT10ZXh0XS5mb3JtLWNvbnRyb2wsIFt0eXBlPXRleHRdLmZvcm0tbmFtZXMsIFt0eXBlPXBhc3N3b3JkXS5mb3JtLWNvbnRyb2wge1xyXG4gICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjZGRkZGRkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5bY2xhc3NePSdpb24tJ10ge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb) {
        this.fb = fb;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            'fristname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    SignupComponent.prototype.signup = function (formData) {
        console.log(formData);
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var SocialComponent = /** @class */ (function () {
    function SocialComponent(config) {
        this.config = config;
        this.socialsites = {};
    }
    SocialComponent.prototype.ngOnInit = function () {
        this.socialsites = this.getSocialsites();
    };
    SocialComponent.prototype.getSocialsites = function () {
        return this.config.getConfig().socialsites;
    };
    SocialComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! raw-loader!./social.component.html */ "./node_modules/raw-loader/index.js!./src/app/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")]
        })
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/testimonials/testimonials.component.css":
/*!*********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/testimonials/testimonials.component.ts":
/*!********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent(config) {
        this.config = config;
        this.testimonials = {};
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
        this.testimonials = this.getTestimonials();
    };
    TestimonialsComponent.prototype.getTestimonials = function () {
        return this.config.getConfig().testimonials;
    };
    TestimonialsComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! raw-loader!./testimonials.component.html */ "./node_modules/raw-loader/index.js!./src/app/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.css */ "./src/app/testimonials/testimonials.component.css")]
        })
    ], TestimonialsComponent);
    return TestimonialsComponent;
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

module.exports = __webpack_require__(/*! E:\website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map