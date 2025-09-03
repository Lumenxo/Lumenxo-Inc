import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function StatsSection() {
  const stats = [
    { number: 50, suffix: '+', label: 'Project Finished' },
    { number: 40, suffix: '+', label: 'Happy Clients' },
    { number: 30, suffix: '+', label: 'Team' },
    { number: 3, suffix: '+', label: 'Products' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="py-16 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/000/681/085/small_2x/futuristic-mechanical-gears-background.jpg')`,
         

      }}
    >
      <div className=" rounded-xl max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center p-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-4xl font-extrabold text-white">
              {inView ? <CountUp end={stat.number} duration={2} /> : 0}
              {stat.suffix}
            </h3>
            <p className="text-white text-sm mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
