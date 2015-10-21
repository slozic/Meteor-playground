BaseController = RouteController.extend({
  layoutTemplate: 'layout'
});


Meteor.startup(function() {
    Notifications.settings.animationSpeed = 500;
    _.extend(Notifications.defaultOptions, {
        timeout: 5000
    });
});
