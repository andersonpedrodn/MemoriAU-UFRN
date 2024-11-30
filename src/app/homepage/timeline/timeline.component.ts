import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

   
  
  
  //Imagens a serem exibididas no modal
  imageUmEsquerda = [
    { 
      thumb: 'assets/images/imageHistoricoEscolar.webp', 
      relatedImages: [
        'assets/images/imageHistoricoEscolarGrande.webp', // Frente do histórico escolar
        'assets/images/imageHistoricoEscolarGrandeVerso.webp'  // Verso do histórico escolar
      ], 
      title: 'Histórico escolar de aluna da primeira turma do CAU-UFRN.',
      source: 'Fonte: Virgínia Araújo'
    },
  ];
  imageDoisEsquerda = [
      { 
        thumb: 'assets/images/placaUfrn.webp', 
        relatedImages: [
          'assets/images/placaUfrnFull.webp', 
        ], 
        title: 'Descerramento de placa do Setor de Aulas Teóricas IV em 1978',
        source: 'Fonte: Acervo BCZM'
      }
  ]
  imageTresEsquerda = [
      { 
        thumb: 'assets/images/imageInstalacaoPlaca.webp', 
        relatedImages: [
          'assets/images/imageInstalacaoPlacaFull.webp', 
        ], 
        title: 'Instalação de placa do LABCON.',
        source: 'Fonte: Virgínia Araújo'
      }
  ]
  imageQuatroEsquerda = [
      { 
        thumb: 'assets/images/imageDoutoradoPPGAU.webp', 
        relatedImages: [
          'assets/images/imageDoutoradoPPGAUFull.webp', 
        ], 
        title: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN).',
        source: ''
      }
  ]
  imageCincoEsquerda = [
      { 
        thumb: 'assets/images/imageConvite40anos.webp', 
        relatedImages: [
          'assets/images/imageConvite40anosFull.webp', 
        ], 
        title: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN).',
        source: ''
      }
  ]
  imageSeisEsquerda = [
      { 
        thumb: 'assets/images/imageColacaoPandemia.webp', 
        relatedImages: [
          'assets/images/imageColacaoPandemiaFull.webp', 
          'assets/images/imageColacaoPandemiaFull.webp  ', 
        ], 
        title: 'Doutorado Acadêmico em Arquitetura e Urbanismo (PPGAU-UFRN).',
        source: 'YouTube CT'
      }
  ]

  imageUmDireita   = [
    { 
      thumb: 'assets/images/imagePlantaCampus.webp  ', 
      relatedImages: [
        'assets/images/imagePlantaCampusFull.webp', // Frente do histórico escolar
        'assets/images/imageDocumentoFull.webp'  // Verso do histórico escolar
      ], 
      title: 'Planta geral do campus.',
      source: ''
    },
  ];
  imageDoisDireita   = [
    { 
      thumb: 'assets/images/imageColacaoGrau.webp ', 
      relatedImages: [
        'assets/images/imageColacaoGrauFull.webp', // Capa do álbum colação de grau
        'assets/images/imageConviteFormaturaFull.webp',  // Convite de formatura da primeira turma do CAU
        'assets/images/imageConviteFormaturaVersoFull.webp'  // Convite de formatura da primeira turma do CAU verso
      ], 
      title: 'Capa do álbum de fotografias da colação de grau da UFRN de 1978 .',
      source: 'Fonte: Acervo BCZM'
    },
  ];
  imageTresDireita   = [
    { 
      thumb: 'assets/images/imageEntregaCertificado.webp ', 
      relatedImages: [
        'assets/images/imageEntregaCertificadoFull.webp', // Capa do álbum colação de grau
        'assets/images/imageEntregaCertificado2Full.webp',  // Convite de formatura da primeira turma do CAU
  
      ], 
      title: 'Entrega de certificados do Curso de especialização e estudos do habitat com ênfase na questão ambiental .',
      source: 'Fonte: Eunádia Cavalcante'
    },
  ];
  imageQuatroDireita   = [
    { 
      thumb: 'assets/images/imageCapaPrimeiraRevistaPenas.webp ', 
      relatedImages: [
        'assets/images/imageCapaPrimeiraRevistaPenasFull.webp', // Capa do álbum colação de grau
      
      ], 
      title: 'Capa da primeira edição da Revista Penas .',
      source: ''
    },
  ];
  imageCincoDireita   = [
    { 
      thumb: 'assets/images/imageAberturaMestrado.webp ', 
      relatedImages: [
        'assets/images/imageAberturaMestradoFull.webp', // Capa do álbum colação de grau
      
      ], 
      title: 'Abertura do Mestrado Profissional .',
      source: 'Fonte: Virgínia Araújo'
    },
  ];
  imageSeisDireita   = [
    { 
      thumb: 'assets/images/imageCapaPrimeiraRevistaProjetar.webp ', 
      relatedImages: [
        'assets/images/imageCapaPrimeiraRevistaProjetarFull.webp', // Capa do álbum colação de grau
      
      ], 
      title: 'Capa da primeira edição da Revista Projetar .',
      source: 'Fonte: '
    },
  ];
  imageSeteDireita   = [
    { 
      thumb: 'assets/images/imageCertificadoAcreditacao.webp ', 
      relatedImages: [
        'assets/images/imageCertificadoAcreditacaoFull.webp', // Capa do álbum colação de grau
        'assets/images/imageVisitaConselhoFull.webp', // Capa do álbum colação de grau
      
      ], 
      title: 'Certificação de acreditação',
      source: 'Fonte: CAU-BR '
    },
  ];
  imageOitoDireita   = [
    { 
      thumb: 'assets/images/imageInauguracaoNEAU.webp ', 
      relatedImages: [
        'assets/images/imageInauguracaoNEAUFull.webp', // Capa do álbum colação de grau
        'assets/images/imageInauguracao2NEAUFull.webp', // Capa do álbum colação de grau
      
      ], 
      title: 'Certificação de acreditação',
      source: 'Fonte: Glauce Albuquerque '
    },
  ];
  imageNoveDireita   = [
    { 
      thumb: 'assets/images/imagePlacaPraca.webp ', 
      relatedImages: [
        'assets/images/imagePlacaPracaFull.webp', // Capa do álbum colação de grau
        'assets/images/imagePlacaPraca2Full.webp', // Capa do álbum colação de grau
      
      ], 
      title: 'Inauguracação da Placa da Praça',
      source: 'Fonte: Conselho de Arquitetura e Urbanismo CAU-RN '
    },
  ];
  imageDezDireita   = [
    { 
      thumb: 'assets/images/imageSolenidade.webp ', 
      relatedImages: [
        'assets/images/imageSolenidadeFull.webp', // Capa do álbum colação de grau
        'assets/images/imageSolenidade2Full.webp', // Capa do álbum colação de grau
      
      ], 
      title: 'Solenidade na Câmara Municipal de Natal',
      source: 'Fonte: Verônica Macedo '
    },
  ];
 
    //variável para armazenar a imagem atual do modal
    currentImageIndex = 0; // Índice da imagem atualmente exibida no modal
    currentImageSet: string[] = []; // Conjunto de imagens exibidas no modal
    currentSource = ''; // Fonte da imagem atual
    currentTitle = '';  // Título da imagem atual

  showModal(image: any) { 
    this.isModalOpen = true;
    this.currentImageSet = image.relatedImages; // Define o conjunto de imagens relacionadas
    this.currentImageIndex = 0; // Começa na primeira imagem do conjunto
    this.currentSource = image.source; // Fonte dinâmica
    this.currentTitle = image.title;  // Título dinâmico
  }

  closeModal() {
    this.isModalOpen = false;
    this.currentImageSet = [];
  }

  //Avançar para a próxima imagem
  nextImage() {
    if (this.currentImageIndex < this.currentImageSet.length - 1) {
      this.currentImageIndex++;
    }
  }


  //Volta para a imagem anterior
  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

} 

  
 