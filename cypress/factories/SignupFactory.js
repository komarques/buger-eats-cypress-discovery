//var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        //var firstName = faker.name.firstName()
        //var lastName = faker.name.lastName()

        var data = {
                //name: `${firstName} ${lastName}`,
                name: 'Katlin Marques',
                cpf: cpf.generate(),
                email: 'katlinolimar@gmail.com',
                //email: faker.internet.email(firstName)
                whatsapp: '11999999999',
                address: {
    
                    postalcode: '03565030',
                    street: 'Rua Doutor Pedro Mendes',
                    number: '267',
                    details: 'Casa 7',
                    district: 'Vila Santa Teresa (Zona Leste)',
                    city_state: 'São Paulo/SP'
                }, 
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
    
        }

        return data  
    }

}