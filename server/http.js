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
    },

    getTecajnaListaHNB: function () {
        if(Meteor.isServer){
            this.unblock();
            try {
                var result = HTTP.call("GET", "http://hnbex.eu/api/v1/rates/daily/", {params: {date: "2015-09-24"}});
                return result.data;
            } catch (e) {
                return false;
            }
        }
    }
});