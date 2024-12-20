# **Data Management App**

Este proyecto es una prueba técnica interactiva de gestición de datos diseñada para mostrar habilidades en el desarrollo frontend con React, TypeScript y Tailwind CSS. Incluye componentes modulares y funcionales, como navegación por breadcrumbs, una tabla interactiva, y un diseño adaptable.

---

## **Estructura del Proyecto**

La aplicación está organizada en componentes principales que separan la lógica y la presentación, asegurando modularidad y facilidad de mantenimiento.

### **1. App**

El componente principal organiza el diseño en dos partes:

- **Sidebar:** Barra lateral con opciones básicas.
- **Main Content:** Contenido principal con navegación y tabla.

---

### **2. Sidebar**

Una barra lateral compacta que muestra un icono relacionado con filtros o navegación. Es completamente adaptable a dispositivos móviles.

```tsx
export default function Sidebar() {
  return (
    <aside className="w-full mb-5 md:mb-0 md:w-[32px] h-[60px] md:h-[900px] flex-shrink-0 p-[16px_8px] flex flex-row md:flex-col gap-[10px] bg-gray-100 md:bg-transparent">
      <img
        src="/filters.svg"
        alt="Filters Icon"
        className="md:w-[16px] md:h-[16.36px] md:mx-auto "
      />
    </aside>
  );
}
```

---

### **3. Main Content**

Contiene el contenido principal de la aplicación:

- **Navbar:** Breadcrumbs y enlaces de navegación.
- **TableContainer:** Tabla interactiva con funcionalidades avanzadas.

```tsx
export default function MainContent() {
  return (
    <section className="flex-1 w-full md:w-[1408px] px-[16px] md:px-[32px] mx-auto">
      <Navbar />
      <TableContainer />
    </section>
  );
}
```

---

## **Funcionalidades Clave**

### **1. Breadcrumbs**

El componente de breadcrumbs ayuda al usuario a identificar su ubicación en la aplicación y permite navegar fácilmente a secciones anteriores.

**Archivo Relacionado:** `BreadcrumbBcome.tsx`

#### **Características:**

- Representación jerárquica de la navegación.
- Página actual subrayada para diferenciación.
- Separadores entre elementos.

---

### **2. Tabla Interactiva**

El corazón de la aplicación es el componente `TableContainer`, que muestra una tabla con información dinámica y varias funcionalidades.

**Archivo Relacionado:** `TableContainer.tsx`

#### **CaracterÃ­sticas**

1. **Búsqueda por Nombre**

   - Filtra los proyectos en la tabla en tiempo real según el término ingresado en la barra de búsqueda.

2. **Ordenamiento por Fecha**

   - Permite ordenar las filas por la columna `Creation Date` en orden ascendente o descendente.

3. **Cambio de Estado**

   - Cambia el estado de un proyecto (`Completed` y `Pending`) con un solo clic en la celda de estado.

4. **Visualización de Datos**
   - Muestra información detallada por fila, incluyendo:
     - Nombre del proyecto.
     - Total de referencias.
     - Tipo de referencia.
     - Estado (`Completed` o `Pending`).
     - Fechas de creación y cierre.

---

### **Estructura de los Datos**

La tabla utiliza datos con la siguiente estructura:

```typescript
interface TableRowData {
  projectName: string;
  totalRef: number;
  referenceType: string;
  formUrl: string;
  status: "completed" | "pending";
  creationDate: string; // Formato: "Oct 25, 2023"
  closingDate: string;
}
```

---

### **Ejemplo de Datos**

```tsx
const initialTableData: TableRowData[] = [
  {
    projectName: "Apparel",
    totalRef: 68,
    referenceType: "Apparel",
    formUrl: "/#",
    status: "pending",
    creationDate: "Oct 25, 2023",
    closingDate: "Oct 25, 2023",
  },
];
```

---

### **3. Barra de Navegación**

El componente `Navbar` incluye breadcrumbs y enlaces de navegación.

**Archivo Relacionado:** `NavbarContainer.tsx`

- Contiene dos subcomponentes:
  - **BreadcrumbBcome:** Muestra la navegación jerÃ¡rquica.
  - **NavigationLinks:** Enlaces de utilidad.

---

## **Instalación**

1. Clona este repositorio:

   ```bash
   git clone https://github.com/VenticinqueMauro/pruebatecnica-bcome.git
   cd pruebatecnica-bcome
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el proyecto:
   ```bash
   npm run dev
   ```

---

## **Estilo y Adaptabilidad**

- **Tailwind CSS:** Proporciona estilos personalizados y consistentes.
- **Diseño Responsivo:** Adaptado para dispositivos móviles y escritorio.
  - Sidebar se contrae en pantallas pequeñas.
  - Contenido principal se ajusta automáticamente.

---

## **Interactividad**

| **Funcionalidad**          | **Descripción**                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------- |
| **Búsqueda por Nombre**   | Filtra los proyectos según el término ingresado en tiempo real.                           |
| **Ordenamiento por Fecha** | Ordena las filas por la columna `Creation Date` al hacer clic en el encabezado de la tabla. |
| **Cambio de Estado**       | Cambia dinámicamente entre `Completed` y `Pending` al hacer clic en la celda del estado.   |

---

## **Tecnologías Utilizadas**

- **React:** Biblioteca principal para crear componentes interactivos.
- **TypeScript:** Asegura la tipificación y reduce errores en el desarrollo.
- **Tailwind CSS:** Framework de estilos para un diseño rápido y elegante.
- **Shadcn** Libreria de componentes de Tailwind CSS.
- **Framer Motion:** Animación de componentes.

---
