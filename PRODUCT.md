# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript en monorepo pnpm + Turborepo (`apps/web` ahora; `apps/api` después). Decisión del usuario.

## Users

Familias que buscan estimulación temprana, evaluación del desarrollo y apoyo psicológico para niños y adolescentes. Los dueños son psicólogos. El visitante de la web es el público (padres/cuidadores); el administrador (la dueña o quien ella designe) entra por «Iniciar sesión».

## Product Purpose

**Creciendo Juntos** ofrece servicios de psicología y estimulación temprana. El sitio debe convencer y llevar a contactar por WhatsApp.

Éxito: el visitante entiende que hay psicólogos que acompañan el crecimiento de niños (físico, emocional y psicológico) y escribe por WhatsApp.

## Positioning

Centro de psicólogos enfocado en estimulación temprana y crecimiento psicológico sano de niños y familias, no una clínica genérica ni un espacio de entretenimiento infantil.

## Operating Context

Atención en el local (sala de estimulación). Comprobantes electrónicos vía SUNAT en un área privada futura. Contacto público por WhatsApp.

## Capabilities and Constraints

Confirmado en `apps/web` (sitio **multipágina**; cada ítem del menú es una ruta de nivel superior):

| Ruta | Propósito |
|------|-----------|
| `/` | Home con hero y carrusel dinámico |
| `/servicios` | Catálogo de servicios |
| `/nosotros` | Presentación del centro y enfoque psicológico |
| `/ubicacion` | Dirección, enlace a mapa y CTA de WhatsApp |
| `/iniciar-sesion` | Entrada futura al área admin (placeholder; sin auth) |

Elementos transversales:

- Header de dos niveles (marca, WhatsApp, «Iniciar sesión»; barra de navegación con estado de página activa).
- Pie con WhatsApp, Facebook e Instagram (enlaces de redes pendientes de URL real).
- CTA principal: WhatsApp. Los números no se muestran en la interfaz; el contacto público es el botón de WhatsApp.
- «Iniciar sesión» es solo para administrador; no hay registro público.
- Esta entrega no implementa auth, `apps/api` ni SUNAT.

Datos de contacto y navegación centralizados en `apps/web/src/lib/site.ts` (según flyer). Copy de Nosotros y subtítulo del hero: provisional hasta brief definitivo.

Pendiente: URLs de Facebook e Instagram. Hosting.

## Brand Commitments

- Nombre: **Creciendo Juntos**. En el logo: **Creciendo Juntos A&N**. No abreviar, no traducir, no renombrar.
- Idioma: español.
- Logo: `recursos_internos/Logotipo.jpeg` (servido desde `apps/web/public/logotipo.jpeg`).
- Dirección de diseño (brief + implementación actual): moderna, cálida y **profesional**; estimulación temprana + psicología; cues de color del logo (violeta, naranja, verde/teal). Tipografía Literata + Karla. No web de juguete ni clínica fría.

## Evidence on Hand

- Flyer `recursos_internos/Servicios.jpeg`: lista de servicios, lema «Pequeños pasos hoy, grandes cambios mañana», WhatsApp (contacto vía CTA, sin mostrar el número) y dirección Av. Circunvalación 595 — 2do piso (a una cuadra de la UTP).
- Foto real de la sala: `recursos_internos/Creciendo_foto.jpeg` (carrusel: `public/hero/sala.jpeg`).
- Imágenes de carrusel generadas (alusivas, no fotos de clientes reales): `recursos_internos/hero-carrusel-estimulacion.png`, `recursos_internos/hero-carrusel-familia.png`.
- Imágenes editoriales generadas para `/servicios` (personas ficticias): `recursos_internos/servicios-desarrollo-temprano.png`, `recursos_internos/servicios-bienestar-emocional.png`, `recursos_internos/servicios-orientacion-familiar.png`.
- Foto de referencia del equipo: `recursos_internos/Nosotros.jpeg`. Retratos editoriales para `/nosotros`: `recursos_internos/nosotros-retrato.png`, `recursos_internos/nosotros-equipo.png`.

No hay testimonios, precios, métricas ni perfiles de redes. No fabricarlos.

## Product Principles

- No inventar hechos de producto.
- El WhatsApp manda sobre cualquier otra acción pública.
- El oficio de psicología se nota: calma y rigor, sin infantilizar.
- Lo privado (admin, SUNAT) no se confunde con el recorrido del visitante.
