const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));


alert(a);
alert(b);
alert(c);

function solveQuadraticEq(a, b, c) {
    const d = calcDiskr(a, b, c);
    if (d > 0) {
      const x1 = (-b + Math.sqrt(d)) / 2 * a;
      const x2 = (-b - Math.sqrt(d)) / 2 * a;
      return result = 'x1 ' + x1 + ' x2 ' + x2;
    } else if (d === 0) {
        const x = -b / 2 * a;
        return 'x = ' + x;
    }
    return 'No roots!';
  }

const result = solveQuadraticEq(a, b, c);
alert(result);


function calcDiskr(a, b, c) {
    const d = b * b - 4 * a * c;
    return d;
}