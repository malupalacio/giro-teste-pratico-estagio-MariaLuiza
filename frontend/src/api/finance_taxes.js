import axios from 'axios';

export async function getTaxasBrasil() {
  const url = `https://api.hgbrasil.com/finance?format=json-cors&key=${process.env.NEXT_PUBLIC_API_KEY}`;

  try {
    const response = await axios.get(url);

    // Depuração tirar depois
    console.log('Dados da API:', response.data);

    // Pegando os dados desejados
    const taxas = response.data.results?.taxes?.[0];

    if (!taxas) {
      throw new Error('Dados de taxas não encontrados');
    }

    const { date, cdi, selic, daily_factor, cdi_daily, selic_daily } = taxas;

    console.log('Valor do CDI:', cdi); // apagar depois 

    return { date, cdi, selic, daily_factor, cdi_daily, selic_daily };

  } catch (error) {
    console.error('Erro ao buscar taxas:', error);
    throw new Error('Não foi possível carregar as taxas');
  }
}
