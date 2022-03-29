import fullpage from 'fullpage.js';
import $ from "jquery";

export const fullPage = () => {
    $(document).ready(function() {
        $('#fullpage').fullpage({	autoScrolling:true,
            scrollHorizontally: true});
    });

    const hintBtn = document.querySelectorAll('.hint');

    for (let i = 0; i < hintBtn.length; i++) {
        hintBtn[i].addEventListener('click', () => {
            $.fn.fullpage.moveSectionDown();
        });
    }
}