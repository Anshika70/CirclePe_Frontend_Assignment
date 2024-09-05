import Circle from '../Components/circle/circle.jsx';
import Phone from '../Components/phone/phone.jsx';
import Arrow from '../Components/arrow/arrow.jsx';
import AnimatedText from '../Components/text.jsx';
import Slidebar from '../Components/slidebar/slidebar.jsx';
import Phone_small from './phone_small.jsx';
import Text_small from './text_small.jsx';
import Rectangle from '../Components/rectangle.jsx';

function Step4() {
  return (
    <>
      <section>
        <div className="row m-0">
          <div className="col-lg-3 col-md-6 col-sm-6 p-0 d-flex justify-content-center">
            <Circle />
            <Phone_small />
            <Text_small/>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 p-0 d-flex justify-content-center">
            <AnimatedText  />
          </div>
          <div className="col-lg-1 col-md-12 col-sm-12 p-0 d-flex justify-content-center">
            <Arrow />
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12 p-0 d-flex justify-content-center">
            <Phone />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 p-0 d-flex justify-content-end">
            <Rectangle></Rectangle>
            <Slidebar />
          </div>
        </div>
      </section>
    </>
  );
}

export default Step4;
