# 📝 User Management App - Prueba Técnica

Aplicación web desarrollada con [Next.js 15 App Router](https://nextjs.org/docs/app) y [Tailwind CSS](https://tailwindcss.com/), que permite registrar, editar, eliminar y visualizar usuarios, usando una "base de datos" estática en formato JSON.

## ✨ Características

- ✅ Formulario de registro con validaciones.
- ✅ Tabla editable con los usuarios registrados.
- ✅ API RESTful construida con Next.js Server Actions (`app/api`).
- ✅ Datos persistidos en archivo local `users.json`.
- ✅ Estilos con Tailwind CSS.
- ✅ Código limpio, modular y fácilmente escalable.

## 🚀 Instrucciones para correr el proyecto

1. **Clonar el repositorio**:

```bash
git clone https://github.com/Luisrav14/users-crud-next15
cd users-crud-next15
```

2. **Instalar dependencias**:

```bash
npm install
```

3. **Levantar el servidor en desarrollo**:

```bash
npm run dev
```

4. **Abrir en el navegador**:

```
http://localhost:3000/
```

---

## 🧪 Endpoints disponibles

| Método | Ruta            | Descripción                |
| ------ | --------------- | -------------------------- |
| GET    | /api/users      | Obtener todos los usuarios |
| POST   | /api/users      | Crear nuevo usuario        |
| PUT    | /api/users      | Editar usuario existente   |
| DELETE | /api/users/[id] | Eliminar usuario por ID    |

## 📌 Detalles técnicos

- Framework: **Next.js 15** (`app/` directory + file-based routing)
- Estilos: **Tailwind CSS**
- Validación: **HTML5 nativa**
- Persistencia: **Sistema de archivos con `fs`** (solo en entorno local)
