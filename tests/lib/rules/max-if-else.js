/**
 * @fileoverview max if else count
 * @author luca
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/max-if-else"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("max-if-else", rule, {
  valid: [
    {
      code: `
      if(true){
      } else {
      }`,
    },
  ],

  invalid: [
    {
      code: `
      if(true){
      } else if(true) {
      }`,
      errors: [
        {
          messageId: "useSwitch",
        },
      ],
    },
  ],
});
