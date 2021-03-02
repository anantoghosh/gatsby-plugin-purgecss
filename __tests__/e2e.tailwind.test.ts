import fs from 'fs-extra';

const dir = 'test_tailwind';

describe('Verify Build', () => {
  test('node_modules exists', async () => {
    const exists = await fs.pathExists(dir + '/node_modules');
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

describe('Check purge status', () => {
  let html: string;
  beforeAll(async () => {
    html = await fs.readFile(dir + '/public/index.html', 'utf-8');
  });

  describe('Keeps selectors', () => {
    test('Kept simple selector', async () => {
      expect(html).toContain('bg-blue-500');
    });

    test('Kept hover selector', async () => {
      expect(html).toContain('.hover\\:bg-blue-700:hover');
    });
  });

  describe('Removed selectors', () => {
    test('Removed simple selector', async () => {
      expect(html).not.toContain('text-grey-darkest');
    });

    test('Removed hover selector', async () => {
      expect(html).not.toContain('.hover\\:bg-blue-600:hover');
    });
  });
});
