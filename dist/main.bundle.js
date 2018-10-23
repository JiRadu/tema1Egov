webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.is-invalid {\n    border: '1px red';\n    background-color: 'red';\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class=\"jumbotron\">\n    <pre>{{factura | json }}</pre>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <h3>Generare factura</h3>\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit(f)\" #f=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label>CIF Prestator</label>\n                        <input type=\"text\" class=\"form-control\" #cifPrestator=\"ngModel\" name=\"cifPrestator\" [(ngModel)]=\"factura.cifPrestator\"\n                            [ngClass]=\"{ 'is-invalid': f.submitted && cifPrestator.invalid }\" required minlength=\"1\"\n                            maxlength=\"11\" (ngModelChange)=\"changeCifPrestator($event)\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Nume Prestator</label>\n                        <input type=\"text\" class=\"form-control\" #numePrestator=\"ngModel\" name=\"numePrestator\" [(ngModel)]=\"factura.numePrestator\"\n                            [ngClass]=\"{ 'is-invalid': f.submitted && numePrestator.invalid }\" required />\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"numarUnicPrestator\">Numar Unic de Inregistrare Prestator</label>\n                        <input type=\"text\" class=\"form-control\" #numarUnicPrestator=\"ngModel\" name=\"numarUnicPrestator\"\n                            [(ngModel)]=\"factura.numarUnicPrestator\" [ngClass]=\"{ 'is-invalid': f.submitted && numarUnicPrestator.invalid }\"\n                            required />\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"ibanPrestator\">IBAN Prestator</label>\n                        <input type=\"ibanPrestator\" class=\"form-control\" #ibanPrestator=\"ngModel\" name=\"ibanPrestator\"\n                            [(ngModel)]=\"factura.ibanPrestator\" #ibanPrestator=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && ibanPrestator.invalid }\"\n                            required minlength=\"24\" maxlength=\"24\" (ngModelChange)=\"changeIbanPrestator($event)\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"bancaPrestator\">Banca Prestator</label>\n                        <input type=\"bancaPrestator\" class=\"form-control\" #bancaPrestator=\"ngModel\" name=\"bancaPrestator\"\n                            [(ngModel)]=\"factura.bancaPrestator\" #bancaPrestator=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && bancaPrestator.invalid }\"\n                            required />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>CIF Beneficiar</label>\n                        <input type=\"text\" class=\"form-control\" #cifBeneficiar=\"ngModel\" name=\"cifBeneficiar\"\n                            [(ngModel)]=\"factura.cifBeneficiar\" [ngClass]=\"{ 'is-invalid': f.submitted && cifBeneficiar.invalid }\"\n                            required minlength=\"1\" maxlength=\"11\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Nume Beneficiar</label>\n                        <input type=\"text\" class=\"form-control\" #numeBeneficiar=\"ngModel\" name=\"numeBeneficiar\"\n                            [(ngModel)]=\"factura.numeBeneficiar\" [ngClass]=\"{ 'is-invalid': f.submitted && numeBeneficiar.invalid }\"\n                            required />\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"numarUnicBeneficiar\">Numar Unic de Inregistrare Beneficiar</label>\n                        <input type=\"text\" class=\"form-control\" #numarUnicBeneficiar=\"ngModel\" name=\"numarUnicBeneficiar\"\n                            [(ngModel)]=\"factura.numarUnicBeneficiar\" [ngClass]=\"{ 'is-invalid': f.submitted && numarUnicBeneficiar.invalid }\"\n                            required />\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"ibanBeneficiar\">IBAN Beneficiar</label>\n                        <input type=\"ibanBeneficiar\" class=\"form-control\" #ibanBeneficiar=\"ngModel\" name=\"ibanBeneficiar\"\n                            [(ngModel)]=\"factura.ibanBeneficiar\" #ibanBeneficiar=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && ibanBeneficiar.invalid }\"\n                            required minlength=\"24\" maxlength=\"24\" (ngModelChange)=\"changeIbanBeneficiar($event)\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"bancaBeneficiar\">Banca Beneficiar</label>\n                        <input type=\"bancaBeneficiar\" class=\"form-control\" #bancaBeneficiar=\"ngModel\" name=\"bancaBeneficiar\"\n                            [(ngModel)]=\"factura.bancaBeneficiar\" #bancaBeneficiar=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && bancaBeneficiar.invalid }\"\n                            required />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"produs\">Denumire produs</label>\n                        <input type=\"produs\" class=\"form-control\" #produs=\"ngModel\" name=\"produs\" [(ngModel)]=\"factura.produs\"\n                            #produs=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && produs.invalid }\" required />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"cantitate\">Cantitate</label>\n                        <input type=\"cantitate\" class=\"form-control\" #cantitate=\"ngModel\" name=\"cantitate\" [(ngModel)]=\"factura.cantitate\" #cantitate=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': f.submitted && cantitate.invalid }\" required />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"pretUnitar\">Pret unitar ( RON )</label>\n                        <input type=\"pretUnitar\" class=\"form-control\" #pretUnitar=\"ngModel\" name=\"pretUnitar\"\n                            [(ngModel)]=\"factura.pretUnitar\" #pretUnitar=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && pretUnitar.invalid }\"\n                            required />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Total fara TVA:</label>\n                        <div>{{factura.pretUnitar * factura.cantitate}}</div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Total:</label>\n                        <div>{{total}}</div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.factura = {
            cifPrestator: '',
            numePrestator: ' S.R.L.',
            numarUnicPrestator: '',
            ibanPrestator: '',
            bancaPrestator: '',
            cifBeneficiar: '',
            numeBeneficiar: ' S.R.L.',
            numarUnicBeneficiar: '',
            ibanBeneficiar: '',
            bancaBeneficiar: '',
            produs: '',
            cantitate: 0,
            pretUnitar: 0,
            tva: 0,
        };
        this.banca = [
            {
                name: 'Alpha Bank Romania',
                cod: 'BUCU'
            }, {
                name: 'Banc post',
                cod: 'BPOS'
            }, {
                name: 'Banca comerciala a greciei',
                cod: 'BSEA'
            }, {
                name: 'Banca comerciala Carpatica',
                cod: 'CARP'
            }, {
                name: 'Banca comerciala Ion Tiriac',
                cod: 'CBIT'
            }, {
                name: 'Banca comerciala ROBANK',
                cod: 'BNRB'
            }, {
                name: 'Banca comerciala Romana',
                cod: 'RNCB'
            }, {
                name: 'Banca de credit si dezvoltare Romexterra',
                cod: 'CRDZ'
            }, {
                name: 'Banca de microfinantare MIRO',
                cod: 'MIRO'
            }, {
                name: 'Banca di Roma',
                cod: 'BROM'
            }, {
                name: 'Banca Italo-romena',
                cod: 'BITR'
            }, {
                name: "BANCA NATIONALA A GRECIEI",
                cod: "ETHN"
            }, {
                name: "BANCA NATIONALA A ROMANIEI",
                cod: "NBOR"
            }, {
                name: "BANCA ROMANA PENTRU RELANSARE LIBRA",
                cod: "BREL"
            }, {
                name: "BANCA ROMANEASCA",
                cod: "BRMA"
            }, {
                name: "BANCA TRANSILVANIA",
                cod: "BTRL"
            }, {
                name: "BANQUE FRANCO ROUMAINE",
                cod: "BFRO"
            }, {
                name: "BRD SOCIETE GENERALE",
                cod: "BRDE"
            }, {
                name: "CEC",
                cod: "CECE"
            }, {
                name: "CITIBANK",
                cod: "CITI"
            }, {
                name: "DAEWOO BANK",
                cod: "DARO"
            }, {
                name: "EGNATIA BANK",
                cod: "EGNA"
            }, {
                name: "EXIMBANK",
                cod: "EXIM"
            }, {
                name: "EUROM BANK",
                cod: "DAFB"
            }, {
                name: "FINANS BANK",
                cod: "FNNB"
            }, {
                name: "FRANKFURT BUKAREST BANK",
                cod: "FRBU"
            }, {
                name: "GARANTI BANK",
                cod: "UGBI"
            }, {
                name: "HVB BANK",
                cod: "BACX"
            }, {
                name: "ING BANK",
                cod: "INGB"
            }, {
                name: "MINDBANK",
                cod: "MIND"
            }, {
                name: "MINISTERUL FINANTELOR PUBLICE",
                cod: "TREZ"
            }, {
                name: "MISR",
                cod: "MIRB"
            }, {
                name: "NOVA BANK",
                cod: "BCUN"
            }, {
                name: "PIRAEUS BANK",
                cod: "PIRB"
            }, {
                name: "RAIFFEISEN BANK",
                cod: "RZBR"
            }, {
                name: "ROMANIAN INTERNATIONAL BANK",
                cod: "ROIN"
            }, {
                name: "SAN PAOLO IMI BANK",
                cod: "WBAN"
            }, {
                name: "UNICREDIT ROMANIA",
                cod: "UNCR"
            }, {
                name: "VOLKSBANK",
                cod: "VBBU"
            }
        ];
    }
    AppComponent.prototype.changeIbanPrestator = function (newValue) {
        if (newValue.length >= 8) {
            var banca = this.banca.filter(function (b) { return b.cod.toLowerCase() === newValue.substring(4, 8).toLowerCase(); });
            if (banca.length) {
                this.factura.bancaPrestator = banca[0].name;
            }
        }
    };
    AppComponent.prototype.changeIbanBeneficiar = function (newValue) {
        if (newValue.length >= 8) {
            var banca = this.banca.filter(function (b) { return b.cod.toLowerCase() === newValue.substring(4, 8).toLowerCase(); });
            if (banca.length) {
                this.factura.bancaBeneficiar = banca[0].name;
            }
        }
    };
    AppComponent.prototype.changeCifPrestator = function (newValue) {
        if (newValue.length >= 3 && newValue.includes('RO')) {
            this.factura.tva = 19;
        }
    };
    Object.defineProperty(AppComponent.prototype, "total", {
        get: function () {
            var total = this.factura.pretUnitar * this.factura.cantitate;
            if (!this.factura.tva) {
                return total;
            }
            return ((this.factura.tva / 100 + 1) * total).toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onSubmit = function (f) {
        console.log('submitted', f);
        this.http.post('/form', f.form.value).toPromise();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map