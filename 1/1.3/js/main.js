const a = 5;
const b = 8;
const c = 2;

//alert("Мин - " + Math.min(a, b, c) + " Макс - " + Math.max(a, b, c));

//alert((((a > b) && (b > c)) ? "Макс - a," : ((b > a) && (b > c)) ? "Макс - b," : ((c > a) && (c > b)) ? "Макс - с," : 1) + (((a < b) && (b < c)) ? " Мин - a" : ((b < a) && (b < c)) ? " Мин - b" : " Мин - с"))

alert(((a > b) && (b > c)) ? "Макс - a, Мин - c" : ((a > c) && (c > b)) ? "Макс - a, Мин - b" : ((b > a) && (a > c)) ? "Макс - b, Мин - c" : ((b > c) && (c > a)) ? "Макс - b, Мин - a" : ((c > a) && (a > b)) ? "Макс - c, Мин - b" : ((c > b) && (b > a)) ? "Макс - c, Мин - a" : 1)