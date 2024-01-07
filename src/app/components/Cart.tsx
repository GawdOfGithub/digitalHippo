import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/app/components/ui/sheet";
import { Separator } from "chad/separator";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
const Cart = ()=>
{
    const itemsCount = 1
return (
    <>
<Sheet>
<SheetTrigger className="group -m-2 flex items-center p-2">
    <ShoppingCart
    aria-hidden='true'
    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-700"
    />
    <span>
        0
    </span>
</SheetTrigger>
<SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
    <SheetHeader className="space-y-2.5 pr-6">
        <SheetTitle>
            Cart(0)
        </SheetTitle>
    </SheetHeader>
    {itemsCount>0?(
        <>
        <div className="flex w-full flex-col pr-6">
         cart items
        </div>
       
        <div className="space-y-4 pr-6">
        <Separator/>
        <div className="space-y-1.5 text-sm ">
       <div className="flex">
        <span className="flex-1">
      Shipping
        </span>
        <span>Free</span>
       </div>
       <div className="flex">
      <span className="flex-1">
       Transaction Fee
      </span>
      <span>{formatPrice(100)}</span>
       </div>
        </div>
        </div>
       
        </>
    ):null}
</SheetContent>
</Sheet>
</>
)
}
export default Cart