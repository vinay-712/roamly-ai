import { readFileSync } from "node:fs";

const files = {
  html: readFileSync("index.html", "utf8"),
  css: readFileSync("styles.css", "utf8"),
  js: readFileSync("app.js", "utf8"),
  readme: readFileSync("README.md", "utf8")
};

const checks = [
  ["HTML declares a language", /<html[^>]+lang=/i.test(files.html)],
  ["Viewport metadata exists", /name="viewport"/i.test(files.html)],
  ["Page description exists", /name="description"/i.test(files.html)],
  ["Application mount exists", /id="app"/i.test(files.html)],
  ["Stylesheet is linked", /href="styles\.css"/i.test(files.html)],
  ["JavaScript is loaded", /src="app\.js"/i.test(files.html)],
  ["Keyboard focus styles exist", /focus-visible/.test(files.css)],
  ["Reduced motion is respected", /prefers-reduced-motion/.test(files.css)],
  ["Live prototype is linked", /vinay-712\.github\.io\/roamly-ai/.test(files.readme)]
];

const failures = checks.filter(([, passed]) => !passed);
for (const [name, passed] of checks) console.log(`${passed ? "✓" : "✗"} ${name}`);
if (failures.length) process.exit(1);
