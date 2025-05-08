# TodoApp

Este proyecto es una aplicación de gestión de tareas desarrollada con Angular 19.2.11. Permite a los usuarios crear, editar, eliminar y filtrar tareas según su estado (completadas o pendientes). La aplicación utiliza Angular Material para el diseño de la interfaz y un servidor JSON simulado para manejar los datos.

## Características principales

- Crear, editar y eliminar tareas.
- Filtrar tareas por estado: "Completadas" o "Pendientes".
- Diseño moderno y responsivo utilizando Angular Material.
- Sincronización con un servidor JSON simulado para persistencia de datos.

---

## Instrucciones de instalación

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local:

### 1. Clonar el repositorio
Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/tu-usuario/todo-app.git
```

### 2. Instalar dependencias
Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
cd todo-app
npm install
```

### 3. Ejecutar el servidor de desarrollo
Inicia el servidor de desarrollo con el siguiente comando:

```bash
ng serve
```

Abre tu navegador y navega a `http://localhost:4200/` para ver la aplicación en acción.

### 4. Configurar el servidor JSON (opcional)
Si estás utilizando `json-server` para simular una API, instala `json-server` globalmente:

```bash
npm install -g json-server
```

Luego, ejecuta el servidor JSON con el siguiente comando:

```bash
json-server --watch db.json
```

Esto iniciará un servidor en `http://localhost:3000/` que manejará las solicitudes de la aplicación.

---

## Arquitectura de la aplicación

La aplicación sigue una arquitectura modular basada en componentes, servicios y modelos. A continuación, se describen los principales elementos de la arquitectura:

### **1. Componentes**
- **`AppComponent`**: Componente raíz que actúa como contenedor principal de la aplicación.
- **`TaskListComponent`**: Muestra la lista de tareas y permite filtrarlas por estado.
- **`TaskFormComponent`**: Formulario para crear o editar tareas.

### **2. Servicios**
- **`TaskService`**: Maneja la comunicación con el servidor JSON para realizar operaciones CRUD (crear, leer, actualizar y eliminar) en las tareas.

### **3. Modelos**
- **`Task`**: Define la estructura de una tarea, incluyendo propiedades como `id`, `title`, `description` y `completed`.

### **4. Diseño**
- Se utiliza Angular Material para crear una interfaz moderna y responsiva.
- Los componentes como `MatCard`, `MatFormField`, `MatSelect` y `MatButton` se emplean para mejorar la experiencia del usuario.

---

## Decisiones técnicas

1. **Uso de Angular Material**:
   - Angular Material fue elegido para garantizar un diseño consistente y profesional con componentes preconstruidos que cumplen con las pautas de Material Design.

2. **Servidor JSON simulado**:
   - Se utilizó `json-server` para simular una API RESTful durante el desarrollo, lo que permitió probar las funcionalidades de la aplicación sin necesidad de un backend real.

3. **Separación de responsabilidades**:
   - Cada componente tiene una responsabilidad clara: `TaskListComponent` maneja la visualización y filtrado de tareas, mientras que `TaskFormComponent` se encarga de la creación y edición de tareas.

4. **Filtros dinámicos**:
   - Se implementó un sistema de filtrado dinámico en `TaskListComponent` para mostrar tareas completadas o pendientes según la selección del usuario.

5. **Modularidad**:
   - La aplicación está diseñada para ser fácilmente escalable, con servicios reutilizables y componentes independientes.

---

## Licencia

1. *Nombre del Proyecto:* TodoApp
2. *Descripción:* ANALISTA DE DESARROLLO DE SOFTWARE.
3. *Créditos:* Michael Andres Catalan Gaviria.
