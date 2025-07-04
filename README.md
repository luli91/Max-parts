# 🧩 MaxParts Tienda Online

_Este proyecto forma parte del curso de Desarrollo Web + JavaScript._  
Diseñado y desarrollado por [Cynthia](https://github.com/luli91), representa mi primera tienda online integrando **HTML, SCSS, JavaScript** y un backend con **Node.js + Express**.

## 🚗 ¿Qué ofrece esta tienda?

Una experiencia visual clara para encontrar repuestos automotor usados y homologados. Incluye:

- Página de inicio con navegación visual por categorías
- Página de tienda con filtros por marca y categoría
- Sección de contacto y "Nosotros"
- Carrito de compras con contador dinámico
- Posibilidad de agregar productos a favoritos (guardados en `localStorage`)
- Procesamiento de pago simulado con MercadoPago
- Avisos dinámicos con SweetAlert2
- Diseño 100% responsive con SCSS modular

---

## 🛠️ Tecnologías usadas

| Frontend             | Backend                      | Otros                 |
|----------------------|------------------------------|------------------------|
| HTML5 + SCSS         | Node.js + Express            | LocalStorage API       |
| JavaScript modular   | Render para despliegue       | SweetAlert2            |
| Responsive Design    | CORS + JSON parsing          | Git para control de versiones |

---

## ⚙️ Cómo correr el proyecto localmente

1. Cloná el repo:

```bash
git clone https://github.com/luli91/Max-parts.git
Instalá las dependencias (dentro de server/):

bash
cd server
npm install
Compilá SCSS a CSS:

bash
npm run build-css
Iniciá el servidor:

bash
npm run start
Abrí en el navegador:

http://localhost:8080/
📂 Estructura del proyecto
proyecto-final-desarrolloweb+javascript/
├── assets/            # Imágenes y recursos
├── css/               # CSS compilado desde SCSS
├── scss/              # Estilos modulares con variables, mixins, layouts
├── Javascript/        # Scripts por página (tienda, carrito, contacto...)
├── pages/             # HTMLs: tienda.html, nosotros.html, carrito.html
├── server/            # Backend Node.js + Express
└── index.html         # Landing principal
✨ Detalles funcionales
Favoritos: los productos se pueden agregar a una lista de favoritos. Estos se guardan automáticamente en localStorage, permitiendo que persistan aunque se recargue la página.

Carrito: se pueden agregar productos al carrito, actualizar cantidades y continuar con el proceso de compra.

Formulario de contacto: incluye campos validados para solicitar presupuestos.

Animaciones & UI: efectos con SCSS para botones, transiciones, y modales amigables.