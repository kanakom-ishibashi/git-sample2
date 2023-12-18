let fruits = {apple:'りんご', strawberry:'いちご', grape:'ぶどう', lemon:'レモン'};

console.log(fruits['grape']);　

let keys = Object.keys(fruits);  // キーの一覧を配列として取得

console.log(fruits);


for (key in fruits) {
    console.log(fruits [key]);
}