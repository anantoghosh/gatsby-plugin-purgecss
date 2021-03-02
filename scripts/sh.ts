import execa = require('execa');
const stdio = 'inherit';

/**  Outputs to stdio */
export = function sh(command: string, title?: string) {
  if (title) console.log(`🚀 ${title}`);
  return execa.command(command, {
    stdio,
  });
}
