import { useContext, useEffect, useState } from "react";
import DataContext from "layouts/admin/datacontext";

const ProfileOverview = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { pic, posts, followers, following } = useContext(DataContext);

  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("email")) || "";
    const storedName = JSON.parse(localStorage.getItem("name")) || "";
    setEmail(storedEmail);
    setName(storedName);
  }, []);

  return (
    <>
      <main className="mt-3">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1585314062604-1a357de8b000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="bg-black absolute h-full w-full opacity-50"
            ></span>
          </div>
          <div
            className="pointer-events-none absolute top-auto bottom-0 left-0 right-0 w-full overflow-hidden "
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current text-gray-300"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative bg-gray-300 py-16 dark:bg-navy-900 dark:text-white">
          <div className="container mx-auto px-4">
            <div className="relative mb-6 -mt-[22rem] flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
              <div className="px-6 dark:bg-navy-900 dark:text-white">
                <div className="flex flex-wrap justify-center">
                  <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                    <div className="relative">
                      <img
                        src={pic}
                        alt="profilepic"
                        className="absolute -m-16 -ml-[4.5rem] h-auto max-w-[150px] rounded-full border-none align-middle shadow-xl sm:-ml-[6rem] sm:max-w-[200px] lg:-ml-[15rem] xl:-ml-[17rem]"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 lg:order-1 lg:w-4/12 "></div>
                </div>
                <div className="mt-[8rem] text-center sm:mt-[11rem]">
                  <h3 className="mb-2  text-4xl font-semibold leading-normal text-gray-800 dark:text-white">
                    {name}
                  </h3>
                  <div className="mt-0 mb-2 text-xl font-bold  leading-normal text-gray-500">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {email}
                  </div>

                  <div className="mb-5.5 max-w-94 border-stroke shadow-1 dark:border-strokedark mx-auto mt-10 grid grid-cols-3 rounded-md border py-2.5 dark:bg-[#37404F]">
                    <div className="border-stroke dark:border-strokedark xsm:flex-row flex flex-col items-center justify-center gap-1 border-r px-4">
                      <span className="text-black font-semibold dark:text-white">
                        {posts ? posts : null}
                      </span>
                      <span className="text-sm">Posts</span>
                    </div>
                    <div className="border-stroke dark:border-strokedark xsm:flex-row flex flex-col items-center justify-center gap-1 border-r px-4">
                      <span className="text-black font-semibold dark:text-white">
                        {followers ? followers + "k" : null}
                      </span>
                      <span className="text-sm">Followers</span>
                    </div>
                    <div className="xsm:flex-row flex flex-col items-center justify-center gap-1 px-4">
                      <span className="text-black font-semibold dark:text-white">
                        {following ? following + "k" : null}
                      </span>
                      <span className="text-sm">Following</span>
                    </div>
                  </div>
                </div>
                <div className="mt-10  text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                      <h1 className="text-black mb-4 font-bold dark:text-white  md:text-xl lg:text-2xl">
                        About me
                      </h1>
                      <p className="my-5 text-sm leading-4 text-gray-800 dark:text-gray-500 sm:leading-normal md:text-lg md:leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque posuere fermentum urna, eu condimentum
                        mauris tempus ut. Donec fermentum blandit aliquet. Etiam
                        dictum dapibus ultricies. Sed vel aliquet libero. Nunc a
                        augue fermentum, pharetra ligula sed, aliquam lacus.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-black mb-4 font-bold dark:text-white  md:text-xl lg:text-2xl">
                      Follow Me
                    </h1>
                    <div className="mb-7 flex space-x-4">
                      <a href="/" className="text-blue-500 hover:text-blue-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a href="/" className="text-pink-500 hover:text-pink-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href="/" className="text-blue-400 hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="/" className="text-blue-800 hover:text-blue-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfileOverview;
