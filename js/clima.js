function getClima() {

    $.ajax({

        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=ee50a640c70082d26832db44cf955a55&lang=pt_br',
        dataType: 'json',

        success: function (data) {

            let converterCelsius = (data.main.temp - 273.15);
            celsius = (Math.round(converterCelsius)+'C°');

            $('#temperatura').html(celsius);
            $('#condicao').html(data.weather[0].description);
            $('#velocidade').html(data.wind.speed + 'm/s');
            $('#umidade').html(data.main.humidity + '%');

            $('#nascer-do-sol').html(data.sys.sunrise);
            $('#por-do-sol').html(data.sys.sunset);

            let icone = 'img/'+data.weather[0].icon+'.png';
            $('#iconeCondicao').attr('src', icone);


        },

        error: function (argument) {
            alert('Falha ao obter dados!');

        }

    });

}

window.onload = function () {
    getClima();
};