class loginElem{
    username = "[name='username']"
    password = "[name='password']"
    btnLogin = ".oxd-button"
    tickerInvalidCredentials = ".oxd-alert"
    errMsgUsername = ".oxd-form > div:nth-of-type(1) .oxd-text"
    errMsgPassword = ".oxd-form > div:nth-of-type(2) .oxd-text"

    inputUsername(){
        cy.get(this.username).type("Admin")
    }
    inputPassword(){
        cy.get(this.password).type("admin123")
    }
    clickLogin(){
        cy.get(this.btnLogin).click()
    }
    inputWrongUsername(user){
        cy.get(this.username).type(user)
    }
    inputWrongPassword(password){
        cy.get(this.password).type(password)
    }
    tickerInvalidLogin(){
        cy.get(this.tickerInvalidCredentials)
        .should("be.visible")
        .should("contain.text", "Invalid credentials")
    }
    errMsgUsrname(){
        cy.get(this.errMsgUsername)
        .should("be.visible")
        .should("contain.text", "Required")
    }
    errMsgPassw(){
        cy.get(this.errMsgPassword)
        .should("be.visible")
        .should("contain.text", "Required")
    }
}

export default loginElem
