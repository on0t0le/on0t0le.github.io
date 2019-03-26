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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-content></app-main-content>"

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
        this.title = 'todo-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-content/main-content.component */ "./src/app/main-content/main-content.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _main_content_main_content_editdialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-content/main-content-editdialog.component */ "./src/app/main-content/main-content-editdialog.component.ts");






//Material components





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_7__["MainContentComponent"],
                _main_content_main_content_editdialog_component__WEBPACK_IMPORTED_MODULE_9__["MainContentEditdialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]
            ],
            entryComponents: [
                _main_content_main_content_editdialog_component__WEBPACK_IMPORTED_MODULE_9__["MainContentEditdialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-content/main-content-editdialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main-content/main-content-editdialog.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tY29udGVudC9tYWluLWNvbnRlbnQtZWRpdGRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main-content/main-content-editdialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main-content/main-content-editdialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi there!</h1>\r\n<div mat-dialog-content>\r\n  <p>Change task?</p>\r\n  <p>{{data.task}}</p>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Change this task to\" [(ngModel)]=\"data.task\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]>No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/main-content-editdialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main-content/main-content-editdialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainContentEditdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentEditdialogComponent", function() { return MainContentEditdialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MainContentEditdialogComponent = /** @class */ (function () {
    function MainContentEditdialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MainContentEditdialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-content-editdialog',
            template: __webpack_require__(/*! ./main-content-editdialog.component.html */ "./src/app/main-content/main-content-editdialog.component.html"),
            styles: [__webpack_require__(/*! ./main-content-editdialog.component.css */ "./src/app/main-content/main-content-editdialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MainContentEditdialogComponent);
    return MainContentEditdialogComponent;
}());



/***/ }),

/***/ "./src/app/main-content/main-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main-content/main-content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-input{\r\n    width: 50%;\r\n    margin: 10px auto;\r\n    /*\r\n    outline-style: solid;\r\n    outline-color: red;\r\n    */\r\n    display: flex;\r\n    flex-direction: column;    \r\n}\r\n\r\n.main-list {\r\n    width: 50%;\r\n    text-align: center;\r\n    margin: 10px auto;\r\n}\r\n\r\n.main-list .main-list__items {\r\n    text-align: left;\r\n}\r\n\r\n.deleteBtn {\r\n    margin: 0 10px;    \r\n}\r\n\r\n.deleteBtn:hover,\r\n.deleteBtn:active {\r\n    background: #f44336;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQjs7O0tBR0M7SUFDRCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWlucHV0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgLypcclxuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xyXG4gICAgb3V0bGluZS1jb2xvcjogcmVkO1xyXG4gICAgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxufVxyXG5cclxuLm1haW4tbGlzdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5tYWluLWxpc3QgLm1haW4tbGlzdF9faXRlbXMge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmRlbGV0ZUJ0biB7XHJcbiAgICBtYXJnaW46IDAgMTBweDsgICAgXHJcbn1cclxuXHJcbi5kZWxldGVCdG46aG92ZXIsXHJcbi5kZWxldGVCdG46YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-content/main-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-content/main-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-input\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Input task\" [formControl]=\"task\">\r\n  </mat-form-field>\r\n  <button mat-raised-button color=\"accent\" (click)=\"addItem()\">Add</button>\r\n</div>\r\n<div class=\"main-list\">\r\n  Here is what you should do:\r\n  <mat-nav-list>\r\n    <mat-list-item *ngFor=\"let todo of tasks\">\r\n      <a matLine href=\"#\">{{ todo.task }}</a>\r\n      <mat-checkbox [(ngModel)]=\"todo.isDone\">Done</mat-checkbox>\r\n      <button mat-icon-button (click)=\"editTask(todo)\">\r\n        <mat-icon>edit</mat-icon>\r\n      </button>\r\n      <a mat-icon-button (click)=\"deleteTask(todo)\" class=\"deleteBtn\">\r\n        <mat-icon>delete</mat-icon>\r\n      </a>\r\n    </mat-list-item>\r\n  </mat-nav-list>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/main-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-content/main-content.component.ts ***!
  \********************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _main_content_editdialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-content-editdialog.component */ "./src/app/main-content/main-content-editdialog.component.ts");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tasks.service */ "./src/app/tasks.service.ts");
/* harmony import */ var fast_json_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fast-json-patch */ "./node_modules/fast-json-patch/lib/duplex.js");
/* harmony import */ var fast_json_patch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fast_json_patch__WEBPACK_IMPORTED_MODULE_6__);







var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(dialog, tasksService) {
        this.dialog = dialog;
        this.tasksService = tasksService;
        this.task = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.tasks = [];
    }
    MainContentComponent.prototype.ngOnInit = function () {
        //Load all tasks
        this.getTasks();
    };
    MainContentComponent.prototype.getTasks = function () {
        var _this = this;
        this.tasksService.getAllTasks().subscribe(function (data) {
            _this.tasks = data;
            console.warn('Data was fetched');
        }, function (err) {
            //Something went wrong
            console.error(err);
        });
    };
    MainContentComponent.prototype.addItem = function () {
        var _this = this;
        //If nothing was inputed do nothing too
        if (!this.task.value) {
            return;
        }
        //Instanciate new task
        var newTask = {
            task: this.task.value,
            isDone: false
        };
        this.tasksService.addTask(newTask).subscribe(function (data) {
            console.warn('New rask posted: ', data);
            //Reload list of tasks
            _this.getTasks();
        }, function (err) {
            console.error(err);
        });
    };
    MainContentComponent.prototype.deleteTask = function (task) {
        var _this = this;
        this.tasksService.deleteTask(task).subscribe(function () {
            console.warn('Task was deleted!');
            //Reload list of tasks
            _this.getTasks();
        }, function (err) {
            console.error(err);
        });
    };
    MainContentComponent.prototype.editTask = function (task) {
        var _this = this;
        //Create dialog-box and transfer task as data in it
        var dialogRef = this.dialog.open(_main_content_editdialog_component__WEBPACK_IMPORTED_MODULE_4__["MainContentEditdialogComponent"], {
            height: '400px',
            width: '600px',
            restoreFocus: false,
            data: { id: task.id, task: task.task, isDone: task.isDone }
        });
        //What to do after dialog-box closes
        dialogRef.afterClosed().subscribe(function (result) {
            //If result is null, then do nothing(good boy, just test windows opening)
            if (!result) {
                return;
            }
            ;
            //console.warn('Dialog-box result: ',result);
            //Compare tasks befor and after edit
            var body = Object(fast_json_patch__WEBPACK_IMPORTED_MODULE_6__["compare"])(task, result);
            console.log('This is what go to body: ', body);
            if (!body.length) {
                return;
            }
            //If receive data - go PATCH it!
            _this.tasksService.editPathcTask(task.id, body).subscribe(function () {
                console.warn('Patching succesfull!');
                //Reload list of tasks
                _this.getTasks();
            }, function (err) {
                console.error(err);
            });
        });
    };
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.css */ "./src/app/main-content/main-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _tasks_service__WEBPACK_IMPORTED_MODULE_5__["TasksService"]])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/tasks.service.ts":
/*!**********************************!*\
  !*** ./src/app/tasks.service.ts ***!
  \**********************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TasksService = /** @class */ (function () {
    function TasksService(http) {
        this.http = http;
        //private baseUrl = "http://localhost:5000/api"
        this.baseUrl = "https://35.211.139.206:32803/api";
    }
    TasksService.prototype.getAllTasks = function () {
        return this.http.get(this.baseUrl + '/tasks');
    };
    TasksService.prototype.addTask = function (task) {
        return this.http.post(this.baseUrl + '/tasks', task, httpOptions);
    };
    TasksService.prototype.deleteTask = function (task) {
        return this.http.delete(this.baseUrl + ("/tasks/" + task.id), httpOptions);
    };
    TasksService.prototype.editPathcTask = function (id, body) {
        // let body = {
        //   "isDone": true
        // }
        // const body = new HttpParams()
        // .set('isDone','true');
        console.warn('This is received in body: ', body);
        return this.http.patch(this.baseUrl + ("/tasks/" + id), body);
    };
    TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TasksService);
    return TasksService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularProjects\todo-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map