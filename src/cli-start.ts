import { cac } from 'unprompts';
//@ts-ignore
import { version } from '../package.json';
import { getColors } from '.';

export async function startCli() {
  try {
    const cli = cac('uncolur');

    cli.version(version).option('--color <color>', 'Color').help();

    cli.command('').action(async (args) => {
      if (!args.color) {
        console.log('Please provide a color');
        process.exit(1);
      }

      console.log(getColors(args.color));
      console.log(`DEMO: https://uncolur.vercel.app/?color=${args.color.startsWith('#') ? args.color.slice(1) : args.color}`);
    });

    cli.parse();
  } catch (error: any) {
    console.log(error.message);
  }
}
