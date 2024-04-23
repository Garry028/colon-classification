"use strict";

/** @type {import('sequelize-cli').Migration} */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      var getRandomHexDigit, generateUUID, mathematics, bibliography, libraryScience, physicalScience, physics, engineering, chemistry, technology, biology, geology, mining, botany, agriculture, zoology, animalHusbandry, medicine, pharmocognosy, usefulArts, spiritualExperienceAndMysticism, fineArts, linguistics, religion, philosophy, psychology, education, geography, history, politicalScience, economics, sociology, law, subjects, generateSeedSubjectData, seedSubjectData, bibliographyMapId, libraryScienceMapId, geometryMapId, mechanicsMapId, astronomyMapId, integerMapId, equationMapId, algebraMapId, differentialMapId, realVariableMapId, complexVariableMapId, propertiesOfMatterMapId, soundMapId, heatMapId, radiationMapId, electricityMapId, magnetismMapId, engineeringMapId, chemistryMapId, technologyMapId, biologyMapId, mineralogyMapId, petrologyMapId, economicGeologyMapId, miningMapId, botanyMapId, agricultureMapId, zoologyMapId, animalHusbandryMapId, medicineMapId, pharmacologyMapId, pharmacopoeiaMapId, pharmacyMapId, textilesMapId, ropeMakingMapId, spiritualExperienceMapId, townPlanningMapId, artitectureMapId, sculptureMapId, paintingMapId, musicMapId, linguisticsMapId, religionMapId, metaphysicsMapId, ethicsMapId, psychologyMapId, educationMapId, geographyMapId, historyMapId, politicalScienceMapId, economicsMapId, sociologyMapId, lawMapId, seedLibSciData, seedGeometryData, seedMechanicsData, seedAstronomyData, seedTheoryOfEquationData, seedHigherAlgebraData, seedDifferentialIntegralData, seedRealVariableData, seedComplexVariableData, seedPropertiesOfMatterData, seedSoundData, seedHeatData, seedRadiationData, seedElectricityData, seedMagnetismData, seedEngineeringData, seedChemistryData, seedTechnologyData, titlesBibiloData, titlesIntegerData, titlesLibSciData, titlesGeometryData, titlesMechanicsData, titlesAstronomyData, titlesTheoryOfEquationData, titlesHigherAlgebraData, titlesDifferentialIntegralData, titlesRealVariableData, titlesComplexVariableData, titlesPropertiesOfMatterData, titlesSoundData, titlesHeatData, titlesRadiationData, titlesElectricityData, titlesMagnetismData, titlesEngineeringData, titlesChemistryData, titlesTechnologyData;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            generateUUID = function _generateUUID() {
              var uuid = "";
              for (var i = 0; i < 32; i++) {
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                  uuid += "-";
                }
                uuid += getRandomHexDigit();
              }
              return uuid;
            };
            getRandomHexDigit = function _getRandomHexDigit() {
              return Math.floor(Math.random() * 16).toString(16);
            };
            mathematics = generateUUID();
            bibliography = generateUUID();
            libraryScience = generateUUID();
            physicalScience = generateUUID();
            physics = generateUUID();
            engineering = generateUUID();
            chemistry = generateUUID();
            technology = generateUUID();
            biology = generateUUID();
            geology = generateUUID();
            mining = generateUUID();
            botany = generateUUID();
            agriculture = generateUUID();
            zoology = generateUUID();
            animalHusbandry = generateUUID();
            medicine = generateUUID();
            pharmocognosy = generateUUID();
            usefulArts = generateUUID();
            spiritualExperienceAndMysticism = generateUUID();
            fineArts = generateUUID();
            linguistics = generateUUID();
            religion = generateUUID();
            philosophy = generateUUID();
            psychology = generateUUID();
            education = generateUUID();
            geography = generateUUID();
            history = generateUUID();
            politicalScience = generateUUID();
            economics = generateUUID();
            sociology = generateUUID();
            law = generateUUID(); // Create an array to hold the subjects and their UUIDs
            subjects = [{
              id: mathematics,
              classNumber: "B",
              subject: "mathematics"
            }, {
              id: bibliography,
              classNumber: "a",
              subject: "bibliography"
            }, {
              id: libraryScience,
              classNumber: "2",
              subject: "library science"
            }, {
              id: physicalScience,
              classNumber: "BZ",
              subject: "physical science"
            }, {
              id: physics,
              classNumber: "C",
              subject: "physics"
            }, {
              id: engineering,
              classNumber: "D",
              subject: "engineering"
            }, {
              id: chemistry,
              classNumber: "E",
              subject: "chemistry"
            }, {
              id: technology,
              classNumber: "F",
              subject: "technology"
            }, {
              id: biology,
              classNumber: "G",
              subject: "biology"
            }, {
              id: geology,
              classNumber: "H",
              subject: "geology"
            }, {
              id: mining,
              classNumber: "HZ",
              subject: "mining"
            }, {
              id: botany,
              classNumber: "I",
              subject: "botany"
            }, {
              id: agriculture,
              classNumber: "J",
              subject: "agriculture"
            }, {
              id: zoology,
              classNumber: "K",
              subject: "zoology"
            }, {
              id: animalHusbandry,
              classNumber: "KZ",
              subject: "animal husbandry"
            }, {
              id: medicine,
              classNumber: "L",
              subject: "medicine"
            }, {
              id: pharmocognosy,
              classNumber: "LX",
              subject: "pharmocognosy"
            }, {
              id: usefulArts,
              classNumber: "M",
              subject: "useful arts"
            }, {
              id: spiritualExperienceAndMysticism,
              classNumber: "(Delta)",
              subject: "spiritual experience and mysticism"
            }, {
              id: fineArts,
              classNumber: "N",
              subject: "fine arts"
            }, {
              id: linguistics,
              classNumber: "P",
              subject: "linguistics"
            }, {
              id: religion,
              classNumber: "Q",
              subject: "religion"
            }, {
              id: philosophy,
              classNumber: "R",
              subject: "philosophy"
            }, {
              id: psychology,
              classNumber: "S",
              subject: "psychology"
            }, {
              id: education,
              classNumber: "T",
              subject: "education"
            }, {
              id: geography,
              classNumber: "U",
              subject: "geography"
            }, {
              id: history,
              classNumber: "V",
              subject: "history"
            }, {
              id: politicalScience,
              classNumber: "W",
              subject: "political science"
            }, {
              id: economics,
              classNumber: "X",
              subject: "economics"
            }, {
              id: sociology,
              classNumber: "Y",
              subject: "sociology"
            }, {
              id: law,
              classNumber: "Z",
              subject: "law"
            }];
            generateSeedSubjectData = function generateSeedSubjectData() {
              return subjects.map(function (subject) {
                return {
                  id: subject.id,
                  classNumber: subject.classNumber,
                  subject: subject.subject,
                  createdAt: new Date(),
                  updatedAt: new Date()
                };
              });
            };
            seedSubjectData = generateSeedSubjectData();
            _context19.next = 38;
            return queryInterface.bulkInsert("subjects", seedSubjectData);
          case 38:
            bibliographyMapId = generateUUID();
            libraryScienceMapId = generateUUID();
            geometryMapId = generateUUID();
            mechanicsMapId = generateUUID();
            astronomyMapId = generateUUID();
            integerMapId = generateUUID();
            equationMapId = generateUUID();
            algebraMapId = generateUUID();
            differentialMapId = generateUUID();
            realVariableMapId = generateUUID();
            complexVariableMapId = generateUUID();
            propertiesOfMatterMapId = generateUUID();
            soundMapId = generateUUID();
            heatMapId = generateUUID();
            radiationMapId = generateUUID();
            electricityMapId = generateUUID();
            magnetismMapId = generateUUID();
            engineeringMapId = generateUUID();
            chemistryMapId = generateUUID();
            technologyMapId = generateUUID();
            biologyMapId = generateUUID();
            mineralogyMapId = generateUUID();
            petrologyMapId = generateUUID();
            economicGeologyMapId = generateUUID();
            miningMapId = generateUUID();
            botanyMapId = generateUUID();
            agricultureMapId = generateUUID();
            zoologyMapId = generateUUID();
            animalHusbandryMapId = generateUUID();
            medicineMapId = generateUUID();
            pharmacologyMapId = generateUUID();
            pharmacopoeiaMapId = generateUUID();
            pharmacyMapId = generateUUID();
            textilesMapId = generateUUID();
            ropeMakingMapId = generateUUID();
            spiritualExperienceMapId = generateUUID();
            townPlanningMapId = generateUUID();
            artitectureMapId = generateUUID();
            sculptureMapId = generateUUID();
            paintingMapId = generateUUID();
            musicMapId = generateUUID();
            linguisticsMapId = generateUUID();
            religionMapId = generateUUID();
            metaphysicsMapId = generateUUID();
            ethicsMapId = generateUUID();
            psychologyMapId = generateUUID();
            educationMapId = generateUUID();
            geographyMapId = generateUUID();
            historyMapId = generateUUID();
            politicalScienceMapId = generateUUID();
            economicsMapId = generateUUID();
            sociologyMapId = generateUUID();
            lawMapId = generateUUID();
            seedLibSciData = [{
              subject: "Translocal",
              foci: "P",
              classNumber: "1",
              belongsTo: libraryScienceMapId
            }, {
              subject: "World",
              foci: "P",
              classNumber: "11",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Nation",
              foci: "P",
              classNumber: "13",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Region",
              foci: "P",
              classNumber: "14",
              belongsTo: libraryScienceMapId
            }, {
              subject: "State",
              foci: "P",
              classNumber: "15",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Division",
              foci: "P",
              classNumber: "16",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Local",
              foci: "P",
              classNumber: "2",
              belongsTo: libraryScienceMapId
            }, {
              subject: "District",
              foci: "P",
              classNumber: "21",
              belongsTo: libraryScienceMapId
            }, {
              subject: "City",
              foci: "P",
              classNumber: "22",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Acadelmical",
              foci: "P",
              classNumber: "3",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Elementary school",
              foci: "P",
              classNumber: "31",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Secondary school",
              foci: "P",
              classNumber: "32",
              belongsTo: libraryScienceMapId
            }, {
              subject: "College",
              foci: "P",
              classNumber: "33",
              belongsTo: libraryScienceMapId
            }, {
              subject: "University",
              foci: "P",
              classNumber: "34",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Research",
              foci: "P",
              classNumber: "36",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Business",
              foci: "P",
              classNumber: "4",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Industry",
              foci: "P",
              classNumber: "42",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Newspaper office",
              foci: "P",
              classNumber: "44",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Commerce",
              foci: "P",
              classNumber: "45",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Government department",
              foci: "P",
              classNumber: "48",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Others by (SD) (Illustrative)",
              foci: "0",
              classNumber: "0",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Religious",
              foci: "P",
              classNumber: "4(Q)",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Insurance",
              foci: "P",
              classNumber: "4(X81)",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Subscription",
              foci: "P",
              classNumber: "5",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Special class",
              foci: "P",
              classNumber: "6",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Child",
              foci: "P",
              classNumber: "61",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Prisoner",
              foci: "P",
              classNumber: "63",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Hospital",
              foci: "P",
              classNumber: "64",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Woman",
              foci: "P",
              classNumber: "65",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Blind",
              foci: "P",
              classNumber: "68",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Seafarer",
              foci: "P",
              classNumber: "695",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Contact",
              foci: "P",
              classNumber: "95",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Private",
              foci: "P",
              classNumber: "97",
              belongsTo: libraryScienceMapId
            }, {
              subject: "By mode of production",
              foci: "M",
              classNumber: "1",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Tablet",
              foci: "M",
              classNumber: "11",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Manuscript",
              foci: "M",
              classNumber: "12",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Archive",
              foci: "M",
              classNumber: "12B",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Sound book",
              foci: "M",
              classNumber: "13",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Printed book",
              foci: "M",
              classNumber: "14",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Photo-reproduction",
              foci: "M",
              classNumber: "15",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Micro",
              foci: "M",
              classNumber: "151",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Film strip",
              foci: "M",
              classNumber: "1511",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Film roll",
              foci: "M",
              classNumber: "1512",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Photostat",
              foci: "M",
              classNumber: "152",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Map",
              foci: "M",
              classNumber: "17",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Raised type",
              foci: "M",
              classNumber: "18",
              belongsTo: libraryScienceMapId
            }, {
              subject: "By script",
              foci: "M",
              classNumber: "2",
              belongsTo: libraryScienceMapId
            }, {
              subject: "By language",
              foci: "M",
              classNumber: "3",
              belongsTo: libraryScienceMapId
            }, {
              subject: "By nature of publication",
              foci: "M",
              classNumber: "4",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Book (conventional)",
              foci: "M",
              classNumber: "43",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Newspaper",
              foci: "M",
              classNumber: "44",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Recreative",
              foci: "M",
              classNumber: "45",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Periodical",
              foci: "M",
              classNumber: "46",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Reference book",
              foci: "M",
              classNumber: "47",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Patent",
              foci: "M",
              classNumber: "48",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Thesis",
              foci: "M",
              classNumber: "494",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Not-written book",
              foci: "M",
              classNumber: "4994",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Book written but not existing",
              foci: "M",
              classNumber: "4995",
              belongsTo: libraryScienceMapId
            }, {
              subject: "By agency of production",
              foci: "M",
              classNumber: "5",
              belongsTo: libraryScienceMapId
            }, {
              subject: "University",
              foci: "M",
              classNumber: "54",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Government",
              foci: "M",
              classNumber: "55",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Private",
              foci: "M",
              classNumber: "58",
              belongsTo: libraryScienceMapId
            }, {
              subject: "By age of publication",
              foci: "M",
              classNumber: "6",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Old",
              foci: "M",
              classNumber: "61",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Current",
              foci: "M",
              classNumber: "66",
              belongsTo: libraryScienceMapId
            }, {
              subject: "By edition",
              foci: "M",
              classNumber: "7",
              belongsTo: libraryScienceMapId
            }, {
              subject: "First",
              foci: "M",
              classNumber: "71",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Proscribed",
              foci: "M",
              classNumber: "74",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Deluxe",
              foci: "M",
              classNumber: "75",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Autograph",
              foci: "M",
              classNumber: "77",
              belongsTo: libraryScienceMapId
            }, {
              subject: "By social group of readers",
              foci: "M",
              classNumber: "8",
              belongsTo: libraryScienceMapId
            }, {
              subject: "(To be divided as in Y Sociology)",
              foci: "0",
              classNumber: "0",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Translation",
              foci: "M",
              classNumber: "95",
              belongsTo: libraryScienceMapId
            }, {
              subject: "By size",
              foci: "M",
              classNumber: "991",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Oversize",
              foci: "M",
              classNumber: "9911",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Miniature",
              foci: "M",
              classNumber: "9912",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Pamphlet",
              foci: "M",
              classNumber: "9917",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Book selection",
              foci: "E",
              classNumber: "1",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Organisation",
              foci: "E",
              classNumber: "2",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Function",
              foci: "E",
              classNumber: "3",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Co-operation",
              foci: "E",
              classNumber: "4",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Technical treatment",
              foci: "E",
              classNumber: "5",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Classification",
              foci: "E",
              classNumber: "51",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Cataloguing",
              foci: "E",
              classNumber: "55",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Circulation",
              foci: "E",
              classNumber: "6",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Consultation",
              foci: "E",
              classNumber: "61",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Lending",
              foci: "E",
              classNumber: "62",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Reference service",
              foci: "E",
              classNumber: "7",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Administration",
              foci: "E",
              classNumber: "8",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Book Selection",
              foci: "E",
              classNumber: "81",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Source",
              foci: "E",
              classNumber: "811",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Indent",
              foci: "E",
              classNumber: "815",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Order",
              foci: "E",
              classNumber: "82",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Accession",
              foci: "E",
              classNumber: "84",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Preparation",
              foci: "E",
              classNumber: "85",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Maintenance",
              foci: "E",
              classNumber: "88",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Documentation",
              foci: "E",
              classNumber: "97",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Book selection",
              foci: "2P",
              classNumber: "1",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Organisation",
              foci: "2P",
              classNumber: "2",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Function",
              foci: "2P",
              classNumber: "3",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Co-operation",
              foci: "2P",
              classNumber: "4",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Technical treatment",
              foci: "2P",
              classNumber: "5",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Classification",
              foci: "2P",
              classNumber: "51",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Cataloguing",
              foci: "2P",
              classNumber: "55",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Circulation",
              foci: "2P",
              classNumber: "6",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Consultation",
              foci: "2P",
              classNumber: "61",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Lending",
              foci: "2P",
              classNumber: "62",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Reference service",
              foci: "2P",
              classNumber: "7",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Administration",
              foci: "2P",
              classNumber: "8",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Book Selection",
              foci: "2P",
              classNumber: "81",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Source",
              foci: "2P",
              classNumber: "811",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Indent",
              foci: "2P",
              classNumber: "815",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Order",
              foci: "2P",
              classNumber: "82",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Accession",
              foci: "2P",
              classNumber: "84",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Preparation",
              foci: "2P",
              classNumber: "85",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Maintenance",
              foci: "2P",
              classNumber: "88",
              belongsTo: libraryScienceMapId
            }, {
              subject: "Documentation",
              foci: "2P",
              classNumber: "97",
              belongsTo: libraryScienceMapId
            }];
            seedGeometryData = [
            // Geometry
            {
              subject: "Line",
              foci: "P",
              classNumber: "1",
              belongsTo: geometryMapId
            }, {
              subject: "Plane",
              foci: "P",
              classNumber: "2",
              belongsTo: geometryMapId
            }, {
              subject: "Configuration essentially made up of points and straight lines only",
              foci: "P",
              classNumber: "21",
              belongsTo: geometryMapId
            }, {
              subject: "Curve of the second degree",
              foci: "P",
              classNumber: "22",
              belongsTo: geometryMapId
            }, {
              subject: "Third",
              foci: "P",
              classNumber: "23",
              belongsTo: geometryMapId
            }, {
              subject: "Fourth",
              foci: "P",
              classNumber: "24",
              belongsTo: geometryMapId
            }, {
              subject: "Fifth",
              foci: "P",
              classNumber: "25",
              belongsTo: geometryMapId
            }, {
              subject: "Algebraic curve in general",
              foci: "P",
              classNumber: "27",
              belongsTo: geometryMapId
            }, {
              subject: "Transcendental curve",
              foci: "P",
              classNumber: "28",
              belongsTo: geometryMapId
            }, {
              subject: "Three dimensions",
              foci: "P",
              classNumber: "3",
              belongsTo: geometryMapId
            }, {
              subject: "Configuration essentially made up of points, straight lines and planes only",
              foci: "P",
              classNumber: "31",
              belongsTo: geometryMapId
            }, {
              subject: "Surface of the second degree",
              foci: "P",
              classNumber: "32",
              belongsTo: geometryMapId
            }, {
              subject: "Cubic",
              foci: "P",
              classNumber: "33",
              belongsTo: geometryMapId
            }, {
              subject: "Quartic",
              foci: "P",
              classNumber: "34",
              belongsTo: geometryMapId
            }, {
              subject: "Curve in space",
              foci: "P",
              classNumber: "36",
              belongsTo: geometryMapId
            }, {
              subject: "Knot",
              foci: "39M",
              classNumber: "",
              belongsTo: geometryMapId
            }, {
              subject: "Four dimensions",
              foci: "P",
              classNumber: "4",
              belongsTo: geometryMapId
            }, {
              subject: "Five dimensions",
              foci: "P",
              classNumber: "5",
              belongsTo: geometryMapId
            }, {
              subject: "n dimensions",
              foci: "P",
              classNumber: "7",
              belongsTo: geometryMapId
            }, {
              subject: "Enumerative geometry",
              foci: "E",
              classNumber: "1",
              belongsTo: geometryMapId
            }, {
              subject: "Algebraic",
              foci: "E",
              classNumber: "2",
              belongsTo: geometryMapId
            }, {
              subject: "Elementary coordinate",
              foci: "E",
              classNumber: "23",
              belongsTo: geometryMapId
            }, {
              subject: "With the use of higher algebra",
              foci: "E",
              classNumber: "25",
              belongsTo: geometryMapId
            }, {
              subject: "Differential",
              foci: "E",
              classNumber: "3",
              belongsTo: geometryMapId
            }, {
              subject: "Infinitesimal",
              foci: "E",
              classNumber: "32",
              belongsTo: geometryMapId
            }, {
              subject: "With the aid of vectors",
              foci: "E",
              classNumber: "34",
              belongsTo: geometryMapId
            }, {
              subject: "Higher differential",
              foci: "E",
              classNumber: "35",
              belongsTo: geometryMapId
            }, {
              subject: "Practical",
              foci: "E",
              classNumber: "4",
              belongsTo: geometryMapId
            }, {
              subject: "Descriptive",
              foci: "E",
              classNumber: "5",
              belongsTo: geometryMapId
            }, {
              subject: "Pure",
              foci: "E",
              classNumber: "6",
              belongsTo: geometryMapId
            }, {
              subject: "Projective including differential projective",
              foci: "E",
              classNumber: "7",
              belongsTo: geometryMapId
            }, {
              subject: "Foundation",
              foci: "E",
              classNumber: "91",
              belongsTo: geometryMapId
            }, {
              subject: "Enumerative geometry",
              foci: "2P",
              classNumber: "1",
              belongsTo: geometryMapId
            }, {
              subject: "Algebraic",
              foci: "2P",
              classNumber: "2",
              belongsTo: geometryMapId
            }, {
              subject: "Elementary coordinate",
              foci: "2P",
              classNumber: "23",
              belongsTo: geometryMapId
            }, {
              subject: "With the use of higher algebra",
              foci: "2P",
              classNumber: "25",
              belongsTo: geometryMapId
            }, {
              subject: "Differential",
              foci: "2P",
              classNumber: "3",
              belongsTo: geometryMapId
            }, {
              subject: "Infinitesimal",
              foci: "2P",
              classNumber: "32",
              belongsTo: geometryMapId
            }, {
              subject: "With the aid of vectors",
              foci: "2P",
              classNumber: "34",
              belongsTo: geometryMapId
            }, {
              subject: "Higher differential",
              foci: "2P",
              classNumber: "35",
              belongsTo: geometryMapId
            }, {
              subject: "Practical",
              foci: "2P",
              classNumber: "4",
              belongsTo: geometryMapId
            }, {
              subject: "Descriptive",
              foci: "2P",
              classNumber: "5",
              belongsTo: geometryMapId
            }, {
              subject: "Pure",
              foci: "2P",
              classNumber: "6",
              belongsTo: geometryMapId
            }, {
              subject: "Projective including differential projective",
              foci: "2P",
              classNumber: "7",
              belongsTo: geometryMapId
            }, {
              subject: "Foundation",
              foci: "2P",
              classNumber: "91",
              belongsTo: geometryMapId
            }];
            seedMechanicsData = [{
              subject: "Solid",
              foci: "P",
              classNumber: "1",
              belongsTo: mechanicsMapId
            }, {
              subject: "Particle",
              foci: "P",
              classNumber: "11",
              belongsTo: mechanicsMapId
            }, {
              subject: "System of particles (chain)",
              foci: "P",
              classNumber: "117",
              belongsTo: mechanicsMapId
            }, {
              subject: "Surface",
              foci: "P",
              classNumber: "12",
              belongsTo: mechanicsMapId
            }, {
              subject: "System of surface (flexible surface)",
              foci: "P",
              classNumber: "127",
              belongsTo: mechanicsMapId
            }, {
              subject: "Rigid body",
              foci: "P",
              classNumber: "13",
              belongsTo: mechanicsMapId
            }, {
              subject: "System of rigid body (jointed frame)",
              foci: "P",
              classNumber: "137",
              belongsTo: mechanicsMapId
            }, {
              subject: "Elastic body",
              foci: "P",
              classNumber: "15",
              belongsTo: mechanicsMapId
            }, {
              subject: "Special system",
              foci: "P",
              classNumber: "19",
              belongsTo: mechanicsMapId
            }, {
              subject: "Top, Gyroscope",
              foci: "P",
              classNumber: "192",
              belongsTo: mechanicsMapId
            }, {
              subject: "Ballistic",
              foci: "P",
              classNumber: "193",
              belongsTo: mechanicsMapId
            }, {
              subject: "Pendulum",
              foci: "P",
              classNumber: "196",
              belongsTo: mechanicsMapId
            }, {
              subject: "Liquid",
              foci: "P",
              classNumber: "5",
              belongsTo: mechanicsMapId
            }, {
              subject: "Perfect",
              foci: "P",
              classNumber: "51",
              belongsTo: mechanicsMapId
            }, {
              subject: "Compressible",
              foci: "P",
              classNumber: "55",
              belongsTo: mechanicsMapId
            }, {
              subject: "Viscous",
              foci: "P",
              classNumber: "56",
              belongsTo: mechanicsMapId
            }, {
              subject: "Gas",
              foci: "P",
              classNumber: "8",
              belongsTo: mechanicsMapId
            }, {
              subject: "Fundamental principle",
              foci: "E",
              classNumber: "1",
              belongsTo: mechanicsMapId
            }, {
              subject: "Inertia",
              foci: "E",
              classNumber: "11",
              belongsTo: mechanicsMapId
            }, {
              subject: "Centre",
              foci: "E",
              classNumber: "111",
              belongsTo: mechanicsMapId
            }, {
              subject: "Moment",
              foci: "E",
              classNumber: "112",
              belongsTo: mechanicsMapId
            }, {
              subject: "D Alemberts",
              foci: "E",
              classNumber: "12",
              belongsTo: mechanicsMapId
            }, {
              subject: "Hamiltons or Least action",
              foci: "E",
              classNumber: "13",
              belongsTo: mechanicsMapId
            }, {
              subject: "Archimedes",
              foci: "E",
              classNumber: "15",
              belongsTo: mechanicsMapId
            }, {
              subject: "Centre of pressure",
              foci: "E",
              classNumber: "152",
              belongsTo: mechanicsMapId
            }, {
              subject: "Virtual velocity",
              foci: "E",
              classNumber: "162",
              belongsTo: mechanicsMapId
            }, {
              subject: "Vitual work",
              foci: "E",
              classNumber: "163",
              belongsTo: mechanicsMapId
            }, {
              subject: "Static",
              foci: "E",
              classNumber: "2",
              belongsTo: mechanicsMapId
            }, {
              subject: "Floating body",
              foci: "E",
              classNumber: "291",
              belongsTo: mechanicsMapId
            }, {
              subject: "Motion, Dynamics",
              foci: "E",
              classNumber: "3",
              belongsTo: mechanicsMapId
            }, {
              subject: "Kinematic",
              foci: "E",
              classNumber: "31",
              belongsTo: mechanicsMapId
            }, {
              subject: "Kinetics",
              foci: "E",
              classNumber: "32",
              belongsTo: mechanicsMapId
            }, {
              subject: "Single force or Central force",
              foci: "E",
              classNumber: "321",
              belongsTo: mechanicsMapId
            }, {
              subject: "Multiple force",
              foci: "E",
              classNumber: "322",
              belongsTo: mechanicsMapId
            }, {
              subject: "Impulse",
              foci: "E",
              classNumber: "324",
              belongsTo: mechanicsMapId
            }, {
              subject: "Constrained motion",
              foci: "E",
              classNumber: "34",
              belongsTo: mechanicsMapId
            }, {
              subject: "Irrotational",
              foci: "E",
              classNumber: "35",
              belongsTo: mechanicsMapId
            }, {
              subject: "Streamline",
              foci: "E",
              classNumber: "351",
              belongsTo: mechanicsMapId
            }, {
              subject: "Turbulent",
              foci: "E",
              classNumber: "353",
              belongsTo: mechanicsMapId
            }, {
              subject: "Discontinuous",
              foci: "E",
              classNumber: "354",
              belongsTo: mechanicsMapId
            }, {
              subject: "Rotational",
              foci: "E",
              classNumber: "39",
              belongsTo: mechanicsMapId
            }, {
              subject: "Motion of solid (in liquid and gas)",
              foci: "E",
              classNumber: "391",
              belongsTo: mechanicsMapId
            }, {
              subject: "Vibration",
              foci: "E",
              classNumber: "5",
              belongsTo: mechanicsMapId
            }, {
              subject: "Wave",
              foci: "E",
              classNumber: "55",
              belongsTo: mechanicsMapId
            }, {
              subject: "Tautochrone",
              foci: "E",
              classNumber: "61",
              belongsTo: mechanicsMapId
            }, {
              subject: "Brahystochrone",
              foci: "E",
              classNumber: "63",
              belongsTo: mechanicsMapId
            }, {
              subject: "Isochronism",
              foci: "E",
              classNumber: "66",
              belongsTo: mechanicsMapId
            }, {
              subject: "Fundamental principle",
              foci: "2P",
              classNumber: "1",
              belongsTo: mechanicsMapId
            }, {
              subject: "Inertia",
              foci: "2P",
              classNumber: "11",
              belongsTo: mechanicsMapId
            }, {
              subject: "Centre",
              foci: "2P",
              classNumber: "111",
              belongsTo: mechanicsMapId
            }, {
              subject: "Moment",
              foci: "2P",
              classNumber: "112",
              belongsTo: mechanicsMapId
            }, {
              subject: "D Alemberts",
              foci: "2P",
              classNumber: "12",
              belongsTo: mechanicsMapId
            }, {
              subject: "Hamiltons or Least action",
              foci: "2P",
              classNumber: "13",
              belongsTo: mechanicsMapId
            }, {
              subject: "Archimedes",
              foci: "2P",
              classNumber: "15",
              belongsTo: mechanicsMapId
            }, {
              subject: "Centre of pressure",
              foci: "2P",
              classNumber: "152",
              belongsTo: mechanicsMapId
            }, {
              subject: "Virtual velocity",
              foci: "2P",
              classNumber: "162",
              belongsTo: mechanicsMapId
            }, {
              subject: "Vitual work",
              foci: "2P",
              classNumber: "163",
              belongsTo: mechanicsMapId
            }, {
              subject: "Static",
              foci: "2P",
              classNumber: "2",
              belongsTo: mechanicsMapId
            }, {
              subject: "Floating body",
              foci: "2P",
              classNumber: "291",
              belongsTo: mechanicsMapId
            }, {
              subject: "Motion, Dynamics",
              foci: "2P",
              classNumber: "3",
              belongsTo: mechanicsMapId
            }, {
              subject: "Kinematic",
              foci: "2P",
              classNumber: "31",
              belongsTo: mechanicsMapId
            }, {
              subject: "Kinetics",
              foci: "2P",
              classNumber: "32",
              belongsTo: mechanicsMapId
            }, {
              subject: "Single force or Central force",
              foci: "2P",
              classNumber: "321",
              belongsTo: mechanicsMapId
            }, {
              subject: "Multiple force",
              foci: "2P",
              classNumber: "322",
              belongsTo: mechanicsMapId
            }, {
              subject: "Impulse",
              foci: "2P",
              classNumber: "324",
              belongsTo: mechanicsMapId
            }, {
              subject: "Constrained motion",
              foci: "2P",
              classNumber: "34",
              belongsTo: mechanicsMapId
            }, {
              subject: "Irrotational",
              foci: "2P",
              classNumber: "35",
              belongsTo: mechanicsMapId
            }, {
              subject: "Streamline",
              foci: "2P",
              classNumber: "351",
              belongsTo: mechanicsMapId
            }, {
              subject: "Turbulent",
              foci: "2P",
              classNumber: "353",
              belongsTo: mechanicsMapId
            }, {
              subject: "Discontinuous",
              foci: "2P",
              classNumber: "354",
              belongsTo: mechanicsMapId
            }, {
              subject: "Rotational",
              foci: "2P",
              classNumber: "39",
              belongsTo: mechanicsMapId
            }, {
              subject: "Motion of solid (in liquid and gas)",
              foci: "2P",
              classNumber: "391",
              belongsTo: mechanicsMapId
            }, {
              subject: "Vibration",
              foci: "2P",
              classNumber: "5",
              belongsTo: mechanicsMapId
            }, {
              subject: "Wave",
              foci: "2P",
              classNumber: "55",
              belongsTo: mechanicsMapId
            }, {
              subject: "Tautochrone",
              foci: "2P",
              classNumber: "61",
              belongsTo: mechanicsMapId
            }, {
              subject: "Brahystochrone",
              foci: "2P",
              classNumber: "63",
              belongsTo: mechanicsMapId
            }, {
              subject: "Isochronism",
              foci: "2P",
              classNumber: "66",
              belongsTo: mechanicsMapId
            }];
            seedAstronomyData = [{
              subject: "Earth",
              foci: "P",
              classNumber: "1",
              belongsTo: astronomyMapId
            }, {
              subject: "Moon",
              foci: "P",
              classNumber: "2",
              belongsTo: astronomyMapId
            }, {
              subject: "Sun",
              foci: "P",
              classNumber: "3",
              belongsTo: astronomyMapId
            }, {
              subject: "Planet",
              foci: "P",
              classNumber: "4",
              belongsTo: astronomyMapId
            }, {
              subject: "Mercury and infra Mercurial",
              foci: "P",
              classNumber: "41",
              belongsTo: astronomyMapId
            }, {
              subject: "Venus",
              foci: "P",
              classNumber: "42",
              belongsTo: astronomyMapId
            }, {
              subject: "Mars",
              foci: "P",
              classNumber: "43",
              belongsTo: astronomyMapId
            }, {
              subject: "Asteroid",
              foci: "P",
              classNumber: "44",
              belongsTo: astronomyMapId
            }, {
              subject: "Jupiter",
              foci: "P",
              classNumber: "45",
              belongsTo: astronomyMapId
            }, {
              subject: "Saturn",
              foci: "P",
              classNumber: "46",
              belongsTo: astronomyMapId
            }, {
              subject: "Uranus",
              foci: "P",
              classNumber: "47",
              belongsTo: astronomyMapId
            }, {
              subject: "Neptune",
              foci: "P",
              classNumber: "48",
              belongsTo: astronomyMapId
            }, {
              subject: "Trans Neptunian",
              foci: "P",
              classNumber: "49",
              belongsTo: astronomyMapId
            }, {
              subject: "Meteor and comet",
              foci: "P",
              classNumber: "5",
              belongsTo: astronomyMapId
            }, {
              subject: "Meteor and comet",
              foci: "P",
              classNumber: "51",
              belongsTo: astronomyMapId
            }, {
              subject: "Comet",
              foci: "P",
              classNumber: "52",
              belongsTo: astronomyMapId
            }, {
              subject: "Zodiacal light",
              foci: "P",
              classNumber: "55",
              belongsTo: astronomyMapId
            }, {
              subject: "Star",
              foci: "P",
              classNumber: "6",
              belongsTo: astronomyMapId
            }, {
              subject: "Constellation",
              foci: "P",
              classNumber: "61",
              belongsTo: astronomyMapId
            }, {
              subject: "Double",
              foci: "P",
              classNumber: "62",
              belongsTo: astronomyMapId
            }, {
              subject: "Multiple",
              foci: "P",
              classNumber: "63",
              belongsTo: astronomyMapId
            }, {
              subject: "Cluster or Nebulae",
              foci: "P",
              classNumber: "64",
              belongsTo: astronomyMapId
            }, {
              subject: "Milky way",
              foci: "P",
              classNumber: "641",
              belongsTo: astronomyMapId
            }, {
              subject: "Planetary system",
              foci: "P",
              classNumber: "7",
              belongsTo: astronomyMapId
            }, {
              subject: "Satellite",
              foci: "P",
              classNumber: "78",
              belongsTo: astronomyMapId
            }, {
              subject: "Artificial",
              foci: "P",
              classNumber: "7894",
              belongsTo: astronomyMapId
            }, {
              subject: "Chronology",
              foci: "E",
              classNumber: "1",
              belongsTo: astronomyMapId
            }, {
              subject: "Year",
              foci: "E",
              classNumber: "11",
              belongsTo: astronomyMapId
            }, {
              subject: "Lunar",
              foci: "E",
              classNumber: "112",
              belongsTo: astronomyMapId
            }, {
              subject: "Solar",
              foci: "E",
              classNumber: "113",
              belongsTo: astronomyMapId
            }, {
              subject: "Month",
              foci: "E",
              classNumber: "12",
              belongsTo: astronomyMapId
            }, {
              subject: "Lunar",
              foci: "E",
              classNumber: "122",
              belongsTo: astronomyMapId
            }, {
              subject: "Solar",
              foci: "E",
              classNumber: "123",
              belongsTo: astronomyMapId
            }, {
              subject: "Week",
              foci: "E",
              classNumber: "13",
              belongsTo: astronomyMapId
            }, {
              subject: "Day",
              foci: "E",
              classNumber: "14",
              belongsTo: astronomyMapId
            }, {
              subject: "Lunar",
              foci: "E",
              classNumber: "142",
              belongsTo: astronomyMapId
            }, {
              subject: "Solar",
              foci: "E",
              classNumber: "143",
              belongsTo: astronomyMapId
            }, {
              subject: "True solar",
              foci: "E",
              classNumber: "1431",
              belongsTo: astronomyMapId
            }, {
              subject: "Mean solar",
              foci: "E",
              classNumber: "1432",
              belongsTo: astronomyMapId
            }, {
              subject: "Equation of time",
              foci: "E",
              classNumber: "1435",
              belongsTo: astronomyMapId
            }, {
              subject: "Sidereal day",
              foci: "E",
              classNumber: "146",
              belongsTo: astronomyMapId
            }, {
              subject: "Subdivision of day",
              foci: "E",
              classNumber: "15",
              belongsTo: astronomyMapId
            }, {
              subject: "Time reckoning",
              foci: "E",
              classNumber: "16",
              belongsTo: astronomyMapId
            }, {
              subject: "Sideral time",
              foci: "E",
              classNumber: "161",
              belongsTo: astronomyMapId
            }, {
              subject: "Local",
              foci: "E",
              classNumber: "162",
              belongsTo: astronomyMapId
            }, {
              subject: "Standard",
              foci: "E",
              classNumber: "165",
              belongsTo: astronomyMapId
            }, {
              subject: "Summer",
              foci: "E",
              classNumber: "1652",
              belongsTo: astronomyMapId
            }, {
              subject: "Calendar",
              foci: "E",
              classNumber: "17",
              belongsTo: astronomyMapId
            }, {
              subject: "Era",
              foci: "E",
              classNumber: "18",
              belongsTo: astronomyMapId
            }, {
              subject: "Duration of daylight",
              foci: "E",
              classNumber: "194",
              belongsTo: astronomyMapId
            }, {
              subject: "Geodetic astronomy",
              foci: "E",
              classNumber: "2",
              belongsTo: astronomyMapId
            }, {
              subject: "Geographical position",
              foci: "E",
              classNumber: "21",
              belongsTo: astronomyMapId
            }, {
              subject: "Meridian",
              foci: "E",
              classNumber: "22",
              belongsTo: astronomyMapId
            }, {
              subject: "Longitude",
              foci: "E",
              classNumber: "23",
              belongsTo: astronomyMapId
            }, {
              subject: "Latitude",
              foci: "E",
              classNumber: "24",
              belongsTo: astronomyMapId
            }, {
              subject: "Spherical astronomy",
              foci: "E",
              classNumber: "5",
              belongsTo: astronomyMapId
            }, {
              subject: "Celestial sphere (coordinate)",
              foci: "E",
              classNumber: "51",
              belongsTo: astronomyMapId
            }, {
              subject: "Right ascension",
              foci: "E",
              classNumber: "513",
              belongsTo: astronomyMapId
            }, {
              subject: "Declination",
              foci: "E",
              classNumber: "514",
              belongsTo: astronomyMapId
            }, {
              subject: "Reduction to centre of earth",
              foci: "E",
              classNumber: "52",
              belongsTo: astronomyMapId
            }, {
              subject: "Refraction",
              foci: "E",
              classNumber: "521",
              belongsTo: astronomyMapId
            }, {
              subject: "Dip of horizen",
              foci: "E",
              classNumber: "5212",
              belongsTo: astronomyMapId
            }, {
              subject: "Twilight",
              foci: "E",
              classNumber: "5215",
              belongsTo: astronomyMapId
            }, {
              subject: "Parallax",
              foci: "E",
              classNumber: "522",
              belongsTo: astronomyMapId
            }, {
              subject: "Correction for movement of earth",
              foci: "E",
              classNumber: "53",
              belongsTo: astronomyMapId
            }, {
              subject: "Aberration",
              foci: "E",
              classNumber: "531",
              belongsTo: astronomyMapId
            }, {
              subject: "Annual parallax",
              foci: "E",
              classNumber: "532",
              belongsTo: astronomyMapId
            }, {
              subject: "Star reduction",
              foci: "E",
              classNumber: "535",
              belongsTo: astronomyMapId
            }, {
              subject: "Position of the pole",
              foci: "E",
              classNumber: "55",
              belongsTo: astronomyMapId
            }, {
              subject: "Ecliptic",
              foci: "E",
              classNumber: "56",
              belongsTo: astronomyMapId
            }, {
              subject: "Longitude",
              foci: "E",
              classNumber: "563",
              belongsTo: astronomyMapId
            }, {
              subject: "Latitude",
              foci: "E",
              classNumber: "564",
              belongsTo: astronomyMapId
            }, {
              subject: "Eclipse",
              foci: "E",
              classNumber: "57",
              belongsTo: astronomyMapId
            }, {
              subject: "Occultation",
              foci: "E",
              classNumber: "575",
              belongsTo: astronomyMapId
            }, {
              subject: "Transit",
              foci: "E",
              classNumber: "578",
              belongsTo: astronomyMapId
            }, {
              subject: "Calculation of ephimerides",
              foci: "E",
              classNumber: "58",
              belongsTo: astronomyMapId
            }, {
              subject: "Physical astronomy (astrophysics)",
              foci: "E",
              classNumber: "6",
              belongsTo: astronomyMapId
            }, {
              subject: "Position",
              foci: "E",
              classNumber: "61",
              belongsTo: astronomyMapId
            }, {
              subject: "Movement",
              foci: "E",
              classNumber: "611",
              belongsTo: astronomyMapId
            }, {
              subject: "Constant",
              foci: "E",
              classNumber: "62",
              belongsTo: astronomyMapId
            }, {
              subject: "Dimesion (figure)",
              foci: "E",
              classNumber: "621",
              belongsTo: astronomyMapId
            }, {
              subject: "Mass",
              foci: "E",
              classNumber: "622",
              belongsTo: astronomyMapId
            }, {
              subject: "Density",
              foci: "E",
              classNumber: "623",
              belongsTo: astronomyMapId
            }, {
              subject: "Distance",
              foci: "E",
              classNumber: "624",
              belongsTo: astronomyMapId
            }, {
              subject: "Rotation (surface)",
              foci: "E",
              classNumber: "63",
              belongsTo: astronomyMapId
            }, {
              subject: "Rotation",
              foci: "E",
              classNumber: "631",
              belongsTo: astronomyMapId
            }, {
              subject: "Surface",
              foci: "E",
              classNumber: "635",
              belongsTo: astronomyMapId
            }, {
              subject: "Atmosphere",
              foci: "E",
              classNumber: "6358",
              belongsTo: astronomyMapId
            }, {
              subject: "Temperature",
              foci: "E",
              classNumber: "642",
              belongsTo: astronomyMapId
            }, {
              subject: "Radiation",
              foci: "E",
              classNumber: "643",
              belongsTo: astronomyMapId
            }, {
              subject: "Brightness",
              foci: "E",
              classNumber: "652",
              belongsTo: astronomyMapId
            }, {
              subject: "Spectroscopy",
              foci: "E",
              classNumber: "653",
              belongsTo: astronomyMapId
            }, {
              subject: "Age",
              foci: "E",
              classNumber: "67",
              belongsTo: astronomyMapId
            }, {
              subject: "Constitution",
              foci: "E",
              classNumber: "68",
              belongsTo: astronomyMapId
            }, {
              subject: "Theoretical astronomy (celestial mechanics)",
              foci: "E",
              classNumber: "7",
              belongsTo: astronomyMapId
            }, {
              subject: "Orbit",
              foci: "E",
              classNumber: "72",
              belongsTo: astronomyMapId
            }, {
              subject: "Problem of three bodies",
              foci: "E",
              classNumber: "73",
              belongsTo: astronomyMapId
            }, {
              subject: "Perturbation (planetary theory)",
              foci: "E",
              classNumber: "74",
              belongsTo: astronomyMapId
            }, {
              subject: "Perturbation, lunar theory",
              foci: "E",
              classNumber: "75",
              belongsTo: astronomyMapId
            }, {
              subject: "Rotation (figure of equilibrium)",
              foci: "E",
              classNumber: "76",
              belongsTo: astronomyMapId
            }, {
              subject: "Perturbed rotation",
              foci: "E",
              classNumber: "77",
              belongsTo: astronomyMapId
            }, {
              subject: "Tide",
              foci: "E",
              classNumber: "78",
              belongsTo: astronomyMapId
            }, {
              subject: "Cosmology",
              foci: "E",
              classNumber: "8",
              belongsTo: astronomyMapId
            }, {
              subject: "Radio astronomy",
              foci: "E",
              classNumber: "95",
              belongsTo: astronomyMapId
            }, {
              subject: "Cosmic ecology",
              foci: "E",
              classNumber: "995",
              belongsTo: astronomyMapId
            }];
            seedTheoryOfEquationData = [{
              subject: "Simple (Linear)",
              foci: "P",
              classNumber: "1",
              belongsTo: equationMapId
            }, {
              subject: "Quadratic",
              foci: "P",
              classNumber: "2",
              belongsTo: equationMapId
            }, {
              subject: "Cubic",
              foci: "P",
              classNumber: "3",
              belongsTo: equationMapId
            }, {
              subject: "Biquadratic",
              foci: "P",
              classNumber: "4",
              belongsTo: equationMapId
            }, {
              subject: "Simultaneous",
              foci: "P",
              classNumber: "5",
              belongsTo: equationMapId
            }, {
              subject: "nth degree",
              foci: "P",
              classNumber: "7",
              belongsTo: equationMapId
            }, {
              subject: "Transcedental",
              foci: "P",
              classNumber: "8",
              belongsTo: equationMapId
            }, {
              subject: "Special",
              foci: "P",
              classNumber: "9",
              belongsTo: equationMapId
            }, {
              subject: "Abelian equation",
              foci: "P",
              classNumber: "9M",
              belongsTo: equationMapId
            }, {
              subject: "Sylow equation",
              foci: "P",
              classNumber: "9M7",
              belongsTo: equationMapId
            }, {
              subject: "Numerical solution",
              foci: "E",
              classNumber: "1",
              belongsTo: equationMapId
            }, {
              subject: "Symmetric function",
              foci: "E",
              classNumber: "3",
              belongsTo: equationMapId
            }, {
              subject: "Elimination, Resultant",
              foci: "E",
              classNumber: "4",
              belongsTo: equationMapId
            }, {
              subject: "FORMAL SOLUTION",
              foci: "E",
              classNumber: "5",
              belongsTo: equationMapId
            }, {
              subject: "Graphical solution",
              foci: "E",
              classNumber: "6",
              belongsTo: equationMapId
            }, {
              subject: "Existence of solution (Galois theory)",
              foci: "E",
              classNumber: "7",
              belongsTo: equationMapId
            }];
            seedHigherAlgebraData = [{
              subject: "Binary",
              foci: "P",
              classNumber: "2",
              belongsTo: algebraMapId
            }, {
              subject: "Ternary",
              foci: "P",
              classNumber: "3",
              belongsTo: algebraMapId
            }, {
              subject: "Quaternary",
              foci: "P",
              classNumber: "4",
              belongsTo: algebraMapId
            }, {
              subject: "n nary",
              foci: "P",
              classNumber: "7",
              belongsTo: algebraMapId
            }, {
              subject: "Linear",
              foci: "P2",
              classNumber: "1",
              belongsTo: algebraMapId
            }, {
              subject: "Quadratic",
              foci: "P2",
              classNumber: "2",
              belongsTo: algebraMapId
            }, {
              subject: "Cubic",
              foci: "P2",
              classNumber: "3",
              belongsTo: algebraMapId
            }, {
              subject: "nth degree",
              foci: "P2",
              classNumber: "7",
              belongsTo: algebraMapId
            }, {
              subject: "Linear transformation",
              foci: "E",
              classNumber: "1",
              belongsTo: algebraMapId
            }, {
              subject: "Special invariant",
              foci: "E",
              classNumber: "18",
              belongsTo: algebraMapId
            }, {
              subject: "Quadratic transformation",
              foci: "E",
              classNumber: "2",
              belongsTo: algebraMapId
            }, {
              subject: "Special invariant",
              foci: "E",
              classNumber: "28",
              belongsTo: algebraMapId
            }, {
              subject: "Cubic transformation",
              foci: "E",
              classNumber: "3",
              belongsTo: algebraMapId
            }, {
              subject: "Special invariant",
              foci: "E",
              classNumber: "38",
              belongsTo: algebraMapId
            }, {
              subject: "n ic transformation",
              foci: "E",
              classNumber: "7",
              belongsTo: algebraMapId
            }, {
              subject: "Special invariant",
              foci: "E",
              classNumber: "78",
              belongsTo: algebraMapId
            }, {
              subject: "Special transformation",
              foci: "E",
              classNumber: "8",
              belongsTo: algebraMapId
            }, {
              subject: "Cremona transformation",
              foci: "E",
              classNumber: "8M",
              belongsTo: algebraMapId
            }, {
              subject: "Linear transformation",
              foci: "2P",
              classNumber: "1",
              belongsTo: algebraMapId
            }, {
              subject: "Special invariant",
              foci: "2P",
              classNumber: "18",
              belongsTo: algebraMapId
            }, {
              subject: "Quadratic transformation",
              foci: "2P",
              classNumber: "2",
              belongsTo: algebraMapId
            }, {
              subject: "Special invariant",
              foci: "2P",
              classNumber: "28",
              belongsTo: algebraMapId
            }, {
              subject: "Cubic transformation",
              foci: "2P",
              classNumber: "3",
              belongsTo: algebraMapId
            }, {
              subject: "Special invariant",
              foci: "2P",
              classNumber: "38",
              belongsTo: algebraMapId
            }, {
              subject: "n ic transformation",
              foci: "2P",
              classNumber: "7",
              belongsTo: algebraMapId
            }, {
              subject: "Special invariant",
              foci: "2P",
              classNumber: "78",
              belongsTo: algebraMapId
            }, {
              subject: "Special transformation",
              foci: "2P",
              classNumber: "8",
              belongsTo: algebraMapId
            }, {
              subject: "Cremona transformation",
              foci: "2P",
              classNumber: "8M",
              belongsTo: algebraMapId
            }];
            seedDifferentialIntegralData = [{
              subject: "Ordinary",
              foci: "P",
              classNumber: "1",
              belongsTo: differentialMapId
            }, {
              subject: "Simultaneous",
              foci: "P",
              classNumber: "2",
              belongsTo: differentialMapId
            }, {
              subject: "Total differential",
              foci: "P",
              classNumber: "3",
              belongsTo: differentialMapId
            }, {
              subject: "Partial",
              foci: "P",
              classNumber: "4",
              belongsTo: differentialMapId
            }, {
              subject: "Integral",
              foci: "P",
              classNumber: "5",
              belongsTo: differentialMapId
            }, {
              subject: "Linear",
              foci: "P2",
              classNumber: "1",
              belongsTo: differentialMapId
            }, {
              subject: "Quadratic",
              foci: "P2",
              classNumber: "2",
              belongsTo: differentialMapId
            }, {
              subject: "Cubic",
              foci: "P2",
              classNumber: "3",
              belongsTo: differentialMapId
            }, {
              subject: "Quartic",
              foci: "P2",
              classNumber: "4",
              belongsTo: differentialMapId
            }, {
              subject: "Quintic",
              foci: "P2",
              classNumber: "5",
              belongsTo: differentialMapId
            }, {
              subject: "Sextic",
              foci: "P2",
              classNumber: "6",
              belongsTo: differentialMapId
            }, {
              subject: "nth degree",
              foci: "P2",
              classNumber: "7",
              belongsTo: differentialMapId
            }, {
              subject: "First order",
              foci: "P3",
              classNumber: "1",
              belongsTo: differentialMapId
            }, {
              subject: "Second",
              foci: "P3",
              classNumber: "2",
              belongsTo: differentialMapId
            }, {
              subject: "Third",
              foci: "P3",
              classNumber: "3",
              belongsTo: differentialMapId
            }, {
              subject: "Fourth",
              foci: "P3",
              classNumber: "4",
              belongsTo: differentialMapId
            }, {
              subject: "Fifth",
              foci: "P3",
              classNumber: "5",
              belongsTo: differentialMapId
            }, {
              subject: "Sixth",
              foci: "P3",
              classNumber: "6",
              belongsTo: differentialMapId
            }, {
              subject: "nth",
              foci: "P3",
              classNumber: "7",
              belongsTo: differentialMapId
            }, {
              subject: "Numerical solution",
              foci: "E",
              classNumber: "1",
              belongsTo: differentialMapId
            }, {
              subject: "Formal solution",
              foci: "E",
              classNumber: "5",
              belongsTo: differentialMapId
            }, {
              subject: "Algebraic theory",
              foci: "E",
              classNumber: "52",
              belongsTo: differentialMapId
            }, {
              subject: "Solution by definite integral",
              foci: "E",
              classNumber: "53255",
              belongsTo: differentialMapId
            }, {
              subject: "Solution by infinite series",
              foci: "E",
              classNumber: "56",
              belongsTo: differentialMapId
            }, {
              subject: "Singular solution",
              foci: "E",
              classNumber: "58",
              belongsTo: differentialMapId
            }, {
              subject: "Graphical solution",
              foci: "E",
              classNumber: "6",
              belongsTo: differentialMapId
            }, {
              subject: "Existence of solution",
              foci: "E",
              classNumber: "7",
              belongsTo: differentialMapId
            }, {
              subject: "Numerical solution",
              foci: "2P",
              classNumber: "1",
              belongsTo: differentialMapId
            }, {
              subject: "Formal solution",
              foci: "2P",
              classNumber: "5",
              belongsTo: differentialMapId
            }, {
              subject: "Algebraic theory",
              foci: "2P",
              classNumber: "52",
              belongsTo: differentialMapId
            }, {
              subject: "Solution by definite integral",
              foci: "2P",
              classNumber: "53255",
              belongsTo: differentialMapId
            }, {
              subject: "Solution by infinite series",
              foci: "2P",
              classNumber: "56",
              belongsTo: differentialMapId
            }, {
              subject: "Singular solution",
              foci: "2P",
              classNumber: "58",
              belongsTo: differentialMapId
            }, {
              subject: "Graphical solution",
              foci: "2P",
              classNumber: "6",
              belongsTo: differentialMapId
            }, {
              subject: "Existence of solution",
              foci: "2P",
              classNumber: "7",
              belongsTo: differentialMapId
            }];
            seedRealVariableData = [{
              subject: "Single variable",
              foci: "P",
              classNumber: "1",
              belongsTo: realVariableMapId
            }, {
              subject: "Two variable",
              foci: "P",
              classNumber: "2",
              belongsTo: realVariableMapId
            }, {
              subject: "n",
              foci: "P",
              classNumber: "7",
              belongsTo: realVariableMapId
            }, {
              subject: "Integral",
              foci: "E",
              classNumber: ":1",
              belongsTo: realVariableMapId
            }, {
              subject: "Cauchy",
              foci: "E",
              classNumber: "1M",
              belongsTo: realVariableMapId
            }, {
              subject: "Riemann",
              foci: "E",
              classNumber: "1M5",
              belongsTo: realVariableMapId
            }, {
              subject: "Lebesgue",
              foci: "E",
              classNumber: "1N",
              belongsTo: realVariableMapId
            }, {
              subject: "Analytic representation",
              foci: "E",
              classNumber: "2",
              belongsTo: realVariableMapId
            }, {
              subject: "As a continued fraction",
              foci: "E",
              classNumber: "22",
              belongsTo: realVariableMapId
            }, {
              subject: "As a definite integral",
              foci: "E",
              classNumber: "23",
              belongsTo: realVariableMapId
            }, {
              subject: "As a infinite series",
              foci: "E",
              classNumber: "26",
              belongsTo: realVariableMapId
            }, {
              subject: "As an infinite product",
              foci: "E",
              classNumber: "265",
              belongsTo: realVariableMapId
            }, {
              subject: "Singularity",
              foci: "E",
              classNumber: "4",
              belongsTo: realVariableMapId
            }, {
              subject: "Distribution of value",
              foci: "E",
              classNumber: "5",
              belongsTo: realVariableMapId
            }, {
              subject: "Maximum minimum principle",
              foci: "E",
              classNumber: "7",
              belongsTo: realVariableMapId
            }, {
              subject: "Inequality and mean value",
              foci: "E",
              classNumber: "8",
              belongsTo: realVariableMapId
            }, {
              subject: "Family of function",
              foci: "E",
              classNumber: "92",
              belongsTo: realVariableMapId
            }, {
              subject: "Integral",
              foci: "2P",
              classNumber: "1",
              belongsTo: realVariableMapId
            }, {
              subject: "Cauchy",
              foci: "2P",
              classNumber: "1M",
              belongsTo: realVariableMapId
            }, {
              subject: "Riemann",
              foci: "2P",
              classNumber: "1M5",
              belongsTo: realVariableMapId
            }, {
              subject: "Lebesgue",
              foci: "2P",
              classNumber: "1N",
              belongsTo: realVariableMapId
            }, {
              subject: "Analytic representation",
              foci: "2P",
              classNumber: "2",
              belongsTo: realVariableMapId
            }, {
              subject: "As a continued fraction",
              foci: "2P",
              classNumber: "22",
              belongsTo: realVariableMapId
            }, {
              subject: "As a definite integral",
              foci: "2P",
              classNumber: "23",
              belongsTo: realVariableMapId
            }, {
              subject: "As a infinite series",
              foci: "2P",
              classNumber: "26",
              belongsTo: realVariableMapId
            }, {
              subject: "As an infinite product",
              foci: "2P",
              classNumber: "265",
              belongsTo: realVariableMapId
            }, {
              subject: "Singularity",
              foci: "2P",
              classNumber: "4",
              belongsTo: realVariableMapId
            }, {
              subject: "Distribution of value",
              foci: "2P",
              classNumber: "5",
              belongsTo: realVariableMapId
            }, {
              subject: "Maximum minimum principle",
              foci: "2P",
              classNumber: "7",
              belongsTo: realVariableMapId
            }, {
              subject: "Inequality and mean value",
              foci: "2P",
              classNumber: "8",
              belongsTo: realVariableMapId
            }, {
              subject: "Family of function",
              foci: "2P",
              classNumber: "92",
              belongsTo: realVariableMapId
            }];
            seedComplexVariableData = [{
              subject: "Single variable",
              foci: "P",
              classNumber: "1",
              belongsTo: complexVariableMapId
            }, {
              subject: "Two variable",
              foci: "P",
              classNumber: "2",
              belongsTo: complexVariableMapId
            }, {
              subject: "n",
              foci: "P",
              classNumber: "7",
              belongsTo: complexVariableMapId
            }, {
              subject: "Cauchys theorem",
              foci: "E",
              classNumber: "1",
              belongsTo: complexVariableMapId
            }, {
              subject: "Analytic representation",
              foci: "E",
              classNumber: "2",
              belongsTo: complexVariableMapId
            }, {
              subject: "Approximation by polynomial",
              foci: "E",
              classNumber: "22",
              belongsTo: complexVariableMapId
            }, {
              subject: "As a contour integral",
              foci: "E",
              classNumber: "23",
              belongsTo: complexVariableMapId
            }, {
              subject: "As an infinite series",
              foci: "E",
              classNumber: "26",
              belongsTo: complexVariableMapId
            }, {
              subject: "As an infinite product",
              foci: "E",
              classNumber: "265",
              belongsTo: complexVariableMapId
            }, {
              subject: "Analytic continuation",
              foci: "E",
              classNumber: "3",
              belongsTo: complexVariableMapId
            }, {
              subject: "Singularity",
              foci: "E",
              classNumber: "4",
              belongsTo: complexVariableMapId
            }, {
              subject: "Pole",
              foci: "E",
              classNumber: "41",
              belongsTo: complexVariableMapId
            }, {
              subject: "Essential singularity",
              foci: "E",
              classNumber: "45",
              belongsTo: complexVariableMapId
            }, {
              subject: "Distribution of value",
              foci: "E",
              classNumber: "5",
              belongsTo: complexVariableMapId
            }, {
              subject: "Exceptional value",
              foci: "E",
              classNumber: "59",
              belongsTo: complexVariableMapId
            }, {
              subject: "Conformal representation",
              foci: "E",
              classNumber: "6",
              belongsTo: complexVariableMapId
            }, {
              subject: "Maximum minimum principle",
              foci: "E",
              classNumber: "7",
              belongsTo: complexVariableMapId
            }, {
              subject: "Inequality and mean value",
              foci: "E",
              classNumber: "8",
              belongsTo: complexVariableMapId
            }, {
              subject: "Family of function",
              foci: "E",
              classNumber: "92",
              belongsTo: complexVariableMapId
            }, {
              subject: "Cauchys theorem",
              foci: "2P",
              classNumber: "1",
              belongsTo: complexVariableMapId
            }, {
              subject: "Analytic representation",
              foci: "2P",
              classNumber: "2",
              belongsTo: complexVariableMapId
            }, {
              subject: "Approximation by polynomial",
              foci: "2P",
              classNumber: "22",
              belongsTo: complexVariableMapId
            }, {
              subject: "As a contour integral",
              foci: "2P",
              classNumber: "23",
              belongsTo: complexVariableMapId
            }, {
              subject: "As an infinite series",
              foci: "2P",
              classNumber: "26",
              belongsTo: complexVariableMapId
            }, {
              subject: "As an infinite product",
              foci: "2P",
              classNumber: "265",
              belongsTo: complexVariableMapId
            }, {
              subject: "Analytic continuation",
              foci: "2P",
              classNumber: "3",
              belongsTo: complexVariableMapId
            }, {
              subject: "Singularity",
              foci: "2P",
              classNumber: "4",
              belongsTo: complexVariableMapId
            }, {
              subject: "Pole",
              foci: "2P",
              classNumber: "41",
              belongsTo: complexVariableMapId
            }, {
              subject: "Essential singularity",
              foci: "2P",
              classNumber: "45",
              belongsTo: complexVariableMapId
            }, {
              subject: "Distribution of value",
              foci: "2P",
              classNumber: "5",
              belongsTo: complexVariableMapId
            }, {
              subject: "Exceptional value",
              foci: "2P",
              classNumber: "59",
              belongsTo: complexVariableMapId
            }, {
              subject: "Conformal representation",
              foci: "2P",
              classNumber: "6",
              belongsTo: complexVariableMapId
            }, {
              subject: "Maximum minimum principle",
              foci: "2P",
              classNumber: "7",
              belongsTo: complexVariableMapId
            }, {
              subject: "Inequality and mean value",
              foci: "2P",
              classNumber: "8",
              belongsTo: complexVariableMapId
            }, {
              subject: "Family of function",
              foci: "2P",
              classNumber: "92",
              belongsTo: complexVariableMapId
            }];
            seedPropertiesOfMatterData = [{
              subject: "Solid",
              foci: "P",
              classNumber: "1",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Glass",
              foci: "P",
              classNumber: "15",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Crystal",
              foci: "P",
              classNumber: "16",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Liquid",
              foci: "P",
              classNumber: "5",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Gas",
              foci: "P",
              classNumber: "8",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Density",
              foci: "P2",
              classNumber: "13",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Elasticity",
              foci: "P2",
              classNumber: "2",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Linear",
              foci: "P2",
              classNumber: "21",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Areal",
              foci: "P2",
              classNumber: "22",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Volume",
              foci: "P2",
              classNumber: "23",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Shape",
              foci: "P2",
              classNumber: "25",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Bending",
              foci: "P2",
              classNumber: "251",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Surface tension",
              foci: "P2",
              classNumber: "4",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Capillarity",
              foci: "P2",
              classNumber: "47",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Plasticity",
              foci: "P2",
              classNumber: "6",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Friction",
              foci: "P2",
              classNumber: "91",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Viscosity",
              foci: "P2",
              classNumber: "92",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Diffusion",
              foci: "P2",
              classNumber: "93",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Pressure",
              foci: "P2",
              classNumber: "7",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Vacuum",
              foci: "P2",
              classNumber: "76",
              belongsTo: propertiesOfMatterMapId
            }, {
              subject: "Structure",
              foci: "P2",
              classNumber: "8",
              belongsTo: propertiesOfMatterMapId
            }];
            seedSoundData = [{
              subject: "Audible sound",
              foci: "P",
              classNumber: "1",
              belongsTo: soundMapId
            }, {
              subject: "Infra sound",
              foci: "P",
              classNumber: "2",
              belongsTo: soundMapId
            }, {
              subject: "Ultra sound",
              foci: "P",
              classNumber: "5",
              belongsTo: soundMapId
            }, {
              subject: "Generation",
              foci: "E",
              classNumber: "1",
              belongsTo: soundMapId
            }, {
              subject: "Propagation",
              foci: "E",
              classNumber: "2",
              belongsTo: soundMapId
            }, {
              subject: "Velocity",
              foci: "E",
              classNumber: "21",
              belongsTo: soundMapId
            }, {
              subject: "Reflection",
              foci: "E",
              classNumber: "22",
              belongsTo: soundMapId
            }, {
              subject: "Refraction",
              foci: "E",
              classNumber: "23",
              belongsTo: soundMapId
            }, {
              subject: "Intensity",
              foci: "E",
              classNumber: "28",
              belongsTo: soundMapId
            }, {
              subject: "Frequency",
              foci: "E",
              classNumber: "3",
              belongsTo: soundMapId
            }, {
              subject: "Pitch",
              foci: "E",
              classNumber: "31",
              belongsTo: soundMapId
            }, {
              subject: "Musical scale",
              foci: "E",
              classNumber: "33",
              belongsTo: soundMapId
            }, {
              subject: "Resonance",
              foci: "E",
              classNumber: "35",
              belongsTo: soundMapId
            }, {
              subject: "Resonator",
              foci: "E",
              classNumber: "358",
              belongsTo: soundMapId
            }, {
              subject: "Analysis",
              foci: "E",
              classNumber: "38",
              belongsTo: soundMapId
            }, {
              subject: "Interference (beat or diffraction)",
              foci: "E",
              classNumber: "5",
              belongsTo: soundMapId
            }, {
              subject: "Acoustics",
              foci: "E",
              classNumber: "7",
              belongsTo: soundMapId
            }, {
              subject: "Absorption",
              foci: "E",
              classNumber: "71",
              belongsTo: soundMapId
            }, {
              subject: "Nature",
              foci: "E",
              classNumber: "8",
              belongsTo: soundMapId
            }, {
              subject: "Generation",
              foci: "2P",
              classNumber: "1",
              belongsTo: soundMapId
            }, {
              subject: "Propagation",
              foci: "2P",
              classNumber: "2",
              belongsTo: soundMapId
            }, {
              subject: "Velocity",
              foci: "2P",
              classNumber: "21",
              belongsTo: soundMapId
            }, {
              subject: "Reflection",
              foci: "2P",
              classNumber: "22",
              belongsTo: soundMapId
            }, {
              subject: "Refraction",
              foci: "2P",
              classNumber: "23",
              belongsTo: soundMapId
            }, {
              subject: "Intensity",
              foci: "2P",
              classNumber: "28",
              belongsTo: soundMapId
            }, {
              subject: "Frequency",
              foci: "2P",
              classNumber: "3",
              belongsTo: soundMapId
            }, {
              subject: "Pitch",
              foci: "2P",
              classNumber: "31",
              belongsTo: soundMapId
            }, {
              subject: "Musical scale",
              foci: "2P",
              classNumber: "33",
              belongsTo: soundMapId
            }, {
              subject: "Resonance",
              foci: "2P",
              classNumber: "35",
              belongsTo: soundMapId
            }, {
              subject: "Resonator",
              foci: "2P",
              classNumber: "358",
              belongsTo: soundMapId
            }, {
              subject: "Analysis",
              foci: "2P",
              classNumber: "38",
              belongsTo: soundMapId
            }, {
              subject: "Interference (beat or diffraction)",
              foci: "2P",
              classNumber: "5",
              belongsTo: soundMapId
            }, {
              subject: "Acoustics",
              foci: "2P",
              classNumber: "7",
              belongsTo: soundMapId
            }, {
              subject: "Absorption",
              foci: "2P",
              classNumber: "71",
              belongsTo: soundMapId
            }, {
              subject: "Nature",
              foci: "2P",
              classNumber: "8",
              belongsTo: soundMapId
            }];
            seedHeatData = [{
              subject: "Generation",
              foci: "E",
              classNumber: "1",
              belongsTo: heatMapId
            }, {
              subject: "Transference",
              foci: "E",
              classNumber: "2",
              belongsTo: heatMapId
            }, {
              subject: "Convection",
              foci: "E",
              classNumber: "23",
              belongsTo: heatMapId
            }, {
              subject: "Conduction",
              foci: "E",
              classNumber: "24",
              belongsTo: heatMapId
            }, {
              subject: "Radiation",
              foci: "E",
              classNumber: "25",
              belongsTo: heatMapId
            }, {
              subject: "Absorption",
              foci: "E",
              classNumber: "27",
              belongsTo: heatMapId
            }, {
              subject: "Calorimetry, etc.",
              foci: "E",
              classNumber: "28",
              belongsTo: heatMapId
            }, {
              subject: "Calorimetry",
              foci: "E",
              classNumber: "281",
              belongsTo: heatMapId
            }, {
              subject: "Quantity of heat",
              foci: "E",
              classNumber: "282",
              belongsTo: heatMapId
            }, {
              subject: "Specific heat",
              foci: "E",
              classNumber: "283",
              belongsTo: heatMapId
            }, {
              subject: "Thermometry",
              foci: "E",
              classNumber: "3",
              belongsTo: heatMapId
            }, {
              subject: "Expansion of body",
              foci: "E",
              classNumber: "4",
              belongsTo: heatMapId
            }, {
              subject: "Change of state",
              foci: "E",
              classNumber: "5",
              belongsTo: heatMapId
            }, {
              subject: "Fusion",
              foci: "E",
              classNumber: "51",
              belongsTo: heatMapId
            }, {
              subject: "Solidification",
              foci: "E",
              classNumber: "511",
              belongsTo: heatMapId
            }, {
              subject: "Melting point",
              foci: "E",
              classNumber: "512",
              belongsTo: heatMapId
            }, {
              subject: "Change of volume during fusion",
              foci: "E",
              classNumber: "513",
              belongsTo: heatMapId
            }, {
              subject: "Latent heat of fusion",
              foci: "E",
              classNumber: "514",
              belongsTo: heatMapId
            }, {
              subject: "Sublimation",
              foci: "E",
              classNumber: "52",
              belongsTo: heatMapId
            }, {
              subject: "Vaporization (evaporation, ebullition)",
              foci: "E",
              classNumber: "55",
              belongsTo: heatMapId
            }, {
              subject: "Liquefaction",
              foci: "E",
              classNumber: "551",
              belongsTo: heatMapId
            }, {
              subject: "Boiling point",
              foci: "E",
              classNumber: "552",
              belongsTo: heatMapId
            }, {
              subject: "Latent heat of vaporization",
              foci: "E",
              classNumber: "554",
              belongsTo: heatMapId
            }, {
              subject: "Critical state",
              foci: "E",
              classNumber: "58",
              belongsTo: heatMapId
            }, {
              subject: "Critical point",
              foci: "E",
              classNumber: "582",
              belongsTo: heatMapId
            }, {
              subject: "Thermodynamics",
              foci: "E",
              classNumber: "7",
              belongsTo: heatMapId
            }, {
              subject: "Nature of heat",
              foci: "E",
              classNumber: "8",
              belongsTo: heatMapId
            }, {
              subject: "Generation",
              foci: "2P",
              classNumber: "1",
              belongsTo: heatMapId
            }, {
              subject: "Transference",
              foci: "2P",
              classNumber: "2",
              belongsTo: heatMapId
            }, {
              subject: "Convection",
              foci: "2P",
              classNumber: "23",
              belongsTo: heatMapId
            }, {
              subject: "Conduction",
              foci: "2P",
              classNumber: "24",
              belongsTo: heatMapId
            }, {
              subject: "Radiation",
              foci: "2P",
              classNumber: "25",
              belongsTo: heatMapId
            }, {
              subject: "Absorption",
              foci: "2P",
              classNumber: "27",
              belongsTo: heatMapId
            }, {
              subject: "Calorimetry, etc.",
              foci: "2P",
              classNumber: "28",
              belongsTo: heatMapId
            }, {
              subject: "Calorimetry",
              foci: "2P",
              classNumber: "281",
              belongsTo: heatMapId
            }, {
              subject: "Quantity of heat",
              foci: "2P",
              classNumber: "282",
              belongsTo: heatMapId
            }, {
              subject: "Specific heat",
              foci: "2P",
              classNumber: "283",
              belongsTo: heatMapId
            }, {
              subject: "Thermometry",
              foci: "2P",
              classNumber: "3",
              belongsTo: heatMapId
            }, {
              subject: "Expansion of body",
              foci: "2P",
              classNumber: "4",
              belongsTo: heatMapId
            }, {
              subject: "Change of state",
              foci: "2P",
              classNumber: "5",
              belongsTo: heatMapId
            }, {
              subject: "Fusion",
              foci: "2P",
              classNumber: "51",
              belongsTo: heatMapId
            }, {
              subject: "Solidification",
              foci: "2P",
              classNumber: "511",
              belongsTo: heatMapId
            }, {
              subject: "Melting point",
              foci: "2P",
              classNumber: "512",
              belongsTo: heatMapId
            }, {
              subject: "Change of volume during fusion",
              foci: "2P",
              classNumber: "513",
              belongsTo: heatMapId
            }, {
              subject: "Latent heat of fusion",
              foci: "2P",
              classNumber: "514",
              belongsTo: heatMapId
            }, {
              subject: "Sublimation",
              foci: "2P",
              classNumber: "52",
              belongsTo: heatMapId
            }, {
              subject: "Vaporization (evaporation, ebullition)",
              foci: "2P",
              classNumber: "55",
              belongsTo: heatMapId
            }, {
              subject: "Liquefaction",
              foci: "2P",
              classNumber: "551",
              belongsTo: heatMapId
            }, {
              subject: "Boiling point",
              foci: "2P",
              classNumber: "552",
              belongsTo: heatMapId
            }, {
              subject: "Latent heat of vaporization",
              foci: "2P",
              classNumber: "554",
              belongsTo: heatMapId
            }, {
              subject: "Critical state",
              foci: "2P",
              classNumber: "58",
              belongsTo: heatMapId
            }, {
              subject: "Critical point",
              foci: "2P",
              classNumber: "582",
              belongsTo: heatMapId
            }, {
              subject: "Thermodynamics",
              foci: "2P",
              classNumber: "7",
              belongsTo: heatMapId
            }, {
              subject: "Nature of heat",
              foci: "2P",
              classNumber: "8",
              belongsTo: heatMapId
            }];
            seedRadiationData = [{
              subject: "Light",
              foci: "P",
              classNumber: "1",
              belongsTo: radiationMapId
            }, {
              subject: "Red",
              foci: "P",
              classNumber: "12",
              belongsTo: radiationMapId
            }, {
              subject: "Orange",
              foci: "P",
              classNumber: "13",
              belongsTo: radiationMapId
            }, {
              subject: "Yellow",
              foci: "P",
              classNumber: "14",
              belongsTo: radiationMapId
            }, {
              subject: "Green",
              foci: "P",
              classNumber: "15",
              belongsTo: radiationMapId
            }, {
              subject: "Blue",
              foci: "P",
              classNumber: "16",
              belongsTo: radiationMapId
            }, {
              subject: "Indigo",
              foci: "P",
              classNumber: "17",
              belongsTo: radiationMapId
            }, {
              subject: "Violet",
              foci: "P",
              classNumber: "18",
              belongsTo: radiationMapId
            }, {
              subject: "Ultra violet",
              foci: "P",
              classNumber: "2",
              belongsTo: radiationMapId
            }, {
              subject: "X",
              foci: "P",
              classNumber: "3",
              belongsTo: radiationMapId
            }, {
              subject: "Gamma",
              foci: "P",
              classNumber: "4",
              belongsTo: radiationMapId
            }, {
              subject: "Infra red",
              foci: "P",
              classNumber: "6",
              belongsTo: radiationMapId
            }, {
              subject: "Hertzian",
              foci: "P",
              classNumber: "7",
              belongsTo: radiationMapId
            }, {
              subject: "Source",
              foci: "P",
              classNumber: "91",
              belongsTo: radiationMapId
            }, {
              subject: "Monochromatic",
              foci: "P",
              classNumber: "911",
              belongsTo: radiationMapId
            }, {
              subject: "Generation",
              foci: "E",
              classNumber: "1",
              belongsTo: radiationMapId
            }, {
              subject: "Propagation",
              foci: "E",
              classNumber: "2",
              belongsTo: radiationMapId
            }, {
              subject: "Velocity",
              foci: "E",
              classNumber: "21",
              belongsTo: radiationMapId
            }, {
              subject: "Reflection",
              foci: "E",
              classNumber: "22",
              belongsTo: radiationMapId
            }, {
              subject: "Refraction",
              foci: "E",
              classNumber: "23",
              belongsTo: radiationMapId
            }, {
              subject: "Photometry",
              foci: "E",
              classNumber: "28",
              belongsTo: radiationMapId
            }, {
              subject: "Dispersion (spectroscopy)",
              foci: "E",
              classNumber: "3",
              belongsTo: radiationMapId
            }, {
              subject: "Technique of the spectrum",
              foci: "E",
              classNumber: "3 colon 1",
              belongsTo: radiationMapId
            }, {
              subject: "Continuous spectrum",
              foci: "E",
              classNumber: "32",
              belongsTo: radiationMapId
            }, {
              subject: "Band spectrum",
              foci: "E",
              classNumber: "33",
              belongsTo: radiationMapId
            }, {
              subject: "Liine spectrum",
              foci: "E",
              classNumber: "34",
              belongsTo: radiationMapId
            }, {
              subject: "Hyperfine spectrum",
              foci: "E",
              classNumber: "35",
              belongsTo: radiationMapId
            }, {
              subject: "Effects",
              foci: "E",
              classNumber: "38",
              belongsTo: radiationMapId
            }, {
              subject: "Special effects by CD",
              foci: "",
              classNumber: "",
              belongsTo: radiationMapId
            }, {
              subject: "Kerr effect",
              foci: "E",
              classNumber: "38M",
              belongsTo: radiationMapId
            }, {
              subject: "Zeeman",
              foci: "E",
              classNumber: "38M9",
              belongsTo: radiationMapId
            }, {
              subject: "Stark",
              foci: "E",
              classNumber: "38N",
              belongsTo: radiationMapId
            }, {
              subject: "Cempton",
              foci: "E",
              classNumber: "38N2",
              belongsTo: radiationMapId
            }, {
              subject: "Raman",
              foci: "E",
              classNumber: "38N28",
              belongsTo: radiationMapId
            }, {
              subject: "Interference, etc.",
              foci: "E",
              classNumber: "5",
              belongsTo: radiationMapId
            }, {
              subject: "Interference",
              foci: "E",
              classNumber: "51",
              belongsTo: radiationMapId
            }, {
              subject: "Diffraction",
              foci: "E",
              classNumber: "55",
              belongsTo: radiationMapId
            }, {
              subject: "Scattering",
              foci: "E",
              classNumber: "58",
              belongsTo: radiationMapId
            }, {
              subject: "Double refraction (polarization)",
              foci: "E",
              classNumber: "6",
              belongsTo: radiationMapId
            }, {
              subject: "Elliptic",
              foci: "E",
              classNumber: "65",
              belongsTo: radiationMapId
            }, {
              subject: "Rotatory",
              foci: "E",
              classNumber: "68",
              belongsTo: radiationMapId
            }, {
              subject: "Absorption, etc.",
              foci: "E",
              classNumber: "7",
              belongsTo: radiationMapId
            }, {
              subject: "Absorption",
              foci: "E",
              classNumber: "71",
              belongsTo: radiationMapId
            }, {
              subject: "Emission",
              foci: "E",
              classNumber: "72",
              belongsTo: radiationMapId
            }, {
              subject: "Luminescence",
              foci: "E",
              classNumber: "73",
              belongsTo: radiationMapId
            }, {
              subject: "Fluroescence",
              foci: "E",
              classNumber: "74",
              belongsTo: radiationMapId
            }, {
              subject: "Phosphorescence",
              foci: "E",
              classNumber: "75",
              belongsTo: radiationMapId
            }, {
              subject: "Nature of light",
              foci: "E",
              classNumber: "8",
              belongsTo: radiationMapId
            }, {
              subject: "Special theories by CD",
              foci: "E",
              classNumber: "",
              belongsTo: radiationMapId
            }, {
              subject: "Corpuscular",
              foci: "E",
              classNumber: "8K",
              belongsTo: radiationMapId
            }, {
              subject: "Wave",
              foci: "E",
              classNumber: "8K9",
              belongsTo: radiationMapId
            }, {
              subject: "Elastic solid",
              foci: "E",
              classNumber: "8M",
              belongsTo: radiationMapId
            }, {
              subject: "Electromagnetic",
              foci: "E",
              classNumber: "8M6",
              belongsTo: radiationMapId
            }, {
              subject: "Quantum",
              foci: "E",
              classNumber: "8N",
              belongsTo: radiationMapId
            }, {
              subject: "Generation",
              foci: "2P",
              classNumber: "1",
              belongsTo: radiationMapId
            }, {
              subject: "Propagation",
              foci: "2P",
              classNumber: "2",
              belongsTo: radiationMapId
            }, {
              subject: "Velocity",
              foci: "2P",
              classNumber: "21",
              belongsTo: radiationMapId
            }, {
              subject: "Reflection",
              foci: "2P",
              classNumber: "22",
              belongsTo: radiationMapId
            }, {
              subject: "Refraction",
              foci: "2P",
              classNumber: "23",
              belongsTo: radiationMapId
            }, {
              subject: "Photometry",
              foci: "2P",
              classNumber: "28",
              belongsTo: radiationMapId
            }, {
              subject: "Dispersion (spectroscopy)",
              foci: "2P",
              classNumber: "3",
              belongsTo: radiationMapId
            }, {
              subject: "Technique of the spectrum",
              foci: "2P",
              classNumber: "3 colon 1",
              belongsTo: radiationMapId
            }, {
              subject: "Continuous spectrum",
              foci: "2P",
              classNumber: "32",
              belongsTo: radiationMapId
            }, {
              subject: "Band spectrum",
              foci: "2P",
              classNumber: "33",
              belongsTo: radiationMapId
            }, {
              subject: "Liine spectrum",
              foci: "2P",
              classNumber: "34",
              belongsTo: radiationMapId
            }, {
              subject: "Hyperfine spectrum",
              foci: "2P",
              classNumber: "35",
              belongsTo: radiationMapId
            }, {
              subject: "Effects",
              foci: "2P",
              classNumber: "38",
              belongsTo: radiationMapId
            }, {
              subject: "Special effects by CD",
              foci: "",
              classNumber: "",
              belongsTo: radiationMapId
            }, {
              subject: "Kerr effect",
              foci: "2P",
              classNumber: "38M",
              belongsTo: radiationMapId
            }, {
              subject: "Zeeman",
              foci: "2P",
              classNumber: "38M9",
              belongsTo: radiationMapId
            }, {
              subject: "Stark",
              foci: "2P",
              classNumber: "38N",
              belongsTo: radiationMapId
            }, {
              subject: "Cempton",
              foci: "2P",
              classNumber: "38N2",
              belongsTo: radiationMapId
            }, {
              subject: "Raman",
              foci: "2P",
              classNumber: "38N28",
              belongsTo: radiationMapId
            }, {
              subject: "Interference, etc.",
              foci: "2P",
              classNumber: "5",
              belongsTo: radiationMapId
            }, {
              subject: "Interference",
              foci: "2P",
              classNumber: "51",
              belongsTo: radiationMapId
            }, {
              subject: "Diffraction",
              foci: "2P",
              classNumber: "55",
              belongsTo: radiationMapId
            }, {
              subject: "Scattering",
              foci: "2P",
              classNumber: "58",
              belongsTo: radiationMapId
            }, {
              subject: "Double refraction (polarization)",
              foci: "2P",
              classNumber: "6",
              belongsTo: radiationMapId
            }, {
              subject: "Elliptic",
              foci: "2P",
              classNumber: "65",
              belongsTo: radiationMapId
            }, {
              subject: "Rotatory",
              foci: "2P",
              classNumber: "68",
              belongsTo: radiationMapId
            }, {
              subject: "Absorption, etc.",
              foci: "2P",
              classNumber: "7",
              belongsTo: radiationMapId
            }, {
              subject: "Absorption",
              foci: "2P",
              classNumber: "71",
              belongsTo: radiationMapId
            }, {
              subject: "Emission",
              foci: "2P",
              classNumber: "72",
              belongsTo: radiationMapId
            }, {
              subject: "Luminescence",
              foci: "2P",
              classNumber: "73",
              belongsTo: radiationMapId
            }, {
              subject: "Fluroescence",
              foci: "2P",
              classNumber: "74",
              belongsTo: radiationMapId
            }, {
              subject: "Phosphorescence",
              foci: "2P",
              classNumber: "75",
              belongsTo: radiationMapId
            }, {
              subject: "Nature of light",
              foci: "2P",
              classNumber: "8",
              belongsTo: radiationMapId
            }, {
              subject: "Special theories by CD",
              foci: "2P",
              classNumber: "",
              belongsTo: radiationMapId
            }, {
              subject: "Corpuscular",
              foci: "2P",
              classNumber: "8K",
              belongsTo: radiationMapId
            }, {
              subject: "Wave",
              foci: "2P",
              classNumber: "8K9",
              belongsTo: radiationMapId
            }, {
              subject: "Elastic solid",
              foci: "2P",
              classNumber: "8M",
              belongsTo: radiationMapId
            }, {
              subject: "Electromagnetic",
              foci: "2P",
              classNumber: "8M6",
              belongsTo: radiationMapId
            }, {
              subject: "Quantum",
              foci: "2P",
              classNumber: "8N",
              belongsTo: radiationMapId
            }];
            seedElectricityData = [{
              subject: "Current",
              foci: "P",
              classNumber: "2",
              belongsTo: electricityMapId
            }, {
              subject: "Direct",
              foci: "P",
              classNumber: "23",
              belongsTo: electricityMapId
            }, {
              subject: "Alternating",
              foci: "P",
              classNumber: "34",
              belongsTo: electricityMapId
            }, {
              subject: "Two phase",
              foci: "P",
              classNumber: "242",
              belongsTo: electricityMapId
            }, {
              subject: "Three phase",
              foci: "P",
              classNumber: "243",
              belongsTo: electricityMapId
            }, {
              subject: "Multiphase",
              foci: "P",
              classNumber: "248",
              belongsTo: electricityMapId
            }, {
              subject: "Weak",
              foci: "P",
              classNumber: "25",
              belongsTo: electricityMapId
            }, {
              subject: "Statical electricity",
              foci: "P",
              classNumber: "3",
              belongsTo: electricityMapId
            }, {
              subject: "Piezo electricity",
              foci: "P",
              classNumber: "42",
              belongsTo: electricityMapId
            }, {
              subject: "Generation",
              foci: "E",
              classNumber: "1",
              belongsTo: electricityMapId
            }, {
              subject: "Primary cell",
              foci: "E",
              classNumber: "11",
              belongsTo: electricityMapId
            }, {
              subject: "Induction",
              foci: "E",
              classNumber: "12",
              belongsTo: electricityMapId
            }, {
              subject: "Propagation",
              foci: "E",
              classNumber: "2",
              belongsTo: electricityMapId
            }, {
              subject: "Conduction",
              foci: "E",
              classNumber: "21",
              belongsTo: electricityMapId
            }, {
              subject: "Dielectric",
              foci: "E",
              classNumber: "211",
              belongsTo: electricityMapId
            }, {
              subject: "Radiation",
              foci: "E",
              classNumber: "25",
              belongsTo: electricityMapId
            }, {
              subject: "Secondary cell",
              foci: "E",
              classNumber: "28",
              belongsTo: electricityMapId
            }, {
              subject: "Potential",
              foci: "E",
              classNumber: "3",
              belongsTo: electricityMapId
            }, {
              subject: "Transformation into other form of energy",
              foci: "E",
              classNumber: "4",
              belongsTo: electricityMapId
            }, {
              subject: "Thermo electricity",
              foci: "E",
              classNumber: "44",
              belongsTo: electricityMapId
            }, {
              subject: "Photo electricity",
              foci: "E",
              classNumber: "45",
              belongsTo: electricityMapId
            }, {
              subject: "Magneto electricity",
              foci: "E",
              classNumber: "47",
              belongsTo: electricityMapId
            }, {
              subject: "Nature of electricity",
              foci: "E",
              classNumber: "8",
              belongsTo: electricityMapId
            }, {
              subject: "Generation",
              foci: "2P",
              classNumber: "1",
              belongsTo: electricityMapId
            }, {
              subject: "Primary cell",
              foci: "2P",
              classNumber: "11",
              belongsTo: electricityMapId
            }, {
              subject: "Induction",
              foci: "2P",
              classNumber: "12",
              belongsTo: electricityMapId
            }, {
              subject: "Propagation",
              foci: "2P",
              classNumber: "2",
              belongsTo: electricityMapId
            }, {
              subject: "Conduction",
              foci: "2P",
              classNumber: "21",
              belongsTo: electricityMapId
            }, {
              subject: "Dielectric",
              foci: "2P",
              classNumber: "211",
              belongsTo: electricityMapId
            }, {
              subject: "Radiation",
              foci: "2P",
              classNumber: "25",
              belongsTo: electricityMapId
            }, {
              subject: "Secondary cell",
              foci: "2P",
              classNumber: "28",
              belongsTo: electricityMapId
            }, {
              subject: "Potential",
              foci: "2P",
              classNumber: "3",
              belongsTo: electricityMapId
            }, {
              subject: "Transformation into other form of energy",
              foci: "2P",
              classNumber: "4",
              belongsTo: electricityMapId
            }, {
              subject: "Thermo electricity",
              foci: "2P",
              classNumber: "44",
              belongsTo: electricityMapId
            }, {
              subject: "Photo electricity",
              foci: "2P",
              classNumber: "45",
              belongsTo: electricityMapId
            }, {
              subject: "Magneto electricity",
              foci: "2P",
              classNumber: "47",
              belongsTo: electricityMapId
            }, {
              subject: "Nature of electricity",
              foci: "2P",
              classNumber: "8",
              belongsTo: electricityMapId
            }];
            seedMagnetismData = [{
              subject: "Dia",
              foci: "P",
              classNumber: "2",
              belongsTo: magnetismMapId
            }, {
              subject: "Para",
              foci: "P",
              classNumber: "3",
              belongsTo: magnetismMapId
            }, {
              subject: "Ferro",
              foci: "P",
              classNumber: "4",
              belongsTo: magnetismMapId
            }, {
              subject: "Terrestrial",
              foci: "P",
              classNumber: "5",
              belongsTo: magnetismMapId
            }, {
              subject: "Intensity",
              foci: "E",
              classNumber: "2",
              belongsTo: magnetismMapId
            }, {
              subject: "Nature of magnetism",
              foci: "E",
              classNumber: "8",
              belongsTo: magnetismMapId
            }, {
              subject: "Neutron",
              foci: "P",
              classNumber: "1",
              belongsTo: magnetismMapId
            }, {
              subject: "Nutrino",
              foci: "P",
              classNumber: "2",
              belongsTo: magnetismMapId
            }, {
              subject: "Proton",
              foci: "P",
              classNumber: "5",
              belongsTo: magnetismMapId
            }, {
              subject: "Meson",
              foci: "P",
              classNumber: "7",
              belongsTo: magnetismMapId
            }, {
              subject: "Cosmic ray",
              foci: "P",
              classNumber: "8",
              belongsTo: magnetismMapId
            }, {
              subject: "Similar to those for C5 Light or Radiation with the following additions",
              foci: "0",
              classNumber: "0",
              belongsTo: magnetismMapId
            }, {
              subject: "Fission",
              foci: "E",
              classNumber: "11",
              belongsTo: magnetismMapId
            }, {
              subject: "Fusion",
              foci: "E",
              classNumber: "12",
              belongsTo: magnetismMapId
            }, {
              subject: "By product",
              foci: "E",
              classNumber: "77",
              belongsTo: magnetismMapId
            }, {
              subject: "Waste product",
              foci: "E",
              classNumber: "774",
              belongsTo: magnetismMapId
            }, {
              subject: "Fission",
              foci: "2P",
              classNumber: "11",
              belongsTo: magnetismMapId
            }, {
              subject: "Fusion",
              foci: "2P",
              classNumber: "12",
              belongsTo: magnetismMapId
            }, {
              subject: "By product",
              foci: "2P",
              classNumber: "77",
              belongsTo: magnetismMapId
            }, {
              subject: "Waste product",
              foci: "2P",
              classNumber: "774",
              belongsTo: magnetismMapId
            }];
            seedEngineeringData = [{
              subject: "Civil engineering",
              foci: "P",
              classNumber: "1",
              belongsTo: engineeringMapId
            }, {
              subject: "Irrigation and drainage work",
              foci: "P",
              classNumber: "2",
              belongsTo: engineeringMapId
            }, {
              subject: "Underground water",
              foci: "P",
              classNumber: "24",
              belongsTo: engineeringMapId
            }, {
              subject: "River",
              foci: "P",
              classNumber: "26",
              belongsTo: engineeringMapId
            }, {
              subject: "Tank",
              foci: "P",
              classNumber: "27",
              belongsTo: engineeringMapId
            }, {
              subject: "Drainage",
              foci: "P",
              classNumber: "28",
              belongsTo: engineeringMapId
            }, {
              subject: "Subsoil",
              foci: "P",
              classNumber: "284",
              belongsTo: engineeringMapId
            }, {
              subject: "Building",
              foci: "P",
              classNumber: "3",
              belongsTo: engineeringMapId
            }, {
              subject: "Wood",
              foci: "P",
              classNumber: "31",
              belongsTo: engineeringMapId
            }, {
              subject: "Earth",
              foci: "P",
              classNumber: "32",
              belongsTo: engineeringMapId
            }, {
              subject: "Refractory material",
              foci: "P",
              classNumber: "324",
              belongsTo: engineeringMapId
            }, {
              subject: "Brick",
              foci: "P",
              classNumber: "33",
              belongsTo: engineeringMapId
            }, {
              subject: "Stone",
              foci: "P",
              classNumber: "34",
              belongsTo: engineeringMapId
            }, {
              subject: "Granite",
              foci: "P",
              classNumber: "341",
              belongsTo: engineeringMapId
            }, {
              subject: "Sand stone",
              foci: "P",
              classNumber: "343",
              belongsTo: engineeringMapId
            }, {
              subject: "Cement",
              foci: "P",
              classNumber: "35",
              belongsTo: engineeringMapId
            }, {
              subject: "Reinforced concrete",
              foci: "P",
              classNumber: "36",
              belongsTo: engineeringMapId
            }, {
              subject: "Steel and other metal",
              foci: "P",
              classNumber: "38",
              belongsTo: engineeringMapId
            }, {
              subject: "Other",
              foci: "P",
              classNumber: "39",
              belongsTo: engineeringMapId
            }, {
              subject: "Plywood",
              foci: "P",
              classNumber: "391",
              belongsTo: engineeringMapId
            }, {
              subject: "Cave",
              foci: "P",
              classNumber: "394",
              belongsTo: engineeringMapId
            }, {
              subject: "Transport track",
              foci: "P",
              classNumber: "4",
              belongsTo: engineeringMapId
            }, {
              subject: "Land",
              foci: "P",
              classNumber: "41",
              belongsTo: engineeringMapId
            }, {
              subject: "Road",
              foci: "P",
              classNumber: "411",
              belongsTo: engineeringMapId
            }, {
              subject: "Wood paved",
              foci: "P",
              classNumber: "4111",
              belongsTo: engineeringMapId
            }, {
              subject: "Earth",
              foci: "P",
              classNumber: "4112",
              belongsTo: engineeringMapId
            }, {
              subject: "Macadam",
              foci: "P",
              classNumber: "4113",
              belongsTo: engineeringMapId
            }, {
              subject: "Water bound",
              foci: "P",
              classNumber: "41131",
              belongsTo: engineeringMapId
            }, {
              subject: "Tar bound",
              foci: "P",
              classNumber: "41132",
              belongsTo: engineeringMapId
            }, {
              subject: "Stone bound",
              foci: "P",
              classNumber: "4114",
              belongsTo: engineeringMapId
            }, {
              subject: "Cement",
              foci: "P",
              classNumber: "4115",
              belongsTo: engineeringMapId
            }, {
              subject: "Reinforced concrete",
              foci: "P",
              classNumber: "4116",
              belongsTo: engineeringMapId
            }, {
              subject: "Asphalt",
              foci: "P",
              classNumber: "4117",
              belongsTo: engineeringMapId
            }, {
              subject: "Other kind",
              foci: "P",
              classNumber: "4119",
              belongsTo: engineeringMapId
            }, {
              subject: "Rail Road",
              foci: "P",
              classNumber: "415",
              belongsTo: engineeringMapId
            }, {
              subject: "Street Light",
              foci: "P",
              classNumber: "4151",
              belongsTo: engineeringMapId
            }, {
              subject: "Ordinery",
              foci: "P",
              classNumber: "4152",
              belongsTo: engineeringMapId
            }, {
              subject: "Narrow gauge",
              foci: "P",
              classNumber: "4153",
              belongsTo: engineeringMapId
            }, {
              subject: "Metre gauge",
              foci: "P",
              classNumber: "41531",
              belongsTo: engineeringMapId
            }, {
              subject: "Standard gauge",
              foci: "P",
              classNumber: "41533",
              belongsTo: engineeringMapId
            }, {
              subject: "Broad gauge",
              foci: "P",
              classNumber: "41534",
              belongsTo: engineeringMapId
            }, {
              subject: "Undergroud",
              foci: "P",
              classNumber: "4154",
              belongsTo: engineeringMapId
            }, {
              subject: "Mountain",
              foci: "P",
              classNumber: "4156",
              belongsTo: engineeringMapId
            }, {
              subject: "Bridge",
              foci: "P",
              classNumber: "416",
              belongsTo: engineeringMapId
            }, {
              subject: "Wood",
              foci: "P",
              classNumber: "4161",
              belongsTo: engineeringMapId
            }, {
              subject: "Suspension",
              foci: "P",
              classNumber: "4162",
              belongsTo: engineeringMapId
            }, {
              subject: "Masonry",
              foci: "P",
              classNumber: "4163",
              belongsTo: engineeringMapId
            }, {
              subject: "Stone",
              foci: "P",
              classNumber: "4164",
              belongsTo: engineeringMapId
            }, {
              subject: "Culvert",
              foci: "P",
              classNumber: "4165",
              belongsTo: engineeringMapId
            }, {
              subject: "Reinforced concrete",
              foci: "P",
              classNumber: "4166",
              belongsTo: engineeringMapId
            }, {
              subject: "Steel",
              foci: "P",
              classNumber: "4168",
              belongsTo: engineeringMapId
            }, {
              subject: "Other bridge",
              foci: "P",
              classNumber: "4169",
              belongsTo: engineeringMapId
            }, {
              subject: "Cantilever",
              foci: "P",
              classNumber: "41698",
              belongsTo: engineeringMapId
            }, {
              subject: "Tunnel",
              foci: "P",
              classNumber: "4194",
              belongsTo: engineeringMapId
            }, {
              subject: "Water way",
              foci: "P",
              classNumber: "41",
              belongsTo: engineeringMapId
            }, {
              subject: "Inland canal",
              foci: "P",
              classNumber: "421",
              belongsTo: engineeringMapId
            }, {
              subject: "River",
              foci: "P",
              classNumber: "423",
              belongsTo: engineeringMapId
            }, {
              subject: "Inter oeanic canal",
              foci: "P",
              classNumber: "424",
              belongsTo: engineeringMapId
            }, {
              subject: "Ocean",
              foci: "P",
              classNumber: "425",
              belongsTo: engineeringMapId
            }, {
              subject: "Submariene",
              foci: "P",
              classNumber: "4254",
              belongsTo: engineeringMapId
            }, {
              subject: "Air way",
              foci: "P",
              classNumber: "43",
              belongsTo: engineeringMapId
            }, {
              subject: "Rope way",
              foci: "P",
              classNumber: "44",
              belongsTo: engineeringMapId
            }, {
              subject: "Transport vehicle",
              foci: "P",
              classNumber: "5",
              belongsTo: engineeringMapId
            }, {
              subject: "Land",
              foci: "P",
              classNumber: "51",
              belongsTo: engineeringMapId
            }, {
              subject: "Carried by muscular power",
              foci: "P",
              classNumber: "511",
              belongsTo: engineeringMapId
            }, {
              subject: "Palanquin",
              foci: "P",
              classNumber: "5111",
              belongsTo: engineeringMapId
            }, {
              subject: "Chair",
              foci: "P",
              classNumber: "5112",
              belongsTo: engineeringMapId
            }, {
              subject: "Doly",
              foci: "P",
              classNumber: "5113",
              belongsTo: engineeringMapId
            }, {
              subject: "Drawn by muscular power",
              foci: "P",
              classNumber: "512",
              belongsTo: engineeringMapId
            }, {
              subject: "Country cart",
              foci: "P",
              classNumber: "5121",
              belongsTo: engineeringMapId
            }, {
              subject: "Spring cart",
              foci: "P",
              classNumber: "5122",
              belongsTo: engineeringMapId
            }, {
              subject: "Cycle",
              foci: "P",
              classNumber: "5125",
              belongsTo: engineeringMapId
            }, {
              subject: "Drawn by mechanical power",
              foci: "P",
              classNumber: "513",
              belongsTo: engineeringMapId
            }, {
              subject: "Motor truck",
              foci: "P",
              classNumber: "5132",
              belongsTo: engineeringMapId
            }, {
              subject: "Motor car",
              foci: "P",
              classNumber: "5133",
              belongsTo: engineeringMapId
            }, {
              subject: "Motor cycle",
              foci: "P",
              classNumber: "5135",
              belongsTo: engineeringMapId
            }, {
              subject: "Railroad vehicle",
              foci: "P",
              classNumber: "515",
              belongsTo: engineeringMapId
            }, {
              subject: "Tram car",
              foci: "P",
              classNumber: "5151",
              belongsTo: engineeringMapId
            }, {
              subject: "Railway carriage",
              foci: "P",
              classNumber: "5153",
              belongsTo: engineeringMapId
            }, {
              subject: "Railway truck",
              foci: "P",
              classNumber: "51532",
              belongsTo: engineeringMapId
            }, {
              subject: "Open truck",
              foci: "P",
              classNumber: "515321",
              belongsTo: engineeringMapId
            }, {
              subject: "Parcel van",
              foci: "P",
              classNumber: "515322",
              belongsTo: engineeringMapId
            }, {
              subject: "Animal vann",
              foci: "P",
              classNumber: "515323",
              belongsTo: engineeringMapId
            }, {
              subject: "Oil van",
              foci: "P",
              classNumber: "515325",
              belongsTo: engineeringMapId
            }, {
              subject: "Trucks for heavy goods",
              foci: "P",
              classNumber: "515328",
              belongsTo: engineeringMapId
            }, {
              subject: "Passenger carriage",
              foci: "P",
              classNumber: "51533",
              belongsTo: engineeringMapId
            }, {
              subject: "Saloon",
              foci: "P",
              classNumber: "515331",
              belongsTo: engineeringMapId
            }, {
              subject: "Higher class cariage",
              foci: "P",
              classNumber: "515332",
              belongsTo: engineeringMapId
            }, {
              subject: "Lower class carriage",
              foci: "P",
              classNumber: "515333",
              belongsTo: engineeringMapId
            }, {
              subject: "Military carriage",
              foci: "P",
              classNumber: "515334",
              belongsTo: engineeringMapId
            }, {
              subject: "Dining car",
              foci: "P",
              classNumber: "515335",
              belongsTo: engineeringMapId
            }, {
              subject: "Tourist carriage",
              foci: "P",
              classNumber: "515336",
              belongsTo: engineeringMapId
            }, {
              subject: "Water vehicle",
              foci: "P",
              classNumber: "52",
              belongsTo: engineeringMapId
            }, {
              subject: "Boat",
              foci: "P",
              classNumber: "521",
              belongsTo: engineeringMapId
            }, {
              subject: "Steam boat",
              foci: "P",
              classNumber: "523",
              belongsTo: engineeringMapId
            }, {
              subject: "Ship",
              foci: "P",
              classNumber: "525",
              belongsTo: engineeringMapId
            }, {
              subject: "Sailing ship",
              foci: "P",
              classNumber: "5251",
              belongsTo: engineeringMapId
            }, {
              subject: "Steam and motor ship",
              foci: "P",
              classNumber: "5253",
              belongsTo: engineeringMapId
            }, {
              subject: "Cargo ship",
              foci: "P",
              classNumber: "52532",
              belongsTo: engineeringMapId
            }, {
              subject: "Oil ship",
              foci: "P",
              classNumber: "525325",
              belongsTo: engineeringMapId
            }, {
              subject: "Passenger ship",
              foci: "P",
              classNumber: "52533",
              belongsTo: engineeringMapId
            }, {
              subject: "Men of war",
              foci: "P",
              classNumber: "52534",
              belongsTo: engineeringMapId
            }, {
              subject: "Subordinate",
              foci: "P",
              classNumber: "5254",
              belongsTo: engineeringMapId
            }, {
              subject: "Air vehicle",
              foci: "P",
              classNumber: "53",
              belongsTo: engineeringMapId
            }, {
              subject: "Dirigible",
              foci: "P",
              classNumber: "531",
              belongsTo: engineeringMapId
            }, {
              subject: "Aeroplane",
              foci: "P",
              classNumber: "535",
              belongsTo: engineeringMapId
            }, {
              subject: "Stratosphere vehicle",
              foci: "P",
              classNumber: "54",
              belongsTo: engineeringMapId
            }, {
              subject: "Space vehicle",
              foci: "P",
              classNumber: "58",
              belongsTo: engineeringMapId
            }, {
              subject: "Mechanical engineering",
              foci: "P",
              classNumber: "6",
              belongsTo: engineeringMapId
            }, {
              subject: "Principle of mechanism",
              foci: "P",
              classNumber: "62",
              belongsTo: engineeringMapId
            }, {
              subject: "Shafting",
              foci: "P",
              classNumber: "621",
              belongsTo: engineeringMapId
            }, {
              subject: "Shaft",
              foci: "P",
              classNumber: "6211",
              belongsTo: engineeringMapId
            }, {
              subject: "Flexible shaft",
              foci: "P",
              classNumber: "62115",
              belongsTo: engineeringMapId
            }, {
              subject: "Bearing",
              foci: "P",
              classNumber: "6212",
              belongsTo: engineeringMapId
            }, {
              subject: "Journal bearing",
              foci: "P",
              classNumber: "62121",
              belongsTo: engineeringMapId
            }, {
              subject: "Pillow block, Hanger or Bracket",
              foci: "P",
              classNumber: "62122",
              belongsTo: engineeringMapId
            }, {
              subject: "Pivot bearing",
              foci: "P",
              classNumber: "62123",
              belongsTo: engineeringMapId
            }, {
              subject: "Collar bearing",
              foci: "P",
              classNumber: "62124",
              belongsTo: engineeringMapId
            }, {
              subject: "Ball and roller bearing",
              foci: "P",
              classNumber: "62125",
              belongsTo: engineeringMapId
            }, {
              subject: "Belt gearing",
              foci: "P",
              classNumber: "622",
              belongsTo: engineeringMapId
            }, {
              subject: "Pulley",
              foci: "P",
              classNumber: "6221",
              belongsTo: engineeringMapId
            }, {
              subject: "Belting",
              foci: "P",
              classNumber: "6222",
              belongsTo: engineeringMapId
            }, {
              subject: "Belt shifter",
              foci: "P",
              classNumber: "6223",
              belongsTo: engineeringMapId
            }, {
              subject: "Rope transmission",
              foci: "P",
              classNumber: "6224",
              belongsTo: engineeringMapId
            }, {
              subject: "Chain gearing",
              foci: "P",
              classNumber: "6225",
              belongsTo: engineeringMapId
            }, {
              subject: "Link belting",
              foci: "P",
              classNumber: "6226",
              belongsTo: engineeringMapId
            }, {
              subject: "Toothed gearing or Cam",
              foci: "P",
              classNumber: "623",
              belongsTo: engineeringMapId
            }, {
              subject: "Screw",
              foci: "P",
              classNumber: "624",
              belongsTo: engineeringMapId
            }, {
              subject: "Spring cart",
              foci: "P",
              classNumber: "625",
              belongsTo: engineeringMapId
            }, {
              subject: "Valve gear",
              foci: "P",
              classNumber: "626",
              belongsTo: engineeringMapId
            }, {
              subject: "Lubrication",
              foci: "P",
              classNumber: "627",
              belongsTo: engineeringMapId
            }, {
              subject: "Governor (Regulation and control)",
              foci: "P",
              classNumber: "6271",
              belongsTo: engineeringMapId
            }, {
              subject: "Speed and revolution indicator",
              foci: "P",
              classNumber: "6272",
              belongsTo: engineeringMapId
            }, {
              subject: "Dynamo meter",
              foci: "P",
              classNumber: "6276",
              belongsTo: engineeringMapId
            }, {
              subject: "Hydraulic",
              foci: "P",
              classNumber: "635",
              belongsTo: engineeringMapId
            }, {
              subject: "Water wheel",
              foci: "P",
              classNumber: "6351",
              belongsTo: engineeringMapId
            }, {
              subject: "Piston engine",
              foci: "P",
              classNumber: "6353",
              belongsTo: engineeringMapId
            }, {
              subject: "Turbinr",
              foci: "P",
              classNumber: "6355",
              belongsTo: engineeringMapId
            }, {
              subject: "Pneumatic",
              foci: "P",
              classNumber: "638",
              belongsTo: engineeringMapId
            }, {
              subject: "Windmill",
              foci: "P",
              classNumber: "6381",
              belongsTo: engineeringMapId
            }, {
              subject: "Turbine",
              foci: "P",
              classNumber: "6385",
              belongsTo: engineeringMapId
            }, {
              subject: "Compressed air",
              foci: "P",
              classNumber: "6387",
              belongsTo: engineeringMapId
            }, {
              subject: "Heat",
              foci: "P",
              classNumber: "64",
              belongsTo: engineeringMapId
            }, {
              subject: "External combustion engine (steam engine)",
              foci: "P",
              classNumber: "641",
              belongsTo: engineeringMapId
            }, {
              subject: "Piston engine",
              foci: "P",
              classNumber: "643",
              belongsTo: engineeringMapId
            }, {
              subject: "TUrbine",
              foci: "P",
              classNumber: "645",
              belongsTo: engineeringMapId
            }, {
              subject: "Internal combustion engine",
              foci: "P",
              classNumber: "646",
              belongsTo: engineeringMapId
            }, {
              subject: "Oil engine",
              foci: "P",
              classNumber: "6465",
              belongsTo: engineeringMapId
            }, {
              subject: "Diesel engine",
              foci: "P",
              classNumber: "6466",
              belongsTo: engineeringMapId
            }, {
              subject: "Gas engine",
              foci: "P",
              classNumber: "6467",
              belongsTo: engineeringMapId
            }, {
              subject: "Hot air engine",
              foci: "P",
              classNumber: "6468",
              belongsTo: engineeringMapId
            }, {
              subject: "Electronic",
              foci: "P",
              classNumber: "65",
              belongsTo: engineeringMapId
            }, {
              subject: "Electrical",
              foci: "P",
              classNumber: "66",
              belongsTo: engineeringMapId
            }, {
              subject: "Direct current",
              foci: "P",
              classNumber: "663",
              belongsTo: engineeringMapId
            }, {
              subject: "Alternating current",
              foci: "P",
              classNumber: "664",
              belongsTo: engineeringMapId
            }, {
              subject: "Two phase",
              foci: "P",
              classNumber: "6642",
              belongsTo: engineeringMapId
            }, {
              subject: "Three phase",
              foci: "P",
              classNumber: "6643",
              belongsTo: engineeringMapId
            }, {
              subject: "Multi phase",
              foci: "P",
              classNumber: "6648",
              belongsTo: engineeringMapId
            }, {
              subject: "Weak current",
              foci: "P",
              classNumber: "665",
              belongsTo: engineeringMapId
            }, {
              subject: "Magneto",
              foci: "P",
              classNumber: "67",
              belongsTo: engineeringMapId
            }, {
              subject: "Nuclear engineering",
              foci: "P",
              classNumber: "7",
              belongsTo: engineeringMapId
            }, {
              subject: "Municipal (sanitary) engineering",
              foci: "P",
              classNumber: "8",
              belongsTo: engineeringMapId
            }, {
              subject: "Water supply",
              foci: "P",
              classNumber: "85",
              belongsTo: engineeringMapId
            }, {
              subject: "Applied mechanics",
              foci: "E",
              classNumber: "1",
              belongsTo: engineeringMapId
            }, {
              subject: "Structural engineering",
              foci: "E",
              classNumber: "11",
              belongsTo: engineeringMapId
            }, {
              subject: "Beam or Cantilever",
              foci: "E",
              classNumber: "111",
              belongsTo: engineeringMapId
            }, {
              subject: "Column",
              foci: "E",
              classNumber: "112",
              belongsTo: engineeringMapId
            }, {
              subject: "Frame",
              foci: "E",
              classNumber: "113",
              belongsTo: engineeringMapId
            }, {
              subject: "Moving load",
              foci: "E",
              classNumber: "114",
              belongsTo: engineeringMapId
            }, {
              subject: "Retaining wall",
              foci: "E",
              classNumber: "115",
              belongsTo: engineeringMapId
            }, {
              subject: "Slab",
              foci: "E",
              classNumber: "116",
              belongsTo: engineeringMapId
            }, {
              subject: "Arch",
              foci: "E",
              classNumber: "117",
              belongsTo: engineeringMapId
            }, {
              subject: "Wind stress",
              foci: "E",
              classNumber: "118",
              belongsTo: engineeringMapId
            }, {
              subject: "Chimney",
              foci: "E",
              classNumber: "1194",
              belongsTo: engineeringMapId
            }, {
              subject: "Graphical statics",
              foci: "E",
              classNumber: "13",
              belongsTo: engineeringMapId
            }, {
              subject: "Hydraulics",
              foci: "E",
              classNumber: "15",
              belongsTo: engineeringMapId
            }, {
              subject: "Catchment",
              foci: "E",
              classNumber: "151",
              belongsTo: engineeringMapId
            }, {
              subject: "Flow",
              foci: "E",
              classNumber: "155",
              belongsTo: engineeringMapId
            }, {
              subject: "In pipe",
              foci: "E",
              classNumber: "1551",
              belongsTo: engineeringMapId
            }, {
              subject: "In channel",
              foci: "E",
              classNumber: "1552",
              belongsTo: engineeringMapId
            }, {
              subject: "Pneumatics",
              foci: "E",
              classNumber: "18",
              belongsTo: engineeringMapId
            }, {
              subject: "Flow",
              foci: "E",
              classNumber: "185",
              belongsTo: engineeringMapId
            }, {
              subject: "In tube",
              foci: "E",
              classNumber: "1851",
              belongsTo: engineeringMapId
            }, {
              subject: "Air current",
              foci: "E",
              classNumber: "1858",
              belongsTo: engineeringMapId
            }, {
              subject: "Surveying",
              foci: "E",
              classNumber: "2",
              belongsTo: engineeringMapId
            }, {
              subject: "Levelling",
              foci: "E",
              classNumber: "21",
              belongsTo: engineeringMapId
            }, {
              subject: "Land surveying",
              foci: "E",
              classNumber: "22",
              belongsTo: engineeringMapId
            }, {
              subject: "Theodolite survey",
              foci: "E",
              classNumber: "221",
              belongsTo: engineeringMapId
            }, {
              subject: "Aerial surveying",
              foci: "E",
              classNumber: "28",
              belongsTo: engineeringMapId
            }, {
              subject: "Strength of material",
              foci: "E",
              classNumber: "32",
              belongsTo: engineeringMapId
            }, {
              subject: "Elastic stability",
              foci: "E",
              classNumber: "35",
              belongsTo: engineeringMapId
            }, {
              subject: "Design or Drawing",
              foci: "E",
              classNumber: "4",
              belongsTo: engineeringMapId
            }, {
              subject: "Specification or Quantity",
              foci: "E",
              classNumber: "5",
              belongsTo: engineeringMapId
            }, {
              subject: "Estimate",
              foci: "E",
              classNumber: "6",
              belongsTo: engineeringMapId
            }, {
              subject: "Construction (execution)",
              foci: "E",
              classNumber: "7",
              belongsTo: engineeringMapId
            }, {
              subject: "Earthwork and excavation",
              foci: "E",
              classNumber: "71",
              belongsTo: engineeringMapId
            }, {
              subject: "Form work",
              foci: "E",
              classNumber: "76",
              belongsTo: engineeringMapId
            }, {
              subject: "Working, etc.",
              foci: "E",
              classNumber: "8",
              belongsTo: engineeringMapId
            }, {
              subject: "Testing",
              foci: "E",
              classNumber: "81",
              belongsTo: engineeringMapId
            }, {
              subject: "Maintenance",
              foci: "E",
              classNumber: "82",
              belongsTo: engineeringMapId
            }, {
              subject: "Renewal",
              foci: "E",
              classNumber: "825",
              belongsTo: engineeringMapId
            }, {
              subject: "Working",
              foci: "E",
              classNumber: "83",
              belongsTo: engineeringMapId
            }, {
              subject: "Repair",
              foci: "E",
              classNumber: "85",
              belongsTo: engineeringMapId
            }, {
              subject: "Relief or Rescue",
              foci: "E",
              classNumber: "96",
              belongsTo: engineeringMapId
            }, {
              subject: "Applied mechanics",
              foci: "2P",
              classNumber: "1",
              belongsTo: engineeringMapId
            }, {
              subject: "Structural engineering",
              foci: "2P",
              classNumber: "11",
              belongsTo: engineeringMapId
            }, {
              subject: "Beam or Cantilever",
              foci: "2P",
              classNumber: "111",
              belongsTo: engineeringMapId
            }, {
              subject: "Column",
              foci: "2P",
              classNumber: "112",
              belongsTo: engineeringMapId
            }, {
              subject: "Frame",
              foci: "2P",
              classNumber: "113",
              belongsTo: engineeringMapId
            }, {
              subject: "Moving load",
              foci: "2P",
              classNumber: "114",
              belongsTo: engineeringMapId
            }, {
              subject: "Retaining wall",
              foci: "2P",
              classNumber: "115",
              belongsTo: engineeringMapId
            }, {
              subject: "Slab",
              foci: "2P",
              classNumber: "116",
              belongsTo: engineeringMapId
            }, {
              subject: "Arch",
              foci: "2P",
              classNumber: "117",
              belongsTo: engineeringMapId
            }, {
              subject: "Wind stress",
              foci: "2P",
              classNumber: "118",
              belongsTo: engineeringMapId
            }, {
              subject: "Chimney",
              foci: "2P",
              classNumber: "1194",
              belongsTo: engineeringMapId
            }, {
              subject: "Graphical statics",
              foci: "2P",
              classNumber: "13",
              belongsTo: engineeringMapId
            }, {
              subject: "Hydraulics",
              foci: "2P",
              classNumber: "15",
              belongsTo: engineeringMapId
            }, {
              subject: "Catchment",
              foci: "2P",
              classNumber: "151",
              belongsTo: engineeringMapId
            }, {
              subject: "Flow",
              foci: "2P",
              classNumber: "155",
              belongsTo: engineeringMapId
            }, {
              subject: "In pipe",
              foci: "2P",
              classNumber: "1551",
              belongsTo: engineeringMapId
            }, {
              subject: "In channel",
              foci: "2P",
              classNumber: "1552",
              belongsTo: engineeringMapId
            }, {
              subject: "Pneumatics",
              foci: "2P",
              classNumber: "18",
              belongsTo: engineeringMapId
            }, {
              subject: "Flow",
              foci: "2P",
              classNumber: "185",
              belongsTo: engineeringMapId
            }, {
              subject: "In tube",
              foci: "2P",
              classNumber: "1851",
              belongsTo: engineeringMapId
            }, {
              subject: "Air current",
              foci: "2P",
              classNumber: "1858",
              belongsTo: engineeringMapId
            }, {
              subject: "Surveying",
              foci: "2P",
              classNumber: "2",
              belongsTo: engineeringMapId
            }, {
              subject: "Levelling",
              foci: "2P",
              classNumber: "21",
              belongsTo: engineeringMapId
            }, {
              subject: "Land surveying",
              foci: "2P",
              classNumber: "22",
              belongsTo: engineeringMapId
            }, {
              subject: "Theodolite survey",
              foci: "2P",
              classNumber: "221",
              belongsTo: engineeringMapId
            }, {
              subject: "Aerial surveying",
              foci: "2P",
              classNumber: "28",
              belongsTo: engineeringMapId
            }, {
              subject: "Strength of material",
              foci: "2P",
              classNumber: "32",
              belongsTo: engineeringMapId
            }, {
              subject: "Elastic stability",
              foci: "2P",
              classNumber: "35",
              belongsTo: engineeringMapId
            }, {
              subject: "Design or Drawing",
              foci: "2P",
              classNumber: "4",
              belongsTo: engineeringMapId
            }, {
              subject: "Specification or Quantity",
              foci: "2P",
              classNumber: "5",
              belongsTo: engineeringMapId
            }, {
              subject: "Estimate",
              foci: "2P",
              classNumber: "6",
              belongsTo: engineeringMapId
            }, {
              subject: "Construction (execution)",
              foci: "2P",
              classNumber: "7",
              belongsTo: engineeringMapId
            }, {
              subject: "Earthwork and excavation",
              foci: "2P",
              classNumber: "71",
              belongsTo: engineeringMapId
            }, {
              subject: "Form work",
              foci: "2P",
              classNumber: "76",
              belongsTo: engineeringMapId
            }, {
              subject: "Working, etc.",
              foci: "2P",
              classNumber: "8",
              belongsTo: engineeringMapId
            }, {
              subject: "Testing",
              foci: "2P",
              classNumber: "81",
              belongsTo: engineeringMapId
            }, {
              subject: "Maintenance",
              foci: "2P",
              classNumber: "82",
              belongsTo: engineeringMapId
            }, {
              subject: "Renewal",
              foci: "2P",
              classNumber: "825",
              belongsTo: engineeringMapId
            }, {
              subject: "Working",
              foci: "2P",
              classNumber: "83",
              belongsTo: engineeringMapId
            }, {
              subject: "Repair",
              foci: "2P",
              classNumber: "85",
              belongsTo: engineeringMapId
            }, {
              subject: "Relief or Rescue",
              foci: "2P",
              classNumber: "96",
              belongsTo: engineeringMapId
            }, {
              subject: "Applied mechanics",
              foci: "2P",
              classNumber: "1",
              belongsTo: engineeringMapId
            }, {
              subject: "Structural",
              foci: "2P",
              classNumber: "11",
              belongsTo: engineeringMapId
            }, {
              subject: "Beam or Cantilever",
              foci: "2P",
              classNumber: "111",
              belongsTo: engineeringMapId
            }, {
              subject: "Column",
              foci: "2P",
              classNumber: "112",
              belongsTo: engineeringMapId
            }, {
              subject: "Frame",
              foci: "2P",
              classNumber: "113",
              belongsTo: engineeringMapId
            }, {
              subject: "Moving load",
              foci: "2P",
              classNumber: "114",
              belongsTo: engineeringMapId
            }, {
              subject: "Retaining wall",
              foci: "2P",
              classNumber: "115",
              belongsTo: engineeringMapId
            }, {
              subject: "Slab",
              foci: "2P",
              classNumber: "116",
              belongsTo: engineeringMapId
            }, {
              subject: "Arch",
              foci: "2P",
              classNumber: "117",
              belongsTo: engineeringMapId
            }, {
              subject: "Wind stress",
              foci: "2P",
              classNumber: "118",
              belongsTo: engineeringMapId
            }, {
              subject: "Chimney",
              foci: "2P",
              classNumber: "1194",
              belongsTo: engineeringMapId
            }, {
              subject: "Graphical statics",
              foci: "2P",
              classNumber: "13",
              belongsTo: engineeringMapId
            }, {
              subject: "Hydraulics",
              foci: "2P",
              classNumber: "15",
              belongsTo: engineeringMapId
            }, {
              subject: "Catchment",
              foci: "2P",
              classNumber: "151",
              belongsTo: engineeringMapId
            }, {
              subject: "Flow",
              foci: "2P",
              classNumber: "155",
              belongsTo: engineeringMapId
            }, {
              subject: "In pipe",
              foci: "2P",
              classNumber: "1551",
              belongsTo: engineeringMapId
            }, {
              subject: "In channel",
              foci: "2P",
              classNumber: "1552",
              belongsTo: engineeringMapId
            }, {
              subject: "Pneumatics",
              foci: "2P",
              classNumber: "18",
              belongsTo: engineeringMapId
            }, {
              subject: "Flow",
              foci: "2P",
              classNumber: "185",
              belongsTo: engineeringMapId
            }, {
              subject: "In tube",
              foci: "2P",
              classNumber: "1851",
              belongsTo: engineeringMapId
            }, {
              subject: "Air current",
              foci: "2P",
              classNumber: "1858",
              belongsTo: engineeringMapId
            }, {
              subject: "Surveying",
              foci: "2P",
              classNumber: "2",
              belongsTo: engineeringMapId
            }, {
              subject: "Levelling",
              foci: "2P",
              classNumber: "21",
              belongsTo: engineeringMapId
            }, {
              subject: "Land surveying",
              foci: "2P",
              classNumber: "22",
              belongsTo: engineeringMapId
            }, {
              subject: "Theodolite survey",
              foci: "2P",
              classNumber: "221",
              belongsTo: engineeringMapId
            }, {
              subject: "Aerial surveying",
              foci: "2P",
              classNumber: "28",
              belongsTo: engineeringMapId
            }, {
              subject: "Strength of material",
              foci: "2P",
              classNumber: "32",
              belongsTo: engineeringMapId
            }, {
              subject: "Elastic stability",
              foci: "2P",
              classNumber: "35",
              belongsTo: engineeringMapId
            }, {
              subject: "Design or Drawing",
              foci: "2P",
              classNumber: "4",
              belongsTo: engineeringMapId
            }, {
              subject: "Specification or Quantity",
              foci: "2P",
              classNumber: "5",
              belongsTo: engineeringMapId
            }, {
              subject: "Estimate",
              foci: "2P",
              classNumber: "6",
              belongsTo: engineeringMapId
            }, {
              subject: "Construction (execution)",
              foci: "2P",
              classNumber: "7",
              belongsTo: engineeringMapId
            }, {
              subject: "Earthwork and excavation",
              foci: "2P",
              classNumber: "71",
              belongsTo: engineeringMapId
            }, {
              subject: "Form work",
              foci: "2P",
              classNumber: "76",
              belongsTo: engineeringMapId
            }, {
              subject: "Working, etc.",
              foci: "2P",
              classNumber: "8",
              belongsTo: engineeringMapId
            }, {
              subject: "Testing",
              foci: "2P",
              classNumber: "81",
              belongsTo: engineeringMapId
            }, {
              subject: "Maintenance",
              foci: "2P",
              classNumber: "82",
              belongsTo: engineeringMapId
            }, {
              subject: "Renewal",
              foci: "2P",
              classNumber: "825",
              belongsTo: engineeringMapId
            }, {
              subject: "Working",
              foci: "2P",
              classNumber: "83",
              belongsTo: engineeringMapId
            }, {
              subject: "Repair",
              foci: "2P",
              classNumber: "85",
              belongsTo: engineeringMapId
            }, {
              subject: "Relief or Rescue",
              foci: "2P",
              classNumber: "96",
              belongsTo: engineeringMapId
            }, {
              subject: "Divisions of Common Isolate digit e",
              foci: "0",
              classNumber: "0",
              belongsTo: engineeringMapId
            }, {
              subject: "Resistance metre",
              foci: "2P",
              classNumber: "e1",
              belongsTo: engineeringMapId
            }, {
              subject: "Ohm meter",
              foci: "2P",
              classNumber: "e11",
              belongsTo: engineeringMapId
            }, {
              subject: "Resistance box",
              foci: "2P",
              classNumber: "e12",
              belongsTo: engineeringMapId
            }, {
              subject: "Wheatstones bridge",
              foci: "2P",
              classNumber: "e16",
              belongsTo: engineeringMapId
            }, {
              subject: "Voltage meter",
              foci: "2P",
              classNumber: "e2",
              belongsTo: engineeringMapId
            }, {
              subject: "Volt meter",
              foci: "2P",
              classNumber: "e21",
              belongsTo: engineeringMapId
            }, {
              subject: "Voltage meter",
              foci: "2P",
              classNumber: "e211",
              belongsTo: engineeringMapId
            }, {
              subject: "Current meter",
              foci: "2P",
              classNumber: "e3",
              belongsTo: engineeringMapId
            }, {
              subject: "Ammeter",
              foci: "2P",
              classNumber: "e31",
              belongsTo: engineeringMapId
            }, {
              subject: "Coulombmeter",
              foci: "2P",
              classNumber: "e32",
              belongsTo: engineeringMapId
            }, {
              subject: "Ampere hour meter",
              foci: "2P",
              classNumber: "e33",
              belongsTo: engineeringMapId
            }, {
              subject: "Voltameter",
              foci: "2P",
              classNumber: "e34",
              belongsTo: engineeringMapId
            }, {
              subject: "Quantity meter",
              foci: "2P",
              classNumber: "e4",
              belongsTo: engineeringMapId
            }, {
              subject: "Watt meter",
              foci: "2P",
              classNumber: "e41",
              belongsTo: engineeringMapId
            }, {
              subject: "Energy meter",
              foci: "2P",
              classNumber: "e5",
              belongsTo: engineeringMapId
            }, {
              subject: "Watt hour meter",
              foci: "2P",
              classNumber: "e51",
              belongsTo: engineeringMapId
            }, {
              subject: "Power factor meter",
              foci: "2P",
              classNumber: "e52",
              belongsTo: engineeringMapId
            }];
            seedChemistryData = [{
              subject: "Inorganic substance",
              foci: "P",
              classNumber: "1",
              belongsTo: chemistryMapId
            }, {
              subject: "Group 0",
              foci: "P",
              classNumber: "10",
              belongsTo: chemistryMapId
            }, {
              subject: "Helium (He)",
              foci: "P",
              classNumber: "100",
              belongsTo: chemistryMapId
            }, {
              subject: "Neon (Ne)",
              foci: "P",
              classNumber: "101",
              belongsTo: chemistryMapId
            }, {
              subject: "Argon (A)",
              foci: "P",
              classNumber: "102",
              belongsTo: chemistryMapId
            }, {
              subject: "Krypton (Kr)",
              foci: "P",
              classNumber: "104",
              belongsTo: chemistryMapId
            }, {
              subject: "Xenon (Xe)",
              foci: "P",
              classNumber: "106",
              belongsTo: chemistryMapId
            }, {
              subject: "Niton (Nt)",
              foci: "P",
              classNumber: "109",
              belongsTo: chemistryMapId
            }, {
              subject: "Group 1",
              foci: "P",
              classNumber: "11",
              belongsTo: chemistryMapId
            }, {
              subject: "Hydrogen (H)",
              foci: "P",
              classNumber: "110",
              belongsTo: chemistryMapId
            }, {
              subject: "Lithium (Li)",
              foci: "P",
              classNumber: "1109",
              belongsTo: chemistryMapId
            }, {
              subject: "Sodium (Na)",
              foci: "P",
              classNumber: "111",
              belongsTo: chemistryMapId
            }, {
              subject: "Potassium (K)",
              foci: "P",
              classNumber: "112",
              belongsTo: chemistryMapId
            }, {
              subject: "Ammonium",
              foci: "P",
              classNumber: "1129",
              belongsTo: chemistryMapId
            }, {
              subject: "Copper (Cu)",
              foci: "P",
              classNumber: "113",
              belongsTo: chemistryMapId
            }, {
              subject: "Rubidium (Rb)",
              foci: "P",
              classNumber: "114",
              belongsTo: chemistryMapId
            }, {
              subject: "Silver (Ag)",
              foci: "P",
              classNumber: "115",
              belongsTo: chemistryMapId
            }, {
              subject: "Cesium (Cs)",
              foci: "P",
              classNumber: "116",
              belongsTo: chemistryMapId
            }, {
              subject: "Dyspriosium (Dy or Ds)",
              foci: "P",
              classNumber: "117",
              belongsTo: chemistryMapId
            }, {
              subject: "Holmium (Ho)",
              foci: "P",
              classNumber: "1179",
              belongsTo: chemistryMapId
            }, {
              subject: "Gold (Au)",
              foci: "P",
              classNumber: "118",
              belongsTo: chemistryMapId
            }, {
              subject: "Francium (Fr)",
              foci: "P",
              classNumber: "1191",
              belongsTo: chemistryMapId
            }, {
              subject: "Group 2",
              foci: "P",
              classNumber: "12",
              belongsTo: chemistryMapId
            }, {
              subject: "Beryllium (Be)",
              foci: "P",
              classNumber: "120",
              belongsTo: chemistryMapId
            }, {
              subject: "Magnesium (Mg)",
              foci: "P",
              classNumber: "121",
              belongsTo: chemistryMapId
            }, {
              subject: "Calcium (Ca)",
              foci: "P",
              classNumber: "122",
              belongsTo: chemistryMapId
            }, {
              subject: "Zinc (Zn)",
              foci: "P",
              classNumber: "123",
              belongsTo: chemistryMapId
            }, {
              subject: "Strontium (Sr)",
              foci: "P",
              classNumber: "124",
              belongsTo: chemistryMapId
            }, {
              subject: "Cadmium (Cd)",
              foci: "P",
              classNumber: "125",
              belongsTo: chemistryMapId
            }, {
              subject: "Barium (Ba)",
              foci: "P",
              classNumber: "126",
              belongsTo: chemistryMapId
            }, {
              subject: "Erbium (Er)",
              foci: "P",
              classNumber: "127",
              belongsTo: chemistryMapId
            }, {
              subject: "Thulium (Tm or Tu)",
              foci: "P",
              classNumber: "1279",
              belongsTo: chemistryMapId
            }, {
              subject: "Mercury (Hg)",
              foci: "P",
              classNumber: "128",
              belongsTo: chemistryMapId
            }, {
              subject: "Radium (Ra)",
              foci: "P",
              classNumber: "129",
              belongsTo: chemistryMapId
            }, {
              subject: "Group 3",
              foci: "P",
              classNumber: "13",
              belongsTo: chemistryMapId
            }, {
              subject: "Boron (B)",
              foci: "P",
              classNumber: "130",
              belongsTo: chemistryMapId
            }, {
              subject: "Aluminium (Al)",
              foci: "P",
              classNumber: "131",
              belongsTo: chemistryMapId
            }, {
              subject: "Scandium (Sc)",
              foci: "P",
              classNumber: "132",
              belongsTo: chemistryMapId
            }, {
              subject: "Gallium (Ga)",
              foci: "P",
              classNumber: "133",
              belongsTo: chemistryMapId
            }, {
              subject: "Yttrium (Yt or Y)",
              foci: "P",
              classNumber: "134",
              belongsTo: chemistryMapId
            }, {
              subject: "Indium (In)",
              foci: "P",
              classNumber: "135",
              belongsTo: chemistryMapId
            }, {
              subject: "Lanthanum (La)",
              foci: "P",
              classNumber: "136",
              belongsTo: chemistryMapId
            }, {
              subject: "Ytterbium (Yb)",
              foci: "P",
              classNumber: "137",
              belongsTo: chemistryMapId
            }, {
              subject: "Lutecium (Lu)",
              foci: "P",
              classNumber: "1379",
              belongsTo: chemistryMapId
            }, {
              subject: "Thallium (Tl)",
              foci: "P",
              classNumber: "138",
              belongsTo: chemistryMapId
            }, {
              subject: "Actinium (Ac)",
              foci: "P",
              classNumber: "1391",
              belongsTo: chemistryMapId
            }, {
              subject: "Promethium (Pm)",
              foci: "P",
              classNumber: "1392",
              belongsTo: chemistryMapId
            }, {
              subject: "Group 4",
              foci: "P",
              classNumber: "14",
              belongsTo: chemistryMapId
            }, {
              subject: "Carbon ( C )",
              foci: "P",
              classNumber: "140",
              belongsTo: chemistryMapId
            }, {
              subject: "Silicon (Si)",
              foci: "P",
              classNumber: "141",
              belongsTo: chemistryMapId
            }, {
              subject: "Titanium (Ti)",
              foci: "P",
              classNumber: "142",
              belongsTo: chemistryMapId
            }, {
              subject: "Germanium (Ge)",
              foci: "P",
              classNumber: "143",
              belongsTo: chemistryMapId
            }, {
              subject: "Zirconium (Zr)",
              foci: "P",
              classNumber: "144",
              belongsTo: chemistryMapId
            }, {
              subject: "Tin (Sn)",
              foci: "P",
              classNumber: "145",
              belongsTo: chemistryMapId
            }, {
              subject: "Cerium",
              foci: "P",
              classNumber: "146",
              belongsTo: chemistryMapId
            }, {
              subject: "Prascodymium (Pr)",
              foci: "P",
              classNumber: "1469",
              belongsTo: chemistryMapId
            }, {
              subject: "Celtium (Ct) or (Hf)",
              foci: "P",
              classNumber: "147",
              belongsTo: chemistryMapId
            }, {
              subject: "Lead (Pb)",
              foci: "P",
              classNumber: "148",
              belongsTo: chemistryMapId
            }, {
              subject: "Thorium (Th)",
              foci: "P",
              classNumber: "149",
              belongsTo: chemistryMapId
            }, {
              subject: "Group 5",
              foci: "P",
              classNumber: "15",
              belongsTo: chemistryMapId
            }, {
              subject: "Nitrogen 9N)",
              foci: "P",
              classNumber: "150",
              belongsTo: chemistryMapId
            }, {
              subject: "Phosphorus (P)",
              foci: "P",
              classNumber: "151",
              belongsTo: chemistryMapId
            }, {
              subject: "Vanadium (V)",
              foci: "P",
              classNumber: "152",
              belongsTo: chemistryMapId
            }, {
              subject: "Arsenic (As)",
              foci: "P",
              classNumber: "153",
              belongsTo: chemistryMapId
            }, {
              subject: "Columbium (Cb) or Niobium (Nb)",
              foci: "P",
              classNumber: "154",
              belongsTo: chemistryMapId
            }, {
              subject: "Antiomony (Sb)",
              foci: "P",
              classNumber: "155",
              belongsTo: chemistryMapId
            }, {
              subject: "Neodymium (Nd)",
              foci: "P",
              classNumber: "156",
              belongsTo: chemistryMapId
            }, {
              subject: "Tantalum (Ta)",
              foci: "P",
              classNumber: "157",
              belongsTo: chemistryMapId
            }, {
              subject: "Bismuth (Bi)",
              foci: "P",
              classNumber: "158",
              belongsTo: chemistryMapId
            }, {
              subject: "Protoactinium (Pa)",
              foci: "P",
              classNumber: "159",
              belongsTo: chemistryMapId
            }, {
              subject: "Group 6",
              foci: "P",
              classNumber: "16",
              belongsTo: chemistryMapId
            }, {
              subject: "Oxygen (O)",
              foci: "P",
              classNumber: "160",
              belongsTo: chemistryMapId
            }, {
              subject: "Sulphur (S)",
              foci: "P",
              classNumber: "161",
              belongsTo: chemistryMapId
            }, {
              subject: "Chromium (Cr)",
              foci: "P",
              classNumber: "162",
              belongsTo: chemistryMapId
            }, {
              subject: "Selenium (SE)",
              foci: "P",
              classNumber: "163",
              belongsTo: chemistryMapId
            }, {
              subject: "Molybdenum (Mo)",
              foci: "P",
              classNumber: "164",
              belongsTo: chemistryMapId
            }, {
              subject: "Tellurium (Te)",
              foci: "P",
              classNumber: "165",
              belongsTo: chemistryMapId
            }, {
              subject: "Samarium (Sm)",
              foci: "P",
              classNumber: "166",
              belongsTo: chemistryMapId
            }, {
              subject: "Europium (Eu)",
              foci: "P",
              classNumber: "1669",
              belongsTo: chemistryMapId
            }, {
              subject: "Tungsten (W)",
              foci: "P",
              classNumber: "167",
              belongsTo: chemistryMapId
            }, {
              subject: "Polonium (Po)",
              foci: "P",
              classNumber: "168",
              belongsTo: chemistryMapId
            }, {
              subject: "Uranium (U)",
              foci: "P",
              classNumber: "1691",
              belongsTo: chemistryMapId
            }, {
              subject: "Neptunium (NP)",
              foci: "P",
              classNumber: "1692",
              belongsTo: chemistryMapId
            }, {
              subject: "Plutonium (Pu)",
              foci: "P",
              classNumber: "1693",
              belongsTo: chemistryMapId
            }, {
              subject: "Americium (Am)",
              foci: "P",
              classNumber: "1694",
              belongsTo: chemistryMapId
            }, {
              subject: "Curium (Cm)",
              foci: "P",
              classNumber: "1695",
              belongsTo: chemistryMapId
            }, {
              subject: "Berkelium (Bk0",
              foci: "P",
              classNumber: "1696",
              belongsTo: chemistryMapId
            }, {
              subject: "Califormium (Cf)",
              foci: "P",
              classNumber: "1697",
              belongsTo: chemistryMapId
            }, {
              subject: "Group 7",
              foci: "P",
              classNumber: "17",
              belongsTo: chemistryMapId
            }, {
              subject: "Flurine (F)",
              foci: "P",
              classNumber: "170",
              belongsTo: chemistryMapId
            }, {
              subject: "Chlorine (Cl)",
              foci: "P",
              classNumber: "171",
              belongsTo: chemistryMapId
            }, {
              subject: "Manganese (Mn)",
              foci: "P",
              classNumber: "172",
              belongsTo: chemistryMapId
            }, {
              subject: "Bromine (Br)",
              foci: "P",
              classNumber: "173",
              belongsTo: chemistryMapId
            }, {
              subject: "Technetium (Je)",
              foci: "P",
              classNumber: "174",
              belongsTo: chemistryMapId
            }, {
              subject: "Iodine (I) or (J)",
              foci: "P",
              classNumber: "175",
              belongsTo: chemistryMapId
            }, {
              subject: "Gadolinium (Gd)",
              foci: "P",
              classNumber: "176",
              belongsTo: chemistryMapId
            }, {
              subject: "Terbium (Tb)",
              foci: "P",
              classNumber: "1769",
              belongsTo: chemistryMapId
            }, {
              subject: "Rhenium (Re)",
              foci: "P",
              classNumber: "177",
              belongsTo: chemistryMapId
            }, {
              subject: "Astatine (At)",
              foci: "P",
              classNumber: "178",
              belongsTo: chemistryMapId
            }, {
              subject: "Group 8",
              foci: "P",
              classNumber: "18",
              belongsTo: chemistryMapId
            }, {
              subject: "Iron (Fe)",
              foci: "P",
              classNumber: "182",
              belongsTo: chemistryMapId
            }, {
              subject: "Nickel (Ni)",
              foci: "P",
              classNumber: "1829",
              belongsTo: chemistryMapId
            }, {
              subject: "Cobalt (Co)",
              foci: "P",
              classNumber: "183",
              belongsTo: chemistryMapId
            }, {
              subject: "Ruthenium (Ru)",
              foci: "P",
              classNumber: "184",
              belongsTo: chemistryMapId
            }, {
              subject: "Palladium (Pd)",
              foci: "P",
              classNumber: "1849",
              belongsTo: chemistryMapId
            }, {
              subject: "Rhodium (Rh)",
              foci: "P",
              classNumber: "185",
              belongsTo: chemistryMapId
            }, {
              subject: "Osmium (Os)",
              foci: "P",
              classNumber: "187",
              belongsTo: chemistryMapId
            }, {
              subject: "Platium (Pt)",
              foci: "P",
              classNumber: "1879",
              belongsTo: chemistryMapId
            }, {
              subject: "Iridium (Ir)",
              foci: "P",
              classNumber: "188",
              belongsTo: chemistryMapId
            }, {
              subject: "Metal",
              foci: "P",
              classNumber: "191",
              belongsTo: chemistryMapId
            }, {
              subject: "Nobel metal",
              foci: "P",
              classNumber: "1911",
              belongsTo: chemistryMapId
            }, {
              subject: "Radio active metal",
              foci: "P",
              classNumber: "1917",
              belongsTo: chemistryMapId
            }, {
              subject: "Rare element",
              foci: "P",
              classNumber: "192",
              belongsTo: chemistryMapId
            }, {
              subject: "Lantharides (Rare earths)",
              foci: "P",
              classNumber: "1921",
              belongsTo: chemistryMapId
            }, {
              subject: "Aetinides (Transuranic)",
              foci: "P",
              classNumber: "1923",
              belongsTo: chemistryMapId
            }, {
              subject: "Alloy",
              foci: "P",
              classNumber: "193",
              belongsTo: chemistryMapId
            }, {
              subject: "Non metal",
              foci: "P",
              classNumber: "195",
              belongsTo: chemistryMapId
            }, {
              subject: "Isotope",
              foci: "P",
              classNumber: "196",
              belongsTo: chemistryMapId
            }, {
              subject: "Gas",
              foci: "P",
              classNumber: "198",
              belongsTo: chemistryMapId
            }, {
              subject: "Air",
              foci: "P",
              classNumber: "1981",
              belongsTo: chemistryMapId
            }, {
              subject: "Hydroxyl or Basic oxide",
              foci: "P",
              classNumber: "2",
              belongsTo: chemistryMapId
            }, {
              subject: "Binary other than water, which is neither hydroxyl nor acid or salt",
              foci: "P",
              classNumber: "27",
              belongsTo: chemistryMapId
            }, {
              subject: "Hydride",
              foci: "P",
              classNumber: "2710",
              belongsTo: chemistryMapId
            }, {
              subject: "Acid or Acidic oxide",
              foci: "P",
              classNumber: "4",
              belongsTo: chemistryMapId
            }, {
              subject: "Salt",
              foci: "P",
              classNumber: "5",
              belongsTo: chemistryMapId
            }, {
              subject: "Organic substances",
              foci: "P",
              classNumber: "6",
              belongsTo: chemistryMapId
            }, {
              subject: "Aliphatic compound",
              foci: "P",
              classNumber: "61",
              belongsTo: chemistryMapId
            }, {
              subject: "Methane",
              foci: "P",
              classNumber: "611",
              belongsTo: chemistryMapId
            }, {
              subject: "Ethane",
              foci: "P",
              classNumber: "612",
              belongsTo: chemistryMapId
            }, {
              subject: "Propane",
              foci: "P",
              classNumber: "613",
              belongsTo: chemistryMapId
            }, {
              subject: "Butane",
              foci: "P",
              classNumber: "614",
              belongsTo: chemistryMapId
            }, {
              subject: "Pentane",
              foci: "P",
              classNumber: "615",
              belongsTo: chemistryMapId
            }, {
              subject: "Hexane",
              foci: "P",
              classNumber: "616",
              belongsTo: chemistryMapId
            }, {
              subject: "nth homologue",
              foci: "P",
              classNumber: "618",
              belongsTo: chemistryMapId
            }, {
              subject: "Olefine",
              foci: "P",
              classNumber: "63",
              belongsTo: chemistryMapId
            }, {
              subject: "Ethylene",
              foci: "P",
              classNumber: "632",
              belongsTo: chemistryMapId
            }, {
              subject: "Propylene",
              foci: "P",
              classNumber: "633",
              belongsTo: chemistryMapId
            }, {
              subject: "Butylene",
              foci: "P",
              classNumber: "634",
              belongsTo: chemistryMapId
            }, {
              subject: "nth homologue",
              foci: "P",
              classNumber: "638",
              belongsTo: chemistryMapId
            }, {
              subject: "Di olefines or allene",
              foci: "P",
              classNumber: "64",
              belongsTo: chemistryMapId
            }, {
              subject: "Allene",
              foci: "P",
              classNumber: "641",
              belongsTo: chemistryMapId
            }, {
              subject: "Acetylene series",
              foci: "P",
              classNumber: "65",
              belongsTo: chemistryMapId
            }, {
              subject: "Acetylene",
              foci: "P",
              classNumber: "651",
              belongsTo: chemistryMapId
            }, {
              subject: "nth homologue",
              foci: "P",
              classNumber: "658",
              belongsTo: chemistryMapId
            }, {
              subject: "Carbohydrate",
              foci: "P",
              classNumber: "68",
              belongsTo: chemistryMapId
            }, {
              subject: "Monosaccharide",
              foci: "P",
              classNumber: "681",
              belongsTo: chemistryMapId
            }, {
              subject: "Pentose",
              foci: "P",
              classNumber: "6811",
              belongsTo: chemistryMapId
            }, {
              subject: "Hexose",
              foci: "P",
              classNumber: "6813",
              belongsTo: chemistryMapId
            }, {
              subject: "Disaccharide",
              foci: "P",
              classNumber: "682",
              belongsTo: chemistryMapId
            }, {
              subject: "Maltose",
              foci: "P",
              classNumber: "6821",
              belongsTo: chemistryMapId
            }, {
              subject: "Trisaccharide",
              foci: "P",
              classNumber: "683",
              belongsTo: chemistryMapId
            }, {
              subject: "Polysaccharide",
              foci: "P",
              classNumber: "688",
              belongsTo: chemistryMapId
            }, {
              subject: "Pentosam",
              foci: "P",
              classNumber: "6891",
              belongsTo: chemistryMapId
            }, {
              subject: "Starch",
              foci: "P",
              classNumber: "6892",
              belongsTo: chemistryMapId
            }, {
              subject: "Gum",
              foci: "P",
              classNumber: "6893",
              belongsTo: chemistryMapId
            }, {
              subject: "Cellulose",
              foci: "P",
              classNumber: "6894",
              belongsTo: chemistryMapId
            }, {
              subject: "Glucoside",
              foci: "P",
              classNumber: "6898",
              belongsTo: chemistryMapId
            }, {
              subject: "Aromatic compound",
              foci: "P",
              classNumber: "7",
              belongsTo: chemistryMapId
            }, {
              subject: "Benzenoid",
              foci: "P",
              classNumber: "71",
              belongsTo: chemistryMapId
            }, {
              subject: "Benzene",
              foci: "P",
              classNumber: "711",
              belongsTo: chemistryMapId
            }, {
              subject: "Naphthalene",
              foci: "P",
              classNumber: "712",
              belongsTo: chemistryMapId
            }, {
              subject: "Anthracene",
              foci: "P",
              classNumber: "713",
              belongsTo: chemistryMapId
            }, {
              subject: "Polynuclear system",
              foci: "P",
              classNumber: "718",
              belongsTo: chemistryMapId
            }, {
              subject: "Non benzenoid",
              foci: "P",
              classNumber: "72",
              belongsTo: chemistryMapId
            }, {
              subject: "Cyclo pentadine",
              foci: "P",
              classNumber: "73",
              belongsTo: chemistryMapId
            }, {
              subject: "Tropane",
              foci: "P",
              classNumber: "74",
              belongsTo: chemistryMapId
            }, {
              subject: "Alycyclic",
              foci: "P",
              classNumber: "79",
              belongsTo: chemistryMapId
            }, {
              subject: "Heterocyclic compound",
              foci: "P",
              classNumber: "8",
              belongsTo: chemistryMapId
            }, {
              subject: "Oxygen ring",
              foci: "P",
              classNumber: "84",
              belongsTo: chemistryMapId
            }, {
              subject: "Nitrogen ring",
              foci: "P",
              classNumber: "85",
              belongsTo: chemistryMapId
            }, {
              subject: "Sulphur ring",
              foci: "P",
              classNumber: "86",
              belongsTo: chemistryMapId
            }, {
              subject: "Other ring",
              foci: "P",
              classNumber: "88",
              belongsTo: chemistryMapId
            }, {
              subject: "Bio substance",
              foci: "P",
              classNumber: "9",
              belongsTo: chemistryMapId
            }, {
              subject: "Alkaloid",
              foci: "P",
              classNumber: "92",
              belongsTo: chemistryMapId
            }, {
              subject: "Vegetable alkaloid",
              foci: "P",
              classNumber: "92J",
              belongsTo: chemistryMapId
            }, {
              subject: "Animal alkaloid",
              foci: "P",
              classNumber: "92K",
              belongsTo: chemistryMapId
            }, {
              subject: "Amino acid",
              foci: "P",
              classNumber: "92Z",
              belongsTo: chemistryMapId
            }, {
              subject: "Polypeptide",
              foci: "P",
              classNumber: "92Z1",
              belongsTo: chemistryMapId
            }, {
              subject: "Protein",
              foci: "P",
              classNumber: "92Z2",
              belongsTo: chemistryMapId
            }, {
              subject: "Vegetable protein",
              foci: "P",
              classNumber: "92Z2 J",
              belongsTo: chemistryMapId
            }, {
              subject: "Animal protein",
              foci: "P",
              classNumber: "92Z2 K",
              belongsTo: chemistryMapId
            }, {
              subject: "Fat",
              foci: "P",
              classNumber: "94",
              belongsTo: chemistryMapId
            }, {
              subject: "Pigment",
              foci: "P",
              classNumber: "95",
              belongsTo: chemistryMapId
            }, {
              subject: "Lipin",
              foci: "P",
              classNumber: "96",
              belongsTo: chemistryMapId
            }, {
              subject: "Vitamin",
              foci: "P",
              classNumber: "97",
              belongsTo: chemistryMapId
            }, {
              subject: "Vitamin A",
              foci: "P",
              classNumber: "971",
              belongsTo: chemistryMapId
            }, {
              subject: "Vitamin B",
              foci: "P",
              classNumber: "972",
              belongsTo: chemistryMapId
            }, {
              subject: "Vitamin C",
              foci: "P",
              classNumber: "973",
              belongsTo: chemistryMapId
            }, {
              subject: "Vitamin D",
              foci: "P",
              classNumber: "974",
              belongsTo: chemistryMapId
            }, {
              subject: "Vitamin E",
              foci: "P",
              classNumber: "975",
              belongsTo: chemistryMapId
            }, {
              subject: "Vitamin G",
              foci: "P",
              classNumber: "977",
              belongsTo: chemistryMapId
            }, {
              subject: "Chlorophyll",
              foci: "P",
              classNumber: "981",
              belongsTo: chemistryMapId
            }, {
              subject: "Porphyrine",
              foci: "P",
              classNumber: "9814",
              belongsTo: chemistryMapId
            }, {
              subject: "€enzyme",
              foci: "P",
              classNumber: "982",
              belongsTo: chemistryMapId
            }, {
              subject: "€oxidase",
              foci: "P",
              classNumber: "9821",
              belongsTo: chemistryMapId
            }, {
              subject: "Hydrolytic enzyme",
              foci: "P",
              classNumber: "9822",
              belongsTo: chemistryMapId
            }, {
              subject: "Hormone",
              foci: "P",
              classNumber: "986",
              belongsTo: chemistryMapId
            }, {
              subject: "Cretine and creatinine",
              foci: "P",
              classNumber: "993",
              belongsTo: chemistryMapId
            }, {
              subject: "Pectin",
              foci: "P",
              classNumber: "994",
              belongsTo: chemistryMapId
            }, {
              subject: "Sterol",
              foci: "P",
              classNumber: "996",
              belongsTo: chemistryMapId
            }, {
              subject: "Tannim",
              foci: "P",
              classNumber: "998",
              belongsTo: chemistryMapId
            }, {
              subject: "Other substances by SD",
              foci: "0",
              classNumber: "0",
              belongsTo: chemistryMapId
            }, {
              subject: "For substance numbers 5, 6, 7, and 8 in [P]",
              foci: "0",
              classNumber: "0",
              belongsTo: chemistryMapId
            }, {
              subject: "Halogen derivative",
              foci: "P2",
              classNumber: "1",
              belongsTo: chemistryMapId
            }, {
              subject: "Hydroxyl (alcohol, phenol)",
              foci: "P2",
              classNumber: "2",
              belongsTo: chemistryMapId
            }, {
              subject: "Derivative of alcohol",
              foci: "P2",
              classNumber: "28",
              belongsTo: chemistryMapId
            }, {
              subject: "Ether",
              foci: "P2",
              classNumber: "281",
              belongsTo: chemistryMapId
            }, {
              subject: "Aldehyde",
              foci: "P2",
              classNumber: "2831",
              belongsTo: chemistryMapId
            }, {
              subject: "Ketone",
              foci: "P2",
              classNumber: "285",
              belongsTo: chemistryMapId
            }, {
              subject: "Organic acid",
              foci: "P2",
              classNumber: "3",
              belongsTo: chemistryMapId
            }, {
              subject: "Derivative of acid",
              foci: "P2",
              classNumber: "38",
              belongsTo: chemistryMapId
            }, {
              subject: "Ester",
              foci: "P2",
              classNumber: "383",
              belongsTo: chemistryMapId
            }, {
              subject: "Anhydride",
              foci: "P2",
              classNumber: "385",
              belongsTo: chemistryMapId
            }, {
              subject: "Nitrogen compound",
              foci: "P2",
              classNumber: "5",
              belongsTo: chemistryMapId
            }, {
              subject: "Amino compound",
              foci: "P2",
              classNumber: "51",
              belongsTo: chemistryMapId
            }, {
              subject: "Azo copmpound",
              foci: "P2",
              classNumber: "537",
              belongsTo: chemistryMapId
            }, {
              subject: "Diazo compound",
              foci: "P2",
              classNumber: "55",
              belongsTo: chemistryMapId
            }, {
              subject: "Nitro compound",
              foci: "P2",
              classNumber: "7",
              belongsTo: chemistryMapId
            }, {
              subject: "Other nitrogen compound",
              foci: "P2",
              classNumber: "59",
              belongsTo: chemistryMapId
            }, {
              subject: "Cyanogen compound",
              foci: "P2",
              classNumber: "591",
              belongsTo: chemistryMapId
            }, {
              subject: "Sulphur compound",
              foci: "P2",
              classNumber: "6",
              belongsTo: chemistryMapId
            }, {
              subject: "Compound with other element",
              foci: "P2",
              classNumber: "8",
              belongsTo: chemistryMapId
            }, {
              subject: "General",
              foci: "E",
              classNumber: "1",
              belongsTo: chemistryMapId
            }, {
              subject: "Preparation",
              foci: "E",
              classNumber: "11",
              belongsTo: chemistryMapId
            }, {
              subject: "Atomic weight or Molecular weight",
              foci: "E",
              classNumber: "14",
              belongsTo: chemistryMapId
            }, {
              subject: "Periodic system",
              foci: "E",
              classNumber: "17",
              belongsTo: chemistryMapId
            }, {
              subject: "Physical chemistry",
              foci: "E",
              classNumber: "2",
              belongsTo: chemistryMapId
            }, {
              subject: "Chemical combination and action",
              foci: "E",
              classNumber: "21",
              belongsTo: chemistryMapId
            }, {
              subject: "Law of chemical combination",
              foci: "E",
              classNumber: "211",
              belongsTo: chemistryMapId
            }, {
              subject: "Chemical kinetics",
              foci: "E",
              classNumber: "213",
              belongsTo: chemistryMapId
            }, {
              subject: "Combustion or Flame",
              foci: "E",
              classNumber: "2131",
              belongsTo: chemistryMapId
            }, {
              subject: "Phase rule",
              foci: "E",
              classNumber: "2133",
              belongsTo: chemistryMapId
            }, {
              subject: "Ionisation",
              foci: "E",
              classNumber: "2136",
              belongsTo: chemistryMapId
            }, {
              subject: "Chemical affinity",
              foci: "E",
              classNumber: "214",
              belongsTo: chemistryMapId
            }, {
              subject: "Valency",
              foci: "E",
              classNumber: "215",
              belongsTo: chemistryMapId
            }, {
              subject: "Molecular structure",
              foci: "E",
              classNumber: "218",
              belongsTo: chemistryMapId
            }, {
              subject: "Solution",
              foci: "E",
              classNumber: "22",
              belongsTo: chemistryMapId
            }, {
              subject: "Solubility",
              foci: "E",
              classNumber: "2201",
              belongsTo: chemistryMapId
            }, {
              subject: "Solid",
              foci: "E",
              classNumber: "221",
              belongsTo: chemistryMapId
            }, {
              subject: "Liquid",
              foci: "E",
              classNumber: "225",
              belongsTo: chemistryMapId
            }, {
              subject: "Gas",
              foci: "E",
              classNumber: "228",
              belongsTo: chemistryMapId
            }, {
              subject: "Mixture",
              foci: "E",
              classNumber: "23",
              belongsTo: chemistryMapId
            }, {
              subject: "Alloy",
              foci: "E",
              classNumber: "231",
              belongsTo: chemistryMapId
            }, {
              subject: "Absorption (surface phenomena)",
              foci: "E",
              classNumber: "232",
              belongsTo: chemistryMapId
            }, {
              subject: "Colloid",
              foci: "E",
              classNumber: "235",
              belongsTo: chemistryMapId
            }, {
              subject: "Emulsion",
              foci: "E",
              classNumber: "236",
              belongsTo: chemistryMapId
            }, {
              subject: "Osmosis",
              foci: "E",
              classNumber: "237",
              belongsTo: chemistryMapId
            }, {
              subject: "Aerosol",
              foci: "E",
              classNumber: "238",
              belongsTo: chemistryMapId
            }, {
              subject: "Occlusion",
              foci: "E",
              classNumber: "2381",
              belongsTo: chemistryMapId
            }, {
              subject: "Chemical thermodynamics",
              foci: "E",
              classNumber: "24",
              belongsTo: chemistryMapId
            }, {
              subject: "Photochemistry",
              foci: "E",
              classNumber: "25",
              belongsTo: chemistryMapId
            }, {
              subject: "Electrochemistry",
              foci: "E",
              classNumber: "26",
              belongsTo: chemistryMapId
            }, {
              subject: "Magnetochemistry",
              foci: "E",
              classNumber: "27",
              belongsTo: chemistryMapId
            }, {
              subject: "Stereochemistry, etc.",
              foci: "E",
              classNumber: "28",
              belongsTo: chemistryMapId
            }, {
              subject: "Allotropy",
              foci: "E",
              classNumber: "281",
              belongsTo: chemistryMapId
            }, {
              subject: "Isomerism",
              foci: "E",
              classNumber: "282",
              belongsTo: chemistryMapId
            }, {
              subject: "Radiochemistry",
              foci: "E",
              classNumber: "296",
              belongsTo: chemistryMapId
            }, {
              subject: "Analytical chemistry",
              foci: "E",
              classNumber: "3",
              belongsTo: chemistryMapId
            }, {
              subject: "Qualitative",
              foci: "E",
              classNumber: "33",
              belongsTo: chemistryMapId
            }, {
              subject: "Quantitative",
              foci: "E",
              classNumber: "34",
              belongsTo: chemistryMapId
            }, {
              subject: "Volumetric",
              foci: "E",
              classNumber: "35",
              belongsTo: chemistryMapId
            }, {
              subject: "General",
              foci: "2P",
              classNumber: "1",
              belongsTo: chemistryMapId
            }, {
              subject: "Preparation",
              foci: "2P",
              classNumber: "11",
              belongsTo: chemistryMapId
            }, {
              subject: "Atomic weight or Molecular weight",
              foci: "2P",
              classNumber: "14",
              belongsTo: chemistryMapId
            }, {
              subject: "Periodic system",
              foci: "2P",
              classNumber: "17",
              belongsTo: chemistryMapId
            }, {
              subject: "Physical chemistry",
              foci: "2P",
              classNumber: "2",
              belongsTo: chemistryMapId
            }, {
              subject: "Chemical combination and action",
              foci: "2P",
              classNumber: "21",
              belongsTo: chemistryMapId
            }, {
              subject: "Law of chemical combination",
              foci: "2P",
              classNumber: "211",
              belongsTo: chemistryMapId
            }, {
              subject: "Chemical kinetics",
              foci: "2P",
              classNumber: "213",
              belongsTo: chemistryMapId
            }, {
              subject: "Combustion or Flame",
              foci: "2P",
              classNumber: "2131",
              belongsTo: chemistryMapId
            }, {
              subject: "Phase rule",
              foci: "2P",
              classNumber: "2133",
              belongsTo: chemistryMapId
            }, {
              subject: "Ionisation",
              foci: "2P",
              classNumber: "2136",
              belongsTo: chemistryMapId
            }, {
              subject: "Chemical affinity",
              foci: "2P",
              classNumber: "214",
              belongsTo: chemistryMapId
            }, {
              subject: "Valency",
              foci: "2P",
              classNumber: "215",
              belongsTo: chemistryMapId
            }, {
              subject: "Molecular structure",
              foci: "2P",
              classNumber: "218",
              belongsTo: chemistryMapId
            }, {
              subject: "Solution",
              foci: "2P",
              classNumber: "22",
              belongsTo: chemistryMapId
            }, {
              subject: "Solubility",
              foci: "2P",
              classNumber: "2201",
              belongsTo: chemistryMapId
            }, {
              subject: "Solid",
              foci: "2P",
              classNumber: "221",
              belongsTo: chemistryMapId
            }, {
              subject: "Liquid",
              foci: "2P",
              classNumber: "225",
              belongsTo: chemistryMapId
            }, {
              subject: "Gas",
              foci: "2P",
              classNumber: "228",
              belongsTo: chemistryMapId
            }, {
              subject: "Mixture",
              foci: "2P",
              classNumber: "23",
              belongsTo: chemistryMapId
            }, {
              subject: "Alloy",
              foci: "2P",
              classNumber: "231",
              belongsTo: chemistryMapId
            }, {
              subject: "Absorption (surface phenomena)",
              foci: "2P",
              classNumber: "232",
              belongsTo: chemistryMapId
            }, {
              subject: "Colloid",
              foci: "2P",
              classNumber: "235",
              belongsTo: chemistryMapId
            }, {
              subject: "Emulsion",
              foci: "2P",
              classNumber: "236",
              belongsTo: chemistryMapId
            }, {
              subject: "Osmosis",
              foci: "2P",
              classNumber: "237",
              belongsTo: chemistryMapId
            }, {
              subject: "Aerosol",
              foci: "2P",
              classNumber: "238",
              belongsTo: chemistryMapId
            }, {
              subject: "Occlusion",
              foci: "2P",
              classNumber: "2381",
              belongsTo: chemistryMapId
            }, {
              subject: "Chemical thermodynamics",
              foci: "2P",
              classNumber: "24",
              belongsTo: chemistryMapId
            }, {
              subject: "Photochemistry",
              foci: "2P",
              classNumber: "25",
              belongsTo: chemistryMapId
            }, {
              subject: "Electrochemistry",
              foci: "2P",
              classNumber: "26",
              belongsTo: chemistryMapId
            }, {
              subject: "Magnetochemistry",
              foci: "2P",
              classNumber: "27",
              belongsTo: chemistryMapId
            }, {
              subject: "Stereochemistry, etc.",
              foci: "2P",
              classNumber: "28",
              belongsTo: chemistryMapId
            }, {
              subject: "Allotropy",
              foci: "2P",
              classNumber: "281",
              belongsTo: chemistryMapId
            }, {
              subject: "Isomerism",
              foci: "2P",
              classNumber: "282",
              belongsTo: chemistryMapId
            }, {
              subject: "Radiochemistry",
              foci: "2P",
              classNumber: "296",
              belongsTo: chemistryMapId
            }, {
              subject: "Analytical chemistry",
              foci: "2P",
              classNumber: "3",
              belongsTo: chemistryMapId
            }, {
              subject: "Qualitative",
              foci: "2P",
              classNumber: "33",
              belongsTo: chemistryMapId
            }, {
              subject: "Quantitative",
              foci: "2P",
              classNumber: "34",
              belongsTo: chemistryMapId
            }, {
              subject: "Volumetric",
              foci: "2P",
              classNumber: "35",
              belongsTo: chemistryMapId
            }, {
              subject: "Analytical chemistry",
              foci: "2P2",
              classNumber: "3",
              belongsTo: chemistryMapId
            }, {
              subject: "Macro",
              foci: "2P2",
              classNumber: "1",
              belongsTo: chemistryMapId
            }, {
              subject: "Semi micro",
              foci: "2P2",
              classNumber: "2",
              belongsTo: chemistryMapId
            }, {
              subject: "Micro",
              foci: "2P2",
              classNumber: "3",
              belongsTo: chemistryMapId
            }, {
              subject: "Spot (ulltra micro)",
              foci: "2P2",
              classNumber: "5",
              belongsTo: chemistryMapId
            }, {
              subject: "Commercial",
              foci: "2P2",
              classNumber: "6",
              belongsTo: chemistryMapId
            }, {
              subject: "Non destructive",
              foci: "2P2",
              classNumber: "7",
              belongsTo: chemistryMapId
            }, {
              subject: "Method",
              foci: "2P2",
              classNumber: "A",
              belongsTo: chemistryMapId
            }, {
              subject: "Physical chemistry",
              foci: "2P2",
              classNumber: "B",
              belongsTo: chemistryMapId
            }, {
              subject: "Mechanical",
              foci: "2P2",
              classNumber: "C",
              belongsTo: chemistryMapId
            }, {
              subject: "Gravimetric",
              foci: "2P2",
              classNumber: "C1",
              belongsTo: chemistryMapId
            }, {
              subject: "Volumetric",
              foci: "2P2",
              classNumber: "C3",
              belongsTo: chemistryMapId
            }, {
              subject: "Thermal",
              foci: "2P2",
              classNumber: "D",
              belongsTo: chemistryMapId
            }, {
              subject: "Radiation",
              foci: "2P2",
              classNumber: "E",
              belongsTo: chemistryMapId
            }, {
              subject: "Colorimetry",
              foci: "2P2",
              classNumber: "E1",
              belongsTo: chemistryMapId
            }, {
              subject: "Diffraction",
              foci: "2P2",
              classNumber: "E3",
              belongsTo: chemistryMapId
            }, {
              subject: "Polarimetry",
              foci: "2P2",
              classNumber: "E4",
              belongsTo: chemistryMapId
            }, {
              subject: "Absorption",
              foci: "2P2",
              classNumber: "E5",
              belongsTo: chemistryMapId
            }, {
              subject: "Ultra violet",
              foci: "2P2",
              classNumber: "E52",
              belongsTo: chemistryMapId
            }, {
              subject: "X ray",
              foci: "2P2",
              classNumber: "E53",
              belongsTo: chemistryMapId
            }, {
              subject: "Infra red",
              foci: "2P2",
              classNumber: "E56",
              belongsTo: chemistryMapId
            }, {
              subject: "Raman spectra",
              foci: "2P2",
              classNumber: "E7",
              belongsTo: chemistryMapId
            }, {
              subject: "Nephelometry",
              foci: "2P2",
              classNumber: "E81",
              belongsTo: chemistryMapId
            }, {
              subject: "Turbidimetry",
              foci: "2P2",
              classNumber: "E82",
              belongsTo: chemistryMapId
            }, {
              subject: "Electrical",
              foci: "2P2",
              classNumber: "F",
              belongsTo: chemistryMapId
            }, {
              subject: "Magnetic",
              foci: "2P2",
              classNumber: "G",
              belongsTo: chemistryMapId
            }, {
              subject: "Nuclear",
              foci: "2P2",
              classNumber: "H",
              belongsTo: chemistryMapId
            }, {
              subject: "Chemical",
              foci: "2P2",
              classNumber: "J",
              belongsTo: chemistryMapId
            }, {
              subject: "Kinetic",
              foci: "2P2",
              classNumber: "M",
              belongsTo: chemistryMapId
            }, {
              subject: "Tirimetry",
              foci: "2P2",
              classNumber: "N",
              belongsTo: chemistryMapId
            }, {
              subject: "Electrochemical",
              foci: "2P2",
              classNumber: "T",
              belongsTo: chemistryMapId
            }, {
              subject: "Polarography",
              foci: "2P2",
              classNumber: "T1",
              belongsTo: chemistryMapId
            }, {
              subject: "Mass spectroscopy",
              foci: "2P2",
              classNumber: "T5",
              belongsTo: chemistryMapId
            }, {
              subject: "PH measurement",
              foci: "2P2",
              classNumber: "T6",
              belongsTo: chemistryMapId
            }, {
              subject: "Biological",
              foci: "2P2",
              classNumber: "X",
              belongsTo: chemistryMapId
            }, {
              subject: "Synthesis",
              foci: "2P2",
              classNumber: "4",
              belongsTo: chemistryMapId
            }, {
              subject: "Extraction",
              foci: "2P2",
              classNumber: "5",
              belongsTo: chemistryMapId
            }, {
              subject: "Manipulation",
              foci: "2P2",
              classNumber: "8",
              belongsTo: chemistryMapId
            }, {
              subject: "Oxidation or Reduction",
              foci: "2P2",
              classNumber: "81",
              belongsTo: chemistryMapId
            }, {
              subject: "Hydration or Dehydration",
              foci: "2P2",
              classNumber: "82",
              belongsTo: chemistryMapId
            }, {
              subject: "Crystallisation",
              foci: "2P2",
              classNumber: "831",
              belongsTo: chemistryMapId
            }, {
              subject: "Sublimation",
              foci: "2P2",
              classNumber: "832",
              belongsTo: chemistryMapId
            }, {
              subject: "Sedimentation",
              foci: "2P2",
              classNumber: "833",
              belongsTo: chemistryMapId
            }, {
              subject: "Distillation",
              foci: "2P2",
              classNumber: "835",
              belongsTo: chemistryMapId
            }, {
              subject: "Temperature",
              foci: "2P2",
              classNumber: "84",
              belongsTo: chemistryMapId
            }, {
              subject: "Humidity",
              foci: "2P2",
              classNumber: "845",
              belongsTo: chemistryMapId
            }, {
              subject: "Indicator and test paper",
              foci: "2P2",
              classNumber: "85",
              belongsTo: chemistryMapId
            }, {
              subject: "Polarisation",
              foci: "2P2",
              classNumber: "856",
              belongsTo: chemistryMapId
            }, {
              subject: "Electrical method",
              foci: "2P2",
              classNumber: "86",
              belongsTo: chemistryMapId
            }, {
              subject: "Fermentaion",
              foci: "2P2",
              classNumber: "87",
              belongsTo: chemistryMapId
            }, {
              subject: "Direct",
              foci: "2P2",
              classNumber: "871",
              belongsTo: chemistryMapId
            }, {
              subject: "Indirect",
              foci: "2P2",
              classNumber: "872",
              belongsTo: chemistryMapId
            }, {
              subject: "Symbiotic",
              foci: "2P2",
              classNumber: "877",
              belongsTo: chemistryMapId
            }, {
              subject: "Catalysis",
              foci: "2P2",
              classNumber: "88",
              belongsTo: chemistryMapId
            }, {
              subject: "Other methods",
              foci: "2P2",
              classNumber: "89",
              belongsTo: chemistryMapId
            }, {
              subject: "Reagent",
              foci: "2P2",
              classNumber: "891",
              belongsTo: chemistryMapId
            }, {
              subject: "Filtration",
              foci: "2P2",
              classNumber: "892",
              belongsTo: chemistryMapId
            }, {
              subject: "Assaying",
              foci: "2P2",
              classNumber: "893",
              belongsTo: chemistryMapId
            }, {
              subject: "Fatique study",
              foci: "2P2",
              classNumber: "894",
              belongsTo: chemistryMapId
            }, {
              subject: "Protection or Painting or Colouring",
              foci: "2P2",
              classNumber: "895",
              belongsTo: chemistryMapId
            }, {
              subject: "Glass blowing",
              foci: "2P2",
              classNumber: "896",
              belongsTo: chemistryMapId
            }, {
              subject: "Absorption",
              foci: "2P2",
              classNumber: "897",
              belongsTo: chemistryMapId
            }, {
              subject: "Rrecovery of waste",
              foci: "2P2",
              classNumber: "898",
              belongsTo: chemistryMapId
            }, {
              subject: "Nomenclature",
              foci: "2P2",
              classNumber: "91",
              belongsTo: chemistryMapId
            }, {
              subject: "Polymerisation",
              foci: "2P2",
              classNumber: "98",
              belongsTo: chemistryMapId
            }, {
              subject: "Special",
              foci: "2P2",
              classNumber: "E9A",
              belongsTo: chemistryMapId
            }, {
              subject: "Biochemistry",
              foci: "2P2",
              classNumber: "E9G",
              belongsTo: chemistryMapId
            }];
            seedTechnologyData = [{
              subject: "Inorganic substance",
              foci: "P",
              classNumber: "1",
              belongsTo: technologyMapId
            }, {
              subject: "Group 0",
              foci: "P",
              classNumber: "10",
              belongsTo: technologyMapId
            }, {
              subject: "Helium (He)",
              foci: "P",
              classNumber: "100",
              belongsTo: technologyMapId
            }, {
              subject: "Neon (Ne)",
              foci: "P",
              classNumber: "101",
              belongsTo: technologyMapId
            }, {
              subject: "Argon (A)",
              foci: "P",
              classNumber: "102",
              belongsTo: technologyMapId
            }, {
              subject: "Krypton (Kr)",
              foci: "P",
              classNumber: "104",
              belongsTo: technologyMapId
            }, {
              subject: "Xenon (Xe)",
              foci: "P",
              classNumber: "106",
              belongsTo: technologyMapId
            }, {
              subject: "Niton (Nt)",
              foci: "P",
              classNumber: "109",
              belongsTo: technologyMapId
            }, {
              subject: "Group 1",
              foci: "P",
              classNumber: "11",
              belongsTo: technologyMapId
            }, {
              subject: "Hydrogen (H)",
              foci: "P",
              classNumber: "110",
              belongsTo: technologyMapId
            }, {
              subject: "Lithium (Li)",
              foci: "P",
              classNumber: "1109",
              belongsTo: technologyMapId
            }, {
              subject: "Sodium (Na)",
              foci: "P",
              classNumber: "111",
              belongsTo: technologyMapId
            }, {
              subject: "Potassium (K)",
              foci: "P",
              classNumber: "112",
              belongsTo: technologyMapId
            }, {
              subject: "Ammonium",
              foci: "P",
              classNumber: "1129",
              belongsTo: technologyMapId
            }, {
              subject: "Copper (Cu)",
              foci: "P",
              classNumber: "113",
              belongsTo: technologyMapId
            }, {
              subject: "Rubidium (Rb)",
              foci: "P",
              classNumber: "114",
              belongsTo: technologyMapId
            }, {
              subject: "Silver (Ag)",
              foci: "P",
              classNumber: "115",
              belongsTo: technologyMapId
            }, {
              subject: "Cesium (Cs)",
              foci: "P",
              classNumber: "116",
              belongsTo: technologyMapId
            }, {
              subject: "Dyspriosium (Dy or Ds)",
              foci: "P",
              classNumber: "117",
              belongsTo: technologyMapId
            }, {
              subject: "Holmium (Ho)",
              foci: "P",
              classNumber: "1179",
              belongsTo: technologyMapId
            }, {
              subject: "Gold (Au)",
              foci: "P",
              classNumber: "118",
              belongsTo: technologyMapId
            }, {
              subject: "Francium (Fr)",
              foci: "P",
              classNumber: "1191",
              belongsTo: technologyMapId
            }, {
              subject: "Group 2",
              foci: "P",
              classNumber: "12",
              belongsTo: technologyMapId
            }, {
              subject: "Beryllium (Be)",
              foci: "P",
              classNumber: "120",
              belongsTo: technologyMapId
            }, {
              subject: "Magnesium (Mg)",
              foci: "P",
              classNumber: "121",
              belongsTo: technologyMapId
            }, {
              subject: "Calcium (Ca)",
              foci: "P",
              classNumber: "122",
              belongsTo: technologyMapId
            }, {
              subject: "Zinc (Zn)",
              foci: "P",
              classNumber: "123",
              belongsTo: technologyMapId
            }, {
              subject: "Strontium (Sr)",
              foci: "P",
              classNumber: "124",
              belongsTo: technologyMapId
            }, {
              subject: "Cadmium (Cd)",
              foci: "P",
              classNumber: "125",
              belongsTo: technologyMapId
            }, {
              subject: "Barium (Ba)",
              foci: "P",
              classNumber: "126",
              belongsTo: technologyMapId
            }, {
              subject: "Erbium (Er)",
              foci: "P",
              classNumber: "127",
              belongsTo: technologyMapId
            }, {
              subject: "Thulium (Tm or Tu)",
              foci: "P",
              classNumber: "1279",
              belongsTo: technologyMapId
            }, {
              subject: "Mercury (Hg)",
              foci: "P",
              classNumber: "128",
              belongsTo: technologyMapId
            }, {
              subject: "Radium (Ra)",
              foci: "P",
              classNumber: "129",
              belongsTo: technologyMapId
            }, {
              subject: "Group 3",
              foci: "P",
              classNumber: "13",
              belongsTo: technologyMapId
            }, {
              subject: "Boron (B)",
              foci: "P",
              classNumber: "130",
              belongsTo: technologyMapId
            }, {
              subject: "Aluminium (Al)",
              foci: "P",
              classNumber: "131",
              belongsTo: technologyMapId
            }, {
              subject: "Scandium (Sc)",
              foci: "P",
              classNumber: "132",
              belongsTo: technologyMapId
            }, {
              subject: "Gallium (Ga)",
              foci: "P",
              classNumber: "133",
              belongsTo: technologyMapId
            }, {
              subject: "Yttrium (Yt or Y)",
              foci: "P",
              classNumber: "134",
              belongsTo: technologyMapId
            }, {
              subject: "Indium (In)",
              foci: "P",
              classNumber: "135",
              belongsTo: technologyMapId
            }, {
              subject: "Lanthanum (La)",
              foci: "P",
              classNumber: "136",
              belongsTo: technologyMapId
            }, {
              subject: "Ytterbium (Yb)",
              foci: "P",
              classNumber: "137",
              belongsTo: technologyMapId
            }, {
              subject: "Lutecium (Lu)",
              foci: "P",
              classNumber: "1379",
              belongsTo: technologyMapId
            }, {
              subject: "Thallium (Tl)",
              foci: "P",
              classNumber: "138",
              belongsTo: technologyMapId
            }, {
              subject: "Actinium (Ac)",
              foci: "P",
              classNumber: "1391",
              belongsTo: technologyMapId
            }, {
              subject: "Promethium (Pm)",
              foci: "P",
              classNumber: "1392",
              belongsTo: technologyMapId
            }, {
              subject: "Group 4",
              foci: "P",
              classNumber: "14",
              belongsTo: technologyMapId
            }, {
              subject: "Carbon ( C )",
              foci: "P",
              classNumber: "140",
              belongsTo: technologyMapId
            }, {
              subject: "Silicon (Si)",
              foci: "P",
              classNumber: "141",
              belongsTo: technologyMapId
            }, {
              subject: "Titanium (Ti)",
              foci: "P",
              classNumber: "142",
              belongsTo: technologyMapId
            }, {
              subject: "Germanium (Ge)",
              foci: "P",
              classNumber: "143",
              belongsTo: technologyMapId
            }, {
              subject: "Zirconium (Zr)",
              foci: "P",
              classNumber: "144",
              belongsTo: technologyMapId
            }, {
              subject: "Tin (Sn)",
              foci: "P",
              classNumber: "145",
              belongsTo: technologyMapId
            }, {
              subject: "Cerium",
              foci: "P",
              classNumber: "146",
              belongsTo: technologyMapId
            }, {
              subject: "Prascodymium (Pr)",
              foci: "P",
              classNumber: "1469",
              belongsTo: technologyMapId
            }, {
              subject: "Celtium (Ct) or (Hf)",
              foci: "P",
              classNumber: "147",
              belongsTo: technologyMapId
            }, {
              subject: "Lead (Pb)",
              foci: "P",
              classNumber: "148",
              belongsTo: technologyMapId
            }, {
              subject: "Thorium (Th)",
              foci: "P",
              classNumber: "149",
              belongsTo: technologyMapId
            }, {
              subject: "Group 5",
              foci: "P",
              classNumber: "15",
              belongsTo: technologyMapId
            }, {
              subject: "Nitrogen 9N)",
              foci: "P",
              classNumber: "150",
              belongsTo: technologyMapId
            }, {
              subject: "Phosphorus (P)",
              foci: "P",
              classNumber: "151",
              belongsTo: technologyMapId
            }, {
              subject: "Vanadium (V)",
              foci: "P",
              classNumber: "152",
              belongsTo: technologyMapId
            }, {
              subject: "Arsenic (As)",
              foci: "P",
              classNumber: "153",
              belongsTo: technologyMapId
            }, {
              subject: "Columbium (Cb) or Niobium (Nb)",
              foci: "P",
              classNumber: "154",
              belongsTo: technologyMapId
            }, {
              subject: "Antiomony (Sb)",
              foci: "P",
              classNumber: "155",
              belongsTo: technologyMapId
            }, {
              subject: "Neodymium (Nd)",
              foci: "P",
              classNumber: "156",
              belongsTo: technologyMapId
            }, {
              subject: "Tantalum (Ta)",
              foci: "P",
              classNumber: "157",
              belongsTo: technologyMapId
            }, {
              subject: "Bismuth (Bi)",
              foci: "P",
              classNumber: "158",
              belongsTo: technologyMapId
            }, {
              subject: "Protoactinium (Pa)",
              foci: "P",
              classNumber: "159",
              belongsTo: technologyMapId
            }, {
              subject: "Group 6",
              foci: "P",
              classNumber: "16",
              belongsTo: technologyMapId
            }, {
              subject: "Oxygen (O)",
              foci: "P",
              classNumber: "160",
              belongsTo: technologyMapId
            }, {
              subject: "Sulphur (S)",
              foci: "P",
              classNumber: "161",
              belongsTo: technologyMapId
            }, {
              subject: "Chromium (Cr)",
              foci: "P",
              classNumber: "162",
              belongsTo: technologyMapId
            }, {
              subject: "Selenium (SE)",
              foci: "P",
              classNumber: "163",
              belongsTo: technologyMapId
            }, {
              subject: "Molybdenum (Mo)",
              foci: "P",
              classNumber: "164",
              belongsTo: technologyMapId
            }, {
              subject: "Tellurium (Te)",
              foci: "P",
              classNumber: "165",
              belongsTo: technologyMapId
            }, {
              subject: "Samarium (Sm)",
              foci: "P",
              classNumber: "166",
              belongsTo: technologyMapId
            }, {
              subject: "Europium (Eu)",
              foci: "P",
              classNumber: "1669",
              belongsTo: technologyMapId
            }, {
              subject: "Tungsten (W)",
              foci: "P",
              classNumber: "167",
              belongsTo: technologyMapId
            }, {
              subject: "Polonium (Po)",
              foci: "P",
              classNumber: "168",
              belongsTo: technologyMapId
            }, {
              subject: "Uranium (U)",
              foci: "P",
              classNumber: "1691",
              belongsTo: technologyMapId
            }, {
              subject: "Neptunium (NP)",
              foci: "P",
              classNumber: "1692",
              belongsTo: technologyMapId
            }, {
              subject: "Plutonium (Pu)",
              foci: "P",
              classNumber: "1693",
              belongsTo: technologyMapId
            }, {
              subject: "Americium (Am)",
              foci: "P",
              classNumber: "1694",
              belongsTo: technologyMapId
            }, {
              subject: "Curium (Cm)",
              foci: "P",
              classNumber: "1695",
              belongsTo: technologyMapId
            }, {
              subject: "Berkelium (Bk0",
              foci: "P",
              classNumber: "1696",
              belongsTo: technologyMapId
            }, {
              subject: "Califormium (Cf)",
              foci: "P",
              classNumber: "1697",
              belongsTo: technologyMapId
            }];
            titlesBibiloData = [{
              id: generateUUID(),
              subject: "By mode of production",
              foci: "P",
              classNumber: "1",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Tablet",
              foci: "P",
              classNumber: "11",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Manuscript",
              foci: "P",
              classNumber: "12",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Archive",
              foci: "P",
              classNumber: "12B",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Sound book",
              foci: "P",
              classNumber: "13",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Printed book",
              foci: "P",
              classNumber: "14",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Photo-reproduction",
              foci: "P",
              classNumber: "15",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Micro",
              foci: "P",
              classNumber: "151",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Film strip",
              foci: "P",
              classNumber: "1511",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Film roll",
              foci: "P",
              classNumber: "1512",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Photostat",
              foci: "P",
              classNumber: "152",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Map",
              foci: "P",
              classNumber: "17",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Raised type",
              foci: "P",
              classNumber: "18",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "By script",
              foci: "P",
              classNumber: "2",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "By language",
              foci: "P",
              classNumber: "3",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "By nature of publication",
              foci: "P",
              classNumber: "4",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Book (conventional)",
              foci: "P",
              classNumber: "43",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Newspaper",
              foci: "P",
              classNumber: "44",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Recreative",
              foci: "P",
              classNumber: "45",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Periodical",
              foci: "P",
              classNumber: "46",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Reference book",
              foci: "P",
              classNumber: "47",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Patent",
              foci: "P",
              classNumber: "48",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Thesis",
              foci: "P",
              classNumber: "494",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Not-written book",
              foci: "P",
              classNumber: "4994",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Book written but not existing",
              foci: "P",
              classNumber: "4995",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "By agency of production",
              foci: "P",
              classNumber: "5",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "University",
              foci: "P",
              classNumber: "54",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Government",
              foci: "P",
              classNumber: "55",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Private",
              foci: "P",
              classNumber: "58",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "By age of publication",
              foci: "P",
              classNumber: "6",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Old",
              foci: "P",
              classNumber: "61",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Current",
              foci: "P",
              classNumber: "66",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "By edition",
              foci: "P",
              classNumber: "7",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "First",
              foci: "P",
              classNumber: "71",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Proscribed",
              foci: "P",
              classNumber: "74",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Deluxe",
              foci: "P",
              classNumber: "75",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Autograph",
              foci: "P",
              classNumber: "77",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "By social group of readers",
              foci: "P",
              classNumber: "8",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Translation",
              foci: "P",
              classNumber: "95",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "By size",
              foci: "P",
              classNumber: "991",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Oversize",
              foci: "P",
              classNumber: "9911",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Miniature",
              foci: "P",
              classNumber: "9912",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Pamphlet",
              foci: "P",
              classNumber: "9917",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "List of publications in geographical area",
              foci: "P2",
              classNumber: "1",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Publisher's catalogue",
              foci: "P2",
              classNumber: "2",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Bookseller's catalogue",
              foci: "P2",
              classNumber: "3",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Catalogue of exhibition",
              foci: "P2",
              classNumber: "4",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Library catalogue",
              foci: "P2",
              classNumber: "5",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Reading list",
              foci: "P2",
              classNumber: "6",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Area",
              foci: "P3",
              classNumber: "0",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Country",
              foci: "P3",
              classNumber: "0",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Geographical Area Covered",
              foci: "P3",
              classNumber: "0",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Publisher or Book Seller",
              foci: "P3",
              classNumber: "0",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Origin",
              foci: "P4",
              classNumber: "0",
              belongsTo: bibliographyMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }];
            titlesIntegerData = [{
              id: generateUUID(),
              subject: "Prime number",
              foci: "P",
              classNumber: "1",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Number defined by factor properties",
              foci: "P",
              classNumber: "2",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Highly composite number",
              foci: "P",
              classNumber: "21",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Number defined by partition properties",
              foci: "P",
              classNumber: "5",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Primality and divisibility",
              foci: "P2",
              classNumber: "1",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Distribution",
              foci: "P2",
              classNumber: "2",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Diophantine equation",
              foci: "P2",
              classNumber: "3",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Pell's equation",
              foci: "P2",
              classNumber: "3K",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Form including partition",
              foci: "P2",
              classNumber: "5",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Fermat's last theorem",
              foci: "P2",
              classNumber: "5K",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Goldbach's theorem",
              foci: "P2",
              classNumber: "5L",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Waring's problem",
              foci: "P2",
              classNumber: "5L5",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Associated arithmetic function",
              foci: "P2",
              classNumber: "9",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Special arithmetic functions by CD",
              foci: "P2",
              classNumber: "9A",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "0",
              foci: "P2",
              classNumber: "9L",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "0",
              foci: "P2",
              classNumber: "9M",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Mertens function",
              foci: "P2",
              classNumber: "9M9",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Multiplicative function",
              foci: "P2",
              classNumber: "9N",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Elementary arithmetical method",
              foci: "E",
              classNumber: "1",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Algebraic method",
              foci: "E",
              classNumber: "2",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Elementary algebraic method",
              foci: "E",
              classNumber: "21",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Method of rational approximations by continued fraction",
              foci: "E",
              classNumber: "22",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Congruence",
              foci: "E",
              classNumber: "23",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Method of algebraic form",
              foci: "E",
              classNumber: "25",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Method of probability",
              foci: "E",
              classNumber: "28",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Analytical method",
              foci: "E",
              classNumber: "3",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Method of infinite series and product",
              foci: "E",
              classNumber: "36",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Method of complex variable",
              foci: "E",
              classNumber: "38",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "By the use of special function",
              foci: "E",
              classNumber: "39",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: generateUUID(),
              subject: "Geometrical method",
              foci: "E",
              classNumber: "6",
              belongsTo: integerMapId,
              createdAt: new Date(),
              updatedAt: new Date()
            }];
            _context19.next = 113;
            return Promise.all(seedLibSciData.map( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }()));
          case 113:
            titlesLibSciData = _context19.sent;
            _context19.next = 116;
            return Promise.all(seedGeometryData.map( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()));
          case 116:
            titlesGeometryData = _context19.sent;
            _context19.next = 119;
            return Promise.all(seedMechanicsData.map( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }()));
          case 119:
            titlesMechanicsData = _context19.sent;
            _context19.next = 122;
            return Promise.all(seedAstronomyData.map( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return function (_x4) {
                return _ref4.apply(this, arguments);
              };
            }()));
          case 122:
            titlesAstronomyData = _context19.sent;
            _context19.next = 125;
            return Promise.all(seedTheoryOfEquationData.map( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));
              return function (_x5) {
                return _ref5.apply(this, arguments);
              };
            }()));
          case 125:
            titlesTheoryOfEquationData = _context19.sent;
            _context19.next = 128;
            return Promise.all(seedHigherAlgebraData.map( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              return function (_x6) {
                return _ref6.apply(this, arguments);
              };
            }()));
          case 128:
            titlesHigherAlgebraData = _context19.sent;
            _context19.next = 131;
            return Promise.all(seedDifferentialIntegralData.map( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7);
              }));
              return function (_x7) {
                return _ref7.apply(this, arguments);
              };
            }()));
          case 131:
            titlesDifferentialIntegralData = _context19.sent;
            _context19.next = 134;
            return Promise.all(seedRealVariableData.map( /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(data) {
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }));
              return function (_x8) {
                return _ref8.apply(this, arguments);
              };
            }()));
          case 134:
            titlesRealVariableData = _context19.sent;
            _context19.next = 137;
            return Promise.all(seedComplexVariableData.map( /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(data) {
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9);
              }));
              return function (_x9) {
                return _ref9.apply(this, arguments);
              };
            }()));
          case 137:
            titlesComplexVariableData = _context19.sent;
            _context19.next = 140;
            return Promise.all(seedPropertiesOfMatterData.map( /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(data) {
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      return _context10.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10);
              }));
              return function (_x10) {
                return _ref10.apply(this, arguments);
              };
            }()));
          case 140:
            titlesPropertiesOfMatterData = _context19.sent;
            _context19.next = 143;
            return Promise.all(seedSoundData.map( /*#__PURE__*/function () {
              var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(data) {
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      return _context11.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee11);
              }));
              return function (_x11) {
                return _ref11.apply(this, arguments);
              };
            }()));
          case 143:
            titlesSoundData = _context19.sent;
            _context19.next = 146;
            return Promise.all(seedHeatData.map( /*#__PURE__*/function () {
              var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(data) {
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      return _context12.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12);
              }));
              return function (_x12) {
                return _ref12.apply(this, arguments);
              };
            }()));
          case 146:
            titlesHeatData = _context19.sent;
            _context19.next = 149;
            return Promise.all(seedRadiationData.map( /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(data) {
                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      return _context13.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee13);
              }));
              return function (_x13) {
                return _ref13.apply(this, arguments);
              };
            }()));
          case 149:
            titlesRadiationData = _context19.sent;
            _context19.next = 152;
            return Promise.all(seedElectricityData.map( /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(data) {
                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      return _context14.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee14);
              }));
              return function (_x14) {
                return _ref14.apply(this, arguments);
              };
            }()));
          case 152:
            titlesElectricityData = _context19.sent;
            _context19.next = 155;
            return Promise.all(seedMagnetismData.map( /*#__PURE__*/function () {
              var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(data) {
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      return _context15.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15);
              }));
              return function (_x15) {
                return _ref15.apply(this, arguments);
              };
            }()));
          case 155:
            titlesMagnetismData = _context19.sent;
            _context19.next = 158;
            return Promise.all(seedEngineeringData.map( /*#__PURE__*/function () {
              var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(data) {
                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                  while (1) switch (_context16.prev = _context16.next) {
                    case 0:
                      return _context16.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }, _callee16);
              }));
              return function (_x16) {
                return _ref16.apply(this, arguments);
              };
            }()));
          case 158:
            titlesEngineeringData = _context19.sent;
            _context19.next = 161;
            return Promise.all(seedChemistryData.map( /*#__PURE__*/function () {
              var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(data) {
                return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                  while (1) switch (_context17.prev = _context17.next) {
                    case 0:
                      return _context17.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context17.stop();
                  }
                }, _callee17);
              }));
              return function (_x17) {
                return _ref17.apply(this, arguments);
              };
            }()));
          case 161:
            titlesChemistryData = _context19.sent;
            _context19.next = 164;
            return Promise.all(seedTechnologyData.map( /*#__PURE__*/function () {
              var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(data) {
                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                  while (1) switch (_context18.prev = _context18.next) {
                    case 0:
                      return _context18.abrupt("return", _objectSpread(_objectSpread({
                        id: generateUUID()
                      }, data), {}, {
                        createdAt: new Date(),
                        updatedAt: new Date()
                      }));
                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }, _callee18);
              }));
              return function (_x18) {
                return _ref18.apply(this, arguments);
              };
            }()));
          case 164:
            titlesTechnologyData = _context19.sent;
            _context19.next = 167;
            return queryInterface.bulkInsert("titles_to_main_class_mapper", [{
              id: bibliographyMapId,
              subject: "bibliography",
              classNumber: "a",
              facetFormula: "[P],[P2][P3],[P4]",
              belongsTo: bibliography,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: libraryScienceMapId,
              subject: "library science",
              classNumber: "2",
              facetFormula: "[P];[M]:[E][2P]",
              belongsTo: libraryScience,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: geometryMapId,
              subject: "geometry",
              classNumber: "B6",
              facetFormula: "[P]:[E][2P]",
              belongsTo: mathematics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: mechanicsMapId,
              subject: "mechanics",
              classNumber: "B7",
              facetFormula: "[P]:[E][2P]",
              belongsTo: mathematics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: astronomyMapId,
              subject: "astronomy",
              classNumber: "B9",
              facetFormula: "[P]:[E][2P]",
              belongsTo: mathematics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: integerMapId,
              subject: "integer (theory of numbers)",
              classNumber: "B13",
              facetFormula: "[P],[P2]:[E][2P]",
              belongsTo: mathematics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: equationMapId,
              subject: "theory of equation",
              classNumber: "B23",
              facetFormula: "[P]:[E]",
              belongsTo: mathematics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: algebraMapId,
              subject: "higher algebra",
              classNumber: "B25",
              facetFormula: "[P],[P2]:[E][2P]",
              belongsTo: mathematics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: differentialMapId,
              subject: "differential and integral equation",
              classNumber: "B33",
              facetFormula: "[P],[P2],[P3]:[E][2P]",
              belongsTo: mathematics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: realVariableMapId,
              subject: "real variable",
              classNumber: "B37",
              facetFormula: "[P]:[E][2P]",
              belongsTo: mathematics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: complexVariableMapId,
              subject: "complex variable",
              classNumber: "B38",
              facetFormula: "[P];[E][2P]",
              belongsTo: mathematics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: soundMapId,
              subject: "sound",
              classNumber: "C3",
              facetFormula: "[P]:[E][2P]",
              belongsTo: physics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: heatMapId,
              subject: "heat",
              classNumber: "C4",
              facetFormula: ":[E][2P]",
              belongsTo: physics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: radiationMapId,
              subject: "radiation",
              classNumber: "C5",
              facetFormula: "[P]:[E][2P]",
              belongsTo: physics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: electricityMapId,
              subject: "electricity",
              classNumber: "C6",
              facetFormula: "[P]:[E][2P]",
              belongsTo: physics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: magnetismMapId,
              subject: "magnetism",
              classNumber: "C7",
              facetFormula: "[P]:[E]",
              belongsTo: physics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: engineeringMapId,
              subject: "engineering",
              classNumber: "D",
              facetFormula: "[P],[2P][P2]:[E]",
              belongsTo: engineering,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: chemistryMapId,
              subject: chemistryMapId,
              classNumber: "E",
              facetFormula: "[P]:[E][2P]",
              belongsTo: chemistry,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: technologyMapId,
              subject: technologyMapId,
              classNumber: "F",
              facetFormula: "[P]:[E][2P]",
              belongsTo: technology,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: biologyMapId,
              subject: "biology",
              classNumber: "G",
              facetFormula: "[P]:[E][2P]",
              belongsTo: biology,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: mineralogyMapId,
              subject: "mineralogy",
              classNumber: "H1",
              facetFormula: "[P]:[E][2P]",
              belongsTo: geology,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: petrologyMapId,
              subject: "petrology",
              classNumber: "H2",
              facetFormula: "[P]:[E][2P]",
              belongsTo: geology,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: economicGeologyMapId,
              subject: "economic geology",
              classNumber: "H7",
              facetFormula: "[P]:[E][2P]",
              belongsTo: geology,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: miningMapId,
              subject: "mining",
              classNumber: "HZ",
              facetFormula: "[P],[P2]:[E][2P]",
              belongsTo: mining,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: botanyMapId,
              subject: "botany",
              classNumber: "I",
              facetFormula: "[P],[P2]:[E][2P]",
              belongsTo: botany,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: agricultureMapId,
              subject: "agriculture",
              classNumber: "J",
              facetFormula: "[P]:[E][2P]:[2E]",
              belongsTo: agriculture,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: zoologyMapId,
              subject: "zoology",
              classNumber: "K",
              facetFormula: "[P]:[E][2P]",
              belongsTo: zoology,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: animalHusbandryMapId,
              subject: "animal husbandry",
              classNumber: "KZ",
              facetFormula: "[P]:[E][2P]:[2E][3P]",
              belongsTo: animalHusbandry,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: medicineMapId,
              subject: "medicine",
              classNumber: "L",
              facetFormula: "[P]:[E][2P]:[2E][3P]",
              belongsTo: medicine,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: pharmacologyMapId,
              subject: "pharmacology",
              classNumber: "LZ3",
              facetFormula: "[P]:[E][2P]",
              belongsTo: pharmocognosy,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: pharmacopoeiaMapId,
              subject: "pharmacopoeia",
              classNumber: "LZ5",
              facetFormula: "[P],[P2]",
              belongsTo: pharmocognosy,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: pharmacyMapId,
              subject: "pharmacy",
              classNumber: "LZ8",
              facetFormula: "[P],[P2]",
              belongsTo: pharmocognosy,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: textilesMapId,
              subject: "textiles",
              classNumber: "M7",
              facetFormula: "[P]:[2P]",
              belongsTo: usefulArts,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: ropeMakingMapId,
              subject: "rope making",
              classNumber: "MJ7",
              facetFormula: "[P]:[2P]",
              belongsTo: usefulArts,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: spiritualExperienceMapId,
              subject: "spiritual experience and mysticism",
              classNumber: "δ",
              facetFormula: "[P],[P2]:[E][2P]",
              belongsTo: spiritualExperienceAndMysticism,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: townPlanningMapId,
              subject: "town planning",
              classNumber: "NB",
              facetFormula: "[P],[P2][P3],[P4]:[E]",
              belongsTo: fineArts,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: artitectureMapId,
              subject: "artitecture",
              classNumber: "NA",
              facetFormula: "[P],[P2][P3],[P4]:[E]",
              belongsTo: fineArts,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: sculptureMapId,
              subject: "sculpture",
              classNumber: "ND",
              facetFormula: "[P],[P2][P3];[M]:[E][2P]",
              belongsTo: fineArts,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: paintingMapId,
              subject: "painting",
              classNumber: "NQ",
              facetFormula: "[P],[P2][P3];[M]:[E][2P]",
              belongsTo: fineArts,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: musicMapId,
              subject: "music",
              classNumber: "NR",
              facetFormula: "[P],[P2][P3];[M]:[E][2P]",
              belongsTo: fineArts,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: linguisticsMapId,
              subject: "linguistics",
              classNumber: "P",
              facetFormula: "[P],[P2][P3]:[E][2P]",
              belongsTo: linguistics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: religionMapId,
              subject: "religion",
              classNumber: "Q",
              facetFormula: "[P]:[E][2P]",
              belongsTo: religion,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: metaphysicsMapId,
              subject: "metaphysics",
              classNumber: "R3",
              facetFormula: "[P],[P2]",
              belongsTo: philosophy,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: ethicsMapId,
              subject: "ethics",
              classNumber: "R4",
              facetFormula: "[P],[P2]",
              belongsTo: philosophy,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: psychologyMapId,
              subject: "psychology",
              classNumber: "S",
              facetFormula: "[P]:[E][2P]",
              belongsTo: psychology,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: educationMapId,
              subject: "education",
              classNumber: "T",
              facetFormula: "[P]:[E],[2P],[2P2]",
              belongsTo: education,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: geographyMapId,
              subject: "geography",
              classNumber: "U",
              facetFormula: "[P].[S]'[T]",
              belongsTo: geography,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: historyMapId,
              subject: "history",
              classNumber: "V",
              facetFormula: "[P],[P2]:[E][2P]'[T]",
              belongsTo: history,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: politicalScienceMapId,
              subject: "political science",
              classNumber: "W",
              facetFormula: "[P],[P2]:[E][2P]",
              belongsTo: politicalScience,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: economicsMapId,
              subject: "economics",
              classNumber: "X",
              facetFormula: "[P]:[E][2P]",
              belongsTo: economics,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: sociologyMapId,
              subject: "sociology",
              classNumber: "Y",
              facetFormula: "[P]:[E][2P]:[2E][3P]",
              belongsTo: sociology,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: lawMapId,
              subject: "law",
              classNumber: "Z",
              facetFormula: "[P],[P2],[P3],[P4]",
              belongsTo: law,
              createdAt: new Date(),
              updatedAt: new Date()
            }]);
          case 167:
            _context19.next = 169;
            return queryInterface.bulkInsert("titles", [].concat(_toConsumableArray(titlesLibSciData), titlesIntegerData, titlesBibiloData, _toConsumableArray(titlesGeometryData), _toConsumableArray(titlesMechanicsData), _toConsumableArray(titlesAstronomyData), _toConsumableArray(titlesTheoryOfEquationData), _toConsumableArray(titlesHigherAlgebraData), _toConsumableArray(titlesDifferentialIntegralData), _toConsumableArray(titlesRealVariableData), _toConsumableArray(titlesComplexVariableData), _toConsumableArray(titlesPropertiesOfMatterData), _toConsumableArray(titlesSoundData), _toConsumableArray(titlesHeatData), _toConsumableArray(titlesRadiationData), _toConsumableArray(titlesElectricityData), _toConsumableArray(titlesMagnetismData), _toConsumableArray(titlesEngineeringData), _toConsumableArray(titlesChemistryData), _toConsumableArray(titlesTechnologyData)), {});
          case 169:
          case "end":
            return _context19.stop();
        }
      }, _callee19);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return queryInterface.bulkDelete("titles", null, {});
          case 2:
            _context20.next = 4;
            return queryInterface.bulkDelete("titles_to_main_class_mapper", null, {});
          case 4:
            _context20.next = 6;
            return queryInterface.bulkDelete("subjects", null, {});
          case 6:
          case "end":
            return _context20.stop();
        }
      }, _callee20);
    }))();
  }
};