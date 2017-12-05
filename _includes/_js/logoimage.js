<!-- script to change logo-image size depending on screen size -->
<script>
  $(document).ready(function(){
    var windowwidth = $(window).width();
    var imagewidth = windowwidth/2;
    if(imagewidth > 300){
      $('#logo-image').width(300)
    } else {
      $('#logo-image').width(imagewidth);
    }
  })
  $(window).on('resize', function(){
    var windowwidth = $(window).width();
    var imagewidth = windowwidth/2;
    if(imagewidth > 300){
      $('#logo-image').width(300)
    } else {
      $('#logo-image').width(imagewidth);
    }
  })
</script>
