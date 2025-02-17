import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import noRelativeImportPathsPlugin from 'eslint-plugin-no-relative-import-paths';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx,js,jsx}', 'server.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        React: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      /* eslint-plugin-import 경로 설정 옵션 */
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      'unused-imports': unusedImportsPlugin,
      'no-relative-import-paths': noRelativeImportPathsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      /* JSX 안에서 HTML 엔티티(escape sequence)를 사용하면 에러 */
      'react/no-unescaped-entities': [
        'error',
        {
          forbid: [
            {
              char: '>',
              alternatives: ['&gt;'],
            },
            {
              char: '}',
              alternatives: ['&#125;'],
            },
          ],
        },
      ],
      /* JSX 안에서 {''} 이런식으로 사용하면 에러 */
      'react/jsx-curly-brace-presence': 'error',
      /* PropTypes 검사 비활성화 (TypeScript 사용 시 불필요) */
      'react/prop-types': 'off',
      /* JSX 사용 시 React import 구문 강제 비활성화 */
      'react/react-in-jsx-scope': 'off',
      /* 무의미한 Fragment 를 막는 규칙 <>{foo}</> 이건 가능 */
      'react/jsx-no-useless-fragment': ['off', { allowExpressions: true }],
      /* JSX 컴포넌트 이름을 PascalCase로 강제 */
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: false,
          allowNamespace: true,
          allowLeadingUnderscore: false,
        },
      ],
      /* JSX props 불필요한 스페이싱을 막는 규칙 */
      'react/jsx-props-no-multi-spaces': 'error',
      /* jsx를 사용했는데 확장자가 .jsx가 아니면 에러를 내는 규칙 */
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
      /* 셀프 클로징 가능한 상태일 때 셀프 클로징을 강제하는 규칙 */
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      /* JSX Props 정렬하는 규칙 */
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: true,
          multiline: 'last',
          reservedFirst: ['key'],
        },
      ],
      /* 미사용 변수 규칙 (특정 패턴 무시) */
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          args: 'after-used',
          caughtErrorsIgnorePattern: '^ignore',
          ignoreRestSiblings: true,
        },
      ],
      /* 정의되지 않은 변수 사용 방지 */
      'no-undef': 'error',
      /* 객체 속성 접근 시 점 표기법 강제 (obj['prop'] -> obj.prop) */
      'dot-notation': 'error',
      /* 한 줄 최대 길이 제한 (주석, 문자열 제외) */
      'max-len': ['error', { code: 120, ignoreComments: true, ignoreStrings: true }],
      /* dependencies인 모듈이 devDependencies에 있는 경우 에러 발생시키는 규칙 */
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      /* import 시에 파일의 확장자를 쓰지 않도록 강제하는 규칙 */
      'import/extensions': ['error', { json: 'always' }],
      'import/no-unresolved': 'error',
      /* 안 쓰는 import 에러 처리 */
      'unused-imports/no-unused-imports': 'error',
      /* import 구문 중괄호 사이의 member 모듈 알파벳 순으로 정렬하는 규칙 */
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
      /* 미사용 변수 규칙 (특정 패턴 무시) */
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      /* import 순서 및 그룹화 규칙 */
      'import/order': [
        'error',
        {
          warnOnUnassignedImports: true,
          pathGroupsExcludedImportTypes: ['type'],
          groups: [
            /* 내장 모듈 */
            'builtin',
            /* npm을 통해 설치된 외부 모듈 */
            'external',
            /* 프로젝트 내부에서 설정한 경로 별칭을 사용하는 모듈 */
            'internal',
            /* 상위 디렉토리에 있는 모듈 */
            'parent',
            /* 같은 디렉토리에 있는 모듈 */
            'sibling',
            /* 같은 디렉토리의 index 파일 */
            'index',
            /* 타입 모듈 */
            'type',
          ],
          pathGroups: [
            {
              pattern: 'next',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@tanstack/*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{react*,*/react}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'lodash-es',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '**/*.+(css|sass|less|scss|style|svg)',
              patternOptions: { dot: true, nocomment: true },
              group: 'unknown',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'never',
        },
      ],
      /* 상대 경로 import 제한 (같은 폴더 제외) */
      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        { allowSameFolder: true, rootDir: 'src/', prefix: '@/' },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    settings: {
      /* eslint-plugin-import 경로 설정 옵션 */
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      /* TypeScript 관련 규칙 */
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
];
