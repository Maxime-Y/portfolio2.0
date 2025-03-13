export const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  export function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }
  