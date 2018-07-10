const fs = require('fs-extra');

const dir = 'test_build';

describe('Verify Build', () => {
  test('node_modules exists', async () => {
    const exists = await fs.pathExists(dir + '/node_modules');

    expect(exists).toBeTruthy();
  });

  test('plugin exists', async () => {
    const exists = await fs.pathExists(dir + '/plugins/gatsby-plugin-purgecss');

    expect(exists).toBeTruthy();
  });

  test('project has a build', async () => {
    const exists = await fs.pathExists(dir + '/public');

    expect(exists).toBeTruthy();
  });

  test('index.html was generated', async () => {
    const exists = await fs.pathExists(dir + '/public/index.html');

    expect(exists).toBeTruthy();
  });
});

describe('Check purge status', async () => {
  let html;
  beforeAll(async () => {
    html = await fs.readFile(dir + '/public/index.html', 'utf-8');
  });
  describe('Works with css files', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#index_ok1');
      expect(html).toContain('#index_ok2');
      expect(html).toContain('#index_ok3');
    });
    test('Kept html tag selectors', async () => {
      expect(html).toContain('#index_ok4');
    });
    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#index_no1');
    });
    test('Removed unused html tag selectors', async () => {
      expect(html).not.toContain('#index_no2');
    });
  });

  describe('Works with css modules', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#component_ok1');
      expect(html).toContain('#component_ok2');
      expect(html).toContain('#component_ok3');
    });
    test('Kept html tag selectors', async () => {
      expect(html).toContain('#component_ok4');
    });
    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#component_no1');
      expect(html).not.toContain('#component_no2');
    });
    test('Removed unused html tag selectors', async () => {
      expect(html).not.toContain('#component_no3');
    });
  });

  describe('Works with stylus', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#stylus_ok');

    });
    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#stylus_no');
    });
  });

  describe('Works with stylus modules', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#stylus_module_ok');

    });
    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#stylus_module_no');
    });
  });
});
