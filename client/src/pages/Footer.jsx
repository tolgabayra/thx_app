import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="text-gray-700 body-font">

                <div className="bg-gray-200">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Rust Based —
                            <a className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@tolgabayra</a>
                        </p>
                        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">No Context Here</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
