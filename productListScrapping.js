// ESSE SCRIPT É PRA OBTER INFORMAÇÕES DE UMA LISTA DE PRODUTOS (PÁGINA INICIAL) NO SITE OPEN FOOD FACTS

function extractProductList() {
    const links = document.querySelectorAll('#products_match_all > li > a');
  
    let itemsDetails = {};
  
    // Iterar sobre cada elemento <a> selecionado
    links.forEach((link, index) => {
      // Extrair o atributo 'title' de cada link
      const title = link.getAttribute('title');
  
      // Selecionar os elementos dentro do elemento <a> atual que contêm as informações de Nutri-Score, NOVA e Eco-Score
      const scoreImages = link.querySelectorAll('.list_product_icons');
  
      let itemDetails = {
        "title": title,
        "scores": {}
      };
  
      // Iterar sobre os img pra extrair as informações
      scoreImages.forEach(img => {
        // Extrair o atributo title porque ele que tem as informações
        const scoreDescription = img.getAttribute('title');
  
        // Selecionando o tipo de score. O split usa o espaço como separador porque o identificador usa hífens (Nutri-Score, NOVA, Eco-Score)
        const scoreType = scoreDescription.split(' ')[0];
  
        // Adiciona a descrição do score ao objeto de detalhes do item atual
        itemDetails.scores[scoreType] = scoreDescription;
      });
  
      // Adiciona os detalhes do item atual ao objeto 'itemsDetails' com a chave sendo o índice
      itemsDetails[index] = itemDetails;
    });
  
    return itemsDetails;
  }
  
  const itemsDetails = extractProductList();
  console.log(itemsDetails);