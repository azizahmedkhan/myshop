import {createCategory} from '@/lib/db.js'
export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log("Post"+req.body);
        createCategory(req.body)
      res.status(200).json({status:"ok"});
    } else if (req.method === 'GET') {
        console.log("GET"+req.body);
        res.status(200).json({status:"ok"});
    } else if (req.method === 'PUT') {
        console.log("PATCH"+req.body);
        res.status(200).json({status:"ok"});
    } else if (req.method === 'PATCH') {
        console.log("PATCH"+req.body);
        res.status(200).json({status:"ok"});
    } else if (req.method === 'DELETE') {
        console.log("DELETE"+req.body);
        res.status(200).json({status:"ok"});
    }
  }