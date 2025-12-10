"use client"

import { cn } from "@/lib/utils"

interface MonitorNotificationProps {
  className?: string
  title?: string
  productName?: string
  productImage?: string
  logoImage?: string
  logoAlt?: string
  price?: string
  type?: string
  tcin?: string
  totalStock?: string
  cartLimit?: string
  accentColor?: string
}

export function MonitorNotification({
  className,
  title = "Target Restocks",
  productName = "Pokémon Trading Card Game : Charizard X ex Ultra-Premium Collection",
  productImage = "/P10448_10-10065-109_01.jpg",
  logoImage = "/float-4.png",
  logoAlt = "Target",
  price = "N/A",
  type = "Restock",
  tcin = "94681790",
  totalStock = "10+",
  cartLimit = "2",
  accentColor = "#ed4245"
}: MonitorNotificationProps) {
  return (
    <div className={cn("w-full max-w-xl mx-auto", className)}>
      <div className="relative group bg-linear-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl hover:shadow-xl hover:border-zinc-700/50 transition-all duration-300 hover:scale-[101%]">
        <div className="p-4">
          <div className="flex gap-4">
            <div className="w-1 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
            <div className="flex-1 min-w-0">
              <div className="flex flex-row justify-between">
                <div>
                  <div className="flex gap-3 mb-2 justify-center">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src={logoImage}
                        alt={logoAlt}
                        className="w-full h-full object-cover object-[center_35%] mt-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-white font-semibold text-sm block mt-1">{title}</span>
                    </div>
                  </div>
                  <h3 className="text-[#00a8fc] font-medium text-base hover:underline cursor-pointer leading-tight">
                    {productName}
                  </h3>

                </div>
                <div className="w-22 h-22 rounded-xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/30 shrink-0">
                  <img
                    src={productImage}
                    alt={productName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 space-y-3">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div>
                      <div className="text-[#9ca3af] text-xs font-semibold">Price</div>
                      <div className="text-[#d1d5db]">{price}</div>
                    </div>
                    <div>
                      <div className="text-[#9ca3af] text-xs font-semibold">Type</div>
                      <div className="text-[#d1d5db]">{type}</div>
                    </div>
                    <div>
                      <div className="text-[#9ca3af] text-xs font-semibold">Tcin</div>
                      <div className="text-[#d1d5db]">{tcin}</div>
                    </div>
                    <div>
                      <div className="text-[#9ca3af] text-xs font-semibold">Total Stock</div>
                      <div className="text-[#d1d5db]">{totalStock}</div>
                    </div>
                    <div>
                      <div className="text-[#9ca3af] text-xs font-semibold">Open In App</div>
                      <div className="text-[#00a8fc] hover:underline cursor-pointer">Click Me</div>
                    </div>
                    <div>
                      <div className="text-[#9ca3af] text-xs font-semibold">Cart Limit</div>
                      <div className="text-[#d1d5db]">{cartLimit}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
