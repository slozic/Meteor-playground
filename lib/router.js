Router.configure({
    layoutTemplate: 'layout'
});

TekuciController = RouteController.extend({
    template: 'tekuci'
});

Router.route(
        '/', {
            name: 'home'
        }
);

Router.route(
        '/tekuci', {
            name: 'tekuci',
            controller: 'TekuciController'
        }
);