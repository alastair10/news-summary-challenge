(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsClient.js
  var require_newsClient = __commonJS({
    "newsClient.js"(exports, module) {
      var NewsClient2 = class {
        getNewsInfo(apiKey2, callback) {
          fetch(`https://content.guardianapis.com/search?api-key=${apiKey2}`).then((response) => response.json()).then((data) => callback(data));
        }
      };
      module.exports = NewsClient2;
    }
  });

  // node_modules/callback-fetch/dist/index.js
  var require_dist = __commonJS({
    "node_modules/callback-fetch/dist/index.js"(exports, module) {
      var __defProp = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
              __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
      var src_exports = {};
      __export(src_exports, {
        get: () => get2,
        post: () => post
      });
      module.exports = __toCommonJS(src_exports);
      var get2 = (url, callback) => {
        fetch(url).then((res) => res.text()).then((text) => callback(text));
      };
      var post = (url, body, callback) => {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }).then((res) => res.text()).then((text) => callback(text));
      };
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      module.exports = "59b8dfb6-b5f2-45e3-85f9-347ed746f434";
    }
  });

  // src/index.js
  var NewsClient = require_newsClient();
  var { get } = require_dist();
  var apiKey = require_apiKey();
  var apiURL = `https://content.guardianapis.com/search?api-key=${apiKey}`;
  var newsData = null;
  get(apiURL).then((response) => {
    newsData = JSON.parse(response.body);
    console.log(newsData);
  });
  console.log("Requesting news data");
})();
