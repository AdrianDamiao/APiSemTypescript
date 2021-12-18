class MainController{

    main(req, res){
        return res.status(200).json({
            status: 'ok',
            message:'Index de Main'
        });
    }
}

module.exports = new MainController();