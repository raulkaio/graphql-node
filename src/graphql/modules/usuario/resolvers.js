const db = require('../../../db')
module.exports = {
    Query: {
        usuarios() {
            return db.usuarios
        },
        usuario(_, args) {
            let usuario = db.usuarios.find(usuario => usuario.id == args.id)
            if (args.id && usuario) return usuario
            else return db.usuarios.find(usuario => usuario.nome == args.nome)
        },
    }
}