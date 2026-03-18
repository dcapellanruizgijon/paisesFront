import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiRestCountriesService } from '../api-rest-countries.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-grafica',
  standalone: false,
  templateUrl: './grafica.component.html',
  styleUrl: './grafica.component.css'
})
export class GraficaComponent implements OnInit, AfterViewInit {
  paises: any[] = [];
  cargando: boolean = true;
  chart: any;

  constructor(private serv: ApiRestCountriesService) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.serv.getAllPaises().subscribe({
      next: (data: any) => {
        // Transformar y ordenar por población (de mayor a menor)
        this.paises = data
          .map((p: any) => ({
            nombre: p.name?.common || 'Desconocido',
            poblacion: p.population || 0
          }))
          .sort((a: any, b: any) => b.poblacion - a.poblacion)
          .slice(0, 5); // Solo los 5 más poblados para que sea más legible

        this.cargando = false;

        // Crear gráfica después de tener los datos
        setTimeout(() => {
          this.crearGrafica();
        }, 100);
      },
      error: (err) => {
        console.error('Error:', err);
        this.cargando = false;
      }
    });
  }

  ngAfterViewInit(): void {
    // La gráfica se creará después de cargar los datos
  }

  crearGrafica(): void {
    if (this.paises.length === 0) return;

    // Destruir gráfica anterior si existe
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = document.getElementById('miGrafica') as HTMLCanvasElement;
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.paises.map(p => p.nombre),
        datasets: [{
          label: 'Población',
          data: this.paises.map(p => (p.poblacion / 1000000).toFixed(2)),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Top 5 Países más poblados (millones)'
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Millones de habitantes'
            }
          }
        }
      }
    });
  }
}
