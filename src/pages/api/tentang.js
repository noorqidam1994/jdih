import connectionHandler from '../../lib/connection-handler';

const handler = async (req, res) => {
  const ket = req.body.ket;
  try {
    if (req.method === 'POST') {
      const result = req.db
      .select(ket)
      .from('tentangjdih')
      var data = await result
      res.status(200)
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data[0]));
    } else {
      return res.status(404).end();
    }
  } catch (err) {
      return res.status(500).send({error: 'Oops! Something went wrong!'});
  }
}

export default connectionHandler()(handler);