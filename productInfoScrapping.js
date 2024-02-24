// ESSE SCRIPT É PRA OBTER INFORMAÇÕES DE UM PRODUTO NO SITE OPEN FOOD FACTS

function extractProductInfo() {

    // Selecionar nome do produto
    const productNameElement = document.querySelector('h2.title-1[property="food:name"][itemprop="name"]');
    const productName = productNameElement ? productNameElement.textContent.trim() : "Nome do produto não encontrado";
  
    // Selecionar todos os scores
    const scoreElements = document.querySelectorAll('#attributes_grid .attribute_card .attr_card_header .attr_text h4');
  
    // Extrair a descrição dos scores
    const nutriScore = scoreElements.length > 0 ? scoreElements[0].textContent.trim() : "Nutri-Score desconhecido";
    const novaScore = scoreElements.length > 1 ? scoreElements[1].textContent.trim() : "NOVA não calculada";
    const ecoScore = scoreElements.length > 2 ? scoreElements[2].textContent.trim() : "Eco-Score não calculado";
  
    // Selecionar e extrair a quantidade
    const quantityElement = document.querySelector('#field_quantity .field_value');
    const quantity = quantityElement ? quantityElement.textContent.trim() : "Informação de quantidade não disponível";

    // Selecionar e extrair a embalagem
    const packagingElement = document.querySelector('#field_packaging .field_value');
    const packaging = packagingElement ? packagingElement.textContent.trim() : "Informação de embalagem não disponível";

    // Selecionar e extrair a marca
    const brandElement = document.querySelector('#field_brands .field_value');
    const brand = brandElement ? brandElement.textContent.trim() : "Informação de marca não disponível";

    // Selecionar e extrair a categoria
    const categoryElements = document.querySelectorAll('#field_categories .field_value a');
    const categories = categoryElements.length > 0 ? Array.from(categoryElements).map(el => el.textContent.trim()).join(", ") : "Informação de categorias não disponível";

    // Selecionar e extrair os países onde é vendido
    const countriesElements = document.querySelectorAll('#field_countries .field_value a');
    const countries = countriesElements.length > 0 ? Array.from(countriesElements).map(el => el.textContent.trim()).join(", ") : "Informação de países de venda não disponível";

    const productInfo = {
      name: productName,
      scores: {
        nutriScore: nutriScore,
        novaScore: novaScore,
        ecoScore: ecoScore
      },
      quantity: quantity,
      packaging: packaging,
      brand: brand,
      categories: categories,
      countries: countries
    };
  
    return productInfo;
}

const productInfo = extractProductInfo();
console.log(productInfo);
