# Hola Dev 👋, soy Camilo Jimenez un FullStack Developer

> Este proyecto fue creado con  [Create React App](https://github.com/facebook/create-react-app).

Este proyecto se ha realizado para presentar la prueba técnica para una empresa en Colombia para el puesto de desarrollador FullStack, la cual pedía lo siguiente:

> ## Test de habilidades | Construir un BackEnd libre: 
> Crear un CRUD (Create, Read, Update, Delete) acerca de usuarios.
Cada usuario tiene un nombre, fecha de nacimiento, numero de identificacion (debe ser un
numero no string).
> - Deben estar las 4 operaciones (Crear, Leer, Actualizar, Eliminar).
> - Las operaciones deben usar el verbo apropiado para cada request (GET, POST, DELETE,
PATCH).
> - El backend puede usar strapi (facil y rapido) o puede usar un servidor en nodejs.


## Para ejecutar el proyecto

Después de clonar el proyecto debes ejecutar los siguientes comandos para ejecutar correctamente el proyecto.


Debes copiar y pegar el contenido del archivo de **.env.example** y pegarlo en un nuevo archivo llamado **.env** (En la raíz del proyecto).
> IMPORTANTE: No es necesario que cambies los datos que contiene el archivo **.env**
Después ejecuta los siguientes comandos para ejecutar el proyecto.

```
npm install
npm run develop
```

Al ejecutar el ultimo comando, se abre una pestaña en el navegador para que crees una cuenta de administradr y poder ingresar al Dashboard inicial de Strapi.

Luego de crear la cuenta de administrador, puedes visualizar la colleccion creada para los usuarios:
![image](https://user-images.githubusercontent.com/78056280/187280243-e623f9e8-d92f-4ee7-bcb9-83179f2841ab.png)

### IMPORTANTE
Debes habilitar la API para poder acceder a esta publicamente, para eso realiza los siguientes pasos:
- Ve a la configuracion de Strapi.
![image](https://user-images.githubusercontent.com/78056280/187280501-35f27b95-697c-4c6d-bbd7-29164b89a6de.png)

- Luego a Roles > Public
![image](https://user-images.githubusercontent.com/78056280/187280564-dde0eb7e-60e0-47d1-b0eb-7c04679dc9a2.png)

- Luego a V2-user y selecciona todos los EndPoints.
![image](https://user-images.githubusercontent.com/78056280/187280660-656a7918-d39e-493b-9694-81586229db32.png)

- Guarda los cambios y sigue con la parte del [FrontEnd](https://github.com/camilojimenez19/crud-users-frontend)


