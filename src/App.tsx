// import {
//   User,
//   Briefcase,
//   FolderOpen,
//   GraduationCap,
//   Award,
//   Code,
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
//   Twitter,
//   ExternalLink,
// } from "lucide-react";
// import me from "./assets/me.jpg";
// import msit from "./assets/msit.png"
// import nhs from "./assets/nhs.png"
// import avm from "./assets/avm.png"
// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
//       {/* Header/Hero Section */}
//       <header className="relative px-6 py-16 text-center">
//         <div className="max-w-4xl mx-auto">
//           <div className="relative inline-block mb-8">
//             <img
//               src={me}
//               alt="Profile"
//               className="w-32 h-32 rounded-full object-cover shadow-lg ring-4 ring-purple-300 ring-opacity-50 transition-transform duration-300 hover:scale-105"
//             />
//             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-300/20 to-purple-400/20 animate-pulse"></div>
//           </div>

//           <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
//             Priya Mahato
//           </h1>
//           <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
//             Full Stack Developer & UI/UX Designer passionate about creating
//             beautiful, functional digital experiences
//           </p>

//           <div className="flex justify-center space-x-6">
//             <a
//               href="https://github.com/priyamahato86"
//               className="text-purple-300 hover:text-purple-200 transition-colors duration-200 hover:scale-110 transform"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Github size={24} />
//             </a>
//             <a
//               href="http://www.linkedin.com/in/priyamahato86"
//               className="text-purple-300 hover:text-purple-200 transition-colors duration-200 hover:scale-110 transform"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Linkedin size={24} />
//             </a>
//             <a
//               href="#"
//               className="text-purple-300 hover:text-purple-200 transition-colors duration-200 hover:scale-110 transform"
//             >
//               <Twitter size={24} />
//             </a>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-6xl mx-auto px-6 pb-16">
//         {/* About Section */}
//         <section className="mb-20">
//           <div className="flex items-center mb-8">
//             <User className="text-purple-300 mr-3" size={28} />
//             <h2 className="text-3xl font-bold text-white">About Me</h2>
//           </div>
//           <div className="bg-black rounded-xl p-8 shadow-sm border border-purple-900 hover:shadow-md transition-shadow duration-300">
//             <p className="text-purple-200 leading-relaxed text-lg">
//               I'm a passionate full-stack developer with 2+ years of experience
//               building scalable web applications. I love turning complex
//               problems into simple, beautiful designs. When I'm not coding,
//               you'll find me exploring new technologies, contributing to open
//               source projects, or enjoying a good cup of coffee.
//             </p>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section className="mb-20">
//           <div className="flex items-center mb-8">
//             <Code className="text-purple-300 mr-3" size={28} />
//             <h2 className="text-3xl font-bold text-white">Skills</h2>
//           </div>
//           <div className="bg-black rounded-xl p-8 shadow-sm border border-purple-900">
//             <div className="grid md:grid-cols-3 gap-8">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4">
//                   Frontend
//                 </h3>
//                 <div className="space-y-2">
//                   {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
//                     (skill, index) => (
//                       <div key={index} className="flex items-center">
//                         <div className="w-2 h-2 bg-purple-300 rounded-full mr-3"></div>
//                         <span className="text-purple-200">{skill}</span>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4">
//                   Backend
//                 </h3>
//                 <div className="space-y-2">
//                   {["Node.js", "Python", "PostgreSQL", "MongoDB"].map(
//                     (skill, index) => (
//                       <div key={index} className="flex items-center">
//                         <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
//                         <span className="text-purple-200">{skill}</span>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4">Tools</h3>
//                 <div className="space-y-2">
//                   {["AWS", "Docker", "Git", "Figma"].map((skill, index) => (
//                     <div key={index} className="flex items-center">
//                       <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
//                       <span className="text-purple-200">{skill}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section className="mb-20">
//           <div className="flex items-center mb-8">
//             <Briefcase className="text-purple-300 mr-3" size={28} />
//             <h2 className="text-3xl font-bold text-white">Experience</h2>
//           </div>
//           <div className="space-y-6">
//             {[
//               {
//                 role: "Contributor",
//                 company: "GirlScript Summer of Code",
//                 period: "2025 - Present",
//                 description:
//                   "Selected as a contributor for GSSoC ’25, a national-level open-source program aimed at fostering collaboration and skill-building in software development.",
//               },
//               {
//                 role: "Web Lead",
//                 company: "Cyber Society'MSIT",
//                 period: "2024 - Present",
//                 description:
//                   "Built responsive website for the community and collaborated with design teams.",
//               },
//               {
//                 role: "Data Science Internship",
//                 company: "Coincent",
//                 period: "Jul'25 - Aug'25 ",
//                 description:
//                   "Built a machine learning model to predict house prices based on key features such as location, size, number of rooms, and amenities. Collected and cleaned data, applied regression algorithms (e.g., Linear Regression, Random Forest), and evaluated model performance using RMSE and R² score. Technologies used: Python, Pandas, Scikit-learn, Matplotlib.",
//               },
//             ].map((job, index) => (
//               <div
//                 key={index}
//                 className="bg-black rounded-xl p-6 shadow-sm border border-purple-900 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
//               >
//                 <h3 className="text-xl font-semibold text-white mb-1">
//                   {job.role}
//                 </h3>
//                 <p className="text-purple-300 font-medium mb-2">
//                   {job.company}
//                 </p>
//                 <p className="text-purple-400 text-sm mb-3">{job.period}</p>
//                 <p className="text-purple-200">{job.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section className="mb-20">
//           <div className="flex items-center mb-8">
//             <FolderOpen className="text-purple-300 mr-3" size={28} />
//             <h2 className="text-3xl font-bold text-white">Projects</h2>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "Ekalavya",
//                 description:
//                   "Full-featured online store with payment integration",
//                 tech: ["React", "Node.js", "MongoDB"],
//                 image:
//                   "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
//               },
//               {
//                 title: "Task Management App",
//                 description: "Collaborative project management tool",
//                 tech: ["Vue.js", "Express", "PostgreSQL"],
//                 image:
//                   "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
//               },
//               {
//                 title: "Weather Dashboard",
//                 description: "Real-time weather data visualization",
//                 tech: ["React", "D3.js", "API Integration"],
//                 image:
//                   "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400",
//               },
//             ].map((project, index) => (
//               <div
//                 key={index}
//                 className="bg-black rounded-xl p-6 shadow-sm border border-purple-900 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-purple-200 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-xs font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <ExternalLink
//                   className="mt-4 text-purple-400 group-hover:text-purple-300 transition-colors ml-auto"
//                   size={20}
//                 />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Education Section */}
//         <section className="mb-20">
//           <div className="flex items-center mb-8">
//             <GraduationCap className="text-purple-300 mr-3" size={28} />
//             <h2 className="text-3xl font-bold text-white">Education</h2>
//           </div>
//           <div className="space-y-6">
//           <div className="bg-black rounded-xl p-3 shadow-sm border border-purple-900 hover:shadow-md transition-shadow duration-300">
//             <div className="flex items-start space-x-6">
//               <img
//                 src={msit}
//                 alt="University of Technology"
//                 className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-purple-800"
//               />
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-white ">
//                   Meghnad Saha Institute of Technology
//                 </h3>
//                 <p className="text-purple-300 font-medium">
//                  Bachelor of Technology in Computer Science Engineering (Data Science)
//                 </p>
//                 <p className="text-purple-400 text-sm ">2023 - 2027</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-black rounded-xl p-3 shadow-sm border border-purple-900 hover:shadow-md transition-shadow duration-300">
//             <div className="flex items-start space-x-6">
//               <img
//                 src={nhs}
//                 alt="University of Technology"
//                 className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-purple-800"
//               />
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-white ">
//                   National High School
//                 </h3>
//                 <p className="text-purple-300 font-medium">
//                  Higher Secondary, Science
//                 </p>
//                 <p className="text-purple-400 text-sm ">2020 - 2022</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-black rounded-xl p-3 shadow-sm border border-purple-900 hover:shadow-md transition-shadow duration-300">
//             <div className="flex items-start space-x-6">
//               <img
//                 src={avm}
//                 alt="University of Technology"
//                 className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-purple-800"
//               />
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-white ">
//                   Bhowanipur Arya Vidya Mandir For Girls
//                 </h3>
//                 <p className="text-purple-300 font-medium">
//                  Secondary School
//                 </p>
//                 <p className="text-purple-400 text-sm ">2010 - 2020</p>
//               </div>
//             </div>
//           </div>
//           </div>
//         </section>

//         {/* Certifications Section */}
//         <section className="mb-20">
//           <div className="flex items-center mb-8">
//             <Award className="text-purple-300 mr-3" size={28} />
//             <h2 className="text-3xl font-bold text-white">Certifications</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               "AWS Certified Developer Associate",
//               "Google Cloud Professional Developer",
//               "Microsoft Azure Fundamentals",
//               "Certified Kubernetes Administrator",
//             ].map((cert, index) => (
//               <div
//                 key={index}
//                 className="bg-black rounded-xl p-6 shadow-sm border border-purple-900 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
//               >
//                 <div className="flex items-center">
//                   <Award className="text-purple-300 mr-3" size={20} />
//                   <p className="text-white font-medium">{cert}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Cherished Moments Section */}
//         {/* <section className="mb-20">
//           <div className="flex items-center mb-8">
//             <Heart className="text-purple-300 mr-3" size={28} />
//             <h2 className="text-3xl font-bold text-white">Cherished Moments</h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               {
//                 image:
//                   "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
//                 title: "First App Launch",
//                 description: "The day I launched my first mobile app",
//               },
//               {
//                 image:
//                   "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
//                 title: "Conference Speaking",
//                 description: "Speaking at React Conference 2023",
//               },
//               {
//                 image:
//                   "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
//                 title: "Team Achievement",
//                 description: "Winning the company hackathon",
//               },
//             ].map((moment, index) => (
//               <div
//                 key={index}
//                 className="bg-black rounded-xl overflow-hidden shadow-sm border border-purple-900 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group"
//               >
//                 <img
//                   src={moment.image}
//                   alt={moment.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-lg font-semibold text-white mb-2">
//                     {moment.title}
//                   </h3>
//                   <p className="text-purple-200">{moment.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section> */}

//         {/* Contact Section */}
//         <section>
//           <div className="flex items-center mb-8">
//             <Mail className="text-purple-300 mr-3" size={28} />
//             <h2 className="text-3xl font-bold text-white">Contact</h2>
//           </div>
//           <div className="bg-black rounded-xl p-8 shadow-sm border border-purple-900">
//             <div className="grid md:grid-cols-3 gap-8 text-center">
//               <div className="hover:bg-purple-900 p-4 rounded-lg transition-colors duration-200">
//                 <Mail className="text-purple-300 mx-auto mb-3" size={32} />
//                 <p className="font-semibold text-white mb-1">Email</p>
//                 <p className="text-purple-200">alex.johnson@email.com</p>
//               </div>
//               <div className="hover:bg-purple-900 p-4 rounded-lg transition-colors duration-200">
//                 <Phone className="text-purple-300 mx-auto mb-3" size={32} />
//                 <p className="font-semibold text-white mb-1">Phone</p>
//                 <p className="text-purple-200">+1 (555) 123-4567</p>
//               </div>
//               <div className="hover:bg-purple-900 p-4 rounded-lg transition-colors duration-200">
//                 <MapPin className="text-purple-300 mx-auto mb-3" size={32} />
//                 <p className="font-semibold text-white mb-1">Location</p>
//                 <p className="text-purple-200">San Francisco, CA</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-black border-t border-purple-900 py-8 mt-16">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <p className="text-purple-400">
//             &copy; 2024 Alex Johnson. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
