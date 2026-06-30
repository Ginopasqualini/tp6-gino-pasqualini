// ===== ALMACENAMIENTO DE FIGURITAS =====
const figuritas = {
    'messi': { nombre: 'Lionel Messi', posicion: 'Delantero', pegada: false },
    'dibu': { nombre: 'Emiliano Martínez', posicion: 'Arquero', pegada: false },
    'dimariaangel': { nombre: 'Ángel Di María', posicion: 'Extremo', pegada: false },
    'alvarez': { nombre: 'Julián Álvarez', posicion: 'Delantero', pegada: false },
    'enzo': { nombre: 'Enzo Fernández', posicion: 'Mediocampista', pegada: false },
    'taglia': { nombre: 'Nicolás Tagliafico', posicion: 'Lateral', pegada: false },
    'correa': { nombre: 'Joaquín Correa', posicion: 'Delantero', pegada: false },
    'romero': { nombre: 'Cristian Romero', posicion: 'Defensa', pegada: false }
};

// Cargar estado guardado
function cargarEstado() {
    const estado = localStorage.getItem('albumEstado');
    if (estado) {
        Object.assign(figuritas, JSON.parse(estado));
        actualizarUI();
    }
}

// Guardar estado
function guardarEstado() {
    localStorage.setItem('albumEstado', JSON.stringify(figuritas));
}

// Actualizar interfaz
function actualizarUI() {
    let pegadas = 0;
    let faltantes = 0;

    for (let key in figuritas) {
        const btn = document.querySelector(`[data-jugador="${key}"]`);
        if (btn) {
            if (figuritas[key].pegada) {
                btn.innerHTML = '✅ ¡PEGADA!';
                btn.classList.add('pegada');
                btn.disabled = true;
                pegadas++;
            } else {
                btn.innerHTML = '¡Pegar Figurita!';
                btn.classList.remove('pegada');
                btn.disabled = false;
                faltantes++;
            }
        }
    }

    // Actualizar estadísticas
    document.getElementById('pegadas').textContent = `${pegadas}/8`;
    document.getElementById('faltantes').textContent = faltantes;
    
    const progreso = (pegadas / 8) * 100;
    const progressBar = document.getElementById('progress');
    if (progressBar) {
        progressBar.style.width = progreso + '%';
    }
}

// Pegar figurita
document.querySelectorAll('.btn-pegar').forEach(btn => {
    btn.addEventListener('click', function() {
        const jugador = this.dataset.jugador;
        
        if (figuritas[jugador]) {
            figuritas[jugador].pegada = true;
            guardarEstado();
            actualizarUI();
            
            // Animación
            this.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);

            // Mensaje celebración
            if (document.querySelectorAll('.btn-pegada').length === 8) {
                setTimeout(() => {
                    alert('🎉 ¡¡FELICIDADES!! ¡¡Completaste el álbum de CAMPEONES!! 🎉\n\n¡Argentina es tu colección de honor!');
                }, 300);
            }
        }
    });
});

// Abrir sobre aleatorio
document.querySelector('.btn-abrir')?.addEventListener('click', function() {
    const figuritasPendientes = Object.keys(figuritas).filter(k => !figuritas[k].pegada);
    
    if (figuritasPendientes.length === 0) {
        alert('🎊 ¡Tienes todas las figuritas! ¡Eres un verdadero coleccionista! 🎊');
        return;
    }

    const aleatorio = figuritasPendientes[Math.floor(Math.random() * figuritasPendientes.length)];
    const figurita = figuritas[aleatorio];
    
    alert(`🎁 ¡Abriste un sobre!\n\n📸 ${figurita.nombre}\n📍 Posición: ${figurita.posicion}\n\n¡A pegar esta figurita!`);
});

// Agregar estilos para animación
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    .btn-pegar.pegada {
        background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%) !important;
        cursor: not-allowed !important;
    }

    .btn-pegar:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    /* Tema oscuro opcional */
    @media (prefers-color-scheme: dark) {
        body {
            background-color: #0f172a;
            color: #f1f5f9;
        }

        .seccion-formulario,
        .seccion-preferencias,
        .seccion-contacto,
        .tarjeta-figurita,
        .stat-box,
        .seccion-faq,
        fieldset {
            background-color: #1e293b;
            color: #f1f5f9;
        }

        .faq-item {
            background-color: #334155;
        }

        input, select, textarea {
            background-color: #1e293b;
            color: #f1f5f9;
            border-color: #475569;
        }
    }
`;
document.head.appendChild(style);

// Cargar estado al iniciar
document.addEventListener('DOMContentLoaded', cargarEstado);

// Sincronizar entre pestañas
window.addEventListener('storage', (e) => {
    if (e.key === 'albumEstado') {
        cargarEstado();
    }
});

// ===== FUNCIONES ADICIONALES =====

// Validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Mostrar notificación
function mostrarNotificacion(mensaje, tipo = 'info') {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${tipo === 'error' ? '#dc2626' : tipo === 'success' ? '#16a34a' : '#3b82f6'};
        color: white;
        border-radius: 6px;
        z-index: 9999;
        animation: slideIn 0.3s;
    `;
    notif.textContent = mensaje;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 4000);
}

// Animación CSS para notificaciones
const styleNotif = document.createElement('style');
styleNotif.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(styleNotif);

// Exportar funciones para uso global
window.albumUtils = {
    validarEmail,
    mostrarNotificacion,
    figuritas,
    guardarEstado,
    cargarEstado
};