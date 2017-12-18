<script>
  function showReplybox() {
    var x = document.getElementById("replyButton");
    if (x.className === "reply") {
      x.className += "-toggled";
    } else {
      x.className = "reply";
    }

  }
</script>
