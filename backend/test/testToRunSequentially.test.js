import {testAuth} from './testAuth.js'
import {testUser} from './testUser.js'
import {testChat} from "./testChat.js";
import {testMessage} from "./testMessage.js";

describe('sequentially run tests',
    () => {
        testAuth()
        testChat()
        testMessage()
        testUser()
    })