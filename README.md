# Notes on TypeScript

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


## TypeScript Basics
Data Types
- Built-In
	- boolean
	- string
	- number
- Custom
	- enum
	- array
	- interface
	- class

Opt Out of Typing Variable
```javascript
var anyType: any = 4;
anyType = "Some string";
anyType = true;
// The `any` type effectively gives back loose typing of JS.
```

```javascript
var str: string = "String Type";
var num: number = 42;
var bool: boolean = true;

var arr: number[] = [1,2,3,4,5];
var strArr: string[] = ["hello", "world"];
```


Set Properties to Private
```javascript
class Foo {
	bar: number = 1;
	private baz: string = "cannot change me";
}
var fooInstance = new Foo();
fooInstance.bar = 42; // acceptable to do
fooInstance.baz = "changed string"; // throws an error
```

Use Getters and Setters
```javascript
class Foo {
	private baz: string = "cannot change me";
	get Baz() {
		return this.baz;
	}
	set Baz(newString: string) {
		this.baz = newString;
	}
}
var fooInstance = new Foo();
fooInstance.Baz; // "cannot change me"
fooInstance.Baz("changed");
fooInstance.Baz; // "changed"
```

TypeScript has typing for standard JS objects
- Typings must be used for external libraries
- [Typings on GitHub](https://github.com/typings/typings)
