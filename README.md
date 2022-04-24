## Express-Practice 🧑‍🏫

<hr>

## Used Dependencies 👇

```
 {
  "name": "Proj-name",
  "version": "1.0.0",
  "description": "learning node, express and mongodb",
  "main": "app.js",
  "scripts": {
    "start:dev": "nodemon server.js",
    "start:prod": "NODE_ENV=production nodemon server.js"
  },
  "author": "Prathamesh",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "eslint": "^8.14.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.4",
    "prettier": "^2.6.2"
  }
}

```

<hr>

## ESLint config files (.eslintrc.json) 👇

```
{
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }]
  }
}

```

<hr>

## Prettier config files (.prettierrc) 👇

```
{
  "singleQuote": true
}
```
