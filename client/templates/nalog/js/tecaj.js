Template.tecaj.helpers({
    tecajList: function() {
        return ReactiveMethod.call('getTecajnaListaHNB');
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
