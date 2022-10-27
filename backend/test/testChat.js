import request from 'supertest'
import app from '../app.js'

// Test on the HTTP interface which is the status code and the content of the response
// Because we're using ES modules, so we have to specify in the CLI "NODE_OPTIONS=--experimental-vm-modules npx jest" to run the test

export const testChat = () => {

    async function getUserID() {
        let testUserID, testUserID2;
        const response = await request(app).get("/user")
        for (let user of response.body) {
            if ("username" === user.username) {
                testUserID = user._id
            }
            if ("username2" === user.username) {
                testUserID2 = user._id
            }
        }
        return [testUserID, testUserID2]
    }

    describe("POST /chat", () => {
        describe("given valid senderID and receiverID", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with users array", async () => {
                const [testUserID, testUserID2] = await getUserID()
                const response = await request(app).post("/chat").send({
                    senderId: testUserID, receiverId: testUserID2
                })
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body).toBeInstanceOf(Object)
            })
        })

        describe("given missing senderID or receiverID", () => {
            test("should respond with a 400 status code", async () => {
                const [testUserID, testUserID2] = await getUserID()
                const bodyData = [{senderId: testUserID}, {receiverId: testUserID2}, {}]
                for (const body of bodyData) {
                    const response = await request(app).post("/chat").send(body)
                    expect(response.statusCode).toBe(400)
                }
            })
        })
    })
    describe("GET /chat", () => {
        describe("given valid userID for req.param", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with users array", async () => {
                const [testUserID, testUserID2] = await getUserID()
                const response = await request(app).get("/chat/" + testUserID)
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body).toBeInstanceOf(Object)
            })

            describe("given empty userID for req.param", () => {
                test("should respond with a 400 status code", async () => {
                    const response = await request(app).get("/chat/")
                    expect(response.statusCode).toBe(404)
                })
            })
            describe("given valid first and second userID for req.param", () => {
                test("should respond with a 200 status code, specify json in the content type header, response with users array", async () => {
                    const [testUserID, testUserID2] = await getUserID()
                    const response = await request(app).get("/chat/find/" + testUserID + "/" + testUserID2)
                    expect(response.statusCode).toBe(200)
                    expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
                    expect(response.body).toBeInstanceOf(Object)
                })
            })
        })
    })
}
