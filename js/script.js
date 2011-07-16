jQuery(function ($) {
    window.slideFunctions = {
        comDebugger : function () {
            var a = 123,
                    b = 234,
                    c = 345,
                    minhaArray = [a, b];

            debugger;

            console.log(minhaArray);

            minhaArray.push(c);

            console.log(minhaArray);

            console.error('my fake error! yay');

            debugger;
        },

        semDebugger : function () {
            var a = 123,
                    b = 234,
                    c = 345,
                    minhaArray = [a, b];

            console.log(minhaArray);

            minhaArray.push(c);

            console.log(minhaArray);
        }
    };

    $('pre').addClass('prettyprint').attr('tabIndex', 0);
    prettyPrint();

    $('#presentation').fathom({
        slideTagName: 'section',
        onActivateSlide: function() {
            var $t, hasProcessed, hasBg, hasBgSz, hasYoutube, cssProps, hasScript;

            $t = $(this);
            hasProcessed = $t.data('hasProcessed');
            hasBg = $t.data('bg');
            hasBgSz = $t.data('bgsize');
            hasYoutube = $t.data('youtube');
            cssProps = {};
            hasScript = $t.data('script');

            if (hasProcessed) {
                return;
            }

            if (slideFunctions && slideFunctions[hasScript]) {
                slideFunctions[hasScript]();
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