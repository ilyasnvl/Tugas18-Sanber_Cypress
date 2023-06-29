class loginElem{
    username = "[name='username']"
    password = "[name='password']"
    btnLogin = ".oxd-button"

    inputUsername(){
        cy.get(this.username).type("Admin")
    }
    inputPassword(){
        cy.get(this.password).type("admin123")
    }
}

export default loginElem
