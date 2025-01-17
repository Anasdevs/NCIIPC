import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

export default function 
() {
  return (
    <div>
      <Helmet>
      <title>404 Page not found | NCIIPC</title>
    </Helmet>
        <div class="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
    <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
        <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Page Not Found</p>
        <p class="text-gray-500 mt-4 pb-4 border-b-2 text-center">Sorry, the page you are looking for could not be found.</p>
        <a href="/" aria-label="Home" class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
        <FontAwesomeIcon icon={faArrowLeft} />
            <span>Return Home</span>
        </a>
    </div>
</div>

    </div>
  )
}
