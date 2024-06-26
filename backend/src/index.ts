import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.post('/shorten-url', async (req: Request, res: Response) => {
  try {
    const cleanUriApiUrl: string = 'https://cleanuri.com/api/v1/shorten';

    const response = await axios.post(cleanUriApiUrl, { url: req.body.url });

    if (response.status === 200) {
      res.json({ shortUrl: response.data.result_url });
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      res
        .status(error.response.status)
        .json({ error: error.response.data.error });
    } else res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
