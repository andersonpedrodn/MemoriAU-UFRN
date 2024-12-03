import { Routes } from '@angular/router';

//Components
import { SobreComponent } from './pages/sobre/sobre.component';
import { DadosDoCursoComponent } from './pages/dados-do-curso/dados-do-curso.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent ,
    },

    {
        path: 'sobre',
        title: 'Sobre',
        component: SobreComponent,
    },

    {
        path: 'dados',
        title: 'Dados do Curso',
        component: DadosDoCursoComponent,
    }
];
