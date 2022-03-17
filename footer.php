<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package rostelecom
 */

?>
    <div class="copyright">Copyright 2022</div>
</main>
<div class='video-modal hidden'>
    <button class='video-modal__close'>&times;</button>
    <video src="./files/video.mp4" controls="" width="100%"></video>
</div>
<div class='video-modal__overlay hidden'></div>

<script src="http://hostingfortest.site/rostelecom/wp-content/themes/rostelecom/js/app.min.js"></script>
<?php wp_footer(); ?>

</body>
</html>
