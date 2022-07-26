
/*
import vue from 'rollup-plugin-vue'
import ts from 'rollup-plugin-typescript2'

export default {
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
        typescript(), vue(), peerDepsExternal()
    ]
  }
  input: 'src/index.ts',
  output: {
    format: 'esm',
    file: 'dist/MyComponent.js'
  },
  external: ['vue'],
  plugins: [
    typescript({
      tsconfig: false,
      experimentalDecorators: true,
      module: 'es2015'
    }),
    vue({ template: { optimizeSSR: true } })
  ]
}

export default [
    // ESM build to be used with webpack/rollup.
    {
      input: 'src/index.ts',
      output: {
        format: 'esm',
        file: 'dist/library.esm.js'
      },
      plugins: [
        vue(),
        ts({
          tsconfig: false,
          experimentalDecorators: true,
          module: 'es2015'
        }),
      ]
    },
    // SSR build.
    {
      input: 'src/index.ts',
      output: {
        format: 'cjs',
        file: 'dist/library.ssr.js'
      },
      plugins: [
        vue({ template: { optimizeSSR: true } }),
        ts({
          tsconfig: false,
          experimentalDecorators: true,
          module: 'es2015'
        }),
      ]
    },
    // Browser build.
    {
      input: 'src/wrapper.ts',
      output: {
        format: 'iife',
        file: 'dist/library.js'
      },
      plugins: [
        vue(),
        ts({
          tsconfig: false,
          experimentalDecorators: true,
          module: 'es2015'
        }),
      ]
    }
  ]


  import alias from '@rollup/plugin-alias';
  import typescript from 'rollup-plugin-typescript2'    
  
  
export default {
    plugins: [    
        typescript({         
            check: false // disable typechecks if necessary    
        
    }),    
    vue({ css: true, compileTemplate: true }),    
    alias({ entries: [{ find:/^@\/(.+)/, replacement: './$1' }] }),    
    commonjs(),    
    autoExternal(),    
    buble({ objectAssign: 'Object.assign' }),   
     terser(),]
}
*/


import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs';
import ts from 'rollup-plugin-typescript2'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      file: 'dist/library.esm.js'
    },
    plugins: [
      vue(),
      ts(),
      commonjs(),
    ]
  },
  // SSR build.
  {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
      file: 'dist/library.ssr.js'
    },
    plugins: [
      vue({ template: { optimizeSSR: true } }),
      ts(),
      commonjs(),
    ]
  },
  // Browser build.
  {
    input: 'src/wrapper.ts',
    output: {
      format: 'iife',
      file: 'dist/library.js'
    },
    plugins: [
      vue(),
      ts(),
      commonjs(),
    ]
    // external:['@vue']
  }
]