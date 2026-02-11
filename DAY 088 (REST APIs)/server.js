/*
server ko start karna
*/

const app = require("./src/app")/*app.js se import kar liya */

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})