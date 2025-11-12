# WebTech Lab — Weather Dashboard & Mini Blog

## Projects
- Weather Dashboard (v1 fixed, v2 search + 5-day forecast)
- Mini Blog (v1 static, v2 create/delete + persistence)

## Setup
1. Clone repository.
2. For weather features, obtain an OpenWeatherMap API key: https://openweathermap.org/api
3. Locally put your key into `weather/v1/script.js` and `weather/v2/script.js` by replacing the placeholder OR use the CI secret method described in REPORT.md.

## Serve
Run `npx http-server -p 8080` and visit:
- `http://localhost:8080/weather/v2/index.html`
- `http://localhost:8080/blog/v2/index.html`

## Tests
- Weather tests: `cd weather/v2/tests && npm ci && npm test`
- Blog tests: `cd blog/v2/tests && npm ci && npm test`

## CI/CD
- GitHub Actions workflow available at `.github/workflows/ci-cd.yml` — runs tests and deploys to GitHub Pages on push to `main`.
