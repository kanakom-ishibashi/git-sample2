// りんご
let apple = {
  名前: 'りんご',
  色: '赤',
  味: '甘酸っぱい',
  重さ: 150
};

// みかん
let orange = {
  名前: 'みかん',
  色: 'オレンジ',
  味: '甘い',
  重さ: 100
};

// ぶどう
let grape = {
  名前: 'ぶどう',
  色: '紫',
  味: '甘い',
  重さ: 200
};

// 果物の配列
let fruits = [apple, orange, grape];

// 総重量を計算するための変数
let totalWeight = 0;

// 果物の総重量を計算
for (let i = 0; i < fruits.length; i++) {
  totalWeight += fruits[i].重さ;
}

// 結果を出力
console.log('総重量は ' + totalWeight + ' グラムです。');