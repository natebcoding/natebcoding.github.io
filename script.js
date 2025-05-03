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


function resizePlayer(size) {
    const player = document.getElementById('player');
    if (size === 'small') {
        player.style.width = '640px';
        player.style.height = '360px';
    } else if (size === 'medium') {
        player.style.width = '720px';
        player.style.height = '480px';
    } else if (size === 'large') {
        player.style.width = '1080px';
        player.style.height = '640px';
    }
}

function loadRandomPlaylist() {
    const playlists = [
        'PL1A2B3C4D5E6F7G8H9I0J',
        'PL1K2L3M4N5O6P7Q8R9S0T',
        'PL1U2V3W4X5Y6Z7A8B9C0D'
    ];
    const randomIndex = Math.floor(Math.random() * playlists.length);
    const selectedPlaylist = playlists[randomIndex];

    player.src = `https://www.youtube.com/embed/videoseries?list=${selectedPlaylist}&autoplay=1`;
};


