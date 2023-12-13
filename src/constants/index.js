



import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    hajans,
    Orjinfinity,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
  
    {
      id: "About",
      title: "About",
      translationKey: "navbar.about",
    },
    {
      id: "Work",
      title: "Work",
      translationKey: "navbar.work",
    },
    {
      id: "Contact",
      title: "Contact",
      translationKey: "navbar.contact",
    },
  ];
  
  const services = [

    
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Hajans",
      icon: hajans,
      iconBg: "#383E56",
      date: "",
      points: [
        "Tailwind CSS ve Alpine.js kullanarak, firma için bir B2B e-ticaret platformu geliştirdim.",
        "Platform, kullanıcı dostu arayüz tasarımı ve etkileşimli özellikleriyle müşteri memnuniyetini artırmayı hedefledi.",
        "Frontend alanında çalışarak, müşteri ihtiyaçlarına yönelik özelleştirilebilir ve hızlı bir kullanıcı deneyimi sağladım.",
        "Sayfa tasarımlarını oluşturmak, kullanıcı arabirimini geliştirmek ve kullanıcı etkileşimini artırmak için Tailwind CSS kullanımı konusunda deneyim sahibiyim.",
        "Tailwind CSS ve Alpine.js gibi modern teknolojileri etkin bir şekilde kullanarak, projeyi güncel ve performanslı bir şekilde yönettim.",
        "Frontend geliştirme sürecinde responsive tasarıma ve tarayıcı uyumluluğuna özel önem verdim.",
        "Takım içinde etkin iletişim kurarak, proje hedeflerini belirledik ve süreç boyunca işbirliği içinde çalıştık.",
        "Çalıştığım süre zarfında, takım içindeki diğer üyelerle uyumlu bir şekilde çalışarak projenin başarıyla tamamlanmasına katkı sağladım.",
      ],
    },
    {
      title: "Frontend Developer (React)",
      company_name: "Orjinfinity",
      icon: Orjinfinity,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Orjinfinity firmasında çalışma fırsatı buldum ve bu süreçte React üzerindeki bilgi ve becerilerimi geliştirme imkanı elde ettim",
        "Restoran kafeler için bir POS uygulamasının frontend geliştirmesinde yer aldım.",
        "Kullanıcı arayüzü tasarımı ve geliştirmesinde aktif rol üstlendim.",
        "Teknolojik becerilerimle, kullanıcı dostu ve etkileşimli bir frontend oluşturmak için ekip içinde işbirliği yaptım.",
        "Orjinfinity firmasında çalışırken, Hemen Tescille adlı sitede yer alan projede, React kullanarak çeşitli özelliklerin geliştirilmesinde aktif rol aldım.",
      
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
  ];
  
  const testimonials = [
    
    {
      testimonial:"testimonials.testimonial1",
      name: "testimonials.name1",
      designation: "testimonials.desc1",
      company: "testimonials.company1",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:"testimonials.testimonial2",
      name: "testimonials.name2",
      designation: "testimonials.desc2",
      company: "testimonials.company2",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:"testimonials.testimonial3",
      name: "testimonials.name3",
      designation: "testimonials.desc3",
      company: "testimonials.company3",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    
    {

      
      name: "projects.name1",
      description: 'projects.description1',
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "projects.name2",
      description:
           'projects.description2',
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "projects.name3",
      description:'projects.description3',
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };