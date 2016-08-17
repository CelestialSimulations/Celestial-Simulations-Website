
define([
    'jquery',
    'jqueryui',
    'd3',
    'backbone',
    'js/models/graph',
    'ace-builds/src-noconflict/ace.js',
    'https://cdn.rawgit.com/carlo/jquery-base64/master/jquery.base64.min.js'
    //'ace/build/src/ace.js'
    //'http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
    //'https://cdn.rawgit.com/carlo/jquery-base64/master/jquery.base64.min.js'

], function($, $ui, d3, backbone, Model) {

    var view = backbone.View.extend({

        initialize: function(){

          this.draw_code_editor();

        },

        draw_code_editor: function() {

          var editor = ace.edit("editor");
          editor.setTheme("ace/theme/monokai");
          editor.getSession().setMode("ace/mode/html");

          var javascript_editor = ace.edit("javascript_textarea");
          javascript_editor.setTheme("ace/theme/monokai");
          javascript_editor.getSession().setMode("ace/mode/javascript");

          var css_editor = ace.edit("css_textarea");
          css_editor.setTheme("ace/theme/monokai");
          css_editor.getSession().setMode("ace/mode/css");

          //editor.setValue("the new text here"); // or session.setValue
          $("h1").click(function(){
            var html_code = editor.getValue();
            var js_code = javascript_editor.getValue();

            //$("#result").contents().find("head").append("<script src='https://d3js.org/d3.v4.min.js'></script>");

            //console.log(html_code+"<script>"+js_code+"</script>");

            //i wish it was in head tho
            var all_code = "<script src='https://d3js.org/d3.v4.min.js'></script>"+html_code+"<script>"+js_code+"</script>";

            $("#result").contents().find("body").append(all_code);

            //eval(editor.getValue()); // or session.getValue
            //console.log(editor.getValue());
            //editor.session.getTextRange(editor.getSelectionRange());
            //console.log(editor.session.getTextRange(editor.getSelectionRange()))

            var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(all_code);
            document.getElementById("result").src = data_url;

            //d3.select()
            //d3.select("#result")

            //d3.select("#result").append("script").text(js_code);

            /*iframe = $('#result');

            var script   = document.createElement("script");
            script.type  = "text/javascript";
            //script.src   = "http://www.abc/static/st.v2.js"; // Or:
            script.text  = js_code;

            $(iframe).append(script);*/
            //iframe.appendTo('#subscribr');

          });

          //editor.session.getTextRange(editor.getSelectionRange());

          /*var editor = ace.edit("editor");
          editor.setTheme("ace/theme/monokai");
          editor.getSession().setMode("ace/mode/javascript");*/

          /*var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
              lineNumbers: true,
              mode:  "xml"
          });

          //$("#test_btn").click(function(){
          function excute_code() {
            editor.save();
            var code = document.getElementById("editor").value;
            var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(code);
            document.getElementById("result").src = data_url;
            //console.log(data_url);

            //console.log(code);
            //delay(1000);
            //setTimeout(function(){excute_code();},1000);
            //excute_code();
            //setInterval(function(){excute_code();}, 5000);
          }
          //excute_code();
          //console.log(document.getElementById("editor").value);

          setInterval(function(){excute_code();}, 5000);
          //});
          $("h1").click(function() {
            //console.log($("#editor").val());
            //console.log(document.getElementById("editor").value);
          });*/

        }

      });

      return view;

    });
