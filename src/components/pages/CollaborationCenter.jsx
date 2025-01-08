/* eslint-disable no-unused-vars */
import React from 'react';

const CollaborationCenter = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="p-5 text-center max-w-screen-xl mx-auto">
        <h1 className="text-2xl mb-8">Welcome to the Collaboration Center</h1>
        
        {/* Virtual Meeting Rooms */}
        <section className="virtual-meeting-rooms">
          <h2 className="text-xl mb-5">Virtual Meeting Rooms</h2>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-5 shadow-md transition-all duration-300 transform hover:translate-y-2 hover:shadow-xl max-w-xs w-full text-center">
              <h3 className="text-lg mb-4">Text, Video, and VoIP</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Secure spaces equipped with text, video, and VoIP capabilities for effective communication.
              </p>
              <img 
                src="https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/vc/en/microsoft/video-conferencing-microsoft/video-conferencing-microsoft-teams-rooms-room-configurator.png?v=1" 
                alt="Meeting Room" 
                className="w-full rounded-lg mb-4"
              />
              <a 
                href="#" 
                className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-700"
              >
                Join Room
              </a>
            </div>
          </div>
        </section>

        {/* Knowledge Hub */}
        <section className="knowledge-hub mt-8">
          <h2 className="text-xl mb-5">Knowledge Hub</h2>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-5 shadow-md transition-all duration-300 transform hover:translate-y-2 hover:shadow-xl max-w-xs w-full text-center">
              <h3 className="text-lg mb-4">Shared Resources</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              ●	Centralized repository for shared documents, research papers, and resources.
              </p>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxng2lMIfcUqvKAGRlH0URNNHPTIbSiJoGqQ&s" 
                alt="Knowledge Hub" 
                className="w-full rounded-lg mb-4"
              />
              <a 
                href="#" 
                className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-700"
              >
                Explore Hub
              </a>
            </div>
          </div>
        </section>

        {/* Forums and Chatrooms */}
        <section className="forums-chatrooms mt-8">
          <h2 className="text-xl mb-5">Forums and Chatrooms</h2>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-5 shadow-md transition-all duration-300 transform hover:translate-y-2 hover:shadow-xl max-w-xs w-full text-center">
              <h3 className="text-lg mb-4">Public and Private Discussions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              ●	Public and private spaces for discussions on agri-tech and biotech topics.
              </p>
              <img 
                src="https://www.techtarget.com/rms/onlineimages/Gallery_Reorder_mobile.jpg" 
                alt="Forums and Chatrooms" 
                className="w-full rounded-lg mb-4"
              />
              <a 
                href="#" 
                className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-700"
              >
                Join Discussion
              </a>
            </div>
          </div>
        </section>

        {/* Industry Partnerships */}
        <section className="industry-partnerships mt-8">
          <h2 className="text-xl mb-5">Industry Partnerships</h2>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-5 shadow-md transition-all duration-300 transform hover:translate-y-2 hover:shadow-xl max-w-xs w-full text-center">
              <h3 className="text-lg mb-4">Collaborate with Industry Leaders</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Engage with prospective partners and collaborators to shape the future of agri-tech and biotechnology.
              </p>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMY3UQMcVU4qHWwribT2LAtprgUxMh7_CWkw&s" 
                alt="Industry Partnerships" 
                className="w-full rounded-lg mb-4"
              />
              <a 
                href="#" 
                className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-700"
              >
                Partner with Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollaborationCenter;
