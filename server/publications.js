if (Meteor.isServer) {
    Meteor.publish('komitenti', function() {
        return Komitent.find({matbrKom:{$ne:null}});
    });
}
