const path = require('path')
const fs = require('fs')

class MutationAPI {
    //uploadFile bc it could be any mimetype
    async uploadFile(file) {
        console.log("uploadfile function:", file)
        return {
            url: `http://localhost:3000/gotube/`
        }
        //will add mimetype and encoding to headers once upload is configured
        const { createReadStream, filename, mimetype, encoding } = await file
        //stream containing file
        const stream = createReadStream()
        //create path where we are going to write stream to
        const pathName = path.join(__dirname, `public/src/${filename}`)
        //write/stream file using multi-stream requests to pathname destination
        await stream.pipe(fs.writeFileSync(pathName))

    }
}

module.exports = MutationAPI;