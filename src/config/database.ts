import mongoose from 'mongoose';

const connectDB = async () => {
    
  const dbUri = process.env.CONNECT_DB;
  if (!dbUri) {
    throw new Error('La variable d\'environnement CONNECT_DB est manquante');
  }

  try {
    await mongoose.connect(dbUri);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
