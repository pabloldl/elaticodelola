# El Ático de Lola

Web estática independiente. Abrir `index.html` con Live Server; no necesita instalación ni compilación. HTML, CSS, JavaScript y SVG originales.

Repositorio solicitado por el usuario: https://github.com/pabloldl/elaticodelola. La versión subida mantiene la etiqueta `noindex, nofollow`. Los archivos de pruebas de `qa/` quedan excluidos mediante `.gitignore`. La subida del código no incluye configurar un despliegue.

## Información y fuentes

Investigación realizada el 5 de noviembre de 2026. Se ha identificado el apartamento de El Bosque, Cádiz, sin utilizar alojamientos homónimos de otras ciudades.

- Booking: https://www.booking.com/hotel/es/el-atico-de-lola.es-mx.html?came_from_hotel_review=1&keep_landing=1 — resultado indexado con nombre, localidad, tres dormitorios, salón, baño, bañera, cocina, frigorífico, cafetera, aire acondicionado y lavadora. La apertura directa mediante el navegador de investigación devolvió un error de caché; el contenido indexado sí fue accesible. Enlace de reserva utilizado: misma ficha con localización española, sin parámetros comerciales ni fechas.
- Google Travel: https://www.google.com/travel/hotels/entity/CiMI4eS52u-4gHsQwdHgqMz53du0ARoNL2cvMTF6ZnF2cG1icxAC — confirma apartamento, tres dormitorios, un baño, cocina, lavavajillas, salón, televisión, chimenea y calefacción.
- Planet of Hotels: https://es.planetofhotels.com/espana/el-bosque/el-atico-de-lola — confirma nombre, localidad, Avenida Juan XXIII 24, tres dormitorios, un baño, cocina, climatización, lavadora y no fumadores.
- Amimir: https://www.amimir.com/es/hoteles/998344-el-atico-de-lola/ — ficha pública concordante de El Bosque; calefacción y climatización. No se publican en la web su clasificación ni puntuaciones.
- Cádiz Turismo (Patronato Provincial): https://www.cadizturismo.com/es/municipios/el-bosque — fuente del texto sobre el destino: calles blancas, Majaceite y Sierra de Grazalema.

La dirección coincide en Planet of Hotels y es-andalucia.es/hotel/elaticodelola; este último contiene afirmaciones contradictorias sobre otros servicios y no se ha usado para describirlos. Google Maps usa una búsqueda textual por nombre y dirección, sin coordenadas ni marcador inventado. Confirmar acceso y piso con la propiedad.

## Datos omitidos

Capacidad máxima: los agregadores mencionan seis huéspedes y el resultado indexado de Booking presenta otra ocupación para una tarifa concreta; no se fija una capacidad. WiFi: fuentes contradictorias, omitido. También se omiten distribución y número de camas, terraza, azotea, vistas, piscina, aparcamiento, mascotas, accesibilidad, horarios, precios, disponibilidad y condiciones no contrastadas. Sin teléfono, correo ni WhatsApp verificables. No se ha encontrado un canal propio del titular ni una ficha de Airbnb inequívoca. Booking es la ficha pública de reserva identificada, no un sitio propio del alojamiento.

No había carpeta `el-atico-de-lola/` al inicio: tampoco existían `img/` ni `imgs/`. Posteriormente el usuario aportó nueve fotografías en `img/`. Se inspeccionaron las nueve y se seleccionaron siete: salón (539253396), dormitorio de pared vegetal (539253383), cocina y comedor (539253459), dormitorio de camas individuales (539253376), baño (539253389), otro dormitorio (539253422) y pasillo (539253400). Se conservan todos los originales intactos, sin filtros ni ampliaciones artificiales. Son JPEG ya ligeros, entre 34 y 89 KB. No se usan las dos tomas alternativas de cocina y televisión para evitar redundancia. Las siete fotos suman aproximadamente 499 KB, tienen dimensiones explícitas, carga diferida y decodificación asíncrona. La galería incluye ampliación con diálogo nativo, flechas, navegación por teclado y cierre con Escape.

La fotografía del salón reemplaza la ilustración de la sección apartamento. La portada LOLA y el cartel del destino siguen siendo composiciones gráficas conceptuales; no representan la vivienda, su fachada ni sus vistas. Las fuentes Prata y Urbanist se cargan desde Google Fonts con fallback local.

## Originalidad y alcance

Se consultaron en lectura los índices y estilos principales de los 18 proyectos indicados para contrastar titulares y tipografías, con atención especial a Ronda House, Casa la Matanza y El Rincón de las Higueras. No se copiaron recursos ni código. Prata y Urbanist sustituyen sus combinaciones tipográficas. Hero de letras compuesto, sin paisaje, arcos, botánica ni fotografía; footer de firma tipográfica.

Una sola etiqueta robots `noindex, nofollow`, presente desde la creación. Todos los archivos del trabajo están dentro de `el-atico-de-lola/`.

## Validación

Servidor local: respuesta HTTP 200. Comprobación sintáctica de JavaScript con `node --check`. Comprobación en Chrome headless a 375, 390, 768, 1440 y 1920 px: sin scroll horizontal tras corregir el tamaño del cartel del destino; una etiqueta robots, sin IDs duplicados ni anclas rotas. Menú móvil, cierre al elegir sección y revelados de scroll comprobados. `prefers-reduced-motion` desactiva las animaciones y el desplazamiento suave. Capturas y resultados en `qa/`, carpeta ignorada por Git. El círculo decorativo de reservas rebasa su propio contenedor intencionadamente y queda recortado por `overflow:hidden`; no desborda la página.

No se ha ejecutado Safari ni un iPhone real. El enlace español de Booking responde con su comprobación JavaScript antibot: la ficha se identificó mediante resultados públicos indexados, sin completar una reserva. El enlace de Cádiz Turismo se abrió durante la investigación. Maps utiliza su endpoint documentado de búsqueda textual; no se ha comprobado una ruta en la aplicación de Google Maps. No hay formularios ni disponibilidad simulada.

Tras incorporar las fotografías se repitieron los cinco tamaños: siete imágenes cargadas, sin errores de imagen ni desbordamiento de página; apertura de galería, siguiente foto y cierre por botón correctos. Se añadió un cierre explícito con Escape y se verificó a 390 px junto con navegación por flechas (`qa/gallery-keyboard-results.json`). La sintaxis JavaScript se revisó también después de incorporar la galería. Los cambios de esta ampliación solo afectan a este proyecto.
