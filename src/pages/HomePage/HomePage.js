import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {UncontrolledCarousel} from "reactstrap"

import css from "./Home.module.css";

const HomePage = () => {
    return (
        <div className={css.Home}>
            <UncontrolledCarousel
                items={[
                    {
                        altText: 'Slide 1',
                        caption: `THE KING'S MAN`,
                        key: 1,
                        src: 'https://www.kino-teatr.ru/news/22200/196942.jpg'
                    },
                    {
                        altText: 'Slide 2',
                        caption: 'WEST SIDE STORY',
                        key: 2,
                        src: 'https://static.timesofisrael.com/www/uploads/2021/12/west-side-story-epk-DF-05507_R_CROP.jpg'
                    },
                    {
                        altText: 'Slide 3',
                        caption: 'DEATH ON THE NILE',
                        key: 3,
                        src: 'https://www.vitalthrills.com/wp-content/uploads/2021/12/death-on-the-nile.jpg'
                    },
                    {
                        altText: 'Slide 3',
                        caption: 'THE FRENCH DISPATCH',
                        key: 3,
                        src: 'https://media.newyorker.com/photos/617726db3a9f1e32755a7aee/master/pass/Brody-Dispatch.jpg'
                    },
                    {
                        altText: 'Slide 3',
                        caption: 'ANTLERS',
                        key: 3,
                        src: 'https://film-authority.com/wp-content/uploads/2021/12/Antlers-1200x675-1.jpeg'
                    },
                    {
                        altText: 'Slide 3',
                        caption: 'THE LAST DUEL',
                        key: 3,
                        src: 'https://m.media-amazon.com/images/M/MV5BODQyY2RhMDEtYzNjMC00YTMyLTkzYTUtYmM3MDllYmUyNDE3XkEyXkFqcGdeQWFybm8@._V1_.jpg'
                    }
                ]}
            />

        </div>
    );
};

export {HomePage};