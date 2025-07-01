import connectionHandler from '../../lib/connection-handler';

const handler = async (req, res) => {
  try {
    if (req.method === 'POST') {
      console.log('Request body:', req.body);
      
      let result;
      if (req.body.ket === 'hadap') {
        console.log('Executing hadap query...');
        result = await req.db
          .select('b.idjenis', 'b.jns', req.db.raw(`COUNT(a.idjenis)As jml`))
          .from('peraturan as a')
          .leftJoin('jenis as b', 'a.idjenis', 'b.idjenis')
          .where('a.publish', 1)
          .groupBy('b.idjenis')
          .orderBy('b.idjenis', 'asc');
        
        console.log('Query result:', result);
      }
      
      res.status(200).json({
        success: true,
        data: result,
        count: result ? result.length : 0
      });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    console.error('Detailed error:', err);
    res.status(500).json({
      error: 'Query failed',
      details: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
};

export default connectionHandler()(handler); 