const FooterEmail = () => {
  return (
    <div>
      <h5 className="text-lg md:text-xl lg:2xl font-medium capitalize">
        get the freshCart app
      </h5>
      <p className="font-light">
        We will send You a Link, Open it on Your Phone to Download the App{" "}
      </p>
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-3 mt-5">
        <input
          type="email"
          placeholder="Enter Your Email Here..."
          name="downloadApp"
          required
          className="w-full md:w-4/5 py-2 px-5 placeholder:font-light h-10 outline-none border border-gray-100 rounded-lg focus:border-mainColor"
        />
        <button className="w-full md:w-1/5 bg-mainColor text-white capitalize font-medium text-sm rounded-lg h-10 hover:bg-mainColorHover">
          Send
        </button>
      </div>
    </div>
  );
};

export default FooterEmail;
