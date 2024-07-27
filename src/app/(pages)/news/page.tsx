const NewsPage = () => {
  return (
    <>
      <div
        className={`${"order-2 lg:order-2 lg:col-span-8 xl:col-span-6 bg-emerald-400"} p-5 rounded-2xl`}
      >
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
          News feed
        </h3>
      </div>

      <div
        className={`${"order-1 lg:order-3 lg:col-span-4 xl:order-3 xl:col-span-3 bg-emerald-200 mt-[14px]"} p-5 rounded-2xl`}
      >
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
          Clock
        </h3>
      </div>
    </>
  );
};

export default NewsPage;
