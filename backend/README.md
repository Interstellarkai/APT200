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
		Method : GET
		Header :

	Delete User
		Request : "localhost:3001/api/users/633a383aa59c44dbbc5daadf"
		Method : DELETE
		Header :
