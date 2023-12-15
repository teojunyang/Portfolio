import React from 'react';
import AchievementCard from './AchievementCard';

const achievementsList = [
  {
    title: 'Projects',
    value: '5+',
    src: '/project.png',
  },
  {
    title: 'Experience',
    value: '2 Years Programming',
    src: '/experience.png',
  },
  {
    title: 'Education',
    value: 'Year 2',
    src: '/education.png',
  },
];

const Aboutme = () => {
  return (
    <section className="text-white" id="aboutMe">
      <h2 className="text-4xl font-bold text-white text-center mb-4">About Me</h2>
      <h2 className="text-lg text-white text-center mb-4">-Introduction-</h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <video autoPlay muted loop width={800} height={800}>
          <source src="/about.mp4" type="video/mp4" />
        </video>
        <div>
          <div className="py-8 px-16 flex flex-row items-center justify-between" >
            {achievementsList.map((achievement) => (
              <AchievementCard key={achievement.title} {...achievement} />
            ))}
          </div>
          <p className="text-base lg:text-lg">
            As a committed Computer Science student, my enthusiasm for technology is evident in my focus on software development, web development, and system design.
            I bring proactive learning, efficient organization, and a collaborative mindset to every endeavor. With a dedication to effective time management, meticulous attention to detail.
            Additionally, I have a capability for independent learning, enabling me to efficiently acquire new skills. I stand prepared to contribute to cutting-edge projects.
            Thrilled about the prospect of professional growth and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
