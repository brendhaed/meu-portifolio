
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          loop: true,            // Garante que o carrossel irá reiniciar quando chegar ao final
          margin: 10,            // Espaçamento entre os itens (opcional)
          nav: true,             // Para mostrar as setas de navegação (opcional)
          autoplay: true,        // Ativa o autoplay
          autoplayTimeout: 2000, // Define o tempo entre as transições (em milissegundos)
          autoplayHoverPause: true // Pausa o autoplay quando o mouse está sobre o carrossel
        });
      });
      
