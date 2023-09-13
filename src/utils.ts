import { rgbToHex, rgbToHsv } from "@ctrl/tinycolor"

export function parseColor (color = '') {
  if (typeof color !== 'string') {
    throw new TypeError('Color should be string!')
  }

  const hexMatch = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
  if (hexMatch) {
    return hexMatch.splice(1).map(c => parseInt(c, 16))
  }

  const hexMatchShort = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(color)
  if (hexMatchShort) {
    return hexMatchShort.splice(1).map(c => parseInt(c + c, 16))
  }

  if (color.includes(',')) {
    return color.split(',').map(p => parseInt(p))
  }

  throw new Error('Invalid color format! Use #ABC or #AABBCC or r,g,b')
}

export function hexValue (components: number[]) {
  return '#' + components.map((c: number) => `0${c.toString(16).toUpperCase()}`.slice(-2)).join('')
}

export function tint (components: number[], intensity: number) {
  return components.map((c: number) => Math.round(c + (255 - c) * intensity))
}

export function shade (components: number[], intensity: any) {
  return components.map((c: number) => Math.round(c * intensity))
}

export const withTint = (intensity: number) => (hex: number[]) => tint(hex, intensity)

export const withShade = (intensity: number) => (hex: number[]) => shade(hex, intensity)

const hueStep = 2;
const saturationStep = 0.16;
const saturationStep2 = 0.05;
const brightnessStep1 = 0.05;
const brightnessStep2 = 0.15;
export const lightColorCount = 5;
export const darkColorCount = 4;

export const darkColorMap = [
  { index: 7, opacity: 0.15 },
  { index: 6, opacity: 0.25 },
  { index: 5, opacity: 0.3 },
  { index: 5, opacity: 0.45 },
  { index: 5, opacity: 0.65 },
  { index: 5, opacity: 0.85 },
  { index: 4, opacity: 0.9 },
  { index: 3, opacity: 0.95 },
  { index: 2, opacity: 0.97 },
  { index: 1, opacity: 0.98 },
];

interface HsvObject {
  h: number;
  s: number;
  v: number;
}

interface RgbObject {
  r: number;
  g: number;
  b: number;
}

// Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`
export function toHsv({ r, g, b }: RgbObject): HsvObject {
  const hsv = rgbToHsv(r, g, b);
  return { h: hsv.h * 360, s: hsv.s, v: hsv.v };
}

// Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`
export function toHex({ r, g, b }: RgbObject): string {
  return `#${rgbToHex(r, g, b, false)}`;
}

// Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.
export function mix(rgb1: RgbObject, rgb2: RgbObject, amount: number): RgbObject {
  const p = amount / 100;
  const rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
  };
  return rgb;
}

export function getHue(hsv: HsvObject, i: number, light?: boolean): number {
  let hue: number;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}

export function getSaturation(hsv: HsvObject, i: number, light?: boolean): number {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  let saturation: number;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}

export function getValue(hsv: HsvObject, i: number, light?: boolean): number {
  let value: number;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}

export interface Opts {
  theme?: 'dark' | 'default';
  backgroundColor?: string;
}
