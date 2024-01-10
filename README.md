<p align="center">
<a href="https://www.npmjs.com/package/uncolur" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/ic:round-color-lens.svg?color=%23fdb4e2" alt="logo" width='100'/></a>
</p>

<p align="center">
  A library generate color palette from a color
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/uncolur" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/uncolur" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=uncolur" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/uncolur" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/uncolur/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/uncolur/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/uncolur" alt="License" /></a>
</p>

Install:

```bash
npm i uncolur
```

Usage:

- bin

```js
npx uncolur@latest --color '#ABABAB'
```

- module:

```js
// Tailwindcss
import { getColorsTailwindcss } from 'uncolur'

const theme = getColorsTailwindcss('#ABABAB')

// Using rgb
const theme = getColorsTailwindcss('172,172,172')

// Result
{
  50: '#FBFBFB',
  100: '#F7F7F7',
  200: '#EAEAEA',
  300: '#DDDDDD',
  400: '#C4C4C4',
  500: '#ABABAB',
  600: '#9A9A9A',
  700: '#676767',
  800: '#4D4D4D',
  900: '#333333',
  950: '#333333',
}
```

```js
// Ant Design

import { getColorsAntd } from 'uncolur'

const theme = getColorsAntd('#FF0000')

const themeDark = getColorsAntd('#FF0000', { dark: true })


// Result
[
  '#fffbe6', '#fff3a3',
  '#fff27a', '#fff352',
  '#fff829', '#ffff00',
  '#d2d900', '#a7b300',
  '#7e8c00', '#586600'
]
```

## Playground
[https://uncolur.vercel.app/](https://uncolur.vercel.app/)
