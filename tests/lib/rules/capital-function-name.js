/**
 * @fileoverview function name first char must be capital
 * @author luca
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/capital-function-name"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("capital-function-name", rule, {
  valid: [
    {
      code: "function Get(){}",
    },
    {
      code: "const Abc = () => {}",
    },
    {
      code: "class A { A(){} }",
    },
    {
      code: "class A { static A(){} }",
    },
    {
      code: "const a = {Get(){}}",
    },
    {
      code: "const a = {Get:() => {}}",
    },
    {
      code: "const a = {Get: function(){}}",
    },
    {
      code: "const a = {Get: function a(){}}",
    },
    {
      code: "const A = function(){}",
    },
    {
      code: "const A = function a(){}",
    },
  ],

  invalid: [
    {
      code: "function get(){}",
      errors: [
        {
          messageId: "nameWithoutCapital",
          data: { name: "get" },
        },
      ],
    },
    {
      code: "const get = () => {}",
      errors: [
        {
          messageId: "nameWithoutCapital",
          data: { name: "get" },
        },
      ],
    },
    {
      code: "const get = { get:() => {}}",
      errors: [
        {
          messageId: "nameWithoutCapital",
          data: { name: "get" },
        },
      ],
    },
    {
      code: "const get = { get:function(){}}",
      errors: [
        {
          messageId: "nameWithoutCapital",
          data: { name: "get" },
        },
      ],
    },
  ],
});