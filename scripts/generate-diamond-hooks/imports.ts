import * as path from 'path';

export interface ImportsOptions {
  hookName: string;
  hooksDir: string;
  outDir: string;
  contractName: string;
}
export const imports = ({
  hookName,
  hooksDir,
  outDir,
  contractName,
}: ImportsOptions) => `import { ${hookName} } from '${path.relative(
  outDir,
  hooksDir
)}/${contractName}'
`;
