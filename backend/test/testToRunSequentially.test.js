import {testAuth} from './testauth.js'
import {testUser} from './testuser.js'
import {testChat} from "./testChat.js";
import {testMessage} from "./testMessage.js";

describe('sequentially run tests',
    () => {
        testAuth()
        testChat()
        testMessage()
        testUser()
    })