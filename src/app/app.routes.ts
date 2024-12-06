import { Routes } from '@angular/router';

//Components
import { SobreComponent } from './pages/sobre/sobre.component';
import { DadosDoCursoComponent } from './pages/dados-do-curso/dados-do-curso.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent:   () => 
            import('./pages/home/home.component').then((p) => p.HomeComponent),
    },

    {
        path: 'sobre',
        title: 'Sobre',
        loadComponent:   () => 
            import('./pages/sobre/sobre.component').then((p) => p.SobreComponent),
    },

    {
        path: 'dados',
        title: 'Dados do Curso',
        loadComponent:   () => 
            import('./pages/dados-do-curso/dados-do-curso.component').then((p) => p.DadosDoCursoComponent),
    }
];  
