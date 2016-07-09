$(document).ready(function() {

      $("#appear").click(function() {
        $("#phil").fadeIn();
        $("#pillappeardiv").show();
        $("#whoisthat").show();
      });

      $("#whoisthat").click(function() {
        $("#phildiv").hide();
        $("#appear").hide();
        $("#phil2").show();
        $("#pill").fadeIn(6000);
        $("#wordbubble").fadeIn(10000);
        $("#whoisthat").hide();
        $("#but").fadeIn(10000);

      });
  
      $("#but").click(function() {
         $("#phil2").hide();
        $("#pill").hide();
        $("#wordbubble").hide();
        $("#whoisthat").hide();
        $("#but").hide();
        $("#phildissolvediv").show();
        $("#phildissolve").show;});
        $("#dissolve").click(function() {
          $("#phildissolve").hide("explode", {
            pieces: 180
          }, 3000);
        });

        $("#philupeffect").click(function() {
          $("#philup").show();
          $("#philup").toggle("slide");
        });

        $("#phildowneffect").click(function() {
          $("#phildown").toggle("slide");
          $("#phildown").fadeOut();
          $("#philgivesupeffect").show();
          $("#philgivesup").show();
        });

        $("#philgivesupeffect").click(function() {

          $("#philgivesup").rotate
          $("#philgivesup").fadeOut(2000);
        });

        $("#helloprincesseffect").click(function() {
          $("#princessappears").show();
          $("#princessappearseffect").show();
        });
        //What's this thing on the floor//                        
        $("#princessappearseffect").click(function() {
          $("#princesstakespill").fadeIn(2000);

        });

        $("#princesstakespilleffect").click(function() {
          $("#princesstakespill").hide();
          $("#princessappears").fadeOut();
          $("#princesseats").fadeIn();

        });

        $("#princesseatseffect").click(function() {
          $("#princesseats").fadeIn();
          $("#princesseats").rotate();
        });
        $("#eatphil").click(function() {
          $("#princessparty").show();
        });
      })