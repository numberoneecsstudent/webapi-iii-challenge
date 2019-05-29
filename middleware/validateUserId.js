const db = require('../users/userDb')

validateUserId = async (req, res, next) => {
    try {
        const user = await db.getById(req.params.id)
        user
        ?   (req.user =user, next())
        :   res.status(404).json({message: 'invalid user id'})
    }
    catch (err) {
        res.status(500).json({message: 'Internal server error'})
    }
}

module.exports = validateUserId