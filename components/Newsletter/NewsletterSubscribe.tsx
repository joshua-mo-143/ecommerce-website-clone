import React from 'react'
import styles from './Newsletter.module.css'

type Props = {}

const NewsletterSubscribe = (props: Props) => {

    const submitSubscribe = (e: React.SyntheticEvent) => {
      e.preventDefault()
        return "Hello world!"
    }

  return (
    <div className={styles.newsletterContainer}>
        <p>Receive emails on all of our new arrivals and promotions.</p>
        <form onSubmit={submitSubscribe} className={styles.newsletterForm}>
            <input type="email" name="email" className={styles.newsletterInput}/>
            <button type="submit" className={styles.newsletterSubmitButton}>submit</button>
        </form>
    </div>
  )
}

export default NewsletterSubscribe