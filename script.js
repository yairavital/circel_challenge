let radios = prompt("enter the radios");
radios = parseInt(radios);
let len;
if (radios % 2 === 0) {
  len = 2 * radios;
} else len = 2 * radios + 1;
let arr = [];
let str = "*".repeat(len);
arr.push(str);
let count = 1;
let starCount = len;
while (starCount >= radios) {
  count = count * 2;
  starCount = starCount - count;
  if (starCount >= radios) {
    let space = (len - starCount) / 2;
    let str1 = " ".repeat(space) + "*".repeat(starCount) + " ".repeat(space);
    arr.unshift(str1);
  }
}
arr1 = arr.slice().reverse();
arr = arr.concat(arr1);
arr.forEach((x) => console.log(x));
