/**
 * @fileoverview ts type enum name must endwith Enum
 * @author luca
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/enum-end-names-with-enum"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("enum-end-names-with-enum", rule, {
  valid: [
  ],

  invalid: [
  ],
});
