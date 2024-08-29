# eslint-plugin-u

u team eslint

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-u`:

```sh
npm install eslint-plugin-u --save-dev
```

## Usage

Add `u` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@leeyuze/u"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        // 用 switch 代替 else if
        "@leeyuze/u/max-if-else": "error",
        // 函数首字母必须大写, 允许component为小写
        "@leeyuze/u/capital-function-name": ["error", ["component"]],
        // enum类型名称必须以Enum结尾
        "@leeyuze/u/enum-end-names-with-enum": "error",
    }
}
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


