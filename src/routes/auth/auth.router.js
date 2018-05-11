import express from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';


const users = [
    { id:'UID002' , mail: 'samir@mail.ru', username: 'samir', password:'12345' }
];

const route = () => {
    const router = new express.Router();
    
    router.route('/login').post((req, res) => {
        const { mail, password } = req.body;
        const user = users.find((users) => users.mail === mail);

        if(!user) {
            res.send({
                status: true,
                message: 'Mail doso not find'
            });
        }else{
            if(user.password === password ) {
                const token = jwt.sign({userId: user.id}, config.jwtSecret);
                res.send({
                    status: true,
                    token: token
                });
            }else{
                res.send({
                    status: false,
                    message: 'Password wrong'
                });
            }
        }
    });

    return router;
};

export default {
    route,
    routerPrefix : `/${config.version}/auth`
}