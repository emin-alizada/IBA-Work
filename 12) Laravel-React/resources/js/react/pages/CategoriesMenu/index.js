import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./css/categories.scss"
import Loader from "../../Components/Loader";
import MadeBy from "../../Components/MadeBy";
import {Link} from "react-router-dom";
import CapsuleButton from "../../Components/CapsuleButton";

class CategoriesMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurant: this.props.match.params.restaurant,
            categories: [],
            isLoading: true,
            langId: this.props.location.state.langId
        }
    }

    componentDidMount() {
        this.getCategories();
    }

    render() {
        const {url, isLoading} = this.state;
        console.log(this.state)
        console.log(this.props)

        return (
            <div>
                {isLoading
                    ? <Loader/>
                    :
                    <div className="fixed h-full w-full top-0 left-0 px-3 py-8 overflow-scroll flex flex-col md:justify-center items-center text-center text-lg md:text-2xl">
                        <h4 className="mb-12 text-red-800">Please choose the Category</h4>
                        <ul className="cat-list">
                            {this.state.categories.map( (categories) =>
                                <li className="mb-4 last:mb-0" key={categories.id}>
                                    <Link to={"#"}>
                                        <CapsuleButton text={categories.title}/>
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

    getCategories = async () => {
        const apiUrl = `/api/${this.state.restaurant}/categories`
        return await axios.get(apiUrl, {
            params: {
                lang: this.state.langId,
            }
        })
            .then( (response) => {
                this.setState({
                    categories: response.data,
                    isLoading: false
                });
            })
            .catch(e => {
                console.error(e);
            })
    };
}

CategoriesMenu.propTypes = {};

export default CategoriesMenu;
