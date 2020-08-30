$(function() {
  var t=new Date();
  var h = t.getHours();
    var m = t.getMinutes();
  $("#chat-submit").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input").val();
    if(msg.trim() == ''){
      return false;
    }
    generate_message(msg);
  })

  function generate_message(msg) {

    var str="";
    str +="<li class=\"me\">"
    str +=  "<div class=\"entete\">"
    str +=    "<h3>"+h+":"+m+", Today </h3>"
    str +=    "<span class=\"status blue\"></span>"
    str +=  "</div>"
    str +=  "<div class=\"triangle\"></div>"
    str +=  "<div class=\"message\">"
      str += msg;
    str +=  "</div>"
    str +="</li>"
    $(".chat-logs").append(str);
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
  }







})
