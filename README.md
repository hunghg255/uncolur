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

- module
```js
import { getColors } from 'uncolur'

const theme = getColors('#ABABAB')

// Using rgb
const theme = getColors('172,172,172')
```

- Result


```js
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

## Playground
[https://uncolur.vercel.app/](https://uncolur.vercel.app/)
