# Typescript-and-Nodejs
> ### Setup configurations for nodejs and typescript

* ### **Initialize npm and add your details**
```bash
npm init -y
```

* ### **Add `typescript`, `ts-node` and `@types/node` definitions to dev dependencies.**


```bash
$ npm i --save-dev typescript
$ npm i --save-dev ts-node
$ npm i --sav-dev @types/node
```

* ### **Add the default TypeScript configuration file**
```bash
$ npx tsc --init 
```
Common output directory names include `dist`, `build`, `prod`, and `server`.

This config file is also where you can tell TypeScript how strict it should be while checking your code and what to ignore. If you're moving a project to TypeScript, you can gracefully integrate TS by working with the settings in this config file.

### **NPX and Creating your package.json Script**

To use TypeScript, you need to add a script to your `package.json` file to compile TypeScript to JavaScript. This is generally called your "build" script but could be named anything.
* ### **Add a build script to your package.json file**

```json
"scripts": {
    "build": "npx tsc"
  },
  ```


To execute your `"build"` script use the following:
```bash
$ npm run build
```

## **More TypeScript Configurations**
[Video Demonstration](https://youtu.be/_Pb7Kdzn6zU)
### **Helpful configurations to note:**
```json
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                     
    "lib": ["ES2018", "DOM"], 
    "outDir": "./build",                        
    "strict": true,                           
    "noImplicitAny": true,                 
  },
  "exclude": ["node_modules", "./build", "*/__test__/**"]
}
```
You will see many more options available than what is above. Your application may require additional settings to be configured, but these are typically the main settings to start with.

* `target` - sets what version of JS TypeScript will be transpiled to.
* `module` - sets what module system will be used when transpiling. Node.js uses the common.js module system by default.
* `lib` - is used to say what libraries your code is using. In this case, ES2018 and the DOM API.
* `outDir` - where you want your src code to output to. Often named build, prod, or server (when using it serverside).
* `strict` - enable strict typing.
* `noImplicitAny` - disallow the "any" type (covered in TypeScript Basics).
* `exclude` - directories to exclude in compiling.

## **Further Reading**
* Catch up on [ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) if you haven't had the opportunity to work with them yet.
* Official [documentation](https://www.typescriptlang.org/download) from Microsoft on installing TypeScript.
* Explicit [instructions](https://docs.microsoft.com/en-us/visualstudio/javascript/compile-typescript-code-npm?view=vs-2019) from Microsoft on Installing TypeScript and working with NPM and a text editor.