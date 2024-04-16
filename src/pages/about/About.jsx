import "./style.scss";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';

const About = () => {
    return (
        <ContentWrapper>
            <div className="detailsAbout">
                <div className="content">
                    <div className="overview">
                        <h1 className="heading">
                            About Project
                        </h1>
                        <div className="description">
                            Movie App is a React-based movie website that allows users to search for movies by title, and sort them by genre, popularity, rating, release date, and title. also, allows users to view trending, popular, top-rated movies and view detailed information about each movie. The website is designed to be user-friendly and visually appealing.
                        </div>
                        <h1 className="heading">Features & Technology</h1>

                        <ul className="menuItems">
                            <li className="menuItem">React 18 and its latest features</li>
                            <li className="menuItem">React hooks and state management</li>
                            <li className="menuItem">Global state containers with Redux Tookit</li>
                            <li className="menuItem">React Router DOM Version 6</li>
                            <li className="menuItem">Easy maintainable and scalable folder structure</li>
                            <li className="menuItem">Fetch data from Rest API with Axios</li>
                            <li className="menuItem">Create custom hooks</li>
                            <li className="menuItem">Create carousel/slider without library</li>
                            <li className="menuItem">Create Infinite scrolling</li>
                            <li className="menuItem">Loading Skeleton while fetching data from API</li>
                            <li className="menuItem">Error handling & 404 forbidden page</li>
                            <li className="menuItem">Responsive layout with perfectly placed media queries and Sass</li>
                            <li className="menuItem">Search movies by title</li>
                            <li className="menuItem">Sort movies by genre</li>
                            <li className="menuItem">View trending and popular and top-rated movies</li>
                            <li className="menuItem">View detailed information about each movie</li>
                        </ul>
                    </div>

                </div>
            </div>
        </ContentWrapper>
    );
};

export default About;