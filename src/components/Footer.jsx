import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Shop at:{" "}
            {/* <span className="underline text-blue">Find an Apple Store </span> */}
            <a
              className="underline text-blue"
              href="https://www.apple.com/in/store?afid=p238%7CsmbyYqzVH-dc_mtid_187079nc38483_pcrid_719882393257_pgrid_112258962187_pntwk_g_pchan__pexid__ptid_kwd-420715284473_&cid=aos-IN-kwgo-brand--slid---product-"
              target="_blank"
            >
              Apple website&nbsp;
            </a>
            or <span className="underline text-blue">Any Apple store</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            ♡built out of passion by devikamjnambiar
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
