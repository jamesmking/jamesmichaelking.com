const fs = require('fs')
const sass = require('sass');
const inputFile = "./src/app.scss";
const outputFile = "./dist/css/app.css";

const compileCSS = () => {
    try {
        let result = sass.compile(
            inputFile,
            {
                loadPaths: ["./node_modules/sass-mq"],
                style: "compressed"
            }
        );
        fs.writeFileSync(outputFile, result.css)
    } catch (err) {
        console.error(err.message)
        console.error(err.stack)
    }
}

compileCSS()