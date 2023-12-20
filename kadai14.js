var a = [1, 2, 3];

try {
    var i; // iを未定義にしたくないので、ここでiを定義する
    console.log(a[i]);
} catch (error) {
    console.error("エラーが発生しました:", error);
}