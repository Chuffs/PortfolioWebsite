<!-- script to alter sizing of blog & portfolio icons -->
<script>
  $(document).ready(function(){
    var windowWidth = $(window).width();
    var iconWidth = windowWidth * 0.15;

    if(iconWidth > 200){
      $('.bp-icon').width(200);
    } else {
      $('.bp-icon').width(iconWidth);
    }

  })
</script>
