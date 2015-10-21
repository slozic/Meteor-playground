Komitent = new Mongo.Collection('komitent');

Meteor.methods({
    komitentCreate: function(attributes) {

        // check(attributes, {
        //     nazivKom: String,
        //     matbrKom: String,
        //     oibKom: String
        // });

        var errors = validate(attributes);
        if (errors.title || errors.url)
            throw new Meteor.Error('Greška', "Morate unijeti sve podatke!");

        var kom = Komitent.findOne(attributes.id);

        if (kom) {
            Komitent.update(
                attributes.id, {
                    $set: {
                        _id: attributes.id,
                        matbrKom: attributes.maticni,
                        nazivKom: attributes.naziv,
                        oibKom: attributes.oib
                    }
                });
        } else {
            Komitent.insert({
                matbrKom: attributes.maticni,
                nazivKom: attributes.naziv,
                oibKom: attributes.oib
            });
        }
    },
    komitentDelete: function(attributes) {
        Komitent.remove(attributes.id);
    }

});

validate = function(komitent) {
    var errors = {};

    if (!komitent.naziv)
        errors.title = "Molimo unesite naziv!";

    if (!komitent.maticni)
        errors.url = "Molimo unesite matični broj!";

    return errors;
}
