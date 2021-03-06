const { response } = require("../../../app");

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

    testId(req, res){
        let params = req.params
        
        res.json({
            id: parseInt(params.id)
        });
    }
}

module.exports = new MainController();