# TypeScript Learning Journey

## Day 1: Introduction & Project Setup

### 1. What is TypeScript?
* **Superset of JavaScript:** TypeScript builds on top of JavaScript by adding static typing and object-oriented programming (OOP) features.
* **Compile-Time Error Checking:** Helps catch potential bugs and type errors early during development (at compile-time) rather than at runtime.

---

### 2. Project Configuration & Modules
* **`tsconfig.json` Setup:** Initialized the configuration file using:
  ```bash
  tsc --init

Directory Routing:

        Configured rootDir to ./src for TypeScript source files (.ts).

        Configured outDir to ./output for compiled JavaScript output (.js).

    Automated Compilation: Running tsc or tsc --watch automatically compiles TypeScript files from src/ directly into the output/ directory.

#### 3. Key Configurations Learned

    Configured module settings to control how export statements are emitted in compiled JavaScript files.

### Quick Tip on `moduleDetection`

While setting `"moduleDetection": "legacy"` avoids generating `export {}` statements in individual files, standard TypeScript projects usually handle exports by either:
1. Adding top-level `import`/`export` statements (converting the file into an ES Module).
2. Linking the output file in HTML using `<script type="module" src="./output/script.js"></script>`.