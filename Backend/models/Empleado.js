import mongoose from 'mongoose';

const empleadoSchema = mongoose.Schema({
    rut: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Femenino', 'Otro'],
        required: true
    },
    direccion: {
        type: String,
        required: false
    },
    telefono: {
        type: String,
        required: false
    },
    region: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    nivelEstudios: {
        type: String,
        required: true
    },
    licenciaConducir: {
        type: Boolean,
        default: false
    },
    fechaContrato: {
        type: Date,
        required: true
    },
    afp: String,
    isapre: String,
    banco: String,
    instalacionAsignada: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instalacion'
    },
    empresaAsignada: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa'
    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    }
},
    {
        timestamps: true,
    }
);

const Empleado = mongoose.model('Empleado', empleadoSchema);
export default Empleado;
