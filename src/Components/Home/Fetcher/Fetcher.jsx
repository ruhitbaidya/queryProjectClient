

const Fetcher = () => {
  return (
    <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://static.toiimg.com/thumb/msid-93595888,width-1280,height-720,resizemode-4/93595888.jpg"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video object-contain"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Join, its free
            </span>
            <h3 className="text-3xl font-bold">
            SmartWatch Pro X
            </h3>
            <p className="my-6 dark:text-gray-600">
            A sleek and feature-packed smartwatch with health tracking, notifications, and customizable watch faces.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://www.cnet.com/a/img/resize/8dfd582b861be518dcb968d1f1b6de01ef114961/hub/2023/02/28/9da2e9c7-d07d-45cb-89d1-18c7013249e5/anker-315-wireless-charger.png?auto=webp&fit=crop&height=900&width=1200"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Join, its free
            </span>
            <h3 className="text-3xl font-bold">
            Wireless Charging Pad
            </h3>
            <p className="my-6 dark:text-gray-600">
            A stylish charging solution compatible with various devices, offering fast and convenient charging without the hassle of cables.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEfm1-nNB6ix4khVbYKS77XXt9CVTNvYLY7Zq40Jlcw&s"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
              Join, its free
            </span>
            <h3 className="text-3xl font-bold">
            Ergonomic Desk Chair
            </h3>
            <p className="my-6 dark:text-gray-600">
            An adjustable chair designed for maximum comfort during long hours of work or study, featuring lumbar support and breathable mesh material.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fetcher;
