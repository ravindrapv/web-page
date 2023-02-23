import React from "react";

export default function ProcesFlow() {
  return (
    <div className=" mt-10">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-2xl text-blue-900 md:text-4xl text-center">
          How it Works
        </h2>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
          <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
          <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
        </div>
      </div>
      <div className=" px-8">
        <div className="container-3">
          <div className="card">
            <div className="title">Step</div>
            <div className="circle">1</div>
            <div className="content">
              <h3 className=" text-blue-900 font-bold m-2">SIGN UP</h3>
              <p>
                users can sign up to use your product. They're designed to
                capture the email addresses of visitors and make it easy for
                them to access your product
              </p>
              {/* <div className="icon flex justify-center  items-center">
                <CiLogin />
              </div> */}
            </div>
          </div>
          <div className="card">
            <div className="title">Step</div>
            <div className="circle">2</div>
            <div className="content">
              <h3 className=" text-blue-900 font-bold m-2">UPLOAD PROFILE</h3>
              <p>
                user have a profile that includes their name, telephone number,
                fax number (optional) and email address. Users should update
                this information Process Overview.
              </p>
              {/* <div className="icon flex justify-center  items-center">
                <CgProfile />
              </div> */}
            </div>
          </div>
          <div className="card">
            <div className="title">Step</div>
            <div className="circle">3</div>
            <div className="content">
              <h3 className=" text-blue-900 font-bold m-2">
                CLIENT FLOAT REQUIRMENTS
              </h3>
              <p>
                'Customer float' is defined as the span from the time of the
                deposit to the time the funds are released for use by the
                depositor. The difference between the bank float and the
                customer float is called 'negative float'.
              </p>
              <div className="icon">
                <i className="fab fa-js-square" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="title">Step</div>
            <div className="circle">4</div>
            <div className="content">
              <h3 className=" text-blue-900 font-bold m-2">TAKE INTERVIEW</h3>
              <p>
                to ask someone questions at a formal meeting to see if they are
                suitable for a job or a course: There were so many applicants
                for the job that we will be interviewing all wee
              </p>
              <div className="icon">
                <i className="fab fa-php" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="title">Step</div>
            <div className="circle">5</div>
            <div className="content">
              <h3 className=" text-blue-900 font-bold m-2">GET PAID</h3>
              <p>
                o get paid: to receive money for work completed, to receive
                wages. verb. Have you gotten paid yet? Did you receive your
                money from your boss?
              </p>
              <div className="icon">
                <i className="fas fa-database" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
