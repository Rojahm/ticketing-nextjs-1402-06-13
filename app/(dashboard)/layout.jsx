import Navigation from "../components/Nav";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default DashboardLayout;
