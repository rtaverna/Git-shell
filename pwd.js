function pwd(cmd) {
  process.stdout.write(module.filename);
  process.stdout.write("\nprompt > ");
}

module.exports = { pwd };

// module.exports = process.stdin.on("data", data => {
//   const cmd = data.toString().trim();
//   if (cmd === "pwd") {
//     process.stdout.write(module.filename);
//     process.stdout.write("prompt > ");
//   }

//   //
// });
