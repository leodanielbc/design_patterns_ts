# 🏭 Patrón de Diseño: Builder

## 📖 Descripción

El patrón **Builder** es un patrón de diseño **creacional** que permite construir objetos complejos paso a paso. A diferencia de otros patrones creacionales, el **Builder** no requiere que los objetos tengan un constructor gigante. En su lugar, proporciona una API fluida para construirlos progresivamente.

## 🎯 Objetivo

> Separar la construcción de un objeto complejo de su representación, de modo que el mismo proceso de construcción pueda crear diferentes representaciones.

## 💡 Cuándo Usarlo en el Backend

- 📄 Consultas complejas en base de datos
Cuando necesitas armar dinámicamente una query con múltiples filtros opcionales (ideal junto a ORM como TypeORM).

- 🛒 Construcción de objetos DTO o entidades con muchos campos
Evita constructores largos y confusos cuando una clase tiene múltiples propiedades opcionales.

- 📤 Generación de payloads de API
Útil para construir cuerpos de solicitud o respuesta personalizados, especialmente en integraciones.

- 🔍 Validaciones paso a paso
Puedes construir un objeto solo si se cumplen ciertas condiciones durante el proceso.

## ✅ Ventajas

| Ventaja              | Descripción |
|----------------------|-------------|
| 🔄 **Flexibilidad en la construcción** | Permite diferentes configuraciones paso a paso. |
| 🧼 **Código limpio y legible** | Mejora la claridad en la creación de objetos.
| 🧪 **Fácil de testear** | Puedes probar cada paso del builder individualmente. |
| 🧩 **Separación de responsabilidades** | El cliente no necesita saber cómo se construye el objeto. |

## ⚠️ Consideraciones

❌ **No usar**  si tu objeto es simple o no tiene muchos parámetros opcionales.

✅ Es ideal si tienes muchos atributos opcionales o múltiples formas de construir un mismo objeto.

💡 No confundas con Factory: Builder es más para cómo se construye, Factory para qué construir.

## 🧱 Estructura del Patrón
El patrón Builder tiene los siguientes componentes principales:

| Componente                | Descripción                                                                                     |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| **Builder**               | Define los pasos necesarios para construir el objeto. Cada paso devuelve `this` para encadenar. |
| **Producto**              | El objeto que se está construyendo (por ejemplo, un `User`).                                    |
| **Cliente**               | El que usa el builder paso a paso para construir el producto.                                   |
| **Director** *(opcional)* | Coordina el proceso de construcción si los pasos son siempre los mismos.                        |

🧩 Diagrama Visual
```mermaid
graph TD
    Cliente -->|Usa| Builder
    Builder -->|Paso a paso| ProductoFinal

