import elemLogin from "../../pageObject/elemLogin"

describe("Login", () => {
    const elLogin = new elemLogin
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        })
        it("Successfully Login", () => {
            elLogin.inputUsername()
            elLogin.inputPassword()
            cy.get(elLogin.btnLogin).click()
            cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        })
        it("Failed Login with wrong username", () => {
            cy.get("[name='username']").type("usersalah")
            cy.get("[name='password']").type("admin123")
            cy.get(".oxd-button").click()
            cy.get(".oxd-alert").should("be.visible")
            cy.get(".oxd-alert").should("contain.text", "Invalid credentials")
        })
        it("Failed Login with wrong password", () => {
            cy.get("[name='username']").type("Admin")
            cy.get("[name='password']").type("passwordsalah")
            cy.get(".oxd-button").click()
            cy.get(".oxd-alert").should("be.visible")
            cy.get(".oxd-alert").should("contain.text", "Invalid credentials")
        })
        it("Failed Login without input username & password", () => {
            cy.get(".oxd-button").click()
            cy.get(".oxd-form > div:nth-of-type(1) .oxd-text").should("be.visible")
            cy.get(".oxd-form > div:nth-of-type(1) .oxd-text").should("contain.text", "Required")
            cy.get(".oxd-form > div:nth-of-type(2) .oxd-text").should("be.visible")
            cy.get(".oxd-form > div:nth-of-type(2) .oxd-text").should("contain.text", "Required")
        })
})