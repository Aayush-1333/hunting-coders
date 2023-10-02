import * as fs from 'fs'

export default function GetBlog(req, res) {
    fs.readFile("blogdata/blogposts.json", "utf-8", (err, data) => {
        if (err)
            res.status(500).send("Internal Server Error!")

        else {
            const requestedBlog = Object.values(req.query)
            const fetchedBlog = JSON.parse(data).filter((blogPost) => { return blogPost.title == requestedBlog })[0]
            if (fetchedBlog)
                res.status(200).json(fetchedBlog)
            else
                res.status(404).send("Blog not found!")
        }
    })
}
