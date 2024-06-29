import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../data/db.js";

const Ventas = sequelize.define(
    "Ventas",
    {
      IdVenta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      IdCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "el id del cliente es requerido",
          }}
  
      },
      IdVendedor :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "el id del vendedor es requerido",
          }}
  
      },
      Fecha: {
        type: DataTypes.DATE,
      },
      Total: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "total es requerido",
          }}
  
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  )


  const VentasDetalles = sequelize.define(
    "VentasDetalles",
    {
      IdDetalle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      IdVenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "el id de la venta es requerido",
          }}
      },
      IdArticulo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "el id del articulo es requerido",
          }}
      },
      Cantidad: {
        type: DataTypes.INTEGER,
      },
      Precio: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  
  const Articulos = sequelize.define(
    "Articulos",
    {
      IdArticulo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      NombreArticulo: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nombre es requerido",
          },
          len: {
            args: [5, 60],
            msg: "Nombre debe ser tipo carateres, entre 5 y 60 de longitud",
          },
        },
        unique: {
          args: true,
          msg: "este Nombre ya existe en la tabla!",
        },
      },
      Precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Precio es requerido",
          },
        },
      },
      Stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Stock es requerido",
          },
        },
      },
      FechaAlta: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Fecha Alta es requerido",
          },
        },
      },
      Activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue : true,
        validate: {
          notNull: {
            args: true,
            msg: "Activo es requerido",
          },
          
        },
      },
      IdTipo :{
        type: DataTypes.INTEGER
      },
      IdProveedor:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue : true,
        validate: {
          notNull: {
            args: true,
            msg: " el id del proveedor es requerido",
          },
          
        }

      }
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  )
  

  const Clientes = sequelize.define("Clientes", {
    IdCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      DNI:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "DNI es requerido",
          } 
        }
      },
      NombreCliente :{
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nombre es requerido",
          },
          len: {
            args: [5, 60],
            msg: "Nombre debe ser tipo carateres, entre 5 y 60 de longitud",
          },
        },},
    ApellidoCliente :{
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Apellido es requerido",
          },
          len: {
            args: [5, 60],
            msg: "Apellido debe ser tipo carateres, entre 5 y 60 de longitud",
          },
        }
      },
      Idciudad : {
        type : DataTypes.INTEGER
      },
      fechaAlta :{
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            args: true,
            msg: "fecha de alta es requerido",
          }}
      }
  })


  const Vendedores = sequelize.define("Vendedores", {
    IdVendedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Legajo:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "DNI es requerido",
          } 
        }
      },
      NombreVendedor :{
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nombre es requerido",
          },
          len: {
            args: [5, 60],
            msg: "Nombre debe ser tipo carateres, entre 5 y 60 de longitud",
          },
        },},
    ApellidoVendedor :{
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Apellido es requerido",
          },
          len: {
            args: [5, 60],
            msg: "Apellido debe ser tipo carateres, entre 5 y 60 de longitud",
          },
        }
      },
      fechaAlta: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            args: true,
            msg: "fecha de alta es requerido",
          }}

      },
      FechaBaja:{
        type : DataTypes.DATE
      }
      
  })

  const Ciudades = sequelize.define("Ciudades",{
    IdCiudad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NombreCiudad:{
      type: DataTypes.STRING(30)
    }
    
  })

  const TiposArticulos = sequelize.define("TiposArticulos",{
    IdTipo:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NombreTipo:{
      type: DataTypes.STRING(30),
      validate: {
        notEmpty: {
          args: true,
          msg: "Nombre es requerido",
        },
        len: {
          args: [5, 60],
          msg: "Nombre debe ser tipo carateres, entre 5 y 30 de longitud",
        },
      },

    },
    Descripcion: {
      type: DataTypes.STRING(120)
    }

  })


const Proveedores = sequelize.define("Proveedores",{
  IdProveedor: {
    type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  NombreProveedor:{
    type: DataTypes.STRING(30),
    validate: {
      notEmpty: {
        args: true,
        msg: "Nombre es requerido",
      },
      len: {
        args: [5, 60],
        msg: "Nombre debe ser tipo carateres, entre 5 y 30 de longitud",
      },
    },

  },
})
  Ventas.hasMany(VentasDetalles, { foreignKey: "IdVenta" });
  VentasDetalles.belongsTo(Ventas, { foreignKey: "IdVenta" });

  Ventas.hasOne(Clientes, {foreignKey: "IdCliente"})
  Clientes.belongsTo(Ventas, { foreignKey: "IdCliente" });

  Ventas.hasOne(Vendedores, {foreignKey: "IdVendedor"})
  Vendedores.belongsTo(Ventas, { foreignKey: "IdVendedor" });

//VentasDetalles.hasOne(Articulos, {foreignKey: "IdArticulo"})
  //Articulos.belongsTo(VentasDetalles, { foreignKey: "IdArticulo" });

  Clientes.hasOne(Ciudades, {foreignKey: "IdCiudad"})
  Ciudades.belongsTo(Clientes, { foreignKey: "IdCiudad" });

  Articulos.hasOne(TiposArticulos, {foreignKey: "IdTipo"})
  TiposArticulos.belongsTo(Articulos, { foreignKey: "IdTipo" });
  
  /*Articulos.hasOne(Proveedores, {foreignKey: "IdProveedor"})
  Proveedores.belongsTo(Articulos, { foreignKey: "IdProveedor" });*/

  Articulos.hasOne(Proveedores, { as: 'Proveedor', foreignKey: 'IdProveedor' })
 /* Proveedores.belongsTo(Articulos, { as: 'Articulos', foreignKey: 'IdProveedor' });*/
  

  export {Ventas, VentasDetalles, Articulos, Clientes, Vendedores, Ciudades, Proveedores, TiposArticulos}