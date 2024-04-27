# Tiny React Template

Minimalistic React App without building anything.

## Installation

Copy the files in any way you like. Example:

```console
$ npx tiged qnighy/tiny-react-template my-app
```

Or directly create a repository from the template:

```console
$ gh repo create my-app --template qnighy/tiny-react-template
```

## Running

Use any HTTP server. Example:

```console
$ python3 -m http.server 3000

# Then open http://localhost:3000
```

Alternatively:

- `php -S localhost:3000`
- `ruby -run -e httpd . -p 3000`
- `npx serve -l 3000`

## Caveats

- No JSX support, meaning you need to write `jsxs("div", { children: [...] })` instead of `<div>...</div>`.
- No TS syntax support. Use [JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) instead.
- No preconfigured ESLint. You should ensure [Rules of Hooks](https://react.dev/warnings/invalid-hook-call-warning) yourself.
- You may also miss several convenience features like hot reloading.

## React JSX guide

The table below assumes the following imports:

```js
import { jsx, jsxs } from "react/jsx-runtime";
```

|JSX|Alternative|
|---|---|
|`<div />`|`jsx("div", {})`|
|`<App />`|`jsx(App, {})`|
|`<div className="foo" />`|`jsx("div", { className: "foo" })`|
|`<div key="foo" />`|`jsx("div", {}, "foo")`|
|`<div foo="1" {...props} bar="2" />`|`jsx("div", { foo: "1", ...props, bar: "2" })`|
|`<div>A</div>`|`jsx("div", { children: "A" })`|
|`<div><A /></div>`|`jsx("div", { children: jsx(A, {}) })`|
|`<div>{x}</div>`|`jsx("div", { children: x })`|
|`<div>Hello, {x}!</div>`|`jsxs("div", { children: ["Hello, ", x, "!"] })`|

Here's the rule of thumb:

- The first argument is a string literal if the tag name is a single lowercase identifier (e.g., `div`). Otherwise, it is an identifier or a member expression (e.g., `App` or `Foo.Bar`).
- The `key` prop is special; it should be passed as the third argument.
- Use `jsxs` only when the `children` prop is an array expression without any spread. Conversely, you should use this when the condition is met to suppress the warning regarding the `key` prop.
- Otherwise, `children` is treated equally to other props.

## Acknowledgements

Thank you [esm.sh](https://esm.sh/) for providing the browser ESM integration.

Thank you [CRA](https://create-react-app.dev/) for the inspiration.

## License

Tiny React Template is licensed under [MIT](https://opensource.org/license/mit) or [CC0](https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1) (whichever you prefer)

<details><summary>MIT</summary>

Copyright 2024 Masaki Hara

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</details>

<details><summary>CC0</summary>

[Tiny React Template](https://github.com/qnighy/tiny-react-template) by Masaki Hara is marked with [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).

</details>
