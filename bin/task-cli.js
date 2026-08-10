const args = process.argv.slice(2);
const command = args[0];
const commandArgs = args.slice(1);

console.log("Comando:", command);
console.log("Argumento:", commandArgs);