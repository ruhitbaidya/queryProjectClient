const TitleHeader = ({ title, description }) => {
  return (
    <>
      <div className="text-center mt-[100px] w-[60%] mx-auto">
        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
          
            <h3 className="text-3xl font-bold">
            {title}
            </h3>
            <p className="my-6 dark:text-gray-600">
            {description}
            </p>

          </div>
      </div>




      
    </>
  );
};

export default TitleHeader;
