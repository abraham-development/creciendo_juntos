# apps/api

Backend futuro de Creciendo Juntos.

Aquí vivirán la autenticación del administrador, la sesión y la integración con la API de la SUNAT (comprobantes de los servicios).

Esta entrega no implementa el API. El landing en `apps/web` solo muestra el botón **Iniciar sesión** hacia `/iniciar-sesion`.

Secretos: `.env.local` en la raíz o en esta app. Ver `.env.example`. Nunca llamar a SUNAT desde el cliente.
