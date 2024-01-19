import mongoose from 'mongoose';

const connectDB=(url)=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url)
        .then(()=>console.log('mongodb connection'))
        .catch((err)=>console.error(err))
}

export default connectDB