//link=https://www.instagram.com/;


// Función que simula una solicitud asíncrona a una API ficticia de Instagram
async function fetchInstagramData() {
    // Simulamos una solicitud asíncrona que tarda 2 segundos en completarse
    console.log('Fetching data from Instagram (asynchronous)');
    await sleep(2000); // Simula una espera de 2 segundos
    return {
      username: 'usuario_ejemplo',
      followers: 1000,
      posts: 500
    };
  }
  
  // Función que simula una espera
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Función que muestra los datos obtenidos de la API de Instagram
  async function displayInstagramData() {
    console.log('Inicio de la carga de datos de Instagram');
    try {
      const instagramData = await fetchInstagramData();
      console.log('Datos de Instagram:', instagramData);
    } catch (error) {
      console.error('Error al obtener datos de Instagram:', error);
    }
  }
  
  // Llamada a la función para mostrar los datos de Instagram
  displayInstagramData();