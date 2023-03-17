import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/HeroImg/HeroImg";
import Form from "../Components/ContactForm/Form";

function Contact() {
  return (
    <div >
    <Navbar />
    <HeroImg heading="CONTACT." text="Fill the form or write an Email." />
    <Form />
    <Footer />
    </div>
  );
}

export default Contact;
