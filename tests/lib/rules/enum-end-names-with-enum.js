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

const ruleTester = new RuleTester({
  languageOptions: {
    parser: require("@typescript-eslint/parser"),
  },
});

ruleTester.run("enum-end-names-with-enum", rule, {
  valid: [
    {
      code: "enum StatusEnum { Active, Inactive }",
    },
    {
      code: "enum ColorEnum { Red, Green, Blue }",
    },
    {
      code: "enum UserTypeEnum { Admin = 'admin', User = 'user' }",
    },
  ],

  invalid: [
    {
      code: "enum Status { Active, Inactive }",
      errors: [{ messageId: "enumNameEndsWithEnum" }],
    },
    {
      code: "enum Color { Red, Green, Blue }",
      errors: [{ messageId: "enumNameEndsWithEnum" }],
    },
    {
      code: "enum UserType { Admin = 'admin', User = 'user' }",
      errors: [{ messageId: "enumNameEndsWithEnum" }],
    },
  ],
});
