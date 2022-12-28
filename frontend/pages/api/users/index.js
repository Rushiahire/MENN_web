import db from '../../../../backend/connection';
import User from '../../../../backend/models/User';

export default async function get(req,res) {
    await db.connect();
    const products = await User.find({});
    await db.connect();
    res.send(200).send(products);
}