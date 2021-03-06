Router.configure({
    layoutTemplate: 'layout'
});

BaseController = RouteController.extend({
    layoutTemplate: 'layout'
});

TekuciController = RouteController.extend({
    template: 'tekuci'
});

PostavkeController = RouteController.extend({
    template: 'osobniPodaci'
});

OsobniKreditiController = BaseController.extend({
    template: 'osobniKrediti'
});

KomitentController = BaseController.extend({
    template: 'komitent'
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
    '/tecaj', {
        name: 'tecaj'
    }
);

Router.route(
    '/osobni_krediti', {
        name: 'osobniKrediti',
        controller: 'OsobniKreditiController'
    });

Router.route(
    '/osobni_podaci', {
        name: 'osobniPodaci',
        controller: 'PostavkeController'
    }
);

Router.route(
    '/komitent', {
        name: 'komitent'
    }
);

Router.route(
    '/blog', {
        name: 'blog'
    }
);
