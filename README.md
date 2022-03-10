# fire-web-boilerplate

## 1、安装nodejs和npm
## 2、安装yarn
```
npm install -g yarn
```
## 3、生成vite项目
```
yarn create vite
```
## 4、安装node modules依赖包
```
yarn
```
## 5、运行并查看效果
```
yarn dev
```
## 6、安装tailwind 和 postcss
```
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
```

## 7、生成tailwind和postcss配置文件
```
npx tailwindcss init -p
```

## 8、修改vite.config.ts
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path' //必须要引入resolve 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //必须要引入resolve 
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, 'src')
      },
      {
        find: "@assets",
        replacement: resolve(__dirname, 'src/assets')
      }
    ]
  }
})
```
主要增加resolve相关

## 9、tsconfig.json
```
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    "baseUrl": ".",
    "paths": {
      "@/*": [ "src/*" ],
      // "@/assets/*": [ "src/assets/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
增加baseUrl和paths

## 10、修改tailwink.config.js
```
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
增加purge
## 11、新建tailwind.css,内容：
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## 12、
```
```