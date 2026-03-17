import { Component } from '@angular/core';
import { PaisPersonalService } from '../pais-personal.service';
import { Router } from '@angular/router';
import { PaisPersonal } from '../pais-personal';

@Component({
  selector: 'app-mis-paises',
  standalone: false,
  templateUrl: './mis-paises.component.html',
  styleUrl: './mis-paises.component.css'
})
export class MisPaisesComponent {
  misPaises: PaisPersonal[] = [];
    cargando = false;
    mensaje = '';

    constructor(
        private paisPersonalService: PaisPersonalService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.cargarMisPaises();
    }

    cargarMisPaises(): void {
        this.cargando = true;
        this.paisPersonalService.getMisPaises().subscribe({
            next: (data) => {
                this.misPaises = data;
                this.cargando = false;
            },
            error: (err) => {
                console.error('Error:', err);
                this.cargando = false;
                this.mensaje = 'Error al cargar la lista';
            }
        });
    }

    editarPais(id: number | undefined): void {
        if (id) {
            this.router.navigate(['/editar-pais', id]);
        }
    }

    eliminarPais(id: number | undefined): void {
        if (id && confirm('¿Eliminar este país de tu lista?')) {
            this.paisPersonalService.eliminarPais(id).subscribe({
                next: () => {
                    this.mensaje = '✅ País eliminado';
                    this.cargarMisPaises();
                    setTimeout(() => this.mensaje = '', 3000);
                },
                error: (err) => {
                    console.error('Error:', err);
                    this.mensaje = '❌ Error al eliminar';
                }
            });
        }
    }

    getEstrellas(prioridad: number): string {
        return '⭐'.repeat(prioridad);
    }
}
