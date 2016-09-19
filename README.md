# Notes from A Practical Start with TypeScript
[A Practical Start with TypeScript](https://app.pluralsight.com/library/courses/typescript-practical-start/table-of-contents)


## Notes
Benefits of typed language
- Mistakes are detected up front
- Less bugs
- Makes type checking unnecessary

TypeScript Compiler -> `tsc` transpiles TypeScript to JavaScript
- Install via `npm install -g typescript`
- Run `tsc` in root directory of project
 - Note that a `test.js` file is created and is the correct ES5 syntax
 - Note that a `js` directory is created that contains the transpiled JavaScript files, along with source map files

`tsconfig.json`
- `compilerOptions`
	- `target` specifices the version of JS (ES5, ES6, ES3)
	- `outFile` combines multiple TS files into one JS file
	- `outDir` creates individual JS files for each TS file and place in specified directory
	- `sourceMap` option creates map for each JS file, linking back to TS line numbers (helps with debugging)

Reference Other TS Files
- `outFile` option may assemble transpiled JS in incorrect order
- Use triple-slash reference at top of TS file: `/// <reference path="otherTSFile.ts" />`
- This will help to be sure the order of transpiled JS is correct
