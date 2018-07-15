import { onCreateWebpackConfig } from '../src/gatsby-node'
import configData from '../testData'

describe(`gatsby-plugin-pugrecss`, () => {
  const actions = {
    setWebpackConfig: jest.fn(),
    replaceWebpackConfig: jest.fn()
  };

  const getConfig = jest.fn().mockReturnValue(configData)

  beforeEach(() => {
    actions.setWebpackConfig.mockReset();
  });

  let stage = ['build-javascript', 'build-html'];
  const options = {
    plugins: []
  }

  it(`build-javascript: Should match snapshot`, () => {
    onCreateWebpackConfig({ actions, stage:stage[0], getConfig }, options);
    expect(actions.replaceWebpackConfig).toMatchSnapshot();
    expect(actions.setWebpackConfig).toMatchSnapshot();
  });

  it(`build-html: Should match snapshot`, () => {
    onCreateWebpackConfig({ actions, stage:stage[1], getConfig }, options);
    expect(actions.replaceWebpackConfig).toMatchSnapshot();
    expect(actions.setWebpackConfig).toMatchSnapshot();
  });
});
