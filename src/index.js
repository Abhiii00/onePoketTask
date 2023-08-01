const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!')
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on Port : ${port}`)
})


// TASK 02 ------------------------------------------------------------------------------

const arr = [1,2,3,4,5,6,7,8,9];

function totalSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const result = totalSum(arr);
console.log('Total Sum of Arr:', result);

// TASK 03 --------------------------------------------------------------------------------

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error :', err)
    return
  }

  const wordCount = data.split(/\s+/).length
  console.log('Total word count:', wordCount)
})
