Racuni = new Mongo.Collection('racuni');

if(!Racuni.find()){
    Racuni.insert({
        racunId: racuni._id,
        vlasnik: 'Marko Marić',
        datum: new Date(),
        iznos: '1000'
    });
}

Meteor.methods({
    racunInsert: function(racunAttributes){
        check(this.userId, String);
        check(racunAttributes, {
            racunId: String,
            datum: new Date()
        });
        
        var user = Meteor.user();
        var racun = Racuni.findOne(racunAttributes.racunId);
    }
});
