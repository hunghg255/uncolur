import { getColorsTailwindcss, getColorsAntd } from '../src/index';

const theme = getColorsTailwindcss('#FF0000');
console.log(theme);

// Using rgb
// const theme1 = getColors('172,172,172')

// console.log(theme1);
const theme1 = getColorsAntd('#FF0000', { theme: 'dark' });
console.log(theme1);
