import React, {Component} from 'react';
import Loader from "../../Components/Loader";
import PropTypes from 'prop-types';
import "./css/language-selector.scss";
import "./css/language-selector-media.scss";
import {Link} from "react-router-dom";
import CapsuleButton from "../../Components/CapsuleButton";
import MadeBy from "../../Components/MadeBy";

class LanguageSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: this.props.match.url,
            restaurant: this.props.match.params.restaurant,
            languages: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        this.getLanguages();
    }

    render() {
        const {url, isLoading} = this.state;

        return (
            <div>
                {isLoading
                    ? <Loader/>
                    :
                    <div className="fixed h-full w-full top-0 left-0 px-3 py-8 overflow-scroll flex flex-col justify-center items-center text-center text-lg md:text-2xl">
                        <h4 className="mb-12 text-red-800">Please choose the language</h4>
                        <ul>
                            {this.state.languages.map( (language) =>
                                <li className="mb-4 last:mb-0" key={language.id}>
                                    <Link to={{
                                        pathname: url + '/categories',
                                        state: { langId: language.id }
                                    }}>
                                        <CapsuleButton text={language.title}/>
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <div className="mt-6">
                            <MadeBy />
                        </div>
                    </div>
                    }
            </div>
        );
    }

    getLanguages = async () => {
        const apiUrl = `/api/${this.state.restaurant}/languages`
        return await axios.get(apiUrl)
            .then( (response) => {
                this.setState({
                    languages: response.data,
                    isLoading: false
                });
            })
            .catch(e => {
                console.error(e);
            })
    };
}

LanguageSelector.propTypes = {};

export default LanguageSelector;
