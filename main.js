const showToast = function (text, config = {}) {
    const toastClass = 'toast-' + Date.now();

    const setting = {
        speed: config.speed || 300,
        delay: config.delay || 600,
        top: config.top || 50,
        bgcolor: config.bgcolor || 'rgb(241, 124, 124)',
        color: config.color || 'rgb(255, 255, 255)'
    }

    $('body').append(
        $('<div>')  .addClass(toastClass)
                    .css('display', 'none')
                    .css('position', 'fixed')
                    .css('top', setting.top + 'px')
                    .css('left', '0')
                    .css('width', '100%')
                    .css('text-align', 'center')
                    .append(
                        $('<div>')  .css('display', 'inline-block')
                                    .css('margin', '0 auto')
                                    .css('padding', '10px 20px')
                                    .css('border-radius', '3px')
                                    .css('background-color', setting.bgcolor)
                                    .append(
                                        $('<span>') .text(text)
                                                    .css('color', setting.color)
                                    )
                    )
    );

    $('.' + toastClass).fadeIn(setting.speed, function() {
        setTimeout(function() {
            $('.' + toastClass).fadeOut(setting.speed, function() {
                $('.' + toastClass).remove();
            });
        }, setting.delay)
    });
}
