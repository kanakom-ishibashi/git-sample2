// 関数名「calculateTriangleArea」を使った場合
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

// 三角形の底辺と高さを指定して面積を計算する例
const base = 5;
const height = 8;
const area = calculateTriangleArea(base, height);
console.log('三角形の面積:', area);


// 関数名なし（無名関数）を使った場合
const calculateArea = function(base, height) {
    return 0.5 * base * height;
};

// 三角形の底辺と高さを指定して面積を計算する例
const base = 5;
const height = 8;
const area = calculateArea(base, height);
console.log('三角形の面積:', area);