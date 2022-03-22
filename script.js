const TopButton = document.querySelector('.page-top');
const TopButton2 = document.querySelector('.page-top-2');

// jqueryなしver。Topボタン１Safari反応なし
function ScrollTop1() {
    window.scrollTo({
        top: 0,
        // ↓補足："auto"だと、瞬時に移動する
        behavior: "smooth"

    })
};

TopButton.onclick = ScrollTop1;


//jquery使用。Topボタン２ Safari対応
TopButton2.addEventListener('click', () => {
    console.log('test');
    $("body,html").animate({
        scrollTop: 0

        // 0.5秒かけてスクロール
    }, 500);

})
