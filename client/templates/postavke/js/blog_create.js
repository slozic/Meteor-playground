Meteor.subscribe('blog');

blog = new PgSubscription('blog');

Template.blog.onCreated(function() {
    Session.set('blogErrors', {});
});

Template.blog.events({
    'submit form': function(e, template) {
        e.preventDefault();

        var blog = {
            title: $(e.target).find('[id=title]').val(),
            content: $(e.target).find('[id=content]').val(),
            id: $(e.target).find('[id=id]').val()
        };

        Meteor.call('blogCreate', blog, function(error, id) {
            if (error) {
                Session.set('blogErrors', error);
                Notifications.error('Greška', error.reason);
            } else {
                Notifications.info('Bravo', 'Koji si ti car!');
            }
        });
    },
    'click .reactive-table tbody tr': function(event, template) {
        $('#title').val(this.title);
        $('#content').val(this.content);
        $('#id').val(this._id);
    },
    'click #delete': function(event, template) {
        event.preventDefault();
        var blog = {
            id: $('#id').val()
        };
        Meteor.call('blogDelete', blog, function(error, id) {
            if (error) {} else {}
        });
        clearForm();
    },
    'click #novi': function(event, template) {
        event.preventDefault();
        clearForm();
    }
});

Template.blog.rendered = function() {
    $('.loading').addClass('loading-spinner');
};

Template.blog.helpers({
    blog: function() {
        $('.loading').removeClass('loading-spinner');
        return blog.reactive();
    },
    errorMessage: function(field) {
        return Session.get('blogErrors')[field];
    },
    errorClass: function(field) {
        return !!Session.get('blogErrors')[field] ? 'has-error' : '';
    },
    settings: function() {
        return {
            collection: blog.reactive(),
            rowsPerPage: 5,
            showFilter: true,
            fields: [{
                key: 'title',
                label: 'Title'
            }, {
                key: 'content',
                label: 'Content'
            }]
        };
    }
});


clearForm = function() {
    $('#title').val("");
    $('#content').val("");
    $('#id').val("");
    Session.set('blogErrors', {});
}
