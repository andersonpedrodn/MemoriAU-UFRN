import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  constructor(private modalService: NgbModal){
    
  }

  isModalVisible = false; //Controle da visibilidade do modal
  selectedImage: string = ''; //Caminho da imagem 
  selectedDescription: string = ''; //Descrição da imagem

  // timelineItems = [
  //   { 
  //     year: 1978, 
  //     image: 'assets/images/imageHistoricoEscolar.webp', 
  //     alt: 'Planta geral do campus em 1978', 
  //     description: 'Planta geral do campus em 1978',
      
  //   },

  //   { year: 1979, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Ano 1973', 
  //     description: 'Histórico escolar de aluna da primeira turma do CAU-UFRN',
  //     credit: 'Virgínia Araújo'
  //   },

  //   { year: 1978, image: 'assets/img/ano1973.jpg', 
  //     alt: 'álbum de fotografia da colação de grau da UFRN de 1978', 
  //     description: 'Capa do álbum de fotografia da colação de grau da UFRN de 1978',
  //     credit: 'Acervo BCZM'
  //   },
  //   { year: 1978, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Imagem de dois homens colocando a placa do setor IV', 
  //     description: 'Descerramento de placa do Setor de Aulas Teóricas IV em 1978',
  //     credit: 'Acervo BCZM'
  //   },
  //   { year: 1978, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Imagem de mulher na frente da placa do LABCON', 
  //     description: 'Instalação de placa do LABCON',
  //     credit: 'Virgínia Araújo'
  //   },
  //   { year: 1978, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Fotografia com vários ex alunos na entrega de certificações do curso de especialização', 
  //     description: 'Entrega de certificados do Curso de especialização e estudos do habitat com ênfase na questão ambiental.',
  //     credit: 'Eunádia Cavalcante'
  //   },
  //   { year: 1978, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Fotografia com pessoas apresentando', 
  //     description: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN)'
  //   },
  //   { year: 2006, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Fotografia com capa de revista', 
  //     description: 'Capa da primeira edição da revista Penas'
  //   },
  //   { year: 2006, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Fotografia com pessoas apresentando', 
  //     description: 'Abertura do Mestrado Profissional',
  //     credit: 'Virgínia Araújo'
  //   },
      
  //   { year: 2006, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Folheto de convite de comemoração dos 40 anos do CAU-UFRN', 
  //     description: 'Convite de comemoração dos 40 anos do CAU-UFRN',
  //   },
  //   { year: 2006, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Folheto da revista Projetar', 
  //     description: 'Capa da primeira edição da Revista Projetar ',
  //   },
  //   { year: 2006, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Fotografia de certificado', 
  //     description: 'Certificado de acreditação',
  //     credit: 'CAU-BR'
  //   },
  //   { year: 2021, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Fotografia de video chamada durante colação de grau no período de pandemia COVID-19', 
  //     description: 'Colação de Grau 2021',
  //     credit: 'YouTube do CT'
  //   },
  //   { year: 2021, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Fotografia da inauguração do NEAU com alunos e professores', 
  //     description: 'Inauguração do NEAU',
  //     credit: 'Glauce Albuquerque'
  //   },
  //   { year: 2021, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Fotografia da inauguração da Placa Prof. Paulo Nobre como forma de homanagem póstuma ao professor e aos 50 anos do curso de arquitetura e urbanismo da UFRN', 
  //     description: 'Inauguração da Placa da Praça',
  //     credit: 'Conselho de Arquitetura e Urbanismo CAU-RN'
  //   },
  //   { year: 2024, image: 'assets/img/ano1973.jpg', 
  //     alt: 'Fotografia com pessoas na Câmara Municipal de Natal', 
  //     description: 'Solenidade na Câmara Municipal de Natal',
  //     credit: 'Verônica Macedo'
  //   },
      
  // ];

  
  // Função para abrir o modal
  openModal(imageSrc: string, description: string, content: any) {
    this.selectedImage = imageSrc;
    this.selectedDescription = description;
    this.modalService.open(content);
  }

//  //Fechar modal
    closeModal() {
    this.isModalVisible = false;
    }
} 

  
 