import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

    // beforeEach(function(){

    //     cy.fixture('deliver').then((d)=>{

    //         this.deliver = d //this: palavra reservada para criar uma variável de contexto

    //     })

    // })

    it('Usuário deve se tornar um entregador', function() {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
 
    })

    it('CPF incorreto', function() {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')        
    
    })

    it('Email incorreto', function() {

        var deliver = signupFactory.deliver()

        deliver.email = 'katlinolimar.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')        
    
    })

    context('Campos Requeridos', function(){

        const messages = [

            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
    
        ]

        before(function(){

            signup.go()
            signup.submit()

        })

        messages.forEach(function(msg){

            it(`${msg.field} is required`, function(){
                signup.alertMessageShouldBe(msg.output)

            })
    
    
        })

    })

    
    
    // it('Campos Obrigatórios', function() {

    //     signup.go()
    //     signup.submit()
    //     signup.alertMessageShouldBe('É necessário informar o nome')
    //     signup.alertMessageShouldBe('É necessário informar o CPF')
    //     signup.alertMessageShouldBe('É necessário informar o email')
    //     signup.alertMessageShouldBe('É necessário informar o CEP')
    //     signup.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signup.alertMessageShouldBe('Selecione o método de entrega')
    //     signup.alertMessageShouldBe('Adicione uma foto da sua CNH')


    // })

})