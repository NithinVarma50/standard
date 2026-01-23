import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="fixed top-6 left-6 z-50">
      <Link to="/" aria-label="Go to Home" className="group">
        <button className="text-sm font-bold tracking-[0.2em] text-white uppercase bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full cursor-pointer hover:bg-white/20 transition-all shadow-lg focus:outline-none">
          STANDARD
        </button>
      </Link>
    </div>
  );
};

export default Logo;
