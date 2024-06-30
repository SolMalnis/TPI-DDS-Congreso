

import db from "aa-sqlite"

async function CrearBaseSiNoExiste() {
    await db.open(process.env.base)

    let existe = false;
    let res = null;
  
    existe = false;
    let sql = "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'Congresos'";
    res = await db.get(sql, []);
    if (res.contar > 0) existe = true;
    if (!existe) {
          await db.run(`
        CREATE TABLE IF NOT EXISTS TiposCongreso (
            IdTipoCongreso INTEGER PRIMARY KEY AUTOINCREMENT,
            Nombre TEXT,
            Descripción TEXT,
            Participantes INTEGER
        )
    `);

    await db.run(`
        CREATE TABLE IF NOT EXISTS Oradores (
            IdOrador INTEGER PRIMARY KEY AUTOINCREMENT,
            Nombre TEXT,
            Apellidos TEXT,
            Biografía TEXT,
            Email TEXT
        )
    `);

    await db.run(`
        CREATE TABLE IF NOT EXISTS Salas (
            IdSala INTEGER PRIMARY KEY AUTOINCREMENT,
            NombreSala TEXT,
            Capacidad INTEGER
        )
    `);

    await db.run(`
        CREATE TABLE IF NOT EXISTS Patrocinadores (
            IdPatrocinador INTEGER PRIMARY KEY AUTOINCREMENT,
            Nombre TEXT,
            Descripción TEXT,
            Email TEXT,
            Teléfono TEXT
        )
    `);

    await db.run(`
        CREATE TABLE IF NOT EXISTS Congresos (
            IdCongreso INTEGER PRIMARY KEY AUTOINCREMENT,
            NombreCongreso TEXT,
            Descripción TEXT,
            FechaCongreso DATE,
            IdTipoCongreso INTEGER,
            IdOrador INTEGER,
            IdSala INTEGER,
            IdPatrocinador INTEGER,
            FOREIGN KEY (IdTipoCongreso) REFERENCES TiposCongreso(IdTipoCongreso),
            FOREIGN KEY (IdOrador) REFERENCES Oradores(IdOrador),
            FOREIGN KEY (IdSala) REFERENCES Salas(IdSala),
            FOREIGN KEY (IdPatrocinador) REFERENCES Patrocinadores(IdPatrocinador)
        )
    `);

    await db.run(`
        CREATE TABLE IF NOT EXISTS Participantes (
            IdParticipante INTEGER PRIMARY KEY AUTOINCREMENT,
            NombreParticipante TEXT,
            ApellidoParticipante TEXT,
            FechaNacimiento DATE
        )
    `);

    await db.run(`
        CREATE TABLE IF NOT EXISTS Evaluaciones (
            IdEvaluacion INTEGER PRIMARY KEY AUTOINCREMENT,
            IdCongreso INTEGER,
            IdParticipante INTEGER,
            Puntuacion INTEGER,
            Comentarios TEXT,
            Fecha DATE,
            FOREIGN KEY (IdCongreso) REFERENCES Congresos(IdCongreso),
            FOREIGN KEY (IdParticipante) REFERENCES Participantes(IdParticipante)
        )
    `);

    await db.run(`
        CREATE TABLE IF NOT EXISTS Inscripciones (
            IdInscripcion INTEGER PRIMARY KEY AUTOINCREMENT,
            IdCongreso INTEGER,
            IdParticipante INTEGER,
            FechaInscripcion DATE,
            EstadoInscripcion TEXT,
            FOREIGN KEY (IdCongreso) REFERENCES Congresos(IdCongreso),
            FOREIGN KEY (IdParticipante) REFERENCES Participantes(IdParticipante)
        )
    `);
        const tiposCongreso = [
            ['Congreso Nacional', 'Congreso de ámbito nacional', 200],
            ['Congreso Internacional', 'Congreso de alcance internacional', 500],
            ['Seminario Local', 'Evento de pequeña escala', 50],
            ['Taller Técnico', 'Taller práctico', 75],
            ['Simposio Científico', 'Simposio sobre investigaciones científicas', 150],
            ['Congreso Educativo', 'Congreso de educación', 300],
            ['Congreso de Tecnología', 'Congreso sobre avances tecnológicos', 400],
            ['Foro Empresarial', 'Foro para empresarios', 250],
            ['Cumbre de Innovación', 'Cumbre sobre innovación', 350],
            ['Congreso de Salud', 'Congreso sobre temas de salud', 180]
        ];
        for (const tipo of tiposCongreso) {
            await db.run(`INSERT INTO TiposCongreso (Nombre, Descripcion, Participantes) VALUES (?, ?, ?)`, tipo);}


        const oradores = [
        ['Laura', 'García', 'Especialista en marketing digital', 'laura.garcia@example.com'],
        ['Juan', 'Pérez', 'Experto en biotecnología', 'juan.perez@example.com'],
        ['Ana', 'Martínez', 'Investigadora en inteligencia artificial', 'ana.martinez@example.com'],
        ['Carlos', 'López', 'Desarrollador de software', 'carlos.lopez@example.com'],
        ['María', 'Rodríguez', 'Profesora universitaria', 'maria.rodriguez@example.com'],
        ['Luis', 'Hernández', 'Ingeniero en telecomunicaciones', 'luis.hernandez@example.com'],
        ['Elena', 'González', 'Consultora de negocios', 'elena.gonzalez@example.com'],
        ['Pedro', 'Sánchez', 'Director de proyectos', 'pedro.sanchez@example.com'],
        ['Marta', 'Díaz', 'Especialista en recursos humanos', 'marta.diaz@example.com'],
        ['Jorge', 'Ruiz', 'Científico de datos', 'jorge.ruiz@example.com']
    ];
    for (const orador of oradores) {
        await db.run(`INSERT INTO Oradores (Nombre, Apellidos, Biografía, Email) VALUES (?, ?, ?, ?)`, orador);}
    
        
    }
    const salas = [
        ['Auditorio Principal', 300],
        ['Sala A', 100],
        ['Sala B', 150],
        ['Sala C', 200],
        ['Sala D', 250],
        ['Sala E', 400],
        ['Sala F', 350],
        ['Sala G', 450],
        ['Sala H', 500],
        ['Sala I', 600]
    ];
    for (const sala of salas) {
        await db.run(`INSERT INTO Salas (NombreSala, Capacidad) VALUES (?, ?)`, sala);
    }

    const patrocinadores = [
        ['Tech Corp', 'Patrocinador oficial del congreso', 'contact@techcorp.com', '555-1234'],
        ['Innovate Ltd', 'Empresa de innovación tecnológica', 'info@innovateltd.com', '555-5678'],
        ['Educa S.A.', 'Empresa de educación', 'contact@educasa.com', '555-9012'],
        ['Health Solutions', 'Empresa de salud', 'info@healthsolutions.com', '555-3456'],
        ['Green Energy', 'Empresa de energía renovable', 'contact@greenenergy.com', '555-7890'],
        ['Build It', 'Constructora', 'info@buildit.com', '555-2345'],
        ['AutoTech', 'Empresa automotriz', 'contact@autotech.com', '555-6789'],
        ['Foodies', 'Empresa de alimentos', 'info@foodies.com', '555-0123'],
        ['Travel Now', 'Agencia de viajes', 'contact@travelnow.com', '555-4567'],
        ['Finance Plus', 'Servicios financieros', 'info@financeplus.com', '555-8901']
    ];
    for (const patrocinador of patrocinadores) {
        await db.run(`INSERT INTO Patrocinadores (Nombre, Descripción, Email, Teléfono) VALUES (?, ?, ?, ?)`, patrocinador);
    }

    const participantes = [
        ['Miguel', 'Santos', '1985-07-23'],
        ['Lucía', 'Morales', '1990-02-14'],
        ['David', 'Núñez', '1982-11-30'],
        ['Sandra', 'Romero', '1995-05-12'],
        ['Pablo', 'Vega', '1988-09-25'],
        ['Rosa', 'Flores', '1993-03-17'],
        ['Andrés', 'Medina', '1986-12-10'],
        ['Carla', 'Ríos', '1992-06-08'],
        ['Fernando', 'Torres', '1987-08-19'],
        ['Eva', 'Castro', '1991-04-05']
    ];
    for (const participante of participantes) {
        await db.run(`INSERT INTO Participantes (NombreParticipante, ApellidoParticipante, FechaNacimiento) VALUES (?, ?, ?)`, participante);
    }

    const congresos = [
        ['Innovación 2024', 'Congreso sobre innovación tecnológica', '2024-10-15', 1, 1, 1, 1],
        ['Biotecnología Avanzada', 'Congreso sobre biotecnología', '2024-11-20', 2, 2, 2, 2],
        ['Marketing Digital', 'Congreso sobre estrategias de marketing digital', '2024-09-10', 3, 3, 3, 3],
        ['Inteligencia Artificial', 'Congreso sobre IA', '2024-08-05', 4, 4, 4, 4],
        ['Telecomunicaciones', 'Congreso sobre telecomunicaciones', '2024-07-15', 5, 5, 5, 5],
        ['Recursos Humanos', 'Congreso sobre gestión de RRHH', '2024-06-20', 6, 6, 6, 6],
        ['Ciencia de Datos', 'Congreso sobre ciencia de datos', '2024-12-10', 7, 7, 7, 7],
        ['Construcción Sostenible', 'Congreso sobre técnicas de construcción sostenible', '2024-05-18', 8, 8, 8, 8],
        ['Industria Automotriz', 'Congreso sobre innovaciones en la industria automotriz', '2024-04-22', 9, 9, 9, 9],
        ['Salud y Bienestar', 'Congreso sobre salud y bienestar', '2024-03-30', 10, 10, 10, 10]
    ];
    for (const congreso of congresos) {
        await db.run(`INSERT INTO Congresos (NombreCongreso, Descripción, FechaCongreso, IdTipoCongreso, IdOrador, IdSala, IdPatrocinador) VALUES (?, ?, ?, ?, ?, ?, ?)`, congreso);
    }

    const inscripciones = [
        [1, 1, '2024-09-01', 'aceptado'],
        [2, 2, '2024-10-01', 'aceptado'],
        [3, 3, '2024-08-20', 'preinscripcion'],
        [4, 4, '2024-07-01', 'aceptado'],
        [5, 5, '2024-06-01', 'aceptado'],
        [6, 6, '2024-05-01', 'preinscripcion'],
        [7, 7, '2024-04-01', 'aceptado'],
        [8, 8, '2024-03-01', 'aceptado'],
        [9, 9, '2024-02-01', 'preinscripcion'],
        [10, 10, '2024-01-01', 'aceptado']
    ];
    for (const inscripcion of inscripciones) {
        await db.run(`INSERT INTO Inscripciones (IdCongreso, IdParticipante, FechaInscripcion, EstadoInscripcion) VALUES (?, ?, ?, ?)`, inscripcion);
    }

    const evaluaciones = [
        [1, 1, 5, 'Excelente congreso', '2024-10-16'],
        [2, 2, 4, 'Muy buen contenido', '2024-11-21'],
        [3, 3, 3, 'Bueno, pero puede mejorar', '2024-09-11'],
        [4, 4, 5, 'Fantástico', '2024-08-06'],
        [5, 5, 4, 'Interesante', '2024-07-16'],
        [6, 6, 5, 'Muy educativo', '2024-06-21'],
        [7, 7, 3, 'Aceptable', '2024-12-11'],
        [8, 8, 4, 'Buena información', '2024-05-19'],
        [9, 9, 5, 'Inspirador', '2024-04-23'],
        [10, 10, 4, 'Muy útil', '2024-03-31']
    ];
    for (const evaluacion of evaluaciones) {
        await db.run(`INSERT INTO Evaluaciones (IdCongreso, IdParticipante, Puntuacion, Comentarios, Fecha) VALUES (?, ?, ?, ?, ?)`, evaluacion);
    }

    db.close();
    console.log('Base de datos configurada y cerrada.')
}

CrearBaseSiNoExiste()

export default CrearBaseSiNoExiste