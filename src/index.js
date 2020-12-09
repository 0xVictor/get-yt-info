const express = require('express');
const youtubedl = require('youtube-dl');

const app = express();

app.get('/youtube2mp4', (req, res) => {
  const { url } = req.query;

  youtubedl.getInfo(url, (err, info) => {
    if (err) throw err;

    // console.log('id:', info.id);
    // console.log('title:', info.title);
    // console.log('url:', info.url);
    // console.log('thumbnail:', info.thumbnail);
    // console.log('description:', info.description);
    // console.log('filename:', info._filename);
    // console.log('format id:', info.format_id);

    return res.json({ url: info.url });
  });
});

app.listen(9000, () => {
  console.log('Server listening on port 9000!');
});
