const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

const URI = 'mongodb+srv://marcoanx12_db_user:nrLUNnvob7FKnNik@incluyeme1.fqz87is.mongodb.net/basepersona?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(() => console.log('¡Conectado exitosamente a MongoDB Atlas (Nube)!'))
  .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));


const usuarioSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  identificacion: { type: String }, 
  birthDate: { type: String },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, required: true }, 
  avatar: { type: String, default: '' },
  grupo_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Grupo' }
});
const Usuario = mongoose.model('Usuario', usuarioSchema);

const grupoSchema = new mongoose.Schema({
  grupo: { type: String, required: true },
  teacher: { type: String },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }]
});
const Grupo = mongoose.model('Grupo', grupoSchema);

const actividadSchema = new mongoose.Schema({
  grupo: String,
  actividad: String,
  alumno: String
});
const Actividad = mongoose.model('Actividad', actividadSchema);


app.post('/user/create', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.json({ ok: true, userDB: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Error', error });
  }
});

app.post('/user/login', async (req, res) => {
  try {
    const { userName, password } = req.body;
    const userDB = await Usuario.findOne({ userName, password });

    if (userDB) {
      res.json({ ok: true, token: `token-${userDB._id}`, type: userDB.type, user: userDB });
    } else {
      res.json({ ok: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ ok: false });
  }
});

app.get('/user/consult', async (req, res) => {
  try {
    const token = req.headers['x-token'];
    const id = token.split('-')[1];
    const userDB = await Usuario.findById(id);
    res.json({ ok: true, usuario: userDB });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.get('/user/consult/:id', async (req, res) => {
  try {
    const userDB = await Usuario.findById(req.params.id);
    res.json({ ok: true, userDB });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.get('/user/consults/:nombre', async (req, res) => {
  try {
    const userDB = await Usuario.findOne({ fullName: req.params.nombre });
    res.json({ ok: true, userDB });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.get('/user/type/:type', async (req, res) => {
  try {
    const users = await Usuario.find({ type: req.params.type });
    res.json({ ok: true, users });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.post('/user/update/user', async (req, res) => {
  try {
    const user = await Usuario.findByIdAndUpdate(req.body._id, req.body, { new: true });
    res.json({ ok: true, userDB: user });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.delete('/user/delete/:id', async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    res.json({ ok: false });
  }
});

// Ruta real para actualizar el avatar en MongoDB Atlas
app.post('/user/upload', async (req, res) => {
  try {
    const token = req.headers['x-token'];
    const avatarBase64 = req.body.avatar;

    if (!token) {
      return res.status(401).json({ ok: false, message: 'No autorizado' });
    }

    const id = token.split('-')[1];
    const userDB = await Usuario.findByIdAndUpdate(
      id, 
      { avatar: avatarBase64 }, 
      { new: true }
    );

    if (!userDB) {
      return res.status(404).json({ ok: false, message: 'Usuario no encontrado' });
    }

    res.json({ ok: true, userDB });
  } catch (error) {
    console.error('Error al subir avatar:', error);
    res.status(500).json({ ok: false, error });
  }
});

app.post('/user/actualizaAvatar', (req, res) => res.json({ ok: true, tokenUser: 'token-avatar', userDB: { type: 'T' } }));


app.post('/group/agregar', async (req, res) => {
  try {
    const nuevoGrupo = new Grupo(req.body);
    await nuevoGrupo.save();
    res.json({ ok: true, grupoDB: nuevoGrupo });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.get('/group/verGrupos', async (req, res) => {
  try {
    const grupos = await Grupo.find();
    res.json({ ok: true, grupos });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.get('/group/verGrupo/:teacher', async (req, res) => {
  try {
    const grupos = await Grupo.find({ teacher: req.params.teacher });
    res.json({ ok: true, grupos });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.get('/group/ver/:id', async (req, res) => {
  try {
    const grupo = await Grupo.findById(req.params.id);
    res.json({ ok: true, grupo });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.post('/group/asignaGrupo', async (req, res) => {
  try {
    const { _id, students } = req.body;
    await Grupo.findByIdAndUpdate(_id, { $push: { students: students } });
    res.json({ ok: true });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.delete('/grupo/delete/:id', async (req, res) => {
  try {
    await Grupo.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.post('/actividadAlumno/agregarActividad', async (req, res) => {
  try {
    const nuevaActividad = new Actividad(req.body);
    await nuevaActividad.save();
    res.json({ ok: true });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.get('/group/verActivities/:grupo', async (req, res) => {
  try {
    const actividades = await Actividad.find({ grupo: req.params.grupo });
    res.json({ ok: true, actividades });
  } catch (error) {
    res.json({ ok: false });
  }
});

app.post('/group/eliminarAlumno', async (req, res) => {
  try {
    const { grupo, alumno } = req.body;
    await Grupo.findByIdAndUpdate(grupo, { $pull: { students: alumno } });
    res.json({ ok: true, message: 'Alumno eliminado del grupo con éxito' });
  } catch (error) {
    res.status(500).json({ ok: false, error });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});