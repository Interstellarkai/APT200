# backend
1. Run npm install

2. Run npm start 

3. Server will be hosted on port 3001, can be changed in .env file

Models folder contains the schema for all our models

Utils folder contains error loggers and configurations to set up connection 

Routes folder contains PUT,GET,POST,DELETE requests for all the models which are all quite similar

Requests folder contains PUT,GET,POST,DELETE requests. Requires Visual Studio Code REST Client 

Executes from index.js which initializes app.js


# API guide

This is a documentation of the various API calls to make or available from the **BackEnd Server**.

## Users

    Creating User
        Request : "localhost:3001/api/users"
		Method : POST
		Header :
		Body :
		{
			mode: "raw",
			raw: {
				"username":  "MondaySucks",
				"name":  "Monday Sux",
				"password":  "MalaFeels123"
			},
			"options": {
						"raw": {
							"language": "json"
						}
					}			
		}
    	
    Update name by id    
		Request : "localhost:3001/api/users/name/633a384ea59c44dbbc5daae3"
		"auth" : {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIxZGNlMmI5MDY1YTkxZmI0NzEyNmIiLCJpYXQiOjE2NjQ5MjQyNzMsImV4cCI6MTY2NDkzODY3M30.8YevgqkKRU_JhE4iaDKCJoK3nUqmxbTI7namvRXbAjk",
							"type": "string"
						}
					]
				}
		Method : PUT
		Header :
		Body :
		{
			mode: "raw",
			raw: {
				"name":  "Monday Really Sucks"
			},
			"options": {
						"raw": {
							"language": "json"
						}
					}			
		}
		
	Update password by id    
		Request : "localhost:3001/api/users/name/633a384ea59c44dbbc5daae3"
		"auth" : {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIxZGNlMmI5MDY1YTkxZmI0NzEyNmIiLCJpYXQiOjE2NjQ5MjQyNzMsImV4cCI6MTY2NDkzODY3M30.8YevgqkKRU_JhE4iaDKCJoK3nUqmxbTI7namvRXbAjk",
							"type": "string"
						}
					]
				}
		Method : PUT
		Header :
		Body :
		{
			mode: "raw",
			raw: {
				"password":  "FeelsToEatMalaTang"
			},
			"options": {
						"raw": {
							"language": "json"
						}
					}			
		}
    
    Login (Returns access token)
		Request : "localhost:3001/api/users/login"
		Method : POST
		Header :
		Body :
		{
			mode: "urlencoded",
			urlencoded: [
						{
							"key": "username",
							"value": "batmens12345",
							"type": "text"
						},
						{
							"key": "password",
							"value": "qwerty",
							"type": "text"
						}
					]
		}
	
	All Users
		Request : "localhost:3001/api/users/"
		"auth" : {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIxZGNlMmI5MDY1YTkxZmI0NzEyNmIiLCJpYXQiOjE2NjQ5MjQyNzMsImV4cCI6MTY2NDkzODY3M30.8YevgqkKRU_JhE4iaDKCJoK3nUqmxbTI7namvRXbAjk",
							"type": "string"
						}
					]
				}
		Method : GET
		Header :

	Delete User
		Request : "localhost:3001/api/users/633a383aa59c44dbbc5daadf"
		"auth" : {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIxZGNlMmI5MDY1YTkxZmI0NzEyNmIiLCJpYXQiOjE2NjQ5MjQyNzMsImV4cCI6MTY2NDkzODY3M30.8YevgqkKRU_JhE4iaDKCJoK3nUqmxbTI7namvRXbAjk",
							"type": "string"
						}
					]
				}
		Method : DELETE
		Header :


## Products

    Create Product
        Request : "localhost:3001/api/products"
		Method : POST
		Header :
		Body :
		{
			mode: "urlencoded",
			"urlencoded": [
						{
							"key": "name",
							"value": "Create Prod Test 1",
							"type": "text"
						},
						{
							"key": "price",
							"value": "69",
							"type": "text"
						},
						{
							"key": "userId",
							"value": "633a384ea59c44dbbc5daae3",
							"type": "text"
						}
					]		
		}
		
	Get All Products
		Request : "localhost:3001/api/products"
		Method : GET
		Header :
		Body :
		
	Get Filtered Products
		Request : "localhost:3001/api/products/filtered"
		Method : GET
		Header :
		Body : {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "category",
							"value": "bottoms",
							"type": "text"
						},
						{
							"key": "condition",
							"value": "heavily used",
							"type": "text"
						},
						{
							"key": "priceMin",
							"value": "0",
							"type": "text"
						},
						{
							"key": "priceMax",
							"value": "999",
							"type": "text"
						}
					]
				}
	NOTE: Category and condition may be left as null, but default values of priceMin and Max must be set to 0 and max
		

		
	
	Get Single Product by id
		Request : "localhost:3001/api/products/6316cb4497aba992db4021d0"
    	Method : GET
		Header :
		Body :
		
		
## Images

    Get All Images
        Request : "localhost:3001/api/images"
		Method : GET
		Header :
		Body :
		
	Create Image (Call once for each image, must be added to product)
        Request : "localhost:3001/api/images"
		Method : POST
		Header :
		Body :
		{
			mode: "formdata",
			"formdata": [
				{
					"key": "img",
					"type": "file",
					"src": "/C:/Users/Trevor/Desktop/image.jpg"
				},
				{
					"key": "pid",
					"value": "6316cb4497aba992db4021d0",
					"type": "text"
				}
			]		
		}
		
	Delete Image
        Request : "localhost:3001/api/images631eeeb23cb8247463123114"
		Method : DELETE
		Header :
		Body :
		
	
		
		
		
		
		
		