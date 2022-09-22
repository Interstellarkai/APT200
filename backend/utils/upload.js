//for image
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const storage = new GridFsStorage({
	options: {useNewUrlParser: true, useUnifiedTopology: true},
	file: (req,file) => {
		const match = ["image/png", "image/jpeg"];
		
		if (match.indexOf(file.mimetype) === -1){
			const filename = `${Date.now()}-the-name-${file.originalname}`;
			return filename;
		}
		
		return {
			bucketName:"photos",
			filename: `${Date.now()}-the-name-${file.originalname}`
		}
	}
})

module.exports = multer({storage})