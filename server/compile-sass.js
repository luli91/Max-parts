const sass = require("sass");
const fs = require("fs");

const result = sass.compile("../scss/style.scss");

fs.writeFileSync("../css/style.css", result.css);
console.log("✅ Sass compilado con éxito");
