import { expect,  test } from "vitest";
import { getColorsTailwindcss } from '../src/index'
import { parseColor } from '../src/utils'

const fixture = {
  hex: '#ABABAB',
  rgb: ' 171, 171,171 ',
  theme: {
    50: '#FBFBFB',
    100: '#F7F7F7',
    200: '#EAEAEA',
    300: '#DDDDDD',
    400: '#C4C4C4',
    500: '#ABABAB',
    600: '#9A9A9A',
    "700": "#808080",
    "800": "#676767",
    "900": "#4D4D4D",
    "950": "#323232",
  }
}

test('getColorsTailwindcss (hex)', () => {
  expect(getColorsTailwindcss(fixture.hex)).toMatchObject(fixture.theme)
})

test('getColorsTailwindcss (rgb)', () => {
  expect(getColorsTailwindcss(fixture.rgb)).toMatchObject(fixture.theme)
})

test('getColorsTailwindcss (invalid)', () => {
  expect(() => getColorsTailwindcss('red')).toThrowError(/Invalid color format!/)
})

test('getColorsTailwindcss (invalid obj)', () => {
  expect(() => getColorsTailwindcss({})).toThrowError(/Color should be string!/)
})

test('parseColor (shorthand)', () => {
  expect(parseColor('#09C')).toEqual(parseColor('#0099cc'))
})
