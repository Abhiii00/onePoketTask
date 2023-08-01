const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!')
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})


// TASK 02

let arr = [1,2,3,4,5,6,7,8,9]

function sum(arr){
    let s = 0
    for(let i=0; i<arr.length; i++){
        s = s + arr[i]
    }
    return s
}

console.log(sum(arr))

// TASK 03 

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error :', err)
    return
  }

  const wordCount = data.split(/\s+/).length
  console.log('Total word count:', wordCount)
})
