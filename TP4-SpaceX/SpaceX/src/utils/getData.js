const API = 'https://api.spacexdata.com/v5/launches'

const getData = async (id) => {
    const apiURL = id ? `${API}/${id}` : API;
    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
        return []; // Retorna un arreglo vacío o null como fallback
    }
}

export default getData;