$(document).ready(function() {
 $("form#music").submit(function(event){
   event.preventDefault();
   $("#music-responses").show();
   $("input:checkbox[name=music-group]:checked").each(function(){
     var favMusicGroup = $(this).val();
     console.log(favMusicGroup);
     $("#music-responses").append(favMusicGroup + "<br>");
   });
   $("#color-responses").show();
   $("input:checkbox[name=color]:checked").each(function(){
     var faveColor = $(this).val();
     $("#color-responses").append(faveColor + "<br>");
   });
   $("#music").hide();
 });
});