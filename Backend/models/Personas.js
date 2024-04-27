import mongoose from 'mongoose';

// Define el esquema de Persona
const personaSchema = new mongoose.Schema({
    rut: { type: String, required: true, unique: true },
    nombres: { type: String, required: true },
    apellidoPaterno: { type: String, required: true },
    apellidoMaterno: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    sexo: { type: String, enum: ['Masculino', 'Femenino', 'Otro'], required: true },
    nivelEstudios: { type: String, required: true  },
    licenciaConductor: { type: Boolean },
    estadoCivil: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    region: { type: String },
    provincia: { type: String },
    comuna: { type: String },
    asignacion: {type:string },
    fechaContrato: { type: Date },
    lugarTrabajo: { type: String },
    tipoContrato: { type: String },
    cargo: { type: String },
    afp: { type: String },
    previsionSalud: { type: String },
    banco: { type: String }
});

// Crea el modelo Persona utilizando el esquema definido
const Persona = mongoose.model('Persona', personaSchema);

// Validador para verificar el formato de Rut (DNI)
personaSchema.path('rut').validate(function(value) {
    // Implementa la lógica para validar el Rut (DNI) aquí
    // Retorna true si el Rut es válido, de lo contrario retorna false
    // Por ejemplo, puedes utilizar una librería como 'rut.js' para validar el Rut
    return validarRut(value); // Implementa esta función según tus necesidades
  }, 'Rut (DNI) inválido');
  

module.exports = Persona;