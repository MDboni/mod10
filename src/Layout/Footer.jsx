const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto border-t-1">
      <footer className="footer sm:footer-horizontal grid grid-cols-12 justify-center items-center bg-base-200 text-base-content p-10">

        <aside className="col-span-3">
          <img
            src="https://jobbox-html-frontend.vercel.app/assets/imgs/template/jobhub-logo.svg"
            alt=""
          />
          <p>
            JobBox is the heart of the design community and the best resource to
            discover and connect with designers and jobs worldwide.
          </p>
        </aside>
        <nav className="col-span-3 ">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="col-span-3">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="col-span-3">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
