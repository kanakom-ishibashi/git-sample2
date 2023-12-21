const apiKey = 'DEMO_KEY';

$(function () {
  $('#update').click(function (event) {
    let param = {
      date: $('#image-date').val(),
      api_key: apiKey
    };
    console.log(param);

    $.ajax({
      type: 'GET',
      data: param,
      url: 'https://api.nasa.gov/planetary/apod',
      dataType: 'json',
    })
    .done(function (res) {
      console.log(res); // レスポンス全体をログに出力して確認

      $('#apod-image').attr('src', res.url);
      $('#apod-title').html(res.title);
      $('#apod-desc').html(res.explanation);

      // 新しく追加する部分
      $('#apod-copyright').html(`Copyright: ${res.copyright}`);
      $('#apod-date').html(`Date: ${res.date}`);
    })
    .fail(function (res) {
      $('#apod').html('対象外の日付を入力したか通信エラーです<br>ブラウザをリロードしてください');
    });
  });
});