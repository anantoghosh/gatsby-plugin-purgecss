import path from 'path';

export default {
  src: path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}'),
  loader: path.join(__dirname, 'loader.js')
};
