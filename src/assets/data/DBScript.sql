-- Drop Tables if they exist
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE system.historial_visualizacion CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.contenido_subcategorias CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.subcategorias CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.categorias CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.contenido_descripciones CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.descripciones CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.contenido_generos CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.generos CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.contenido_estudios CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.estudios CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.contenido_directores CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.directores CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.contenido_actores CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.actores CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.contenido CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.usuario_parametros CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.usuarios CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.parametros CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.planes_subscripcion CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.roles_permisos CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.permisos CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.roles CASCADE CONSTRAINTS';
    EXECUTE IMMEDIATE 'DROP TABLE system.ubicaciones CASCADE CONSTRAINTS';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -942 THEN
            RAISE;
        END IF;
END;
/

-- Create Tables
-- Tabla Roles
CREATE TABLE system.roles (
    id_rol NUMBER PRIMARY KEY,
    nombre_rol VARCHAR2(100) NOT NULL,
    descripcion CLOB
);

-- Tabla Permisos
CREATE TABLE system.permisos (
    id_permiso NUMBER PRIMARY KEY,
    nombre_permiso VARCHAR2(100) NOT NULL,
    descripcion CLOB
);

-- Tabla RolesPermisos (relación muchos a muchos entre Roles y Permisos)
CREATE TABLE system.roles_permisos (
    id_rol NUMBER,
    id_permiso NUMBER,
    PRIMARY KEY (id_rol, id_permiso),
    FOREIGN KEY (id_rol) REFERENCES system.roles(id_rol) ON DELETE CASCADE,
    FOREIGN KEY (id_permiso) REFERENCES system.permisos(id_permiso) ON DELETE CASCADE
);

-- Tabla PlanesSubscripcion
CREATE TABLE system.planes_subscripcion (
    id_plan NUMBER PRIMARY KEY,
    nombre_plan VARCHAR2(100) NOT NULL,
    precio NUMBER(10, 2) NOT NULL,
    descripcion CLOB,
    perfiles_disponibles NUMBER,
    miembros_extras NUMBER
);

-- Tabla Parametros
CREATE TABLE system.parametros (
    id_parametro NUMBER PRIMARY KEY,
    nombre_parametro VARCHAR2(100) NOT NULL,
    valor VARCHAR2(255),
    descripcion CLOB,
    tipo_parametro VARCHAR2(20) CHECK (tipo_parametro IN ('global', 'usuario_especifico'))
);

-- Tabla Ubicaciones (autoreferenciada para manejar ubicaciones)
CREATE TABLE system.ubicaciones (
    id_ubicacion NUMBER PRIMARY KEY,
    nombre_lugar VARCHAR2(100) NOT NULL,
    tipo VARCHAR2(50) NOT NULL,
    id_lugar_padre NUMBER,
    CONSTRAINT fk_ubicaciones FOREIGN KEY (id_lugar_padre) REFERENCES system.ubicaciones(id_ubicacion) ON DELETE CASCADE
);

-- Tabla Usuarios
CREATE TABLE system.usuarios (
    id_usuario NUMBER PRIMARY KEY,
    p_nombre VARCHAR2(100) NOT NULL,
    s_nombre VARCHAR2(100),
    p_apellido VARCHAR2(100) NOT NULL,
    s_apellido VARCHAR2(100),
    email VARCHAR2(100) NOT NULL,
    contraseña VARCHAR2(255) NOT NULL,
    fecha_registro DATE NOT NULL,
    id_rol NUMBER,
    id_plan NUMBER,
    id_locacion NUMBER,
    FOREIGN KEY (id_rol) REFERENCES system.roles(id_rol) ON DELETE SET NULL,
    FOREIGN KEY (id_plan) REFERENCES system.planes_subscripcion(id_plan) ON DELETE SET NULL,
    FOREIGN KEY (id_locacion) REFERENCES system.ubicaciones(id_ubicacion) ON DELETE SET NULL
);

-- Tabla UsuarioParametros (relación muchos a muchos entre Usuarios y Parámetros)
CREATE TABLE system.usuario_parametros (
    id_usuario NUMBER,
    id_parametro NUMBER,
    PRIMARY KEY (id_usuario, id_parametro),
    valor VARCHAR2(255),
    FOREIGN KEY (id_usuario) REFERENCES system.usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_parametro) REFERENCES system.parametros(id_parametro) ON DELETE CASCADE
);

-- Tabla Categorias
CREATE TABLE system.categorias (
    id_categoria NUMBER PRIMARY KEY,
    nombre_categoria VARCHAR2(100) NOT NULL
);

-- Tabla Contenido
CREATE TABLE system.contenido (
    id_contenido NUMBER PRIMARY KEY,
    titulo VARCHAR2(255) NOT NULL,
    descripcion CLOB,
    fecha_lanzamiento DATE,
    tipo_contenido VARCHAR2(20) CHECK (tipo_contenido IN ('movie', 'series', 'documentary')),
    duracion NUMBER, -- En minutos
    numero_episodios NUMBER,
    categoria_principal NUMBER, -- FK a Categorias.id_categoria
    restriccion_edad NUMBER,
    descripcion_restriccion CLOB,
    FOREIGN KEY (categoria_principal) REFERENCES system.categorias(id_categoria) ON DELETE SET NULL
);

-- Tabla Actores
CREATE TABLE system.actores (
    id_actor NUMBER PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    fecha_nacimiento DATE,
    biografia CLOB
);

-- Tabla Directores
CREATE TABLE system.directores (
    id_director NUMBER PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    fecha_nacimiento DATE,
    biografia CLOB
);

-- Tabla Estudios
CREATE TABLE system.estudios (
    id_estudio NUMBER PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    ubicacion VARCHAR2(255),
    descripcion CLOB
);

-- Tabla Generos
CREATE TABLE system.generos (
    id_genero NUMBER PRIMARY KEY,
    nombre_genero VARCHAR2(100) NOT NULL
);

-- Tabla Descripciones
CREATE TABLE system.descripciones (
    id_descripcion NUMBER PRIMARY KEY,
    titulo_descripcion VARCHAR2(255) NOT NULL,
    descripcion CLOB
);

-- Tabla Subcategorias
CREATE TABLE system.subcategorias (
    id_subcategoria NUMBER PRIMARY KEY,
    id_categoria NUMBER,
    nombre_subcategoria VARCHAR2(100) NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES system.categorias(id_categoria) ON DELETE CASCADE
);

-- Tabla ContenidoActores (relación muchos a muchos entre Contenido y Actores)
CREATE TABLE system.contenido_actores (
    id_contenido NUMBER,
    id_actor NUMBER,
    PRIMARY KEY (id_contenido, id_actor),
    FOREIGN KEY (id_contenido) REFERENCES system.contenido(id_contenido) ON DELETE CASCADE,
    FOREIGN KEY (id_actor) REFERENCES system.actores(id_actor) ON DELETE CASCADE
);

-- Tabla ContenidoDirectores (relación muchos a muchos entre Contenido y Directores)
CREATE TABLE system.contenido_directores (
    id_contenido NUMBER,
    id_director NUMBER,
    PRIMARY KEY (id_contenido, id_director),
    FOREIGN KEY (id_contenido) REFERENCES system.contenido(id_contenido) ON DELETE CASCADE,
    FOREIGN KEY (id_director) REFERENCES system.directores(id_director) ON DELETE CASCADE
);

-- Tabla ContenidoEstudios (relación muchos a muchos entre Contenido y Estudios)
CREATE TABLE system.contenido_estudios (
    id_contenido NUMBER,
    id_estudio NUMBER,
    PRIMARY KEY (id_contenido, id_estudio),
    FOREIGN KEY (id_contenido) REFERENCES system.contenido(id_contenido) ON DELETE CASCADE,
    FOREIGN KEY (id_estudio) REFERENCES system.estudios(id_estudio) ON DELETE CASCADE
);

-- Tabla ContenidoGeneros (relación muchos a muchos entre Contenido y Generos)
CREATE TABLE system.contenido_generos (
    id_contenido NUMBER,
    id_genero NUMBER,
    PRIMARY KEY (id_contenido, id_genero),
    FOREIGN KEY (id_contenido) REFERENCES system.contenido(id_contenido) ON DELETE CASCADE,
    FOREIGN KEY (id_genero) REFERENCES system.generos(id_genero) ON DELETE CASCADE
);

-- Tabla ContenidoDescripciones (relación muchos a muchos entre Contenido y Descripciones)
CREATE TABLE system.contenido_descripciones (
    id_contenido NUMBER,
    id_descripcion NUMBER,
    PRIMARY KEY (id_contenido, id_descripcion),
    FOREIGN KEY (id_contenido) REFERENCES system.contenido(id_contenido) ON DELETE CASCADE,
    FOREIGN KEY (id_descripcion) REFERENCES system.descripciones(id_descripcion) ON DELETE CASCADE
);

-- Tabla ContenidoSubcategorias (relación muchos a muchos entre Contenido y Subcategorias)
CREATE TABLE system.contenido_subcategorias (
    id_contenido NUMBER,
    id_subcategoria NUMBER,
    PRIMARY KEY (id_contenido, id_subcategoria),
    FOREIGN KEY (id_contenido) REFERENCES system.contenido(id_contenido) ON DELETE CASCADE,
    FOREIGN KEY (id_subcategoria) REFERENCES system.subcategorias(id_subcategoria) ON DELETE CASCADE
);

-- Tabla HistorialVisualizacion
CREATE TABLE system.historial_visualizacion (
    id_historial NUMBER PRIMARY KEY,
    id_usuario NUMBER,
    id_contenido NUMBER,
    fecha_visualizacion DATE,
    progreso NUMBER(5,2),
    FOREIGN KEY (id_usuario) REFERENCES system.usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_contenido) REFERENCES system.contenido(id_contenido) ON DELETE CASCADE
);
