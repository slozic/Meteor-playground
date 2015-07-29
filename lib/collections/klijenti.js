Meteor.methods({
    getKomitent: function () {
        this.unblock();
        return Meteor.http.call("GET", "http://localhost:8080/core/rest/komitentService/getPravKomitentByMaticni?maticni=1271687116");
    }
});


