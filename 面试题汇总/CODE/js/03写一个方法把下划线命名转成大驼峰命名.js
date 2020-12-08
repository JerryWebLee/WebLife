// function toCamel(name) {
//   var arr = name.split('_')
//   arr.forEach((item, index) => {
//     if (item === '') { arr.splice(index, 1) }
//   });
//   return arr.map((item, index) => (index === 0 ? item : item[0].toUpperCase() + item.slice(1))).join('')
// }


const toCamel = str =>
  str
    .split("_")
    .filter(s => !!s)
    .map((s, index) => (index === 0 ? s : s[0].toUpperCase() + s.slice(1)))
    .join("");
console.log(toCamel('_aaa_bbb__ccc_'));
