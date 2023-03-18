import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/HeroImg/HeroImg";
import Form from "../Components/ContactForm/Form";

function Contact() {
  return (
    <div >
    <Navbar />
    <HeroImg heading="CONTACT." text="Write an Email or fill in the form below." />
    <Form />
    <Footer />
    </div>
  );
}

export default Contact;
