import Link from "next/link";
import { useRouter } from "next/router"

export default function CoffeeStore() {
    const router = useRouter();
    return (
        <div>
            coffee store {router.query.id}
            <Link href="/">Back to home</Link>
        </div>
    )
}