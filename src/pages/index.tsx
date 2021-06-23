import React, { useState } from 'react';
import { Animated } from "react-animated-css";
import { Tween, Reveal } from "react-gsap/dist/react-gsap.cjs.development";
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import ContactModal from "../components/contact-modal/ContactModal";
import ThankYouModal from "../components/thank-you-modal/ThankYouModal";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerStateType } from "../store/reducers/root.reducer";
import { hideThankYouMessageAction } from "../store/actions/retailer-subscription.actions";
export default function homepage() {

  const dispatchAction = useDispatch();
  const [showShareModalPopup, setShowShareModalPopup] = useState(false);
  const handleCloseContactModalPopup = () => setShowShareModalPopup(false);
  const handleShowContactModalPopup = () => {
    console.log("aaadasdasdasd")
    setShowShareModalPopup(true);
  };


  const showThankYouMessage = useSelector(
    (state: RootReducerStateType) =>
      state.RetailerSubscriptionData.showThankYouMessage
  );
  const handleClose = () => dispatchAction(hideThankYouMessageAction());
  gsap.registerPlugin(TextPlugin);
  return (
    <main className="main-content business">
      <section className="section-block business-banner">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="text-block">
                <div>
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    animationInDuration={500}
                    animationOutDuration={500}
                    isVisible={true}
                  >
                    <h1 className="block-title">Shopping everywhere</h1>

                  </Animated>

                  <h4 className="block-description">
                    Consumers love to shop when they are inspired.
                      </h4>



                  <h5 className="block-sub-description">
                    We help you to get your products in front of consumers,
                    at the moment they are inspired to shop.
                      </h5>
                  <a onClick={() => console.log("aaaaa")}>TEST LINK</a>
                  <button
                    className="btn btn-skyblue rounded btn-large mb-lg-5 mb-4"
                    onClick={() => handleShowContactModalPopup()}
                  >
                    Get Started
                        </button>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="business-banner-animation-wrapper">


                <div className="banner-search-products">
                  <Reveal>
                    <Tween
                      from={{ opacity: 0, scaleX: 0.4, scaleY: 0.4 }}
                      to={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                      duration={0.4}
                      delay={2.0}
                      ease="elastic.out(0.7, 0.3)"
                    >
                      <div className="banner-search-product1" />

                    </Tween>
                  </Reveal>

                  <div className="banner-search-product2" />


                  <div className="banner-search-product3" />


                  <div className="banner-search-product4" />

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
      {/* shopping everywhere Block Start */}
      <ContactModal
        show={showShareModalPopup}
        onClose={() => handleCloseContactModalPopup()}
      />
      <ThankYouModal show={showThankYouMessage} handleClose={handleClose} />
    </main>


  );
}
