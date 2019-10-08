![LiteReport logo](/img/litereport-icon.png)

# LiteReport

Lighthouse reports for localhost ports. Currently runs tests on 3000 port.

## Features

- Automatic: makes multiple Lighthouse reports with only one command prompt
- Saves everything in one organized folder
- Takes around 25-30 seconds to run every single test, depending on your page content
- Works offline. No internet connection needed to run local tests

## Output results

- Html
- JSON
- CSV
- Inline Terminal text
- Pop up page giving you the entire results

### How to use in two steps

1. Install via npm ```npm i litereport```
2. Type in```npm run litereport``` to the terminal


#### Tools used

- [Lighthouse](https://www.npmjs.com/package/lighthouse)
- [Lighthouse-ci](https://www.npmjs.com/package/lighthouse-ci)

##### Current objectives

- [ ] Add a landing page for project
- [ ] Scan for active localhost projects by itself
- [ ] Add pdf output inside the reports