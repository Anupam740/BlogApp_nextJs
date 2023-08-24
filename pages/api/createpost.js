import fs from 'fs/promises';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log(req.body);

            const data = await fs.readdir("createpostdata");
            console.log(data);

            await fs.writeFile(`createpostdata/${data.length + 1}.json`, JSON.stringify(req.body));
            
            res.status(200).json(req.body);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' }); 
        }
    } else {
        res.status(200).json(["allBags"]);
    }
}
