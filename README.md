# Notes from A Practical Start with TypeScript
[A Practical Start with TypeScript](https://app.pluralsight.com/library/courses/typescript-practical-start/table-of-contents)


## Notes
Benefits of typed language
- Mistakes are detected up front
- Less bugs
- Makes type checking unnecessary

TypeScript Compiler -> `tsc` transpiles TypeScript to JavaScript
- Install via `npm install -g typescript`
- Run `tsc test.ts` in root directory of project
 - Note that a `test.js` file is created and is the correct ES5 syntax

`tsconfig.json`
- `compilerOptions`
	- `target` specifices the version of JS (ES5, ES6, ES3)
	- `outFile` combines multiple TS files into one JS file
	- `outDir` creates individual JS files for each TS file and place in specified directory
	- `sourceMap` option creates map for each JS file, linking back to TS line numbers (helps with debugging)
