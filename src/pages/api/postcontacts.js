const fs = require('fs');


export default async function handler(req, res) {
    if (req.method == 'POST') {
        // checks the exisiting files and writes a new JSON file
        try {
            const data = await fs.promises.readdir('./contactdata')
            await fs.promises.writeFile(`./contactdata/${data.length + 1}.json`, req.body, 'utf-8')
            res.status(200).send("data uploaded")
        } catch (err) {
            console.log(err)
        }
    } else {
        res.status(400).json("Cannot get request")
    }

    res.status(200).send("done")
}
