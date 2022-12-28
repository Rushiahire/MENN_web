import User from '../../../../backend/models/User';
import db from '../../../../backend/connection';

export default async function get (req,res) {
    console.log("api req body in frontend",req.body)
    if (req.method === "POST") {
        await db.connect();

        const newUser = User({
            name : req.body.name,
            email : req.body.email,
            password:req.body.password
        })

        const user = await newUser.save();

        res.status(200).send({
            name: user.name,
            email: user.email
        });
    }
}

