import axios from 'axios';


export async function getCotacaoMoedas() {
  const url = `https://api.hgbrasil.com/finance?format=json-cors&key=3ab5a5e4`;
  
  try {
    const response = await axios.get(url);

    // Depuração tirar depois
    console.log('Resposta da API:', response.data);

    if (!response.data.results?.currencies) {
      throw new Error('Não foi possível carregar as cotações');
    }

    const cotacao = response.data.results.currencies;

    // Mapeamento das moedas
    const cotacoesDetalhadas = Object.keys(cotacao).map((key) => {
      const coin = cotacao[key];
      return {
        name: coin.name,
        buy: coin.buy,
        sell: coin.sell,
        variation: coin.variation
      };
    });

    return cotacoesDetalhadas;

  } catch (error) {
    console.error('Erro de resposta da API:', error);
    throw new Error('Erro ao buscar as cotações das moedas');
  }
}
