
$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:3093/meteo/reunion', // La ressource ciblée
        type: 'GET', //type de requette. Ici un post n'a pas de sens on a rien a envoyer au sreveur
        //GET type par défaut, normalement pas besoin de le préciser
        dataType: 'json',

        success: function (data) {
            var donnee = JSON.parse(data.body);
            console.log(donnee.main.temp);
            // $.('#recuperation').append(donnee.main.temp);

            console.log(data.body);
        },
        error: function () {
            console.log('toto');
        }

    });

});