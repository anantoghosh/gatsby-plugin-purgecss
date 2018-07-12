const { spawn } = require('child_process');

const child = spawn('release-it', {
  shell: true
});

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
  process.stdout.write(data.toString());
});

child.stderr.on('data', (data) => {
  process.stdout.write(data.toString());
});

child.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});