class UsersController{

    main(req, res){
        return res.status(200).json({
            status: 'ok',
            message: 'Index de Usuarios'
        })
    }
}

module.exports = new UsersController();