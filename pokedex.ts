// pega o nome do pokémon pelo terminal
const pokemonName = process.argv[2];

// validação
if (!pokemonName) {
  console.log("informe o nome do pokémon (ex: npx ts-node pokedex.ts pikachu) ou o id do pokémon (ex: npx ts-node pokedex.ts 1)");
  process.exit();
}

// função para buscar os dados do pokémon
// async/await para lidar com a requisição assíncrona (ou seja, espera a resposta da API antes de continuar)
async function getPokemonData(name: string) {
  try {
    const response = await fetch(
      // fetch para fazer a requisição HTTP para a API do pokémon
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
    );
    // tratamento de erro caso o pokémon não seja encontrado (status 404)
    if (!response.ok) {
      console.log("status 404: pokémon não encontrado");
      return;
    }

    const data: any = await response.json();

    // formatando os dados para exibição
    const nome = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    const altura = data.height / 10; // metros
    const peso = data.weight / 10; // kg
    const tipos = data.types.map((t: any) => t.type.name).join(", ");


    console.log(`- nome: ${nome} \n- altura: ${altura} m \n- peso: ${peso} kg \n- tipos: ${tipos}`);

  } catch (error) {
    console.log("erro ao conectar à API:", error);
  }
}

getPokemonData(pokemonName);
