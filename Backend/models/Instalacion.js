import mongoose from 'mongoose';

const instalacionSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    
    // Otros campos relacionados con la sucursal...
});

const Instalacion = mongoose.model('Instalacion', instalacionSchema);
export default Sucursal;