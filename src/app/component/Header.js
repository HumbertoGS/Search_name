const Header = ({ children }) => {
  return (
    <>
      <div className="flex justify-between p-5 bg-slate-400">
        <h2 className="pt-2">Hoooops</h2>
        {children}
      </div>
    </>
  );
};

export default Header;
