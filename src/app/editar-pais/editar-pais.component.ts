import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisPersonal } from '../pais-personal';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisPersonalService } from '../pais-personal.service';

@Component({
  selector: 'app-editar-pais',
  standalone: false,
  templateUrl: './editar-pais.component.html',
  styleUrl: './editar-pais.component.css'
})
export class EditarPaisComponent {
  form: FormGroup;
    paisId: number | null = null;
    paisOriginal: PaisPersonal | null = null;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private paisPersonalService: PaisPersonalService
    ) {
        this.form = this.fb.group({
            motivoViaje: ['', Validators.required],
            zona: ['', Validators.required],
            presupuesto: [null, [Validators.required, Validators.min(0)]],
            prioridad: [3, [Validators.required, Validators.min(1), Validators.max(5)]],
            notasPersonales: ['']
        });
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.paisId = +id;
            this.cargarPais(this.paisId);
        }
    }

    cargarPais(id: number): void {
        this.paisPersonalService.getPais(id).subscribe({
            next: (pais) => {
                this.paisOriginal = pais;
                this.form.patchValue({
                    motivoViaje: pais.motivoViaje,
                    zona: pais.zona,
                    presupuesto: pais.presupuesto,
                    prioridad: pais.prioridad,
                    notasPersonales: pais.notasPersonales
                });
            },
            error: (err) => {
                console.error('Error:', err);
                alert('Error al cargar el país');
                this.router.navigate(['/mis-paises']);
            }
        });
    }

    onSubmit(): void {
        if (this.form.valid && this.paisId && this.paisOriginal) {
            const paisActualizado: PaisPersonal = {
                ...this.paisOriginal,
                ...this.form.value
            };

            this.paisPersonalService.actualizarPais(this.paisId, paisActualizado).subscribe({
                next: () => {
                    alert('✅ País actualizado');
                    this.router.navigate(['/mis-paises']);
                },
                error: (err) => {
                    console.error('Error:', err);
                    alert('❌ Error al actualizar');
                }
            });
        }
    }

    cancelar(): void {
        this.router.navigate(['/mis-paises']);
    }
}
