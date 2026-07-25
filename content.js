/*
=============================================================
只需要编辑这个文件。
You only need to edit this file.
=============================================================

常用修改：
1. 把 name、affiliation、email 等替换成你的信息；
2. profilePhoto 改成照片路径，例如 "assets/xiang.jpg"；
3. 在 research / publications / news 数组中复制或删除条目；
4. URL 不需要时写成空字符串 ""。
*/

const SITE_CONTENT = {
  name: "Xiang Zhang",
  affiliation: "Postdoctoral Researcher · Technical University of Berlin",

  heroTitle: "Efficient AI systems, information theory, and distributed inference.",
  heroSubtitle:
    "I study principled and practical methods for making large-scale AI computation and communication more efficient, reliable, and deployable.",

  // 将你的照片放进 assets 文件夹，然后修改这里。
  // 不想显示照片时，设置为 ""。
  profilePhoto: "assets/profile-placeholder.svg",
  profilePhotoAlt: "Portrait of Xiang",

  about: [
    `I am a postdoctoral researcher working at the intersection of information theory,
    efficient machine learning, distributed inference, GPU communication, and wireless systems.`,

    `My current interests include large-language-model serving, KV-cache compression,
    communication-efficient multi-GPU inference, matrix and vector quantization,
    and theoretical tools that lead to practical system improvements.`,

    `I am particularly interested in research that connects rigorous mathematical structure
    with algorithms that can be implemented and evaluated on real systems.`
  ],

  links: [
    { label: "CV", url: "files/cv.pdf" },
    { label: "Google Scholar", url: "https://scholar.google.com/" },
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" }
  ],

  research: [
    {
      title: "Efficient LLM inference",
      description:
        "Algorithms and systems for KV-cache compression, distributed inference, attention approximation, quantization, and high-throughput serving."
    },
    {
      title: "Information theory for AI systems",
      description:
        "Rate–distortion, structured quantization, function computation, and coding-theoretic formulations for modern AI workloads."
    },
    {
      title: "GPU communication and HPC",
      description:
        "Communication-efficient collectives, topology-aware methods, and algorithm–hardware co-design for multi-GPU systems."
    },
    {
      title: "Wireless and distributed learning",
      description:
        "Secure aggregation, federated learning, AI-RAN, edge intelligence, and resilient distributed computation."
    }
  ],

  allPublicationsUrl: "",

  publications: [
    {
      year: "2026",
      title: "Replace this with the title of your paper",
      authors: "<strong>Xiang Your-Surname</strong>, Coauthor One, and Coauthor Two",
      venue: "IEEE Transactions on Information Theory",
      links: [
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" }
      ]
    },
     {
      year: "2026",
      title: "Second publication of 2026",
      authors: "<strong>Xiang Your-Surname</strong>, Coauthor One, and Coauthor Two",
      venue: "IEEE Transactions on Information Theory",
      links: [
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" }
      ]
    },
    {
      year: "2025",
      title: "A second representative publication",
      authors: "Coauthor One, <strong>Xiang Your-Surname</strong>, and Coauthor Three",
      venue: "Proceedings of a Major Conference",
      links: [
        { label: "Paper", url: "#" },
        { label: "Slides", url: "#" }
      ]
    },
    {
      year: "2024",
      title: "A third representative publication",
      authors: "<strong>Xiang Your-Surname</strong> and Coauthor One",
      venue: "IEEE Journal on Selected Areas in Communications",
      links: [
        { label: "Paper", url: "#" }
      ]
    }
  ],

  news: [
    {
      date: "Jul. 2026",
      text: "Started a new research project on communication-efficient distributed LLM inference."
    },
    {
      date: "Jun. 2026",
      text: "Presented recent work at a conference or seminar."
    },
    {
      date: "Jan. 2026",
      text: "A paper was accepted to a journal or conference."
    }
  ],

  contact: {
    email: "your.email@tu-berlin.de",
    office: "Technical University of Berlin, Berlin, Germany"
  }
};
