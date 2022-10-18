import express from "express";
import Image from "../models/imageModel.js";
import fs from "fs";
import multer from "multer";

const router = express.Router();
// const Product = require("../models/product");
// const User = require("../models/user");
// const {
//   getAllImages,
//   getImage,
//   deleteImage,
// } = require("../controllers/crudController");

//for Image

// const Image = require("../models/imageModel");
// const fs = require("fs");
// const multer = require("multer");
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: Storage });
//end

// router.get("/", getAllImages)

router.get("/", async (request, response) => {
  const allImages = await Image.find();
  response.json(allImages);
});

// router.get("/:id", getImage);

router.get("/:id", async (request, response) => {
  const img = await Image.findById(request.params.id);
  if (img) {
    response.json(img);
  } else {
    response.status(404).end();
  }
});

router.post("/", upload.single("img"), async (request, response, next) => {
  // const prodId = request.body.pid
  // const product = await Product.findById(prodId)
  console.log("Printing request img: ", request.file);
  const saveImage = new Image({
    name: request.body.name,
    img: {
      data: fs.readFileSync("uploads/" + request.file.filename),
      contentType: "image/png",
    },
    // product: product._id
  });

  // console.log("saveImage: ", saveImage);
  const savedImage = await saveImage.save();
  // product.imgs = product.imgs.concat(savedImage._id)
  // await product.save()

  response.json(savedImage);
});

// router.delete("/:id", deleteImage);

router.delete("/:id", async (request, response, next) => {
  await Image.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

/*
//with image
productsRouter.post('/upload', async (req, res, next) => {
  //const {name,price,userId,img} = request.body
//  upload(req, res, (err)=>{
//	  if(err){
//		console.log(err)
//	  }
//	  else{
		
		//var jreq = JSON.parse(req.body)
		userId = req.userId
		const user = await User.findById("6316c74597aba992db4021c7")
		//const user = await User.findById(userId)
		const newImg = new Image({
			img:{
				data: req.img,
				contentType:'image/png'
			}
		})
		
		const product = new Product({
			name: req.name,
			price: req.price,
			
			date: new Date(),
			rating: 0,
			user: user._id,
			img:newImg
		})
		const savedProduct = await product.save()
		user.products = user.products.concat(savedProduct._id)
		await user.save()
		
		response.json(savedProduct)
//	  }
//  })
})
//end

productsRouter.delete('/:id', async (request, response, next) => {
      await Product.findByIdAndRemove(request.params.id)
      response.status(204).end()
  })

productsRouter.put('/:id', async(request, response, next) => {
  const {name,price} = request.body

  const product = {
    name,
    price
  }

  Product.findByIdAndUpdate(request.params.id, product, { new: true })
    .then(updatedProduct => {
      response.json(updatedProduct)
    })
    .catch(error => next(error))
})
*/
/*
productsRouter.put('/upload/:id', upload.single("file"), (req, res) => {
	if (req.file === undefined) return res.send("No file selected.");
	const imgUrl = `http://localhost:3001/file/${req.file.filename}`;
	return res.send(imgUrl);
})
*/

export default router;
