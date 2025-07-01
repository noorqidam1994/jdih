import connectionHandler from '../../lib/connection-handler';

const handler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      // Test database connection
      const result = await req.db.select('*').from('jenis').limit(5);
      
      res.status(200).json({
        success: true,
        message: 'Database connection successful',
        data: result,
        tableCount: result.length
      });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({
      error: 'Database connection failed',
      details: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
};

export default connectionHandler()(handler); 