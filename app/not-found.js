import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Your requested Request Not found</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}