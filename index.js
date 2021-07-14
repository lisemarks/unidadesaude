const prompt = require('prompt');
const axios = require('axios');
const { getDistanciaEntreCoordenadas } = require('./utils');

prompt.start();

prompt.get(['Bairro', 'Latitude', 'Longitude'], function (err, result) {
    if (err) { return onErr(err); }
    
    axios.get('https://rest-demas.saude.gov.br/api/estabelecimento')
    .then(function (response) {

        bairros = response.data.estabelecimentos.filter(function(o){
            return o.bairro.toLowerCase().includes(result.Bairro.toLowerCase());
        });

        if(result.Bairro == "")
        {
            console.log("É necessário informar um bairro para a consulta.");
        }
        else
        {
            if(Object.keys(bairros).length == 0)
            {
                console.log("Não foi encontrada nenhuma unidade de saúde no bairro", result.Bairro,".");
            }
            else
            {
                for (var prop of bairros)
                {
                    let nome = prop.nome;
                    if(result.Latitude == "" || result.Longitude == "")
                    {
                        console.log("Existe uma unidade de saúde na ",prop.logradouro," com o nome de ",nome," no bairro informado.");
                    }
                    else
                    {
                        let longitudeLatitudeUnidade = {lat: prop.latitude, lng: prop.longitude};
                        let longitudeLatitudeUsuario = {lat: result.Latitude, lng: result.Longitude};
                        if (prop.latitude == null || prop.latitude == null)
                        {
                            console.log("A distância da sua localização para a unidade de saúde da ",prop.logradouro," com o nome de ",nome," não foi realizada. Motivo: Governo não informou as coordenadas.");
                        }
                        else
                        {
                            let distancia = (getDistanciaEntreCoordenadas(longitudeLatitudeUsuario, longitudeLatitudeUnidade));
                            console.log("A distância da sua localização para a unidade de saúde da ",prop.logradouro," com o nome de ",nome," é de:", (distancia/1000), "km." );
                        }
                    }
                }           
            }        
        }
    })
    .catch(function (error) {
        console.error(error);
    });
});

function onErr(err) {
    console.error(err);
    return 1;
}