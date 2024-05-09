import type { Options } from 'tsup';

export const tsup: Options = {
    splitting: true,
    clean: true,
    dts: true,
    format: ['cjs', 'esm'],
    minify: true,
    bundle: true,
    skipNodeModulesBundle: true,
    entryPoints: ['index.ts'],
    target: 'es2020',
    outDir: 'dist',
    entry: ['index.ts','src/*.ts', 'itest/**/*.ts', '/spec/**/*.ts']
}