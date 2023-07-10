import React from 'react';

const Banner = () => {
  return (
    <div className="w-full">
      <section class="text-gray-600 bg-gray-200 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-1/2 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <div>
              <a>
                <image
                  className="w-full h-auto"
                  src="https://www.bellamiprofessional.com/cdn/shop/t/54/assets/all-prod-img.png?v=8017473705972395371671034660"
                />
              </a>

              <div class="bg-gray-400 text-white/50 flex justify-between items-center py-4 px-4 rounded shadow-sm">
                <p class="leading-relaxed cursor-pointer hover:text-white">
                  TAPE-IN
                </p>
                <p class="leading-relaxed cursor-pointer hover:text-white">
                  I-TIP
                </p>
                <p class="leading-relaxed cursor-pointer hover:text-white">
                  K-TIP
                </p>
                <p class="leading-relaxed cursor-pointer hover:text-white">
                  VOLUME WEFTS
                </p>
                <p class="leading-relaxed cursor-pointer hover:text-white">
                  HAND-TIED-WEFTS
                </p>
              </div>
            </div>
          </div>

          <div class=" lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full pt-[10rem] mt-8 md:mt-0 ">
            <a href="#">
              <h1 class="text-gray-700 text-2xl mb-1 font-medium heading-text py-4">
                BELLAMI PROFESSIONAL EXTENSIONS
              </h1>
            </a>
            <a href="#">
              <p class="ml-14 text-gray-600 text-center pb-4">
                Choose from four methods of Cuticle Remy hair extensions in over
                50 gorgeous colors.
              </p>
            </a>
            <div className="w-full flex justify-center items-center py-4">
              <button class="text-white w-[30%] bg-black/70 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                GET THE HAIR
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="relative"> */}
      {/* <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div> */}

      {/* <div class="relative w-full mx-auto max-w-screen-xl bg-black px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
              Let us find your
              <strong class="block font-extrabold text-rose-700">
                Important Products.
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white/60">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded bg-white/20 hover:bg-white/50 px-12 py-3 text-sm font-medium text-white/50 shadow hover:text-white focus:outline-none focus:ring sm:w-auto"
              >
                Go to Shop
              </a>

              <a
                href="#"
                class="block w-full rounded bg-white/20 hover:bg-white/50 px-12 py-3 text-sm font-medium text-white/50 shadow hover:text-white focus:outline-none focus:ring sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div> */}
      {/* </section> */}
    </div>
  );
};

export default Banner;
