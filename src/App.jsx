import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import AppLayout from "./layout/AppLayput";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import About from "./pages/about/About";
const router = createBrowserRouter( [
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/:mediaType/:id",
                element: <Details />
            },
            {
                path: "/search/:query",
                element: <SearchResult />
            },
            {
                path: "/explore/:mediaType",
                element: <Explore />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
] );

function App() {
    const dispatch = useDispatch();
    const { url } = useSelector( ( state ) => state.home );

    useEffect( () => {
        fetchApiConfig();
        genresCall();
    }, [] );

    const fetchApiConfig = () => {
        fetchDataFromApi( "/configuration" ).then( ( res ) => {

            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };

            dispatch( getApiConfiguration( url ) );
        } );
    };

    const genresCall = async () => {
        let promises = [];
        let endPoints = [ "tv", "movie" ];
        let allGenres = {};

        endPoints.forEach( ( url ) => {
            promises.push( fetchDataFromApi( `/genre/${ url }/list` ) );
        } );

        const data = await Promise.all( promises );
        data.map( ( { genres } ) => {
            return genres.map( ( item ) => ( allGenres[ item.id ] = item ) );
        } );

        dispatch( getGenres( allGenres ) );
    };

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
