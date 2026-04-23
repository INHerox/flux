# SneakerDrop — Proyecto (Landing Page)

Este repositorio contiene una landing simple para una tienda llamada **SneakerDrop**. Está organizada en capas (assets, datos, estilos y lógica) para facilitar mantenimiento y evolución.

---

## Estructura del proyecto

- `index.html` — HTML con la estructura semántica (sin lógica inline).
- `css/styles.css` — Todo el CSS consolidado.
- `data/products.js` — Array global `PRODUCTS` con los 4 productos hardcodeados.
- `js/cart.js` — Lógica del carrito: estado, persistencia (`localStorage`), render y handlers.
- `js/catalog.js` — Render del catálogo y manejo del botón "Agregar".
- `js/form.js` — Manejo del formulario de contacto y validación básica.
- `assets/images/` — Carpeta para imágenes (contiene SVGs de ejemplo: `airflex.svg`, `streetmax.svg`, `trailblaze.svg`, `classiccourt.svg`, `hero.svg`).

---

## Cómo funciona (resumen)

- Los datos de productos se cargan desde `data/products.js` como `window.PRODUCTS`.
- `js/catalog.js` renderiza las tarjetas del catálogo usando `PRODUCTS`.
- `js/cart.js` encapsula la clase `Cart` con métodos descriptivos: `addItem`, `removeItem`, `updateQuantity`, `getTotal`, `renderCart`. El carrito se persiste en `localStorage` con la clave `sneakerdrop_cart_v1`.
- `js/form.js` valida el formulario de contacto y muestra un mensaje de agradecimiento localmente.
- Los botones para abrir/cerrar carrito están en `index.html` y gestionados por `js/cart.js`.

---

## Ejecutar localmente

1. Desde la carpeta del proyecto (`d:/Clasevibecoding`) puedes levantar un servidor estático simple con Python:

```powershell
python -m http.server 8000
# luego abrir http://localhost:8000 en el navegador
```

2. También puedes abrir `index.html` directamente en el navegador, pero algunas funcionalidades con rutas relativas funcionan mejor desde servidor.

---

## Cómo añadir o cambiar imágenes

- Coloca las imágenes en `assets/images/`.
- Actualiza la ruta `img` correspondiente en `data/products.js` para que apunte a `assets/images/tu-imagen.ext`.
- Para evitar 'layout shift', añade atributos `width` y `height` en las `img` si agregas imágenes reales.

---

## Cómo añadir/editar productos

- Edita `data/products.js` y añade/actualiza objetos con la forma:

```js
{ id: 'p5', name: 'Nuevo Modelo', price: 129.99, img: 'assets/images/nuevo.svg' }
```

- Luego recarga la página; `js/catalog.js` renderizará los cambios automáticamente.

---

## Puntos importantes / notas de arquitectura

- Separación por capas: datos → presentación → negocio. Mantener esta convención facilita pruebas y escalado.
- `cart.js` persiste en `localStorage`; si necesitás sincronizar con backend, reemplazar métodos de almacenamiento por llamadas API.
- `catalog.js` y `form.js` se limitan a la presentación/validación; la lógica del estado vive en `cart.js`.
- Escapar siempre texto user-controlled antes de insertarlo en el DOM (ya se aplica `escapeHtml` en los módulos).

---

## Próximos pasos recomendados

- Añadir bundler (`npm`, `vite`) si se planea escalar o usar módulos ES moderno.
- Añadir pruebas unitarias para `cart.js` (p. ej. con Jest) y tests E2E (Playwright/Cypress).
- Mejorar accesibilidad (focus trap en el sidebar del carrito, `aria-live` para notificaciones). Ya hay mejoras básicas, pero se puede pulir.
- Optimizar imágenes (crear versiones WebP, `srcset`) y añadir `loading="lazy"` donde convenga.

---

Si querés, puedo:

- Añadir un `package.json` y scripts para levantar un servidor de desarrollo y build.
- Convertir los `js/*.js` a módulos (`type="module"`) y usar imports.
- Añadir tests básicos para la clase `Cart`.

Decime qué preferís y lo hago.
