Template.tecaj.helpers({
    tecajList: function() {
        return ReactiveMethod.call('getTecajnaListaHNB', moment(new Date()).format('YYYY-MM-DD'));
    },
    dateToday: function() {
        return new Date().toDateString();
    }
});

Template.tecaj.events({
    'click .tecajRow': function(e, t) {
        //alert(this.currency_code);
        // Router.go(
        //     '/tekuci', {
        //         name: 'tekuci'
        //     }
        // );
    }
});
