class MainController{

    main(req, res){
        return res.status(200).json({
            status: 'ok',
            message:'Work In Progress'
        });
    }

    test(req, res){
        return res.status(200).json({
            status: 'ok',
            message: 'Test'
        })
    }
}

module.exports = new MainController();