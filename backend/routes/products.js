const productsRouter = require('express').Router()
const Product = require('../models/product')
const User = require('../models/user')
const Image = require('../models/image')
const {
	getAllProducts,
	getProductFiltered,
	getProduct,
	createProduct,
	deleteProduct,
	updateProduct,
} = require("../controllers/crudController")

//for Image
/*
const Image = require('../models/image')
const multer = require('multer')
const Storage = multer.diskStorage({
		destination:(req,file,cb)=>{
			cb(null, 'uploads')
	},
	{
		filename:(req,file,cb)=>{
			cb(null, file.originalname)
		}
	}
})

const upload = multer({storage:Storage})
*/
//end


productsRouter.get('/', getAllProducts)

/*
productsRouter.get('/', async (request, response) => {
  const products = await Product
    .find({}).populate('user', { username: 1, name: 1 })

  response.json(products)
});
*/

productsRouter.get('/filtered', getProductFiltered)

productsRouter.get('/:id', getProduct)

/*
productsRouter.get('/:id', async (request, response) => {
    const product = await Product.findById(request.params.id)
    if (product) {
      response.json(product)
    } else {
      response.status(404).end()
    }
})
*/


productsRouter.post('/', createProduct)
/*
productsRouter.post('/', async (request, response, next) => {
  const {name,price,userId,img} = request.body
//  const newImage = new Image

  const user = await User.findById(userId)
  const product = new Product({
    name,
    price,
    date: new Date(),
    rating: 0,
    user: user._id
	//image
	//img: img
	
	//img:{
	//	data:req.file.filename,
	//	contentType:'image/jpg'
	//}
	
  })

  const savedProduct = await product.save()
  user.products = user.products.concat(savedProduct._id)
  await user.save()
  
  response.json(savedProduct)
})
*/

//with image
//don't work
productsRouter.post('/upload', async (req, res, next) => {
  //const {name,price,userId,img} = request.body
//  upload(req, res, (err)=>{
//	  if(err){
//		console.log(err)
//	  }
//	  else{
		
		//var jreq = JSON.parse(req.data)
		//const asdf = JSON.parse(req.data)
		const userId = req.data.userId
		console.log(userId)
		//const user = await User.findById("6316c74597aba992db4021c7")
		const user = await User.findById(userId)
		const newImg = new Image({
			img:{
				data: req.img,
				contentType:'image/png'
			}
		})
		
		const product = new Product({
			name: req.body.name,
			price: req.body.price,
			
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

productsRouter.delete('/:id', deleteProduct)
/*
productsRouter.delete('/:id', async (request, response, next) => {
      await Product.findByIdAndRemove(request.params.id)
      response.status(204).end()
  })
*/

productsRouter.put('/:id', updateProduct)
/*
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

module.exports = productsRouter