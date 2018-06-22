/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
Ext.application({

    name: 'WL',  // This is the namespace for our application.

    profiles: [
        'Phone',
        'Tablet'
    ],

    models: [
        'Movie'
    ],

    stores: [
        'Movies',
        'Search',
        'Activity'
    ],

    views: [
        'LoggedOut',
        'Main',
        'Activity',
        'movie.List',
        'Dialog'
    ],

    controllers: [
        'Facebook',
        'Viewings',
        'YouTube'
    ],

    viewport: {
        autoMaximize: true // Causes the URL bar to be hidden once the application loads.
    },

    // This function will be run once the application is ready to be launched.
    launch: function() {

        // Initialize Facebook with our app ID
        WL.Facebook.initialize('590311614676254');

        if (window.localStorage && window.localStorage.WL) {
            var parsed = JSON.parse(window.localStorage.WL);
            this.fireEvent('localStorageData', parsed);
        }

        // This is a convenience script which auto-reloads the CSS every second.
        // Combined with `compass watch`, this is useful during theme development as the page doesn't need to be reloaded.

        // setInterval(function(){
        //     Ext.DomQuery.select('link')[0].href = "resources/css/movies.css?" + Math.ceil(Math.random() * 100000000)
        // }, 1000);
    },

    /**
     * Convenience function for updating the URL location hash
     */
    updateUrl: function(url) {
        this.getHistory().add(Ext.create('Ext.app.Action', {
            url: url
        }));
    },

    onUpdated: function() {

        Ext.create('WL.view.Dialog', {
            msg: "Application update was a success. Reload now?",
            buttons: [
                {
                    ui: 'green',
                    text: 'Update Now',
                    handler: function() {
                        window.location.reload();
                    }
                },
                {
                    ui: 'red',
                    text: "Later"
                }
            ]
        }).show();
    }
});


