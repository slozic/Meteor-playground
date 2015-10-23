//blog = new SQL.Collection('blog', 'postgres://slozic:slozic@localhost:5432/test');

var CONN_STR =
    'postgres://slozic:slozic@127.0.0.1:5432/test';
var liveDb = new LivePg(CONN_STR, 'blog');

// blog.publish('blog', function() {
//     return blog.select('blog._id as id', 'blog.title', 'blog.content')
//         .limit(100)
// });

Meteor.publish('blog', function() {
    // No triggers specified, the package will automatically refresh the
    // query on any change to the dependent tables (just players in this case).
    return liveDb.select('SELECT * FROM blog ORDER BY _id DESC');
});

Meteor.methods({
    // blogCreate: function(attributes) {
    //     blog.insert({
    //             title: attributes.title,
    //             content: attributes.content
    //         })
    //         .save();
    // }
    'blogCreate': function(attributes) {

        // Obtain a client from the pool
        pg.connect(CONN_STR, function(error, client, done) {
            if (error) throw error;

            // Perform query
            client.query(
                'INSERT into blog values title = $1, content = $2', ['attributes.title', 'attributes.content'],
                function(error, result) {
                    // Release client back into pool
                    done();

                    //if (error) throw error;
                }
            )
        });
    }

});
