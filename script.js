const TopButton = document.querySelector('.page-top');

function ScrollTop() {
    window.scrollTo({
        top: 0,
        // ↓補足："auto"だと、瞬時に移動する
        behavior: "smooth"

    })
};

TopButton.onclick = ScrollTop;