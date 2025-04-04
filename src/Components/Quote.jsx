import "../../src/Home.css";

const Quote = () => {
  return (
    <section className="container mx-auto p-5 mt-10 lg:mt-24">
      <div className="pic">
        <div className="px-2 pt-[23px] sm:pt-[80px] text-center flex flex-col items-center justify-center">
          <h1 className="py-2 sm:text-[30px] text-white font-bold">
            Мы - Агентство путешествий “Крылья Эфиопии”
          </h1>
          <p className="pb-2 text-[14px] sm:text-[18px] text-Text1 font-light">
            Мы можем организовать путешествие вашей мечты. Небольшая река под
            названием Дуден протекает рядом с нами.
          </p>
          {/* <button className="bg-Orange py-3 px-4 sm:py-5 sm:px-8 text-white font-semibold rounded-lg mt-3">
            Ask For A Quote
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Quote;
