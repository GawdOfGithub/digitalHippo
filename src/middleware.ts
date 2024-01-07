import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: [
    
    
  '/',
  '/Test'
  
   
    
  
  ],
  debug: false,
  ignoredRoutes:[
    '/api/webhook' 
  ],
});

 
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    
    "/(api|trpc)(.*)",

    
  ],
};
 