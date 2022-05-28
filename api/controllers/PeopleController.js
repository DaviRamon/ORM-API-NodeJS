const database = require('../models'); // vai direto ao arquivo index.js dentro dessa pasta. 


class PeopleController {
     static async getAllPeople(req, res) {
          try {

               const allPeople = await database.People.findAll(); // findall é um método do sequelize que faz igual um select * from.. traz tudo.;
               return res.status(200).json(allPeople);

          } catch (error) {
               console.error(error);
               return res.status(500).json(error.message);
          }
     }
}

module.exports = PeopleController;