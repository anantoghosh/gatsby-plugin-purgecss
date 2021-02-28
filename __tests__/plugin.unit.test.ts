import { onCreateWebpackConfig } from '../src/gatsby-node';
import configData from '../testData';
import type { CreateWebpackConfigArgs } from 'gatsby';

jest.mock('fs-extra');

jest.mock(`../src/paths`, () => ({
  src: 'src/**/!(*.d).{ts,js,jsx,tsx}',
  loader: 'path/loader.js',
}));

describe(`gatsby-plugin-purgecss`, () => {
  const actions = ({
    setWebpackConfig: jest.fn(),
    replaceWebpackConfig: jest.fn(),
  } as unknown) as CreateWebpackConfigArgs;

  const getConfig = jest.fn().mockReturnValue(configData);

  const stage: CreateWebpackConfigArgs['stage'][] = [
    'build-javascript',
    'build-html',
    'develop-html',
    'develop',
  ];
  const options = [
    {
      plugins: [],
    },
    {
      plugins: [],
      debug: true,
      summary: true,
      printRejected: true,
      develop: true,
      tailwind: true,
      purgeCSSOptions: {
        safelist: ['whitelist'],
      },
    },
    {
      plugins: [],
      purgeCSSOptions: {
        safelist: {
          standard: ['whitelist'],
          greedy: ['greedy'],
        },
      },
    },
  ];

  options.forEach((options, index) => {
    it(`build-javascript: Should match snapshot ${index}`, () => {
      // @ts-expect-error action is only partially mocked
      onCreateWebpackConfig({ actions, stage: stage[0], getConfig }, options);
      expect(actions.replaceWebpackConfig).toMatchSnapshot();
      expect(actions.setWebpackConfig).toMatchSnapshot();
    });

    it(`build-html: Should match snapshot ${index}`, () => {
      // @ts-expect-error action is only partially mocked
      onCreateWebpackConfig({ actions, stage: stage[1], getConfig }, options);
      expect(actions.replaceWebpackConfig).toMatchSnapshot();
      expect(actions.setWebpackConfig).toMatchSnapshot();
    });

    it(`develop-html: Should match snapshot ${index}`, () => {
      // @ts-expect-error action is only partially mocked
      onCreateWebpackConfig({ actions, stage: stage[2], getConfig }, options);
      expect(actions.replaceWebpackConfig).toMatchSnapshot();
      expect(actions.setWebpackConfig).toMatchSnapshot();
    });

    it(`develop: Should match snapshot ${index}`, () => {
      // @ts-expect-error action is only partially mocked
      onCreateWebpackConfig({ actions, stage: stage[3], getConfig }, options);
      expect(actions.replaceWebpackConfig).toMatchSnapshot();
      expect(actions.setWebpackConfig).toMatchSnapshot();
    });
  });
});
