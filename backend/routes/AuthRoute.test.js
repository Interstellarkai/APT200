const router = require('./AuthRoute.js');

describe("POST /register", ()=>{
	describe("Registering successful", () => {
		//status 200
		test("Respond 200", () => {
			const response = request(router).post("/register").send({
				username: "username12345test",
				password: "password12345test"
			})
			expect(response.statusCode).toBe(200)
		})
	})

	describe("When exists", () => {
		//status 400
	})


})