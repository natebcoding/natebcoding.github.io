function loadPlaylist(playlistID) {
    const player = document.getElementById('player');
    player.src = `https://www.youtube.com/embed/videoseries?list=${playlistID}&autoplay=1`;
}


document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const correctPassword = "horizons";

    if (password === correctPassword) {
        document.getElementById('gameDevSection').style.display = 'block';    
        document.getElementById('codingSection').style.display = 'block';
        document.getElementById('password').style.display = 'none';
    } else {
        document.getElementById('gameDevSection').style.display = 'none';
        document.getElementById('codingSection').style.display = 'none';
    }
});