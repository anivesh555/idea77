// (function (global) {
//     class MyLibrary {
//       constructor() {
//         this.session = null;
//       }
  
//       createNewSession(accountId, cookies) {
//         if (!accountId || !cookies) {
//           console.error("Missing accountId or cookies");
//           return;
//         }
  
//         // Store session details (Do NOT store sensitive data like passwords)
//         this.session = { accountId, cookies };
//         console.log("Session created successfully:", this.session);
        
//       }
  
//       getSession() {
//         return this.session;
//       }
//     }
  
//     // Expose an instance globally
//     global.MyLibrary = new MyLibrary();
//   })(window);

(function (global) {
    class MyLibrary {
        constructor() {
            this.session = null;
        }
        parseCookies(cookieString) {
            return cookieString.split('; ').reduce((acc, cookie) => {
                let [key, value] = cookie.split('=');
                acc[key] = decodeURIComponent(value);
                return acc;
            }, {});
        }
        setCookies(cookieObj, options = "path=/; Secure; SameSite=Lax") {
            Object.entries(cookieObj).forEach(([key, value]) => {
                document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; ${options}`;
            });
        }
       
        

        createNewSession(accountId, cookie) {
            if (!accountId ) {
                console.error("Missing accountId or cookies");
                return;
            }
            console.log("sd",cookie,"ccolei")
            // Store session details (Do NOT store sensitive data like passwords)
            const cookiesParsed = this.parseCookies(cookie)
            console.log('initial ',cookiesParsed)
            
            // const ObjectCookies = this.parseCookies(cookies)
            const cookieObject = {'onw':"cookies",'two':"cookies"}
            // ObjectCookies['naam'] ='tera naam'
            // const cookiesNew = this.setCookies(ObjectCookies)
            this.session = { accountId, cookies:cookieObject };
            console.log("Session created successfully:", this.session,'cookiiess ===',cookie);

            // Set cookies in the browser
            // Object.entries(cookies).forEach(([key, value]) => {
            //     document.cookie = `${key}=${value}; path=/; Secure; SameSite=Lax`;
            // });
        }

        getSession() {
            return this.session;
        }
    }

    // Expose an instance globally
    global.MyLibrary = new MyLibrary();
})(window);
