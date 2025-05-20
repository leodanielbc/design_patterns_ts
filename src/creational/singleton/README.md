# 🧩 Patrón de Diseño: Singleton

## ¿Qué es?

El patrón **Singleton** asegura que una clase tenga **una única instancia** y proporcione un **punto de acceso global** a ella.

Es uno de los patrones de creación más utilizados en desarrollo de software, especialmente útil en sistemas donde compartir recursos o configuración centralizada es clave.



## 📦 Objetivo

Garantizar que una clase solo tenga una instancia y proporcionar un acceso global a dicha instancia.



## 🧠 Cuándo usarlo en Backend

El patrón Singleton es comúnmente utilizado en:

- 🔗 Conexiones a bases de datos (MongoDB, PostgreSQL, etc.).
- ⚙️ Servicios de configuración (por ejemplo, archivos `.env`, `config.ts`).
- 🧠 Caches en memoria (Redis, LRU cache, etc.).
- 📋 Instancias de logging centralizado (Winston, Pino, etc.).
- 🌐 Clientes de APIs externas (integraciones, SDKs de terceros).