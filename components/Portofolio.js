import {useState} from 'react';

const projects = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'https://fndc-tzwr.vercel.app/',
        image: '/screenshot_1.png',
      },
      {
        title: 'Project 2',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        link: '',
        image: '', 
      },
      {
        title: 'Project 3',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        link: '',
        image: '', 
      },
      {
        title: 'Project 4',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        link: '',
        image: '',
      },
      {
        title: 'Project 5',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        link: '',
        image: '', 
      },
      {
        title: 'Project 6',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        link: '',
        image: '', 
      },
      {
        title: 'Project 7',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        link: '',
        image: '', 
      },
  ];
const Portfolio = () => {
    const [showMore, setShowMore] = useState(false);
    const visibleProjects = showMore ? projects : projects.slice(0, 3);
  
    return (
      <section className="bg-white-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Portofolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <div key={index} className="bg-white ">
                <img src={project.image} alt={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="mb-4 rounded hover:scale-[1.1]" />
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
          {projects.length > 3 && (
            <div className="text-center">
              {showMore ? (
                <button
                  onClick={() => setShowMore(false)}
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Show Less
                </button>
              ) : (
                <button
                  onClick={() => setShowMore(true)}
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Show More
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    );
};

export default Portfolio;