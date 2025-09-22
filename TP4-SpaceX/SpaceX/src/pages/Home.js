import getData from '../utils/getData';

const Home = async () => {
  const data = await getData();

  const view = `
    <h1>SpaceX Launches</h1>
    <div class="Rockets">
      ${data.map(l => `
        <article class="Rockets-card">
          <a href="#/launch/${l.id}">
            <img src="${l.links.patch.small || 'https://via.placeholder.com/150'}" alt="${l.name} patch">
          </a>
          <h2>${l.name}</h2>
          <p><strong>Fecha:</strong> ${new Date(l.date_utc).toLocaleDateString()}</p>
          <a href="#/launch/${l.id}">Ver detalle</a>
        </article>
      `).join('')}
    </div>
  `;

  return view;
};

export default Home;