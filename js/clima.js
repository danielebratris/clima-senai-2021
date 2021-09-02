function getClima() {

    $.ajax({

        method: 'get',
        crossDomain: true,
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3468879&appid=ee50a640c70082d26832db44cf955a55&lang=pt_br',
        dataType: 'json',

        success: function (data) {
            plotarResultados(data);
            localStorage.clima = JSON.stringify(data);
            localStorage.alteracaoCache = new Data().getTime();


        },

        error: function (argument) {
            alert('Falha ao obter dados!');

        }

    });

}
function plotarResultados(data) {
    let converterCelsius = (data.main.temp - 273.15);
    celsius = (Math.round(converterCelsius) + 'C°');

    $('#temperatura').html(celsius);
    $('#condicao').html(data.weather[0].description);
    $('#velocidade').html(data.wind.speed + 'm/s');
    $('#umidade').html(data.main.humidity + '%');

    $('#nascer-do-sol').html(data.sys.sunrise);
    $('#por-do-sol').html(data.sys.sunset);

    let icone = 'img/' + data.weather[0].icon + '.png';
    $('#iconeCondicao').attr('src', icone);

}

window.onload = function () {
   //getClima();
   let data = JSON.parse(localStorage.clima);
   plotarResultados(data);
};