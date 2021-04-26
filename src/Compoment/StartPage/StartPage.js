import React from 'react'
import "./StartPage.css";

export default function StartPage() {
  return (
    <div>
      <body className="img js-fullheight">
        <section>
          <div className="container-fluid ftco-section">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="login-wrap p-0">
                  <form action="#" className="signin-form">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Start Quizz
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}
