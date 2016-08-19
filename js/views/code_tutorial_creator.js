
define([
    'jquery',
    'jqueryui',
    'd3',
    'backbone',
    'js/models/graph',
    'ace-builds/src-noconflict/ace.js',
    'base64'
    //'https://cdn.rawgit.com/carlo/jquery-base64/master/jquery.base64.min.js'
    //'ace/build/src/ace.js'
    //'http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
    //'https://cdn.rawgit.com/carlo/jquery-base64/master/jquery.base64.min.js'

], function($, $ui, d3, backbone, Model) {

    var view = backbone.View.extend({

        initialize: function(){

          this.draw_code_editor();

        },

        draw_code_editor: function() {

          /*$("#html_textarea").resizable(/*{
            handles: "n, s",
            resize: function (event, ui) {
              ui.size.width = ui.originalSize.width;
            }
          }*);*/
          /*$("div#html_textarea").resizable();

          $("#result").resizable();*/

          var editor = ace.edit("html_textarea");
          editor.setTheme("ace/theme/monokai");
          editor.getSession().setMode("ace/mode/html");

          var javascript_editor = ace.edit("javascript_textarea");
          javascript_editor.setTheme("ace/theme/monokai");
          javascript_editor.getSession().setMode("ace/mode/javascript");

          var css_editor = ace.edit("css_textarea");
          css_editor.setTheme("ace/theme/monokai");
          css_editor.getSession().setMode("ace/mode/css");

          //editor.setValue("the new text here"); // or session.setValue
          $("#submit_btn").click(function(){
            var html_code = editor.getValue();
            var js_code = javascript_editor.getValue();
            var css_code = css_editor.getValue();

            var all_code = "<script src='https://d3js.org/d3.v4.min.js'></script>"+
                            "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css' integrity='sha384-MIwDKRSSImVFAZCVLtU0LMDdON6KVCrZHyVQQj6e8wIEJkW4tvwqXrbMIya1vriY' crossorigin='anonymous'>"+
                            "<style>"+css_code+"</style>"+
                            html_code+
                            "<script>"+js_code+"</script>";

            var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(all_code);
            document.getElementById("result").src = data_url;

          });

        }

      });

      return view;

    });
