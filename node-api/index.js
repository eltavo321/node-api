const express = require("express");

const app = express();

app.listen( 3000,'0.0.0.0', () => {
  console.log(`API de Mariana Olivas corriendo en puerto 3000`);
});
