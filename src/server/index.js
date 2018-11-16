import path from 'path';
import express from 'express';

const app = express();

const DIST_DIR = path.join(__dirname, '..', 'app');

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.get('/app', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'app.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening to ${port}....`);
});

export default app;