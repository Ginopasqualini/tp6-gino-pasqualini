# 🏆 Álbum Virtual - Selección Argentina Campeona del Mundo 2022

Un sitio web interactivo para coleccionar digitalmente las figuritas de los jugadores de la Selección Argentina que ganó la Copa del Mundo 2022.

## 🎯 Características Principales

### 📱 Páginas Disponibles

1. **Álbum (index.html)** - Página principal
   - Galería de 8 jugadores destacados
   - Sistema de "abrir sobres" aleatorios
   - Pegar figuritas interactivamente
   - Estadísticas de progreso en tiempo real
   - Contador de figuritas pegadas vs. faltantes

2. **Registro (registro.html)** - Crear cuenta
   - Formulario de registro con validaciones
   - Selección de nivel de experiencia
   - Preferencias de colección
   - Confirmación de contraseña
   - Aceptación de términos y condiciones

3. **Preferencias (preferencias.html)** - Personalización
   - Notificaciones personalizables
   - Configuración de privacidad
   - Opciones de visualización
   - Preferencias de intercambios
   - Almacenamiento local (localStorage)

4. **Contacto (contacto.html)** - Soporte e Intercambios
   - Formulario de soporte técnico
   - Sistema de intercambio de figuritas
   - Contacto directo: ginopasqualini557@gmail.com
   - FAQ con preguntas frecuentes

### 🎨 Diseño y Estilos

- **Navegación responsive** con barra superior adhesiva
- **Gradientes modernos** en azul y púrpura
- **Cuadrícula adaptativa** para figuritas
- **Formularios mejorados** con fieldsets y validaciones
- **Tema oscuro automático** (prefers-color-scheme)
- **Animaciones suaves** en botones y transiciones
- **Diseño mobile-first** totalmente responsive

### 🛠️ Funcionalidades Técnicas

#### JavaScript (js/album.js)
- Almacenamiento persistente con `localStorage`
- Sistema de pegar figuritas con estado
- Animaciones dinámicas
- Validación de emails
- Notificaciones emergentes
- Sincronización entre pestañas

#### Almacenamiento de Datos
- Guardado automático del estado del álbum
- Recuperación de datos entre sesiones
- Sincronización en tiempo real

#### Validaciones
- Confirmación de contraseñas
- Validación de correos electrónicos
- Campos requeridos en formularios
- Verificación de edad

## 📋 Estructura del Proyecto

```
tp6-gino-pasqualini/
├── index.html              # Página principal del álbum
├── registro.html           # Formulario de registro
├── preferencias.html       # Configuración de preferencias
├── contacto.html           # Soporte e intercambios
├── css/
│   └── estilos.css         # Estilos CSS completos
├── js/
│   └── album.js            # Lógica JavaScript
├── img/                    # Carpeta de imágenes (fotos de jugadores)
│   ├── lionelmessi.png
│   ├── emilianomartinez.png
│   ├── angeldi-maria.png
│   ├── julianalmada.png
│   ├── enzofer.png
│   ├── nicolastagliafico.png
│   ├── joaquincar.png
│   └── cristianromero.png
└── README.md               # Este archivo
```

## 🚀 Cómo Usar

### Iniciar
1. Clona el repositorio o descarga los archivos
2. Abre `index.html` en tu navegador favorito
3. ¡Comienza a coleccionar figuritas!

### Flujo del Usuario
1. **Registro**: Crea tu cuenta en la página de Registro
2. **Preferencias**: Personaliza tu experiencia
3. **Álbum**: Colecciona figuritas pegándolas
4. **Intercambios**: Conecta con otros coleccionistas en Contacto
5. **Soporte**: Si tienes problemas, contacta a través del formulario

## 💾 Datos Almacenados

El navegador guarda automáticamente:
- Estado de figuritas pegadas
- Preferencias de usuario
- Configuración de privacidad
- Notificaciones habilitadas/deshabilitadas

Los datos se almacenan localmente en el navegador y **no se envían a servidores externos**.

## 📧 Contacto y Soporte

**Email de Soporte**: ginopasqualini557@gmail.com

- Reportes de errores: Usar formulario de Soporte Técnico
- Intercambios: Usar formulario de Intercambio de Figuritas
- Respuesta garantizada en: 24-48 horas

## 🎮 Jugadores Incluidos (v1.0)

1. **Lionel Messi** - Delantero | Capitán
2. **Emiliano Martínez** - Arquero | MVP
3. **Ángel Di María** - Extremo Derecho
4. **Julián Álvarez** - Delantero
5. **Enzo Fernández** - Mediocampista
6. **Nicolás Tagliafico** - Lateral Izquierdo
7. **Joaquín Correa** - Delantero
8. **Cristian Romero** - Defensa Central

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript** - Funcionalidades interactivas
- **LocalStorage API** - Almacenamiento local
- **Responsive Design** - Mobile-first approach

## 📱 Compatibilidad

- ✅ Chrome/Edge (versión 90+)
- ✅ Firefox (versión 88+)
- ✅ Safari (versión 14+)
- ✅ Navegadores móviles (iOS, Android)
- ✅ Tablets y dispositivos de diferentes tamaños

## 🎨 Paleta de Colores

- **Primario**: #1e40af (Azul)
- **Secundario**: #7c3aed (Púrpura)
- **Acento**: #dc2626 (Rojo)
- **Success**: #16a34a (Verde)
- **Fondo**: #f8fafc (Gris claro)

## 🚀 Mejoras Futuras

- [ ] Base de datos backend (Node.js, Python, etc.)
- [ ] Sistema de autenticación real
- [ ] Más jugadores del plantel
- [ ] Sistema de intercambios P2P
- [ ] Galería de álbumes completados
- [ ] Leaderboard de coleccionistas
- [ ] Notificaciones por email
- [ ] Descarga de certificado de álbum completo
- [ ] Sistema de logros y badges
- [ ] API REST para sincronización

## 📄 Licencia

Este proyecto es de uso educativo y personal.

## 👨‍💻 Autor

**Gino Pasqualini**
- GitHub: [@Ginopasqualini](https://github.com/Ginopasqualini)
- Email: ginopasqualini557@gmail.com

---

**¡Ayuda a Argentina a completar su colección del Mundial 2022! 🇦🇷🏆**

Hecho con ❤️ para los verdaderos coleccionistas de la Selección Argentina