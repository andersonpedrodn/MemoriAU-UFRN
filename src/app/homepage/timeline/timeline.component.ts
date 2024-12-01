import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


export interface ImageItem {
  thumb: string;
  relatedImages: RelatedImage[];
  title: string;
  source: string;
}

export interface RelatedImage {
  src: string;
  title: string;
  source: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
  
})


export class TimelineComponent {
  //controle da visibilidade do modal
  isModalOpen: boolean = false;

  //variável para armazenar a imagem atual do modal
  currentImageIndex: number = 0; // Índice da imagem atualmente exibida no modal
  currentImageSet: RelatedImage[] = []; // Conjunto de imagens exibidas no modal
  currentSource: string= ''; // Fonte da imagem atual
  currentTitle: string= '';  // Título da imagem atual

  // Função para rolar até o final
  scrollToEnd() {
    document.getElementById('end')?.scrollIntoView({behavior:'smooth'});
  }
   // Função para rolar até o topo
   scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  //Imagens a serem exibididas no modal
  imageUmEsquerda = [
    { 
      thumb: 'assets/images/imageHistoricoEscolar.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageHistoricoEscolarGrande.webp',
          title: 'Frente do histórico escolar',
          source: 'Fonte: Virgínia Araújo'
        },
        {
          src: 'assets/images/imageHistoricoEscolarGrandeVerso.webp',
          title: 'Verso do histórico escolar',
          source: 'Fonte: Virgínia Araújo'
        }
      ], 
      title: 'Histórico escolar de aluna da primeira turma do CAU-UFRN.',
      source: 'Fonte: Virgínia Araújo'
    },
  ];
  imageDoisEsquerda = [
    { 
      thumb: 'assets/images/placaUfrn.webp', 
      relatedImages: [
        {
          src: 'assets/images/placaUfrnFull.webp',
          title: 'Descerramento de placa do Setor de Aulas Teóricas IV em 1978',
          source: 'Fonte: Acervo BCZM'
        }
      ], 
      title: 'Descerramento de placa do Setor de Aulas Teóricas IV em 1978',
      source: 'Fonte: Acervo BCZM'
    }
  ];
  imageTresEsquerda = [
    { 
      thumb: 'assets/images/imageInstalacaoPlaca.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageInstalacaoPlacaFull.webp',
          title: 'Instalação de placa do LABCON.',
          source: 'Fonte: Virgínia Araújo'
        }
      ], 
      title: 'Instalação de placa do LABCON.',
      source: 'Fonte: Virgínia Araújo'
    }
  ];
  imageQuatroEsquerda = [
    { 
      thumb: 'assets/images/imageDoutoradoPPGAU.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageDoutoradoPPGAUFull.webp',
          title: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN).',
          source: ''
        }
      ], 
      title: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN).',
      source: ''
    }
  ];
  imageCincoEsquerda = [
    { 
      thumb: 'assets/images/imageConvite40anos.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageConvite40anosFull.webp',
          title: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN).',
          source: ''
        }
      ], 
      title: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN).',
      source: ''
    }
  ];
  imageSeisEsquerda = [
    { 
      thumb: 'assets/images/imageColacaoPandemia.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageColacaoPandemiaFull.webp',
          title: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN).',
          source: 'YouTube CT'
        },
        {
          src: 'assets/images/imageColacaoPandemiaFull.webp',
          title: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN).',
          source: 'YouTube CT'
        }
      ], 
      title: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN).',
      source: 'YouTube CT'
    }
  ];

  imageUmDireita = [
    { 
      thumb: 'assets/images/imagePlantaCampus.webp', 
      relatedImages: [
        {
          src: 'assets/images/imagePlantaCampusFull.webp', // Frente do histórico escolar
          title: 'Planta geral do campus.',
          source: ''
        },
        {
          src: 'assets/images/imageDocumentoFull.webp', // Verso do histórico escolar
          title: 'Planta geral do campus.',
          source: ''
        }
      ], 
      title: 'Planta geral do campus.',
      source: ''
    }
  ];
  imageDoisDireita: ImageItem[]   = [
    { 
      thumb: 'assets/images/imageColacaoGrau.webp ', 
      relatedImages : [
        {
          src: 'assets/images/imageColacaoGrauFull.webp', 
          title: 'Capa do álbum de fotografia da colação de grau da UFRN de 1978',
          source: 'Fonte: Acervo BCZM'
        },
        {
          src: 'assets/images/imageConviteFormaturaFull.webp',
          title: 'Convite de formatura da primeira turma do CAU-UFRN',
          source: 'Fonte: Acervo BCZM',
        },
        {
          src:'assets/images/imageConviteFormaturaVersoFull.webp',
          title: 'Verso - Convite de formatura da primeira turma do CAU-UFRN',
          source: 'Fonte: Acervo BCZM',
        },  
        {
          src:'assets/images/imageFormaturaTodosCursosFull.webp',
          title: 'Foto da formatura de todos os cursos da UFRN em 1978',
          source: 'Fonte: Acervo BCZM',
        }  
      ],
      title: 'Histórico escolar de aluna da primeira turma do CAU-UFRN.',
      source: 'Fonte: Virgínia Araújo',
    }
  ];
  imageTresDireita = [
    { 
      thumb: 'assets/images/imageEntregaCertificado.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageEntregaCertificadoFull.webp', // Capa do álbum colação de grau
          title: 'Entrega de certificados do Curso de especialização e estudos do habitat com ênfase na questão ambiental.',
          source: 'Fonte: Eunádia Cavalcante'
        },
        {
          src: 'assets/images/imageEntregaCertificado2Full.webp',  // Convite de formatura da primeira turma do CAU
          title: 'Entrega de certificados do Curso de especialização e estudos do habitat com ênfase na questão ambiental.',
          source: 'Fonte: Eunádia Cavalcante'
        }
      ], 
      title: 'Entrega de certificados do Curso de especialização e estudos do habitat com ênfase na questão ambiental.',
      source: 'Fonte: Eunádia Cavalcante'
    }
  ];
  imageQuatroDireita = [
    { 
      thumb: 'assets/images/imageCapaPrimeiraRevistaPenas.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageCapaPrimeiraRevistaPenasFull.webp', // Capa do álbum colação de grau
          title: 'Capa da primeira edição da Revista Penas',
          source: ''
        }
      ], 
      title: 'Capa da primeira edição da Revista Penas.',
      source: ''
    }
  ];
  imageCincoDireita = [
    { 
      thumb: 'assets/images/imageAberturaMestrado.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageAberturaMestradoFull.webp', // Capa do álbum colação de grau
          title: 'Abertura do Mestrado Profissional.',
          source: 'Fonte: Virgínia Araújo'
        }
      ], 
      title: 'Abertura do Mestrado Profissional.',
      source: 'Fonte: Virgínia Araújo'
    }
  ];
  imageSeisDireita = [
    { 
      thumb: 'assets/images/imageCapaPrimeiraRevistaProjetar.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageCapaPrimeiraRevistaProjetarFull.webp', // Capa do álbum colação de grau
          title: 'Capa da primeira edição da Revista Projetar.',
          source: ''
        }
      ], 
      title: 'Capa da primeira edição da Revista Projetar.',
      source: ''
    }
  ];
  imageSeteDireita = [
    { 
      thumb: 'assets/images/imageCertificadoAcreditacao.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageCertificadoAcreditacaoFull.webp', // Capa do álbum colação de grau
          title: 'Certificado de Acreditação',
          source: 'Fonte: CAU-BR'
        },
        {
          src: 'assets/images/imageVisitaConselhoFull.webp', // Capa do álbum colação de grau
          title: 'Visita do Conselho de Arquitetura e Urbanismo - CAU/BR ao curso de Arquitetura e Urbanismo da UFRN, durante o processo de Acreditação',
          source: 'Fonte: CAU-BR'
        }
      ], 
      title: 'Certificação de acreditação',
      source: 'Fonte: CAU-BR'
    }
  ];
  imageOitoDireita = [
    { 
      thumb: 'assets/images/imageInauguracaoNEAU.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageInauguracaoNEAUFull.webp', // Capa do álbum colação de grau
          title: 'Inauguração do NEAU',
          source: 'Fonte: Glauce Albuquerque'
        },
        {
          src: 'assets/images/imageInauguracao2NEAUFull.webp', // Capa do álbum colação de grau
          title: 'Inauguração do NEAU',
          source: 'Fonte: Cícero Oliveira'
        }
      ], 
      title: 'Certificação de acreditação',
      source: 'Fonte: Glauce Albuquerque'
    }
  ];
  imageNoveDireita = [
    { 
      thumb: 'assets/images/imagePlacaPraca.webp', 
      relatedImages: [
        {
          src: 'assets/images/imagePlacaPracaFull.webp', 
          title: 'Inauguração da Placa da Praça',
          source: 'Fonte: Conselho de Arquitetura e Urbanismo CAU-RN'
        },
        {
          src: 'assets/images/imagePlacaPraca2Full.webp', 
          title: 'Inauguração da Placa da Praça',
          source: 'Fonte: Conselho de Arquitetura e Urbanismo CAU-RN'
        }
      ], 
      title: 'Inauguração da Placa da Praça',
      source: 'Fonte: Conselho de Arquitetura e Urbanismo CAU-RN'
    }
  ];
  imageDezDireita = [
    { 
      thumb: 'assets/images/imageSolenidade.webp', 
      relatedImages: [
        {
          src: 'assets/images/imageSolenidadeFull.webp', 
          title: 'Solenidade na Câmara Municipal de Natal',
          source: 'Fonte: Verônica Macedo'
        },
        {
          src: 'assets/images/imageSolenidade2Full.webp', 
          title: 'Solenidade na Câmara Municipal de Natal',
          source: 'Fonte: Verônica Macedo'
        }
      ], 
      title: 'Solenidade na Câmara Municipal de Natal',
      source: 'Fonte: Verônica Macedo'
    }
  ];
 
    

  showModal(image: ImageItem) { 
    this.isModalOpen = true;
    this.currentImageSet = image.relatedImages; // Define o conjunto de imagens relacionadas
    this.currentImageIndex = 0; // Começa na primeira imagem do conjunto
    this.updateCurrentImage()
  }

  closeModal() {
    this.isModalOpen = false;
    this.currentImageSet = [];
    this.currentSource = '';
    this.currentTitle = '';
  }

  //Avançar para a próxima imagem
  nextImage() {
    if (this.currentImageIndex < this.currentImageSet.length - 1) {
      this.currentImageIndex++;
      this.updateCurrentImage();
    }
  }


  //Volta para a imagem anterior
  prevImage():void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.updateCurrentImage();
    }
  }

  private updateCurrentImage() {
    const currentImage = this.currentImageSet[this.currentImageIndex];
    this.currentTitle = currentImage.title;
    this.currentSource = currentImage.source;
  }
} 

  
 