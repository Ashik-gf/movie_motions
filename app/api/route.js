export const getAllmovies = async (id) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3d0f4b43e32e1e493438568fb5ab21cf`);
        if (!res.ok) {
            throw new Error(`API request failed with status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export const getPopulerMovies = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3d0f4b43e32e1e493438568fb5ab21cf`)
        if (!res.ok) {
            console.log('Populer movie data fetching Error');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}
export const getSearchMovie = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie?api_key=3d0f4b43e32e1e493438568fb5ab21cf`);
        if (!res.ok) {
            throw new Error(`API request failed with status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export const getRelatedMovies = async (id) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=3d0f4b43e32e1e493438568fb5ab21cf`)
        if (!res.ok) {
            console.log("Error in Recomendations Movies");
        }
        const data = res.json();
        return data
    } catch (error) {
        console.error(error.message);
    }
}
export const getSingleMovie = async (id) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/popular/${id}?api_key=3d0f4b43e32e1e493438568fb5ab21cf`);
        if (!res.ok) {
            console.log('Fetching Single data Not working');
        }
        const data = res.json()
        return data
    } catch (error) {
        console.error(error.message);
    }
}
export const getTopRatedMovie = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=3d0f4b43e32e1e493438568fb5ab21cf`);
        if (!res.ok) {
            console.log('fatching Top rated movies not working');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(erroe.message);
    }
}
export const getTrendingMovies = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=3d0f4b43e32e1e493438568fb5ab21cf`)
        if (!res.ok) {
            console.log('Trending Movies data fetching Error');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.Error(error.message);
    }
}