import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-1 font-bold capitalize">
      <img src="/src/assets/freshcart-logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
