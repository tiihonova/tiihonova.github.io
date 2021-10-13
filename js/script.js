const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  window.scrollY > 250
    ? footer.classList.add("active")
    : footer.classList.remove("active");
});

function onYouTubeIframeAPIReady() {
  let player;
  player = new YT.Player("muteYouTubeVideoPlayer", {
    videoId: "dnQsR-TM6UU", // YouTube Video ID
    width: 560, // Player width (in px)
    height: 316, // Player height (in px)
    playerVars: {
      autoplay: 1, // Auto-play the video on load
      controls: 0, // Show pause/play buttons in player
      showinfo: 0, // Hide the video title
      modestbranding: 1, // Hide the Youtube Logo
      loop: 1, // Run the video in a loop
      fs: 0, // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3, // Hide the Video Annotations
      autohide: 0, // Hide video controls when playing
    },
    events: {
      onReady: function (e) {
        e.target.mute();
      },
    },
  });

  setTimeout(() => {
    player.playVideo();
  }, 1000);
}
