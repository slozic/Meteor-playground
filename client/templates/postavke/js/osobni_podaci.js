var podaci;

//invoke the server method
if (Meteor.isClient) {
    Meteor.call('getKomitent', function (error, results) {
        console.log(results.content); //results.data should be a JSON object
        podaci = results.content;
        komitent: podaci;
    });
}

Template.osobniPodaci.helpers({
    komitent: podaci
});


