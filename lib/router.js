Router.configure({
    layoutTemplate: 'layout'
});

TekuciController = RouteController.extend({
    template: 'tekuci'
});

PostavkeController = RouteController.extend({
    template: 'osobniPodaci'
});

Router.route(
        '/', {
            name: 'home'
        }
);

Router.route(
        '/tekuci', {
            name: 'tekuci'
        }
);

Router.route(
        '/nalog', {
            name: 'nalog'
        }
);
Router.route(
        '/osobni_podaci', {
            name: 'osobniPodaci',
            controller: PostavkeController
        }
);