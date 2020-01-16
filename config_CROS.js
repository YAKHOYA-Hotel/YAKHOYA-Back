// module.exports={
    
//     activateCors:(req, res, next)=> {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//         next();
       
//     }
// }

module.exports={
    
    activateCors:(req, res, next)=> {
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader ("Access-Control-Allow-Headers", "X-Requested-With, content-type");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Max-Age", "1800");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "*");
      
        //res.Header("Access-Control-Allow-Origin","http://localhost:3030/user/login");
        
        next();
       
    }
}