# uncolur

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
