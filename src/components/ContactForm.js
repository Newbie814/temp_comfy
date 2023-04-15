// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm('mwkjwvkl');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <input
        id='email'
        type='email'
        name='email'
        className='form-input'
        placeholder='enter email'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <button type='submit' disabled={state.submitting} className='submit-btn'>
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
