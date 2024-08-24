/**
 * @fileoverview function name first char must be capital
 * @author luca
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: `suggestion`, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "function name first char must be capital",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      nameWithoutCapital: "'{{ name }}' 函数名首字母必须大写",
    }, // Add messageId and message
  },

  create(context) {
    function validateFunctionName(node, name) {
      if (!isCapitalized(name)) {
        context.report({
          node,
          messageId: "nameWithoutCapital",
          data: { name },
        });
      }
    }

    function isCapitalized(name) {
      return name.charAt(0) === name.charAt(0).toUpperCase();
    }

    function commonFunctionExpressionProcesser(node) {
      try {
        node = node.parent;
        switch (node.type) {
          case "MethodDefinition":
            node = node.key;
            break;
          case "Property":
            node = node.key;
            break;
          case "VariableDeclarator":
            node = node.id
            break;
        }
        validateFunctionName(node, node.name);
      } catch (e) {
        throw new Error(e);
      }
    }

    return {
      FunctionDeclaration(node) {
        validateFunctionName(node, node.id.name);
      },
      FunctionExpression(node) {
        commonFunctionExpressionProcesser(node)
      },
      ArrowFunctionExpression(node) {
        commonFunctionExpressionProcesser(node)
      },
    };
  },
};
