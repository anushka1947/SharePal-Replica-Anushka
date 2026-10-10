import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenAssetPartner: () => void;
  onOpenSupportChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAssetPartner, onOpenSupportChat }) => {
  return (
    <footer className="bg-[#050b18] text-gray-300 pt-14 pb-24 text-xs" data-purpose="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Category Links Multi-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-gray-800">
          {/* Col 1 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Action Cameras</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#top">Action Cameras</a></li>
              <li><a className="hover:text-white transition" href="#top">Pocket Cameras</a></li>
              <li><a className="hover:text-white transition" href="#top">GoPro Cameras</a></li>
              <li><a className="hover:text-white transition" href="#top">DJI Cameras</a></li>
              <li><a className="hover:text-white transition" href="#top">DJI Drones</a></li>
              <li><a className="hover:text-white transition" href="#top">360 Cameras</a></li>
            </ul>
          </div>
          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Cameras</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#top">DSLR Cameras</a></li>
              <li><a className="hover:text-white transition" href="#top">Cameras</a></li>
              <li><a className="hover:text-white transition" href="#top">iPhones</a></li>
              <li><a className="hover:text-white transition" href="#top">DSLR Gimbal Combos</a></li>
              <li><a className="hover:text-white transition" href="#top">Wildlife Photography</a></li>
              <li><a className="hover:text-white transition" href="#top">Tripod and camera accessories</a></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Trekking Gear</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#top">Trekking Gear</a></li>
              <li><a className="hover:text-white transition" href="#top">Trekking Jackets</a></li>
              <li><a className="hover:text-white transition" href="#top">Trek/Snow Pants</a></li>
              <li><a className="hover:text-white transition" href="#top">Trekking Shoes</a></li>
              <li><a className="hover:text-white transition" href="#top">Trek Accessories</a></li>
            </ul>
            <h4 className="text-white font-bold text-sm mt-6 mb-3">Winter Wear</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#top">Snow Boots</a></li>
              <li><a className="hover:text-white transition" href="#top">Winter Jackets</a></li>
              <li><a className="hover:text-white transition" href="#top">Backpacks</a></li>
            </ul>
          </div>
          {/* Col 4 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Riding Gear</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#top">Riding Gear</a></li>
              <li><a className="hover:text-white transition" href="#top">Riding Luggage</a></li>
              <li><a className="hover:text-white transition" href="#top">Riding Jackets</a></li>
              <li><a className="hover:text-white transition" href="#top">Riding Essentials</a></li>
              <li><a className="hover:text-white transition" href="#top">Riding Boots</a></li>
              <li><a className="hover:text-white transition" href="#top">Binoculars</a></li>
            </ul>
            <h4 className="text-white font-bold text-sm mt-6 mb-3">Camping Gear</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#top">Camping Gear</a></li>
              <li><a className="hover:text-white transition" href="#top">Camping Stools &amp; Tables</a></li>
              <li><a className="hover:text-white transition" href="#top">Camping Tents</a></li>
              <li><a className="hover:text-white transition" href="#top">Sleeping Bags &amp; Mats</a></li>
            </ul>
          </div>
          {/* Col 5 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Creator Gear</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#top">Wireless &amp; Collar Mics</a></li>
              <li><a className="hover:text-white transition" href="#top">Professional Cameras</a></li>
              <li><a className="hover:text-white transition" href="#top">Mirrorless Cameras</a></li>
              <li><a className="hover:text-white transition" href="#top">UNLMTD Vlogging</a></li>
              <li><a className="hover:text-white transition" href="#top">Mobile Gimbals</a></li>
              <li><a className="hover:text-white transition" href="#top">Vlogging</a></li>
            </ul>
            <h4 className="text-white font-bold text-sm mt-6 mb-3">Gaming Console</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white transition" href="#top">PS5 Games</a></li>
              <li><a className="hover:text-white transition" href="#top">PS5 Console</a></li>
              <li><a className="hover:text-white transition" href="#top">VR</a></li>
              <li><a className="hover:text-white transition" href="#top">Racing Wheel</a></li>
              <li><a className="hover:text-white transition" href="#top">Xbox Console</a></li>
            </ul>
          </div>
        </div>

        {/* SEO Editorial Info Section */}
        <div className="py-6 border-b border-gray-800 text-[11px] text-gray-400 leading-relaxed">
          <h5 className="text-white font-semibold mb-1">Renting from SharePal in Bangalore</h5>
          <p>
            Discover the convenience of renting from SharePal, your trusted partner in Bangalore for all your rental needs. Whether you're exploring the vibrant streets of Koramangala, setting up a shoot in Indiranagar, or planning a trek from the outskirts of Whitefield, SharePal has you covered. We offer a wide range of products, including cameras, action cameras, gaming consoles, projectors, speakers, trekking gear, riding gear, and creator gear. With free home delivery and pickup services, flexible rental tenures, and an easy-to-use platform, renting has never been easier. Experience the freedom to rent what you need, when you need it, without the commitment of buying.
          </p>
        </div>

        {/* Corporate Sub-Footer Links */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-5 gap-6">
          <div>
            <div className="text-xl font-black text-blue-500 mb-3">
              Share<span className="text-lime-400">Pal</span>
            </div>
            <ul className="space-y-1.5 text-gray-400">
              <li><a className="hover:text-white" href="#top">About</a></li>
              <li><a className="hover:text-white" href="#top">Why SharePal</a></li>
              <li><a className="hover:text-white" href="#top">Sitemap</a></li>
              <li><a className="hover:text-white" href="#top">CarePal</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-3">Become a Pal</h5>
            <ul className="space-y-1.5 text-gray-400">
              <li><a className="hover:text-white" href="#top">Sharepal for Creators</a></li>
              <li><a className="hover:text-white" href="#top">Careers</a></li>
              <li><a className="hover:text-white" href="#top">Sharepal for Brands</a></li>
              <li>
                <button
                  onClick={onOpenAssetPartner}
                  className="hover:text-white flex items-center gap-1.5 text-left cursor-pointer"
                >
                  Asset Funding Program <span className="bg-lime-400 text-black text-[9px] px-1 rounded font-bold">New</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAssetPartner}
                  className="hover:text-white flex items-center gap-1.5 text-left cursor-pointer"
                >
                  Rent Your Gear <span className="bg-lime-400 text-black text-[9px] px-1 rounded font-bold">New</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-3">Information</h5>
            <ul className="space-y-1.5 text-gray-400">
              <li><a className="hover:text-white" href="#top">How it works?</a></li>
              <li><a className="hover:text-white" href="#top">FAQs</a></li>
              <li><a className="hover:text-white" href="#top">Verification</a></li>
              <li><a className="hover:text-white" href="#top">Cancellation Policy</a></li>
              <li><a className="hover:text-white" href="#top">Life at SharePal</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-3">Policies</h5>
            <ul className="space-y-1.5 text-gray-400">
              <li><a className="hover:text-white" href="#top">Terms &amp; Condition</a></li>
              <li><a className="hover:text-white" href="#top">Shipping Policy</a></li>
              <li><a className="hover:text-white" href="#top">Damage Policy</a></li>
              <li><a className="hover:text-white" href="#top">Terms of Use</a></li>
              <li><a className="hover:text-white" href="#top">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-3">Need Help</h5>
            <ul className="space-y-2 text-gray-400">
              <li
                onClick={onOpenSupportChat}
                className="flex items-center gap-1.5 cursor-pointer hover:text-white text-blue-400 font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact Support</span>
              </li>
              <li>
                <button onClick={onOpenSupportChat} className="hover:text-white text-left cursor-pointer">
                  Live Chat / WhatsApp
                </button>
              </li>
              <li className="text-blue-400 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:care@sharepal.in" className="hover:underline">care@sharepal.in</a>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-4 text-gray-400">
              <a aria-label="Facebook" className="hover:text-white" href="https://facebook.com" target="_blank" rel="noreferrer">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
              <a aria-label="Instagram" className="hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a aria-label="LinkedIn" className="hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between text-gray-500 text-[11px] gap-3">
          <a
            className="hover:text-white flex items-center gap-1 cursor-pointer"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Go up ↑
          </a>
          <div>© 2026, SHAREPAL Kiraya Services Pvt Ltd</div>
          <div>Made with ❤️ in India</div>
        </div>
      </div>
    </footer>
  );
};
