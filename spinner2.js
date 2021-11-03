let delay = 0;

let array = ['|', '/ ','-', '\\', '-', '|\n']
for (const elem of array) {
  setTimeout(() => {
    process.stdout.write(`\r${elem}   `);
  }, 100 + delay);
  delay = delay + 200;
}
