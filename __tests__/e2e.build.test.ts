import fs from 'fs-extra';

const dir = 'test_build';

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

  describe('Keeps html and body selectors', () => {
    test('Kept html selector', async () => {
      expect(html).toContain('#html_ok');
    });

    test(`Kept body selector`, async () => {
      expect(html).toContain('#body_ok');
    });
  });

  describe('Works with direct css imports, (import "./file.css")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#global_ok');
    });

    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#global_no');
    });
  });

  describe('Works with css, (import style from "./file.css")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#css_ok');
    });

    test('Removed unused html tag selectors', async () => {
      expect(html).not.toContain('#css_no');
    });
  });

  describe('Works with css modules, (import style from "./file.module.css")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#css_module_ok');
    });

    test('Removed unused html tag selectors', async () => {
      expect(html).not.toContain('#css_module_no');
    });
  });

  describe('Works with stylus, (import style from "./file.styl")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#stylus_ok');
    });

    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#stylus_no');
    });
  });

  describe('Works with stylus modules, (import style from "./file.module.styl")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#stylus_module_ok');
    });

    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#stylus_module_no');
    });
  });

  describe('Works with sass, (import style from "./file.sass")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#sass_ok');
    });

    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#sass_no');
    });
  });

  describe('Works with sass modules, (import style from "./file.module.sass")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#sass_module_ok');
    });

    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#sass_module_no');
    });
  });

  describe('Works with scss, (import style from "./file.scss")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#scss_ok');
    });

    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#scss_no');
    });
  });

  describe('Works with scss modules, (import style from "./file.module.scss")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#scss_module_ok');
    });

    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#scss_module_no');
    });
  });

  describe('Works with less, (import style from "./file.less")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#less_ok');
    });

    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#less_no');
    });
  });

  describe('Works with less modules, (import style from "./file.module.less")', () => {
    test('Kept class selectors', async () => {
      expect(html).toContain('#less_module_ok');
    });

    test('Removed unused class selectors', async () => {
      expect(html).not.toContain('#less_module_no');
    });
  });

  describe('Does not remove whitelisted selectors', () => {
    test('Kept direct class whitelist selector', async () => {
      expect(html).toContain('#whitelist_ok');
    });

    test('Kept whitelistPattern selectors', async () => {
      expect(html).toContain('#whitelist_regex_ok');
    });

    test('Kept single comment ignore selector', async () => {
      expect(html).toContain('#whitelist_comment_ok');
    });

    test('Kept block comment ignore selector', async () => {
      expect(html).toContain('#whitelist_commentblock_ok');
    });

    test('Kept block comment ignore selector 2', async () => {
      expect(html).toContain('#whitelist_commentblock2_ok');
    });
  });

  describe('Matches dashed selectors', () => {
    test('Kept btn-large style.btnLarge', async () => {
      expect(html).toContain('#dash_name_ok');
    });

    test(`Kept btn-medium style['btn-medium']`, async () => {
      expect(html).toContain('#dash_name2_ok');
    });

    test('Kept btn_small style.btn_small', async () => {
      expect(html).toContain('#underscore_name_ok');
    });
  });

  describe('Ignored files and folders', () => {
    test('Kept ignored file', async () => {
      expect(html).toContain('#ignored_ok');
    });

    test(`Kept ignored folder`, async () => {
      expect(html).toContain('#ignored_folder_ok');
    });
  });

  describe('Purged only the files in purgeOnly', () => {
    test('Purged folder in purgeOnly', async () => {
      expect(html).not.toContain('#purgeOnly2_no');
    });

    test('Ignored file in purgeOnly', async () => {
      expect(html).toContain('#purgeOnly2_ok');
    });

    test(`Kept folder not in purgeOnly`, async () => {
      expect(html).toContain('#purgeOnly3_ok');
    });
  });
});
