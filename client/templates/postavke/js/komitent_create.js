Meteor.subscribe('komitenti');

Template.komitent.onCreated(function() {
    Session.set('komitentErrors', {});
});

Template.komitent.events({
    'submit form': function(e, template) {
        e.preventDefault();

        var komitent = {
            naziv: $(e.target).find('[id=ime_prezime]').val(),
            maticni: $(e.target).find('[id=mbr]').val(),
            oib: $(e.target).find('[id=oib]').val(),
            id: $(e.target).find('[id=id]').val()
        };

        Meteor.call('komitentCreate', komitent, function(error, id) {
            if (error) {
                Session.set('komitentErrors', error);
                Notifications.error('Greška', error.reason);
            } else {
                Notifications.info('Bravo', 'Koji si ti car!');
            }
        });
    },
    'click .komitent-row': function(event, template) {
        $('#ime_prezime').val(this.nazivKom);
        $('#mbr').val(this.matbrKom);
        $('#oib').val(this.oibKom);
        $('#id').val(this._id);
    },
    'click .reactive-table tbody tr': function(event, template) {
        $('#ime_prezime').val(this.nazivKom);
        $('#mbr').val(this.matbrKom);
        $('#oib').val(this.oibKom);
        $('#id').val(this._id);
    },
    'click #delete': function(event, template) {
        event.preventDefault();
        var komitent = {
            id: $('#id').val()
        };
        Meteor.call('komitentDelete', komitent, function(error, id) {
            if (error) {} else {}
        });
        clearForm();
    },
    'click #novi': function(event, template) {
        event.preventDefault();
        clearForm();
    }
});

Template.komitent.rendered = function() {
    $('.loading').addClass('loading-spinner');
};

Template.komitent.helpers({
    komitenti: function() {
        $('.loading').removeClass('loading-spinner');
        return Komitent.find().fetch();
    },
    errorMessage: function(field) {
        return Session.get('komitentErrors')[field];
    },
    errorClass: function(field) {
        return !!Session.get('komitentErrors')[field] ? 'has-error' : '';
    },
    settings: function() {
        return {
            collection: Komitent.find().fetch(),
            rowsPerPage: 5,
            showFilter: true,
            fields: [{
                key: 'nazivKom',
                label: 'Ime i prezime'
            }, {
                key: 'matbrKom',
                label: 'Matični broj'
            }, {
                key: 'oibKom',
                label: 'OIB'
            }]
        };
    }
});


clearForm = function() {
    $('#ime_prezime').val("");
    $('#mbr').val("");
    $('#oib').val("");
    $('#id').val("");
    Session.set('komitentErrors', {});
}
