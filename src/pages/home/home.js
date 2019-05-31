import React from 'react';
import Presentation from './Presentation';
import Caracs from "./Caracs";


class Home extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Kine+ | Accueil";
    }

    render() {
        return (
            <div>
                <Presentation />
                <Caracs />
            </div>
        );
    }
}

export default Home;
