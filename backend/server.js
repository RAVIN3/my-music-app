const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/songs", (req, res) => {
    const songs = [
        {
            name: "Song A - Happy Melody",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            name: "Song B - Summer Vibes",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            name: "Song C - Night Dreams",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        }
    ];

    res.json({ songs });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
