import path from 'path';
import fs from 'fs';

export default (req, res) => {
  const { filename } = req.query;

  try {
    const filePath = path.join(process.cwd(), 'data', `${filename}.json`);
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    console.log(jsonData)
    res.status(200).json("jsonData----------------------------------------------------",jsonData);
  } catch (error) {
    res.status(404).json({ message: 'File not found' });
  }
};



