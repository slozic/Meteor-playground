//Template.osobniPodaci.helpers({
//    komitent: function () {
//        HTTP.call('GET', "http://localhost:8080/core/rest/komitentService/getPravKomitentByMaticni", {data: {maticni: "1271687116"}}, function (error, result) {
//            console.log(result.content); //results.data should be a JSON object
//            return result.data;
//        });
//    }
//});
Template.osobniPodaci.helpers({
    komitent: function () {
        return  ReactiveMethod.call('getKomitent');
    }
});
