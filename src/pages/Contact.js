import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg from "../Components/HeroImg";
import Form from "../Components/Form";
import Mailto from "../Components/Mailto";

function Contact() {
  return (
    <div >
    <Navbar />
    <HeroImg heading="CONTACT." text="Write an Email or fill in the form below." />
    <Mailto label="Write me an Email here" mailto="mailto:yadav.vinita@gmail.com" />
    <Form />
    <Footer />
    </div>
  );
}

export default Contact;
