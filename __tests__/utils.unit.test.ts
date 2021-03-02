import { findLoader, insertLoader, normalizePath } from '../src/utils';

const otherLoadersRegex = /stylus-loader|sass-loader|less-loader/;

const useConfig1 = [
  'MiniCssExtractPlugin',
  {
    loader: 'css-loader'
  },
  {
    loader: 'postcss-loader'
  },
  {
    loader: 'stylus-loader'
  }
];

const useConfig1Matcher = [
  'MiniCssExtractPlugin',
  {
    loader: 'css-loader'
  },
  {
    loader: 'postcss-loader'
  },
  {
    loader: 'added'
  },
  {
    loader: 'stylus-loader'
  }
];

const useConfig2 = [
  'MiniCssExtractPlugin',
  {
    loader: 'css-loader'
  },
  {
    loader: 'postcss-loader'
  },
  {}
];

const useConfig3 = [
  'MiniCssExtractPlugin',
  {
    loader: 'css-loader'
  },
  {
    loader: 'd:/longpathto/sass-loader/index'
  }
];

const useConfig3Matcher = [
  'MiniCssExtractPlugin',
  {
    loader: 'css-loader'
  },
  {
    loader: 'added'
  },
  {
    loader: 'd:/longpathto/sass-loader/index'
  }
];

describe('Utils Tests', () => {
  describe('findLoader', () => {
    it('Should find stylus loader at correct index', () => {
      const index = findLoader(useConfig1, otherLoadersRegex);
      expect(index).toBe(3);
    });

    it('Should not find any loaders', () => {
      const index = findLoader(useConfig2, otherLoadersRegex);
      expect(index).toBe(undefined);
    });

    it('Should find sass loader in path', () => {
      const index = findLoader(useConfig3, otherLoadersRegex);
      expect(index).toBe(2);
    });
  });

  describe('insertLoader', () => {
    it('Should insert loader at correct index', () => {
      insertLoader(useConfig1, 3, { loader: 'added' });
      expect(useConfig1).toMatchObject(useConfig1Matcher);
    });

    it('Should insert loader at correct index', () => {
      insertLoader(useConfig3, 2, { loader: 'added' });
      expect(useConfig3).toMatchObject(useConfig3Matcher);
    });

    it('Should not do anything if index null', () => {
      insertLoader(useConfig2, undefined, { loader: 'added' });
      expect(useConfig2).toMatchObject(useConfig2);
    });
  });

  describe('normalizePath', () => {
    if (process.platform === 'win32') {
      it('Should turn windows path seperator to forward slashes', () => {
        const p = normalizePath(
          'D:\\develop\\project\\src\\style.css',
          'D:\\develop\\project\\'
        );
        expect(p).toBe('src/style.css');
      });
    } else {
      it('Should return relative path', () => {
        const p = normalizePath(
          '/home/user/project/src/style.css',
          '/home/user/project/'
        );
        expect(p).toBe('src/style.css');
      });
    }
  });
});
