/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
export default function Testimonials() {
  const [setSwiperRef] = useState(null);
  return (
    <>
      <section className="my-8 dark:bg-gray-800 dark:text-gray-100 bg-slate-100 py-8 px-12">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-2xl text-blue-900 md:text-4xl text-center">
            What our customers are saying about us
          </h2>
          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
            <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
            <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <Swiper
            onSwiper={setSwiperRef}
            breakpoints={{
              600: { slidesPerView: 2 },
            }}
            slidesPerView={1}
            centeredSlides={true}
            loopedSlides={4}
            loop={true}
            spaceBetween={30}
            pagination={{
              type: "el: '.swiper-pagination'",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2 h-fit image-w">
              <div>
                <div>
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900  ">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-orange-500"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      It was great to speak to you about the full stack
                      developer role and I'm convinced that the position is a
                      perfect fit for this stage in my career. recruitment
                      process, so any information would be greatly appreciated.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-orange-500"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-sky-400 dark:text-gray-900">
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRYZGBgYGRgYGBgVGBgYGhgYGBgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQkJCQ0NDQ0NDE0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ/NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xAA5EAACAQIEAwUHAwMEAwEAAAAAAQIDEQQSITEFQVEGE2FxgSIykaGxwfBy0eFCUpIHFWKCFCOiM//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIhEBAQEBAAICAwEAAwAAAAAAAAERAiExAxJBUWFxBDJC/9oADAMBAAIRAxEAPwDaUIE6nSGcNEsaUDk6Wm40haokqMBSgVnUPuQ7km5Qyg1C7k73RMyBlBqH3Qd0TMoZQah90HdEzKGQGoXdB3JNyBkBqF3Id0TcgZAahd0Dok3IGQGoXcg6JMyBkBqF3IdyTcgZAag9yc7gn5Dndg1B7gblQLLuxMoA1T1aJXYmmaCrAqcXAlalVGUB2yAjWrzClnRRV4RlrRNMVIihaiJgOlQnKGUUACcoZRQAJyhlFAAnKGUUACcoZRQAJyhlFAAnKGUUACcoZRQAJyhlFAAnKGUUACHEbkh5iJgQq6KjGlzXKXHvczVisARmAmxtdYNlvQKbBMuKBpipcBwbgOFQAAAAAAAcbKTi/HYQjKMGpS20s4p+fNmHx3aWU04uo3ZXabul6IuGNlx/tHTpRywmpTbs8utlrfXa+xUYDtdld5yzxb1XOPWxg8TVlN6bddtPAiSvspL7LzLIV7pguJUqqThNSvy5/AmHhWB4rKnbJJ5ls07W/Y9L7LdrIYhZKjUaiXlGfl4+BLBqgACAAAAAAAAAAAAAABuYtiJgQ8QUePZd4goeIvczV5VXeMBrMdMujQYJlzQKTAlzQNudTYDg3AcKgAAA5KSSu9EtWzI8d7URScIaXdnO/LysWfazGd3QaTtKbUV5byf51PLcTVTlbd30/cLzNScXiGouTd+nmVNB3Wa178tF6lpTw0qrUbfwWs+AWgkmPtjp9dZDFVW9LadCL3rWl0l0NLU7PSbIWM7OTjrFFnfKX46pozh1a8tUS6XEHBrw2f8AK2IWJwM4e8mRo1ZJ2fzNeK52WPWeynbC6UK2uuk1yWiSat+XN5GSautUz51w2KlF3jsuTPV/9P8Aj3exlRm/airwvzj/AFL0evr4GLEbUAAKAAAADlzlwhQCcxxyLhrrG5CnIZnIYajYlme4nLRl3iZaGc4pLRkvK81U5/ECNcDGOmtjgUXOHKXA8i6w5Yx0mQHRqA6aQAAAYX/UTO5UUvdanr43V/lYzvBuGxc459eZvu19NOgnbWM1Z9Lp/wAGT4c7zVvUVvhd0cFCGsYpHZyQucyNNGK3HJyQ1OSYqcWMyizFrpIaqYWEvein5jE+F0LWcIv0JTgyPODRNMQsTwGlKLyq19U+afgQ+ysu5xMHF/1qEl+r2fo2W0q1kUvBpqeNpq9r1YP/ABd39Dpz1tcvk5ya9kuFxNwudMcddbOXONnMwxNdC4nMcci4hTZy425iXMuGnGxqpI45DFSQEbFS0M1xapoy9xczLcVejJWoqu+QEcDGNPQMByLvDlJgeRd4ckOkyI6NRHTSAAACp7S0nLDTtvG0v8Wm/lcy3BaHsufi0i74zx6MaksPlu3HVvZ5lt4OzKzBLLQ8by+tiWx055snn8muIcXpUveld9I6lW+1WH3bcV1ZR8QvOp3cYXlJ6X5+b5LfVvyTM/PBuc+7UYZ9U4xbbTSu020ly6knlqzHoGG7RYeesZ/FWJv/AJsGrp3PN8LweV8rTXXdGojgJQo3T5HHrx6dued9rXEcapQ96aRWz7TYd/1X8jDY6jOTejevjz+oxhMKnJQy3m5OOW8VK6bT0crrVPexvnnZtrPVy5HoFPHU6qbpyTtuufnYT2TwD/3GD3iozqPw0cU/i0ZLANRq5UpQnF6p3PSOzmKo0ZzrVJZW4QhG60UdZybey1cfgXnJ059b1y3zkcuNQqKUVKLvGSTTXNNXTOuZ3eYsSxDmIlMoeG5zExbYlgdbOOQSEZSDuZHKrVjmURUCRAxjujMcVjozS4qRmOKz0Znqt8qPKAjMBlp6HguRd4cosG9i5w8hIdJ8WOZiOpCnI1IycudUhjMdzGsRle0+FcK/fpXzQUfWLs/k18xeFhelDxV366lzxylnpW530+DT+TZT0pZIKN720OHUy16Jd5n8QsVg73siknwqeZtWTe7S1fm+ZqXNMYnJIxrpyp6HC7FhjcMu7cfAl4aObW2g/XgrWJZ4X7eWHXDlf8+KGo8JlGeeMVn/ALrLNqrN3fM0VWhlba1S3Habi0SWuly+VPhOEq+aavJ7t6v4iOK4XM1BLWSSj0vmsi7qVUkK4Lhu8rxm17MPab8V7q+Lv6CT7XGbc8/psMLSyQhBO+SMY/4pL7DjbEHFJ8j2PAW34IQ5eB3P1sJzrmmvJ/uEczoMy6hkX9y9dDjpPpfy1+hAq3ihEkxtoQ4+LAdcWNVUdU5LmNzxE+YMV+KiZziU0k9LmnxuKj0uZni1aDT0sS+m+YoO+f8AavggDPDq/mBjW29wPIuaD2KHBT2LajU2OkYqxctDikNKbsLTLrJy4ZhvMdiQxVcexjjkiuTcn9PuynWKzfE0fEcFCdOUpL2orR3MfJZG1fQx09PF5vP9id3w2p5nrsRFWvoUPEuMOFRxvtslr8jhltdJci94ziqsVHJUjCK3TV2/JlVX7QTy+8myA8XGa1vL0f2IrowtJKnJ3/4yFk/LfMv6WfCMdUnNudRZf7f5LqddLZmMnCUFpSmv+sl9RmhxCopK6a/UPrvots9tZicV0Zr+ydNKip31m38Itr7HnFfEeJ6lwWi4UKcHuoRv5tXfzbN/Fzl1w+brxiwchLkcONHoeUNnbHAuUcBN8jjYXAX3z52f6lf57nM8XvFr9L+zEAAtwi9pf5Jr5oaq0Jctf06/QGNTbRMFdjUktdPMw3H8atUtDT9osfPLkUtFq29fRHm/FcRe5mxvlG/8p9QK3MdI1r2LATb2LvDQfNlJgORd4aQlZqfEcuMRHYWL7QqKE1sRCHvSSfJc/gM4zGRpxu9XyS5mPxuOm5ZpePL7mO+/r4VfY/jcMkoa67vy5WM1hcfSrucIOWZJ2vG2sH18Sux9fNB2/lehC7KTbqycYPIlJOcm7ym3rGEdrLW7OfPV6u1vi31E/vWm/h5EGnCEq2aXoT+K09XKO/PxM9Kt7a12NZrtbea1U8UoK65a6FViO0qTss9/JjmHxUWlm1GZzhduyuvLfqYzPbpOv0XTxLqa2a8yHxSpCMbK1xVbiMYaJLRbfUznEcbmba6NvwS3Zeedusd/JkaTsrw6eKrx0/8AXBqVSXKyd1Dzla3lqewXPM+x/HVQhCEYpwm5Obtad7XzX/q2tZ9T0inVUoqUXdNXT8Dvxeb6eXq2+ztzjEOR25tgNnLhcAABLYJgKEthcGBxsZqsckiHxGbjBsisZ2jxd5NIwfE6m76uyNRxKd5SlyX1MZxSeqXQjaLnYDdwA9rwM9i5w8yhwEti9wxziVOgx9SIM68Yq8mkurdivxvG4ZcsJp38bFvUgz/avh7xFab7yUUqcY0pRm0s93mbUWm1sVODxU1GMauaM0sslJuzadrxl/Un8R7G4iUZOS9qDeqW68URK9SM423T0v8Aujh1bfYlyd+fz5+uoihPJ5eHjuVEVOOkk5pe7NXbtfZ8yVBNK7dl48/InpeevrdXFSspozvEsI27xdpdV4dVzHoYlxfgPZ82w+1nmPbzee4zFXE1oPWLa6xuyNPidRvSMvgzUzprmiPLCx5fQ6T5Z+Yzfh/VZ6nRxE+WVdZO3y3LDiODjQw02tZzypye+rSduitctcNS16lb2sqf+tR6v6Cd29SM9fHOebfyi4GcpUI2bUk5ZWnZp5XJP/5+Z6l/p7xeVWkoTftZVLXnyfx0Z5bg5exSjHdRcp/4SUU/ibHhVTuYwadrZV8WkS9fXrXknl6k0cuUuG44npJeqLGjjYT2kvJ6Hbn5OevVSxKuDG7ncx0QSudA4B0BuUmhWYK6ym7RVctPzLeTMx2pq3cYerJVjHY95abfOTMVjXq2bDtDOyUfAxmKItR7gJuAHq+D4xDKns/HkSK/E529lu75t2Xo0YzA4lXy8uj205FvQxLWienjrZnlurVlUx85NKblF9Yu6fnumVPEozm3HNHe6tHLK36tV12sSp4hTja1muXiNRkpxs91t+xJRDpY+cfZnr4/uKnBP2qbSvuuT9ByNCL335sTPCpawllfyY1JqBVxM1pO6frb0a+4mNSW/tPzaf3Jc8Rl0qxtyT3i/U5LDx3g/G3Jl3+JTSn8fHf4CXWnB6axfLo/2E1JNbq3n+405/nTxGLz1efMqwhjU99PMcz+RUwxUbuMveW6+5JhOOhm849PH/Iv/pa0o6XM3xz26iVrpK7X0RdPFaWTXqQatDNJysnfpJt+iHPi6vy/Nz1zkNcKw7UvaWsn8EvxIvcRNSTiuVn6pp/Yq8O3d5vYjpq2s87bRjFP2V4ssaDTu9la3kuXysOvN15YvMNUvFeS+g/GpbVMq6VXQX3jZhWk4dxjK0pO8fmjQ5ua2PN51rWNZ2U4n3kJ0371PLbxhNafBqS+B6Ph7v8A1qdReqoByUBLkelk7mONDMtdgjNrcByUjI8Xnnqy6JpfDc1cppq5j8RPWcvP4szWox3aGd5sy2JL/i87zbKHEAqFYDoAXFCpeSsW0MRlSfLRP15/nUoaM+ZZ0Z3i11/PqcOoq07xp5k9x6c9pL1IGBq3jbn4j0Z2dnszFgnKabXRjk4QKqM7ScG9N0PSrS5/IliQutT6arbK9UVcqMk70201vCV/k+RM71jNXqt9yzwGf9x0tUjtz6eoicYS1hP0l+ajmeMtJLX5kWvg3HWGhqZ/gbxVNZc0ou65x3t4NfRjNOrO14NTj4e96odhipR96Ca6r7oRUo0Ze0vYk+cZW18tjc/rJdLiCbs7p9Ho/LXYZrVZt6tQXRu8n5RRGq3vpOM1/wAlr8bHY1nHay/Qkn/luPrPwq1wFNJ7O/Ny1aXlyLuhLNy0Xzf7GbwFWU3lskr69fV8zSYeNjl3MqxPgO5iPBjmY5Kj46by38SV2Txjhj4LlUhKD9Fnj818yux8vZfoQuFYi2OwrXKcF6OaT+p1+OedSvbWR5xfIksD2MokKbY8qfUcQSYEbExajLpZmPxVlCTfN3Nfj5+xLyt8TFcZqZacmZrUYjiE7yZTYmV0TMXUu3crK89bcgI4HQCJk9NSThq9miPBZlZkdTal5HPNVoKUss/B6/Emy/PMrMNPNFPmr7E6lVurczl0hGKg3HMvejr5x5oXgcUpxSf5YS6lufMg4mDhLPH3Za+T5lk2Yq5nSGHGxzCYpSSvuSJq63MXx7P8QMTTa1E0K/8ATIkzjyIOJo2d/wA8TUy+Cz8ncRg7+6/z8sVWJwEo6/li1weI/pY7XWnh+eJqW80U2EwSmtywhw1Ll8SNgamSco8nt5MtM99uQ7tlTFdhlkq5dr7fnwNFTlZGc4hB+8t1qWuBxanBMz3NkqxZwmPNkSExxT5HLFR+Ku0PVFPw6uo4unN+7CcJPyjKLf0ZZcXn7G/NfczlCftzl6fY7cTxrNfRUJimVfCsXno05/3QhL4xT+5OhUVtz0wPIVcbz3EuZQ1xBXhPyb+Gp57xbWEoO9m7+dtbHolTVNPmmjz3i07brXZ+a0fzM1Yy2JoR/pKLH0raov8AEVUn5+BVY2KYWxU5QJPdrqA1MFKYjFR1uMwmSE01Yz6qFYDFZXbkWcKuu5n5KzJFHEGeud8qvpVLoSp5ouLt/JCp19A7wxihTcJFjRxV1+ciuryvr8SNCrZlvOp6XsqozUn1IUcQddUn1Umbyu5MhVUkQKkxujUsWzYheM0kpLy/YnYatoV2JldMMLWui2byLWbTRBwdXJNx5PVHe9IuL19roTmfgaKGJFKuUmGxN0h/vzF5w9pfEa14eqf1KLDz9lvq/wCR/HYn2GurSIUZWSR055yFex9lsY5YWltpDL/jJx+iLuniep592Vx6WHjFvZy+bv8Acv48R67dTpL4XNauGJOvEGYfEvEcXEV1L9j6tC65h+08LTl4vMv+2/zTLj/cPEpO0k88My3jv5P+bE1ZGRxm7vMralVbXuP1a3wIdWd+aKgzrqAxZ9QB5MMk0wAzWTWI94bpgA/Cp1AVL9gAyX0cj9v3Iz3ABAuAuJ0AEvYa5gACp/nzG8LzOgWeqHjk9gAzPamsHsyYwAvXtIhYzZfq+zG3+wAanoans7/+f/Z/Yu37r8vuABqOr3WOUNvgABT0CNxD3J/pf0ACwYbEEIAKzXQAAP/Z"
                      alt=""
                      className="w-32 h-32 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700"
                    />
                    <p className="text-xl font-semibold leading-tight mt-4">
                      Venkatarvindra p v
                    </p>
                    <p className="text-sm uppercase">Full stack developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2 h-fit">
              <div>
                <div>
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900 ">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-orange-500"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      Identifying the right candidate remotely took a lot of our
                      time, considering how each seemed to have different levels
                      of skills and expertise. Geeha tec solutions helped us
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-orange-500"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-sky-400 dark:text-gray-900">
                    <img
                      src="https://www.cliqhr.com/Yusuf-white-small.jpeg"
                      alt=""
                      className="w-32 h-32 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700"
                    />
                    <p className="text-xl font-semibold leading-tight mt-4">
                      Yusuf Aslam
                    </p>
                    <p className="text-sm uppercase">ux designerr</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2 h-fit">
              <div>
                <div>
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900 ">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-orange-500"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      Identifying the right candidate remotely took a lot of our
                      time, considering how each seemed to have different levels
                      of skills and expertise. Geeha tec solutions helped us
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-orange-500"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-sky-400 dark:text-gray-900">
                    <img
                      src="https://www.cliqhr.com/files/team%20photos/pravallika-photo-1.jpeg"
                      alt=""
                      className="w-32 h-32 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700"
                    />
                    <p className="text-xl font-semibold leading-tight mt-4">
                      Pravallika G
                    </p>
                    <p className="text-sm uppercase">
                      Specialist Recruiter - Salesforce
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-2 h-fit">
              <div>
                <div>
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900 ">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-orange-500"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      We have always believed in hiring talent on merit rather
                      than resumes. When we started our global recruitment,we
                      were clear on including assessments to evaluate skills and
                      shortlist candidates.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-orange-500"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-sky-400 dark:text-gray-900">
                    <img
                      src="https://www.cliqhr.com/files/team%20photos/raniya-saif.JPG"
                      alt=""
                      className="w-32 h-32 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:bg-gray-700"
                    />
                    <p className="text-xl font-semibold leading-tight mt-4">
                      Raniya Saif
                    </p>
                    <p className="text-sm uppercase">Recruitment Head - IT</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
