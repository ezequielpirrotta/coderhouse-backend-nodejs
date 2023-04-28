import moongose from 'mongoose';

const schema = new moongose.Schema({
    name:{
        type: String,
        unique: true
    },
    products: []
});

const businessModel = moongose.model('business', schema);
export default businessModel;