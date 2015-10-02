Template.komitent.events({
  'submit form': function(e, template) {
    e.preventDefault();
    
    var komitent = {
      naziv: $(e.target).find('[id=ime_prezime]').val(),
      maticni: $(e.target).find('[id=mbr]').val(),
      oib: $(e.target).find('[id=oib]').val()
    };
    
    var errors = {};
    // if (! komitent.naziv) {
    //   errors.body = "Unesite vrijednosti!";
    //   return Session.set('komitentSubmitErrors', errors);
    // }
    
    Meteor.call('komitentCreate', komitent, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        //$body.val('');
      }
    });
  }
});