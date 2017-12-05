<!-- script to toggle menu on mobile devices -->
<script>
  function navbarToggle() {
      var x = document.getElementById("mobile-nav");
      if (x.className === "link") {
          x.className += "-toggled";
      } else {
          x.className = "link";
      }
  }
</script>
