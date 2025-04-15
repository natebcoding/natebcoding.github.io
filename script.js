function loadPlaylist(playlistID) {
    const player = document.getElementById('player');
    player.src = `https://www.youtube.com/embed/videoseries?list=${playlistID}&autoplay=1`;
}