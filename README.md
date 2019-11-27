# react 模板

基于 `create-react-app@2.1.8`创建。

```js
// 初始版本
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-scripts": "3.2.0"
```

#### 添加 `prettier`规则

- 疑惑 1： 此时只安装了三个依赖(`eslint-plugin-prettier`, `eslint-config-prettier`,`prettier`)，添加了`.prettierrc`文件及规则，就可以 format 文件了

#### i18n 修改为 `React.Context`形式

##### 使用方式

- 在`App.jsx`中使用 `LangProvider`, 若不使用，则默认值为 `lang = zh`，若使用，则可以调用`changeLang` 切换语言(`zh` <--> `en`)
- 在需要使用中英文切换的地方使用形如 `<FormattedMessage id="home_title" plain />`，不传递 plain 属性时得到的形式为 `<span>首页</span>`
- 在需要引入原始的文本的组件，使用形如 `withLang(Home)`，则组件的 `props`属性会包含有 `localText`属性。

#### InnerWidth 修改为 `React.Context`形式

##### 使用方式

- 在`App.jsx`中使用 `InnerWidthProvider`, 若不使用，则默认值为 `width = 0`，当网页的宽度发生变化时，则 `width`取值可能会有：
  - **768** 宽度小于等于 `768px`
  - **1200** 宽度小于等于 `1200px`
  - **0** 默认值，宽度大于`1200px`
- 在需要进行移动端和 PC 端组件切换的地方，使用形如 `<ResponsiveSwitch pc={PC} mobile={Mobile} />`，目前将宽度 **`768`** 作为移动端和 PC 端的分界
- 在需要使用宽度的组件，使用形如 `withInnerWidth(Home)`，则组件的 `props`属性会包含有 `width`属性。
