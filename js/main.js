(function() {
    var width, height;
    var ctx;
    $(document).ready(function() {
        width = $(window).width();
        height = $(window).height();
        $("#canvas-holder").append(make_canvas());
        ensure_context();
        setInterval(loop, 16);
    });


    function make_canvas() {
        return '<canvas id="canvas" width="' + width + '" height="' + height + '">';
    }

    function ensure_context() {
        var ctx = document.getElementById("canvas").getContext("2d");
    }

    function loop() {
        console.log("hi");
    }
}());
