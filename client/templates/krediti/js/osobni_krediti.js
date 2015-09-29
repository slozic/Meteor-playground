	Template.osobniKrediti.created = function() {
	    this.kreditnaIstorija = new ReactiveVar();
	};

	Template.osobniKrediti.events({
	    'change #komitent': function(event, template) {
	        if (Meteor.isClient) {
	            $('.loading').addClass('loading-spinner');
	            Meteor.call('getKreditnaIstorija', event.target.value, function(error, results) {
	                template.kreditnaIstorija.set(results);
	                $('.loading').removeClass('loading-spinner');
	                console.log(results); //results.data should be a JSON object
	            });
	        }
	    }
	});


	Template.osobniKrediti.helpers({
	    kreditnaIstorija: function() {
	        return Template.instance().kreditnaIstorija.get();
	    },
	    dateToday: function() {
	        return new Date().toDateString();
	    }
	});

	Template.registerHelper('formatDate', function(date) {
	    return moment(date).format('MM-DD-YYYY');
	});
