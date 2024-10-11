const db = require('../../../db')
module.exports = {
    Query: {
        produtos() {
            return db.produtos
        },
    }
}