function checkHeight(height) {
  return height ?? "Height is not defined";
}

let height = undefined;
let result = checkHeight(height);

console.log(`Result ${result}`);
