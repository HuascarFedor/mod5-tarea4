# Productos E-Com

Este trabajo fue desarrollado como tarea del módulo 4 del diplomado FullStack y emplea un BackEnd proporcionado por el docente del módulo. Este proyecto en su conjunto se aprovechará para la tarea asignada en el módulo 5, que consiste en:

Implementar las pruebas end to end usando cypress en el proyecto frontend desarrollado en módulos previos
El proyecto debe cumplir lo siguiente:

- Automatización de 5 flujos críticos.
- Automatización de 3 flujos alternos.

## Requisitos de funcionamiento

- Node.js (versión 20 o superior)
- npm (versión 10 o superior)
- Instalación de Cypress

## Instalación del BackEnd

Sigue los pasos a continuación para instalar y ejecutar la aplicación:

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/HuascarFedor/mod5-tar4-backend.git
   cd mod5-tar4-backend
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Configurar el archivo `.env`:

   - Crea un archivo `.env` en el directorio raíz del proyecto y agrega la siguiente línea:
     ```plaintext
     JWT_SECRET=your_jwt_secret_key
     ```

4. Configurar Prisma:

   - Asegúrate de que el archivo `prisma/.env` contenga la URL de la base de datos apuntando a `file:./dev.db`.

5. Inicializar la base de datos:

   ```bash
   npx prisma migrate dev --name init
   ```

6. Ejecutar el script de seed para agregar datos de prueba:

   ```bash
   npm run seed
   ```

7. Iniciar la aplicación:

   ```bash
   npm run start:dev
   ```

8. Acceder a la documentación de la API:
   - Abre tu navegador y navega a `http://localhost:3000/api` para ver la documentación de Swagger.

## Instalación del FrontEnd

Sigue los pasos a continuación para instalar y ejecutar la aplicación:

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/HuascarFedor/mod5-tarea4.git
   cd mod5-tarea4
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Iniciar la aplicación:

   ```bash
   npm run dev
   ```

4. Acceder al sitio web:
   - Abre tu navegador y navega a `http://localhost:8002/` para ver el sitio web en funcionamiento.

## Uso

### Pruebas E2E con cypress

Sigue los pasos a continuación para ejecutar las pruebas con Cypress:

1. Abrir la aplicación con Cypress:

   ```bash
   npx cypress open
   ```

2. Elección del tipo de prueba:

- Elegir E2E Testing

3. Elección del navegador para las pruebas:

- Elegir Electron
- Start E2E Testing Electron

### Pruebas E2E desarrolladas

- Ver los detalles de un producto `see-item-details.spec.cy.ts`
- Iniciar sesión `login.spec.cy.ts`
- Intentar ingresar a una seccón restringida `not-authorized.spec.cy`
- Cerrar sesión `logout.spec.cy.ts`
- Ver los productos, permitido con autenticación `see-products.spec.cy.ts`
- Añadir un producto, permitido con autenticación `add-product.spec.cy.ts`
- Eliminar un producto, permitido con autenticación `delete-product.spec.cy.ts`
- Modificar un producto, permitido con autenticación `edit-product.spec.cy.ts`
