/**
 * @fileoverview max if else count
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
      description: "max if else count",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      useSwitch: "使用'switch' 代替 else if",
    }, // Add messageId and message
  },

  create(context) {
    return {
      IfStatement(node) {
        // 检查是否有多个 else if 子句
        if (node.alternate && node.alternate.type === "IfStatement") {
          let count = 1;
          let currentNode = node;

          while (
            currentNode.alternate &&
            currentNode.alternate.type === "IfStatement"
          ) {
            count++;
            currentNode = currentNode.alternate;
          }

          // 如果有三个或更多的 else if 子句，建议使用 switch
          if (count >= 1) {
            context.report({
              node: node,
              messageId: "useSwitch",
            });
          }
        }
      },
    };
  },
};
