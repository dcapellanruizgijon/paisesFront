export interface PaisPersonal {
    id?: number;
    nombre: string;           // nombre del país
    bandera: string;          // URL de la bandera
    motivoViaje: string;      // motivo del viaje
    zona: string;            // zona/región
    presupuesto: number;      // presupuesto estimado
    prioridad: number;        // 1-5
    notasPersonales: string;  // notas adicionales
}
