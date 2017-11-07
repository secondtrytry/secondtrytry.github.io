$( document ).ready(function() {
    new Clipboard('.copy');

    $('.copy').on('click', function () {
        $(this).html('Copied!');
    });
});
