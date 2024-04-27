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
