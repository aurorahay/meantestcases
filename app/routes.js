// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error.
                                // nothing after res.send(err) will execute
                if (err) {
                    res.send(err);
                }

                res.json(nerds); // return all nerds in JSON format
            });
        });


        // route to handle creating goes here (app.post)
        app.post('/api/nerds', function(req, res) {
            var nerd = new Nerd();
            nerd.name = req.body.name;

            nerd.save(function(error) {
                if (error) {
                    res.send(error);
                }

                res.json({message: nerd.name + " added!", data: nerd});
            });

        });


        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('index.html', {root: '../public'}); // load our public/index.html file
        });

    };