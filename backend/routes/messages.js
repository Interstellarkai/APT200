const messagesRouter = require('express').Router()
const Message = require('../models/message')
const User = require('../models/user')

messagesRouter.get('/', async (request, response) => {
  const messages = await Message.find({}).populate("sendId").populate("recId")
  response.json(messages)
});

/*
messagesRouter.get('/:id', async (request, response) => {
    const product = await Product.findById(request.params.id)
    if (product) {
      response.json(product)
    } else {
      response.status(404).end()
    }
})
*/

messagesRouter.post('/', async (request, response, next) => {
	const {sendId, recId, text} = request.body
//  const newImage = new Image

	const sender = await User.findById(sendId)
	if(sender == null){
		return response.status(404).json({
			error: "sender Id does not exist",
		});
	}
	const receiver = await User.findById(recId)
	if(receiver == null){
		return response.status(404).json({
			error: "receiver Id does not exist",
		});
	}
	
	const message = new Message({
		sendId,
		recId,
		//time: new Date(), should be auto.
		text
	})
	
	const savedMessage = await message.save()
	response.send('sent')
	
});

//shouldn't delete messages bah. Evidence.
/*
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

module.exports = messagesRouter