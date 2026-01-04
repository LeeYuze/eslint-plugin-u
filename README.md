# eslint-plugin-u

U 团队 ESLint 插件

## Installation

```sh
npm install @leeyuze/eslint-plugin-u --save-dev
```

## Usage

### 方式一：使用推荐配置（推荐）

在 `eslint.config.mjs` 中使用预设配置，一键启用所有规则：

```js
import pluginU from "@leeyuze/eslint-plugin-u";

export default [
  pluginU.configs.recommended,
];
```

### 方式二：手动配置规则

```js
import pluginU from "@leeyuze/eslint-plugin-u";

export default [
  {
    plugins: {
      u: pluginU,
    },
    rules: {
      // 用 switch 代替 else if
      "u/max-if-else": "warn",
      // 函数首字母必须大写, 允许 component 为小写
      "u/capital-function-name": ["warn", ["component"]],
      // enum 类型名称必须以 Enum 结尾
      "u/enum-end-names-with-enum": "warn",
    },
  },
];
```

## Configurations

| 配置名 | 描述 |
| ------ | ---- |
| `recommended` | 启用所有推荐规则（warn 级别） |

## Rules

| 规则名 | 描述 |
| ------ | ---- |
| [capital-function-name](docs/rules/capital-function-name.md) | 函数名首字母必须大写 |
| [enum-end-names-with-enum](docs/rules/enum-end-names-with-enum.md) | TypeScript Enum 类型命名必须以 "Enum" 结尾 |
| [max-if-else](docs/rules/max-if-else.md) | 多个 else if 时建议使用 switch 语句 |

## License

MIT
