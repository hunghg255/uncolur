import { cac } from 'unprompts';
//@ts-ignore
import { version } from '../package.json';
import { getColorsAntd, getColorsTailwindcss } from '.';

export async function startCli() {
  try {
    const cli = cac('uncolur');

    cli.version(version).option('--color <color>', 'Color').help();

    cli.command('').action(async (args) => {
      if (!args.color) {
        console.log('Please provide a color');
        process.exit(1);
      }

      console.log('Tailwindcss');
      console.log(getColorsTailwindcss(args.color));

      console.log('\nAnt Design');
      console.log(getColorsAntd(args.color));

      console.log('\nAnt Design Dark');
      console.log(getColorsAntd(args.color, { theme: 'dark' }));

      console.log(`\nDEMO: https://uncolur.vercel.app/?color=${args.color.startsWith('#') ? args.color.slice(1) : args.color}`);
    });

    cli.parse();
  } catch (error: any) {
    console.log(error.message);
  }
}
