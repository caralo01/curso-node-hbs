const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("HOla mundo\n");
//     res.end();
//   })
//   .listen(8080);

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     const person = {
//       id: 1,
//       name: "Carlos",
//     };
//     res.write(JSON.stringify(person));
//     res.end();
//   })
//   .listen(8080);

http
  .createServer((req, res) => {
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });
    res.write("id, nombre\n");
    res.write("1, Carlos\n");
    res.write("2, Maria\n");
    res.write("3, Irene\n");
    res.write("4, Juan\n");
    res.end();
  })
  .listen(8080);

console.log("ESCUCHANDO EL PUERTO", 8080);
