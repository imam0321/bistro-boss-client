

const Cover = ({img, title, details}) => {
  return (
    <div className="hero h-[500px] mb-10" style={{backgroundImage:  `url('${img}')`, backgroundRepeat: "no-repeat"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-[600px] bg-slate-900 bg-opacity-40 px-32 py-10">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">{details}</p>
    </div>
  </div>
</div>
  );
};

export default Cover;