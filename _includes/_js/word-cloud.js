<!-- change blue-span height and size of word cloud -->
<script>
  $(document).ready(function(){
    var windowWidth = $(window).width();
    var cloudWidth = windowWidth/1.5;

    if(cloudWidth > 400){
      $('#word-cloud').width(400);
    } else {
      $('#word-cloud').width(cloudWidth);
    }
  })
  $(window).on('resize', function(){
    var windowWidth = $(window).width();
    var cloudWidth = windowWidth/1.5;

    if(cloudWidth > 400){
      $('#word-cloud').width(400);
    } else {
      $('#word-cloud').width(cloudWidth);
    }
  })
</script>
