export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
          top: offsetTop, 
          behavior: "smooth",
      });
  }
};

  
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
}
