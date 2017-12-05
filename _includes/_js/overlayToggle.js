<!-- script to toggle view of beta-overlay -->
<script>
  function overlayToggle() {
    var x = document.getElementById("overlay");
    x.className = "overlayHidden";
    setOverlayCookie("display", 1, 7);
  }
  function setOverlayCookie(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = " expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function checkOverlayCookie(){
    var betaDisplay = getOverlayCookie("display");
    if (betaDisplay != ""){
      var x = document.getElementById("overlay")
      x.className = "overlayHidden";
    }
  }
  function getOverlayCookie(cname){
    var cookie = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(cookie) == 0) {
        return c.substring(cookie.length, c.length);
      }
    }
    return "";
  }
</script>
