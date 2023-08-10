import * as fs from 'fs';
import * as path from 'path';
import { imports } from './imports';

export async function generate() {
  if (!process.env.USEDAPP_DIAMONDS_JSON)
    throw new Error('Missing USEDAPP_DIAMONDS_JSON');
  if (!process.env.USEDAPP_GENERATED_HOOKS_DIR)
    throw new Error('Missing USEDAPP_GENERATED_HOOKS_DIR');
  if (!process.env.USEDAPP_OUT_DIR) throw new Error('Missing USEDAPP_OUT_DIR');

  const hooksDir = path.join(
    process.cwd(),
    process.env.USEDAPP_GENERATED_HOOKS_DIR
  );
  const outDir = path.join(process.cwd(), process.env.USEDAPP_OUT_DIR);
  const jsonDir = path.join(process.cwd(), process.env.USEDAPP_DIAMONDS_JSON);

  const diamonds = require(jsonDir).diamonds;

  for (const diamond of diamonds) {
    //create the folder if it doesn't exist
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir);
    }

    let output = '';

    // get the existing hooks files
    const existingHooks = fs.readdirSync(hooksDir);

    // match them to the diamond facets
    const matchedHooks = existingHooks.filter((hookName) => {
      const contractName = hookName.split('.')[0];
      return diamond.facets.includes(contractName);
    });

    // add import statements
    for (const matched of matchedHooks) {
      const contractName = matched.split('.')[0];
      // get the hook name from the file name -- add 'use' to the front
      const hookName = `use${contractName}`;

      // write the import statements to output
      output += imports({ hookName, hooksDir, outDir, contractName });
    }
    output += `
export const use${diamond.name} = {`;
    for (const matched of matchedHooks) {
      const contractName = matched.split('.')[0];
      const hookName = `use${contractName}`;
      output += `
  ...${hookName},`;
    }
    output += `
}`;

    console.log('output', output);

    // write the output to the file
    const filename = `${outDir}/${diamond.name}.ts`;
    fs.writeFileSync(filename, output);
  }
}
