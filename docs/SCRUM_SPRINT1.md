# Click&Ready — Sprint 1 (documentación académica)

> Las actas son un ejercicio de planificación y análisis; no certifican eventos Scrum reales ni aceptación formal del Product Owner.

## Product Goal
Habilitar compra online con retiro o entrega programada en tres tiendas piloto de Santiago en seis semanas, con ERP simulado y pasarela sandbox.

## Sprint Goal
Demostrar en un navegador el descubrimiento de productos y la gestión básica de carrito para recibir retroalimentación antes del checkout.

## Alcance ilustrado
- PBI-02: búsqueda y filtro **parcial**: 6 SKUs ficticios, sin autocompletado ni filtro marca/precio.
- PBI-03: carrito **parcial**: manejo en memoria sin persistencia ni cálculo tributario específico.
- PBI-01: pantalla de acceso **parcial**: solo validación local, no registro, login ni recuperación real.
- PBI-06: no implementado: depende del evento de creación del pedido.

Ninguno de estos PBIs alcanza íntegramente sus criterios de aceptación originales y no debe reportarse como Done según la DoD completa.

## Definition of Done propuesta
1. Criterios de aceptación verificables y comprobados.
2. Revisión de PR por otra persona (evidencia del enlace y aprobación).
3. Pruebas unitarias >=70% del módulo afectado, resultado verde en CI.
4. Pruebas funcionales del flujo principal documentadas y ejecutadas.
5. Build e integración verdes en rama principal.
6. Sin fallos críticos abiertos ni tareas bloqueantes.
7. Documentación breve y demostración en staging accesible.
8. Aceptación explícita del PO, registrada para cada PBI.
9. Feature flag y configuración segura cuando proceda.

**Estado:** se han añadido pruebas automatizadas de lógica pura y un pipeline; no se dispone de aprobación PO, cobertura demostrada >=70% del módulo UI, ni staging validado; por tanto el Incremento completo no está certificado como Done.

## Definición de listo para tomar (DoR, práctica complementaria)
Historia entendida, objetivo de negocio visible, criterios testables, dependencias identificadas, datos mock disponibles y tamaño estimado.

## Eventos de referencia
- Planning: seleccionar PBI-02/PBI-03 como foco y descomponer en tareas; diferir PBI-06 por dependencia del checkout.
- Daily A (ejemplo): bloqueo de API ERP; usar catálogo mock e informar al PO.
- Daily B (ejemplo): desacople búsqueda y carrito; acordar interfaz de datos estable.
- Daily C (ejemplo): falta ambiente staging; documentar ejecución local y abrir impedimento.
- Review (guion, no acta real): mostrar filtros y carrito; solicitar opinión sobre visibilidad de stock, accesibilidad y paso siguiente.
- Retrospective (acciones propuestas): elevar pruebas de UI — responsable Developers; preparar staging — responsable Developers/SM; refinar criterios de inventario — responsable PO, para siguiente Sprint.

## Riesgos
ERP/mock inconsistente; pagos sandbox ausentes; congestión de demanda; sincronización de equipo mixto; cupos por tienda no validados. Revisar en refinamiento y Sprint Planning 2.
