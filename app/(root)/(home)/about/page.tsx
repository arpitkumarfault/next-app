import Image from "next/image";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            About Me
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            I am a passionate developer dedicated to building seamless digital experiences.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/img/arpitimg.jpg" // Replace with your image path
                alt="Your Name"
                width={384} // Set width according to your image size
                height={384} // Set height according to your image size
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Who Am I?
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Hi, I'm Arpit kumar kanwar, a Frontend Developer with a knack for creating stunning and user-friendly interfaces. I specialize in modern web technologies like React.js, Tailwind CSS, and TypeScript. My mission is to craft responsive, efficient, and intuitive designs that resonate with users across devices.
            </p>
            <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              With a strong focus on problem-solving and adaptability, I aim to deliver high-quality solutions that meet and exceed client expectations. When I'm not coding, you can find me exploring new tech trends, reading, or honing my design skills.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg bg-indigo-600 text-white text-lg font-medium hover:bg-indigo-700 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center sm:text-4xl">Skills & Expertise</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React.js",
              "Tailwind CSS",
              "Redux",
              "Git & GitHub",
            ].map((skill) => (
              <div
                key={skill}
                className="py-4 px-6 rounded-lg bg-gray-200 dark:bg-gray-800 shadow-md hover:shadow-lg transition"
              >
                <p className="text-lg font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
