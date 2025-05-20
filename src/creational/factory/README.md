# 🏭 Patrón de Diseño: Factory Method

## 📖 Descripción

El patrón **Factory Method** es un patrón de diseño **creacional** que proporciona una manera de crear objetos sin especificar la clase concreta que se va a instanciar. En lugar de usar directamente `new`, se delega la lógica de instanciación a una **fábrica**.

## 🎯 Objetivo

> Delegar la creación de objetos a una clase especializada que determine qué tipo de instancia devolver, según el contexto o configuración.

## 💡 Cuándo Usarlo en el Backend

- Integraciones con múltiples proveedores
    Cuando necesitas cambiar entre servicios como Stripe, PayPal o MercadoPago, dependiendo de configuración o país.

- Adaptadores de servicios
    Por ejemplo, elegir entre Amazon S3, Google Cloud Storage o disco local para almacenar archivos.

- Autenticación dinámica
    Decidir entre autenticación JWT, API Key u OAuth dependiendo del tipo de request.

- Comportamiento según entorno
    Crear instancias específicas para entornos dev, test o prod.

## ✅ Ventajas

| Ventaja              | Descripción |
|----------------------|-------------|
| 🔌 **Bajo acoplamiento** | El cliente no necesita conocer las clases concretas. |
| 🧩 **Fácil de extender** | Puedes añadir nuevas clases sin modificar el cliente. |
| 🧪 **Mejora la testabilidad** | Fácil de mockear implementaciones. |
| 🔄 **Flexible** | Las decisiones se basan en config, datos, headers, etc. |

## ⚠️ Consideraciones

❌ **No usar** si solo tienes una clase concreta (overengineering).

✅ Úsalo si hay múltiples tipos o si las condiciones de creación son dinámicas.

💡 En frameworks como **NestJS**, se puede lograr un efecto similar con `useFactory` y `useClass`.

## 🧱 Estructura del Patrón

```mermaid
graph TD
    Cliente -->|Solicita creación| Factory
    Factory -->|Devuelve instancia| ClaseConcretaA
    Factory -->|Devuelve instancia| ClaseConcretaB

- Factory: Clase con un método create() que retorna una instancia de una interfaz común.

- Productos concretos: Implementan la interfaz.

- Cliente: Consume el producto sin saber su implementación concreta.