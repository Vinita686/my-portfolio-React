import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/HeroImg/HeroImg";
import Form from "../Components/ContactForm/Form";
import Mailto from "../Components/Mailto/Mailto";

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
