// Create function to convert given string to the output below

// Input
const optionRule = '{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})';

// Output Example
/* const output = {
  and: [
    1069,
    { or: [1070, 1071, 1072] },
    1244,
    { or: [1245, 1339] },
  ]
}; */

const arr = optionRule.split(' AND ');
let t = [];
console.log('arr', arr);
if(arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(el.indexOf(' OR ') > -1) {
            // is or
            const or = el.split(' OR ');
            if(or.length > 0) {
                var g = [];
                for (let j = 0; j < or.length; j++) {
                    const e = or[j];
                    g.push(e.replace(/\D/g, ""))
                }
                t.push({or: g})
            }
        } else {
            t.push(el.replace(/\D/g, ""))
        }
    }
}

let result = t.length ? {and: t} : null

console.log('result:', result);
