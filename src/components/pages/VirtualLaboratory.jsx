/* eslint-disable no-unused-vars */
import React from 'react'; // Optional, if you still want custom styling for any specific parts

const VirtualLaboratory = () => {
  return (
    <div className="virtual-laboratory py-8 px-4 text-center bg-white dark:bg-gray-900">
      <h1 className="text-2xl mb-10 text-gray-900 dark:text-white">Welcome to the Virtual Laboratory</h1>

      {/* Interactive 3D Lab Tour */}
      <section className="interactive-lab-tour mb-10">
        <div className="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform hover:transform hover:scale-105 max-w-xs mx-auto">
          <h2 className="text-xl mb-4 text-gray-900 dark:text-white">Interactive 3D Lab Tour</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Experience our cutting-edge research environment virtually. See how we transform leafy greens into advanced agri-medicines.</p>
          <img src="https://cdn.the-scientist.com/assets/articleNo/67633/aImg/38229/virtual-lab-tour-article.png" alt="3D Lab Tour" className="w-full rounded-lg mb-4"/>
          <a href="link_to_3d_tour" className="btn inline-block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors">Start Tour</a>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="research-highlights mb-10">
        <h2 className="text-xl mb-6 text-gray-900 dark:text-white">Research Highlights</h2>
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-lg mb-4 text-gray-900 dark:text-white">●	Breakthroughs in crop genome editing.</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">●	Innovations in nutritional optimization.</p>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5o4piVk2pzRwfVpyuzflRyr-Wj4EZeO9qbQ&s" alt="Biotech Breakthrough" className="w-full rounded-lg mb-4"/>
          </div>
          <div className="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-lg mb-4 text-gray-900 dark:text-white">Agri-Medicine Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Learn about our innovative agri-medicines that are making a difference in crop protection and growth.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylIpEUVTDkODM5JKVY1LqCuziF16aKiLgyw&s" alt="Agri Medicine" className="w-full rounded-lg mb-4"/>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="educational-resources mb-10">
        <h2 className="text-xl mb-6 text-gray-900 dark:text-white">Educational Resources</h2>
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-lg mb-4 text-gray-900 dark:text-white">Research Papers</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Access whitepapers, videos, and infographics that explain our processes and discoveries.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GBC1exv9GBm-HeoQ3YHiCzQb4raa_Ce1nQ&s" alt="Research Papers" className="w-full rounded-lg mb-4"/>
            <a href="link_to_papers" className="btn inline-block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors">Read Papers</a>
          </div>
          <div className="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-lg mb-4 text-gray-900 dark:text-white">Infographics</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Browse visually engaging infographics that simplify complex biotech processes.</p>
            <img src="https://media.gettyimages.com/id/1479731433/vector/infographic-element.jpg?s=612x612&w=gi&k=20&c=vJYYGOGC8YulvIMCuSUHEXDF29j_cxY91cceQ08WyNE=" alt="Infographics" className="w-full rounded-lg mb-4"/>
            <a href="link_to_infographics" className="btn inline-block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors">View Infographics</a>
          </div>
          <div className="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-lg mb-4 text-gray-900 dark:text-white">Educational Videos</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Watch our explainer videos to understand the science behind biotechnology and agriculture.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0yUUDWKWsocerXHjYypuqZZjOAy3tZWm3Cg&s" alt="Educational Videos" className="w-full rounded-lg mb-4"/>
            <a href="link_to_videos" className="btn inline-block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors">Watch Videos</a>
          </div>
        </div>
      </section>

      {/* Ask a Scientist */}
      <section className="ask-a-scientist">
        <div className="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-xl mb-4 text-gray-900 dark:text-white">Ask a Scientist</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Engage directly with our experts. Submit your questions and participate in live webinars.</p>
          <form>
            <input type="text" placeholder="Your Name" className="form-input mb-4 p-3 w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"/>
            <input type="email" placeholder="Your Email" className="form-input mb-4 p-3 w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"/>
            <textarea placeholder="Your Question" className="form-input mb-4 p-3 w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"></textarea>
            <button type="submit" className="btn py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors">Submit Question</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VirtualLaboratory;
