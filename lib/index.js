/**
 * @fileoverview u team eslint
 * @author luca
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");
const pkg = require("../package.json");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = requireIndex(__dirname + "/rules");

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  rules,
  configs: {},
};

// 定义推荐配置
Object.assign(plugin.configs, {
  recommended: {
    plugins: {
      u: plugin,
    },
    rules: {
      "u/capital-function-name": "warn",
      "u/enum-end-names-with-enum": "warn",
      "u/max-if-else": "warn",
    },
  },
});

module.exports = plugin;
