

Template.osobniPodaci.rendered = function(){
	$('.loading').addClass('loading-spinner');
};

Template.osobniPodaci.helpers({
    komitent: function () {
    	$('.loading').removeClass('loading-spinner');
        return ReactiveMethod.call('getKomitent');
    }
});
