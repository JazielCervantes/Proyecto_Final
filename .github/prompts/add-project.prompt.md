---
mode: agent
description: Agrega un nuevo proyecto al portafolio. Úsalo cuando quieras registrar un nuevo trabajo en ProjectsList.jsx.
---

Agrega el siguiente proyecto al portafolio:

**Título**: ${input:title:Nombre del proyecto}
**Descripción**: ${input:description:Breve descripción de qué hace el proyecto}
**Tecnologías**: ${input:technologies:ej. React, Node.js, MongoDB}
**URL de GitHub**: ${input:githubUrl:https://github.com/JazielCervantes/...}
**Color de acento**: ${input:color:ej. from-blue-500 to-cyan-500}

## Instrucciones

1. Lee [`src/components/ProjectsList.jsx`](../../../src/components/ProjectsList.jsx) para entender la estructura actual del array `projects`.
2. Genera el nuevo objeto de proyecto siguiendo exactamente el mismo schema: `{ id, title, description, technologies: [], githubUrl, image, color }`.
3. Para `image`, usa `'/images/project${nextId}.jpg'` donde `nextId` es el siguiente número consecutivo.
4. Añade el objeto al **final** del array `projects`.
5. Avisa al usuario que debe agregar la imagen del proyecto a `public/images/` con el nombre correspondiente.
