// JavaScript Document

// 商品クラス Item
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} - ￥${this.price}`;
  }
}

// 椅子クラス Chair（Item クラスを継承）
class Chair extends Item {
  constructor(name, price, isSecondHand) {
    super(name, price);
    this.isSecondHand = isSecondHand;
  }

  getChairInfo() {
    const condition = this.isSecondHand ? '中古' : '新品';
    return `${this.name} - ￥${this.price} (${condition})`;
  }
}

// 使用例
const newChair = new Chair('モダンチェア', 5000, false); // 新品の椅子
const usedChair = new Chair('アンティークチェア', 3000, true); // 中古の椅子

console.log(newChair.getChairInfo()); // モダンチェア - ￥5000 (新品)
console.log(usedChair.getChairInfo()); // アンティークチェア - ￥3000 (中古)