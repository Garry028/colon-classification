"use strict";

/** @type {import('sequelize-cli').Migration} */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var getRandomHexDigit, generateUUID, mathematics, bibliography, libraryScience, physicalScience, physics, engineering, chemistry, technology, biology, geology, mining, botany, agriculture, zoology, animalHusbandry, medicine, pharmocognosy, usefulArts, spiritualExperienceAndMysticism, fineArts, linguistics, religion, philosophy, psychology, education, geography, history, politicalScience, economics, sociology, law, subjects, generateSeedSubjectData, seedSubjectData, bibliographyMapId, libraryScienceMapId, geometryMapId, mechanicsMapId, astronomyMapId, integerMapId, equationMapId, algebraMapId, differentialMapId, realVariableMapId, complexVariableMapId, soundMapId, heatMapId, radiationMapId, electricityMapId, magnetismMapId, engineeringMapId, chemistryMapId, technologyMapId, biologyMapId, mineralogyMapId, petrologyMapId, economicGeologyMapId, miningMapId, botanyMapId, agricultureMapId, zoologyMapId, animalHusbandryMapId, medicineMapId, pharmacologyMapId, pharmacopoeiaMapId, pharmacyMapId, textilesMapId, ropeMakingMapId, spiritualExperienceMapId, townPlanningMapId, artitectureMapId, sculptureMapId, paintingMapId, musicMapId, linguisticsMapId, religionMapId, metaphysicsMapId, ethicsMapId, psychologyMapId, educationMapId, geographyMapId, historyMapId, politicalScienceMapId, economicsMapId, sociologyMapId, lawMapId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
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
            _context.next = 38;
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
            lawMapId = generateUUID(); // Now, insert each subject into the titles_to_main_class_mapper table
            _context.next = 92;
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
              subject: "chemistry",
              classNumber: "E",
              facetFormula: "[P]:[E][2P]",
              belongsTo: chemistry,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              id: technologyMapId,
              subject: "technology",
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
          case 92:
            _context.next = 94;
            return queryInterface.bulkInsert("titles", [{
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
            }, {
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
            }]);
          case 94:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return queryInterface.bulkDelete("titles", null, {});
          case 2:
            _context2.next = 4;
            return queryInterface.bulkDelete("titles_to_main_class_mapper", null, {});
          case 4:
            _context2.next = 6;
            return queryInterface.bulkDelete("subjects", null, {});
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};