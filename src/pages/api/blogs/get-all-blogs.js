import * as fs from 'fs'

export default function GetAllBlogs(req, res) {
    fs.readFile("blogdata/blogposts.json", "utf-8", (err, data) => {
        if (err)
            res.status(500).send("Internal Server Error!")

        else
            res.status(200).json(JSON.parse(data))
    })
}
