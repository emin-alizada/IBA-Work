import React from "react";

class Login extends React.Component {
    componentDidMount() {
        axios.defaults.withCredentials = true;
    }

    render() {
        return (
            <div className='container mx-auto flex justify-center items-center h-screen w-1/4'>
                {/*<form method="POST" onSubmit={this.getCSRFProtection}>*/}
                <form method="POST" onSubmit={this.attemptLogin}>
                    <div className="mb-6">
                        <label className="block mb-2 uppercase font-bold text-xs text-gray-700"
                               htmlFor="email"
                        >
                            Email
                        </label>

                        <input className="border border-solid border-gray-400 p-2 w-full"
                               type="text"
                               name="email"
                               id="email"
                               autoComplete="email"
                               value='padams@example.com'
                               required
                        />
                    </div>


                    <div className="mb-6">
                        <label className="block mb-2 uppercase font-bold text-xs text-gray-700"
                               htmlFor="password"
                        >
                            Password
                        </label>

                        <input className="border border-solid border-gray-400 p-2 w-full"
                               type="password"
                               name="password"
                               id="password"
                               autoComplete="current-password"
                        />
                    </div>


                    <div className="mb-6">
                        <div>
                            <input className="mr-1"
                                   type="checkbox"
                                   name="remember"
                                   id="remember"
                            />

                                <label className="text-xs text-gray-700 font-bold uppercase"
                                       htmlFor="remember"
                                >
                                    Remember Me
                                </label>
                        </div>
                    </div>


                    <div>
                        <button type="submit"
                                className="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 mr-2"
                        >
                            Submit
                        </button>

                        <a href="" className="text-xs text-gray-700">Forgot Your Password?</a>
                    </div>
                </form>

                <button type="button"
                        className="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 mr-2"
                        onClick={this.pullData}
                >
                    pull data
                </button>
            </div>
        );
    }

    attemptLogin(e) {
        e.preventDefault();

        const form = {
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value,
        };

        console.log(form);

        axios.post('http://tweety-react.test/login', form)
            .then((response)=> {
                console.log(response);
            });
    }

    pullData() {
        axios.get('http://tweety-react.test/api/emin')
            .then((response)=> {
                console.log(response);
            });
    }

    // async getCSRFProtection(e) {
    //     e.preventDefault();
    //
    //     await axios.get('/sanctum/csrf-cookie')
    //         .then( (response) => {
    //             const form = {
    //                 email: document.querySelector("#email").value,
    //                 password: document.querySelector("#password").value,
    //             };
    //
    //             console.log(form);
    //
    //             axios.post('http://tweety-react.test/login', form)
    //                 .then((response)=> {
    //                     console.log(response);
    //                 });
    //         })
    //         .catch(e => {
    //             console.error(e);
    //         })
    // }
}

export default Login;
