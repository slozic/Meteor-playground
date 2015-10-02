Komitent = new Mongo.Collection('komitent');

Meteor.methods({
    komitentCreate: function(attributes) {
        Komitent.insert({
            matbrKom: attributes.maticni,
            nazivKom: attributes.naziv,
            oibKom: attributes.oib
        });
    }

});
