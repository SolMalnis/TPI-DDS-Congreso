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

    await db.run(`INSERT INTO TiposCongreso VALUES 
    (1,'Congreso Nacional', 'Congreso de ámbito nacional', 200),
    (2,'Congreso Internacional', 'Congreso de alcance internacional', 500),
    (3,'Seminario Local', 'Evento de pequeña escala', 50),
    (4,'Taller Técnico', 'Taller práctico', 75),
    (5,'Simposio Científico', 'Simposio sobre investigaciones científicas', 150),
    (6,'Congreso Educativo', 'Congreso de educación', 300),
    (7,'Congreso de Tecnología', 'Congreso sobre avances tecnológicos', 400),
    (8'Foro Empresarial', 'Foro para empresarios', 250),
    (9,'Cumbre de Innovación', 'Cumbre sobre innovación', 350),
    (10,'Congreso de Salud', 'Congreso sobre temas de salud', 180)`)



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
  
        await db.run(`INSERT INTO Oradores VALUES
        (1,'Laura', 'García', 'Especialista en marketing digital', 'laura.garcia@example.com'),
        (2,'Juan', 'Pérez', 'Experto en biotecnología', 'juan.perez@example.com'),
        (3,'Ana', 'Martínez', 'Investigadora en inteligencia artificial', 'ana.martinez@example.com'),
        (4,'Carlos', 'López', 'Desarrollador de software', 'carlos.lopez@example.com'),
        (5,'María', 'Rodríguez', 'Profesora universitaria', 'maria.rodriguez@example.com'),
        (6,'Luis', 'Hernández', 'Ingeniero en telecomunicaciones', 'luis.hernandez@example.com'),
        (7,'Elena', 'González', 'Consultora de negocios', 'elena.gonzalez@example.com'),
        (8,'Pedro', 'Sánchez', 'Director de proyectos', 'pedro.sanchez@example.com'),
        (9,'Marta', 'Díaz', 'Especialista en recursos humanos', 'marta.diaz@example.com'),
        (10,'Jorge', 'Ruiz', 'Científico de datos', 'jorge.ruiz@example.com')
             `);


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
        
                await db.run(`INSERT INTO Salas VALUES 
                (1,'Auditorio Principal', 300],
                (2,'Sala A', 100),
                (3,'Sala B', 150),
                (4,'Sala C', 200),
                (5,'Sala D', 250),
                (6,'Sala E', 400),
                (7,'Sala F', 350),
                (8,'Sala G', 450),
                (9,'Sala H', 500),
                (10,'Sala I', 600)
                    `);
            

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
await db.run(`INSERT INTO Patrocinadores  VALUES 
  (1,'Tech Corp', 'Patrocinador oficial del congreso', 'contact@techcorp.com', '555-1234'),
(2,'Innovate Ltd', 'Empresa de innovación tecnológica', 'info@innovateltd.com', '555-5678'),
                        (3,'Educa S.A.', 'Empresa de educación', 'contact@educasa.com', '555-9012'),
                        (4,'Health Solutions', 'Empresa de salud', 'info@healthsolutions.com', '555-3456'),
                        (5,'Green Energy', 'Empresa de energía renovable', 'contact@greenenergy.com', '555-7890'),
                        (6,'Build It', 'Constructora', 'info@buildit.com', '555-2345'),
                        (7,'AutoTech', 'Empresa automotriz', 'contact@autotech.com', '555-6789'),
                        (8,'Foodies', 'Empresa de alimentos', 'info@foodies.com', '555-0123'),
                        (9,'Travel Now', 'Agencia de viajes', 'contact@travelnow.com', '555-4567'),
                        (10,'Finance Plus', 'Servicios financieros', 'info@financeplus.com', '555-8901')    `);

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
        
await db.run(`INSERT INTO Participantes  VALUES 
    (1,'Miguel', 'Santos', '1985-07-23'),
    (2,'Lucía', 'Morales', '1990-02-14'),
    (3,'David', 'Núñez', '1982-11-30'),
    (4,'Sandra', 'Romero', '1995-05-12'),
    (5,'Pablo', 'Vega', '1988-09-25'),
    (6,'Rosa', 'Flores', '1993-03-17'),
    (7,'Andrés', 'Medina', '1986-12-10'),
    (8,'Carla', 'Ríos', '1992-06-08'),
    (9,'Fernando', 'Torres', '1987-08-19'),
    (10,'Eva', 'Castro', '1991-04-05')   
  `);


  const congresos = [
    ['Innovación 2024', 'Congreso sobre innovación tecnológica', '2024-10-15', 1, 1, 1, 1],
    ['Biotecnología Avanzada', 'Congreso sobre biotecnología', '2024-11-20', 2, 2, 2, 2],
    ['IA y Futuro', 'Simposio sobre inteligencia artificial', '2024-09-05', 5, 3, 3, 3],
    ['Desarrollo Web', 'Taller práctico de desarrollo web', '2024-08-18', 4, 4, 4, 4],
    ['Educación 2.0', 'Congreso sobre innovaciones educativas', '2024-07-30', 6, 5, 5, 5],
    ['Tecnología y Negocios', 'Foro sobre impacto de la tecnología en los negocios', '2024-09-25', 7, 6, 6, 6],
    ['Salud Global', 'Congreso sobre salud global', '2024-11-10', 9, 7, 7, 7],
    ['Energías Renovables', 'Cumbre sobre energías renovables', '2024-12-05', 10, 8, 8, 8],
    ['Emprendimiento', 'Foro empresarial sobre emprendimiento', '2024-08-30', 8, 9, 9, 9],
    ['Gastronomía Sostenible', 'Simposio sobre gastronomía sostenible', '2024-10-01', 3, 10, 10, 10]
];

    await db.run(`INSERT INTO Congresos VALUES 
    (1,Innovación 2024', 'Congreso sobre innovación tecnológica', '2024-10-15', 1, 1, 1, 1),
    (2,'Biotecnología Avanzada', 'Congreso sobre biotecnología', '2024-11-20', 2, 2, 2, 2),
    (3,'IA y Futuro', 'Simposio sobre inteligencia artificial', '2024-09-05', 5, 3, 3, 3),
    (4,'Desarrollo Web', 'Taller práctico de desarrollo web', '2024-08-18', 4, 4, 4, 4),
    (5,'Educación 2.0', 'Congreso sobre innovaciones educativas', '2024-07-30', 6, 5, 5, 5),
    (6,'Tecnología y Negocios', 'Foro sobre impacto de la tecnología en los negocios', '2024-09-25', 7, 6, 6, 6),
    (7,'Salud Global', 'Congreso sobre salud global', '2024-11-10', 9, 7, 7, 7),
    (8,'Energías Renovables', 'Cumbre sobre energías renovables', '2024-12-05', 10, 8, 8, 8),
    (9,'Emprendimiento', 'Foro empresarial sobre emprendimiento', '2024-08-30', 8, 9, 9, 9),
    (10,'Gastronomía Sostenible', 'Simposio sobre gastronomía sostenible', '2024-10-01', 3, 10, 10, 10)
        `);
 const evaluaciones = [
            [1, 1, 4, 'Muy interesante', '2024-10-16'],
            [2, 2, 8, 'Excelente ponencia', '2024-11-21'],
            [3, 3, 6, 'Gran contenido', '2024-09-06'],
            [4, 4, 9, 'Muy útil', '2024-08-19'],
            [5, 5, 7, 'Buenos debates', '2024-07-31'],
            [6, 6, 5, 'Interesante perspectiva', '2024-09-26'],
            [7, 7, 10, 'Relevante para mi área', '2024-11-11'],
            [8, 8, 3, 'Inspirador', '2024-12-06'],
            [9, 9, 2, 'Grandes ideas', '2024-08-31'],
            [10, 10, 1, 'Delicioso y sostenible', '2024-10-02']
        ];

await db.run(`INSERT INTO Evaluaciones  VALUES 
    (1,1, 1, 4, 'Muy interesante', '2024-10-16'),
    (2,2, 2, 8, 'Excelente ponencia', '2024-11-21'),
    (3,3, 3, 6, 'Gran contenido', '2024-09-06'),
    (4,4, 4, 9, 'Muy útil', '2024-08-19'),
    (5,5, 5, 7, 'Buenos debates', '2024-07-31'),
    (6,6, 6, 5, 'Interesante perspectiva', '2024-09-26'),
    (7,7, 7, 10, 'Relevante para mi área', '2024-11-11'),
    (8,8, 8, 3, 'Inspirador', '2024-12-06'),
    (9,9, 9, 2, 'Grandes ideas', '2024-08-31'),
    (10,10, 10, 1, 'Delicioso y sostenible', '2024-10-02')`);
    
    const inscripciones = [
        [1, 1, 1, '2024-10-01', 'Confirmada'],
        [2, 2, 2, '2024-10-01', 'Confirmada'],
        [3, 3, 3, '2024-10-01', 'En espera'],
        [4, 4, 4, '2024-10-01', 'Confirmada'],
        [5, 5, 5, '2024-10-01', 'En espera'],
        [6, 6, 6, '2024-10-01', 'Confirmada'],
        [7, 7, 7, '2024-10-01', 'En espera'],
        [8, 8, 8, '2024-10-01', 'Confirmada'],
        [9, 9, 9, '2024-10-01', 'En espera'],
        [10, 10, 10, '2024-10-01', 'Confirmada']
    ];

await db.run(`INSERT INTO Inscripciones  VALUES 
        (1,1, 1, 1, '2024-10-01', 'Confirmada'),
        (2,2, 2, 2, '2024-10-01', 'Confirmada'),
        (3,3, 3, 3, '2024-10-01', 'En espera'),
        (4,4, 4, 4, '2024-10-01', 'Confirmada'),
        (5,5, 5, 5, '2024-10-01', 'En espera'),
        (6,6, 6, 6, '2024-10-01', 'Confirmada'),
        (7,7, 7, 7, '2024-10-01', 'En espera'),
        (8,8, 8, 8, '2024-10-01', 'Confirmada'),
        (9,9, 9, 9, '2024-10-01', 'En espera'),
        (10, 10, 10, 10, '2024-10-01', 'Confirmada')
    `);

//FOREIGN KEY (IdSala) REFERENCES Salas(IdSala),