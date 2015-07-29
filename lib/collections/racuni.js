Racuni = new Meteor.Collection('racuni');

//if(Racuni.find().count() === 0){
//    Racuni.insert({
//        racunId: racuni._id,
//        vlasnik: 'Marko Marić',
//        datum: new Date(),
//        iznos: '1000'
//    });
//    
//     Racuni.insert({
//        racunId: racuni._id,
//        vlasnik: 'Petar Marić',
//        datum: new Date(),
//        iznos: '5000'
//    });
//}

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
