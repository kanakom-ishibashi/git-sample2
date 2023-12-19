// 1. <div id="p1"></div>をinputタグに変更する（inputタグの属性は自由）
let p1Element = document.getElementById('p1');
let inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text'); // inputタグの属性はここで設定可能

// p1Elementを置き換える
if (p1Element) {
  p1Element.parentNode.replaceChild(inputElement, p1Element);
}

// 2. <div id="p2"></div>に「テキスト文字列」というテキスト文字列を埋め込む
let p2Element = document.getElementById('p2');
if (p2Element) {
  p2Element.innerText = 'テキスト文字列';
}

// 3. <div id="p3"></div>のid属性の値を”p5”に変更する
let p3Element = document.getElementById('p3');
if (p3Element) {
  p3Element.setAttribute('id', 'p5');
}

// 4. INPUTタグで文字入力が終わった時に文字列をspanタグで表示する
inputElement.addEventListener('blur', function(event) {
  let enteredText = event.target.value;

  // spanタグを作成し、入力されたテキストを表示
  let spanElement = document.createElement('span');
  spanElement.textContent = enteredText;

  // 入力フィールドの後ろにspan要素を追加
  event.target.insertAdjacentElement('afterend', spanElement);
});