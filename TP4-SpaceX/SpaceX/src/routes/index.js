import Header from '../templates/Header';
import Home from '../pages/Home';
import LaunchDetail from '../pages/LaunchDetail';
import Error404 from '../pages/Error404';

const routes = {
  '/': Home,
};

const router = async () => {
  const header = document.getElementById('header');
  const content = document.getElementById('content');

  header.innerHTML = await Header();

  // Sacamos el hash (ej: "#/launch/5eb87d42ffd86e000604b388")
  const hash = location.hash.slice(1).toLowerCase() || '/';

  let render;

  if (hash.startsWith('/launch/')) {
    // Extraemos el id que viene después de "/launch/"
    const id = hash.split('/')[2];
    render = () => LaunchDetail(id); // se lo pasamos a la página detalle
  } else {
    render = routes[hash] ? routes[hash] : Error404;
  }

  content.innerHTML = await render();
};

export default router;
