Meteor.methods({
    getKomitent: function () {
        if (Meteor.isServer) {
            this.unblock();
            try {
                var result = HTTP.call("GET", "http://localhost:8080/core/rest/komitentService/getPravKomitentByMaticni", {params: {maticni: "4227231890008"}});
                return result.data;
            } catch (e) {
                return false;
            }
        }
    }
});