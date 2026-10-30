# Click&Ready | Andes Market — demo académica Sprint 1

[![CI](https://github.com/Jos011724/click-ready/actions/workflows/ci.yml/badge.svg)](https://github.com/Jos011724/click-ready/actions/workflows/ci.yml)

**Estado:** prototipo frontend parcial; **no es un MVP productivo ni un Incremento formalmente Done**. Caso académico: 35 tiendas de Andes Market, piloto proyectado en 3 tiendas de Santiago, 3 sprints de 2 semanas.

## Funcionalidades verificables de la demo
- Buscar por nombre y filtrar por categoría en catálogo **mock de seis productos**, no de 1.500 SKUs.
- Seleccionar visualmente tienda piloto: Providencia, Ñuñoa o Maipú (sin inventario diferenciado).
- Agregar, incrementar, disminuir y vaciar carrito; sumar subtotales en CLP, sin impuestos/descuentos adicionales ni persistencia.
- Validación local de email y longitud de contraseña; **no existe autenticación ni almacenamiento de contraseñas**.
- Interfaz responsive sin backend.

## Instalación y ejecución
1. Requiere navegador moderno. No necesita dependencias para visualizar.
2. Ejecutar `python -m http.server 8000` desde el directorio del repositorio.
3. Abrir http://localhost:8000.
4. Para comprobar el dominio, instalar Node.js 20+ y ejecutar `npm test` o `npm run check`.

## Calidad automatizada
- `core.js` ofrece filtrado y cálculo de totales como funciones puras.
- `test/core.test.js` contiene casos positivos, vacíos y negativos.
- `.github/workflows/ci.yml` ejecuta validación sintáctica y pruebas con Node 22 al publicar commits en main o PR.
- **Importante:** pipeline incluido no significa que la ejecución remota haya sido exitosa; revisar la pestaña Actions y conservar captura. No se atribuye porcentaje de cobertura no medido.

## Alcance pendiente (no aprobar como Done)
| PBI | Evidencia actual | Pendiente para aceptación |
|---|---|---|
| PBI-01 | Formulario local | Autenticación segura, registro, recuperación por correo |
| PBI-02 | Búsqueda y categoría | Autocompletar, filtros de marca/precio, catálogo 1.500 SKU |
| PBI-03 | Carrito en memoria | Persistencia por sesión y criterios tributarios |
| PBI-04 | No implementado | Checkout con token sandbox |
| PBI-05 | Selector de tienda | Franjas disponibles por tienda y reserva |
| PBI-06 | No implementado | Correo con número y detalle de pedido |

## Scrum, DoD y trazabilidad
Ver [documentación de Sprint 1](docs/SCRUM_SPRINT1.md). Las dailies y la Review allí descritas son **guiones académicos**, no evidencias de reuniones realizadas. El Sprint 2 debe cerrar los criterios incompletos y validar integraciones antes de declarar un Incremento liberable.

## Capturas para entregar
1. Inicio con 3 tiendas, productos y filtros.
2. Búsqueda de «arroz» y filtro de categoría.
3. Carrito con 2 unidades y total.
4. Error de formulario de ingreso.
5. Resultados de `npm test` y pestaña Actions.
6. Demo en staging/Pages **solo si la publicación se habilita y se verifica**.

## Seguridad
No introducir contraseñas reales en el formulario; no contiene backend ni tratamiento de pagos. No subir secretos al repositorio. Una versión real requiere autenticación segura, autorización, control de inventario y manejo de datos personales.

## Fuentes
- [The Scrum Guide (2020)](https://scrumguides.org/scrum-guide.html)
- [Manifiesto Ágil](https://agilemanifesto.org/iso/es/manifesto.html)
- [GitHub Actions](https://docs.github.com/en/actions)
