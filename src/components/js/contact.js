import react from "react";
import '../css/contact.css'

function Contact()
{
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:');
      }   
    return(
        <>
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>For any inquiries related to our app, technology, or distribution partnerships please contact us below.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="name" placeholder="Full Name" required />
                </div>   
                <div className="form-group">
                <input type="text" name="name" placeholder="Email"required />
                </div>    
                <div className="form-group">
                    <input type="text" name="affiliation"  placeholder="Affiliation (optional)" />
                </div>
                <div className="form-group">
                    <textarea name="message"  placeholder="Message" required  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
                </form>
            </section>
        </>
    )
}

export default Contact;