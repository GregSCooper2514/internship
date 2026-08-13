import { Showrooms } from '@/components/showrooms';
import styles from './page.module.css'

export default function About() {
    return (
        <main className={styles.page}>
            <header>
                <h1>Contact</h1>
                <p>Get in touch with us, or visit one of our showrooms.</p>
            </header>
            <Showrooms />
            <section>
                <h2>Our Contact Details</h2>
                <a href="tel:+903123500303">+903123500303</a>
                <a href="mailto:bilgi@origamimobilya.com">bilgi@origamimobilya.com</a>
            </section>
            <section>
                <h2>Follow Us</h2>
                <p>Stay updated with our latest news and offers by following us on social media.</p>
                <a href="https://www.facebook.com/origamimobilya" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                <a href="https://www.instagram.com/origamimobilya/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://www.pinterest.com/origamimobilya/" target="_blank" rel="noopener noreferrer">
                    Pinterest
                </a>
            </section>
        </main>
    )
}