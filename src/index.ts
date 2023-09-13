import { withTint, withShade, parseColor, hexValue, darkColorMap, Opts, toHsv, toHex, getHue, getSaturation, getValue, mix, lightColorCount, darkColorCount } from './utils'
import { inputToRGB } from '@ctrl/tinycolor';

export const _variants = {
  50: withTint(0.95),
  100: withTint(0.9),
  200: withTint(0.75),
  300: withTint(0.6),
  400: withTint(0.3),
  500: (c: number[]) => c,
  600: withShade(0.9),
  700: withShade(0.75),
  800: withShade(0.6),
  900: withShade(0.45),
  950: withShade(0.29),
}

export function getColorsTailwindcss(color: string, variants = _variants) {
  const colors: Record<string, string> = {};

  const components = parseColor(color)
  for (const [name, fn] of Object.entries(variants)) {
    colors[name] = hexValue(fn(components))
  }
  return colors
}

export function getColorsAntd(color: string, opts: Opts = {}): string[] {
  const patterns: string[] = [];
  const pColor = inputToRGB(color);
  for (let i = lightColorCount; i > 0; i -= 1) {
    const hsv = toHsv(pColor);
    const colorString: string = toHex(
      inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true),
      }),
    );
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (let i = 1; i <= darkColorCount; i += 1) {
    const hsv = toHsv(pColor);
    const colorString: string = toHex(
      inputToRGB({
        h: getHue(hsv, i),
        s: getSaturation(hsv, i),
        v: getValue(hsv, i),
      }),
    );
    patterns.push(colorString);
  }

   // dark theme patterns
   if (opts.theme === 'dark') {
    return darkColorMap.map(({ index, opacity }) => {
      const darkColorString: string = toHex(
        mix(
          inputToRGB(opts.backgroundColor || '#141414'),
          inputToRGB(patterns[index]),
          opacity * 100,
        ),
      );
      return darkColorString;
    });
  }

  return patterns;
}
