import getData from '../utils/getData';

const LaunchDetail = async (id) => {
  const launch = await getData(id);

  // check si launch es un objeto válido
  if (!launch || typeof launch !== 'object') {
    return '<h2>Lanzamiento no encontrado</h2>';
  }

  // Extraemos los datos relevantes con fallbacks
  const {
    name,
    links = {},
    details,
    flight_number,
    date_utc,
    failures = []
  } = launch;
  const imageUrl = links.patch?.small || 'https://via.placeholder.com/150';

  // Formateamos las fallas como lista
  const failureDetails = failures.length > 0
    ? failures.map(f => `<li>${f.reason || 'Razón no especificada'}</li>`).join('')
    : '<li>Ninguna</li>';

  const view = `
    <section class="Rockets-card"> <!-- Usamos el estilo existente para consistencia -->
      <h1>${name}</h1>
      <img src="${imageUrl}" alt="${name} patch">
      <h2>Detalles</h2>
      <p>${details || 'Sin detalles disponibles'}</p>
      <h3>Fallas</h3>
      <ul>${failureDetails}</ul>
      <p><strong>Número de vuelo:</strong> ${flight_number || 'N/A'}
       ${links.webcast ? `<a href="${links.webcast}" target="_blank">Ver webcast</a>` : ''}
       ${links.wikipedia ? ` | <a href="${links.wikipedia}" target="_blank">Wikipedia</a>` : ''}
      </p>
      <p><strong>Fecha y hora de despegue:</strong> ${new Date(date_utc).toLocaleString()}</p>
      <a href="#/">⬅ Volver</a>
    </section>
  `;

  return view;
};

export default LaunchDetail;