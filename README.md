# react 模板

基于 `create-react-app@2.1.8`创建。

```js
// 初始版本
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-scripts": "3.2.0"
```

#### 1. 添加 `prettier`规则

- 疑惑 1： 此时只安装了三个依赖(`eslint-plugin-prettier`, `eslint-config-prettier`,`prettier`)，添加了`.prettierrc`文件及规则，就可以 format 文件了

#### 2. i18n 修改为 `React.Context`形式

##### 2.1 使用方式

- 在`App.jsx`中使用 `LangProvider`, 若不使用，则默认值为 `lang = zh`，若使用，则可以调用`changeLang` 切换语言(`zh` <--> `en`)
- 在需要使用中英文切换的地方使用形如 `<FormattedMessage id="home_title" plain />`，不传递 plain 属性时得到的形式为 `<span>首页</span>`
- 在需要引入原始的文本的组件，使用形如 `withLang(Home)`，则组件的 `props`属性会包含有 `localText`属性。

#### 3. InnerWidth 修改为 `React.Context`形式

##### 3.1 使用方式

- 在`App.jsx`中使用 `InnerWidthProvider`, 若不使用，则默认值为 `width = 0`，当网页的宽度发生变化时，则 `width`取值可能会有：
  - **768** --- 宽度小于等于 `768px`
  - **1200** --- 宽度小于等于 `1200px`
  - **0** --- 默认值，宽度大于`1200px`
- 在需要进行移动端和 PC 端组件切换的地方，使用形如 `<ResponsiveSwitch pc={PC} mobile={Mobile} />`，目前将宽度 **`768`** 作为移动端和 PC 端的分界
- 在需要使用宽度的组件，使用形如 `withInnerWidth(Home)`，则组件的 `props`属性会包含有 `width`属性。

#### 4. 与之前的项目比较

##### 4.1 依赖相关

- `normalize.css`

  ```js
  // 安装
  $ yarn add  normalize.css

  // 在 index.js 中导入
  import 'normalize.css'

  ```

- `@babel/plugin-syntax-jsx` 及 `babel-polyfill`

  感觉用不到

- `dayjs`

  使用日期相关时 会用到，也可考虑使用 `date-fns`等

- `scriptjs`

  异步下载 cdn 的资源时，会用到

#### 5. 响应式

##### 5.1 字体

`CSS-Tricks`推荐的默认字体为：

```css
 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
    Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji,
    segoe ui symbol;
}
```

#### 6. 热更新

##### 1. webpack HMR

CRA 已经针对 webpack 的 HMR 进行了配置，正常进行项目修改时，浏览器会自动刷新进行更新，如果想要浏览器不刷新进行更新，可以修改`index.js`中`render App`的代码为：

```js
const render = AppComp => {
  return ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppComp />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

// 我们是不是在 dev 环境 ？
if (module.hot) {
  // 当 App.js 更新了
  module.hot.accept('containers/App', function() {
    const NewApp = require('containers/App')
    render(NewApp)
  })
}
```

需要注意的是，此时会进行整个`App`的替换，所以内部组件的状态也会被清掉，若想要保持每一个内部组件的状态，则可以考虑使用 `react-hot-loader`
