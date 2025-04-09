import { createContext, useContext, useEffect  } from "react"


const MovieContext = createContext();

export const useMovieContext = useContext(MovieContext);

export const MovieProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // check if exist item in local storage and set it to state
        const storedFev = localStorage.getItem("favorites");
        if(storedFev) setFavorites(JSON.parse(storedFev));
    }, []);

    useEffect(() => {
        // set the favorites to local storage when favorites state change
        localStorage.setItem(JSON.stringify(favorites));
    },[favorites])
}


