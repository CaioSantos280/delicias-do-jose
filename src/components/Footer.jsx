import {
  Phone,
  CakeSlice,
  Camera,
  Share2,
  Music,
} from "lucide-react";

import { STORE_CONFIG } from "../config/store";
export default function Footer() {
  return (
      <footer className="border-t border-[#3c2619] px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CakeSlice className="text-yellow-400" />
              <h3 className="text-2xl font-black">
                {STORE_CONFIG.name}
              </h3>
            </div>
            <p className="text-[#bca38f] max-w-sm">
              Bolos caseiros e piscininhas feitas pra impressionar no sabor e no
              visual.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-lg">Contato</h4>
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#cdb7a2] hover:text-yellow-400 block transition-colors"
            >
              (21) 99138-2676
            </a>
            <p className="text-[#cdb7a2]">deliciasdojose0@email.com</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-lg">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${STORE_CONFIG.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Camera size={20} />
              </a>
              <a
                href={`https://facebook.com/${STORE_CONFIG.facebook}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Share2 size={20} />
              </a>
              <a
                href={`https://tiktok.com/@${STORE_CONFIG.tiktok}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Music size={20} />
              </a>
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
       );
}