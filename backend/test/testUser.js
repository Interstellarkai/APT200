import request from 'supertest'
import app from '../app.js'
import UserModel from "../models/userModel.js";

// Test on the HTTP interface which is the status code and the content of the response
// Because we're using ES modules, so we have to specify in the CLI "NODE_OPTIONS=--experimental-vm-modules npx jest" to run the test

export const testUser = () => {
    let testUserID, testUserID2;
    describe("GET /user", () => {
        describe("get all users", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with users array", async () => {
                const response = await request(app).get("/user")
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body).toBeInstanceOf(Object)

                for (let user of response.body) {
                    if ("username" === user.username) {
                        testUserID = user._id
                    }
                    if ("username2" === user.username) {
                        testUserID2 = user._id
                    }
                }
            })
        })

        describe("get single user", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with users array", async () => {
                const response = await request(app).get("/user/" + testUserID)
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body).toBeInstanceOf(Object)
            })
        })
    })
    describe("PUT /user", (users) => {
        describe("given same userID for req.param and req.body", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with users array", async () => {
                const response = await request(app).put("/user/" + testUserID).send({
                    password: "password",
                    _id: testUserID,
                    currentUserAdmin: "False"
                })
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body).toBeInstanceOf(Object)
            })
        })

        describe("given different userID for req.param and req.body", () => {
            test("should respond with a 403 status code", async () => {
                const response = await request(app).put("/user/" + testUserID).send({
                    password: "password",
                    _id: "",
                    currentUserAdmin: "False"
                })
                expect(response.statusCode).toBe(403)
            })
        })
    })

    describe("DELETE /user", () => {
        describe("given userAdmin", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with users array", async () => {
                const response = await request(app).delete("/user/" + testUserID).send({
                    currentUserId: "",
                    currentUserAdmin: true
                })
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })
        })

        describe("given same userID for req.param and req.body", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with users array", async () => {
                const response = await request(app).delete("/user/" + testUserID2).send({
                    currentUserId: testUserID2,
                    currentUserAdmin: false
                })
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            })
        })

        describe("given different userID for req.param and req.body", () => {
            // Get the user ID from the database
            test("should respond with a 403 status code", async () => {
                const response = await request(app).delete("/user/" + testUserID).send({
                    currentUserId: "",
                    currentUserAdmin: false
                })
                expect(response.statusCode).toBe(403)
            })
        })
    })
}

