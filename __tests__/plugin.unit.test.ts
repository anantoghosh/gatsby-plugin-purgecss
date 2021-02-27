import { onCreateWebpackConfig } from '../src/gatsby-node';
import configData from '../testData';

jest.mock('fs-extra');

jest.mock(`../src/paths`, () => ({
  src: 'src/**/!(*.d).{ts,js,jsx,tsx}',
  loader: 'path/loader.js'
}));

describe(`gatsby-plugin-purgecss`, () => {
  const actions = {
    setWebpackConfig: jest.fn(),
    replaceWebpackConfig: jest.fn()
  };

  const getConfig = jest.fn().mockReturnValue(configData);

  beforeEach(() => {
    actions.setWebpackConfig.mockReset();
  });

  let stage = ['build-javascript', 'build-html', 'develop-html', 'develop'];
  const options = [
    {
      plugins: []
    },
    {
      plugins: [],
      rejected: false
    },
    {
      plugins: [],
      debug: true
    },
    {
      plugins: [],
      develop: true
    },
    {
      plugins: [],
      tailwind: true
    },
    {
      plugins: [],
      whitelist: ['.html']
    }
  ];

  options.forEach((options, index) => {
    it(`build-javascript: Should match snapshot ${index}`, () => {
      onCreateWebpackConfig({ actions, stage: stage[0], getConfig }, options);
      expect(actions.replaceWebpackConfig).toMatchSnapshot();
      expect(actions.setWebpackConfig).toMatchSnapshot();
    });

    it(`build-html: Should match snapshot ${index}`, () => {
      onCreateWebpackConfig({ actions, stage: stage[1], getConfig }, options);
      expect(actions.replaceWebpackConfig).toMatchSnapshot();
      expect(actions.setWebpackConfig).toMatchSnapshot();
    });

    it(`develop-html: Should match snapshot ${index}`, () => {
      onCreateWebpackConfig({ actions, stage: stage[2], getConfig }, options);
      expect(actions.replaceWebpackConfig).toMatchSnapshot();
      expect(actions.setWebpackConfig).toMatchSnapshot();
    });

    it(`develop: Should match snapshot ${index}`, () => {
      onCreateWebpackConfig({ actions, stage: stage[3], getConfig }, options);
      expect(actions.replaceWebpackConfig).toMatchSnapshot();
      expect(actions.setWebpackConfig).toMatchSnapshot();
    });
  });
});
