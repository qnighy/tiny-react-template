// @ts-check

import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";

/**
 * @returns {React.ReactNode}
 */
function App() {
  // return (<div className="App">
  return jsxs("div", { className: "App", children: [
    // <h1>React App</h1>
    jsxs("h1", { children: ["React App"] }),
    // <p>
    jsxs("p", {
      // Edit <code>src/App.tsx</code> and save to reload.
      children: ["Edit ", jsxs("code", { children: ["src/App.tsx"] }), ", save the file and reload the page."],
      // </p>
    }),
    // <p>
    jsxs("p", { children: [
      // <a
      jsxs("a", {
        // className="App-link"
        className: "App-link",
        // href="https://reactjs.org"
        href: "https://reactjs.org",
        // target="_blank"
        target: "_blank",
        // rel="noopener noreferrer"
        rel: "noopener noreferrer",
        // >
        children: [
          // Learn React
          "Learn React",
        ]
        // </a>
      }),
      // </p>
    ] }),
    // </div>);
  ] });
}

const root = createRoot(/** @type {HTMLElement} */ (document.getElementById("root")));
root.render(
  jsx(React.StrictMode, { children: [
    jsx(App, {})
  ] })
);
