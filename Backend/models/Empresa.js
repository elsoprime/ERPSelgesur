import mongoose from 'mongoose';

const empresaSchema = mongoose.Schema({
    rut: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rubro: {
        type: String,
        required: true
    },
    instalacion: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instalacion'
    }],
    empleados: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empleado'
    }],
    usuarioAsociado: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }],
},
{
    timestamps: true
});

const Empresa = mongoose.model('Empresa', empresaSchema);
export default Empresa;
