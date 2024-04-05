const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('ProyectoWeb', 'root', 'SQL1997.', {
  host: 'localhost',
  dialect: 'mysql'
});

// Definir modelos
const TelefonoDepartamento = sequelize.define('TelefonoDepartamento', {
  Numero: {
    type: DataTypes.STRING(15)
  }
});

const Cuatrimestre = sequelize.define('Cuatrimestre', {
  Anho: {
    type: DataTypes.INTEGER(4)
  },
  Periodo: {
    type: DataTypes.ENUM('Enero-Abril', 'Mayo-Agosto', 'Septiembre-Diciembre'),
    allowNull: false
  }
});

const Actividad = sequelize.define('Actividad', {
  Nombre: {
    type: DataTypes.STRING(50)
  },
  Descripcion: {
    type: DataTypes.STRING(350)
  },
  Disponibilidad: {
    type: DataTypes.BOOLEAN
  }
});

const Sede = sequelize.define('Sede', {
  Nombre: {
    type: DataTypes.STRING(25)
  }
});

const Puesto = sequelize.define('Puesto', {
  Nombre: {
    type: DataTypes.STRING(255)
  }
});

const Dia = sequelize.define('Dia', {
  Dia: {
    type: DataTypes.ENUM('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'),
    allowNull: false
  }
});

const Profesor = sequelize.define('Profesor', {
  

  Nombre: {
    type: DataTypes.STRING(40)
  },
  PrimerApellido: {
    type: DataTypes.STRING(30)
  },
  SegundoApellido: {
    type: DataTypes.STRING(30)
  },
  Correo: {
    type: DataTypes.STRING(150)
  },
  Celular: {
    type: DataTypes.STRING(15)
  },
  Extension: {
    type: DataTypes.STRING(15)
  },
 
});

const CambioDisponibilidad = sequelize.define('CambioDisponibilidad', {
  Fecha: {
    type: DataTypes.DATE
  },
  HoraInicio: {
    type: DataTypes.TIME
  },
  HoraFinal: {
    type: DataTypes.TIME
  },
  Ubicacion: {
    type: DataTypes.STRING(350)
  }
});

const Disponibilidad = sequelize.define('Disponibilidad', {
  
  Ubicacion: {
    type: DataTypes.STRING(350)
  },
  HoraInicio: {
    type: DataTypes.TIME
  },
  HoraFinal: {
    type: DataTypes.TIME
  },
});


Profesor.hasMany(Puesto);
Puesto.belongsTo(Profesor);

Profesor.hasMany(TelefonoDepartamento);
TelefonoDepartamento.belongsTo(Profesor);



Disponibilidad.hasMany(Actividad);
Actividad.belongsTo(Disponibilidad);

Disponibilidad.hasMany(Cuatrimestre);
Cuatrimestre.belongsTo(Disponibilidad);

Disponibilidad.hasMany(Sede);
Sede.belongsTo(Disponibilidad);

Disponibilidad.hasMany(Dia);
Dia.belongsTo(Disponibilidad);

Disponibilidad.hasMany(Profesor);
Profesor.belongsTo(Disponibilidad);

Actividad.hasOne(CambioDisponibilidad);
CambioDisponibilidad.belongsTo(Actividad);



CambioDisponibilidad.hasMany(Cuatrimestre);
Cuatrimestre.belongsTo(CambioDisponibilidad);