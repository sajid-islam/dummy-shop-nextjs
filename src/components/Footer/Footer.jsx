import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#15191b] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-white text-xl font-semibold tracking-wide">DUMMY SHOP</h3>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-[26rem]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make.
            </p>
          </div>

          {/* Account & Profile */}
          <div>
            <h4 className="text-white font-medium mb-4">ACCOUNT &amp; PROFILE</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Login</li>
              <li className="hover:text-white cursor-pointer">Profile</li>
              <li className="hover:text-white cursor-pointer">Order History</li>
              <li className="hover:text-white cursor-pointer">Track Order</li>
              <li className="hover:text-white cursor-pointer">Wishlist</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Categories</li>
              <li className="hover:text-white cursor-pointer">Brands</li>
              <li className="hover:text-white cursor-pointer">Sales &amp; offers</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms &amp; Conditions</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-medium mb-4">CONTACTS</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 mt-1 text-gray-400" />
                <div>
                  <div className="text-xs text-gray-400">Address</div>
                  <div className="text-sm text-white">Dhaka</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="w-4 h-4 mt-1 text-gray-400" />
                <div>
                  <div className="text-xs text-gray-400">Phone</div>
                  <div className="text-sm text-white">01974823943</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MailIcon className="w-4 h-4 mt-1 text-gray-400" />
                <div>
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="text-sm text-white">info@dummyshop.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              Copyright © 2025 dummyShop. All rights reserved.
            </p>
            <div className="text-sm text-gray-400">
              {/* place for small icons or legal links if needed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
