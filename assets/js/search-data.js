// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Asterisk * denotes equal contribution. Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Please find my full CV in the PDF linked above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-graduated-from-fudan-university-as-an-outstanding-graduate",
          title: 'Graduated from Fudan University as an Outstanding Graduate.',
          description: "",
          section: "News",},{id: "news-excited-to-start-my-ph-d-at-the-university-of-notre-dame",
          title: 'Excited to start my Ph.D. at the University of Notre Dame.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-acl-2025-findings",
          title: 'One paper accepted to ACL 2025 findings!',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-to-ieee-vis-2025-this-marks-my-first-first-author-paper-during-my-ph-d",
          title: 'Two papers accepted to IEEE VIS 2025! This marks my first first-author paper...',
          description: "",
          section: "News",},{id: "news-ieee-vis-2025-best-paper-award-my-first-first-author-paper-nli4volvis-has-been-selected-as-one-of-only-5-best-papers-out-of-537-submissions-the-work-was-also-featured-by-notre-dame-news",
          title: '🏆 IEEE VIS 2025 Best Paper Award! My first first-author paper NLI4VolVis has...',
          description: "",
          section: "News",},{id: "news-calling-for-collaborators-scivisagentbench-i-m-launching-an-open-collaboration-effort-for-scivisagentbench-a-benchmark-designed-to-evaluate-llm-agents-in-scientific-visualization-learn-more-or-contribute-through-our-project-page",
          title: '🚀 Calling for Collaborators: SciVisAgentBench! I’m launching an open collaboration effort for SciVisAgentBench,...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%69@%6E%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/KuangshiAi", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/kuangshiai", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kuangshiai", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0005-7171-6529", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=PBtq130AAAAJ&hl=en&authuser=1", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2315113908", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
