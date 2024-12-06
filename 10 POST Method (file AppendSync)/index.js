
// Please do not change the prewritten code
//Append request body to "data.txt": Read the request body and add it to the end of the "data.txt" file.
import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if(req.method === 'POST'){
    let body=''; 
    req.on('data',(chunk)=>{
      body+= chunk;
    });
    // End here signifies that the entire body of the request has been received, allowing you to process the complete data
    req.on('end',()=>{
      fs.appendFileSync('data.txt', body + '\n'); // use 'body' instead of 'requestBody'
      const fileContent = fs.readFileSync('data.txt', 'utf8');
      console.log(fileContent);
      res.end('Request received and data appended!');
    })
  }else{
    res.end('Invalid Req');
  }
});
export default server;
