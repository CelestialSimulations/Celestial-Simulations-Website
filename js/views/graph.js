
define([
    'jquery',
    'jqueryui',
    'd3',
    'backbone',
    'js/models/graph',
    'http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
    'https://cdn.rawgit.com/carlo/jquery-base64/master/jquery.base64.min.js'

], function($, $ui, d3, backbone, Model) {

    var view = backbone.View.extend({

        initialize: function(){

          this.draw_code_editor();

        },

        draw_code_editor: function() {

          var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
              lineNumbers: true,
              mode:  "xml"
          });

          //$("#test_btn").click(function(){
            editor.save();
            var code = document.getElementById("editor").value;
            var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(code);
            document.getElementById("result").src = data_url;

            console.log(code);
          //});
          /*$("h1").click(function() {
            console.log($("#editor").val());
          });*/

        }

      });

      return view;

    });
