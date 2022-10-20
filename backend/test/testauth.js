import request from 'supertest'
import app from '../app.js'

// Test on the HTTP interface which is the status code and the content of the response
// Because we're using ES modules, so we have to specify in the CLI "NODE_OPTIONS=--experimental-vm-modules npx jest" to run the test
export const testAuth = () => {

    describe("POST /auth/register", () => {
        describe("given a username and password", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with user", async () => {
                // Need two user for /user delete testing
                const response = await request(app).post("/auth/register").send({
                    username: "username", password: "password", firstname: "firstname", lastname: "lastname"
                })
                const response2 = await request(app).post("/auth/register").send({
                    username: "username2", password: "password2", firstname: "firstname2", lastname: "lastname2"
                })
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body.user).toBeDefined()
                expect(response2.statusCode).toBe(200)
                expect(response2.headers['content-type']).toEqual(expect.stringContaining("json"))
                expect(response2.body.user).toBeDefined()
            })
        })

        describe("when the username and password is missing", () => {
            test("should respond with 400 status code", async () => { // 400 is the status code for bad request
                const bodyData = [{username: "username"}, {password: "password"}, {}]
                for (const body of bodyData) {
                    const response = await request(app).post("/auth/register").send(body)
                    expect(response.statusCode).toBe(400)
                }
            })
        })

    })

    describe("POST /auth/login", () => {
        describe("given a username and password", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with user", async () => {
                const response = await request(app).post("/auth/login").send({
                    username: "username", password: "password"
                })
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body.user).toBeDefined()
            })
        })

        describe("when the password is wrong", () => {
            test("should respond with 400 status code", async () => { // 400 is the status code for bad request
                const response = await request(app).post("/auth/login").send({username: "username"}, {password: "wrong"})
                expect(response.statusCode).toBe(400)
            })
        })

        describe("when the username and password is missing", () => {
            test("should respond with 400 status code", async () => { // 500 is the status code for internal server error
                const bodyData = [{username: "username"}, {password: "password"}, {}]
                for (const body of bodyData) {
                    const response = await request(app).post("/auth/login").send(body)
                    expect(response.statusCode).toBe(400)
                }
            })
        })
    })
}