# WARNING

This project is no longer maintained. For Angular 2 starter take a look at the [angular2-seed](https://github.com/mgechev/angular2-seed), that this project is based on.

# Features

* Component styling
* Custom Directive
* Router module (implementing child routes*)
* Http module
* Form module (using template driven form approach)

# How to start

**Note** that this seed project requires node v0.12.x or higher and npm 3.x.x.

```bash
npm install
# dev
npm run serve.dev
```
_Does not rely on any global dependencies._

# Directory Structure

```
.
├── app
│   ├── components
│   │   ├── about
│   │   │   ├── about.html
│   │   │   ├── about.ts
│   │   │   └── about_spec.ts
│   │   └── home
│   │       ├── home.css
│   │       ├── home.html
│   │       ├── home.ts
│   │       └── home_spec.ts
│   ├── services
│   │   ├── name_list.ts
│   │   └── name_list_spec.ts
│   ├── typings
│   ├── app.css
│   ├── app.html
│   ├── app.ts
│   ├── index.html
│   └── init.ts
├── dist
│   ├── dev
│   └── prod
├── tools
│   ├── tasks
│   ├── utils.js
│   └── workflow.config.js
├── tsd_typings
├── gulpfile.js
├── karma.conf.js
├── package.json
├── test-main.js
├── tsconfig.json
└── tsd.json
```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm run serve.dev -- --port 8080 --reload-port 4000 --base /my-app/
```

# Now to extend?

If you want to use your custom libraries:

```bash
npm install my-library --save
vim gulpfile.js
```
Add reference to the installed library in `PATH.src.lib` into `./tools/workflow.config.js`.

# Running test

```bash
# In a single bash window
npm run test

# Debug - In two bash windows
npm run karma      # 1st window
npm run test.dev   # 2nd window
```

# License

MIT
