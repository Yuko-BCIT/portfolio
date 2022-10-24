import laptop from "../images/laptop.jpg";
import { NavLink } from "react-router-dom";

function PageWork() {

    return (
        <main className="work">
                <h1>Work</h1>
            <section className="work-links">
                <figure>
                    <img src={ laptop } alt="screen shot of a bakery website" />
                    <p className="button-details">See Details</p>
                    <figcaption>Capstone Project - Twilling Bakery</figcaption>
                </figure>

                <figure>
                    <img src={ laptop } alt="screen shot of a portfolio website" />
                    <p className="button-details">See Details</p>
                    <figcaption>Portfolio - Yuko Web Works</figcaption>
                </figure>

                <figure>
                    <img src={ laptop } alt="screen shot of a movie database website" />
                    <NavLink to="/work/movie">
                        <p className="button-details">See Details</p>
                        </NavLink>
                    <figcaption>React App - Preview</figcaption>
                </figure>

                <figure>
                    <img src={ laptop } alt="screen shot of a game website" />
                    <p className="button-details">See Details</p>
                    <figcaption>JavaScript Gsme - High Low</figcaption>
                </figure>
            </section>

            <section>
                <h2>Upcoming Projects</h2>
                <p>I'm working on a senior daycare center website based in Tokyo. Check it out here in early 2023!
                Interested in my work? Feel free to contact me through emails.</p>
            </section>
        </main>
    );

}

export default PageWork;