### Known bugs

- [x] Unit test cases not running, unable to debug the issue as of now

**FAIL** src/components/StyledButton/\_\_tests\_\_/StyledButton.spec.ts [ src/components/StyledButton/\_\_tests\_\_/StyledButton.spec.ts ]

**Error: Failed to parse source for import analysis because the content contains invalid JS syntax. Install @vitejs/plugin-vue to handle .vue files.**

```
 ❯ formatError node_modules/vite/dist/node/chunks/dep-4d3eff22.js:42645:46
 ❯ TransformContext.error node_modules/vite/dist/node/chunks/dep-4d3eff22.js:42641:19
 ❯ TransformContext.transform node_modules/vite/dist/node/chunks/dep-4d3eff22.js:40447:22
 ❯ Object.transform node_modules/vite/dist/node/chunks/dep-4d3eff22.js:42919:30
 ❯ loadAndTransform node_modules/vite/dist/node/chunks/dep-4d3eff22.js:53385:29
```

### Should Have

- Improve test coverage for layout components
- Add storybook for layout components
- Add loaders when API responses are pending