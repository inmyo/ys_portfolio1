$('ul li a').click(function(){
    var imgSrc= $(this).children().attr('src');
    // var←変数を宣言する時の省略型。
    // clickしたa要素のchildrenのimgに
    // imgSrcという変数名を与える。
    $('.bigimg').children().attr('src',imgSrc);
    //img src←をimgSrcに置き換える。
    $('.modal').fadeIn();
    // modalを表示する。show←一瞬で表示する。
    // fadeIn←ゆっくり表示する。
    $('body,html').css('overflow-y','hidden');
    // css以降はcssプロパティ cssではoverflow-y:hidden;と書く。
    // overflow-y←縦　xが横yが縦。
    // hidden←BOXの外側の要素を隠す。
    return false
    // aタグの遷移を無効にする。
});

$('.close_btn').click(function(){
    $('.modal').fadeOut();
    $('body,html').css('overflow-y','visible');
    // y縦スクロールを有効にする。
    return false
});
