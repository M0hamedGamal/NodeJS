/* To use NPM package make these steps
    1. Make sure you are into the project folder
    2. Open terminal
    3. Type --> npm init -y               // -y --> yes uses the default
    4. Type --> npm install             
    5. type --> npm i chalk@2.4.1       // chalk@version    This is color & style package 
*/
const color = require('chalk') // Import library of chalk

console.log(color.blue('Hey'))   // use the properties of chalk