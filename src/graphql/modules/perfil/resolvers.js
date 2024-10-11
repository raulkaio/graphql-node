const db = require('../../../db')
module.exports = {
    Query: {
        perfis() {
            return db.perfis
        },
        perfil(_, args) {
            return db.perfis.find(perfil => perfil.id == args.id)
        }
    }
}