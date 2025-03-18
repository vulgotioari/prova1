import { useEffect } from "react";
import { Github, Instagram, Youtube, Linkedin, Sun, Moon } from "lucide-react";

export default function LinkTree() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  };

  return (
    <div className="container">
     
      <div className="circle">
        <img src="/eu.png" alt="perfil" className="image" />
      </div>
      
    
      <button className="theme-toggle" onClick={toggleTheme}>
        {document.body.classList.contains("light") ? <Moon className="moon.png" /> : <Sun className="sun.png" />}
      </button>
      
   
      <h2 className="username">@vulgotioari</h2>
      
      
      <div className="status"></div>
      
  
      <div className="buttons">
        {[
          "Github",
          "Instagram",
          "Youtube",
          "Linkedin",
        ].map((text, index) => (
          <button key={index} className="link-button">{text}</button>
        ))}
      </div>

     
      <div className="icons">
        <Github className="icon" />
        <Instagram className="icon" />
        <Youtube className="icon" />
        <Linkedin className="icon" />
        <Sun className="icon"/>
        <Moon className="icon"/>
        
      </div>
    </div>
  );
}