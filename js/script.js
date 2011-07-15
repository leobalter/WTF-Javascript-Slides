jQuery(function ($) {
    $('pre').addClass('prettyprint').attr('tabIndex', 0);
    prettyPrint();

    $('#presentation').fathom({
        slideTagName: 'section',
        onActivateSlide: function() {
            var $t = $(this);
            var hasProcessed = $t.data('hasProcessed');
            var hasBg = $t.data('bg');
            var hasBgSz = $t.data('bgsize');
            var hasYoutube = $t.data('youtube');
            var cssProps = {};

            if (hasProcessed) {
                return;
            }


            if (hasBg) {
                cssProps.backgroundImage = "url(img/" + hasBg + ")";
                cssProps.backgroundPosition = "center center";
                cssProps.backgroundRepeat = "no-repeat";
                cssProps.backgroundAttachment = "scroll";
            }

            if (hasBgSz) {
                cssProps.backgroundSize = hasBgSz;
            }

            $t.css(cssProps);

            if (hasYoutube) {
                $t.append('<iframe class="youtubeVideo" width="710" height="560" src="http://www.youtube.com/embed/' + hasYoutube + '" frameborder="0" allowfullscreen></iframe>');
            }

            $t.data('hasProcessed', true);
        },
        onDeactivateSlide: function() {
            var $t = $(this);

        }
    });
});