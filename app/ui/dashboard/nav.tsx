import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function Nav() {
  return (
    <div>
      <Link
        href="/"
      >
        <div>
        </div>
      </Link>
      <div>
        <NavLinks />
        <div></div>
        <form>
          <button>
            <div>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}