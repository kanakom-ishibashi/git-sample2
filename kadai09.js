// 1から100までの整数を値とする配列aを生成
const a = Array.from({ length: 100 }, (_, index) => index + 1);

// 3の倍数のみを抽出して新しい配列b3を作成
const b3 = a.filter(num => num % 3 === 0);

// 結果の出力
console.log(b3);

// 5の倍数のみを抽出して新しい配列b5を作成
let b5 = a.filter(num => num % 5 === 0);

// 結果の出力
console.log(b5);