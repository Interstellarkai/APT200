import request from 'supertest'
import app from '../app.js'

// Test on the HTTP interface which is the status code and the content of the response
// Because we're using ES modules, so we have to specify in the CLI "NODE_OPTIONS=--experimental-vm-modules npx jest" to run the test

export const testMessage = () => {

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

    async function getChatID(testUserID, testUserID2) {
        const response = await request(app).get("/chat/find/" + testUserID + "/" + testUserID2)
        return response.body._id
    }

    describe("POST /message", () => {
        describe("given valid chatID, senderID, and text", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with users array", async () => {
                let [testUserID, testUserID2] = await getUserID()
                let chatID = await getChatID(testUserID, testUserID2)
                const response = await request(app).post("/message").send({
                    chatId: chatID, senderId: testUserID, text: "testing message"
                })
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body).toBeInstanceOf(Object)
            })
        })

        // describe("given missing chatID, senderID, or text", () => {
        //     test("should respond with a 400 status code", async () => {
        //         let [testUserID, testUserID2] = await getUserID()
        //         let chatID = await getChatID(testUserID, testUserID2)
        //         const bodyData = [{chatId: chatID}, {senderId: testUserID}, {text: ""}, {}]
        //         for (const body of bodyData) {
        //             const response = await request(app).post("/message").send(body)
        //             console.log(response)
        //             expect(response.statusCode).toBe(400)
        //         }
        //     })
        // })
    })

    describe("GET /message", () => {
        describe("given valid chatID", () => {
            test("should respond with a 200 status code, specify json in the content type header, response with users array", async () => {
                let [testUserID, testUserID2] = await getUserID()
                let chatID = await getChatID(testUserID, testUserID2)
                const response = await request(app).get("/message/" + chatID)
                expect(response.statusCode).toBe(200)
                expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
                expect(response.body).toBeInstanceOf(Object)
            })
        })

        describe("missing chatID", () => {
            test("should respond with a 404 status code", async () => {
                const response = await request(app).get("/message")
                expect(response.statusCode).toBe(404)
            })
        })
    })
}
