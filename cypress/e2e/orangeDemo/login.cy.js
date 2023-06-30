import elemLogin from "../../pageObject/elemLogin"
const inputData = require("../../fixtures/orangeHrm/data.json")

describe("Login", () => {
    const elLogin = new elemLogin
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        })
        it("Successfully Login", () => {
            elLogin.inputUsername()
            elLogin.inputPassword()
            elLogin.clickLogin()
            cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        })
        it("Failed Login with wrong username", () => {
            elLogin.inputWrongUsername(inputData.invalidUser) // ngambil data dari fixture json
            elLogin.inputPassword()
            elLogin.clickLogin()
            elLogin.tickerInvalidLogin()
            elLogin.tickerInvalidLogin()
        })
        it("Failed Login with wrong password", () => {
            elLogin.inputUsername()
            elLogin.inputWrongPassword(inputData.invalidPass) // ngambil data dari fixture json
            elLogin.clickLogin()
            elLogin.tickerInvalidLogin()
        })
        it("Failed Login without input username & password", () => {
            elLogin.clickLogin()
            elLogin.errMsgUsrname()
            elLogin.errMsgPassw()
        })
})