import mongoose from 'mongoose';
import Usuario from './models/Usuario.js';
import bcrypt from 'bcrypt';

const initAdminUser = async () => {
  try {
    // Buscar si ya existe un usuario administrador
    const adminUser = await Usuario.findOne({ email: 'admin@example.com' });

    // Si no existe, crear el usuario administrador
    if (!adminUser) {
      const hashedPassword = await bcrypt.hash(process.env.USER_ADMIN_PASSWORD, 10);

      const nuevoAdmin = new Usuario({
        nombre: 'Admin',
        email: 'admin@example.com',
        password: hashedPassword,
        confirmado: true,
        token: null,
        // Otros campos del usuario administrador
      });

      await nuevoAdmin.save();
      console.log('Usuario administrador creado exitosamente.');
    } else {
      // Si el usuario existe, actualizar la contraseña si es diferente
      const passwordMatch = await bcrypt.compare(process.env.USER_ADMIN_PASSWORD, adminUser.password);

      if (!passwordMatch) {
        adminUser.password = await bcrypt.hash(process.env.USER_ADMIN_PASSWORD, 10);
        await adminUser.save();
        console.log('Contraseña del usuario administrador actualizada.');
      }

      console.log('El usuario administrador ya existe.');
    }
  } catch (error) {
    console.error('Error al inicializar el usuario administrador:', error);
  }
};

export default initAdminUser;

