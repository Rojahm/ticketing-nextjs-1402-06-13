import Link from "next/link";

function NotFound() {
  return (
    <div className="text-center mt-5">
      <h2 className="mb-5">404 🙈</h2>
      <h3 className="mb-3">Page Not Found - این صفحه وجود ندارد 🤷‍♀️</h3>
      <p>
        برگرد به <Link href={"/"}>صفحه اصلی</Link>
      </p>
    </div>
  );
}

export default NotFound;
