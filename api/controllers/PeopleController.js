const database = require('../models'); // vai direto ao arquivo index.js dentro dessa pasta. 


class PeopleController {


     static async getAllPeople(req, res) {

          try {
               const allPeople = await database.People.findAll(); // findall é um método do sequelize que faz igual um select * from.. traz tudo.;
               return res.status(200).json(allPeople);

          } catch (error) {
               return res.status(500).json(error.message);
          }
     }


     static async getOnePerson(req, res) {

          const { id } = req.params;

          try {                    // primeiro ID é a coluna com o nome ID
               const onePerson = await database.People.findOne({ where: { id: Number(id) } }) // findone é um método do sequelize que fbusca somente 1 registro. passado pelo ID. 
               return res.status(200).json(onePerson);

          } catch (error) {
               return res.status(500).json(error.message);
          }
     }


     static async createPerson(req, res) {

          const newPerson = req.body // armazena os dadoso do corpo da requisição

          try {
               const createdNewPerson = await database.People.create(newPerson);
               return res.status(200).json(createdNewPerson);

          } catch (error) {
               
               return res.status(500).json(error.message);
          }
     }


     static async updatePerson(req, res) {

          
          const { id } = req.params; // vou  passa por aqui o que deseja-se atualizar. Neste caso o ID>.
          const newInfos = req.body

          try {
               await database.People.update(newInfos, { where: {id: Number(id)}}) //.update(newInfos, { where: { id: Number(id)  }})
               const updatedPerson = await database.People.findOne( { where: { id: Number(id) }})
               return res.status(200).json(updatedPerson);


          } catch (error) {
               console.log(error)
               return res.status(500).json(error);
          }

     }









}























module.exports = PeopleController;