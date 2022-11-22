# Daily Diary

## Skills

### 주요 라이브러리

### SEO

#### sitemap

사용 라이브러리 - babel-cli - babel-preset-es2015 - babel-preset-react - babel-register

구현

- src/sitemapGenerator.js
- src/sitemapRoutes.js
- package.json
  ```
  "script": {
    ...
    "sitemap": "babel-node src/sitemapGenerator.js",
    "prebuild": "npm run sitemap",
    ...
  }
  ```

#### prerendering

사용 라이브러리: react-hydratable

구현

- /hydratable.config.json

index.tsx

```ts
const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrate(element, rootElement);
} else {
  render(element, rootElement);
}
```

root가 랜더링 도중 자식이 비어있을 때 prerendering 한 결과를 대신 보여주기 때문에 화면 깜빡임이 해소됨

#### meta tag

사용 라이브러리: react-helmat-async

페이지별로 다른 메타 태그를 적용함

기타 메타 태그 설정 툴: https://metatags.io/

### 배포

Netlify 사용: https://diarydaily.netlify.app/

netlify.toml

```
[build]
  publish = "build/"

[context.production.environment]
  TOML_ENV_VAR = "From netlify.toml"
  REACT_APP_TOML_ENV_VAR = "From netlify.toml (REACT_APP_)"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

```
  "script": {
    "deploy": "npm run build && netlify deploy --prod"
  }
```
