import { useLocation } from "react-router-dom";

const CurrentPage = () => {
  const location = useLocation();
  return (
    <div style={{ padding: "2rem" }}>You are here : {location.pathname}</div>
  );
};

export default CurrentPage;
