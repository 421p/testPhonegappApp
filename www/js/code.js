document.addEventListener('deviceready', function(){
    console.log('da');
    $('.ne-rabit').on('click', function(){
        alert("НАПИСАЛ ЖЕ, ЧТО НЕ РАБИТ, ЗАЧЕМ ТЫРКАТЬ ТО СЮДА");
    });

    $('li>a').each(function(){
        $(this).on('click', function(){
            $('.gallery').each(function(){
                $(this).hide();
            });
            $('.' + $(this).attr('data-class')).show()
                .children().show();
        });
    });

    $('#init').each(function(){

        $('.gallery').each(function(){
            $(this).hide();
        });

        $(this).show()
            .children().show();
    });
}, false);