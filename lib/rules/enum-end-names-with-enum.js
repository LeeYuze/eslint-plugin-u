/**
 * @fileoverview ts type enum name must endwith Enum
 * @author luca
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "ts type enum name must endwith Enum",
      recommended: true,
      url: "https://github.com/LeeYuze/eslint-plugin-u/blob/main/docs/rules/enum-end-names-with-enum.md",
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      enumNameEndsWithEnum: 'Ts Enum 类型 命名必须以"Enum"结尾',
    }, // Add messageId and message
  },

  create(context) {
    return {
      TSEnumDeclaration(node) {
        const typeName = node.id.name;
        const endsWithEnum = typeName.endsWith("Enum");

        if (!endsWithEnum) {
          context.report({
            node: node,
            messageId: "enumNameEndsWithEnum",
          });
        }
      },
    };
  },
};
