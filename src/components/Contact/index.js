import React, {useState} from 'react'
import { validateEmail } from '../../utils/helpers'


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          } 
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

        return (
            <section>
              <h1>Contact me</h1>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input required type="text" name="name" onChange={handleChange} defaultValue={name} />
                </div>
                <div>
                  <label htmlFor="email">Email address:</label>
                  <input required type="email" name="email" onChange={handleChange} defaultValue={email} />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea required name="message" rows="5" onChange={handleChange} defaultValue={message} />
                </div>
                {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button type="submit">Submit</button>
              </form>
            </section>
            );
}

export default ContactForm
