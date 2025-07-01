import connectionHandler from '../../../lib/connection-handler';

const handler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      let v = escapeHtml(req.query.vl);
      const result = await req.db
      .select('tahun_putusan as tahun')
      .from('putusan_pengadilan')
      .whereRaw(`tahun_putusan LIKE '%${v}%'`)
      .groupBy('tahun_putusan')
      .offset(0).limit(5)
      res.status(200)
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result));
    } else {
      return res.status(404).end();
    }
  } catch (err) {
      return res.status(500).send({error: 'Oops! Something went wrong!'});
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "").replace(/'/g, "'");
}

export default connectionHandler()(handler);