/*
/ Main script that acts as the entry point for the application
*/

requirejs.config({
    baseUrl:'',
    paths: {
        backbone: 'Viewer-components/backbone/backbone-min',
        bootstrap: 'Viewer-components/bootstrap/js/bootstrap.min',
        d3: 'Viewer-components/d3/d3.min',
        jquery: 'Viewer-components/jquery/jquery.min',
        jqueryui: 'Viewer-components/jquery-ui/jquery-ui.min',
        underscore: 'Viewer-components/underscore/underscore-min',
    }
})

// Main application single entry point
requirejs([
    'jquery',
    'd3',
    'js/models/graph',
    'js/views/code_tutorial_creator'
],function($, d3, Model, View) {

  $('#desc').scrollTop($('#desc')[0].scrollHeight - $('#desc')[0].clientHeight);


  var data = [  ];

  this.graph_model = new Model( data );

  this.graph_view = new View( { "model" : this.graph_model } );


});
