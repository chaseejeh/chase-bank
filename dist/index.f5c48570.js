// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4qavH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe27fe52f5c48570";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8ZNvh":[function(require,module,exports) {
var _webImmediateJs = require("core-js/modules/web.immediate.js");
/////////////////////////////////////////////////////////////
// Data
/////////////////////////////////////////////////////////////
const accounts = [
    {
        owner: "Shohanur Rahman",
        movements: [
            2500,
            500,
            -750,
            1200,
            3200,
            -1500,
            500,
            1200,
            -1750,
            1800
        ],
        interestRate: 1.5,
        password: 1234,
        movementsDates: [
            "2021-11-18T21:31:17.178Z",
            "2021-12-23T07:42:02.383Z",
            "2022-01-28T09:15:04.904Z",
            "2022-04-01T10:17:24.185Z",
            "2022-07-08T14:11:59.604Z",
            "2022-09-10T17:01:17.194Z",
            "2022-09-12T23:36:17.929Z",
            "2022-09-15T12:51:31.398Z",
            "2022-09-19T06:41:26.190Z",
            "2022-09-21T08:11:36.678Z", 
        ],
        currency: "USD",
        locale: "en-US"
    },
    {
        owner: "Sunerah Binte Ayesha",
        movements: [
            5000,
            3400,
            -150,
            -790,
            -3210,
            -1000,
            8500,
            -300,
            1500,
            -1850
        ],
        interestRate: 1.3,
        password: 5678,
        movementsDates: [
            "2021-12-11T21:31:17.671Z",
            "2021-12-27T07:42:02.184Z",
            "2022-01-05T09:15:04.805Z",
            "2022-02-14T10:17:24.687Z",
            "2022-03-12T14:11:59.203Z",
            "2022-05-16T17:01:17.392Z",
            "2022-08-10T23:36:17.522Z",
            "2022-09-03T12:51:31.491Z",
            "2022-09-18T06:41:26.394Z",
            "2022-09-21T08:11:36.276Z", 
        ],
        currency: "EUR",
        locale: "en-GB"
    }, 
];
/////////////////////////////////////////////////////////////
// Elements
/////////////////////////////////////////////////////////////
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");
const labelTimer = document.querySelector(".timer");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".btn-sort");
const inputLoginUsername = document.querySelector(".login-input-username");
const inputLoginPassword = document.querySelector(".login-input-password");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoanAmount = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-username");
const inputClosePassword = document.querySelector(".form-input-password");
/////////////////////////////////////////////////////////////
// Create usernames
/////////////////////////////////////////////////////////////
function createUsernames(accounts) {
    accounts.forEach((account)=>{
        account.username = account.owner.toLowerCase().split(" ").map((word)=>word[0]).join("");
    });
}
createUsernames(accounts);
/////////////////////////////////////////////////////////////
// Days calculation
/////////////////////////////////////////////////////////////
function formatMovementDate(date, locale) {
    const calcDaysPassed = (date1, date2)=>Math.round(Math.abs(date2 - date1) / 86400000);
    const daysPasssed = calcDaysPassed(new Date(), date);
    if (daysPasssed === 0) return "Today";
    if (daysPasssed === 1) return "Yesterday";
    if (daysPasssed <= 7) return `${daysPasssed} days ago`;
    return new Intl.DateTimeFormat(locale).format(date);
}
/////////////////////////////////////////////////////////////
// Formatting currencies
/////////////////////////////////////////////////////////////
function formatCurrency(value, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency
    }).format(value);
}
/////////////////////////////////////////////////////////////
// Display movements
/////////////////////////////////////////////////////////////
function displayMovements(account, sort = false) {
    containerMovements.innerHTML = "";
    const moves = sort ? account.movements.slice(0).sort((a, b)=>a - b) : account.movements;
    moves.forEach((move, i)=>{
        const type = move > 0 ? "deposit" : "withdrawal";
        const date = new Date(account.movementsDates[i]);
        const displayDate = formatMovementDate(date, account.locale);
        const formattedMove = formatCurrency(move, account.locale, account.currency);
        const html = `
    <div class="movements-row">
        <div class="movements-type movements-type-${type}">${i + 1} ${type}</div>
        <div class="movements-date">${displayDate}</div>
        <div class="movements-value">${formattedMove}</div>
    </div>
    `;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
}
/////////////////////////////////////////////////////////////
// Display balance
/////////////////////////////////////////////////////////////
function displayBalance(account) {
    account.balance = account.movements.reduce((acc, move)=>acc + move, 0);
    labelBalance.textContent = formatCurrency(account.balance, account.locale, account.currency);
}
/////////////////////////////////////////////////////////////
// Display summary
/////////////////////////////////////////////////////////////
function displaySummary(account) {
    const incomes = account.movements.filter((move)=>move > 0).reduce((acc, move)=>acc + move, 0);
    labelSumIn.textContent = formatCurrency(incomes, account.locale, account.currency);
    const outcomes = account.movements.filter((move)=>move < 0).reduce((acc, move)=>acc + move, 0);
    labelSumOut.textContent = formatCurrency(Math.abs(outcomes), account.locale, account.currency);
    const interest = account.movements.filter((move)=>move > 0).map((dep)=>dep * account.interestRate / 100).filter((int)=>int >= 1).reduce((acc, int)=>acc + int, 0);
    labelSumInterest.textContent = formatCurrency(interest, account.locale, account.currency);
}
/////////////////////////////////////////////////////////////
// Update UI
/////////////////////////////////////////////////////////////
function updateUI(currentAccount) {
    // Display movements
    displayMovements(currentAccount);
    // Display balance
    displayBalance(currentAccount);
    // Display summary
    displaySummary(currentAccount);
}
/////////////////////////////////////////////////////////////
// Implementing login
/////////////////////////////////////////////////////////////
let currentAccount, timer;
btnLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    currentAccount = accounts.find((account)=>account.username === inputLoginUsername.value);
    if (currentAccount?.password === +inputLoginPassword.value) {
        // Display UI and welcome message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
        labelWelcome.style.color = "#444";
        containerApp.style.opacity = 1;
        // Create current date and time
        const now = new Date();
        const options = {
            hour: "numeric",
            minute: "numeric",
            day: "numeric",
            month: "numeric",
            year: "numeric"
        };
        labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
        // Timer
        if (timer) clearInterval(timer);
        timer = logOutTimer();
        // Update UI
        updateUI(currentAccount);
    } else {
        // Hide UI and display warning message
        labelWelcome.textContent = "Incorrect user or password!";
        labelWelcome.style.color = "#f3442a";
        containerApp.style.opacity = 0;
    }
    // Clear input fields
    inputLoginUsername.value = inputLoginPassword.value = "";
    inputLoginPassword.blur();
});
/////////////////////////////////////////////////////////////
// Implementing transfers
/////////////////////////////////////////////////////////////
btnTransfer.addEventListener("click", (e)=>{
    e.preventDefault();
    const receiverAccount = accounts.find((account)=>account.username === inputTransferTo.value);
    const amount = +inputTransferAmount.value;
    // Clear input fields
    inputTransferTo.value = inputTransferAmount.value = "";
    inputTransferAmount.blur();
    if (amount > 0 && amount <= currentAccount.balance && receiverAccount && receiverAccount?.username !== currentAccount.username) setTimeout(()=>{
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAccount.movements.push(amount);
        // Add transfer date
        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAccount.movementsDates.push(new Date().toISOString());
        // Update UI
        updateUI(currentAccount);
        // Display success message
        labelWelcome.textContent = "Transfer successful!";
        labelWelcome.style.color = "#00b79f";
    }, 5000);
    else setTimeout(()=>{
        // Display warning message
        labelWelcome.textContent = "Invalid transfer!";
        labelWelcome.style.color = "#f3442a";
    }, 5000);
    // Reset the timer
    clearInterval(timer);
    timer = logOutTimer();
});
/////////////////////////////////////////////////////////////
// Implementing loan
/////////////////////////////////////////////////////////////
btnLoan.addEventListener("click", (e)=>{
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some((move)=>move >= amount * 0.1)) setTimeout(()=>{
        // Add movement
        currentAccount.movements.push(amount);
        // Add loan date
        currentAccount.movementsDates.push(new Date().toISOString());
        // Update UI
        updateUI(currentAccount);
        // Display message
        labelWelcome.textContent = "Loan request granted!";
        labelWelcome.style.color = "#00b79f";
    }, 5000);
    else setTimeout(()=>{
        // Display warning message
        labelWelcome.textContent = "Amount not granted!";
        labelWelcome.style.color = "#f3442a";
    }, 5000);
    // Clear field
    inputLoanAmount.value = "";
    inputLoanAmount.blur();
    // Reset the timer
    clearInterval(timer);
    timer = logOutTimer();
});
/////////////////////////////////////////////////////////////
// Close account
/////////////////////////////////////////////////////////////
btnClose.addEventListener("click", (e)=>{
    e.preventDefault();
    if (inputCloseUsername.value === currentAccount.username && +inputClosePassword.value === currentAccount.password) {
        const index = accounts.findIndex((account)=>account.username === currentAccount.username);
        setTimeout(()=>{
            // Delete account
            accounts.splice(index, 1);
            // Hide UI and display warning message
            labelWelcome.textContent = "Account deleted!";
            labelWelcome.style.color = "#00b79f";
            containerApp.style.opacity = 0;
        }, 3000);
    } else setTimeout(()=>{
        // Display warning message
        labelWelcome.textContent = "Action failed!";
        labelWelcome.style.color = "#f3442a";
    }, 3000);
    // Clear fields
    inputCloseUsername.value = inputClosePassword.value = "";
    inputClosePassword.blur();
});
/////////////////////////////////////////////////////////////
// Sorting
/////////////////////////////////////////////////////////////
let sorted = false;
btnSort.addEventListener("click", (e)=>{
    e.preventDefault();
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
});
/////////////////////////////////////////////////////////////
// Logout timer
/////////////////////////////////////////////////////////////
function logOutTimer() {
    labelTimer.textContent = "";
    // Set timer
    let time = 180;
    const tickTick = ()=>{
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
        // In each call, print the remaining time
        labelTimer.textContent = `${min}:${sec}`;
        // When we reach 0 second, stop timer and log out
        if (time === 0) {
            clearInterval(timer);
            labelWelcome.textContent = "You have been logged out!";
            labelWelcome.style.color = "#f3442a";
            containerApp.style.opacity = 0;
        }
        // Decrease 1s
        time--;
    };
    tickTick();
    // Call the timer every second
    timer = setInterval(tickTick, 1000);
    return timer;
}
/////////////////////////////////////////////////////////////
// Copyright year
/////////////////////////////////////////////////////////////
document.querySelector(".copyright-year").textContent = new Date().getFullYear();

},{"core-js/modules/web.immediate.js":"49tUX"}],"49tUX":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("../modules/web.clear-immediate");
require("../modules/web.set-immediate");

},{"../modules/web.clear-immediate":"fOGFr","../modules/web.set-immediate":"l7FDS"}],"fOGFr":[function(require,module,exports) {
var $ = require("../internals/export");
var global = require("../internals/global");
var clearImmediate = require("../internals/task").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"../internals/export":"dIGt4","../internals/global":"i8HOC","../internals/task":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require("../internals/global");
var getOwnPropertyDescriptor = require("../internals/object-get-own-property-descriptor").f;
var createNonEnumerableProperty = require("../internals/create-non-enumerable-property");
var defineBuiltIn = require("../internals/define-built-in");
var defineGlobalProperty = require("../internals/define-global-property");
var copyConstructorProperties = require("../internals/copy-constructor-properties");
var isForced = require("../internals/is-forced");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"../internals/global":"i8HOC","../internals/object-get-own-property-descriptor":"lk5NI","../internals/create-non-enumerable-property":"8CL42","../internals/define-built-in":"6XwEX","../internals/define-global-property":"ggjnO","../internals/copy-constructor-properties":"9Z12i","../internals/is-forced":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var call = require("../internals/function-call");
var propertyIsEnumerableModule = require("../internals/object-property-is-enumerable");
var createPropertyDescriptor = require("../internals/create-property-descriptor");
var toIndexedObject = require("../internals/to-indexed-object");
var toPropertyKey = require("../internals/to-property-key");
var hasOwn = require("../internals/has-own-property");
var IE8_DOM_DEFINE = require("../internals/ie8-dom-define");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/descriptors":"92ZIi","../internals/function-call":"d7JlP","../internals/object-property-is-enumerable":"7SuiS","../internals/create-property-descriptor":"1lpav","../internals/to-indexed-object":"jLWwQ","../internals/to-property-key":"5XWKd","../internals/has-own-property":"gC2Q5","../internals/ie8-dom-define":"qS9uN"}],"92ZIi":[function(require,module,exports) {
var fails = require("../internals/fails");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"../internals/function-bind-native":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("../internals/fails");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"../internals/fails":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("../internals/indexed-object");
var requireObjectCoercible = require("../internals/require-object-coercible");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"kPk5h","../internals/require-object-coercible":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var fails = require("../internals/fails");
var classof = require("../internals/classof-raw");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"../internals/function-uncurry-this":"7GlkT","../internals/fails":"hL6D2","../internals/classof-raw":"bdfmm"}],"7GlkT":[function(require,module,exports) {
var classofRaw = require("../internals/classof-raw");
var uncurryThisRaw = require("../internals/function-uncurry-this-raw");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThisRaw(fn);
};

},{"../internals/classof-raw":"bdfmm","../internals/function-uncurry-this-raw":"bAiTz"}],"bdfmm":[function(require,module,exports) {
var uncurryThisRaw = require("../internals/function-uncurry-this-raw");
var toString = uncurryThisRaw({}.toString);
var stringSlice = uncurryThisRaw("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this-raw":"bAiTz"}],"bAiTz":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = function(fn) {
    return NATIVE_BIND ? uncurryThisWithBind(fn) : function() {
        return call.apply(fn, arguments);
    };
};

},{"../internals/function-bind-native":"i16Dq"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("../internals/is-null-or-undefined");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"../internals/is-null-or-undefined":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("../internals/to-primitive");
var isSymbol = require("../internals/is-symbol");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"../internals/to-primitive":"a2mK1","../internals/is-symbol":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("../internals/function-call");
var isObject = require("../internals/is-object");
var isSymbol = require("../internals/is-symbol");
var getMethod = require("../internals/get-method");
var ordinaryToPrimitive = require("../internals/ordinary-to-primitive");
var wellKnownSymbol = require("../internals/well-known-symbol");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"../internals/function-call":"d7JlP","../internals/is-object":"Z0pBo","../internals/is-symbol":"4aV4F","../internals/get-method":"9Zfiw","../internals/ordinary-to-primitive":"7MME2","../internals/well-known-symbol":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var $documentAll = require("../internals/document-all");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"../internals/is-callable":"l3Kyn","../internals/document-all":"5MHqB"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("../internals/document-all");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"../internals/document-all":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
var isCallable = require("../internals/is-callable");
var isPrototypeOf = require("../internals/object-is-prototype-of");
var USE_SYMBOL_AS_UID = require("../internals/use-symbol-as-uid");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"../internals/get-built-in":"6ZUSY","../internals/is-callable":"l3Kyn","../internals/object-is-prototype-of":"3jtKQ","../internals/use-symbol-as-uid":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
module.exports = uncurryThis({}.isPrototypeOf);

},{"../internals/function-uncurry-this":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("../internals/symbol-constructor-detection");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"../internals/symbol-constructor-detection":"8KyTD"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("../internals/engine-v8-version");
var fails = require("../internals/fails");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"bjFlO","../internals/fails":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("../internals/global");
var userAgent = require("../internals/engine-user-agent");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"../internals/global":"i8HOC","../internals/engine-user-agent":"73xBt"}],"73xBt":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
module.exports = getBuiltIn("navigator", "userAgent") || "";

},{"../internals/get-built-in":"6ZUSY"}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("../internals/a-callable");
var isNullOrUndefined = require("../internals/is-null-or-undefined");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"../internals/a-callable":"gOMir","../internals/is-null-or-undefined":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var tryToString = require("../internals/try-to-string");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"../internals/is-callable":"l3Kyn","../internals/try-to-string":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("../internals/function-call");
var isCallable = require("../internals/is-callable");
var isObject = require("../internals/is-object");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"../internals/function-call":"d7JlP","../internals/is-callable":"l3Kyn","../internals/is-object":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("../internals/global");
var shared = require("../internals/shared");
var hasOwn = require("../internals/has-own-property");
var uid = require("../internals/uid");
var NATIVE_SYMBOL = require("../internals/symbol-constructor-detection");
var USE_SYMBOL_AS_UID = require("../internals/use-symbol-as-uid");
var WellKnownSymbolsStore = shared("wks");
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol["for"];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
        else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description);
        else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"i8HOC","../internals/shared":"i1mHK","../internals/has-own-property":"gC2Q5","../internals/uid":"a3SEE","../internals/symbol-constructor-detection":"8KyTD","../internals/use-symbol-as-uid":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("../internals/is-pure");
var store = require("../internals/shared-store");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.25.5",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"../internals/is-pure":"5ZsyC","../internals/shared-store":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"l4ncH":[function(require,module,exports) {
var global = require("../internals/global");
var defineGlobalProperty = require("../internals/define-global-property");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"../internals/global":"i8HOC","../internals/define-global-property":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("../internals/global");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"i8HOC"}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var toObject = require("../internals/to-object");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/to-object":"5cb35"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("../internals/require-object-coercible");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"fOR0B"}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":"7GlkT"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var fails = require("../internals/fails");
var createElement = require("../internals/document-create-element");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2","../internals/document-create-element":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("../internals/global");
var isObject = require("../internals/is-object");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":"i8HOC","../internals/is-object":"Z0pBo"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var definePropertyModule = require("../internals/object-define-property");
var createPropertyDescriptor = require("../internals/create-property-descriptor");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"92ZIi","../internals/object-define-property":"iJR4w","../internals/create-property-descriptor":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var IE8_DOM_DEFINE = require("../internals/ie8-dom-define");
var V8_PROTOTYPE_DEFINE_BUG = require("../internals/v8-prototype-define-bug");
var anObject = require("../internals/an-object");
var toPropertyKey = require("../internals/to-property-key");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/descriptors":"92ZIi","../internals/ie8-dom-define":"qS9uN","../internals/v8-prototype-define-bug":"ka1Un","../internals/an-object":"4isCr","../internals/to-property-key":"5XWKd"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var fails = require("../internals/fails");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("../internals/is-object");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"../internals/is-object":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var definePropertyModule = require("../internals/object-define-property");
var makeBuiltIn = require("../internals/make-built-in");
var defineGlobalProperty = require("../internals/define-global-property");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"../internals/is-callable":"l3Kyn","../internals/object-define-property":"iJR4w","../internals/make-built-in":"cTB4k","../internals/define-global-property":"ggjnO"}],"cTB4k":[function(require,module,exports) {
var fails = require("../internals/fails");
var isCallable = require("../internals/is-callable");
var hasOwn = require("../internals/has-own-property");
var DESCRIPTORS = require("../internals/descriptors");
var CONFIGURABLE_FUNCTION_NAME = require("../internals/function-name").CONFIGURABLE;
var inspectSource = require("../internals/inspect-source");
var InternalStateModule = require("../internals/internal-state");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = TEMPLATE.join(typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/descriptors":"92ZIi","../internals/function-name":"l6Kgd","../internals/inspect-source":"9jh7O","../internals/internal-state":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var hasOwn = require("../internals/has-own-property");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":"92ZIi","../internals/has-own-property":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var isCallable = require("../internals/is-callable");
var store = require("../internals/shared-store");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":"7GlkT","../internals/is-callable":"l3Kyn","../internals/shared-store":"l4ncH"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("../internals/weak-map-basic-detection");
var global = require("../internals/global");
var isObject = require("../internals/is-object");
var createNonEnumerableProperty = require("../internals/create-non-enumerable-property");
var hasOwn = require("../internals/has-own-property");
var shared = require("../internals/shared-store");
var sharedKey = require("../internals/shared-key");
var hiddenKeys = require("../internals/hidden-keys");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/weak-map-basic-detection":"2PZTl","../internals/global":"i8HOC","../internals/is-object":"Z0pBo","../internals/create-non-enumerable-property":"8CL42","../internals/has-own-property":"gC2Q5","../internals/shared-store":"l4ncH","../internals/shared-key":"eAjGz","../internals/hidden-keys":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
var shared = require("../internals/shared");
var uid = require("../internals/uid");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"i1mHK","../internals/uid":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("../internals/has-own-property");
var ownKeys = require("../internals/own-keys");
var getOwnPropertyDescriptorModule = require("../internals/object-get-own-property-descriptor");
var definePropertyModule = require("../internals/object-define-property");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"../internals/has-own-property":"gC2Q5","../internals/own-keys":"1CX1A","../internals/object-get-own-property-descriptor":"lk5NI","../internals/object-define-property":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
var uncurryThis = require("../internals/function-uncurry-this");
var getOwnPropertyNamesModule = require("../internals/object-get-own-property-names");
var getOwnPropertySymbolsModule = require("../internals/object-get-own-property-symbols");
var anObject = require("../internals/an-object");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"6ZUSY","../internals/function-uncurry-this":"7GlkT","../internals/object-get-own-property-names":"fjY04","../internals/object-get-own-property-symbols":"4DWO3","../internals/an-object":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("../internals/object-keys-internal");
var enumBugKeys = require("../internals/enum-bug-keys");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"hl5T1","../internals/enum-bug-keys":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var hasOwn = require("../internals/has-own-property");
var toIndexedObject = require("../internals/to-indexed-object");
var indexOf = require("../internals/array-includes").indexOf;
var hiddenKeys = require("../internals/hidden-keys");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/has-own-property":"gC2Q5","../internals/to-indexed-object":"jLWwQ","../internals/array-includes":"n5IsC","../internals/hidden-keys":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("../internals/to-indexed-object");
var toAbsoluteIndex = require("../internals/to-absolute-index");
var lengthOfArrayLike = require("../internals/length-of-array-like");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"jLWwQ","../internals/to-absolute-index":"5yh27","../internals/length-of-array-like":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("../internals/to-integer-or-infinity");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("../internals/math-trunc");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"../internals/math-trunc":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("../internals/to-length");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"../internals/to-length":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("../internals/to-integer-or-infinity");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("../internals/fails");
var isCallable = require("../internals/is-callable");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require("../internals/global");
var apply = require("../internals/function-apply");
var bind = require("../internals/function-bind-context");
var isCallable = require("../internals/is-callable");
var hasOwn = require("../internals/has-own-property");
var fails = require("../internals/fails");
var html = require("../internals/html");
var arraySlice = require("../internals/array-slice");
var createElement = require("../internals/document-create-element");
var validateArgumentsLength = require("../internals/validate-arguments-length");
var IS_IOS = require("../internals/engine-is-ios");
var IS_NODE = require("../internals/engine-is-node");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
} catch (error) {}
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(post)) {
        defer = post;
        global.addEventListener("message", listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"../internals/global":"i8HOC","../internals/function-apply":"148ka","../internals/function-bind-context":"7vpmS","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/fails":"hL6D2","../internals/html":"2pze4","../internals/array-slice":"RsFXo","../internals/document-create-element":"4bOHl","../internals/validate-arguments-length":"b9O3D","../internals/engine-is-ios":"bzGah","../internals/engine-is-node":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"../internals/function-bind-native":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var aCallable = require("../internals/a-callable");
var NATIVE_BIND = require("../internals/function-bind-native");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/a-callable":"gOMir","../internals/function-bind-native":"i16Dq"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
module.exports = getBuiltIn("document", "documentElement");

},{"../internals/get-built-in":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
module.exports = uncurryThis([].slice);

},{"../internals/function-uncurry-this":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("../internals/engine-user-agent");
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var classof = require("../internals/classof-raw");
var global = require("../internals/global");
module.exports = classof(global.process) == "process";

},{"../internals/classof-raw":"bdfmm","../internals/global":"i8HOC"}],"l7FDS":[function(require,module,exports) {
var $ = require("../internals/export");
var global = require("../internals/global");
var setImmediate = require("../internals/task").set;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"../internals/export":"dIGt4","../internals/global":"i8HOC","../internals/task":"7jDg7"}]},["4qavH","8ZNvh"], "8ZNvh", "parcelRequire5ac4")

//# sourceMappingURL=index.f5c48570.js.map
