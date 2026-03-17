import { Component, OnInit } from '@angular/core';
import { PaisPersonal } from '../pais-personal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaisPersonalService } from '../pais-personal.service';

@Component({
    selector: 'app-agregar-pais',
    standalone: false,
    templateUrl: './agregar-pais.component.html',
    styleUrl: './agregar-pais.component.css'
})
export class AgregarPaisComponent implements OnInit {
    form: FormGroup;
    paisData: any = null;
    errorMensaje: string = '';

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private paisPersonalService: PaisPersonalService
    ) {
        this.form = this.fb.group({
            motivoViaje: ['', Validators.required],
            zona: ['', Validators.required],
            presupuesto: [null, [Validators.required, Validators.min(0)]],
            prioridad: [3, Validators.required],
            notasPersonales: ['']
        });
    }

    ngOnInit(): void {
        // Intentar obtener de sessionStorage primero
        const storedPais = sessionStorage.getItem('paisSeleccionado');
        if (storedPais) {
            this.paisData = JSON.parse(storedPais);
            // Limpiar sessionStorage
            sessionStorage.removeItem('paisSeleccionado');
        } else {
            // Si no hay en sessionStorage, intentar con router state
            const navigation = this.router.getCurrentNavigation();
            this.paisData = navigation?.extras?.state?.['pais'] || null;
        }

        // Verificar si tenemos datos
        if (!this.paisData) {
            this.errorMensaje = '⚠️ No se ha seleccionado ningún país. Debes usar el botón "Añadir a mis viajes" desde la lista de países.';
        }
    }

    onSubmit(): void {
        if (!this.paisData) {
            alert('❌ No hay datos del país');
            return;
        }

        if (this.form.invalid) {
            alert('❌ Por favor, completa todos los campos requeridos');
            return;
        }

        const nuevoPais: PaisPersonal = {
            nombre: this.paisData.nombre,
            bandera: this.paisData.banderas,
            motivoViaje: this.form.value.motivoViaje,
            zona: this.form.value.zona,
            presupuesto: this.form.value.presupuesto,
            prioridad: this.form.value.prioridad,
            notasPersonales: this.form.value.notasPersonales
        };

        this.paisPersonalService.crearPais(nuevoPais).subscribe({
            next: () => {
                alert('✅ País guardado en tu lista personal');
                this.router.navigate(['/mis-paises']);
            },
            error: (err) => {
                console.error('Error al guardar:', err);
                alert('❌ Error al guardar el país');
            }
        });
    }

    cancelar(): void {
        this.router.navigate(['/lista-paises']);
    }
}