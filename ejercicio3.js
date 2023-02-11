'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  let [hora, formato] = [s.substring(0, s.length - 2), s.substring(s.length - 2)] 
  hora = hora.split(":").map(Number)
  if (formato === "PM" && hora[0] === 12) hora[0] = 12
  if (formato === "PM" && hora[0] !== 12) hora[0] = (hora[0] + 12) % 24
  if (formato === "AM" && hora[0] === 12) hora[0] = 0
  return hora
    .map(String)
    .map(s => s.padStart(2, "0"))
    .join(":")
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
