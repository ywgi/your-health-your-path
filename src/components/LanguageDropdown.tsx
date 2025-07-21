import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isEnglish = location.pathname.startsWith("/en");
  const currentLang = isEnglish ? "EN" : "NL";

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectLanguage = (lang: string) => {
    setIsOpen(false);
    if (lang === currentLang) return;

    let newPath = location.pathname;

    if (lang === "EN") {
      // NL → EN: add "/en" if not already there
      newPath = "/en" + (location.pathname === "/" ? "" : location.pathname);
    } else {
      // EN → NL: remove "/en"
      newPath = location.pathname.replace(/^\/en/, "") || "/";
    }

    navigate(newPath + location.search);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-20 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none"
      >
        {currentLang}
        <svg
          className="ml-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 7l5 5 5-5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul className="py-1 text-sm text-gray-700">
            {["EN", "NL"].map((lang) => (
              <li key={lang}>
                <button
                  onClick={() => selectLanguage(lang)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  {lang}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
